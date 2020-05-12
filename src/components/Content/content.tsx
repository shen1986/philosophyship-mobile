import './content.less'
import React,{
    FC,
} from 'react'

const Content: FC = props => {
    const {
        children
    } = props
    return (
        <div className="tt-content">
            {children}
        </div>
    )
}

export default Content