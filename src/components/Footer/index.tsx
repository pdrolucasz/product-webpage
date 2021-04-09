import {
    FaRocket,
    FaInstagram,
    FaFacebook,
    FaTwitter
} from 'react-icons/fa'

import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

export function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.socialMedia}>
                <FaRocket size={60} />
                <div>
                    <strong>Follow us</strong>
                    <div>
                        <FaInstagram size={20} />
                        <FaFacebook size={20} />
                        <FaTwitter size={20} />
                    </div>
                </div>
            </div>
            <div>
                <strong>Menu</strong>
                <Link to="/">Homepage</Link>
                <Link to="/">Category 1</Link>
                <Link to="/">Category 2</Link>
                <Link to="/">About Us</Link>
            </div>
            <div>
                <strong>Contact</strong>
                <Link to="/">Email us</Link>
                <Link to="/">Call us</Link>
                <Link to="/">Chat online</Link>
            </div>
            <div>
                <strong>Policy</strong>
                <Link to="/">Shipping</Link>
                <Link to="/">Returns and Refunds</Link>
                <Link to="/">Privacy Policy</Link>
                <Link to="/">Cookie Policy</Link>
            </div>
        </footer>
    )
}