import { Avatar } from "@material-ui/core";
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header__left'>
                <img className='header__leftLogo'
                    src='https://pngimg.com/uploads/twitch/twitch_PNG6.png'
                    alt='Twitch logo' />

                <h2>Following</h2>
                <h2>Browse</h2>
                <i className="fas fa-ellipsis-h"></i>
            </div>

            <div className='header__center'>
                <input type='text' placeholder='Search' />
                <div className='header__centerLogo'>
                    <i className='fa fa-search' />
                </div>
            </div>

            <div className='header__right'>
                <div className='header__rightContainer'>
                    <i className='fas fa-crown' />
                    <i className='fas fa-inbox' />
                    <i className='fas fa-comment-alt' />

                    <div className='header__rightBits'>
                        <i className='fas fa-gem' />
                        <h4>Get Bits</h4>
                    </div>
                    
                    <Avatar className='header__profile'/>
                </div>
            </div>


        </div>
    )
}

export default Header;