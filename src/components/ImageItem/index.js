import './index.css'

const ImageItem = props => {
  const {imageDetails, onClickImageItem} = props
  const {id, thumbnailUrl} = imageDetails
  const clickImageItem = () => {
    onClickImageItem(id)
  }
  return (
    <li className="image-item-container">
      <button
        type="button"
        className="image-item-button"
        onClick={clickImageItem}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default ImageItem
