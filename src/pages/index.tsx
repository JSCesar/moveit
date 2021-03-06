import Head from 'next/head';

import { CompletedChallanges } from "../components/CompletedChalanges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import styles from '../styles/pages/Home.module.css';

import { ChallangeBox } from "../components/ChallengeBox";
import { CountdownContextProvider } from '../contexts/CountdownContext';
export default function Home() {

  
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <ExperienceBar/>
      <CountdownContextProvider>
        <section>
          <div>
            <Profile/>
            <CompletedChallanges />
            <Countdown />
          </div>
          <div>
            <ChallangeBox />
          </div>
        </section>
      </CountdownContextProvider>
   </div>
  )
}
