import React, { useRef } from 'react'
import { Formatter } from '../../common/common';
import { useThumbnail } from '../../hooks/thumbnailProvider';
import './highlightsExtended.css'

const HighlightsExtended = ({ bids, title, description, onAddBid, onReducerClick }) => {
    const thumbnail = useThumbnail();
    const inputRef = useRef(null);

    const onBid = () => {
        const val = inputRef.current.value;
        if (val !== undefined && val.length > 0) {
            const newBids = bids.slice();
            const newBid = {
                name: 'MvP',
                bid: ~~val, 
                time: Date.now()
            }

            newBids.push(newBid);
            onAddBid(newBids)
        }
    }

    const formatLeader = (bid, index) => {
        return (
            <tr key={`${bid.name}-${bid.bid}-${bid.time}`}>
                <td>{index + 1}</td>
                <td>{bid.name}</td>
                <td>{Formatter.format(bid.bid)}</td>
            </tr>
        )
    }

    return (
        <div className='highlightsExtended'>
            <div className='highlightsExtended__info'>
                <div className='highlightsExtended__title'>
                    {title}
                </div>
                <div className='highlightsExtended__description'>
                    {description}
                </div>
            </div>

            <div className='highlightsExtended__video'>
                <div className='highlightsExtended__videoFrame'>
                    <img src={thumbnail} alt='thumbnail' />
                    <i className="fas fa-play" />
                </div>
            </div>

            <div className='highlightsExtended__bid'>
                <input type='number' className='highlightsExtended__bidInput' placeholder='Place your bid here' ref={inputRef} />
                <button onClick={onBid} className='highlightsExtended__bidButton'>Bid</button>
            </div>

            <div className='highlightsExtended__leaders'>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Bid</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bids.map(formatLeader)}
                    </tbody>
                </table>
            </div>

            <div onClick={onReducerClick} className='highlightsExtended__minimize'>
                <i className="fas fa-chevron-up" />
            </div>
        </div>
    )
}

export default HighlightsExtended
