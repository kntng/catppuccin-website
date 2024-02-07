import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router";
import { useState } from "react"
import { SiGithub } from "react-icons/si";
import CatppuccinLogo from "../icons/CatppuccinLogo";

interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

const navItems: NavItem[] = [
  // {
  //   label: "Home",
  //   href: "/",
  // },
  {
    label: "Ports",
    href: "/ports",
  },
  {
    label: "Palette",
    href: "/palette",
  },
  // {
  //   label: "Contributing",
  //   href: "/contributing",
  // },
];

export const Header = () => {
  const [banner, showBanner] = useState(true);
  const currentPath = useRouter().pathname;

  return (
    <header>
      <div className="flex items-center justify-between w-full p-8">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <div className="flex items-center space-x-4">
              <CatppuccinLogo className="w-14 h-14" />
              <h1 className="text-xl font-bold">Catppuccin</h1>
            </div>
          </Link> 
        </div>
        <div className="flex items-center divide-x">
          <div className="flex items-center space-x-4 pr-2">
            {
              navItems.map((item, index) => (
                <Link key={index} href={item.href}>
                  {currentPath === item.href ?
                    <p className="text-lg font-bold">{item.label}</p> :
                    <p className="text-lg">{item.label}</p>
                  }
                </Link>
              ))
            }
          </div>
          <div className="flex items-center pl-2">
            <Link href="https://github.com/catppuccin" target="_blank" rel="noopener noreferrer">
              <SiGithub className="w-8 h-8" />
            </Link>
          </div>
        </div>
      </div>
      {
        banner && <div className="flex items-center justify-center bg-mauve/40 text-mauve/80 py-2 space-x-2">
          <p className="bg-mauve text-base rounded-full p-1 text-xs font-bold">New</p>
          <p className="">See our new palette.</p>
          <Link href="/"><p className="font-semibold">Learn more.</p></Link>
        </div>
      }
    </header>
  )
}