import { GrCheckbox } from 'react-icons/gr';
import { IoStarOutline } from 'react-icons/io5';
import { IoStarSharp } from 'react-icons/io5';
import { GrCheckboxSelected } from 'react-icons/gr';

interface MobileFilterBoxProps {
    priceFilter: string;
    setPriceFilter: (value: string) => void;
    ratingFilter: string;
    setRatingFilter: (value: string) => void;
    setMobileFilter:(value:boolean)=>void
    mobileFilter:boolean
}

const MobileFilterBox = (props: MobileFilterBoxProps) => {
    return (
        <div className=' mt-4 flex flex-col items-center'>
            <div className='border-b h-45 w-80 p-4 rounded-t-lg pl-8 flex-col font-semibold bg-blue-100 flex gap-2 border-gray-300'>
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
            <div className='h-55 p-4 pb-2 pl-8 w-80 font-semibold bg-blue-100 rounded-b-lg flex gap-2 flex-col'>
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
                <button 
                onClick={()=>props.setMobileFilter(false)}
                className='h-10 mt-2  font-semibold shadow-md shadow-black/20 rounded bg-blue-900 text-white w-50 mx-auto flex justify-center items-center'>
                Show items
            </button>
            </div>
            
        </div>
    );
};

export default MobileFilterBox;