import React from 'react'
import CheckoutPart from '../component/CheckoutPart'
import Breadcrumb from '../component/Breadcrumb'

function Checkout() {
  return (
    <>
    <Breadcrumb text={'Checkout'}/>
      <CheckoutPart />
    </>
  )
}

export default Checkout