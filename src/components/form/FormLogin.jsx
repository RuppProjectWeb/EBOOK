import React, { useState } from 'react';
import { UserIcon } from '@heroicons/react/24/solid';
import { ErrorMessage, Field, Formik, Form } from "formik";


function FormLogin() {
  return (
    <div>
      <Formik
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-6">Login</h1>
            <div className="mb-4 relative">
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="p-2 border border-gray-300 rounded w-64"
              />
            </div>
            
            <div className="mb-4 relative">
              <Field
                name="password"
                placeholder="Password"
                className="p-2 border border-gray-300 rounded w-64 pr-10"
              />
              <button
                type="button"
                className="absolute right-2 top-2 text-gray-500"
              >
              </button>
            </div>
            
            <button
              type="submit"
              
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200 disabled:bg-blue-300"
            >
            </button>
            
            <UserIcon className="h-6 w-6 text-gray-500 mt-4" />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormLogin;