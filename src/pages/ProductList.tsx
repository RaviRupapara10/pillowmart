import React from 'react'
import Breadcrumb from '../component/Breadcrumb'
import ProductListPart from '../component/ProductListPart'
import ClientReview from '../component/ClientReview'
import FeaturePart from '../component/FeaturePart'
import SubscribePart from '../component/SubscribePart'

function ProductList() {
   return (
      <>
         <Breadcrumb text={'product list'} />
         <ProductListPart />
         <ClientReview />
         <FeaturePart />
         <SubscribePart />
      </>
   )
}

export default ProductList