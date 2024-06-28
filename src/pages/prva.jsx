import React, { Suspense } from 'react'
import Layout from '../components/Layout'



const Prva = () => {
    return(
        <Layout>
            <h1>Prva</h1>

            <Suspense fallback={<Loading />}>

                <h1>Neki tekst</h1>

            </Suspense>


        </Layout>
    )
}
export default Prva

function Loading() {
    return <h2>Loading...</h2>
}




