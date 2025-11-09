function importAll(r) {
    return r.keys().map((fileName) => ({
        link: fileName.substr(1).replace(/\/index\.(mdx|js)$/, ""),
        module: r(fileName)
    }));
}

// Import both MDX and JS files
const mdxPosts = importAll(
    require.context("./pages/blog/", true, /\.mdx$/)
);

const jsPosts = importAll(
    require.context("./pages/blog/", true, /\.js$/)
);

export const posts = [...mdxPosts, ...jsPosts];
