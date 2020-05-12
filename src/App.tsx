import './styles/index.less'

import React from 'react'
// import ButtonPage from './pages/buttonPage'
// import SearchPage from './pages/searchPage'
// import ListPage from './pages/listPage'
import GridPage from './pages/gridPage'

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
        </Router>
    );
}

export default App;
