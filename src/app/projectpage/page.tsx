import { projects } from "./projects";
import Image from "next/image";

export default function Projectpage() {
    return (
      <div className="grid items-center min-h-screen  gap-16 font-[family-name:var(--font-ubuntu)]">
        <main className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-3">
          {projects.map((project, index) => (
            <div key={index} className="compo p-4 rounded-xl hover:bg-gray-100 transition ">
              <div className="relative aspect-auto h-[200px] w-auto">
                <Image fill src={project.image} alt={project.name} className="object-contain" />
              </div>
              <div className="grid grid-cols-3 justify-between">
                <h2 className="text-xl font-semibold col-span-2">{project.name}</h2>
                <div className="text-right font-light">{project.date}</div>
              </div>
              <p className="text-gray-600">{project.description}</p>
              <div className="flex gap-2 mt-2 items-center">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-200 dark:bg-gray-800 text-sm rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-center gap-4 px-2 mt-4">
                {Array.isArray(project.link) && project.link.map((item, idx) => (
                  <a 
                  className="button-style compo"
                  key={idx}
                  target="_blank"
                  href={item.url}>
                    {item.name}
                  </a>
                ))}

              </div>
            </div>
          ))}
        </main>
        <footer className=" flex flex-wrap justify-center mb-12">
          <div className=" ">&copy;Free copyright under license, Hosted by Github.</div>
        </footer>
      </div>
    );
  }
  