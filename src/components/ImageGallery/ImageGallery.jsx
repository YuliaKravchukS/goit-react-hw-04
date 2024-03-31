import ImageCard from "../ImageCard/ImageCard"

const ImageGallery = ({images, openModal}) => {
  return (
    <ul>
        {Array.isArray(images)&&
        images.map((image) => {
        return (
            <li key={image.id}>
		<ImageCard image={image} openModal={openModal}/>
	</li>
        )
        })}
	
</ul>
  )
}

export default ImageGallery