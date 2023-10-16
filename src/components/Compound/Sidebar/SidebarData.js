import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import PersonIcon from '@mui/icons-material/Person';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import HomeIcon from '@mui/icons-material/Home';
// import ListAltIcon from '@mui/icons-material/ListAlt';
// import PeopleIcon from '@mui/icons-material/People';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

export const SidebarData = [
    {
        title: 'Calendar',
        icon: <CalendarMonthIcon/>,
        link: '/calendar'
    },
    {
        title: 'Bookings',
        icon: <ListAltOutlinedIcon/>,
        link: '/bookings'
    },
    {
        title: 'Clients',
        icon: <PeopleOutlineOutlinedIcon/>,
        link: '/clients'
    },
    {
        title: 'Services',
        icon: <WorkOutlineOutlinedIcon/>,
        link: '/services'
    },
    {
        title: 'Profile',
        icon: <PersonOutlineOutlinedIcon/>,
        link: '/profile'
    },
]