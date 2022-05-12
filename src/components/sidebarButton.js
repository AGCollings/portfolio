import './sidebarButton.css'
import React from 'react'

export default
class SidebarButton extends React.Component
{
    render = () =>
    {
        let id = 'sidebarButton'

        if (this.props.selected)
        {
            id = 'sidebarButtonActive'
        }

        return (
            <div id={id} onClick={() => { this.props.handleClick(this.props.value) }}>
                {this.props.value}
            </div>
        )
    }
}