import { useState } from 'react';
import { IoClose } from "react-icons/io5";


interface RegisterModalProps {
    registreren: boolean;
    setRegistreren: (value: boolean) => void;
}

interface FormErrors {
    email?: string;
    password?: string;
    confirmPassword?: string;
}

const RegisterModal = (props: RegisterModalProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState<FormErrors>({});
    const [submit, setSubmit] = useState(false);

    const validations = () => {
        const newErros: FormErrors = {};
        if (!email.includes('@')) {
            newErros.email = 'Invalid Email';
        }
        if (password.length < 8) {
            newErros.password = 'Password needs to be at least 8 characters';
        }
        if (confirmPassword !== password) {
            newErros.confirmPassword = 'Passwords need to match';
        }
        setError(newErros);
        return Object.keys(newErros).length === 0;
    };

    const submitForm = () => {
        if (validations()) {
            console.log('Form Validated');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setSubmit(true);

            setTimeout(() => {
                setSubmit(false);
                props.setRegistreren(false);
            }, 2000);
        }
    };

    return (
        <div
            onClick={() => props.setRegistreren(false)}
            className='fixed inset-0 z-53 flex items-center justify-center bg-black/50'>
            <div
                onClick={(e) => e.stopPropagation()}
                className='md:w-120 h-full w-full bg-black/80 z-60 md:h-125 flex justify-center md:rounded-xl p-8'>
                <div className='w-100 flex flex-col items-center'>
                    <p className='text-white text-3xl mb-10'>Registreren</p>
                    <div className='absolute right-10 top-10 text-white'><IoClose 
                    onClick={()=>props.setRegistreren(false)}
                    className='size-8 cursor-pointer'/>
                    </div>
                    <div className='mb-8 h-13 w-80'>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            onKeyDown={(e) => e.key === 'Enter' && submitForm()}
                            type='email'
                            placeholder='Email'
                            className='p-2 h-12 border w-full text-white border-white rounded bg-transparent'
                        />
                        {error.email && <p className='text-red-500 text-sm mt-2'>{error.email}</p>}
                    </div>

                    <div className='mb-8 h-13 w-80'>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            onKeyDown={(e) => e.key === 'Enter' && submitForm()}
                            type='password'
                            placeholder='Password'
                            className='p-2 h-12 border w-full border-white text-white rounded bg-transparent'
                        />
                        {error.password && <p className='text-red-500 text-sm mt-2'>{error.password}</p>}
                    </div>

                    <div className='mb-8 h-13 w-80'>
                        <input
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                            onKeyDown={(e) => e.key === 'Enter' && submitForm()}
                            type='password'
                            placeholder='Confirm Password'
                            className='p-2 h-12 border w-full text-white border-white rounded bg-transparent'
                        />
                        {error.confirmPassword && <p className='text-red-500 text-sm mt-2'>{error.confirmPassword}</p>}
                    </div>

                    <button
                        onClick={submitForm}
                        className='bg-orange-500 text-white px-6 py-2 rounded mt-4 hover:bg-orange-600'>
                        Register
                    </button>
                    {submit && <p className='text-green-500 mt-4'>You are registrated</p>}
                </div>
            </div>
        </div>
    );
};

export default RegisterModal;