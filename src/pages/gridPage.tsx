
import React from 'react'
import Content from '../components/Content/content'
import Grid from '../components/Grid/gird'
import {
    AreaChartOutlined,
} from '@ant-design/icons'


const GridPage = () => {
    const gridData = [
        {
            icon: <AreaChartOutlined />,
            label: "格子1",
            key: "格子1"
        },
        {
            icon: <AreaChartOutlined />,
            label: "格子2",
            key: "格子2"
        },
        {
            icon: <AreaChartOutlined />,
            label: "格子3",
            key: "格子3"
        },
        {
            icon: <AreaChartOutlined />,
            label: "格子4",
            key: "格子4"
        },
        {
            icon: <AreaChartOutlined />,
            label: "格子5",
            key: "格子5"
        },
        {
            icon: <AreaChartOutlined />,
            label: "格子6",
            key: "格子6"
        },
        {
            icon: <AreaChartOutlined />,
            label: "格子7",
            key: "格子7"
        },
    ]
    
    return (
        <Content>
            <Grid
                gridItem={gridData}
                onClick={(key) => { alert(key)}}
            />
        </Content>
    )
}

export default GridPage