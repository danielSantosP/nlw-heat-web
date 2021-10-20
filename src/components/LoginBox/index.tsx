import { VscGithubInverted } from 'react-icons/vsc'
import styles from './styles.module.scss'
import { useAuth } from '../../hooks/useAuth'

export function LoginBox(){
  
  const { signInUrl } = useAuth()
  
  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href={signInUrl} className={styles.signInWithGitHub}>
        <VscGithubInverted size="24" />
        Entrar com Github
      </a>
    </div>
  )
}