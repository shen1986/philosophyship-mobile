import React,{
    useState
} from 'react'
import Content from '../components/Content/content'
import Search from '../components/Search/search'

function ButtonPage() {
    const [searchResult, setResult] = useState<any>();
    const handleSearch = (searchValue: string) => {
        console.log(searchValue)
        setResult(
            <div>
                <p>123123123123</p>
                <p>123123123123</p>
                <p>123123123123</p>
                <p>123123123123</p>
                <p>123123123123</p>
                <p>123123123123</p>
                <p>123123123123</p>
                <p>123123123123</p>
            </div>
        )
    }
    return (
        <Content>
            <Search
                onSearch={handleSearch}
                suggest={[
                    {value: '月亮'},
                    {value: '太阳'}
                ]}
                searchResult={searchResult}
            />
        </Content>
    );
}

export default ButtonPage;
