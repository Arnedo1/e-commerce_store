import { Link, useNavigate } from 'react-router';
import { IoPersonOutline } from 'react-icons/io5';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import logo from '../assets/logo_winkel.jpg';

interface Errors {
    name?: string;
    lastName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

const Register = () => {
    const auth = useContext(AuthContext);
    const nav = useNavigate();
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [password, setPassword] = useState('');
    const [conformPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState<Errors>(undefined);

    const validation = () => {
        const newErrors: Errors = {};
        if (!name.trim()) newErrors.name = 'First name is required';
        if (!lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!email.trim()) newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Invalid email address';
        if (!password.trim()) newErrors.password = 'Password is required';
        else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
        if (conformPassword !== password) newErrors.confirmPassword = 'Passwords do not match';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (validation()) {
            await auth.addUser(name, lastName, email, password, telefone);
            nav('/');
        }
    };

    return (
        <div className='flex flex-col items-center justify-between'>
            <div className='flex items-center w-full border-b border-gray-300 justify-between'>
                <div className='flex justify-between items-center mx-auto w-full max-w-7xl px-4'>
                    <Link to='/'><img src={logo} alt='logo' className='h-12 md:h-20' /></Link>
                    <div className='h-9 w-9 md:h-11 md:w-11 rounded-full flex items-center justify-center bg-blue-50'>
                        <IoPersonOutline
                           onClick={(e) => {
                            e.stopPropagation();
                            if (auth.currentUser) {
                                auth.setUserModal(!auth.userModal);
                            } else {
                                auth.setInlogModal(true);
                            }
                        }}
                            className='size-5 md:size-6 cursor-pointer'
                        />
                    </div>
                </div>
            </div>

            <div className='flex flex-col w-full max-w-7xl px-4 md:px-10'>
                <div className='border-b text-2xl md:text-3xl h-13 font-light my-7 border-gray-300'>
                    Create an account
                </div>
                <div className='text-xl md:text-2xl mb-8 font-light'>Your details</div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5'>
                    <div className='flex flex-col gap-1'>
                        <label className='text-sm'>First name *</label>
                        <input onChange={(e) => setName(e.target.value)} value={name}
                            placeholder='Enter your first name'
                            className='border pl-3 h-11 focus:outline-none focus:border-blue-950'
                            type='text' onKeyDown={(e) => e.key === 'Enter' && handleSubmit()} />
                        {errors?.name && <div className='text-red-500 text-xs'>{errors.name}</div>}
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='text-sm'>Last name *</label>
                        <input onChange={(e) => setLastName(e.target.value)} value={lastName}
                            placeholder='Enter your last name'
                            className='border pl-3 h-11 focus:outline-none focus:border-blue-950'
                            type='text' onKeyDown={(e) => e.key === 'Enter' && handleSubmit()} />
                        {errors?.lastName && <div className='text-red-500 text-xs'>{errors.lastName}</div>}
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='text-sm'>Email address *</label>
                        <input onChange={(e) => setEmail(e.target.value.toLowerCase())} value={email}
                            placeholder='Enter your email'
                            className='border pl-3 h-11 focus:outline-none focus:border-blue-950'
                            type='email' onKeyDown={(e) => e.key === 'Enter' && handleSubmit()} />
                        {errors?.email && <div className='text-red-500 text-xs'>{errors.email}</div>}
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='text-sm'>Phone number</label>
                        <input onChange={(e) => setTelefone(e.target.value)} value={telefone}
                            placeholder='Enter your phone number'
                            className='border pl-3 h-11 focus:outline-none focus:border-blue-950'
                            type='tel' onKeyDown={(e) => e.key === 'Enter' && handleSubmit()} />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='text-sm'>Password *</label>
                        <input onChange={(e) => setPassword(e.target.value)} value={password}
                            placeholder='Enter your password'
                            className='border pl-3 h-11 focus:outline-none focus:border-blue-950'
                            type='password' onKeyDown={(e) => e.key === 'Enter' && handleSubmit()} />
                        {errors?.password && <div className='text-red-500 text-xs'>{errors.password}</div>}
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='text-sm'>Confirm password *</label>
                        <input onChange={(e) => setConfirmPassword(e.target.value)} value={conformPassword}
                            placeholder='Confirm your password'
                            className='border pl-3 h-11 focus:outline-none focus:border-blue-950'
                            type='password' onKeyDown={(e) => e.key === 'Enter' && handleSubmit()} />
                        {errors?.confirmPassword && <div className='text-red-500 text-xs'>{errors.confirmPassword}</div>}
                    </div>
                </div>

                <button onClick={handleSubmit}
                    className='mt-8 h-11 w-full bg-blue-950 text-white font-semibold hover:bg-blue-900 active:translate-y-px transition-all cursor-pointer'>
                    Create account
                </button>
                <p className='text-sm text-center mt-4 mb-8 text-gray-500'>
                    Already have an account?{' '}
                    <span onClick={() => auth?.setInlogModal(true)} className='text-blue-950 cursor-pointer underline'>
                        Sign in
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Register;