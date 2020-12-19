import { Route, Switch } from 'react-router-dom'
import Wrapper from './Grid/Wrapper'
import ButtonsPage from './Pages/ButtonsPage'
import LayoutPage from './Pages/LayoutPage'
import TablesPage from './Pages/TablesPage'
import HomePage from './Pages/HomePage'

const RoutesLink = [
    {
        name: "Home",
        path: "/",
        exact: true,
        main: () => <HomePage/>
    },
    {
        name: "Layout",
        path: "/layouts",
        exact: true,
        main: () => <LayoutPage/>
    },
    {
        name: "Buttons",
        path: "/buttons",
        exact: true,
        main: () => <ButtonsPage/>
    },
    {
        name: "Table",
        path: "/tables",
        exact: true,
        main: () => <TablesPage/>
    },
    {
        name: "Panel",
        path: "/panels",
        exact: true,
        main: () => <h1>Panels</h1>
    },
]


const MainContent = () => {
    return  (
        <Wrapper>
            <Switch>
                {
                    RoutesLink.map((route, index) => (
                        <Route key={index} strict path={route.path} exact={route.exact} component={route.main}/>
                    ))
                }
            </Switch>
        </Wrapper>
    )
}

export default MainContent