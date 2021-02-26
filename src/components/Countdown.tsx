import styles from '../styles/components/Countdown.module.css';
import { useState, useEffect, useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';

export function Countdown() {
    
    const { 
            minutes, 
            seconds, 
            isActive, 
            hasFinished, 
            startCountdown,
            resetCountdown 
        } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
    const [sencondLeft, secondRight] = String(seconds).padStart(2,'0').split('');

    return(

        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{sencondLeft}</span>
                    <span>{secondRight}</span>
                </div>

            </div>

            { hasFinished ? (
                 <button 
                    type="button" 
                    className={styles.countdownButton}
                    disabled
                >
                     Ciclo encerrado
                     
                 </button>
            ) : 
                <>
                    { isActive ? (
                        <button 
                            type="button" 
                            className={`${ styles.countdownButton } ${styles.countdownButtonActive}`}
                            onClick={resetCountdown}
                        >
                            Abandonar ciclo
                            
                        </button>
                    ) : (
                        <button 
                        type="button" 
                        className={styles.countdownButton}
                        onClick={startCountdown}
                        >
                        Iniciar um ciclo
                            
                        </button>
                    )}
                </>
            }

            
            

            

        </div>
        
    )  
}