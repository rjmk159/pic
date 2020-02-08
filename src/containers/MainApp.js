import React from "react";
import MainAppContainer from "../assets/css/MainApp.style";
import ImageThumbnail from "../components/ImageThumbnail";
import ImageModal from "../components/ImageModal";
import EditContainer from "../components/EditContainer";
import api from "../utils/apiServices";

class MainApp extends React.Component {
  state = {
    imageList: [],
    details: null,
    editMode: false
  };
  componentDidMount() {
    let imageList = this.state.imageList;
    api
      .get("/images/__credits.json")
      .then(res => {
        for (var keys in res.data) {
          imageList.push({imageName :keys, internalImage:true});
        }
        this.setState({ imageList });
      })
      .catch(error => {
        console.log(error);
      });
  }

  setSelectedImage = id => {
    let details = this.state.imageList.filter(item=> {
      return item.imageName === id;
    });
    this.setState({ details: details[0] });
  };
  setNewImage=(newImage)=>{
    let oldImage = this.state.details.imageName;
    let imageList =  this.state.imageList;
    let index = -1;
    if(oldImage && imageList){
      imageList.map((item,_index)=>{
        if(item.imageName == oldImage){
          index = _index;
        }
      })
      if(index!=-1){
        let imageList = this.state.imageList;
        imageList[index].imageName = newImage;
        imageList[index].internalImage = false;
      }
      // this.setState({imageList})
    }
  }
  render() {
    return (
      <MainAppContainer>
        <div className="container" style={{ paddingTop: 30 }}>
          <div className="row">
            <ImageThumbnail
              imageList={this.state.imageList}
              setSelectedImage={id => this.setSelectedImage(id)}
            />
            {this.state.details ? (
              <ImageModal
                details={this.state.details}
                showEditContainer={() => this.setState({ editMode: true })}
                closeModal={() => this.setState({ details: null })}
              />
            ) : (
              ""
            )}
            {this.state.details && this.state.editMode ? (
              <EditContainer
                details={this.state.details}
                closeModal={() =>
                  this.setState({ details: null, editMode: false })
                }
                setNewImage ={(newImage)=>{this.setNewImage(newImage)}}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </MainAppContainer>
    );
  }
}

export default MainApp;
