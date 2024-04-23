
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
        title: 'Connect',
        url: '/connect',
        submenu: [
            {
                title: 'Connect',
                url: '',
            },
            
            // {
            //     title: 'Live Stream',
            //     url: '/watch'
            // },
            {
                title: 'Watch',
                url: '/watch'
            },
            {
                title: 'Prayer Request',
                url: '/prayer-request'
            },
            {
                title: 'Contact Us',
                url: '/contact-us'
            },
        ]
    },
    {
        title: 'Events',
        url: '/events'
    },
    {
        title: 'Watch',
        url: '/watch'
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
                title: 'Soteria In The Community',
                url: '/community',
            },
            {
                title: 'Plan Your Visit',
                url: '/plan-your-visit'
            },
            {
                title: 'Our Mobile App',
                url: '/mobile-app'
            },
        ]
    },




]