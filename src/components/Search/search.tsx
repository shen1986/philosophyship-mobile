import './search.less'
import React,{
    FC,
    useState,
    ChangeEventHandler,
    FocusEventHandler,
    MouseEventHandler,
    useRef,
} from 'react'
import {
    SearchOutlined,
    CloseOutlined,
} from '@ant-design/icons'
import classNames from 'classnames'

interface SuggestItem {
    value: string
}

interface ISearchProps {
    onSearch:(searchValue: string) => void
    searchResult?: any
    onChange?: (changeValue: string) => void
    suggest?: SuggestItem[]
}

const Search: FC<ISearchProps> = props => {
    const {
        searchResult,
        onChange,
        onSearch,
        suggest,
    } = props

    const [inputValue, setInput] = useState<string>('')
    const [isFocus, setIsFocus] = useState(false)
    const inputELm = useRef<HTMLInputElement>(null)
    const handleClear: MouseEventHandler<HTMLSpanElement> = (e) => {
        setInput('')
        inputELm.current?.focus()
    }
    const handleCanel: MouseEventHandler<HTMLSpanElement>  = (e) => {
        setInput('')
        setIsFocus(false)
    }
    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setInput(e.target.value)
        if (onChange) {
            onChange(e.target.value)
        }
    }
    const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
        setIsFocus(true)
    }
    const handleSuggestClick = (selectValue: string) => {
        setInput(selectValue)
        setIsFocus(false)
        if (onSearch) {
            onSearch(selectValue)
        }
    }
    const handleSearch: MouseEventHandler<HTMLSpanElement> = e => {
        setInput('')
        setIsFocus(false)
        if (onSearch) {
            onSearch(inputValue)
        }
    }
    return (
        <>
            {/* 带suggest的搜索框 */}
            <div className={classNames("tt-search", { "on-focus": isFocus })}>
                {/* 搜索框 */}
                <form className="tt-search-form" action="#">
                    <div className="tt-search-input-wrap">
                        <SearchOutlined className="tt-search-icon" onClick={handleSearch}/>
                        <input
                            ref={inputELm}
                            type="text"
                            className="tt-search-input"
                            placeholder="搜索"
                            required
                            value={inputValue}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            // onBlur={handleBlur}
                        />
                        <CloseOutlined className="tt-search-clear" onClick={handleClear}/>
                    </div>
                    <span className="tt-search-cancel" onClick={handleCanel}>取消</span>
                </form>
                {/* 搜索建议 */}
                <ul className="tt-search-suggest">
                    {suggest?.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="tt-suggest-item"
                                onClick={() => handleSuggestClick(item.value)}
                            >
                                {item.value}
                            </li>
                        )
                    })}
                </ul>
            </div>
            {searchResult}
        </>
    )
}

export default Search