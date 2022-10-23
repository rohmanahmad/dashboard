export const checkup = () => {
    return 'ok'
}
export const getListMenu = () => {
    return new Promise((resolve) => {
        resolve({
            data: [
                {
                    link: '/dashboard',
                    icon: 'dashboard',
                    name: 'menu-dashboard',
                    title: 'Dashboard',
                },
                {
                    link: '/administration',
                    icon: 'administration',
                    name: 'menu-administration',
                    title: 'Administration',
                    childs: [
                        {
                            title: 'Gateway',
                            link: '/administration/gateway'
                        },
                        {
                            title: 'Server As Service',
                            link: '/administration/server-as-service'
                        }
                    ]
                }
            ]
        })
    })
}