import React from 'react'
import Channel from './channel'
import './extendedSidebar.css'

const createChannel = (channel) => 
    <Channel
        key={channel.name}
        avatar={channel.avatar}
        name={channel.name}
        followers={channel.followers} 
    />

const ExtendedSidebar = ({followed, recommended, onToggle}) => {
    return (
        <div className='extendedSidebar'>
            <div className='extendedSidebar__top'>
                <div className='extendedSidebar___followedTitle'>
                    <h5>Followed Channels</h5>
                    <div className='extendedSidebar__minimize' onClick={onToggle}>
                        <i className="fas fa-chevron-left" />
                    </div>
                </div>
                {followed.map(createChannel)}
                <p className='extendedSidebar__showMore'>Show More</p>

                <h5>Recomended Channels</h5>
                {recommended.map(createChannel)}
                <p className='extendedSidebar__showMore'>Show More</p>
            </div>

            <div className='extendedSidebar___bottom'>
                <div className='extendedSidebar__search'>
                    <i className='fas fa-search' />
                    <input type='text' placeholder='Search to Add Friends' />
                </div>
            </div>
        </div>
    )
}

export default ExtendedSidebar
