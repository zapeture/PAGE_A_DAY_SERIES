"use client"
import Image from "next/image";
import { motion } from "framer-motion"
import { Project } from '../../model/project';
import { client } from "../../sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url'

export default function ShowcaseItem({ project }: { project: Project }): JSX.Element {
  const builder = imageUrlBuilder(client)
  return <motion.a className={`col-12 col-md-6 col-lg-4 text-decoration-none ${project.status == "live" ? "live" : "upcoming"}`} href={project.url} target="_blank">
    <div className="card showcase-card">
      <motion.div className="image-wrapper card-image-wrapper" whileHover={{ scale: 1.02, translateY: -10 }} transition={{
        ease: "easeInOut",
        duration: 0.3
      }}>
        {builder.image(project.thumbNail.asset).url() && <Image src={builder.image(project.thumbNail.asset).url()} alt={project.thumbNail.alt}
          layout="fill"
          sizes="100vw"
          style={{ width: '100%' }}
        />}
      </motion.div>
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
      </div>
    </div>
  </motion.a>;
}
