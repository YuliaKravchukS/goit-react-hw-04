import css from './ImageCard.module.css'
const ImageCard = ({image, openModal}) => {
  const handleClick = () => {
    openModal(image.id);
  };
  return (
    <div className={css.wrapImg}>
  <img className={css.image} src={image.urls.small} alt={image.description} onClick={handleClick}/>
              <div className={css.descriptionCard}>
                 <p>
                  Author: <b>{image.user.name}</b>
                </p>
                
                 Portfolio: <a href='{image.links.html}'>link</a>
                <p>
                Likes: <b>{image.likes}</b>
                </p>
              </div>
</div>
  )
}

export default ImageCard