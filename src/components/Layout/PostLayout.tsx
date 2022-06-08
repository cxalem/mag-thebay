import Navbar from "./Navbar";
import Head from "next/head";
import Footer from "./Footer";
import data from "../../data/projectsMetadata.json";
import Image from "next/image";

type bulletPoint = {
  title: string;
  id: string;
};

type Props = {
  description: string;
  title: string;
  children: React.ReactNode;
  bulletPoints?: bulletPoint[];
};

const PostLayout: React.FC<Props> = ({
  children,
  title,
  description,
  bulletPoints,
}) => {
  return (
    <div className="h-full scroll-smooth">
      <Head>
        <title>{title}</title>
        <meta name="description" content={`${description}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="mx-auto">
        <div className=" bg-slate-400 rounded-xl ">
          <Image
            src="/"
            alt="Mag-Thebay"
            width={1200}
            height={365}
            className="rounded-xl"
          />
        </div>
        <div className="flex gap-10 max-w-screen-xl mx-auto mt-10">
          <aside className="hidden h-fit w-1/2 md:block sticky top-5 bg-slate-200 rounded-xl px-16 py-16">
            <div>
              <h3 className="">índice</h3>
              <ol>
                {bulletPoints.map((bulletPoint) => (
                  <a key={bulletPoint.id} href={`#${bulletPoint.id}`}>
                    <li className="list-decimal">{bulletPoint.title}</li>
                  </a>
                ))}
              </ol>
            </div>
          </aside>
          <div className="w-full">{children}</div>
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
