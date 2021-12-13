import { Avatar } from "@material-ui/core";
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header___left'>
                <img className='header___leftLogo'
                    src='https://pngimg.com/uploads/twitch/twitch_PNG6.png'
                    alt='Twitch logo' />

                <h2>Following</h2>
                <h2>Browse</h2>
                <i className="fas fa-ellipsis-h"></i>
            </div>

            <div className='header___center'>
                <input type='text' placeholder='Search' />
                <div className='header___centerLogoContainer'>
                    <i className='fa fa-search' />
                </div>
            </div>

            <div className='header___right'>
                <div className='header___rightContainer'>
                    <i className='fas fa-crown' />
                    <i className='fas fa-inbox' />
                    <i className='fas fa-comment-alt' />

                    <div className='header___rightBits'>
                        <i className='fas fa-gem' />
                        <h4>Get Bits</h4>
                    </div>

                    <Avatar />
                </div>
            </div>


        </div>
    )
}

export default Header;