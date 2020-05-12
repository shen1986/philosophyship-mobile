
import React from 'react'
import List from '../components/List/list'
import Content from '../components/Content/content'
import Panel from '../components/Panel/panel'


const ListPage = () => {
    const listSource = [
        "上海",
        "天津",
        "重庆",
        "厦门",
        "广州",
        "..."
    ]
    const oneColSource = [
        {
            img: 'http://ui.tuituitech.com/demo/img/list-img.jpg',
            title: 'FILCO斐尔可 机械键盘87游戏无线圣手忍者二代红轴茶青黑蓝牙双模',
            price: 998,
            desc: '已售1834件'
        },
        {
            img: 'http://ui.tuituitech.com/demo/img/list-img.jpg',
            title: 'FILCO斐尔可 机械键盘87游戏无线圣手忍者二代红轴茶青黑蓝牙双模',
            price: 998,
            desc: '已售1834件'
        },
        {
            img: 'http://ui.tuituitech.com/demo/img/list-img.jpg',
            title: 'FILCO斐尔可 机械键盘87游戏无线圣手忍者二代红轴茶青黑蓝牙双模',
            price: 998,
            desc: '已售1834件'
        },
        {
            img: 'http://ui.tuituitech.com/demo/img/list-img.jpg',
            title: 'FILCO斐尔可 机械键盘87游戏无线圣手忍者二代红轴茶青黑蓝牙双模',
            price: 998,
            desc: '已售1834件'
        },
    ]
    return (
        <Content>
            <Panel
                title="简单列表"
                noPadding={true}
            >
                <List
                    listSource={listSource}
                />
            </Panel>
            <Panel
                title="复杂列表"
                noPadding={true}
            >
                <List
                    listSource={oneColSource}
                    type="oneCol"
                />
            </Panel>
        </Content>
    )
}

export default ListPage