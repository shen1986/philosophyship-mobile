import './grid.less'
import React from 'react'
const Grid = () => {
    return (
        // <!-- 九宫格 -->
        <div className="tt-grid tt-grid-2 no-border">
            <div className="tt-grid-item">
                <i className="fa fa-area-chart tt-grid-icon"></i>
                <p className="tt-grid-label">格子1</p>
            </div>
            <div className="tt-grid-item">
                <i className="fa fa-area-chart tt-grid-icon"></i>
                <p className="tt-grid-label">格子2</p>
            </div>
            <div className="tt-grid-item">
                <i className="fa fa-bar-chart tt-grid-icon"></i>
                <p className="tt-grid-label">格子3</p>
            </div>
            <div className="tt-grid-item">
                <i className="fa fa-area-chart tt-grid-icon"></i>
                <p className="tt-grid-label">格子4</p>
            </div>
            <div className="tt-grid-item">
                <i className="fa fa-area-chart tt-grid-icon"></i>
                <p className="tt-grid-label">格子5</p>
            </div>
            <div className="tt-grid-item">
                <i className="fa fa-bar-chart tt-grid-icon"></i>
                <p className="tt-grid-label">格子6</p>
            </div>
            <div className="tt-grid-item">
                <i className="fa fa-area-chart tt-grid-icon"></i>
                <p className="tt-grid-label">格子7</p>
            </div>
            <div className="tt-grid-item">
                <i className="fa fa-area-chart tt-grid-icon"></i>
                <p className="tt-grid-label">格子8</p>
            </div>
            <div className="tt-grid-item">
                <i className="fa fa-bar-chart tt-grid-icon"></i>
                <p className="tt-grid-label">格子9</p>
            </div>
        </div>
    )
}

export default Grid