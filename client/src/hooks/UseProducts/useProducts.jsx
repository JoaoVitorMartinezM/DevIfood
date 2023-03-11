import { useState, useEffect } from "react"
import {apiService} from '../../services/api'

const useProducts = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    

    const fetchData = async()=>{
        setIsLoading(true);
        const {data, error} = await apiService.get("products");
        setData(data);
        setError(error);
        setIsLoading(false);
    }

    useEffect(()=>{
        fetchData();
    }, []);

    return({
        products:{
            entradas: data.filter((item) => item.section==="Entradas"),
            principais: data.filter((item) => item.section==="Principais"),
            sobremesas: data.filter((item) => item.section==="Sobremesas"),
        },
        error,
        isLoading,
    })

}
export default useProducts;