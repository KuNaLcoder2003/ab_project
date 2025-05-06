import React from 'react'
import { SignupForm } from '../components/SignUpForm'

const SignupPage = ({setIsLoggedIn}) => {
  return (
    <SignupForm setIsLoggedIn={setIsLoggedIn} />
  )
}

export default SignupPage
