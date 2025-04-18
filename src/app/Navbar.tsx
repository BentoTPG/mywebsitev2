"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  const SvgIcon = ({path}:{path:string}) =>{
    return(
      <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 ">
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
      </svg>
    );
  }

  const linkClass = (path: string) =>
    `text-2xl flex gap-x-2 p-4 transition ${
      pathname === path ? "shadow-[4px_0_10px_rgba(0,0,0,0.2)] pageandpoint font-semibold"
      : "hover:bg-gray-700 dark:hover:bg-black"
    }`;
  return(
    <nav className="transition-all duration-300 md:ml-67 h-16 md:w-full mx-auto max-w-[1012px] mt-5 compo shadow-md fixed bottom-0 md:top-0 z-50 flex justify-center md:justify-between items-center text-left  rounded-t-2xl font-[family-name:var(--font-vt-323)] ">
      <div className="flex items-center space-x-4 ">
        <Link href="/" className={linkClass("/")}><SvgIcon path="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
        Home</Link>
        <Link href="/about" className={linkClass("/about")}><SvgIcon path="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"/>
        About</Link>
        <Link href="/projectpage" className={linkClass("/projectpage")}><SvgIcon path="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"/>
        Project</Link>
      </div>
    </nav>
  );
}
export default Navbar