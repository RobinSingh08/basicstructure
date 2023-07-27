import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function login() {
    // const router=useRouter();
    // const handleclick=()=>{
    //     router.push("/")
    // }
  return (
    <div>
        <div className='flex flex-col justify-center items-center'>
            <h1>
                Login
            </h1>
            <label htmlFor="Username" className='mt-1'></label>
            <input type="text" name="username" id="username" className="border-black-100 border mt-1" />
            <label htmlFor="Password" className='mt-1'></label>
            <input className="border-black-100 border" type="password" name="pass" id="pass" />
            <Link href={"/"}>
            <button className="bg-cyan-400" >Login</button>

            </Link>
        </div>
    </div>
  )
}

