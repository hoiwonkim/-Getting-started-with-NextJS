// ./pages/_app.js
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import "../styles/globals.css"; // 수정된 import 경로

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  );
}
