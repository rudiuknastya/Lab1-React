import { render, screen, fireEvent } from '@testing-library/react';
import Movie from './Movie';
import Modal from '../Modal/Modal'

test('check modal is closed', () => {
    render(<Movie />);
    expect(render(<Modal />)).toBeNull;
  
});
test('open and close modal', ()  => {
    render(<Movie />);
    const movieCard = screen.getByTestId('movieCard')
    fireEvent.click(movieCard)
    const modal = screen.getByTestId('modal')
    expect(modal).toBeInTheDocument;
    const exit = screen.getByTestId('exit')
    fireEvent.click(exit)
    expect(render(<Modal />)).toBeNull;
});
