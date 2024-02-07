import Head from "next/head";
import Link from "next/link";
import CatppuccinLogo from "../icons/CatppuccinLogo";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({
  children,
  title,
}: {
  children: JSX.Element;
  title?: string;
}): JSX.Element => {
  return <>
    <Head>
      <title>{`Catppuccin` + (title ? ` ${title}` : "")}</title>
    </Head>
    <div className="flex flex-col min-h-screen bg-crust">
      <Header />
      <div className="flex flex-col grow">
        <div className="h-48 anim-gradient flex flex-col">
          <div className="grid place-items-center flex-grow mt-12">
            <Link href="/">
              <CatppuccinLogo className="w-28 h-28" />
            </Link>
          </div>
        </div>
        {children}
      </div>
      <Footer />
    </div>
  </>;
};
