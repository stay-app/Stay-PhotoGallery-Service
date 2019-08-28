import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display:grid;
  grid-template-columns: 50% 50%;
  overflow: auto;
  max-height: 442px;
`;

const LeftHalf = styled.div`
  border: 1px solid red;
  float: left;
  background-image: url('${(props) => props.imgObj}');
  background-repeat: no-repeat;
  object-fit: cover;
  width: 100%;
  height: auto;
  max-width: 50vw;
`;

const RightHalf = styled.div`
  border: 1px solid blue;
  float: right;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  overflow: auto;
  width: 100%;
  height: auto;
`;

class Image extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clickedImageUrl: '',
    }
  }

  handleImageClick(e) {
    const clickedUrl = this.props.listingData.filter((v) => v.sequence_id === Number(e.target.id))[0].image_url;
    this.setState({ clickedImageUrl: clickedUrl });
    this.props.handleOpenModal(clickedUrl);
  }

  handleImageHover() {
    // do something
  }

  render() {
    if (this.props.listingData.length > 0) {
      return (
        <Wrapper>
          <LeftHalf
            id={this.props.listingData[0].sequence_id}
            imgObj={this.props.listingData[0].image_url}
            onClick={this.handleImageClick.bind(this)}
            onmouseover=""
            style={{cursor: "pointer"}}
          />
          <RightHalf
            onClick={this.handleImageClick.bind(this)}
            onmouseover=""
            style={{cursor: "pointer"}}
          >
            <img
              id={this.props.listingData[1].sequence_id}
              src={this.props.listingData[1].image_url}
              alt={this.props.listingData[1].caption}
            />
            <img
              id={this.props.listingData[2].sequence_id}
              src={this.props.listingData[2].image_url}
              alt={this.props.listingData[2].caption}
            />
            <img
              id={this.props.listingData[3].sequence_id}
              src={this.props.listingData[3].image_url}
              alt={this.props.listingData[3].caption}
            />
            <img
              id={this.props.listingData[4].sequence_id}
              src={this.props.listingData[4].image_url}
              alt={this.props.listingData[4].caption}
            />
          </RightHalf>
        </Wrapper>
      )
    } else {
      return <div className='image-container'>Loading...</div>
    }
  }
}

export default Image;