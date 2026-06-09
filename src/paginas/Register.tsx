import { Link, useNavigate } from 'react-router';
import { IoPersonOutline } from 'react-icons/io5';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import logo from '../assets/logo_winkel.jpg'

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
    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [conformPassword, setConfirmPassword] = useState<string>('');
    const [errors, setErrors] = useState<Errors>(undefined);

    const validation = () => {
        const newErrors: Errors = {};

        if (!name.trim()) newErrors.name = 'First name is required';
        if (!lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!email.trim()) newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
            newErrors.email = 'Invalid email address';
        if (!password.trim()) newErrors.password = 'Password is required';
        else if (password.length < 6)
            newErrors.password = 'Password must be at least 6 characters';
        if (conformPassword !== password)
            newErrors.confirmPassword = 'Passwords do not match';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (validation()) {
            await auth.addUser(name, lastName, email, password, telefone)
            nav('/');
        }
    };

    return (
        <div className='flex flex-col items-center justify-between'>
            {/* Header */}
            <div className='flex items-center w-full border-b border-gray-300 justify-between'>
                <div className='flex justify-between items-center mx-auto w-314'>
                    <Link to='/'>
                    <img src={logo} alt='logo' className='h-20' />
                    </Link>
                    <div className='h-11 w-11 rounded-full flex items-center justify-center bg-blue-50'>
                            <IoPersonOutline
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (auth.currentUser) {
                                        auth.setUserModal(!auth.userModal);
                                    } else {
                                        auth.setInlogModal(true);
                                    }
                                }}
                                className='size-6 cursor-pointer'
                            />
                        </div>
                </div>
            </div>

            {/* Formulier */}
            <div className='flex flex-col w-314 px-10'>
                <div className='border-b text-3xl h-13 font-light my-7 border-gray-300'>
                    Create an account
                </div>
                <div className='text-2xl mb-8 font-light'>Your details</div>
                <div className='grid grid-cols-2 gap-5'>
                    <div className='flex flex-col gap-1'>
                        <label className='text-sm'>First name *</label>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            placeholder='Enter your first name'
                            className='border pl-3 h-11 focus:outline-none focus:border-blue-950'
                            type='text'
                        />
                        {errors?.name && (
                            <div className='text-red-500 text-xs'>
                                {errors.name}
                            </div>
                        )}
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='text-sm'>Last name *</label>
                        <input
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                            placeholder='Enter your last name'
                            className='border pl-3 h-11 focus:outline-none focus:border-blue-950'
                            type='text'
                        />
                        {errors?.lastName && (
                            <div className='text-red-500 text-xs'>
                                {errors.lastName}
                            </div>
                        )}
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='text-sm'>Email address *</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            placeholder='Enter your email'
                            className='border pl-3 h-11 focus:outline-none focus:border-blue-950'
                            type='email'
                        />
                        {errors?.email && (
                            <div className='text-red-500 text-xs'>
                                {errors.email}
                            </div>
                        )}
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='text-sm'>Phone number</label>
                        <input
                            onChange={(e) => setTelefone(e.target.value)}
                            value={telefone}
                            placeholder='Enter your phone number'
                            className='border pl-3 h-11 focus:outline-none focus:border-blue-950'
                            type='tel'
                        />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='text-sm'>Password *</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            placeholder='Enter your password'
                            className='border pl-3 h-11 focus:outline-none focus:border-blue-950'
                            type='password'
                        />
                        {errors?.password && (
                            <div className='text-red-500 text-xs'>
                                {errors.password}
                            </div>
                        )}
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='text-sm'>Confirm password *</label>
                        <input
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={conformPassword}
                            placeholder='Confirm your password'
                            className='border pl-3 h-11 focus:outline-none focus:border-blue-950'
                            type='password'
                        />
                        {errors?.confirmPassword && (
                            <div className='text-red-500 text-xs'>
                                {errors.confirmPassword}
                            </div>
                        )}
                    </div>
                </div>

                <button
                    onClick={handleSubmit}
                    className='mt-8 h-11 w-full bg-blue-950 text-white font-semibold hover:bg-blue-900 active:translate-y-px transition-all cursor-pointer'>
                    Create account
                </button>

                <p className='text-sm text-center mt-4 text-gray-500'>
                    Already have an account?{' '}
                    <span
                        onClick={() => auth?.setInlogModal(true)}
                        className='text-blue-950 cursor-pointer underline'>
                        Sign in
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Register;