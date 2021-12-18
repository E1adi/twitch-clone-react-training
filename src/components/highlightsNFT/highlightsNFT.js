import React, { useState, useEffect } from 'react'
import { useStage, useSetStage } from '../../hooks/stageProvider'
import HighlightsBanner from './highlightsBanner'
import HighlightsBidStarting from './highlightsBidStarting'
import HighlightsExtended from './highlightsExtended'
import HighlightsWinner from './highlightsWinner'
import './highlightsNFT.css'

const title = "OMFG!!!!😲😲";
const description = "I just killed more than 60% of the players in the map!!"
const initialBids = [
    { name: "NFT-Rex", bid: 21850, time: 1 },
    { name: "Jak", bid: 22500, time: 2 },
    { name: "Jak", bid: 22500, time: 3 },
    { name: "Jak", bid: 22500, time: 4 },
    { name: "Vip3r", bid: 22800, time: 5 },
    { name: "XCaliber", bid: 23000, time: 6 },
    { name: "P1tta", bid: 23500, time: 7 },
    { name: "Jon3s", bid: 23750, time: 8 }
];

const HighlightsNFT = () => {
    const [bids, setBids] = useState(initialBids);
    const updateBids = (newBids) => {
        const bids = newBids.slice();
        bids.sort((a, b) => b.bid - a.bid);
        setBids(bids);
    };

    const stage = useStage()[1];
    const setStage = useSetStage();
    useEffect(() => {
        updateBids(initialBids);
    }, []);

    const renderStage = () => {
        switch(stage) {
            case 1: return <HighlightsBidStarting title={title} />
            case 2: return <HighlightsBanner bids={bids} title={title}  onClick={() => setStage([stage, stage + 1])} />
            case 3: return <HighlightsExtended bids={bids} title={title} onAddBid={updateBids} description={description} onReducerClick={() => setStage([stage, stage - 1])} />
            case 4: return <HighlightsWinner winner={bids[0]} title={title} />
            default: return <></>;
        }
    }
    return (
        <div className='highlightsNft'>
            {renderStage()}
        </div>
    )
}

export default HighlightsNFT
