import React from 'react';

class Image extends React.Component {
  constructor(props) {
    super(props);
  }

  helloWorld() {

  }

  render() {
    if (this.props.listingData.length > 0) {
      return (
        <div className='image-container'>
          <div className='main-image'>
            <img src={this.props.listingData[0].image_url} alt="" />
          </div>
          {this.props.listingData.filter((image, idx) =>
            <div key={idx}>
              <img src={this.props.listingData[idx].image_url} alt="" />
            </div>
          )}

          // get images 2-5
          // render imaes 2-5


        </div>
      )
    } else {
      return <div className='image-container'>Loading...</div>
    }
  }
}

export default Image;
