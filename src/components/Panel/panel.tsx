import './panel.less'
import React,{
    FC,
} from 'react'
import classNames from 'classnames'

interface IPanelProps {
    title: string
    noPadding?: boolean
}
const Panel: FC<IPanelProps> = props => {
    const {
        title,
        children,
        noPadding,
    } = props
    return (
        <>
            <h2 className="tt-panel-title">{title}</h2>
            <div className={classNames("tt-panel-body", { "no-padding": noPadding})}>
                {children}
            </div>
        </>
    )
}

export default Panel