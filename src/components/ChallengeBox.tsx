import styles from '../styles/components/ChallangeBox.module.css';
import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
export function ChallangeBox() {
    const {activeChallenge, resetChallenge} = useContext(ChallengeContext);
    

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
                            onClick={resetChallenge}
                        >
                            Falhei
                        </button>
                        <button 
                            type="button"
                            className={styles.challangeSuccededButton}
                        
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