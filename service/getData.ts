import axios from "axios";
import { useQuery } from "react-query";
import { usePages } from '../store/setPage';
import { useEffect } from "react";
export function GetData(){
    const {data, isLoading} = useQuery('products',  () => {
        return axios
        .get(`https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC`)
        .then(res => res.data);
    },{
        refetchOnWindowFocus: true,
        staleTime: 0,
        cacheTime: 0,
        refetchInterval: 0,
    })
    const {products} = !isLoading && data
    
    return {products, isLoading};
}