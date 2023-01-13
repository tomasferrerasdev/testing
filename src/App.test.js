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


test('checkbox should be unchecked', () => {
  render(<App/>)
  // Check btn start out enabled
  const btn = screen.getByRole('button', {name: 'Change to blue'})
  expect(btn).toBeEnabled()

  // Checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
})

test('checkbox disables button on first click and enables on second one', () => {
  render(<App/>)
  const checkbox = screen.getByRole('checkbox')
  const btn = screen.getByRole('button')
  
  fireEvent.click(checkbox)
  expect(btn).toBeDisabled()

  fireEvent.click(checkbox)
  expect(btn).not.toBeDisabled()
})


