import { IoIosSearch } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { ProductContext } from '../context/ProductContext';
import { useContext, useState } from 'react';

const categories = ['all', 'beauty', 'fragrances', 'furniture', 'groceries'];

const HeaderCategoryFilter = () => {
    const product = useContext(ProductContext);
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <div className='w-full lg:static sticky top-27 md:top-31 bg-blue-50 flex flex-col justify-center z-40'>
            <div className='text-blue-950 w-full max-w-7xl mx-auto px-4 h-14 flex gap-2 relative items-center justify-between'>
                
                {/* Mobile: hamburger + zoek */}
                <div className='md:hidden cursor-pointer' onClick={() => setMobileMenu(!mobileMenu)}>
                    <RxHamburgerMenu className='size-5' />
                </div>
                <div className='bg-white h-9 rounded-4xl md:hidden flex-1 mx-3 items-center flex justify-between px-2'>
                    <input
                        placeholder='Doorzoek onze catalogus'
                        className='h-8 w-full ml-2 focus:outline-none text-sm bg-transparent'
                        onChange={(e) => product.setSearchTerm(e.target.value)}
                        value={product.searchTerm}
                    />
                    <div className='w-8 h-8 rounded-4xl cursor-pointer bg-blue-950 flex justify-center items-center shrink-0'>
                        <IoIosSearch className='text-white size-4' />
                    </div>
                </div>

                {/* Desktop: categorie links */}
                <div className='md:flex gap-7 hidden text-base lg:text-xl'>
                    <div className='flex items-center gap-5 lg:gap-7'>
                        {categories.map((cat) => (
                            <div
                                key={cat}
                                onClick={() => product.setFilteredCategory(cat)}
                                className={`cursor-pointer capitalize text-blue-950 ${
                                    product.filteredCategory === cat ? 'font-semibold' : 'font-normal'
                                }`}>
                                {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </div>
                        ))}
                    </div>
                </div>

                <div className='gap-1 hidden lg:flex text-sm'>
                    <div>Klantenservice:</div>
                    <div className='text-red-700'>0172 - 65 08 72</div>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            {mobileMenu && (
                <div className='md:hidden flex flex-col bg-blue-50 px-6 pb-4 gap-3'>
                    {categories.map((cat) => (
                        <div
                            key={cat}
                            onClick={() => {
                                product.setFilteredCategory(cat);
                                setMobileMenu(false);
                            }}
                            className={`cursor-pointer capitalize text-blue-950 text-sm ${
                                product.filteredCategory === cat ? 'font-semibold' : 'font-normal'
                            }`}>
                            {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HeaderCategoryFilter;