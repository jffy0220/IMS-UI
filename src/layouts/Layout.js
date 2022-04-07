import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Inventory from 'inventory/Inventory'

const Layout = () => {

    return (
        <>
            <Routes>
                <Route path="inventory" element={<Inventory />} />
            </Routes>
        </>
    )
}

export default Layout