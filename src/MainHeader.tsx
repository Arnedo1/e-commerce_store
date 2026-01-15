import { IoIosSearch } from 'react-icons/io';
import { IoPersonOutline } from 'react-icons/io5';
import { IoBagHandleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import logo from './assets/logo_winkel.jpg';

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
interface MainHeaderProps {
    totalItems: number;
    setTotalItems: (value: number) => void;
    cartList: CartItemList[];
    priceTotal: number;
    setPriceTotal: (value: number) => void;
    setTermFilter: (value: string) => void;
    termFilter: string;
    registreren: boolean;
    setRegistreren: (value: boolean) => void;
}

const MainHeader = (props: MainHeaderProps) => {
    props.setTotalItems(
        props.cartList.reduce((sum, item) => sum + item.quantity, 0)
    );
    props.setPriceTotal(
        props.cartList.reduce(
            (sum, item) => sum + item.quantity * item.price,
            0
        )
    );

    return (
        <div className='h-20 sticky bg-white top-0 w-full lg:static flex justify-center z-52 items-center'>
            <div className='lg:px-10 bg-white px-4 w-314 flex items-center text-blue-950 justify-between'>
                <div>
                    <Link to={'/'}>
                        <img
                            src={logo}
                            alt='Logo'
                            className='h-15 md:min-w-40 md:mt-3'
                        />
                    </Link>
                </div>
                <div className='bg-blue-50 hidden mr-3 min-w-80 h-13 rounded-4xl items-center md:flex justify-between px-2'>
                    <input
                        value={props.termFilter}
                        onChange={(e) => props.setTermFilter(e.target.value)}
                        placeholder='Doorzoek onze catalogus'
                        className='h-8 w-80 ml-4 focus:outline-none'
                    />
                    <div className='w-10 h-10 rounded-4xl cursor-pointer bg-blue-950 flex justify-center items-center'>
                        <IoIosSearch className='flex text-white items-center justify-center size-6' />
                    </div>
                </div>
                <div className='lg:w-100 h-16 flex gap-4 items-center relative'>
                    <div className='flex items-center gap-2'>
                        <div className='hidden lg:block'>
                            <div className='font-semibold flex justify-end'>
                                Mijn account
                            </div>
                            <div className='flex gap-2'>
                                <div>Inloggen</div>
                                <span>|</span>

                                <div>Registreren</div>
                            </div>
                        </div>
                        <div className='h-11 w-11 rounded-full flex items-center justify-center bg-blue-50'>
                            <IoPersonOutline
                                onClick={() => props.setRegistreren(true)}
                                className='cursor-pointer size-6'
                            />
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='hidden lg:block'>
                            <div className='font-semibold'>Winkelwagen</div>
                            <div className='flex justify-end'>
                                € {props.priceTotal.toFixed(2)}
                            </div>
                        </div>
                        <Link to={'/cart'}>
                            <div className='h-11 w-11 rounded-full flex items-center justify-center bg-blue-50'>
                                <IoBagHandleOutline className='size-6' />
                            </div>
                        </Link>
                        <div className='bg-orange-400 h-6 w-5 right-1 top-0 text-white text-[14px] flex justify-center items-center rounded-3xl absolute'>
                            {props.totalItems}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;
