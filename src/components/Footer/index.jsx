import styles from './Footer.module.css'

const Footer = ({category}) => {
  return (
    <div className={styles.footer}>
      <p>thank you for visiting <span className={styles.path}>zgh{category}</span></p>
      <p>source code available <a target='_blank' href='https://github.com/blombergalex/gems'>here</a></p>
    </div>
  )
}

export default Footer