import React from 'react'
import Header from './Header'
const MainLayout = ({children}) => {
    return (
        <div>
            <Header />  
            <main className='site-main'>{children}</main>
        </div>
    )
}

export default MainLayout
