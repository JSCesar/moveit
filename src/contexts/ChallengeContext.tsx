import { createContext, ReactNode, useState } from 'react';
import challenges from "../../challenges.json";

interface Challenge{
    type: 'body' | 'eye',
    description: string,
    amount: number,
}

interface ChallengesContextData {
    level: number, 
    currentExperience: number, 
    currentChallengesCompleted: number,
    experienceToNextLevel: number,
    startNewChallenge: () => void,
    levelUp: () => void, 
    activeChallenge: Challenge,
    resetChallenge: () => void,
}

interface ChallengesProviderProps {
    children: ReactNode;
}

export const ChallengeContext = createContext({} as ChallengesContextData);

export function ChallengesProvider( {children}: ChallengesProviderProps ){

    const [level, setlevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(30);
    const [currentChallengesCompleted, setCurrentChallengesCompleted] = useState(0);
    const [activeChallenge, setactiveChallenge] = useState(null);
    
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);
    
    function levelUp() {
        setlevel(level + 1);
    }

    function resetChallenge() {
        setactiveChallenge(null);
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setactiveChallenge(challenge);

    }   

    return(
        <ChallengeContext.Provider 
            value={{
                level, 
                currentExperience, 
                currentChallengesCompleted,
                experienceToNextLevel,
                startNewChallenge,
                levelUp,
                activeChallenge,
                resetChallenge,
            }}
        >
            {children}
        </ChallengeContext.Provider>
    )

}