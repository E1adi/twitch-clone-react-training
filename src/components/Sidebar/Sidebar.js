import React, { useState } from 'react'
import MinimizedSidebar from './minimizedSidebar'
import ExtendedSidebar from './extendedSidebar'

const followedChannels = [
    { name: 'SpeeDoX', followers: '1M', avatar: '' },
    { name: 'nesi', followers: '1M', avatar: '' }
]

const recommendedChannels = [
    { name: 'Taniuchka', followers: '1M', avatar: '' },
    { name: 'MrAchmad', followers: '1M', avatar: '' },
]

const Sidebar = () => {
    const [minimized, setMinimized] = useState(false);
    const toggle = () => {
        setMinimized(!minimized);
    }

    const getPartToRender = (isMininmized) => {
        return isMininmized ?
            <MinimizedSidebar followed={followedChannels} recommended={recommendedChannels} onToggle={toggle} /> :
            <ExtendedSidebar followed={followedChannels} recommended={recommendedChannels} onToggle={toggle} />;
    }

    return (
        getPartToRender(minimized)
    );
}

export default Sidebar
