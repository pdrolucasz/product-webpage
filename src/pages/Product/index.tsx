import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'
import styles from './styles.module.scss'

import { ProductInfos } from '../../components/ProductInfos'
import { ProductDetails } from '../../components/ProductDetails'
import { Footer } from '../../components/Footer'

import shirtExample from '../../assets/shirtExample.png'


export function Product() {
    

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <p>
                    <Link to="/">Home</Link>
                    <FiChevronRight />
                    <Link to="/">Category 1</Link>
                    <FiChevronRight />
                    <Link to="/">Product Page</Link>
                </p>

                <ProductInfos />
            
                <ProductDetails />

                <div className={styles.otherProducts}>
                    <h2>You may also like</h2>

                    <ul>
                        <li><img src={shirtExample} alt="blusa"/></li>
                        <li><img src={shirtExample} alt="blusa"/></li>
                        <li><img src={shirtExample} alt="blusa"/></li>
                        <li><img src={shirtExample} alt="blusa"/></li>
                    </ul>
                </div>

                <div className={styles.community}>
                    <h2>Get inspired by our community</h2>

                    <ul>
                        <li><FaInstagram size={80} /></li>
                        <li><FaInstagram size={80} /></li>
                        <li><FaInstagram size={80} /></li>
                        <li><FaInstagram size={80} /></li>
                        <li><FaInstagram size={80} /></li>
                        <li><FaInstagram size={80} /></li>
                    </ul>
                </div>

                <div className={styles.newsletter}>
                    <h3>Subscribe to our newsletter</h3>

                    <div>
                        <input type="text" />

                        <button type="button">
                            Subscribe
                        </button>
                    </div>
                </div>
            <Footer />
            </div>
        </div>
    )
}

