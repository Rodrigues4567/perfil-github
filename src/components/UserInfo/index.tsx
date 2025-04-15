import styles from './UserInfo.module.css'
import { User } from '../../types'

type UserInfoProp = {
    apiGithub: User | null
    isLoading: boolean;
    errorMensage: string | null;
}

function UserInfo({ apiGithub, isLoading, errorMensage }: UserInfoProp) {
    return (
        <div className={styles.container}>

            {isLoading ? (

                <p className={styles.loading}>Carregando...</p>
                
            ) : errorMensage ? (

                <p className={styles.errorMensage}>{errorMensage}</p>

            ) : apiGithub ? (

                <div key={apiGithub.id} className={styles.userContent}>

                    <div className={styles.userDesc}>
                        <h3>{apiGithub.name}</h3>
                        <p>{apiGithub.bio}</p>
                    </div>
                    <img src={apiGithub.avatar_url} alt="perfil" />

                </div>

            ) : (
                <div style={{ height: '250px', width: '100%' }}></div>
            )}
        </div>
    )
}

export default UserInfo
