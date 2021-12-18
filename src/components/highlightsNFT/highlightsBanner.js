import React from 'react'
import { Formatter } from '../../common/common';
import { useThumbnail } from '../../hooks/thumbnailProvider';
import './highlightsBanner.css'


const leadersColor = ['gold', 'silver', '#CD7F32'].map((color) => ({ color: color }));


const FormatLeader = (bid, position) => {
    return (
        <div key={`${bid.name}-${bid.bid}`}>
            <p style={leadersColor[position]}>{position + 1}. {bid.name}</p>
            <div></div>
            <p>{Formatter.format(bid.bid)}</p>
        </div>
    );
}

const getUniqueLeaders = (leaders, maxAmount) => {
    let diffenetLeaders = new Set();
    const length = leaders.length;
    let i = 0;
    let results = [];
    while (i < length && diffenetLeaders.size < maxAmount) {
        const leader = leaders[i++];
        if (!diffenetLeaders.has(leader.name)) {
            diffenetLeaders.add(leader.name);
            results.push(leader);
        }
    }

    return results;
}

const HighlightsBanner = ({ bids, title, onClick }) => {
    const leaders = getUniqueLeaders(bids, 3);
    const thumbnail = useThumbnail();

    return (
        <div className='highlightsBanner'>
            <div className='highlightsBanner__title'>
                {title}
            </div>
            <div className='highlightsBanner__main'>
                <div className='highlightsBanner__video'>
                    <div className='highlightsBanner__videoFrame'>
                        <img src={thumbnail} alt='thumbnail' />
                        <i className="fas fa-play" />
                    </div>
                </div>
                <div className='highlightsBanner__leaders'>
                    {leaders.map((bid, index) => FormatLeader(bid, index))}
                </div>
            </div>
            <div onClick={onClick} className='highlightsBanner__extender'>
                <i className="fas fa-chevron-down" />
            </div>
        </div>
    )
}

export default HighlightsBanner
