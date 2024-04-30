
export const menuItemsData = [
    {
        title: 'Home',
        url: '/'
    },
    {
        title: 'About Us',
        url: '/about-us',
    },
    {
        title: 'Connect',
        url: "/connect",
        submenu: [
            {
                title: 'Connect',
                url: '/connect',
            },   
            {
                title: 'Live Stream',
                url: '/connect/live-stream'
            },
            {
                title: 'Sermons',
                url: '/connect/sermons'
            },
            {
                title: 'Prayer Requests',
                url: '/connect/prayer-requests'
            },
            {
                title: 'Contact Us',
                url: '/connect/contact-us'
            },
        ]
    },
    {
        title:'Join Us',
        url: 'join-us',
    },
    {
        title: 'Events',
        url: '/events'
    },
    {
        title: 'More',
        submenu: [
            {
                title: 'Soteria In The Community',
                url: '/community-engagement',
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