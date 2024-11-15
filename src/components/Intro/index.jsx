import { useEffect, useState } from 'react';
import { Lotus } from '../Lotus';
import styles from './Intro.module.css'

const Intro = () => {
    const [fadeOut, setFadeOut] = useState(false);

    const [visible, setVisible] = useState(() => {
        return sessionStorage.getItem('introShown') !== 'true';
    });

    useEffect(() => {
        if (!visible) return;
    
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
                setVisible(false);
                sessionStorage.setItem('introShown', 'true');
            }, 1000);
        }, 3000);
    
        return () => clearTimeout(timer);
    }, [visible]);

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