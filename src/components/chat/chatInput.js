import React from 'react'
import './chatInput.css'

const ChatInput = () => {

    return (
        <div className='chatInput'>
            <div className='chatInput__inputBox'>
                <div className='chatInput__inputBoxTop' >
                    <i className="fas fa-info-circle"></i>
                    <p>Followers-Only Chat</p>
                </div>
                <div className='chatInput__inputBoxBottom' >
                    <div>
                        <i className="far fa-star"></i>
                    </div>
                    <input type='text' placeholder='Send a message' className='chatInput__inputBoxMessage' />
                    <div>
                        <i className="fab fa-ethereum" />
                    </div>
                    <div>
                        <i className="far fa-grin" />
                    </div>
                </div>
            </div>

            <div className='chatInput__actions'>
                <div className='chatInput__actionBox' >
                    <div className='chatInput__clock'>
                        <i className="far fa-clock"></i>
                    </div>
                    <p>10</p>
                </div>
                <div className='chatInput--Filler' />
                <div className='chatInput__actionBox'>
                    <i className="fas fa-cog" />
                </div>
                <div className='chatInput__sendBox'>
                    Chat
                </div>
            </div>
        </div>
    )
}

export default ChatInput
