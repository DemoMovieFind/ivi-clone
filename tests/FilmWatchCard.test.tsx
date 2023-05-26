import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import FilmWatchCard from '../src/components/filmWatchCard/FilmWatchCard';
import ComponentWrapper from './ComponentWrapper';


describe('Test FilmWatchCard', () => {
  beforeEach(() => {
    ComponentWrapper(<FilmWatchCard />)
  })

  test('check render correct title', () => {
    const filmWatchCardTitle = screen.getByTestId('film-watch-card-title');
    expect(filmWatchCardTitle).toBeInTheDocument();
  })
})