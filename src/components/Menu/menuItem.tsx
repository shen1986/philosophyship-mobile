import React,{
    FC,
} from 'react'
import {
    RightOutlined
} from '@ant-design/icons'

interface IMenuItemProps {
    name: string
    value: string
    iconList: React.ReactNode[]
    rightArrow: boolean
}
const MenuItem:FC<IMenuItemProps> = props => {
    const {
        name,
        value,
        iconList,
        rightArrow,
    } = props
    return (
        <div className="tt-menu-item">
            <p className="tt-menu-name">{name}</p>
            <span className="tt-menu-value">{value}</span>
            {iconList.map(item => (<div className="tt-menu-icon">{item}</div>))}
            {rightArrow  && <RightOutlined className="tt-menu-icon"/>}
        </div>
    )
}

export default MenuItem