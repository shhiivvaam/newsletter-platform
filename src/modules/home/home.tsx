import Header from '@/shared/widgets/header/header'
import React from 'react'
import Banner from './features/banner'
import Branding from './features/branding'
import Benefits from './features/benefits'
import FeatureHighlight from './features/feature.hightlight'
import Pricing from './features/pricing'
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