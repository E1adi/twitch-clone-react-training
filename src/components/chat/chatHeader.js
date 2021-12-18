import React from 'react'
import './chatHeader.css'

const ChatHeader = () => {
    return (
        <div className='chatHeader'>
            <div className='chatHedaer__minimize'>
                <i className='fas fa-arrow-right' />
            </div>

            <h5>STREAM CHAT</h5>

            <div className='chatHeader__people'>
                <i className="fas fa-user-friends" />
            </div>
        </div>
    )
}

export default ChatHeader
