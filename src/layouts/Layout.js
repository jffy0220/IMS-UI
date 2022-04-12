import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './MainLayout'

import Inventory from 'inventory/Inventory'
import OrderDetails from 'orders/order-details'
import Orders from 'orders/Orders'
import PurchaseOrder from 'purchaseOrders/PurchaseOrder'
import PurchaseOrderDetail from 'purchaseOrders/PurchaseOrderDetail'

const Layout = () => {

    return (
        <>
            <Routes>
                {/* //--- Main Layout */}
                <Route element={<MainLayout />}>

                    {/*Inventory*/}
                    <Route path="inventory" element={<Inventory />} />

                    {/*Orders*/}
                    <Route path="order-details" element={<OrderDetails />} />
                    <Route path="orders" element={<Orders />} />

                    {/*Purchase Orders*/}
                    <Route path="purchaseorders" element={<PurchaseOrder />} />
                    <Route path="purchaseorder-details" element={<PurchaseOrderDetail />} />
                </Route>
            </Routes>
        </>
    )
}

export default Layout