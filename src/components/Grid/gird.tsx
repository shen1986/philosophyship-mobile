import './grid.less'
import React, {
    FC,
} from 'react'
import classNames from 'classnames'

interface GridItem {
    key: string
    icon: React.ReactNode
    label: string
}

interface IGridProps {
    gridItem: GridItem[]
    gridCol?: 2 | 3 | 4 | 5 
    onClick?: (key: string) => void
    noBorder?: boolean
}

const Grid: FC<IGridProps> = props => {
    const {
        gridItem,
        gridCol = 3,
        onClick,
        noBorder = false,
    } = props



    return (
        // <!-- 九宫格 -->
        <div className={classNames("tt-grid",
            {"no-border": noBorder},
            { [`tt-grid-${gridCol}`]: gridCol !== 3}
        )}>
            {gridItem.map(item => {
                const handleClick = (key: string) => {
                    if (onClick) {
                        onClick(key)
                    }
                }
                return (
                    <div
                        key={item.key}
                        className="tt-grid-item"
                        onClick={() => handleClick(item.key)}
                    >
                        <div className="tt-grid-icon">{item.icon}</div>
                        <p className="tt-grid-label">{item.label}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Grid