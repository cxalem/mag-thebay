import { NextPage } from "next";
import fs from "fs-extra"
import styles from "../../styles/Home.module.css";
import projectsMetadata from "../../data/projectsMetadata.json"
import { getProjectsMetadata } from "../../utils/serverSidePost"

type Props = {}

const Posts: NextPage<Props> = ({}) => {
  return (
    <div
      className={`${styles.container} flex flex-col justify-center items-center`}
    ></div>
  );
};

export default Posts;

export const getStaticProps = async () => {
  const projectsMetadata = await getProjectsMetadata()
  console.log(projectsMetadata)
  return {
    props: {  },
  };
}
