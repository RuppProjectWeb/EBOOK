import React from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";;
import { Link } from 'react-router-dom';
import login from "../../public/images/login.png";
const Login = () => {
    return (
        <div className="flex h-screen items-center justify-center bg-gray-800">
            <div className="continer w-[75rem] h-[43rem] flex flex-cols items-center  bg-white p-8 rounded-lg shadow-lg jusityfy-between">
                <div className='bg-orange-500 w-full h-full rounded-lg'>
                    <form className="flex max-w-md flex-col  mx-auto gap-4">
                        <h1 className="text-6xl font-bold mt-17  mb-8">Login</h1>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email1">Your email</Label>
                            </div>
                            <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password1">Your password</Label>
                            </div>
                            <TextInput id="password1" type="password" required />
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember">Remember me</Label>
                        </div>
                        <Button type="submit" className='cursor-pointer'>Submit</Button>
                        <Link to="/register" className="text-zinc-300 hover:underline">
                            Don't have an account? Register here
                            </Link>
                    </form>
                </div>
                <div className='w-full h-full'>
                    <img src={login} alt="" />
                </div>
            </div>
        </div>

    )
}

export default Login