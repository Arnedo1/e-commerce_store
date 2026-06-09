import { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const InlogModal = () => {
    const auth = useContext(AuthContext);
    const nav = useNavigate();
    

    const validate = (inlogEmail: string) => {
        const user = auth.users.find((user) => user.email === inlogEmail);
        if (user) {
            auth.setUserExists(true);
        } else {
            auth.setInlogModal(false);
            auth.setInlogEmail('');
            nav('/Register');
        }
    };

    const login = (inlogPassword: string) => {
        const user = auth.users.find(
            (user) =>
                user.email === auth.inlogEmail &&
                user.password === inlogPassword
        );
        if (user) {
            auth.setCurrentUser(user);
            auth.setInlogModal(false);
            auth.setInlogPassword('');
        } else {
            console.log('Verkeerd wachtwoord');
        }
    };

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className='h-100 w-90 flex flex-col gap-3 bg-white shadow-xl p-8'>
            <div className='flex justify-between text-[20px]'>
                <div>INLOGGEN</div>
                <div
                    className='cursor-pointer'
                    onClick={() => {
                        auth.setInlogModal(false);
                        auth.setInlogEmail('');
                        auth.setInlogPassword('');
                        auth.setUserExists(false);
                    }}>
                    X
                </div>
            </div>
            <div className='border h-15 mt-2 border-gray-300'>
                {!auth.userExists ? (
                    <input
                        onChange={(e) => auth.setInlogEmail(e.target.value)}
                        value={auth.inlogEmail}
                        placeholder='E-mailadres'
                        className='h-full w-full pl-2 focus:outline-none'
                    />
                ) : (
                    <input
                        onChange={(e) => auth.setInlogPassword(e.target.value)}
                        value={auth.inlogPassword}
                        placeholder='Wachtwoord'
                        type='password'
                        className='h-full w-full pl-2 focus:outline-none'
                    />
                )}
            </div>
            <div>
                <button
                    onClick={() =>
                        !auth.userExists
                            ? validate(auth.inlogEmail)
                            : login(auth.inlogPassword)
                    }
                    className='h-15 w-full bg-black text-white font-semibold hover:bg-gray-800'>
                    DOORGAAN
                </button>
            </div>
            {!auth.userExists &&
            <div className='text-[14px] flex mx-auto'>
                Nog geen account?{' '}
                <Link to={'/Register'}>
                    <span
                        onClick={() => auth.setInlogModal(false)}
                        className='cursor-pointer underline ml-2'>
                        Start hier
                    </span>
                </Link>
            </div>}
        </div>
    );
};

export default InlogModal;
