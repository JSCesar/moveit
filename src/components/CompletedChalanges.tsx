import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/CompletedChallanges.module.css';

export function CompletedChallanges() {
    const {currentChallengesCompleted} = useContext(ChallengeContext)


    return (
        <div className={styles.completedChallangesContainer}>
            <span>Desafios Completos</span>
            <span>{ currentChallengesCompleted }</span>
        </div>
    );
}