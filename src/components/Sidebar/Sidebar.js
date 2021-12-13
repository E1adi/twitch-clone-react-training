import React from 'react'
import Channel from './Channel'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <h5>Followed Channels</h5>
            <Channel avatar='' 
                name='SpeeDox'
                followers='1M' />
            <Channel avatar='' 
                name='Yoness'
                followers='1K' />
            <h5>Recomended Channels</h5>
            <Channel avatar='' 
                name='DoubleL'
                followers='100K' />

            <p class='sidebar___topShowMore'>Show More</p>
        </div>
    )
}

export default Sidebar
