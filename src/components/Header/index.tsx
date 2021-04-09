import { Link } from 'react-router-dom'

import { FiHeart, FiShoppingBag } from 'react-icons/fi'
import { FaRocket } from 'react-icons/fa'

import { ActiveLink } from '../ActiveLink'

import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <h1><FaRocket /> Company name</h1>

                <nav>
                    <ActiveLink activeClassName={styles.active} to="/">
                        Homepage
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} to="/category-1">
                        Category 1
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} to="/category-2">
                        Category 2
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} to="/wishlist">
                        <FiHeart /> Wishlist
                    </ActiveLink>
                </nav>

                <Link className={styles.cartButton} to="/shopping-cart">
                    <FiShoppingBag /> Shopping Cart
                </Link>
            </div>
        </header>
    )
}
