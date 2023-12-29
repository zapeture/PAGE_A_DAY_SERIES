"use client"
import { motion } from "framer-motion"
import { Project } from '../model/project';

export default function ShowcaseItem({project}: {project: Project}): JSX.Element {
  return <motion.a className="col-12 col-md-6 col-lg-4 text-decoration-none" href={project.url} target="_blank">
    <div className="card showcase-card">
      <motion.div className="image-wrapper card-image-wrapper" whileHover={{ scale: 1.02, translateY: -10 }} transition={{
        ease: "easeInOut",
        duration: 0.3
      }}>
      </motion.div>
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
      </div>
    </div>
  </motion.a>;
}
