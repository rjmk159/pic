import React from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';

class ImageThumbnail extends React.Component{

  render(){
    let { imageList } = this.props;
    return(
        imageList && imageList.length && imageList.map((item,index)=>{
          let path  = item.internalImage ? '/images/': '/imagesToUpload/'
          return(
            <div className="image-container" role="button" onClick={()=>this.props.setSelectedImage(item.imageName)}  key={index}>
                <img src={`${path}${item.imageName}.jpg`} alt={item.imageName}  className="img-thumbnail"></img>
            </div>
          )
        })
    )
  }
}

export default ImageThumbnail;