import React from 'react'
import Catalog from '../components/catalog/Catalog'
import './CatalogPage.css'
import CtaText from '../components/cta-text/CtaText'

function CatalogPage(){

    return(
        <div className='container'>
            <div className='logo-container'>
                <img src='images/skeleton-logo.png' className='logo'/>
            </div>
            <div className='cta-text'>
                <CtaText/>
            </div>
            <Catalog/>
        </div>
    )
}

export default CatalogPage