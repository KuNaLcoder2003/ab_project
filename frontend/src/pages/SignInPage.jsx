import React from 'react'

import { SignInForm } from '../components/SignInform'

const SignInPage = ({setIsLoggedIn}) => {
  return (
    <div className='flex justify-center items-center'>
        <SignInForm setIsLoggedIn={setIsLoggedIn} />
    </div>
  )
}

export default SignInPage
