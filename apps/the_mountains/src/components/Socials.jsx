import { FaInstagram } from "react-icons/fa6"
import { FaTwitter, FaFacebookF } from "react-icons/fa"

export default function Socials() {
  return (
    <div className="w-full max-w-[116px] flex justify-between items-center mt-5">
      <FaFacebookF className="size-7" />
      <FaInstagram className="size-7" />
      <FaTwitter className="size-7" />
    </div>
  )
}
