import React from 'react'
import Breadcrumb from '../component/Breadcrumb'
import LoginPart from '../component/LoginPart'

function Login() {
  return (
    <>
      <Breadcrumb text={"Login"} />
      <LoginPart />
    </>
  )
}

export default Login