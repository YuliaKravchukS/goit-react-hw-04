import ImageCard from "../ImageCard/ImageCard"

const ImageGallery = ({articles}) => {
  return (
    <ul>
        {Array.isArray(articles)&&
        articles.map((article) => {
        return (
            <li key={article.id}>
		<ImageCard article={article}/>
	</li>
        )
        })}
	
</ul>
  )
}

export default ImageGallery