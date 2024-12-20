import { Suspense } from 'react'
import Flashsale from './Flashsale'
import Product from './Product'
import Productloader from '../Loader/Productloader'

const FlashProduct = () => {
    return (
        <>
            <div className='my-20'>
                <Flashsale/>
                <Suspense fallback={<Productloader/>}>
                  <Product/>  
                </Suspense>
                
            </div>
        </>
    )
}

export default FlashProduct