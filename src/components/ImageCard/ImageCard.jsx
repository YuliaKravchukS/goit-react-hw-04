
const ImageCard = ({image, openModal}) => {
  const handleClick = () => {
    openModal(image.id);
  };
  return (
    <div>
  <img src={image.urls.small} alt={image.description} onClick={handleClick}/>
</div>
  )
}

export default ImageCard