import { FaUserCircle } from 'react-icons/fa'
import { Rated } from '../Rating/Rated'

import styles from './styles.module.scss'

export function Review() {
    return (
        <div className={styles.container}>
            <FaUserCircle size={50} />
            <div>
                <Rated />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry's 
                </p>
            </div>
        </div>
    )
}