import PropTypes from "prop-types"

export default function Heading1({ text }) {
  return (
    <h1 className="font-sans-serif font-black lowercase text-5xl tablet_up:text-6xl tablet_up:text-left laptop_up:text-8xl desktop_up:text-9xl">
      {text}
    </h1>
  )
}

Heading1.propTypes = {
  text: PropTypes.string.isRequired
}
