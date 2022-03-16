import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Products',
        path: '/product',
        icon: <FaIcons.FaTshirt />,
        cName: 'nav-text'
    },
    {
        title: 'Cart',
        path: '/orders/new',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <FaIcons.FaInfo />,
        cName: 'nav-text'
    },
    
]