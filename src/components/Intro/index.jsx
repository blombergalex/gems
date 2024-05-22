import { useEffect, useState } from 'react';
import { Lotus } from '../Lotus';
import styles from './Intro.module.css'

const Intro = () => {
    const [fadeOut, setFadeOut] = useState(false);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(()=> {
                setVisible(false);
            }, 1000);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    
    return(
        visible ? (
        <div className={`${styles.intro} ${ fadeOut ? styles.fadeOut : ''}`}>
            <div className={styles.lotusContainer}>
                <Lotus className={styles.lotus}/>
            </div>
            <p className={styles.introText}>Zen Gem Haven</p>
        </div>
        ): null
)};

export default Intro;