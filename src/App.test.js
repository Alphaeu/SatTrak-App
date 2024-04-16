import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from './Header'; // Import the component you want to test


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Header Component', () => {
  it('renders the header with correct content', () => {
    const { getByText } = render(<Header />);
    expect(getByText('SatTrak')).toBeInTheDocument();
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('Satellite Tracking')).toBeInTheDocument();
    expect(getByText('Contact')).toBeInTheDocument();
  });

  it('changes the active link on click', () => {
    const { getByText } = render(<Header />);
    const aboutLink = getByText('About');
    fireEvent.click(aboutLink);
    expect(aboutLink).toHaveClass('active');
  });

  // Add more unit tests for state changes, event handling, etc.
});

jest.mock('./api', () => ({
  fetchSatelliteData: jest.fn(() => Promise.resolve(mockData)),
}));