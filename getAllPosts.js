function importAll(r) {
    return r.keys().map((fileName) => {
        const module = r(fileName);
        // For MDX files, meta is in module.meta
        // For JS files, meta can be in module.meta or we need to attach it
        return {
            link: fileName.substr(1).replace(/\/index\.(mdx|js)$/, ""),
            module: module.default ? { 
                default: module.default,
                meta: module.meta 
            } : module
        };
    });
}

// Import both MDX and JS files
const mdxPosts = importAll(
    require.context("./pages/blog/", true, /\.mdx$/)
);

const jsPosts = importAll(
    require.context("./pages/blog/", true, /\.js$/)
);

export const posts = [...mdxPosts, ...jsPosts];
