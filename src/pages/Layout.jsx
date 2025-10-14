import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from '../components/banner'

const Layout = () => {
    return(
        <div>
            
            <Banner />
            <div>
                <Outlet />
            </div>
            
            

        </div>
    )
}

export default Layout