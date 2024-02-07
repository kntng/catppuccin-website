import {
  SiTwitter,
  SiDiscord,
  SiOpencollective,
  SiReddit,
  SiGithub,
} from "react-icons/si";
import { Toast, Toaster } from "react-hot-toast";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

const socialItems: NavItem[] = [
  {
    label: "GitHub",
    href: "https://github.com/catppuccin",
    icon: <SiGithub size={"100%"} />,
  },
  {
    label: "Discord",
    href: "https://discord.catppuccin.com",
    icon: <SiDiscord size={"100%"} />,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/catppuccintheme",
    icon: <SiTwitter size={"100%"} />,
  },
  {
    label: "Open Collective",
    href: "https://opencollective.com/catppuccin",
    icon: <SiOpencollective size={"100%"} />,
  },
  {
    label: "Reddit",
    href: "https://reddit.com/r/catppuccin",
    icon: <SiReddit size={"100%"} />,
  },
];

const CustomToast = (toast: Toast): JSX.Element => {
  return (
    <div className="w-fit bg-base text-text shadow-lg rounded-md pointer-events-auto flex ring-1 ring-crust p-2">
      <p>{(typeof toast.message === "string" && toast.message) || ""}</p>
    </div>
  );
};

export const Footer = () => {
  return (
    <>
      <hr className="w-full border-mauve/50" />
      <footer className="flex flex-col items-center max-w-3xl mx-auto py-6 gap-4 px-2">
        <div className="flex flex-col justify-center gap-4">
          <p>
            Copyright &copy; 2021-{new Date().getFullYear()}{" "}
            <span className="underline decoration-dotted underline-offset-2">
              <Link
                href="https://github.com/catppuccin"
                rel="nofollow noreferrer"
                target="_blank"
              >
                Catppuccin Org
              </Link>
            </span>
          </p>
          <ul className="flex flex-row mx-auto gap-2 lg:gap-4">
            {socialItems.map(({ label, href, icon }) => (
              <li
                key={label}
                className="duration-300 flex justify-center items-center text-center"
              >
                <Link
                  className="w-5 h-5 hover:scale-125 hover:text-rosewater ease-in-out duration-300"
                  href={href}
                  rel="nofollow noreferrer"
                  target="_blank"
                >
                  {icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Toaster position={"bottom-center"}>
          <CustomToast />
        </Toaster>
      </footer>
    </>
  )
}