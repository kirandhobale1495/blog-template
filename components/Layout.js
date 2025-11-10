import Head from "next/head";
import Header from "./Header";

export default function Layout({ children, pageTitle, description, showHeader = false }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle}></meta>
        
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WF0R06Y5L7"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-WF0R06Y5L7');
        </script>

      </Head>
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
          background: #fff;
          color: #555;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: 700;
          font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
          font-size: 1.2rem;
          white-space: nowrap;
          color: #000;
          margin-top: 1rem;
        }
        a {
          color: #555;
        }
        .content {
          max-width: 600px;
          margin: 2rem auto;
          padding: 0 1rem;
        }
        .footnote-ref {
          color: #555;
          font-size: 0.75rem;
          text-decoration-line: none;
        }
      `}</style>
      <main>
        {showHeader && <Header /> }
        <div className="content">{children}</div>
      </main>
    </>
  );
}
