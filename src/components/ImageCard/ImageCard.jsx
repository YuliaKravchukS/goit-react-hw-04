
const ImageCard = ({article}) => {
  return (
    <div>
  <img src={article.urls.small} alt={article.description} />
</div>
  )
}

export default ImageCard