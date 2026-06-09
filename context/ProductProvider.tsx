import { useEffect, useState } from 'react';
import { ProductContext } from './ProductContext';
import type { ReactNode } from 'react';
import type { Product } from '../src/data/type';

const ProductProvider = ({ children }: { children: ReactNode }) => {
    const [itemList, setItemList] = useState<Product[]>([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products');
                const data = await res.json();
                setItemList(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchItems();
    }, []);

    return (
        <ProductContext.Provider
            value={{
                itemList,
                setItemList,
            }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
