import Navbar from "../Navbar/Navbar";
import Head from "next/head";

type Props = {
  description: string;
  title: string;
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children, title, description }) => {
  return (
    <div>
      <Head>
        <title>Mag-Thebay</title>
        <meta name="description" content="Construyendo un mundo sin límites" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="">{children}</main>
      
      <footer> Footer </footer>
    </div>
  );
};

Layout.defaultProps = {
  title: "Mag-Thebay",
  description: "Construyendo un mundo sin límites",
};

export default Layout;
