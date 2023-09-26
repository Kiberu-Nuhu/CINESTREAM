import React from "react";
import { render } from '@testing-library/react';
import Section3 from './Section3';
import { fireEvent } from "@testing-library/react";
import { waitFor } from "@testing-library/react";

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mockAxios = new MockAdapter(axios);

test('fetchMovieData function is called when the "Search" button is clicked', async () => {
    mockAxios.onGet(/omdbapi/).reply(200, { Search: [] });
    const { getByText, getByPlaceholderText } = render(<Section3 />);
    const input = getByPlaceholderText('Type a movie name');
    const searchButton = getByText('Search');
    fireEvent.change(input, { target: { value: 'Avengers' } });
    fireEvent.click(searchButton);
  
    await waitFor(() => {
      expect(mockAxios.history.get.length).toBe(1);
    });
  });
  