import styles from '../styles/components/ChallangeBox.module.css';
import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';
export function ChallangeBox() {
    const {
            activeChallenge, 
            resetChallenge,
            completeChallenge
    } = useContext(ChallengeContext);
    
    const {resetCountdown} = useContext(CountdownContext);


    function handleChallengeSucceded(){
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed(){
        resetChallenge();
        resetCountdown();
    }

    return(
        <div className={styles.challangeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challangeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
                        <strong>Novo desafio</strong>
                        <p>
                            {activeChallenge.description}
                        </p>


                    </main>
                    <footer>
                        <button 
                            type="button"
                            className={styles.challangeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>
                        <button 
                            type="button"
                            className={styles.challangeSuccededButton}
                            onClick={handleChallengeSucceded}
                        >Completei</button>
                    </footer>
                </div>
            ) : 
                (
                    <div className={styles.challangeNotActive}>
                        <strong>Finalize um ciclo para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level Up"/>
                            Avance de level completando desafios.
                        </p>
                    </div>
                )
            }
        </div>
    );
}