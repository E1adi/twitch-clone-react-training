import React from 'react'
import Body from '../body/body';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import './streamingPlatform.css'

const StreamingPlatform = () => {
    return (
        <div className='streamingPlatform'>
            <Header />
            <div className='streamingPlatform__main'>
                <Sidebar />
                <Body />
            </div>
        </div>
    )
}

export default StreamingPlatform
