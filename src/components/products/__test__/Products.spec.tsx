import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/matchers'
import Card from '@/components/cards'

import Products from '../page';

jest.mock('../../../../service/getData', () => ({
    getData: jest.fn(() => ({products: [
        {
            id: 1,
            name: 'Product 1',
            description: 'Description 1',
            brand: 'Brand 1',
            photo: 'photo1.jpg',
            price: '10.99',
          },
          {
            id: 2,
            name: 'Product 2',
            description: 'Description 2',
            brand: 'Brand 2',
            photo: 'photo2.jpg',
            price: '20.99',
          },
    ], isLoading: false}))
}))

describe('<Product />', () => {
    test('should render Product with in Card', async () => {
        
      render(<Products />)
        await waitFor(() => expect(screen.queryByText('Loading...')).toBe(false));
    })
})