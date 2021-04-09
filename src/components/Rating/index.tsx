import { FaStar } from 'react-icons/fa'

import styles from './styles.module.scss'

export function Rating() {
    return (
        <div className={styles.container}>
            <button className={styles.active}>
                <FaStar />
            </button>
            <button className={styles.active}>
                <FaStar />
            </button>
            <button className={styles.active}>
                <FaStar />
            </button>
            <button>
                <FaStar />
            </button>
            <button>
                <FaStar />
            </button>
        </div>
    )
}