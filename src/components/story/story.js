import React from 'react'
import { useSetStage, useStage } from '../../hooks/stageProvider'
import './story.css'

const loremIpsum = 'Lorem ipsum dolor sit amet, eum verear apeirian recusabo no. No cum noster erroribus disputationi, pri ea alii option, sed ea probatus accusamus dissentias. Eu per nostrum quaestio vituperata, est et exerci inermis necessitatibus. Omnis laboramus sadipscing his at. Soleat fierent persequeris mel ei, ut eros scripta vel, eam tation diceret definiebas cu. Primis vivendum his cu. Veri munere sanctus id vim. Et quando nonumy quidam cum. Usu ei movet vidisse meliore, his at mazim incorrupte. Munere platonem necessitatibus eos an, eros putant detraxit nec eu.';
const getStoryForStage = (stage) => {
    switch (stage){
        case 0: return ['Highlight moment has just happened', loremIpsum]
        case 1: return ['Bidding is starting', loremIpsum];
        case 2: return ['Bidding on-going banner', loremIpsum];
        case 3: return ['Bidding on-going extended', loremIpsum];
        case 4: return ['Bidding is over', loremIpsum];
        default: return ['', ''];
    }
}

const Story = () => {
    const stagesAmount = 5
    const stage = useStage()[1];
    const setStage = useSetStage();
    const moveStage = (delta) => setStage([stage, (stage + delta + stagesAmount) % stagesAmount]);
    const [storyTitle, storyBody] = getStoryForStage(stage);

    return (
        <div className='story'>
            <div className='story__header'>
                <div onClick={() => moveStage(-1)} className='story__lastStage'>
                    <div className='story__leftIconContainer'>
                        <i className="fas fa-chevron-left" />
                    </div>
                    LAST STAGE
                </div>

                <h1 className='story__headerTitle'>
                    STORY MODE
                </h1>

                <div onClick={() => moveStage(1)} className='story__nextStage'>
                    NEXT STAGE
                    <div className='story__rightIconContainer'>
                        <i className="fas fa-chevron-right" />
                    </div>
                </div>
            </div>
            <div className='story__body'>
                <div className='story__stageTitle'>
                    {storyTitle}
                </div>
                <p className='story__stageBody'>
                    {storyBody}
                </p>
            </div>
        </div>
    )
}

export default Story
