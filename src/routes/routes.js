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

export default [
    dashboardRoutes
]