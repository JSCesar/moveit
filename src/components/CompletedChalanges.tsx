import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/CompletedChallanges.module.css';

export function CompletedChallanges() {
    const {challengesCompleted} = useContext(ChallengeContext)


    return (
        <div className={styles.completedChallangesContainer}>
            <span>Desafios Completos</span>
            <span>{ challengesCompleted }</span>
        </div>
    );
}