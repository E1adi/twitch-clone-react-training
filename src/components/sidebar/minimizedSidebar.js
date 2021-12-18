import React from 'react'
import './minimizedSidebar.css'

const renderChannel = (channel) => {
    return (
        <div className='minimizedSidebar__channel' key={channel.name}>
            <img src={channel.avatar} alt='avatar' />
        </div>
    )
}

const MinimizedSidebar = ({followed, recommended, onToggle}) => {
    return (
        <div className='minimizedSidebar'>
            <div className='minimizedSidebar__extend' onClick={onToggle}>
                <i className="fas fa-chevron-right" />
            </div>
            <div className='minimizedSidebar___followed'>
                <div className='minimizedSidebar__icon'>
                    <i className="far fa-heart" />
                </div>
                {followed.map(renderChannel)}
            </div>
            <div className='minimizedSidebar___recommended'>
                <div className='minimizedSidebar__icon'>
                    <i className="fas fa-video" />
                </div>
                {recommended.map(renderChannel)}
            </div>
            <div className='minimizedSidebar__icon' onClick={onToggle}>
                <i className="fas fa-user-friends" />
            </div>
        </div>
    )
}

export default MinimizedSidebar
