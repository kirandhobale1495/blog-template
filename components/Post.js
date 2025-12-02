import Link from 'next/link'
import { HeadPost } from './HeadPost'

export const Post = ({ post }) => {
    const {
        link,
        module: { meta } = { meta: null },
    } = post

    // Skip rendering if meta is not available
    if (!meta) {
        return null;
    }

    return (
        <>
            <article>
                <HeadPost meta={meta} />
                <Link href={'/blog' + link} legacyBehavior>
                    <a>Read more &rarr;</a>
                </Link>
            </article>
            <style jsx>
                {`
                    article {
                        margin-bottom: 3rem;
                    }
                `}
            </style>
        </>
    )
}
