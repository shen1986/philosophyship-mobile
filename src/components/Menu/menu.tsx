import './menu.less'
import React from 'react'
import {
    RightOutlined,
} from '@ant-design/icons'

const Menu = () => {
    return (
        <div className="tt-menu">
            <a className="tt-menu-item">
                <p className="tt-menu-name">用户ID</p>
                <span className="tt-menu-value">33581893</span>
            </a>
            <a className="tt-menu-item">
                <p className="tt-menu-name">用户名</p>
                <span className="tt-menu-value">推推UI</span>
                <RightOutlined className="tt-menu-icon"/>
            </a>
            <a className="tt-menu-item">
                <p className="tt-menu-name">二维码</p>
                <i className="fa fa-qrcode tt-menu-value"></i>
                <RightOutlined className="tt-menu-icon" />
                <i className="fa fa-chevron-right tt-menu-icon"></i>
            </a>
            <a className="tt-menu-item">
                <p className="tt-menu-name">隐私设置</p>
                <RightOutlined className="tt-menu-icon" />
            </a>
        </div>
    )
}

export default Menu