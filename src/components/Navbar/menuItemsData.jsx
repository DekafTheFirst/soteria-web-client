
export const menuItemsData = [
    {
        title: 'Home',
        url: '/'
    },
    {
        title: 'About Us',
        url: '/about-us'
    },
    {
        title: 'Events',
        url: '/events'
    },
    {
        title: 'Watch',
        url: '/about-us'
    },
    // {
    //     title: 'Services',
    //     url: '/services',

    //     submenu: servicesList.map((service)=> ({
    //         title: service.title,
    //         url: service.slug
    //     }) )
    // },
    {
        title: 'More',
        url: '/more',
        submenu: [
            {
                title: 'Project Management',
                url: 'project-management',
                submenu: [
                    {
                        title: 'Project Management',
                        url: 'project-management'
                    },
                    {
                        title: 'Project Timing',
                        url: 'project-managemen'
                    },
                    {
                        title: 'Public Private',
                        url: 'project-managemen'
                    },
                ]
            },
            {
                title: 'Project Timing',
                url: 'project-managemen'
            },
            {
                title: 'Public Private',
                url: 'project-managemen'
            },
        ]
    },




]