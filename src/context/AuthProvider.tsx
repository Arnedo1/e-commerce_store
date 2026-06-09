import { useState, useEffect} from 'react';
import { AuthContext } from './AuthContext';
import type { ReactNode } from 'react';
import type { User } from '../data/type';



const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [inlogModal, setInlogModal] = useState<boolean>(false);
    const [inlogEmail, setInlogEmail] = useState<string>('')
    const [inlogPassword, setInlogPassword] = useState<string>('')
    const [users, setUsers] = useState<User[]>([])
    const [userExists, setUserExists] = useState<boolean>(false);
    const [userModal, setUserModal] = useState<boolean>(false)
    const [currentUser, setCurrentUser] = useState<User | null>(() => {
        const stored = localStorage.getItem('currentUser')
        return stored ? JSON.parse(stored) : null
    })

    
    useEffect(() => {
        if (currentUser) {
            localStorage.setItem('currentUser', JSON.stringify(currentUser))
        } else {
            localStorage.removeItem('currentUser')
        }
    }, [currentUser])
    

    useEffect(() => {
        const getUsers = async()=>{
            try {
                const res = await fetch('http://localhost:3000/users')
                const data = await res.json()
                setUsers(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        getUsers()
    }, [])

    const addUser = async (first_name: string, last_name: string, email: string, password: string, phone: string) => {
        try {
            const res = await fetch('http://localhost:3000/users', {  
                method: 'POST',  
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify({ first_name, last_name, email, password, phone })
            })
            const data = await res.json()
            setCurrentUser(data) 
        } catch (error) {
            console.log(error)
        }
    }

    const logout = () => {
        setCurrentUser(null)
        setUserModal(false)
    }
    
   

    return (
        <AuthContext.Provider
            value={{
                inlogModal,
                setInlogModal,
                inlogEmail,
                setInlogEmail,
                inlogPassword,
                setInlogPassword,
                users,
                setUsers,
                setCurrentUser,
                currentUser,
                userExists,
                setUserExists,
                addUser,
                logout,
                userModal,
                setUserModal
            }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
