'use client'
import React from 'react';
import { ContainerProducts, ProductsList } from './style'
import { GetData } from '../../../service/getData';
import Card from '../../components/cards';
type ProductType = {
    products: ProductProps[],
    isLoading: boolean,
}
type ProductProps = {
    id: number,
    name: string,
    description: string,
    brand: string,
    photo: string,
    price: string,
}
export default function Products() {
    const { products, isLoading }: ProductType = GetData();
    if (isLoading) {
        return (
            <>
                <div>
                    Loading...
                </div>
            </>
        )
    }
    return (
        <>
            <ContainerProducts>
                <ProductsList>
                    {products.map(product => (
                        <div key={product.id}>
                            <Card products={product} />
                        </div>
                    ))}
                </ProductsList>
            </ContainerProducts>
        </>
    )
}