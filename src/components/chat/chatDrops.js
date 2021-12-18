import React from 'react'
import './chatDrops.css'

const ChatDrops = () => {
    return (
        <div className='chatDrops'>
            <div className='chatDrops__arrowContainer'>
                <i className="fas fa-chevron-left"></i>
            </div>

            <div className='chatDrops__main'>
                <div className='chatDrops__mainLeft'>
                    <div className='chatDrops__mainLeftGift'><i className="fas fa-gift fa-4x"></i></div>
                    <div className='chatDrops__mainLeftText'>
                        <h6>KillForFun</h6>
                        <i className="fas fa-gift fa-lg"></i>
                    </div>
                </div>
                <div className='chatDrops__mainRight'>
                    <div className='chatDrops__mainRightRow1'>
                        <i className="fas fa-gift fa-2x"></i>
                        <h6>IronSide</h6>
                    </div>
                    <div className='chatDrops__mainRightRow2'>
                        <i className="fas fa-gift fa-2x"></i>
                        <h6>M3ltDown</h6>
                    </div>
                </div>
            </div>

            <div className='chatDrops__arrowContainer'>
                <i className="fas fa-chevron-right"></i>
            </div>
        </div>
    )
}

export default ChatDrops
