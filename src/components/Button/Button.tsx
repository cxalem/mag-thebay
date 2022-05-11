import Link from "next/link";

type Props = {
  type: "primary" | "secondary" | "inverted-primary" | "inverted-secondary";
  href?: string;
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({ children, type, href }) => {
  const primaryButton: string =
    "text-white font-semibold border-2 border-blue-600 bg-blue-600 py-2 px-9 rounded-full hover:shadow-lg ease-in-out duration-150";
  const secondaryButton: string =
    "text-blue-600 font-semibold border-2 border-blue-600 py-2 px-9 rounded-full hover:shadow-lg ease-in-out duration-150";
  const invertedPrimaryButton: string =
    "text-blue-600 font-semibold border-2 border-transparent bg-white py-2 px-9 rounded-full hover:shadow-lg ease-in-out duration-150";
  const invertedSecondaryButton: string =
    "text-white font-semibold border-2 border-white py-2 px-9 rounded-full hover:shadow-lg ease-in-out duration-150";

  return (
    <Link href={`${href}`}>
      <a>
        <button
          className={
            type === "primary"
              ? `${primaryButton}`
              : type === "secondary"
              ? `${secondaryButton}`
              : type === "inverted-primary"
              ? `${invertedPrimaryButton}`
              : type === "inverted-secondary" && `${invertedSecondaryButton}`
          }
        >
          {children}
        </button>
      </a>
    </Link>
  );
};

export default Button;
