"use client"
import { motion } from "framer-motion"

export default function ShowcaseItem(): JSX.Element {
  return <motion.a className="col-12 col-md-6 col-lg-4 text-decoration-none" href="https://google.com" target="_blank">
    <div className="card showcase-card">
      <motion.div className="image-wrapper card-image-wrapper" whileHover={{ scale: 1.02, translateY: -10 }} transition={{
        ease: "easeInOut",
        duration: 0.3
      }}>
      </motion.div>
      <div className="card-body">
        <h5 className="card-title">An app</h5>
      </div>
    </div>
  </motion.a>;
}
