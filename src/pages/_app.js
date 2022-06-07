import "../styles/globals.css";
import { MDXProvider } from "@mdx-js/react";
import {
  H1,
  H2,
  H3,
  Text,
  Url,
  List,
  CodeBlock,
  NumList,
} from "../components/Text/Text";

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: Text,
  Url: Url,
  ul: List,
  ol: NumList,
  pre: CodeBlock,
};

function MyApp({ Component, pageProps }) {
  return (
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
  );
}

export default MyApp;
