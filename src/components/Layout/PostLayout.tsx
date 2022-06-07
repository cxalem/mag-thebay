import Navbar from "./Navbar";
import Head from "next/head";
import Footer from "./Footer";
import data from "../../data/projectsMetadata.json"

type Props = {
  description: string;
  title: string;
  children: React.ReactNode;
};

const PostLayout: React.FC<Props> = ({ children, title, description }) => {
  return (
    <div className="h-full">
      <Head>
        <title>{title}</title>
        <meta name="description" content={`${description}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className=" max-w-screen-md mx-auto ">{children}</main>
      
      <footer> <Footer /> </footer>
    </div>
  );
};

PostLayout.defaultProps = {
  title: "Mag-Thebay",
  description: "Construyendo un mundo sin límites",
};

export default PostLayout;