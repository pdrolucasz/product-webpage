import { useState } from 'react'

import { FaStar } from 'react-icons/fa'

import styles from './styles.module.scss'

export function Rating() {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    return (
        <div className={styles.container}>
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1

                return (
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        />
                        <FaStar
                            color={ratingValue <= (hover || rating) ? '#6557f4' : '#a8a8b3'}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(0)}
                        />
                    </label>
                )
            })}
        </div>
    )
}