import { render, screen } from "../utils/test-utils"
import { Box } from "@theme-ui/components";
import React from 'react'
import  Button from '../components/Button'
 
describe('sample test', () => {
test('renders a p tag', () => {
  render(<p>Click me</p>);
  expect(screen.getByText(/Click me/i)).not.toBeNull(); // Hello world is already defined in the story args!
})

test('renders a theme ui box', () => {
  render(<Box>Click me</Box>);
  expect(screen.getByText(/Click me/i)).not.toBeNull(); // Hello world is already defined in the story args!
})


test('renders a custom button', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText(/Click me/i)).not.toBeNull(); // Hello world is already defined in the story args!
})

})