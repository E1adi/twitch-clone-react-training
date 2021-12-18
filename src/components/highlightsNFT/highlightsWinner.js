import React from 'react'
import { Formatter } from '../../common/common';
import { useThumbnail } from '../../hooks/thumbnailProvider';
import './highlightsWinner.css'

const HighlightsWinner = ({ winner }) => {
    const thumbnail = useThumbnail();

    return (
        <div className='highlightsWinner'>
            <div className='highlightsWinner__swag'>
                <p>WINNER WINNER CHICKEN DINNER</p>
            </div>
            <div className='highlightsWinner__main'>
                <div className='highlightsWinner__video'>
                    <div className='highlightsWinner__videoFrame'>
                        <img src={thumbnail} alt='thumbnail' />
                        <i className="fas fa-play" />
                    </div>
                </div>
                <div className='highlightsExtended__details'>
                    <div className='highlightsExtended__detailRow'>
                        <span className='highlightsExtended__details--bold'>Winner:</span> {winner.name}
                    </div>
                    <div className='highlightsExtended__detailRow'>
                        <span className='highlightsExtended__details--bold'>Bid:</span> {Formatter.format(winner.bid)} <br />
                    </div>
                    <p>Congratz for your new NFT!!</p>
                </div>
            </div>
        </div>
    )
}

export default HighlightsWinner
