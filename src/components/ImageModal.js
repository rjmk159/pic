import React from "react";


class ImageModal extends React.Component {
  render() {
    let {details} = this.props;
    let path  = details.internalImage ? '/images/': '/imagesToUpload/'
    return (
      <div className="image-Modal">
        <span role="button" onClick={()=>this.props.closeModal()}className="close">&times;</span>
        <div className="image-dialog">
        <img
          src={`${path}${details.imageName}${details.internalImage?'.jpg':''}`}
          alt={details}
          className="img-thumbnail"
        />
        <span className="edit" onClick={()=>this.props.showEditContainer()}></span>
        </div>
      </div>
    );
  }
}

export default ImageModal;
