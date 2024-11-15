import styles from './Header.module.css'

export const Header = ({category}) => {
  return(
    <header className='header'>
      <div  className='logo'><img src="/images/lotus.png" alt='zgh logo' height={60}/></div>
      <h1>{category}</h1>
    </header>
  )
}
