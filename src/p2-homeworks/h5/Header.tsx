import React from 'react'
import { NavLink } from 'react-router-dom'
import { PATH } from './Routes'

function Header() {
    return (
        <div>
            // add NavLinks
            <div><NavLink style={{textDecoration: 'none', color: 'red'}} to={PATH.PRE_JUNIOR}>PRE_JUNIOR</NavLink></div>
            <div><NavLink style={{textDecoration: 'none', color: 'red'}} to={PATH.JUNIOR}>JUNIOR</NavLink></div>
            <div><NavLink style={{textDecoration: 'none', color: 'red'}} to={PATH.JUNIOR_PLUS}>JUNIOR_PLUS</NavLink></div>
            <div><NavLink style={{textDecoration: 'none', color: 'red'}} to={PATH.MY_WORKS}>MY_WORKS</NavLink></div>
        </div>
    )
}

export default Header
