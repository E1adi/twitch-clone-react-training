import React, {useEffect, useState,useMemo } from 'react'
import HighlightsNFT from '../highlightsNFT/highlightsNFT'
import './chat.css'
import ChatBody from './chatBody'
import ChatDrops from './chatDrops'
import ChatHeader from './chatHeader'
import ChatInput from './chatInput'

const initMessages = [
    { color: 'red', sender: 'elad', content: 'Dude!!!!!', time: 1 },
    { color: 'blue', sender: 'joijojo', content: 'WOW WOW WOW WOW😲😲', time: 2 },
    { color: 'green', sender: 'bjvj hg', content: 'is this guy real?!?!🤯', time: 3 },
    { color: 'gray', sender: 'zsgfnmgj,h', content: 'lol', time: 4 },
    { color: 'pink', sender: ',mnjj', content: 'rofl', time: 5 },
    { color: 'yellow', sender: 'sagferhdj', content: 'you\'re amazing!!', time: 6 },
    { color: 'brown', sender: ',hfhjgdkj', content: 'will you merry me?', time: 7 },
    { color: 'orange', sender: 'bvkjfjk', content: 'Knock Knock', time: 8 },
    { color: 'silver', sender: 'kjgyfuyf', content: 'Who\'s there?', time: 9 },
    { color: 'gold', sender: 'cfhdf', content: 'Cow says.', time: 10 },
    { color: 'red', sender: 'elad', content: 'Cow says who?', time: 11 },
    { color: 'blue', sender: 'joijojo', content: 'No, a cow says mooooo!', time: 12 },
    { color: 'green', sender: 'bjvj hg', content: 'That was hilarious!', time: 13 },
    { color: 'gray', sender: 'zsgfnmgj,h', content: 'wow, I have no ideas for new messages', time: 14 },
    { color: 'pink', sender: ',mnjj', content: 'OMG OMG OMG OMG', time: 15 },
    { color: 'yellow', sender: 'sagferhdj', content: 'This is gold!', time: 16 },
    { color: 'brown', sender: ',hfhjgdkj', content: '😍😍😍😍😍😍', time: 17 },
    { color: 'orange', sender: 'bvkjfjk', content: 'BOIIIIII', time: 18 },
    { color: 'silver', sender: 'kjgyfuyf', content: 'Please sell this moment!!', time: 19 },
    { color: 'gold', sender: 'cfhdf', content: 'I want it too!', time: 20 },
    { color: 'red', sender: 'elad', content: '🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀', time: 21 },
    { color: 'blue', sender: 'joijojo', content: 'i need it!', time: 22 },
    { color: 'green', sender: 'bjvj hg', content: 'Ohhh snap!', time: 23 },
    { color: 'gray', sender: 'zsgfnmgj,h', content: 'You know it!!', time: 24 },
    { color: 'pink', sender: ',mnjj', content: 'I need SUGARR', time: 25 },
    { color: 'yellow', sender: 'sagferhdj', content: 'monyeeeeeeeeeeeeeee', time: 26 },
    { color: 'brown', sender: ',hfhjgdkj', content: 'god damn1!!', time: 27 },
    { color: 'orange', sender: 'bvkjfjk', content: 'twoeee', time: 28 },
    { color: 'silver', sender: 'kjgyfuyf', content: '💣💣💣💣💣', time: 29 },
    { color: 'gold', sender: 'cfhdf', content: 'I\'m in love!!!!!', time: 30 },
];

const Chat = () => {
    const [messages, setmessages] = useState(initMessages);
    const length = useMemo(() => messages.length, [messages]);

    useEffect(() => {
        const interval = setInterval(() =>{
            setmessages(prev => {
                const rand = Math.floor(Math.random() * length/2);
                const newMessages = [...prev];
                for(let i = 0; i < rand; i++) {
                    const firstMessage = newMessages.shift();
                    newMessages.push(firstMessage);
                }
        
                return newMessages;
            });
        }, 500);


        return () => {
            clearInterval(interval);
        }
    }, [length]);

    return (
        <div className='chat'>
            <ChatHeader />
            <ChatDrops />
            <HighlightsNFT />
            <ChatBody messages={ messages }/>
            <ChatInput />
        </div>
    )
}

export default Chat
