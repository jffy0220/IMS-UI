import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './MainLayout'

import Inventory from 'inventory/Inventory'

const Layout = () => {

    return (
        <>
            <Routes>
                {/* //--- Main Layout */}
                <Route element={<MainLayout />}>
                    <Route path="inventory" element={<Inventory />} />
                </Route>
            </Routes>
        </>
    )
}

export default Layout