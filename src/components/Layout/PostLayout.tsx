import Navbar from "./Navbar";
import Head from "next/head";
import Footer from "./Footer";
import data from "../../data/projectsMetadata.json";
import Image from "next/image";

type Props = {
  description: string;
  title: string;
  children: React.ReactNode;
};

const PostLayout: React.FC<Props> = ({ children, title, description }) => {
  return (
    <div className="h-full scroll-smooth">
      <Head>
        <title>{title}</title>
        <meta name="description" content={`${description}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="mx-auto">
        <Image src="/" alt="Mag-Thebay" width={1200} height={465} />
        <div className="flex max-w-screen-lg mx-auto">
          <aside>
            <div>
              <h3>índice</h3>
              <ol>
                <li><a href="#id">hola</a></li>
                <li>hola</li>
                <li>hola</li>
                <li>hola</li>
              </ol>
            </div>
          </aside>
          <div>{children}</div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

PostLayout.defaultProps = {
  title: "Mag-Thebay",
  description: "Construyendo un mundo sin límites",
};

export default PostLayout;
