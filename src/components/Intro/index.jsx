import { useEffect, useState } from 'react';
import { Lotus } from '../Lotus';
import styles from './Intro.module.css'

const Intro = () => {

    const [showIntro, setShowIntro] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(()=> {
                setShowIntro(false);
            }, 1000);
        }, 3000);
        
        return () => clearTimeout(timer);
    }, []);

    return(
        <div className={`${styles.intro} ${ fadeOut ? styles.fadeOut : ''}`}>
            <div className={styles.lotusContainer}>
                <Lotus className={styles.lotus}/>
            </div>
            <p className={styles.introText}>Zen Gem Haven</p>
        </div>
        )
}
export default Intro;