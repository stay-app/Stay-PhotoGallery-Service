import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import EnlargedImage from './EnlargedImage.jsx';
import Carousel from './Carousel.jsx';

const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      <div
        className="modal-container"
        style={{
          background: '#fff',
          position: 'fixed',
          width: '100%',
          height: '100%',
        }}
        // onClick={this.props.handleCloseModal}
      >
          <button onClick={this.props.handleCloseModal}>X</button>
          <EnlargedImage
            clickedImageObj={this.props.clickedImageObj}
            listingData={this.props.listingData}
            changeClickedObj={this.props.changeClickedObj}
          >
            {this.props.children}</EnlargedImage>
          <Carousel
            listingData={this.props.listingData}
            clickedImageObj={this.props.clickedImageObj}
            changeClickedObj={this.props.changeClickedObj}
          />
      </div>,
      this.el,
    );
  }
}

export default Modal;
