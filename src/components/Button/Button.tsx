import Link from "next/link";

type Props = {
  type: "primary" | "secondary";
  href?: string;
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({ children, type, href }) => {
  const primaryButton: string = "text-white border-2 border-blue-600 bg-blue-600 py-2 px-9 rounded-full hover:shadow-lg ease-in-out duration-150";
  const secondaryButton: string = "text-blue-600 border-2 border-blue-600 py-2 px-9 rounded-full hover:shadow-lg ease-in-out duration-150";

  return (
    <Link href={`${href}`}>
      <a>
        <button
          className={
            type === "primary"
              ? `${primaryButton}`
              : type === "secondary" && `${secondaryButton}`
          }
        >
          {children}
        </button>
      </a>
    </Link>
  );
};

export default Button;
