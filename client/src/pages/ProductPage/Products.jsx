import './Products.css'
import {Card} from '../../components/Cards'
import useProducts from '../../hooks/UseProducts';
import { useState } from 'react';

const Products = () => {

    const {products, error, isLoading} = useProducts();
    const [selecteds, setSelecteds] = useState([]);

    
    
    
    const isSelected = (id) => {
        return selecteds.some((item) => item ===id);

    } 

    const handleSelect = (id) => {
        if (isSelected(id)) {
          setSelecteds((prev) => prev.filter((item) => item !== id));
          return;
        }
    
        setSelecteds((prev) => [...prev, id]);
      };

    if (isLoading) {
        return <p>Carregando...</p>;
      }
    
    if (error) {
        console.log(error)
        return <p>{error.message}</p>;
    }

    return(

        <>
           
           <section className='section-products'>
                <h2>Entradas</h2>
                <hr style={{color: "black"}}/>
                <ul className='list-products'>  
                {!!error && error.message}
                {!!isLoading && <span>Carregando...</span>}             
                {
                    
                    
                products.entradas.map((item) =>

                    <li key={item.id}>
                        <Card
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        descrition={item.descrition}
                        price={item.price}
                        timeDone={item.timeDone}
                        selected={isSelected(item.id)}
                        onToSelect={handleSelect}
        
                         />

                    </li>  
                
                )}
                </ul>

                <h2>Principais</h2>
                <hr style={{color: "black"}}/>
                <ul className='list-products'>               
                {
                products.principais.map((item) =>

                    <li key={item.id}>
                        <Card
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        descrition={item.descrition}
                        price={item.price}
                        timeDone={item.timeDone}
                        selected={isSelected(item.id)}
                        onToSelect={handleSelect}
        
                         />

                    </li>  
                
                )}
                </ul>

                <h2>Sobremesas</h2>
                <hr style={{color: "black", fontSize: 2}}/>
                <ul className='list-products'>               
                {
                products.sobremesas.map((item) =>

                    <li key={item.id}>
                        <Card
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        descrition={item.descrition}
                        price={item.price}
                        timeDone={item.timeDone}
        

                        selected={isSelected(item.id)}
                        onToSelect={handleSelect} />

                    </li>  
                
                )}
                </ul>
            </section>

        
        </>

        
        
         
            
            

        
    )
}

export default Products;