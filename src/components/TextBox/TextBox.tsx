import styles from "../../styles/Hero.module.css";

type Props = {
    children: React.ReactNode;
};

const TextBox: React.FC<Props> = ({ children }) => {
  return (
    <div
      className={`${styles.infoContainer} flex flex-col gap-4 items-center py-10 px-10 md:py-16 md:px-36 rounded-xl w-full max-w-5xl`}
    >
        {children}
    </div>
  );
};

export default TextBox;
