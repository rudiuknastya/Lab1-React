import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Movie from './components/Movie/Movie';
import {aToZ} from './App'

test('open and close dropdown menu', () => {
  const {container} = render(<App />);
  const sortDiv = screen.getByTestId('sortDiv');
  fireEvent.click(sortDiv)
  expect(container.getElementsByClassName('dropdown-menu active')).toBeInTheDocument;
  fireEvent.click(sortDiv)
  expect(container.getElementsByClassName('dropdown-menu inactive')).toBeInTheDocument;

});
test('show movie card', () => {
  render(<App />);
  expect(render(<Movie />)).toBeInTheDocument;

});



