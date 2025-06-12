import React from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
;
import register from "../../public/images/register.png"; // Assuming you have an image at this path
import { Link } from 'react-router-dom';


const Register = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-800">
      <div className="continer w-[75rem] h-[43rem] flex flex-cols items-center  bg-white p-8 rounded-lg shadow-lg jusityfy-between">
        <div className='bg-orange-500 w-full h-full rounded-lg'>
          <form className="flex max-w-md flex-col mx-auto gap-4">
          <h1 className="text-6xl font-bold mt-17  mb-8">Register</h1>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email2">Your email</Label>
              </div>
              <TextInput id="email2" type="email" placeholder="name@flowbite.com" required shadow />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password2">Your password</Label>
              </div>
              <TextInput id="password2" type="password" required shadow />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="repeat-password">Repeat password</Label>
              </div>
              <TextInput id="repeat-password" type="password" required shadow />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="agree" />
              <Label htmlFor="agree" className="flex">
                I agree with the&nbsp;
                <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                  terms and conditions
                </Link>
              </Label>
            </div>
            <Button type="submit" className='cursor-pointer'>Register new account</Button>
            <Link to="/login" className="text-zinc-300 hover:underline">
              Already have an account? Login here
              </Link>
          </form>
        </div>
        <div className='w-full h-full'>
         <img src={register} alt="" />
        </div>
      </div>
    </div>

  )
}

export default Register