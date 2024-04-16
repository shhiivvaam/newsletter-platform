import Header from '@/shared/widgets/header/header'
import React from 'react'
import Banner from './elements/banner'
import Branding from './elements/branding'
import Benefits from './elements/benefits'
import FeatureHighlight from './elements/feature.hightlight'
import Pricing from './elements/pricing'
import Footer from '@/shared/widgets/footer/footer'

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Branding />
            <Benefits />
            <FeatureHighlight />
            <Pricing active={''} />
            <Footer />
        </div>
    )
}

export default Home