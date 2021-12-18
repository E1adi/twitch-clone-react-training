import React from 'react'
import Chat from '../chat/chat'
import ProfileBanner from '../profileBanner/profileBanner'
import StreamWindow from '../streamWindow/streamWindow'
import './body.css'

const Body = () => {
    return (
        <div className='body'>
            <div className='body__main'>
                <StreamWindow />
                <ProfileBanner />
            </div>
            <Chat />
        </div>
    )
}

export default Body
