import './contentDisplay.css'
import React from 'react'

export default
class ContentDisplay extends React.Component
{
    render = () =>
    {
        let title = <></>
        let description = <></>

        let centerPiece = <></>

        if (this.props.content !== undefined)
        {
            title = <div id='title'>{this.props.content.title}</div>
            description = <div id='description'>{this.props.content.description}</div>
            if (this.props.content.centerPiece !== undefined)
            {
                centerPiece = this.props.content.centerPiece
            }
        }

        return (
            <div id='contentDisplay' >
                {title}
                {centerPiece}
                {description}
            </div>
        )
    }
}