import Link from 'next/link'
import { HeadPost } from './HeadPost'

export const Post = ({ post }) => {
    if (!post || !post.module) {
        return null;
    }

    const {
        link,
        module: { meta },
    } = post

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
