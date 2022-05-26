import Link from "next/link";

type Props = {
  children: React.ReactNode;
  type: "primary" | "secondary" | "inverted-primary" | "inverted-secondary";
  href?: string;
  onClick?: () => void;
};

interface ButtonClassNames {
  primaryButton: string;
  secondaryButton: string;
  invertedPrimaryButton: string;
  invertedSecondaryButton: string;
};

const Button: React.FC<Props> = ({ children, type, href, onClick }) => {
  const classNames: ButtonClassNames = {
    primaryButton:
      "text-white flex justify-center font-medium border-2 border-blue-650 bg-blue-650 py-2 px-9 rounded-full hover:shadow-lg ease-in-out duration-150",
    secondaryButton:
      "text-blue-650 flex justify-center font-medium border-2 border-blue-650 py-2 px-9 rounded-full hover:shadow-lg ease-in-out duration-150",
    invertedPrimaryButton:
      "text-blue-650 flex justify-center font-medium border-2 border-transparent bg-white py-2 px-9 rounded-full hover:shadow-lg ease-in-out duration-150",
    invertedSecondaryButton:
      "text-white flex justify-center font-medium border-2 border-white py-2 px-9 rounded-full hover:shadow-lg ease-in-out duration-150",
  };

  return (
    <>
      {href ? (
        <Link href={href}>
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
      ) : (
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
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
