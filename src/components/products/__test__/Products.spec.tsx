import React from 'react';
import { render, waitFor, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';

import Products from '../index';
import Card from '../../cards/index';

export const GetData = jest.fn(() => ({ products: [], isLoading: false }));

jest.mock('../../../../service/getData')

describe('<Product />', () => {
    it('should render Product with in Card', async () => {

      const mockProducts = [{
        id: 1, name: 'Produto 1', description: 'Descrição 1', brand: 'Marca 1', photo: 'foto1.jpg', price: '10.00' 
      },{
        id: 2, name: 'Produto 2', description: 'Descrição 2', brand: 'Marca 2', photo: 'foto2.jpg', price: '20.00' 
      },{
        id: 3, name: 'Produto 3', description: 'Descrição 3', brand: 'Marca 3', photo: 'foto3.jpg', price: '30.00' 
      },
    ]  
      require('../../../../service/getData').GetData.mockReturnValue({ products: mockProducts, isLoading: false });
     await act(() =>{
      render(<Products />)
     })
      mockProducts.forEach((product) => {
        const elementsWithText = screen.queryAllByText('COMPRAR');
        expect(elementsWithText).toHaveLength(3)
      });
        
    })
})