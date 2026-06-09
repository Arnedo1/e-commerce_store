import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router"

const UserModal = () => {
    const auth = useContext(AuthContext)
    const nav = useNavigate()

    return (
        <div onClick={(e) => e.stopPropagation()} className='bg-white shadow-xl p-6 z-51 flex flex-col gap-4 w-60'>
            <div className='text-sm text-gray-500'>Ingelogd als</div>
            <div className='font-medium'>{auth.currentUser?.first_name} {auth.currentUser?.last_name}</div>
            <div className='text-sm text-gray-400'>{auth.currentUser?.email}</div>
            <button
                onClick={() => {auth.logout()
                    nav('/')

                }
            
            }
                className='h-10 w-full bg-blue-950 text-white font-semibold hover:bg-blue-900 cursor-pointer'>
                Uitloggen
            </button>
        </div>
    )
}

export default UserModal