import './navbar.less'

import React,{
    FC,
    MouseEventHandler,
    useState,
} from 'react'
import {
    NavLink
} from "react-router-dom";
import classNames from 'classnames'

interface INavItem {
    name: string
    icon: React.ReactNode
    onClick?: MouseEventHandler<HTMLDivElement>
    navItem?: {
        to: string
    }
}

interface INavbarProps {
    navList: INavItem[],
    defaultIndex?: number
}

const Navbar: FC<INavbarProps> = props => {
    const {
        navList,
        defaultIndex = 0,
    } = props

    const [selectIndex, setIndex] = useState(defaultIndex)

    return (
        <div className="tt-navbar">
            {
                navList.map((item,index) => {
                    const cls = classNames('navbar-item', {
                        'active': selectIndex === index
                    })
                    const onClick = (e: any, clickIndex: number) => {
                        setIndex(clickIndex);
                        if (item.onClick) {
                            item.onClick(e)
                        }
                    }
                    if (item.navItem) {
                        const NavItem = item.navItem
                        return (
                            <NavLink key={index} to={NavItem.to} className="navbar-item">
                                <div className="icon">{item.icon}</div>
                                <span className="name">{item.name}</span>
                            </NavLink>
                        )
                    } else {
                        return (
                            <div key={index} className={cls} onClick={(e) => onClick(e, index)}>
                                <div className="icon">{item.icon}</div>
                                <span className="name">{item.name}</span>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default Navbar