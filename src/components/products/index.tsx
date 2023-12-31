'use client'
import React from 'react';
import dynamic from 'next/dynamic';
import { ContainerProducts, ProductsList } from './style'
import { GetData } from '../../../service/getData';

const Card = dynamic(() => import('../../components/cards'), {ssr:false});
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
    return (
        <>
            <ContainerProducts>
                <ProductsList>
                    {products && products.map((product) => (
                        <div key={product.id}>
                            <Card products={product} />
                        </div>
                    ))
                    }
                </ProductsList>
            </ContainerProducts>
        </>
    )
}