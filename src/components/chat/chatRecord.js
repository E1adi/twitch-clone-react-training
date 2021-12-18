import React from 'react'
import './chatRecord.css'

const ChatRecord = ({color, sender, content}) => {
    const style = {
        color: color
    }

    return (
        <div className='chatRecord'>
            <p><span style={style}>{sender}: </span>{content}</p>
        </div>
    )
}

export default ChatRecord
