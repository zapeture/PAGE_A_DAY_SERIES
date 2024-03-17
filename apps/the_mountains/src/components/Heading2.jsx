import PropTypes from "prop-types"
import { twJoin } from 'tailwind-merge'
export default function Heading2({ text, variant = "dark" }) {
  return (
    <h2
      className={
        twJoin('font-sans-serif font-thin uppercase text-sm tablet_up:text-xl tablet_up:text-left laptop_up:text-2xl desktop_up:text-3xl',
          variant === "light" ? "text-[#fff]" : "text-dark_mountain"
        )
      }

    >
      {text}
    </h2>
  )
}

Heading2.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string,
}
