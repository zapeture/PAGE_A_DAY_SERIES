import PropTypes from "prop-types"
import { twJoin } from 'tailwind-merge'

export default function Heading1({ text, variant = "dark" }) {
  return (
    <h1 className={twJoin('font-sans-serif font-black lowercase text-5xl tablet_up:text-6xl tablet_up:text-left laptop_up:text-8xl desktop_up:text-[150px]',
      variant === "light" ? "text-[#fff]" : "text-dark_mountain"
    )}>
      {text}
    </h1>
  )
}

Heading1.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string,
}

