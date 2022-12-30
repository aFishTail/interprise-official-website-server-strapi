import Layout from "../components/layout/layout";
import "../styles/reboot.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
