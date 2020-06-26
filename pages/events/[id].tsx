import { motion } from "framer-motion";
import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from "next";

export default function Event({ id }: { id: string }) {
    return (
        <motion.div exit={{ opacity: 0 }}>
            <Link href="/events"><a>back to list</a></Link>
            <p>id: {id}</p> 
            <p>hello event detail</p>
        </motion.div>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    return {
        props: {
            id: params.id as string
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const array = ['a', 'b', 'c'];
    const paths = array.map(item => {
        return {
            params: {
                id: item
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}