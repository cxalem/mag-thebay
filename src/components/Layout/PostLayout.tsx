import Navbar from "./Navbar";
import Head from "next/head";
import Footer from "./Footer";
import data from "../../data/projectsMetadata.json";
import Image from "next/image";
import Link from "next/link";
import { useGetItems } from "../../hooks/useGetItems";
import ProjectCardSm from "../Projects/ProjectCardSm";
import type { DataSlug } from "../../../types";
import { useEffect, useState } from "react";

type bulletPoint = {
  title: string;
  slug: string;
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
  const metaData = useGetItems(data);
  const [path, setPath] = useState<string>("");

  useEffect(() => {
    const path = window.location.pathname;
    setPath(path);
  }, []);

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
        <div className="flex gap-10 max-w-screen-xl mx-auto mt-10 text-primary">
          <aside className="hidden h-fit w-1/2 md:block sticky top-5 bg-slate-100 shadow-xl rounded-2xl px-16 py-10">
            <div>
              <h3 className="font-bold text-2xl">Índice</h3>
              <ol className="">
                {bulletPoints.map((bulletPoint) => (
                  <Link
                    passHref
                    key={bulletPoint.slug}
                    href={`#${bulletPoint.slug}`}
                  >
                    <li className="hover:underline hover:decoration-2 w-fit list-decimal list-inside leading-5 font-medium opacity-80 cursor-pointer my-4">
                      {bulletPoint.title}
                    </li>
                  </Link>
                ))}
              </ol>
              <div className="w-full h-0.5 bg-slate-400 bg-opacity-50 my-6"></div>
              <div className="my-6">
                <h3 className="font-bold text-2xl">Más Proyectos</h3>
                <div className="flex flex-col gap-6 mt-6">
                  {metaData.map((project: any) => {
                    const { title, description, slug, src } = project;
                    if (!path.endsWith(slug)) {
                      return (
                        <ProjectCardSm
                          key={slug}
                          title={title}
                          description={description}
                          src={src}
                          slug={slug}
                        />
                      );
                    }
                  })}
                </div>
              </div>
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
