import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color and updates when clicked', () => {
  render(<App/>)
  
  // First assertion
  const btn = screen.getByRole('button', {name: 'Change to blue'})
  expect(btn).toHaveStyle({"background-color": 'red'})

  // Second assertion
  fireEvent.click(btn)
  expect(btn).toHaveStyle({"background-color": "blue"})
  expect(btn).toHaveTextContent("Change to red")
});



