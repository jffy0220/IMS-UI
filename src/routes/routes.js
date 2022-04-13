export const dashboardRoutes = {
    label: 'Dashboard',
    labelDisable: true,
    children: [
        {
            name: 'Dashboard',
            active: true,
            icon: 'chart-pie',
            children: [
                {
                    name: 'Inventory',
                    to: '/inventory',
                    exact: true,
                    active: true
                }
            ]
        }
    ]
}

export const orderRoutes = {
    label: 'Orders',
    labelDisable: true,
    children: [
        {
            name: 'Orders',
            active: true,
            icon: 'chart-pie',
            children: [
                {
                    name: 'Order Summary',
                    to: '/orders',
                    exact: true,
                    active: true
                },
                {
                    name: 'Order Details',
                    to: '/order-details',
                    exact: true,
                    active: true
                }
            ]
        }
    ]
}

export const purchaseOrderRoutes = {
    label: 'Purchase Order',
    labelDisable: true,
    children: [
        {
            name: 'Purchase Orders',
            active: true,
            icon: 'chart-pie',
            children: [
                {
                    name: 'Purchase Order Summary',
                    to: '/purchaseorders',
                    exact: true,
                    active: true
                },
                {
                    name: 'Purchase Order Detail',
                    to: '/purchaseorder-details',
                    exact: true,
                    active: true
                }
            ]
        }
    ]
}

export const returnRoutes = {
    label: 'Returns',
    labelDisable: true,
    children: [
        {
            name: 'Returns',
            active: true,
            icon: 'chart-pie',
            children: [
                {
                    name: 'Returns',
                    to: '/returns',
                    exact: true,
                    active: true
                },
                {
                    name: 'Create New Return',
                    to: '/create-new-return',
                    exact: true,
                    active: true
                }
            ]
        }
    ]
}

export default [
    dashboardRoutes,
    orderRoutes,
    purchaseOrderRoutes,
    returnRoutes
]