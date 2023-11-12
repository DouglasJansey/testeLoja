import axios from "axios";
import { useQuery } from "react-query";
import { usePages } from '../store/setPage';
export function GetData(){
    const page = usePages((state) => state.page)
    const {data, isLoading} = useQuery('products', () => {
        return axios
        .get(`https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=${page}&rows=8&sortBy=id&orderBy=DESC`)
        .then(res => res.data);
    },{
        refetchOnWindowFocus: true
    })
    const {products} = !isLoading && data
    
    return {products, isLoading};
}