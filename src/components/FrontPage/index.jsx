import styles from './FrontPage.module.css'
import { Lotus } from '../Lotus';

const FrontPage = () => {
    return(
        <div className={styles.intro}>
            <Lotus />
        </div>
    )
}

export default FrontPage;