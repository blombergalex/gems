import styles from './Footer.module.css'

const Footer = ({category}) => {
  return (
    <div className={styles.footer}>
      <p>thank you for visiting <span className={styles.path}>zgh{category}</span>&#x2022;</p>
      <p>source code available <a href='github.com/blombergalex/gems'>here</a></p>
    </div>
  )
}

export default Footer