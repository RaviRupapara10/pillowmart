
import AboutUs from '../component/AboutUs'
import Breadcrumb from '../component/Breadcrumb'
import ClientReview from '../component/ClientReview'
import FeaturePart from '../component/FeaturePart'
import Header from '../component/Header'
import SubscribePart from '../component/SubscribePart'

const About = () => {
   return (
      <>
         <Breadcrumb text={'About'} />
         <AboutUs />
         <FeaturePart />
         <ClientReview />
         <SubscribePart />
      </>
   )
}

export default About