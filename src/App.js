import React  from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import './sass/style.sass'
import Wrapper from './components/Grid/Wrapper'
import Row from './components/Grid/Row'
import Column from './components/Grid/Column'
import SideBarNav from './components/SideBarNav'
import MainContent from './components/MainContent'
import Menu from './components/Menu'
import useTheme from './hooks/useTheme'
import SideBarRight from './components/SideBarRight'

const App = () => {

    const [theme, toggleTheme, componentMounted] = useTheme()

    if (!componentMounted) {
        return (<div>Loading... </div>)
    }

    return  (
        <>
            <Router>
                <div className="main">
                    <Menu/>
                    <Wrapper fluid className="mt-7">
                        <Row>
                            <Column className="md-col-3 lg-col-2 sidebar bg--default">
                                <SideBarNav theme={theme} toggleTheme={toggleTheme}/>
                            </Column>
                            <Column className="md-col-6 lg-col-10">
                                <MainContent/>
                            </Column>
                            {/*<Column className="md-col-3 lg-col-2 sidebar bg--default">*/}
                            {/*    <SideBarRight/>*/}
                            {/*</Column>*/}
                        </Row>
                    </Wrapper>
                </div>
            </Router>
        </>
    )
}

export default App