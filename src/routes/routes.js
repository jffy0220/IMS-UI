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
                    name: 'Orders',
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

export default [
    dashboardRoutes,
    orderRoutes
]