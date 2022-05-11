import Link from "next/link";

type Props = {
  type: "primary" | "secondary" | "inverted-primary" | "inverted-secondary";
  href?: string;
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({ children, type, href }) => {
  const classNames = {
    primaryButton:
      "text-white font-semibold border-2 border-blue-600 bg-blue-600 py-2 px-9 rounded-full hover:shadow-lg ease-in-out duration-150",
    secondaryButton:
      "text-blue-600 font-semibold border-2 border-blue-600 py-2 px-9 rounded-full hover:shadow-lg ease-in-out duration-150",
    invertedPrimaryButton:
      "text-blue-600 font-semibold border-2 border-transparent bg-white py-2 px-9 rounded-full hover:shadow-lg ease-in-out duration-150",
    invertedSecondaryButton:
      "text-white font-semibold border-2 border-white py-2 px-9 rounded-full hover:shadow-lg ease-in-out duration-150",
  };

  return (
    <Link href={href ? `${href}` : ""}>
      <a className="w-max">
        <button
          className={
            type === "primary"
              ? `${classNames.primaryButton}`
              : type === "secondary"
              ? `${classNames.secondaryButton}`
              : type === "inverted-primary"
              ? `${classNames.invertedPrimaryButton}`
              : type === "inverted-secondary" &&
                `${classNames.invertedSecondaryButton}`
          }
        >
          {children}
        </button>
      </a>
    </Link>
  );
};

export default Button;
