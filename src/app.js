import './app.css'
import React from 'react'
import Sidebar from './components/sidebar'

export default
class App extends React.Component
{
    sidebarTabs = [
        "About",
        "Web Development",
        "Game Development",
        "Modelling & Animation",
        "Contact & Commissions"
    ]

    state = {
        activePage: this.sidebarTabs[0]
    }

    setActivePage = (pageName) =>
    {
        this.setState({activePage: pageName})
    }
    
    render = () =>
    {
        return (
            <div id="app" >
                <Sidebar tabs={this.sidebarTabs} setActivePage={this.setActivePage} activePage={this.state.activePage} />
            </div>
        )
    }
}