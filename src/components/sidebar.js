import './sidebar.css'
import React from 'react'
import SidebarButton from './sidebarButton'

export default
class Sidebar extends React.Component
{
    render = () =>
    {
        return (
            <div id="sidebar">
                {
                    this.props.tabs.map((value) =>
                    {
                        return <SidebarButton key={value} value={value} selected={value === this.props.activePage} handleClick={() => { this.props.setActivePage(value) }} />
                    })
                }
            </div>
        )
    }
}