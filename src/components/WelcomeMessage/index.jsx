import styles from './WelcomeMessage.module.css'

const WelcomeMessage = ({category}) => {
    const welcomeMessages = {
        crystals: {
            title: "Step into the mystical world of crystals",
            details: "Explore our wide range of healing gemstones, each with its own unique energy and properties."
        },
        essentialoils: {
            title: "Indulge your senses with our collection of wonderful essential oils",
            details: "Discover the power of aromatherapy and natural remedies."
        },
        incenses: {
            title: "Elevate your space with our aromatic incenses",
            details: "Let the soothing scents transport you to a place of serenity and tranquility."
        },
        home: {
            title: "Welcome to Zen Gem Haven",
            details: "Discover this haven to elevate your inner peace as you nurture your mind, body, and spirit. Explore our curated collection and embark on your own healing journey."
        }
    };

    const message = welcomeMessages[category];

    return (
        <div className={styles.messageContainer}>
            <h4>{message.title}</h4>
            <p>{message.details}</p>
        </div>
    ) 
};

export default WelcomeMessage;