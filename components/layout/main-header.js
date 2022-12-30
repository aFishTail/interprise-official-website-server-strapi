import Link from 'next/link'

function MainHeader(props) {
    return (
        <headetr>
            <div>
                <Link href='/'>NextEvents</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href='/events'>Browse All Events</Link>
                    </li>
                </ul>
            </nav>
        </headetr>
    )
}

export default MainHeader