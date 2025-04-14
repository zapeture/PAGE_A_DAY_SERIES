"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { Project } from "../../model/project";
import { urlForImage } from "../../sanity/lib/image";

export default function ShowcaseItem({
  project,
}: {
  project: Project;
}): JSX.Element {
  return (
    <motion.a
      className={`col-12 col-md-6 col-lg-4 text-decoration-none ${project.status == "live" ? "live" : "upcoming"}`}
      href={project.url}
      target="_blank"
    >
      <div className="card showcase-card">
        <motion.div
          className="image-wrapper card-image-wrapper"
          whileHover={{ scale: 1.02, translateY: -10 }}
          transition={{
            ease: "easeInOut",
            duration: 0.3,
          }}
        >
          {urlForImage(project.thumbNail.asset) && (
            <Image
              src={urlForImage(project.thumbNail.asset)}
              alt={project.thumbNail.alt}
              fill
              sizes="100vw"
            />
          )}
        </motion.div>
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
        </div>
      </div>
    </motion.a>
  );
}
