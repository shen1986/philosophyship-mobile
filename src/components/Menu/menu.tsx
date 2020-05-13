import React,{
    FC,
} from 'react'

const Menu:FC = props => {
    const {
        children
    } = props
    return (
        <div className="tt-menu">
            {children}
        </div>
    )
}

export default Menu