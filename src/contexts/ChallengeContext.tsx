import { createContext, ReactNode, useEffect, useState } from 'react';
import challenges from "../../challenges.json";

interface Challenge{
    type: 'body' | 'eye',
    description: string,
    amount: number,
}

interface ChallengesContextData {
    level: number, 
    currentExperience: number, 
    challengesCompleted: number,
    experienceToNextLevel: number,
    startNewChallenge: () => void,
    levelUp: () => void, 
    activeChallenge: Challenge,
    resetChallenge: () => void,
    completeChallenge: () => void,
}

interface ChallengesProviderProps {
    children: ReactNode;
}

export const ChallengeContext = createContext({} as ChallengesContextData);

export function ChallengesProvider( {children}: ChallengesProviderProps ){

    const [level, setlevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(30);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    const [activeChallenge, setactiveChallenge] = useState(null);
    
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    useEffect(() => {
        Notification.requestPermission();
    
    }, [])
    
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

        new Audio('/notification.mp3').play();

        if (Notification.permission === 'granted') {
            new Notification( 'Novo desafio', {
                body: `Valendo ${challenge.amount} xp!`
            });
        }


    } 
    function completeChallenge() {
        if(!activeChallenge)
            return;
        
        const {amount} = activeChallenge;
        let finalExperience = currentExperience + amount;
        
        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setactiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);

    }

    return(
        <ChallengeContext.Provider 
            value={{
                level, 
                currentExperience, 
                challengesCompleted,
                experienceToNextLevel,
                startNewChallenge,
                levelUp,
                activeChallenge,
                resetChallenge,
                completeChallenge,
            }}
        >
            {children}
        </ChallengeContext.Provider>
    )

}