import React from 'react'
import './chatBody.css'
import ChatRecord from './chatRecord'

const ChatBody = ({messages}) => {
    const messageRecords = messages.map(message => {
        return (
            <ChatRecord 
                key={`${message.sender}-${message.message}-${message.time}`} 
                color={message.color} 
                sender={message.sender} 
                content={message.content} />
        )
    })

    return (
        <div className='chatBody'>
            {messageRecords}
        </div>
    )
}


export default ChatBody
