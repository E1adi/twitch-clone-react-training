import React, { useRef, useEffect } from 'react'
import Webcam from 'react-webcam'
import { useStage } from '../../hooks/stageProvider';
import { useSetThumbnail } from '../../hooks/thumbnailProvider';
import './streamWindow.css'

const StreamWindow = () => {
    const setThumbnail = useSetThumbnail();
    const webcamRef = useRef(null);
    const stage = useStage();
    useEffect(() => {
        const [prevStage, currStage] = stage;
        if(!prevStage && currStage === 1) {
            setThumbnail(webcamRef.current?.getScreenshot())
        }

        console.log(`effect - stage changed: ${stage}`)
    }, [stage, setThumbnail])

    return (
        <div className='streamWindow'>
            <Webcam 
                height='auto'
                width='100%'
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                />
        </div>
    )
}

export default StreamWindow
