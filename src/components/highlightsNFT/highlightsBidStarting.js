import React from 'react'
import { useThumbnail } from '../../hooks/thumbnailProvider'
import './highlightsBidStarting.css'

const HighlightsBidStarting = ({ title }) => {
    const thumbnail = useThumbnail();

    return (
        <div className='highlightsStarting'>
            <div className='highlightsStarting__video'>
                <div className='highlightsStarting__videoFrame'>
                    <img src={thumbnail} alt='thumbnail' />
                    <i className="fas fa-play" />
                </div>
            </div>
            <div className='highlightsStarting__content'>
                <div className='highlightsStarting__title'>
                    {title}
                </div>
                <p className='highlightsStarting__welcome'>
                    Bidding is about to start!<br />
                    Get Ready!!!
                </p>
            </div>
        </div>
    )
}

export default HighlightsBidStarting
