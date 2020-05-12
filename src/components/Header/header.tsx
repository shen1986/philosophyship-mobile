import './header.less'

import React,{
    FC,
    MouseEventHandler,
} from 'react'
import classNames from 'classnames'
interface IHeaderProps {
    leftIcon?: React.ReactNode,
    title: string,
    rightIcon?: React.ReactNode,
    onLeftClick?: MouseEventHandler<HTMLInputElement>
    onRightClick?: MouseEventHandler<HTMLInputElement>
    className?: string
}
const Header: FC<IHeaderProps> = props => {
    const {
        leftIcon,
        title,
        rightIcon,
        onLeftClick,
        onRightClick,
        className,
    } = props

    return (
        <div className={classNames("tt-header", className)}>
            <div className="left" onClick={onLeftClick}>{leftIcon}</div>
            <div className="title">{title}</div>
            <div className="right" onClick={onRightClick}>{rightIcon}</div>
        </div>
    )
}

export default Header