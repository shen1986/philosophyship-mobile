import './styles/index.less'

import React from 'react'
// import ButtonPage from './pages/buttonPage'
// import SearchPage from './pages/searchPage'
// import ListPage from './pages/listPage'
import GridPage from './pages/gridPage'
// import MenuPage from './pages/menuPage'

import {
    BrowserRouter as Router,
} from "react-router-dom";


function App() {
    return (
        <Router>
            
            {/* <ButtonPage /> */}
            {/* <SearchPage /> */}
            {/* <ListPage /> */}
            <GridPage />
            {/* <MenuPage /> */}
        </Router>
    );
}

export default App;
