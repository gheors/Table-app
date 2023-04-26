import Head from "next/head";
import { PropsWithChildren } from "react";

interface Props {
  text: string;
}
export default function HeadPage({ text, children }: PropsWithChildren<Props>) {
  return (
    <>
    <Head>
      <title>{text}</title>
      <link rel="icon" href="/favicon.ico" />
      {children}
    </Head>
    </>
  );
}
