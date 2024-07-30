import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    this.setState(prevState => ({
      speed: prevState.speed < 200 ? prevState.speed + 10 : prevState.speed,
    }))
  }

  applyBrake = () => {
    this.setState(prevState => ({
      speed: prevState.speed > 0 ? prevState.speed - 10 : prevState.speed,
    }))
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>

        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />

        <h1 className="para-a">Speed is {speed}mph</h1>
        <p className="para-b">Min Limit is 0mph, Max Limit is 200mph</p>

        <div className="btn-container">
          <button
            type="button"
            className="accelerateBtn"
            onClick={this.accelerate}
          >
            Accelerate
          </button>

          <button type="button" className="brakeBtn" onClick={this.applyBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
