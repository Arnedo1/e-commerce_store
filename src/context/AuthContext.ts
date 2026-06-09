import { createContext } from "react"
import type { User } from "../data/type"

export interface AuthContextType {
inlogModal:boolean
setInlogModal:(value:boolean)=>void
inlogEmail:string
setInlogEmail:(value:string)=>void
inlogPassword:string
setInlogPassword:(value:string)=>void
users:User[]
setUsers:(value:User[])=>void
currentUser:User
setCurrentUser:(value:User)=>void
userExists:boolean
setUserExists:(value:boolean)=>void
addUser: (first_name: string, last_name: string, email: string, password: string, phone: string) => Promise<void>
logout:()=>void
userModal: boolean
setUserModal: (value: boolean) => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)
