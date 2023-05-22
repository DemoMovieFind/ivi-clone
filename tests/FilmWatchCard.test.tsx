import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import TestWrapper from './TestWrapper';
import FilmWatchCard from '../src/components/filmWatchCard/FilmWatchCard';


describe('Test FilmWatchCard', () => {
  beforeEach(() => {
    TestWrapper(<FilmWatchCard />)
  })

  test('check render correct title', () => {
    const filmWatchCardTitle = screen.getByTestId('film-watch-card-title');
    expect(filmWatchCardTitle).toBeInTheDocument();
  })
})