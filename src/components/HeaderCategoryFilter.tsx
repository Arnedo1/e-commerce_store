import { IoIosSearch } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { ProductContext } from '../context/ProductContext';
import { useContext } from 'react';

const HeaderCategoryFilter = () => {
    const product = useContext(ProductContext);
    return (
        <div className='w-full lg:static sticky top-20 bg-blue-50 flex justify-center z-53'>
            <div className='text-blue-950 w-314 px-auto h-14 flex gap-2 relative items-center justify-between'>
                <div className='md:hidden cursor-pointer ml-10'>
                    <RxHamburgerMenu />
                </div>
                <div className='bg-white w-70 h-11 rounded-4xl md:hidden items-center flex justify-between mx-auto px-2'>
                    <input
                        placeholder='Doorzoek onze catalogus'
                        className='h-8 w-80 ml-4 focus:outline-none'
                    />
                    <div className='w-15 h-10 rounded-4xl cursor-pointer bg-blue-950 flex justify-center items-center'>
                        <IoIosSearch className='flex text-white items-center justify-center size-6' />
                    </div>
                </div>
                <div className='md:flex gap-7 hidden text-xl'>
                    <div className='flex items-center gap-7 ml-10'>
                    <div
                            onClick={() =>
                                product.setFilteredCategory('all')
                            }
                            className={`cursor-pointer text-blue-950 ${
                                product.filteredCategory === 'all'
                                    ? 'font-semibold'
                                    : 'font-normal'
                            }`}>
                            All
                        </div>

                        <div
                            onClick={() =>
                                product.setFilteredCategory('beauty')
                            }
                            className={`cursor-pointer text-blue-950 ${
                                product.filteredCategory === 'beauty'
                                    ? 'font-semibold'
                                    : 'font-normal'
                            }`}>
                            Beauty
                        </div>
                        <div
                            onClick={() =>
                                product.setFilteredCategory('fragrances')
                            }
                            className={`cursor-pointer text-blue-950 ${
                                product.filteredCategory === 'fragrances'
                                    ? 'font-semibold'
                                    : 'font-normal'
                            }`}>
                            Fragrances
                        </div>
                        <div
                            onClick={() =>
                                product.setFilteredCategory('furniture')
                            }
                            className={`cursor-pointer text-blue-950 ${
                                product.filteredCategory === 'furniture'
                                    ? 'font-semibold'
                                    : 'font-normal'
                            }`}>
                            Furniture
                        </div>
                        <div
                            onClick={() =>
                                product.setFilteredCategory('groceries')
                            }
                            className={`cursor-pointer text-blue-950 ${
                                product.filteredCategory === 'groceries'
                                    ? 'font-semibold'
                                    : 'font-normal'
                            }`}>
                            Groceries
                        </div>
                    </div>
                </div>
                <div className='gap-1 hidden lg:flex md:mr-14'>
                    <div>Klantenservice:</div>
                    <div className='text-red-700'>0172 - 65 08 72</div>
                </div>
            </div>
        </div>
    );
};

export default HeaderCategoryFilter;
