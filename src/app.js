import './app.css'
import React from 'react'
import Sidebar from './components/sidebar'
import ContentDisplay from './components/contentDisplay'

import myPicture from './images/me.png'
import crmPicture from './images/CRM.png'
import gamedevPicture from './images/UnityLinearAlgebra.png'
import batGif from './images/bat.gif'

import mailIcon from './images/mail.png'
import githubIcon from './images/githubIcon.png'
import linkedInIcon from './images/linkedInIcon.png'

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

    contentTabs = {
        'About':
        {
            title: "I'm Alex Collings, Welcome to my Portfolio",
            description: "I was initially interested in physics during my University years, but later swapped to a more software centric program at St. Lawrence College. I've become a Full-Stack Web Developer since then, working in the financial tech industry, although I'm always looking for new opportunities to improve my skills.",
            centerPiece: <img id="aboutImage" src={myPicture} alt="Me" />
        },
        'Web Development':
        {
            title: 'Proficient with Data Management & Display',
            description: "While working in finance, I designed and built from the ground up a Customer Relationship Manager using ReactJS and ExpressJS. ",
            centerPiece: <img id="webdevImage" src={crmPicture} alt=""/>
        },
        'Game Development':
        {
            title: 'Experienced in Game Physics',
            description: "Through several university level linear algebra and calculus courses, as well as experience with the application of Vectors, Matrices, and Quaternions in Unity, I have a good understanding of video game physics.",
            centerPiece: <img id="gamedevImage" src={gamedevPicture} alt=""/>
        },
        'Modelling & Animation':
        {
            title: 'Familiar with Blender',
            description: "Although not the most artisticly talented, I've been learning blender to improve my understanding of integrating animated models into games.",
            centerPiece: <img id="modellingAndAnimationImage" src={batGif} alt=""/>
        },
        'Contact & Commissions':
        {
            title:  'You can reach me here:',
            description: "If you have any questions or would like to commission a website or other project, please email me using the link above.",
            centerPiece:
                <div id="contactLinks" >
                    <img id='githubLink' class="contactLink" src={githubIcon} alt="Github Link" style={{height: "3rem", width: "3rem"}} onClick={() => { window.open('https://github.com/AGCollings', '_blank').focus() }} />
                    <img id='linkedinLink' class="contactLink" src={linkedInIcon} alt="LinkedIn Link" style={{height: "3rem", width: "3rem"}} onClick={() => { window.open('https://www.linkedin.com/in/alexander-collings-635b16192/', '_blank').focus() }} />
                    <img id='emailLink' class="contactLink" src={mailIcon} alt="Email Link" style={{height: "3rem", width: "3rem"}} onClick={() => { window.open('mailto:alexgcollings@gmail.com', '_blank').focus() }} />
                </div>
        }
    }

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
            <div id='app' >
                <Sidebar tabs={this.sidebarTabs} setActivePage={this.setActivePage} activePage={this.state.activePage} />
                <ContentDisplay content={this.contentTabs[this.state.activePage]} />
            </div>
        )
    }
}