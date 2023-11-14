import React from 'react';
import { render } from '@testing-library/react';
import Card from '../index'
describe('<Card />', () => {
    test('renders component with right propertiey', () => {
        const product = {
            id: 1,
            name: 'Iphone',
            brand: 'Apple',
            description: 'iphone x15',
            photo: 'https://',
            price: '8500'
        }
        const { getByText } = render(<Card products={product} />);
        const element = getByText('COMPRAR');
        expect(element).toBeTruthy();
        expect(element).toHaveProperty('id')
    });
})