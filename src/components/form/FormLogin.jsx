import React from 'react'
import { UserIcon } from '@heroicons/react/24/solid';

function FormLogin() {
  return (
    <div>
      <form className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <input
          type="email"
          placeholder="Email"
          className="mb-4 p-2 border border-gray-300 rounded w-64"
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-4 p-2 border border-gray-300 rounded w-64"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
      <UserIcon className="h-6 w-6 text-gray-500" />
      </form>
    </div>
  )
}

export default FormLogin
