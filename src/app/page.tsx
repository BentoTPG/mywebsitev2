import Image from "next/image";

export default function Home() {
  return (
    <div className="grid  items-center justify-items-center min-h-screen pb-20  gap-16 sm:p-20 font-[family-name:var(--font-ubuntu)]">
      <main className="flex flex-col gap-y-1 row-start-2 items-baseline">
        <h1 className="text-7xl md:text-9xl font-bold">Hello!! ,</h1>
        <h1 className="text-5xl md:text-7xl font-bold whitespace-nowrap">My Name is </h1>
        <div className="flex gap-x-3 text-red-600 justify-center">
          <h1 className="text-5xl md:text-7xl font-extrabold whitespace-nowrap mt-3">BentoTPG</h1>
          <Image alt='logo' width={300} height={300} src="logo_transparent.png" className="h-auto w-20 logo"/>
        </div>
        
        <h1 className="text-xl md:text-2xl ">And welcome to my website</h1>
      </main>
      <footer className="row-start-3 flex flex-wrap justify-center">
        <div className=" ">&copy;Free copyright under license, Hosted by Github.</div>
      </footer>
    </div>
  );
}
