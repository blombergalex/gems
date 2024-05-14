import styles from './WelcomeMessage.module.css'

const WelcomeMessage = ({category}) => {
    return(
        <div>
            <h3>Discover our Selection of {category}</h3>
        </div>
    )
}

export default WelcomeMessage;