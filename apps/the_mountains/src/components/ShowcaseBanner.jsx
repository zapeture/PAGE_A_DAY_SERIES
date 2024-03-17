import PropTypes from "prop-types"

export default function ShowcaseBanner({ image }) {
  return (
    <section
      className={`
  w-full min-h-[478px] bg-center bg-no-repeat bg-cover
  `}
      style={{ backgroundImage: `url(${image})` }}
    ></section>
  )
}

ShowcaseBanner.propTypes = {
  image: PropTypes.string.required
}
