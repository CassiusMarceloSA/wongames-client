import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import GameCard from './GameCard';

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00',
  promotionalPrice: 'R$ 200,00'
};

describe('<GameCard />', () => {
  it('Should render GameCard component', () => {
    renderWithTheme(
      <GameCard
        title={props.title}
        developer={props.developer}
        img={props.img}
        price={props.price}
      />
    );

    expect(
      screen.getByRole('heading', { name: /population zero/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /rockstar games/i })
    ).toBeInTheDocument();

    expect(screen.getByAltText(props.title)).toBeInTheDocument();

    expect(screen.getByText(props.price)).toBeInTheDocument();
  });

  it('Should render price in label', () => {
    renderWithTheme(
      <GameCard
        title={props.title}
        developer={props.developer}
        img={props.img}
        price={props.price}
      />
    );

    const price = screen.getByText(props.price);

    expect(price).not.toHaveStyle({
      textDecoration: 'line-through',
      color: '#8F8F8F'
    });

    expect(price).toHaveStyle({
      backgroundColor: '#3CD3C1'
    });
  });

  it('Should render with promotional price', () => {
    renderWithTheme(
      <GameCard
        title={props.title}
        developer={props.developer}
        img={props.img}
        price={props.price}
        promotionalPrice={props.promotionalPrice}
      />
    );

    expect(screen.getByText(props.price)).toHaveStyle({
      textDecoration: 'line-through',
      color: '#8F8F8F'
    });

    expect(screen.getByText(props.promotionalPrice)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    });
  });

  it('Should rendar a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />);

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
  });

  it('Should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn();

    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />);

    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(onFav).toBeCalled();

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
  });

  it('should render Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    );
    const ribbon = screen.getByText(/my ribbon/i);

    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' });
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' });
    expect(ribbon).toBeInTheDocument();
  });
});
