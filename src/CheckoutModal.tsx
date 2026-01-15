import { useState } from 'react';
import { IoClose } from "react-icons/io5";

interface CheckoutModalProps {
    checkout: boolean;
    setCheckout: (value: boolean) => void;
}
interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    address?: string;
    city?: string;
    postalCode?: string;
    cardNumber?: string;
}

const CheckoutModal = (props: CheckoutModalProps) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState<FormErrors>({});
    const [postalCode, setPostalCode] = useState('');
    const [cardNumber, setcardNumber] = useState('');
    const [submit, setSubmit] = useState(false);

    const validation = () => {
        const newError: FormErrors = {};
        if (!email.includes('@')) {
            newError.email = 'Invalid Email';
        }
        if (!firstName.trim()) {
            newError.firstName = 'You need to type a firstname';
        }
        if (!lastName.trim()) {
            newError.lastName = 'You need to type a lastname';
        }
        if (!address.trim()) {
            newError.address = 'You need to type a address';
        }
        if (!city.trim()) {
            newError.city = 'You need to type a city';
        }
        if (!/^\d{4}[A-Z]{2}$/.test(postalCode)) {
            newError.postalCode = 'Invalid postal code';
        }
        if (!/^\d{16}$/.test(cardNumber)) {
            newError.cardNumber = 'Card must be 16 digits';
        }
        setError(newError);
        return Object.keys(newError).length === 0;
    };

    const submitForm = () => {
        if (validation()) {
            console.log('Payment successful!');
            setFirstName('');
            setLastName('');
            setEmail('');
            setAddress('');
            setCity('');
            setPostalCode('');
            setcardNumber('');
            setSubmit(true)

            setTimeout(() => {
                setSubmit(false)
                props.setCheckout(false);
            }, 2000);
            
        }
    };

    return (
        <div
            onClick={() => props.setCheckout(false)}
            className='fixed top-0 z-100 left-0 bottom-0 flex items-center justify-center right-0 bg-black/50 overflow-hidden'>
            <div
                onClick={(e) => e.stopPropagation()}
                className='md:h-210 md:w-120 w-full relative h-full bg-black/80 z-110 flex md:mt-8 justify-center md:rounded-xl overflow-y-auto'>
                <div className='w-100 flex flex-col items-center mt-10'>
                    <div className='flex justify-center  w-80'>
                    <p className='text-white text-3xl mb-10'>Checkout</p>
                    <div className='text-white absolute right-10 ml-20'><IoClose 
                    onClick={()=>props.setCheckout(false)}
                    className='size-8 md:hidden cursor-pointer'/>
                    </div>
                    </div>
                    
                    <div className='mb-8  h-13 w-80'>
                        <input
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                            onKeyDown={(e) => e.key === 'Enter' && submitForm()}
                            className='p-2 h-12 border w-full text-white border-white rounded bg-transparent'
                            placeholder='First name'
                            type='text'
                        />
                        {error.firstName && <p className='text-red-500 text-sm mt-1'>{error.firstName}</p>}
                    </div>

                    <div className='mb-8 h-13 w-80'>
                        <input
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                            onKeyDown={(e) => e.key === 'Enter' && submitForm()}
                            placeholder='Last name'
                            className='p-2 h-12 border w-full text-white border-white rounded bg-transparent'
                            type='text'
                        />
                        {error.lastName && <p className='text-red-500 text-sm mt-1'>{error.lastName}</p>}
                    </div>

                    <div className='mb-8 h-13 w-80'>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            onKeyDown={(e) => e.key === 'Enter' && submitForm()}
                            placeholder='Email'
                            className='p-2 h-12 border w-full text-white border-white rounded bg-transparent'
                            type='text'
                        />
                        {error.email && <p className='text-red-500 text-sm mt-1'>{error.email}</p>}
                    </div>

                    <div className='mb-8 h-13 w-80'>
                        <input
                            onChange={(e) => setAddress(e.target.value)}
                            value={address}
                            onKeyDown={(e) => e.key === 'Enter' && submitForm()}
                            placeholder='Address'
                            className='p-2 h-12 border w-full text-white border-white rounded bg-transparent'
                            type='text'
                        />
                        {error.address && <p className='text-red-500 text-sm mt-1'>{error.address}</p>}
                    </div>

                    <div className='mb-8 h-13 w-80'>
                        <input
                            onChange={(e) => setCity(e.target.value)}
                            value={city}
                            onKeyDown={(e) => e.key === 'Enter' && submitForm()}
                            placeholder='City'
                            className='p-2 h-12 border w-full text-white border-white rounded bg-transparent'
                            type='text'
                        />
                        {error.city && <p className='text-red-500 text-sm mt-1'>{error.city}</p>}
                    </div>

                    <div className='mb-8 h-13 w-80'>
                        <input
                            onChange={(e) => setPostalCode(e.target.value)}
                            value={postalCode}
                            onKeyDown={(e) => e.key === 'Enter' && submitForm()}
                            placeholder='Postal code'
                            className='p-2 h-12 border w-full text-white border-white rounded bg-transparent'
                            type='text'
                        />
                        {error.postalCode && <p className='text-red-500 text-sm mt-1'>{error.postalCode}</p>}
                    </div>

                    <div className='mb-8 h-13 w-80'>
                        <input
                            onChange={(e) => setcardNumber(e.target.value)}
                            value={cardNumber}
                            onKeyDown={(e) => e.key === 'Enter' && submitForm()}
                            placeholder='Card number'
                            className='p-2 h-12 border w-full text-white border-white rounded bg-transparent'
                            type='text'
                        />
                        {error.cardNumber && <p className='text-red-500 text-sm mt-1'>{error.cardNumber}</p>}
                    </div>

                    <button
                        onClick={() => submitForm()}
                        className='bg-orange-500 text-white px-10 py-2 rounded mt-4 hover:bg-orange-600'>
                        PAY
                    </button>
                    {submit && <p className='text-green-600 mt-4'>Payment successful!</p>}
                </div>
            </div>
        </div>
    );
};

export default CheckoutModal;