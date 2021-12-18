import React, { useState, useEffect } from 'react'
import moment from 'moment'
import './profileBanner.css'

const appendZeroIfNeeded = (num) => num < 10 ? `0${num}` : num.toString();
const extractTimespan = (duration) => {
    let h = appendZeroIfNeeded(Math.floor(duration.asHours()));
    let m = appendZeroIfNeeded(Math.floor(duration.minutes()));
    let s = appendZeroIfNeeded(Math.floor(duration.seconds()));
    return `${h}:${m}:${s}`;
}

const startTime = new moment(moment.now() - moment.duration(7.38, 'hours'));

const ProfileBanner = () => {
    const [time, setTime] = useState(moment.duration())
    const onMount = () => {
        return setInterval(() => {
            let now = new moment();
            let diff = moment.duration(now.diff(startTime));
            setTime(diff);
        }, 1000);
    }

    useEffect(() => {
        const interval = onMount();
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className='profileBanner'>
            <div className='profileBanner__logo'>

            </div>
            <div className='profileBanner__info'>
                <div className='profileBanner__top'>
                    <h3 className='profileBanner__name'>SpeeDoX</h3>
                    <div className='profileBanner___info--filler' />
                    <div className='profileBanner__buttons' >
                        <div className='profileBanner__followButton' >
                            <div>
                                <i className="far fa-heart"></i>
                            </div>
                            Follow
                        </div>
                        <div className='profileBanner__subscribeButton' >
                            <div>
                                <i className="far fa-star"></i>
                            </div>
                            Subscribe: 20% off
                            <div>
                                <i className="fas fa-chevron-down"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='profileBanner__bottom'>
                    <div className='profileBanner__bottomLeft'>
                        <div className='profileBanner__streamTitle'>
                            <p>Highlights NFT MVP! | Isn't it awesome?!?!?!</p>
                            <div className='profileBanner__tags'>
                                <p>Escape from tarkov</p>

                            </div>
                        </div>
                    </div>
                    <div className='profileBanner__bottomRight'>
                        <div className='profileBanner__bottomRightContainer'>
                            <div className='profileBanner__followersCount'>
                                <div>
                                    <i className="far fa-user" />
                                </div>
                                <p>26,052</p>
                            </div>
                            <div>{extractTimespan(time)}</div>
                            <div className='profileBanner__bottomRightIconContainer'>
                                <i className="fas fa-share-alt" />
                            </div>
                            <div className='profileBanner__bottomRightIconContainer'>
                                <i className="fas fa-ellipsis-v" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileBanner
