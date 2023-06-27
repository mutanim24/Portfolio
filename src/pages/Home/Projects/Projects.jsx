import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('projects.json')
      .then(res => res.json())
      .then(data => setProjects(data))
  }, [])
  return (
    <div>
      <div className="text-center my-10 text-white">
        <h1 className="text-5xl font-bold mb-4">Portfolio</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {
          projects.map(project => <div key={project} className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 hover:scale-90 transform transition-all duration-300">
            {/*  <!-- Image --> */}
            <figure className="relative">
              <img
                src={project.image}
                alt="card image"
                className="aspect-video w-full h-72"
              />
              <figcaption className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900 p-6 text-white">
                <h3 className="text-lg font-medium ">{project.name}</h3>
                <p className="text-sm opacity-75">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, ratione?</p>
              </figcaption>
            </figure>
          </div>)
        }
      </div>
    </div>
  );
};

export default Projects;