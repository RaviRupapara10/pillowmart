import React from 'react'
import Breadcrumb from '../component/Breadcrumb'
import CartPart from '../component/CartPart'

function Cart() {
  return (
    <>
      <Breadcrumb text={"Cart List"} />
      <CartPart />
    </>
  )
}

export default Cart