import { FaStar } from 'react-icons/fa'

import styles from './styles.module.scss'

export function Rated() {
    return (
        <div className={styles.container}>
            <FaStar className={styles.active} />
            <FaStar className={styles.active} />
            <FaStar className={styles.active} />
            <FaStar className={styles.active} />
            <FaStar />
        </div>
    )
}