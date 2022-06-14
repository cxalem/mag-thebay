import Link from "next/link";
import { highlight } from "sugar-high";
import { ReactElement } from "react";
import React from "react";

export const H1 = (props: any): ReactElement => {
  return (
    <h1
      className="block text-4xl leading-8 font-extrabold tracking-tight text-primary sm:text-5xl"
      {...props}
    />
  );
};

export const H2 = (props: any): ReactElement => {
  return (
    <h2
      className="block text-2xl leading-8 font-extrabold tracking-tight text-primary sm:text-4xl"
      {...props}
    />
  );
};

export const H3 = (props: any): ReactElement => {
  return (
    <h3
      className="block text-xl leading-8 font-extrabold tracking-tight text-primary sm:text-3xl"
      {...props}
    />
  );
};

export const Title = (props: any): ReactElement => {
  return (
    <h1
      className="block text-3xl text-center leading-8 font-extrabold tracking-tight text-primary sm:text-4xl"
      {...props}
    />
  );
};

export const Text = (props: any): ReactElement => {
  return (
    <p className="text-primary text-base leading-normal" {...props} />
  );
};

export const Url = (props: any): ReactElement => {
  return (
    <Link passHref href={props.href} {...props}>
      <a
        target="_blank"
        className="cursor-pointer underline text-primary text-base leading-normal"
      >
        {props.text}
      </a>
    </Link>
  );
};

export const List = (props: any): ReactElement => {
  return (
    <ul
      className="list-disc list-inside text-primary text-base leading-normal space-y-2"
      {...props}
    />
  );
};

export const NumList = (props: any): ReactElement => {
  return (
    <ol
      className="list-decimal list-inside text-primary text-base leading-normal space-y-2"
      {...props}
    />
  );
};

export const CodeBlock = (props: any) => {
  const codeHTML = highlight(props.children.props.children);

  return (
    <pre className="bg-gradient-to-r from-gray-600 via-gray-800 to-gray-800 p-3 rounded overflow-y-scroll text-sm lg:text-base">
      <code dangerouslySetInnerHTML={{ __html: codeHTML }} />
    </pre>
  );
};