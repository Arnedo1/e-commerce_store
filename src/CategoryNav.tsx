import { Link } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';
import { useEffect } from 'react';

interface CategoryNavProps {
    categoryFilter: string;
    setCategoryFilter: (value: string) => void;
    menuMobile: boolean;
    setMenuMobile: (value: boolean) => void;
    termFilter: string;
    setTermFilter: (value: string) => void;
}

const CategoryNav = (props: CategoryNavProps) => {
    useEffect(() => {
        if (props.menuMobile) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [props.menuMobile]);

    return (
        <div className='w-full  bg-blue-50 flex justify-center'>
            <div className=' text-blue-950 w-314 px-auto h-14 flex gap-2 relative items-center justify-between'>
                <div className='md:hidden cursor-pointer ml-10'>
                    <RxHamburgerMenu
                        onClick={() => props.setMenuMobile(true)}
                    />
                </div>
                <div className='bg-white w-70 h-11 rounded-4xl md:hidden items-center flex justify-between mx-auto px-2'>
                    <input
                        value={props.termFilter}
                        onChange={(e) => props.setTermFilter(e.target.value)}
                        placeholder='Doorzoek onze catalogus'
                        className='h-8 w-80 ml-4 focus:outline-none'
                    />
                    <div className='w-15 h-10 rounded-4xl cursor-pointer bg-blue-950 flex justify-center items-center'>
                        <IoIosSearch className='flex text-white items-center justify-center size-6' />
                    </div>
                </div>
                <div
                    className={
                        props.menuMobile === true && window.innerWidth < 768
                            ? ' fixed flex z-53 md:hidden inset-0 bg-white justify-between'
                            : 'md:flex gap-7 hidden text-xl'
                    }>
                    <div
                        className={
                            props.menuMobile === true && window.innerWidth < 768
                                ? 'pt-9 flex flex-col gap-8 text-3xl pl-4'
                                : 'flex items-center gap-7 ml-10'
                        }>
                        <Link to={'/'}>
                            <div
                                onClick={() => {
                                    props.setCategoryFilter('');
                                    props.setMenuMobile(false);
                                }}
                                className={
                                    props.categoryFilter === ''
                                        ? 'text-amber-900'
                                        : 'cursor-pointer text-blue-950'
                                }>
                                Home
                            </div>
                        </Link>
                        <Link to={'/'}>
                            <div
                                onClick={() => {
                                    props.setCategoryFilter('electronics');
                                    props.setMenuMobile(false);
                                }}
                                className={
                                    props.categoryFilter === 'electronics'
                                        ? 'text-amber-900'
                                        : 'cursor-pointer text-blue-950'
                                }>
                                Electronics
                            </div>
                        </Link>
                        <Link to={'/'}>
                            <div
                                onClick={() => {
                                    props.setCategoryFilter('jewelry');
                                    props.setMenuMobile(false);
                                }}
                                className={
                                    props.categoryFilter === 'jewelry'
                                        ? 'text-amber-900'
                                        : 'cursor-pointer text-blue-950'
                                }>
                                Jewelry
                            </div>
                        </Link>
                        <Link to={'/'}>
                            <div
                                onClick={() => {
                                    props.setCategoryFilter('men');
                                    props.setMenuMobile(false);
                                }}
                                className={
                                    props.categoryFilter === 'men'
                                        ? 'text-amber-900'
                                        : 'cursor-pointer text-blue-950'
                                }>
                                Mens clothing
                            </div>
                        </Link>
                        <Link to={'/'}>
                            <div
                                onClick={() => {
                                    props.setCategoryFilter('women');
                                    props.setMenuMobile(false);
                                }}
                                className={
                                    props.categoryFilter === 'women'
                                        ? 'text-amber-900'
                                        : 'cursor-pointer text-blue-950'
                                }>
                                Womens clothing
                            </div>
                        </Link>
                    </div>
                    <div
                        className={
                            props.menuMobile ? 'mt-9 mr-5 md:hidden' : 'hidden'
                        }>
                        <IoMdClose
                            onClick={() => props.setMenuMobile(false)}
                            className='size-10 cursor-pointer'
                        />
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

export default CategoryNav;
