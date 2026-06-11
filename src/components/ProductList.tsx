import { useContext } from 'react';
import ProductCard from './ProductCard';
import { IoFilter } from 'react-icons/io5';
import Filter from './Filter';
import { ProductContext } from '../context/ProductContext';

const ProductList = () => {
    const product = useContext(ProductContext);
    if (!product) return null;

    const filteredPriceList =
        product.filteredPrice === 50 ? product.itemList.filter((item) => item.price <= 50.0)
        : product.filteredPrice === 101 ? product.itemList.filter((item) => item.price >= 51.0 && item.price <= 100.0)
        : product.filteredPrice === 151 ? product.itemList.filter((item) => item.price >= 101.0 && item.price <= 150.0)
        : product.filteredPrice === 200 ? product.itemList.filter((item) => item.price >= 151.0 && item.price <= 200.0)
        : product.itemList;

    const filteredRatingList =
        product.filteredRating === 1 ? filteredPriceList.filter((item) => item.rating >= 0.95 && item.rating <= 1.94)
        : product.filteredRating === 2 ? filteredPriceList.filter((item) => item.rating >= 1.95 && item.rating <= 2.94)
        : product.filteredRating === 3 ? filteredPriceList.filter((item) => item.rating >= 2.95 && item.rating <= 3.94)
        : product.filteredRating === 4 ? filteredPriceList.filter((item) => item.rating >= 3.95 && item.rating <= 4.94)
        : product.filteredRating === 5 ? filteredPriceList.filter((item) => item.rating >= 4.95)
        : filteredPriceList;

    const filteredCategoryList =
        product.filteredCategory === 'beauty' ? filteredRatingList.filter((item) => item.category === 'beauty')
        : product.filteredCategory === 'fragrances' ? filteredRatingList.filter((item) => item.category === 'fragrances')
        : product.filteredCategory === 'furniture' ? filteredRatingList.filter((item) => item.category === 'furniture')
        : product.filteredCategory === 'groceries' ? filteredRatingList.filter((item) => item.category === 'groceries')
        : filteredRatingList;

    const filteredTermList = product.searchTerm
        ? filteredCategoryList.filter((item) =>
              item.title.toLowerCase().includes(product.searchTerm.toLowerCase()))
        : filteredCategoryList;

    return (
        <div className='w-full max-w-7xl mx-auto px-2 md:px-4 relative'>
            <div
                onClick={() => product.setFilter(false)}
                className={`fixed inset-0 z-40 transition-opacity duration-300 ${
                    product.filter ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            />
            <div
                onClick={(e) => e.stopPropagation()}
                className={`fixed top-0 left-0 h-full z-50 transition-transform duration-300 ${
                    product.filter ? 'translate-x-0' : '-translate-x-full'
                }`}>
                <Filter />
            </div>

            <div className='sticky mt-5 lg:top-30 md:top-50 top-45 z-40 w-fit mx-auto '>
                <IoFilter
                    onClick={() => product.setFilter(!product.filter)}
                    className='size-6 md:size-7 text-gray-600 cursor-pointer hover:drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]'
                />
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-items-center w-fit mx-auto'>
                {filteredTermList.map((item) => (
                    <ProductCard item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;