import styles from './Intro.module.css'
import { Lotus } from '../Lotus';

const Intro = () => {
    return(
        <div className={styles.intro}>
            {/* <div className={styles.lotusContainer}> */}
                <Lotus />
            {/* </div> */}
                <p className={styles.introText}>Zen Gem Haven</p>
        </div>
    )
}

export default Intro;