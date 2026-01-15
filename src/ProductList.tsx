import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { ClipLoader } from 'react-spinners';
import { IoFilterSharp } from 'react-icons/io5';
import MobileFilterBox from './MobileFilterBox';

interface ProductItemList {
    image: string;
    id: number;
    description: string;
    title: string;
    rating: { rate: number; count: number };
    category: string;
    price: number;
}
interface CartItemList {
    image: string;
    id: number;
    description: string;
    title: string;
    rating: { rate: number; count: number };
    category: string;
    price: number;
    quantity: number;
}
interface ProductListProps {
    priceFilter: string;
    setPriceFilter: (value: string) => void;
    ratingFilter: string;
    setRatingFilter: (value: string) => void;
    cartList: CartItemList[];
    setCartList: (value: CartItemList[]) => void;
    categoryFilter: string;
    setCategoryFilter: (value: string) => void;
    termFilter: string;
    mobileFilter: boolean;
    setMobileFilter: (value: boolean) => void;
    setLoading:(value:boolean)=>void
    loading:boolean
}

const ProductList = (props: ProductListProps) => {
    const [productList, setProductList] = useState<ProductItemList[]>([]);


    useEffect(() => {
        props.setLoading(true);
        try {
            const fetchData = async () => {
                const response = await fetch(
                    'https://fakestoreapi.com/products'
                );
                const data = await response.json();
                console.log(data);
                setProductList(data);
            };
            fetchData();
        } catch (error) {
            console.error('Fetch failed:', error);
        } finally {
            props.setLoading(false);
        }
    }, []);

    const priceFiltered =
        props.priceFilter === '50'
            ? productList.filter((item) => item.price < 51)
            : props.priceFilter === '100'
            ? productList.filter((item) => item.price > 50 && item.price < 101)
            : props.priceFilter === '150'
            ? productList.filter((item) => item.price > 100 && item.price < 151)
            : props.priceFilter === '200'
            ? productList.filter((item) => item.price > 150 && item.price < 201)
            : productList;

    const ratingFiltered =
        props.ratingFilter === '1'
            ? priceFiltered.filter((item) => item.rating.rate < 1.1)
            : props.ratingFilter === '2'
            ? priceFiltered.filter(
                  (item) => item.rating.rate > 1.0 && item.rating.rate < 2.1
              )
            : props.ratingFilter === '3'
            ? priceFiltered.filter(
                  (item) => item.rating.rate > 2.0 && item.rating.rate < 3.1
              )
            : props.ratingFilter === '4'
            ? priceFiltered.filter(
                  (item) => item.rating.rate > 3.0 && item.rating.rate < 4.1
              )
            : props.ratingFilter === '5'
            ? priceFiltered.filter(
                  (item) => item.rating.rate > 4.0 && item.rating.rate < 5.1
              )
            : priceFiltered;

    const catFiltered =
        props.categoryFilter === ''
            ? ratingFiltered.filter((item) => item.category)
            : props.categoryFilter === 'men'
            ? ratingFiltered.filter(
                  (item) => item.category === "men's clothing"
              )
            : props.categoryFilter === 'women'
            ? ratingFiltered.filter(
                  (item) => item.category === "women's clothing"
              )
            : props.categoryFilter === 'jewelry'
            ? ratingFiltered.filter((item) => item.category === 'jewelery')
            : props.categoryFilter === 'electronics'
            ? ratingFiltered.filter((item) => item.category === 'electronics')
            : ratingFiltered;

    const filteredByTerm = catFiltered.filter((item) =>
        item.title.toLocaleLowerCase().includes(props.termFilter.toLowerCase())
    );
    return (
        <div>
            <button
                onClick={() => props.setMobileFilter(!props.mobileFilter)}
                className='border mx-auto border-blue-200 py-1 px-8 lg:hidden shadow-sm cursor-pointer shadow-black/20 flex  rounded-md'>
                <p>Filter</p> <IoFilterSharp className='ml-2 mt-1' />
            </button>
            {props.mobileFilter && (
                <div className='lg:hidden'>
                <MobileFilterBox
                    ratingFilter={props.ratingFilter}
                    setRatingFilter={props.setRatingFilter}
                    priceFilter={props.priceFilter}
                    setPriceFilter={props.setPriceFilter}
                    setMobileFilter={props.setMobileFilter}
                    mobileFilter={props.mobileFilter}
                />
                </div>
            )}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {props.loading && (
                    <div className='flex justify-center absolute top-90 right-0 left-0'>
                        <ClipLoader
                            size={50}
                            color='#0ea5e9'
                        />
                    </div>
                )}
                {!props.loading &&
                    filteredByTerm.map((item) => (
                        <ProductCard
                            cartList={props.cartList}
                            setCartList={props.setCartList}
                            item={item}
                            key={item.id}
                        />
                    ))}
            </div>
        </div>
    );
};

export default ProductList;