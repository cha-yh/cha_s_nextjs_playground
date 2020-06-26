import { motion } from "framer-motion"
import Link from 'next/link';
export default function Events() {
    return (
        <motion.div exit={{opacity: 0}}>
            <Link href="/">
                <a>go back home</a>
            </Link>
            <ul>
                <li><Link href="/events/[id]" as="/events/a"><a>a</a></Link></li>
                <li><Link href="/events/[id]" as="/events/b"><a>b</a></Link></li>
                <li><Link href="/events/[id]" as="/events/c"><a>c</a></Link></li>
            </ul>
        </motion.div>
    )
}