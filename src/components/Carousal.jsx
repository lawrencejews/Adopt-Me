import { Component } from "react";

class Carousal extends Component{
  state = {
    active: 0
  }

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"]
  }

  handleIndexClick = (e) => {
    this.setState({
      active: +e.target.dataset.index
    })
  }

  render() {
    const { active } = this.state
    const { images } = this.props
    
    return(
      <div className="carousal">
        {images.map((photo, index) => (
          <img
            key={photo}
            src={photo}
            className={index === active ? "active" : ""}
            alt="animal thumbnail"
            onClick={this.handleIndexClick}
            data-index={index}
          />
        ))}
      </div>
    )
  }
}

export default Carousal;