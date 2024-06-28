import React from "react";
import Navigacija from '../components/Navbar'


const Layout = ({children}) => {
    return(
        <>

            <Navigacija />

            {children}

        </>
    )
}
export default Layout