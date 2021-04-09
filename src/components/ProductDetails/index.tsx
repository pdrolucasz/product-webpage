import { useState } from 'react'

import styles from './styles.module.scss'
import { Review } from '../../components/Review'

export function ProductDetails() {
    const [tabDetails, setTabDetails] = useState('description')

    return (
        <section className={styles.container}>
                    <nav>
                        <button
                            onClick={() => setTabDetails('description')}
                            className={tabDetails === 'description' ? styles.active : ''}
                        >
                            Description
                        </button>
                        <button
                            onClick={() => setTabDetails('composition')}
                            className={tabDetails === 'composition' ? styles.active : ''}
                        >
                            Composition &amp; care
                        </button>
                        <button
                            onClick={() => setTabDetails('shipping')}
                            className={tabDetails === 'shipping' ? styles.active : ''}
                        >
                            Shipping &amp; Returns
                        </button>
                        <button
                            onClick={() => setTabDetails('freeSamples')}
                            className={tabDetails === 'freeSamples' ? styles.active : ''}
                        >
                            Free samples
                        </button>
                    </nav>

                    {tabDetails && (
                        <p>
                            <strong>{tabDetails}</strong>
                            Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it to make a type 
                            specimen book.
                        </p>
                    )}

                    <div className={styles.reviews}>
                        <h1>Customers reviews</h1>
                        <div>
                            <Review />
                            <Review />
                            <Review />
                        </div>
                    </div>
                </section>
    )
}