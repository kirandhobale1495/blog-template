import Layout from "../components/Layout";
import Analytics from "./Analytics";

export default function App({ Component, pageProps, showHeader }) {
  return (
    <>
    <Analytics />
      <Layout pageTitle="Kiran Dhobale" description="My Personal Blog" showHeader>
        <Component {...pageProps} />
     </Layout>
    </>
    
  );
}
