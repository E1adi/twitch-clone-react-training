import React, { useState, useContext } from 'react'

const StageContext = React.createContext();
const SetStageContext = React.createContext();

const useStage = () => useContext(StageContext);
const useSetStage = () => useContext(SetStageContext);

const StageProvider = ({children}) => {
    const [stage, setstage] = useState([0, 0])
    const updateState = (newStage) => setstage(newStage);

    return (
        <StageContext.Provider value={stage}>
            <SetStageContext.Provider value={updateState}>
                {children}
            </SetStageContext.Provider>
        </StageContext.Provider>
    )
}

export default StageProvider
export { useStage, useSetStage };