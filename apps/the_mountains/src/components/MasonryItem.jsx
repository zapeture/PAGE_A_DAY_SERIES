import PropTypes from "prop-types"
export default function MasonryItem({ background }) {
  const bgStyle = background
    ? { backgroundImage: `url(${background})`, marginTop: `80px` }
    : { backgroundColor: "#000000" }

  return <div className="masonry-item w-full aspect-[3/4] bg-center bg-no-repeat bg-cover" style={bgStyle}></div>
}

MasonryItem.propTypes = {
  background: PropTypes.string
}
