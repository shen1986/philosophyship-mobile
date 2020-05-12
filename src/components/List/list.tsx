import './list.less'
import React,{
    FC,
} from 'react'

type ListType = 'simple' | 'oneCol'

interface ListOneCol {
    img: string
    title: string
    price: number
    desc: string
}
interface IListProps {
    listSource: string[] | ListOneCol[]
    type?: ListType
}

const List: FC<IListProps> = props => {
    const {
        listSource,
        type="simple"
    } = props

    const renderListItem = () => {
        if (type === 'simple') {
            return (
                <>
                    {(listSource as string[]).map((item, index) => {
                        return (
                            <li key={index} className="tt-list-item">{item}</li>
                        )
                    })}
                </>
            )
        } else if (type === 'oneCol') {
            return (
                <>
                {(listSource as ListOneCol[]).map((item, index) => {
                    return (
                        <li key={index} className="tt-list-item">
                            <div className="item-img-wrap">
                                <img className="item-img" src={item.img} alt="机械键盘"/>
                            </div>
                            <div className="item-content-wrap">
                                <h1 className="item-title">{item.title}</h1>
                                <p className="item-price">￥{item.price}</p>
                                <p className="item-desc">{item.desc}</p>
                            </div>
                        </li>
                    )
                })}
                </>
            )
        }
    }
    return (
        // <!-- 简单列表 -->
        <ul className="tt-list">
            {renderListItem()}
        </ul>
    )
}

export default List