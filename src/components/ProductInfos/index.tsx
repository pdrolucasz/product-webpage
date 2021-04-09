import { Link } from 'react-router-dom'
import {
    FaCcPaypal,
    FaCcVisa,
    FaCcMastercard,
    FaCcAmex
} from 'react-icons/fa'

import { Rating } from '../Rating'
import styles from './styles.module.scss'

import dressExample from '../../assets/dressExample.png'

export function ProductInfos() {
    return (
        <section className={styles.container}>
                    <div className={styles.imageContainer}>
                        <div>
                            <img src={dressExample} alt="Vestido"/>
                        </div>
                    </div>
                    <div className={styles.infosContainer}>
                        <h2>Product name</h2>

                        <div className={styles.reviews}>
                            <Rating />
                            <Link to="review/1">Read reviews</Link>
                        </div>

                        <div>
                            <p><span>$259 | </span>40% off<strong>$155.40</strong></p>
                        </div>

                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy
                        </p>

                        <div className={styles.sizes}>
                            <label htmlFor="sizes">Choose size</label>
                            <select name="sizes" id="sizes">
                                <option value="s_m">S-M</option>
                                <option value="b_g">B-G</option>
                            </select>

                            <div className={styles.colors}>
                                <label htmlFor="">Choose a color</label>

                                <div>
                                    <input 
                                        style={{
                                            backgroundColor: '#fff'
                                        }}
                                        type="radio"
                                        name="color"
                                        value="blue"
                                    />

                                    <input
                                        style={{
                                            backgroundColor: '#e1e1e6'
                                        }}
                                        type="radio"
                                        name="color"
                                        value="red"
                                    />

                                    <input
                                        style={{
                                            backgroundColor: '#61dafb'
                                        }}
                                        type="radio"
                                        name="color"
                                        value="red"
                                    />

                                    <input
                                        style={{
                                            backgroundColor: '#eba417'
                                        }}
                                        type="radio"
                                        name="color"
                                        value="red"
                                    />
                                </div>
                            </div>

                            <button className={styles.buttonCart}>
                                Add to Cart
                            </button>

                            <div className={styles.checkout}>
                                <h3>Checkout safely</h3>
                                <div>
                                    <FaCcPaypal size={40} />
                                    <FaCcVisa size={40} />
                                    <FaCcMastercard size={40} />
                                    <FaCcAmex size={40} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    )
}