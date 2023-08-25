import React from 'react'
import Header from '../component/Header'
import BannerPart from '../component/BannerPart'
import SingleProductList from '../component/SingleProductList'
import TrendingItems from '../component/TrendingItems'
import ClientReview from '../component/ClientReview'
import FeaturePart from '../component/FeaturePart'
import SubscribePart from '../component/SubscribePart'
import FooterPart from '../component/FooterPart'

const Index = () => {
   return (
      <>
         {/* <Header /> */}
         <BannerPart />
         <SingleProductList/>
         <TrendingItems/>
         <ClientReview/>
         <FeaturePart/>
         <SubscribePart/>
         {/* <FooterPart/> */}
      </>
   )
}

export default Index