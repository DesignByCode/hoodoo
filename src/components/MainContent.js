import { Route, Switch } from 'react-router-dom'
import Wrapper from './Grid/Wrapper'
import ButtonsPage from './Pages/ButtonsPage'
import LayoutPage from './Pages/LayoutPage'
import TablesPage from './Pages/TablesPage'
import HomePage from './Pages/HomePage'
import PanelPage from './Pages/PanelPage'
import NavPage from './Pages/NavPage'
import { Component } from 'react'
import FormPage from './Pages/FormPage'



const RoutesLink = [
    {
        name: "Home",
        path: "/",
        exact: true,
        main: () => <HomePage/>
    },
    {
        name: "Layout (The Grid)",
        path: "/layout",
        exact: true,
        main: () => <LayoutPage/>
    },
    {
        name: "Navigation",
        path: "/navigation",
        exact: true,
        main: () => <NavPage/>
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
        main: () => <PanelPage/>
    },
    {
        name: "Form",
        path: "/form",
        exact: true,
        main: () => <FormPage/>
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