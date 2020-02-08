import styled from 'styled-components';
import editIcon from '../images/pencil.png';


const MainApp = styled.div`
.image-container {
  max-width: calc(25% - 10px);
  height: 200px;
  margin: 5px;
  cursor:pointer;
  @media screen and (max-width:767px){
    max-width: calc(50% - 10px);
  }
  @media screen and (max-width:480px){
    max-width:100%;
    margin:5px;
  }
  .img-thumbnail {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
.image-Modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px;
  .image-dialog {
    max-width: 400px;
    width: 100%;
    position:relative;
    overflow:hidden;
    &::before {
      position: absolute;
      background: rgba(151, 147, 155, 0.7);
      content: '';
      width: 100%;
      height: 100%;
      opacity:0;
      visibility: hidden;
      transition:0.3s ease;
   }
   .edit{
      background-image:url(${editIcon});
      width: 40px;
      height: 32px;
      position: absolute;
      filter: invert(1);
      top: calc(50% - 16px);
      background-position: center;
      background-repeat: no-repeat;
      left: 0;
      right: 0;
      margin: 0 auto;
      opacity: 0;
      visibility: hidden;
      cursor: pointer;
      transition:0.3s ease;
    }
    &:hover{
      &::before{
        opacity:1;
        visibility: visible;
      }
      .edit{
        opacity: 1;
        visibility: visible;
      }
    }
  }
  
  .close {
    color: #fff;
    font-size: 60px;
    position: absolute;
    top: 30px;
    right: 30px;
    z-index: 15;
    opacity: 1;
    font-weight: 100;
    cursor: pointer;
  }
}
//Edit container
.edit-container-Modal {
  position: fixed;
  z-index: 999;
  background: rgba(0,0,0,9);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 100px 0 50px; 
  overflow: scroll;
  @media screen and (max-width:767px){
    padding-right:10px;
  }
  .edit-container-dialog {
    max-width: 600px;
    background: #fff;
    margin: 0 auto;
    .row{
      padding: 10px;
     .img-thumbnail {
        height: 200px;
        width: 100%;
        object-fit: cover;
      }
    }
    .btn-dark {
      background: #3f4257;
      width: 100%;
    }
    .edit-container-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 6px 10px;
      border-bottom: 1px solid #ececec;
      margin-bottom: 15px;
      h4{
        margin:0;
      }
      .edit-container-close {
        font-size: 28px;
        line-height: 1;
        cursor: pointer;
      }
    }
  }
}

`;
export default MainApp