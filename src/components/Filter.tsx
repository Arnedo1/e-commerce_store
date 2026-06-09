import { GrCheckbox } from 'react-icons/gr';
import { IoStarOutline, IoStarSharp } from 'react-icons/io5';
import { ProductContext } from '../context/ProductContext';
import { useContext } from 'react';

const Filter = () => {
    const product = useContext(ProductContext);
    return (
        <div className='flex flex-col w-80 bg-black/70 rounded h-screen'>
            <div className='font-bold p-3 rounded-t text-white'>
                Filteren op
            </div>
            <div className='h-45 p-4 pl-8 flex-col text-white font-semibold flex gap-2 border-gray-300'>
                <p>Price</p>
                <div className='flex flex-col gap-1 text-[16px] font-normal'>
                    <div className='flex items-center gap-2'>
                        {product.filteredPrice === 50 ? (
                            <GrCheckbox
                                onClick={() => product.setFilteredPrice(null)}
                                className='text-gray-400 bg-white'
                            />
                        ) : (
                            <GrCheckbox
                                onClick={() => product.setFilteredPrice(50)}
                                className='text-gray-400'
                            />
                        )}
                        <p>0.00-50.00</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        {product.filteredPrice === 101 ? (
                            <GrCheckbox
                                onClick={() => product.setFilteredPrice(null)}
                                className='text-gray-400 bg-white'
                            />
                        ) : (
                            <GrCheckbox
                                onClick={() => product.setFilteredPrice(101)}
                                className='text-gray-400'
                            />
                        )}
                        <p>51.00-100.00</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        {product.filteredPrice === 151 ? (
                            <GrCheckbox
                                onClick={() => product.setFilteredPrice(null)}
                                className='text-gray-400 bg-white'
                            />
                        ) : (
                            <GrCheckbox
                                onClick={() => product.setFilteredPrice(151)}
                                className='text-gray-400'
                            />
                        )}
                        <p>101.00-150.00</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        {product.filteredPrice === 200 ? (
                            <GrCheckbox
                                onClick={() => product.setFilteredPrice(null)}
                                className='text-gray-400 bg-white'
                            />
                        ) : (
                            <GrCheckbox
                                onClick={() => product.setFilteredPrice(200)}
                                className='text-gray-400'
                            />
                        )}
                        <p>151.00-200.00</p>
                    </div>
                </div>
            </div>
            <div className='h-45 p-4 pl-8 font-semibold text-white flex gap-2 flex-col'>
    <p>Rating</p>
    <div className='flex flex-col gap-2 text-[16px] font-normal'>
        <div className='flex items-center gap-2'>
            {product.filteredRating === 1 ? (
                <GrCheckbox onClick={() => product.setFilteredRating(null)} className='text-gray-400 bg-white' />
            ) : (
                <GrCheckbox onClick={() => product.setFilteredRating(1)} className='text-gray-400' />
            )}
            <IoStarSharp /><IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline />
        </div>
        <div className='flex items-center gap-2'>
            {product.filteredRating === 2 ? (
                <GrCheckbox onClick={() => product.setFilteredRating(null)} className='text-gray-400 bg-white' />
            ) : (
                <GrCheckbox onClick={() => product.setFilteredRating(2)} className='text-gray-400' />
            )}
            <IoStarSharp /><IoStarSharp /><IoStarOutline /><IoStarOutline /><IoStarOutline />
        </div>
        <div className='flex items-center gap-2'>
            {product.filteredRating === 3 ? (
                <GrCheckbox onClick={() => product.setFilteredRating(null)} className='text-gray-400 bg-white' />
            ) : (
                <GrCheckbox onClick={() => product.setFilteredRating(3)} className='text-gray-400' />
            )}
            <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarOutline /><IoStarOutline />
        </div>
        <div className='flex items-center gap-2'>
            {product.filteredRating === 4 ? (
                <GrCheckbox onClick={() => product.setFilteredRating(null)} className='text-gray-400 bg-white' />
            ) : (
                <GrCheckbox onClick={() => product.setFilteredRating(4)} className='text-gray-400' />
            )}
            <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarOutline />
        </div>
        <div className='flex items-center gap-2'>
            {product.filteredRating === 5 ? (
                <GrCheckbox onClick={() => product.setFilteredRating(null)} className='text-gray-400 bg-white' />
            ) : (
                <GrCheckbox onClick={() => product.setFilteredRating(5)} className='text-gray-400' />
            )}
            <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp />
        </div>
    </div>
</div>
        </div>

    );
};

export default Filter;
