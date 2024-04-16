import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import SatelliteSearch from './SatelliteSearch';

describe('SatelliteSearch Component Integration Tests', () => {
  it('should display search results after submitting the search form', async () => {
    render(<SatelliteSearch />);

    // Simulate user typing in the search input
    const searchInput = screen.getByPlaceholderText('Enter satellite name or ID');
    fireEvent.change(searchInput, { target: { value: 'ISS' } });

    // Simulate user submitting the search form
    const searchButton = screen.getByRole('button', { name: 'Search' });
    fireEvent.click(searchButton);

    // Wait for the search results to be displayed
    await waitFor(() => {
      const searchResults = screen.getByTestId('search-results');
      expect(searchResults).toBeInTheDocument();
    });

    // Verify that search results contain expected content
    const searchResultItems = screen.getAllByTestId('search-result-item');
    expect(searchResultItems).toHaveLength(3); // Assuming 3 search results for 'ISS'
    expect(screen.getByText('International Space Station')).toBeInTheDocument();
    expect(screen.getByText('Orbiting Earth')).toBeInTheDocument();
  });

  it('should display an error message for invalid search input', async () => {
    render(<SatelliteSearch />);

    // Simulate user entering invalid search input
    const searchInput = screen.getByPlaceholderText('Enter satellite name or ID');
    fireEvent.change(searchInput, { target: { value: 'Invalid Satellite' } });

    // Simulate user submitting the search form
    const searchButton = screen.getByRole('button', { name: 'Search' });
    fireEvent.click(searchButton);

    // Wait for the error message to be displayed
    await waitFor(() => {
      const errorMessage = screen.getByText('No results found for "Invalid Satellite"');
      expect(errorMessage).toBeInTheDocument();
    });
  });

  it('should handle responsive design and adjust UI elements accordingly', async () => {
    // Render component at different viewport sizes (e.g., desktop, tablet, mobile)
    const { container } = render(<SatelliteSearch />);

    // Verify UI elements and styles based on viewport size
    expect(container.querySelector('.search-input')).toBeInTheDocument(); // Example CSS class for search input
    expect(container.querySelector('.search-button')).toBeInTheDocument(); // Example CSS class for search button

    // Resize viewport to simulate tablet view
    global.innerWidth = 768; // Example tablet width
    global.dispatchEvent(new Event('resize'));

    // Verify UI changes for tablet view
    expect(container.querySelector('.search-input')).toBeInTheDocument();
    expect(container.querySelector('.search-button')).toBeInTheDocument();

    // Resize viewport to simulate mobile view
    global.innerWidth = 375; // Example mobile width
    global.dispatchEvent(new Event('resize'));

    // Verify UI changes for mobile view
    expect(container.querySelector('.search-input')).toBeInTheDocument();
    expect(container.querySelector('.search-button')).toBeInTheDocument();
  });
});
