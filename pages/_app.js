import Layout from "../components/Layout";

export default function App({ Component, pageProps, showHeader }) {
  return (
    <Layout pageTitle="Kiran Dhobale" description="My Personal Blog" showHeader>
      <Component {...pageProps} />
    </Layout>
  );
}
