import React from 'react'
import BannerPart from '../component/BannerPart'
import SingleProductList from '../component/SingleProductList'
import TrendingItems from '../component/TrendingItems'
import ClientReview from '../component/ClientReview'
import FeaturePart from '../component/FeaturePart'
import SubscribePart from '../component/SubscribePart'

function Body() {
   return (
      <>
         <BannerPart />
         <SingleProductList />
         <TrendingItems />
         <ClientReview />
         <FeaturePart />
         <SubscribePart />
      </>
   )
}

export default Body