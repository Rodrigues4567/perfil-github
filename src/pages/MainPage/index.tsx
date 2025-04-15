import styles from './MainPage.module.css'
import logo from '../../assets/Group 1.png'
import UserInfo from '../../components/UserInfo';
import { CiSearch } from "react-icons/ci";
import { RefObject } from 'react';
import { User } from '../../types';

type MainPageProp = {
    inputRef: RefObject<HTMLInputElement | null>;
    showApi: () => void;
    apiGithub: User | null
}

function MainPage({ inputRef, showApi, apiGithub }: MainPageProp) {
    return (
        <div className={styles.container}>

            <img src={logo} alt="logo" />

            <div className={styles.inputs_container}>
                <input ref={inputRef} type="text" id="inputText" autoComplete='off' placeholder='Digite um usuário do Github' />
                <button onClick={showApi}><CiSearch className={styles.icon} /></button>
            </div>

            <UserInfo apiGithub={apiGithub} />

        </div>
    )
}

export default MainPage
