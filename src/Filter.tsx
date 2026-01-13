
import { GrCheckbox } from 'react-icons/gr';
import { IoStarOutline } from 'react-icons/io5';
import { IoStarSharp } from 'react-icons/io5';
import { GrCheckboxSelected } from 'react-icons/gr';

interface FilterProps {
    priceFilter: string;
    setPriceFilter: (value: string) => void;
    ratingFilter: string;
    setRatingFilter: (value: string) => void;
    menuMobile: boolean;
    setMenuMobile: (value: boolean) => void;
    mobileFilter:boolean
    setMobileFilter:(value:boolean)=>void
}

const Filter = (props: FilterProps) => {
    return (
        <div>
            
        <div className='border-[0.5px] ml-4 flex flex-col w-60 rounded border-blue-100'>
            <div className='font-bold bg-blue-950 p-3 rounded-t text-white'>
                Filteren op
            </div>
            <div className='border-b h-45 p-4 pl-8 flex-col font-semibold bg-blue-100 flex gap-2 border-gray-300'>
                <p>Price</p>
                <div className='flex flex-col gap-2 text-[16px] font-normal'>
                    <div className='flex items-center gap-2'>
                        {props.priceFilter === '50' ? (
                            <GrCheckboxSelected
                                onClick={() => props.setPriceFilter('')}
                                className='text-gray-400 bg-white'
                            />
                        ) : (
                            <GrCheckbox
                                onClick={() => props.setPriceFilter('50')}
                                className='text-gray-400 bg-white'
                            />
                        )}
                        <p>0.00-50.00</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        {props.priceFilter === '100' ? (
                            <GrCheckboxSelected
                                onClick={() => props.setPriceFilter('')}
                                className='text-gray-400 bg-white'
                            />
                        ) : (
                            <GrCheckbox
                                onClick={() => props.setPriceFilter('100')}
                                className='text-gray-400 bg-white'
                            />
                        )}
                        <p>51.00-100.00</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        {props.priceFilter === '150' ? (
                            <GrCheckboxSelected
                                onClick={() => props.setPriceFilter('')}
                                className='text-gray-400 bg-white'
                            />
                        ) : (
                            <GrCheckbox
                                onClick={() => props.setPriceFilter('150')}
                                className='text-gray-400 bg-white'
                            />
                        )}
                        <p>101.00-150.00</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        {props.priceFilter === '200' ? (
                            <GrCheckboxSelected
                                onClick={() => props.setPriceFilter('')}
                                className='text-gray-400 bg-white'
                            />
                        ) : (
                            <GrCheckbox
                                onClick={() => props.setPriceFilter('200')}
                                className='text-gray-400 bg-white'
                            />
                        )}
                        <p>151.00-200.00</p>
                    </div>
                </div>
            </div>
            <div className='h-45 p-4 pl-8 font-semibold bg-blue-100 flex gap-2 flex-col'>
                <p>Rating</p>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-0.5'>
                        {props.ratingFilter === '1' ? (
                            <GrCheckboxSelected
                                onClick={() => props.setRatingFilter('')}
                                className='text-gray-400 mr-2 bg-white'
                            />
                        ) : (
                            <GrCheckbox
                                onClick={() => props.setRatingFilter('1')}
                                className='text-gray-400 mr-2 bg-white'
                            />
                        )}
                        <IoStarSharp />
                        <IoStarOutline />
                        <IoStarOutline />
                        <IoStarOutline />
                        <IoStarOutline />
                    </div>
                    <div className='flex gap-0.5'>
                        {props.ratingFilter === '2' ? (
                            <GrCheckboxSelected
                                onClick={() => props.setRatingFilter('')}
                                className='text-gray-400 mr-2 bg-white'
                            />
                        ) : (
                            <GrCheckbox
                                onClick={() => props.setRatingFilter('2')}
                                className='text-gray-400 mr-2 bg-white'
                            />
                        )}
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarOutline />
                        <IoStarOutline />
                        <IoStarOutline />
                    </div>
                    <div className='flex gap-0.5'>
                        {props.ratingFilter === '3' ? (
                            <GrCheckboxSelected
                                onClick={() => props.setRatingFilter('')}
                                className='text-gray-400 mr-2 bg-white'
                            />
                        ) : (
                            <GrCheckbox
                                onClick={() => props.setRatingFilter('3')}
                                className='text-gray-400 mr-2 bg-white'
                            />
                        )}
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarOutline />
                        <IoStarOutline />
                    </div>
                    <div className='flex gap-0.5'>
                        {props.ratingFilter === '4' ? (
                            <GrCheckboxSelected
                                onClick={() => props.setRatingFilter('')}
                                className='text-gray-400 mr-2 bg-white'
                            />
                        ) : (
                            <GrCheckbox
                                onClick={() => props.setRatingFilter('4')}
                                className='text-gray-400 mr-2 bg-white'
                            />
                        )}
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarOutline />
                    </div>
                    <div className='flex gap-0.5'>
                        {props.ratingFilter === '5' ? (
                            <GrCheckboxSelected
                                onClick={() => props.setRatingFilter('')}
                                className='text-gray-400 mr-2 bg-white'
                            />
                        ) : (
                            <GrCheckbox
                                onClick={() => props.setRatingFilter('5')}
                                className='text-gray-400 mr-2 bg-white'
                            />
                        )}
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Filter;
