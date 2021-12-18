import React, {useContext, useState } from 'react'

const ThumbnailContext = React.createContext();
const SetThumbnailContext = React.createContext();

const useThumbnail = () => useContext(ThumbnailContext);
const useSetThumbnail = () => useContext(SetThumbnailContext);

const ThumbnailProvider = ({children}) => {
    const [thumbnail, setThumbnail] = useState('');

    return (
        <ThumbnailContext.Provider value={thumbnail}>
            <SetThumbnailContext.Provider value={setThumbnail}>
                {children}
            </SetThumbnailContext.Provider>
        </ThumbnailContext.Provider>
    )
}

export default ThumbnailProvider;
export { useThumbnail, useSetThumbnail }
