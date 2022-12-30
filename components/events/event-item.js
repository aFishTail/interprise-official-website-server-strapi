import Link from 'next/link'

import styles from './event-item.module.css'

function EventItem(props) {

    const {name, imageSrc} = props

    return <li className={styles.item}>
        <img src={`/${imageSrc}`} alt="" />
        <h1>{name}</h1>
    </li>
}

export default EventItem