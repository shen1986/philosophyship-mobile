import './list.less'
import React,{
    FC,
} from 'react'

const List: FC = () => {
    return (
        // <!-- 简单列表 -->
        <ul className="tt-list">
            <li className="tt-list-item">北京</li>
            <li className="tt-list-item">上海</li>
            <li className="tt-list-item">天津</li>
            <li className="tt-list-item">重庆</li>
            <li className="tt-list-item">厦门</li>
            <li className="tt-list-item">广州</li>
            <li className="tt-list-item">...</li>
        </ul>
    )
}

export default List