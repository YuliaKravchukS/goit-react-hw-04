import {Modal, Overlay} from './ImageModal.module.css'
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');
const ImageModal = ({openModal, closeModal, modalImage}) => {
  return (
    
      <ReactModal
        isOpen={openModal}
        onRequestClose={closeModal}
        className={Modal}
        overlayClassName={Overlay}
      >
      <img
          src={modalImage.urls.regular}
          alt={modalImage.alt_description}
        />
      </ReactModal>
    
  )
}

export default ImageModal