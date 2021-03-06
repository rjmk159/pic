import React from "react";
import ImageUploader from "react-images-upload";
import placeholder from "../assets/images/images.png"
class EditContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { picture: '' };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    this.setState({
      picture: picture[0]
    });
  }
  //Note : I am using Upload images from imagesToUpload folde inside public because of image path issue in mac i was not able to test it,
  //Please upload the image from the same
  render() {
    console.log(this.state.picture.name);
    let { details } = this.props;
    let path  = details.internalImage ? '/images/': '/imagesToUpload/'
    return (
      <div className="edit-container-Modal">
        <div className="edit-container-dialog">
          <div className="edit-container-header">
            <h4>Edit Image</h4>
            <span
              role="button"
              onClick={() => this.props.closeModal()}
              className="edit-container-close"
            >
              &times;
            </span>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label>Original Image</label>
              <img
                src={`${path}${details.imageName}${details.internalImage?'.jpg':''}`}
                alt={details}
                className="img-thumbnail"
              />
            </div>
            <div className="col-md-6">
              <label>New Image</label>
              <div className="new-image-container">
                <img
                  src={this.state.picture && this.state.picture.name? `/imagesToUpload/${this.state.picture.name}`:placeholder}
                  className="img-thumbnail"
                />
                <ImageUploader
                  withIcon={true}
                  buttonText="Choose images"
                  onChange={this.onDrop}
                  imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                  maxFileSize={5242880}
                />
                <button type="button" onClick = {()=>this.props.setNewImage(this.state.picture.name)}className="btn btn-dark">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditContainer;
