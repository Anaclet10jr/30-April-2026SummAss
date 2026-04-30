import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders patient booking flow', () => {
  render(<App />);
  expect(screen.getAllByText(/CareFlow Patient/i).length).toBeGreaterThan(0);
  expect(screen.getByRole('button', { name: /Fever/i })).toBeInTheDocument();
  expect(screen.getByRole('combobox', { name: /Language/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Admin/i })).toBeInTheDocument();
  expect(screen.getByTitle(/Northside Medical Center map/i)).toBeInTheDocument();
  expect(screen.getByText(/Hydration rhythm/i)).toBeInTheDocument();
  expect(screen.getByText(/Malaria/i)).toBeInTheDocument();
  expect(screen.queryByText(/Configure doctors, clinic location/i)).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /Fever/i }));
  fireEvent.click(screen.getByRole('button', { name: /Find available doctors/i }));
  expect(screen.getByText(/\+250 788 100 101/i)).toBeInTheDocument();
});

test('requires admin sign in', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: /Admin/i }));
  expect(screen.getByText(/Admin sign in/i)).toBeInTheDocument();
  expect(screen.getByText(/Use the clinic admin credentials/i)).toBeInTheDocument();
});
