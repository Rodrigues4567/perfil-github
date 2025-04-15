import styles from './UserInfo.module.css'
import { User } from '../../types'

function UserInfo({ apiGithub }: { apiGithub: User | null }) {
    if (!apiGithub) return null;

    return (
        <div className={styles.container}>
            <div key={apiGithub.id} className={styles.userContent}>

                <div className={styles.userDesc}>
                    <h3>{apiGithub.name}</h3>
                    <p>{apiGithub.bio}</p>
                </div>
                <img src={apiGithub.avatar_url} alt="perfil" />

            </div>
        </div>
    )
}

export default UserInfo
