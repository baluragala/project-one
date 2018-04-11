import React, { Component } from "react";
import "./Dashboard.css";
import io from "socket.io-client";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    /*
    fq% - 100
    h20 - 100
    qty - 100
    fulep - 500
    oilintemp - 500
    pressure - 4000
    */
    const socket = io("http://localhost:3001");
    this.state = {
      editMode: this.props.location.search === "?mode=admin",
      fuelQtyBar1: 50,
      fuelQtyBar2: 50,
      fuelQtyBar3: 50,
      h2oBar1: 50,
      h2oBar2: 50,
      h2oBar3: 50,
      fuelPercentBar1: 50,
      fuelPercentBar2: 50,
      fuelPercentBar3: 50,
      oilInTempBar1: 50,
      oilInTempBar2: 50,
      oilInTempBar3: 50,
      quantityBar1: 50,
      quantityBar2: 50,
      quantityBar3: 50,
      pressureBar1: 50,
      pressureBar2: 50,
      pressureBar3: 50,
      socket
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.state.socket.on("connect", () => {
      console.log("connected");
      this.state.socket.on("new stat", data => {
        console.log("new stat", data);
        const { name, value } = data;
        this.setState({
          [name]: value
        });
      });
    });

    this.state.socket.on("disconnect", function() {});
  }

  handleChange(e) {
    console.log(e.target);
    this.setState({ [e.target.id]: e.target.value });
    this.state.socket.emit("change stat", {
      name: e.target.id,
      value: e.target.value
    });
  }

  render() {
    return (
      <div className="container chart-container">
        <div className="row justify-content-center top-row-comntent first-row">
          <div className="col-4 left-part-content">
            <div className="progress-container">
              <div className="top-content">
                <div className="number"> 1 </div>
                {this.state.editMode ? (
                  <input
                    type="text"
                    id="fuelQtyBar1"
                    className="level-number"
                    value={this.state.fuelQtyBar1}
                    onChange={this.handleChange}
                  />
                ) : (
                  <span className="level-number">{this.state.fuelQtyBar1}</span>
                )}
              </div>
              <div className="progress progress-bar-vertical">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={this.state.fuelQtyBar1}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ height: `${this.state.fuelQtyBar1}%` }}
                />
                <span className="mark-bottom" />
              </div>
              <div className="left-content">
                <span className="fuel">Fuel</span>
                <div className="quantity">Qty</div>
                <span className="percentage">%</span>
              </div>
              <span className="right-mark1" />
            </div>
            <div className="progress-container">
              <div className="top-content">
                <div className="number"> 2 </div>
                {this.state.editMode ? (
                  <input
                    type="text"
                    id="fuelQtyBar2"
                    className="level-number"
                    value={this.state.fuelQtyBar2}
                    onChange={this.handleChange}
                  />
                ) : (
                  <span className="level-number">{this.state.fuelQtyBar2}</span>
                )}
              </div>
              <div className="progress progress-bar-vertical">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={this.state.fuelQtyBar2}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ height: `${this.state.fuelQtyBar2}%` }}
                />
                <span className="mark-bottom" />
              </div>
              <span className="right-mark1" />
            </div>
            <div className="progress-container">
              <div className="top-content">
                <div className="number"> 3 </div>
                {this.state.editMode ? (
                  <input
                    type="text"
                    id="fuelQtyBar3"
                    className="level-number"
                    value={this.state.fuelQtyBar3}
                    onChange={this.handleChange}
                  />
                ) : (
                  <span className="level-number">{this.state.fuelQtyBar3}</span>
                )}
              </div>
              <div className="progress progress-bar-vertical">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={this.state.fuelQtyBar3}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ height: `${this.state.fuelQtyBar3}%` }}
                />
                <span className="mark-bottom" />
              </div>
              <span className="right-mark1" />
            </div>
          </div>
          <div className="col-4 right-part-content">
            <div className="progress-container">
              <div className="top-content">
                <div className="number"> 1 </div>
                {this.state.editMode ? (
                  <input
                    type="text"
                    id="fuelPercentBar1"
                    className="level-number"
                    value={this.state.fuelPercentBar1 * 5}
                    onChange={this.handleChange}
                  />
                ) : (
                  <span className="level-number">
                    {this.state.fuelPercentBar1 * 5}
                  </span>
                )}
              </div>
              <div className="progress progress-bar-vertical">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={this.state.fuelPercentBar1}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ height: `${this.state.fuelPercentBar1}%` }}
                />
                <span className="mark-bottom" />
              </div>
              <div className="left-content">
                <span className="fuel">FUEL</span>
                <div className="quantity">P</div>
                <span className="percentage">%</span>
              </div>
            </div>
            <div className="progress-container">
              <div className="top-content">
                <div className="number"> 2 </div>
                {this.state.editMode ? (
                  <input
                    type="text"
                    id="fuelPercentBar2"
                    className="level-number"
                    value={this.state.fuelPercentBar2 * 5}
                    onChange={this.handleChange}
                  />
                ) : (
                  <span className="level-number">
                    {this.state.fuelPercentBar2 * 5}
                  </span>
                )}
              </div>
              <div className="progress progress-bar-vertical">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={this.state.fuelPercentBar2}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ height: `${this.state.fuelPercentBar2}%` }}
                />
              </div>
            </div>
            <div className="progress-container">
              <div className="top-content">
                <div className="number"> 3 </div>
                {this.state.editMode ? (
                  <input
                    type="text"
                    id="fuelPercentBar3"
                    className="level-number"
                    value={this.state.fuelPercentBar3 * 5}
                    onChange={this.handleChange}
                  />
                ) : (
                  <span className="level-number">
                    {this.state.fuelPercentBar3 * 5}
                  </span>
                )}
              </div>
              <div className="progress progress-bar-vertical">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={this.state.fuelPercentBar3}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ height: `${this.state.fuelPercentBar3}%` }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* First row compleated */}
        <div className="row justify-content-center top-row-comntent second-row">
          <div className="col-4 left-side">
            <div className="progress-container">
              <div className="top-content">
                {this.state.editMode ? (
                  <input
                    type="text"
                    id="h2oBar1"
                    className="level-number"
                    value={this.state.h2oBar1}
                    onChange={this.handleChange}
                  />
                ) : (
                  <span className="level-number">{this.state.h2oBar1}</span>
                )}
              </div>
              <div className="progress progress-bar-vertical">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={this.state.h2oBar1}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ height: `${this.state.h2oBar1}%` }}
                />
              </div>
              <div className="left-content">
                <span className="fuel">H20</span>
                <div className="quantity">Qty</div>
                <span className="percentage">%</span>
              </div>
              <span className="right-mark1" />
            </div>
            <div className="progress-container">
              <div className="top-content">
                {this.state.editMode ? (
                  <input
                    type="text"
                    id="h2oBar2"
                    className="level-number"
                    value={this.state.h2oBar2}
                    onChange={this.handleChange}
                  />
                ) : (
                  <span className="level-number">{this.state.h2oBar2}</span>
                )}
              </div>
              <div className="progress progress-bar-vertical">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={this.state.h2oBar2}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ height: `${this.state.h2oBar2}%` }}
                />
              </div>
              <span className="right-mark1" />
            </div>
            <div className="progress-container">
              <div className="top-content">
                {this.state.editMode ? (
                  <input
                    type="text"
                    id="h2oBar3"
                    className="level-number"
                    value={this.state.h2oBar3}
                    onChange={this.handleChange}
                  />
                ) : (
                  <span className="level-number">{this.state.h2oBar3}</span>
                )}
              </div>
              <div className="progress progress-bar-vertical">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={this.state.h2oBar3}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ height: `${this.state.h2oBar3}%` }}
                />
              </div>
              <span className="right-mark1" />
            </div>
          </div>
          <div className="col-4 left-side">
            <div className="progress-container">
              <div className="top-content">
                {this.state.editMode ? (
                  <input
                    type="text"
                    id="oilInTempBar1"
                    className="level-number"
                    value={this.state.oilInTempBar1 * 5}
                    onChange={this.handleChange}
                  />
                ) : (
                  <span className="level-number">
                    {this.state.oilInTempBar1 * 5}
                  </span>
                )}
              </div>
              <div className="progress progress-bar-vertical">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={this.state.oilInTempBar1}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ height: `${this.state.oilInTempBar1}%` }}
                />
              </div>
              <div className="left-content">
                <span className="fuel">OIL</span>
                <div className="quantity">IN TEMP</div>
                <span className="percentage">°F</span>
              </div>
              <span className="right-mark1" />
              <span className="right-mark2" />
            </div>
            <div className="progress-container">
              <div className="top-content">
                {this.state.editMode ? (
                  <input
                    type="text"
                    id="oilInTempBar2"
                    className="level-number"
                    value={this.state.oilInTempBar2 * 5}
                    onChange={this.handleChange}
                  />
                ) : (
                  <span className="level-number">
                    {this.state.oilInTempBar2 * 5}
                  </span>
                )}
              </div>
              <div className="progress progress-bar-vertical">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={this.state.oilInTempBar2}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ height: `${this.state.oilInTempBar2}%` }}
                />
              </div>
              <span className="right-mark1" />
              <span className="right-mark2" />
            </div>
            <div className="progress-container">
              <div className="top-content">
                {this.state.editMode ? (
                  <input
                    type="text"
                    id="oilInTempBar3"
                    className="level-number"
                    value={this.state.oilInTempBar3 * 5}
                    onChange={this.handleChange}
                  />
                ) : (
                  <span className="level-number">
                    {this.state.oilInTempBar3 * 5}
                  </span>
                )}
              </div>
              <div className="progress progress-bar-vertical">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={this.state.oilInTempBar3}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ height: `${this.state.oilInTempBar3}%` }}
                />
              </div>
              <span className="right-mark1" />
              <span className="right-mark2" />
            </div>
          </div>
        </div>
        {/* second row compleated */}
        <div className="row justify-content-center top-row-comntent third-row">
          <div className="col-4 left-part-content">
            <div className="progress-container">
              <div className="top-content">
                <div className="number"> 1 </div>
                {this.state.editMode ? (
                  <input
                    type="text"
                    id="quantityBar1"
                    className="level-number"
                    value={this.state.quantityBar1}
                    onChange={this.handleChange}
                  />
                ) : (
                  <span className="level-number">
                    {this.state.quantityBar1}
                  </span>
                )}
              </div>
              <div className="progress progress-bar-vertical">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={this.state.quantityBar1}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ height: `${this.state.quantityBar1}%` }}
                />
              </div>
              <div className="left-content">
                <span className="fuel">&nbsp;</span>
                <div className="quantity">Qty</div>
                <span className="percentage">%</span>
              </div>
              <span className="right-mark1" />
              <span className="right-mark2" />
            </div>
            <div className="progress-container">
              <div className="top-content">
                <div className="number"> 2 </div>
                {this.state.editMode ? (
                  <input
                    type="text"
                    id="quantityBar2"
                    className="level-number"
                    value={this.state.quantityBar2}
                    onChange={this.handleChange}
                  />
                ) : (
                  <span className="level-number">
                    {this.state.quantityBar2}
                  </span>
                )}
              </div>
              <div className="progress progress-bar-vertical">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={this.state.quantityBar2}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ height: `${this.state.quantityBar2}%` }}
                />
              </div>
              <span className="right-mark1" />
              <span className="right-mark2" />
            </div>
            <div className="progress-container">
              <div className="top-content">
                <div className="number"> 3 </div>
                {this.state.editMode ? (
                  <input
                    type="text"
                    id="quantityBar3"
                    className="level-number"
                    value={this.state.quantityBar3}
                    onChange={this.handleChange}
                  />
                ) : (
                  <span className="level-number">
                    {this.state.quantityBar3}
                  </span>
                )}
              </div>
              <div className="progress progress-bar-vertical">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={this.state.quantityBar3}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ height: `${this.state.quantityBar3}%` }}
                />
              </div>
              <span className="right-mark1" />
              <span className="right-mark2" />
            </div>
          </div>
          <div className="col-4 right-part-content">
            <div className="progress-container">
              <div className="top-content">
                <div className="number"> 1 </div>
                {this.state.editMode ? (
                  <input
                    type="text"
                    id="pressureBar1"
                    className="level-number"
                    value={this.state.pressureBar1}
                    onChange={this.handleChange}
                  />
                ) : (
                  <span className="level-number">
                    {this.state.pressureBar1}
                  </span>
                )}
              </div>
              <div className="progress progress-bar-vertical">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={this.state.pressureBar1}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ height: `${this.state.pressureBar1}%` }}
                />
              </div>
              <div className="left-content">
                <span className="fuel" />
                <div className="quantity">PRESS</div>
              </div>
              <span className="right-mark1" />
              <span className="right-mark2" />
              <span className="right-mark3" />
              <span className="right-text"> L </span>
            </div>
            <div className="progress-container">
              <div className="top-content">
                <div className="number"> 2 </div>
                {this.state.editMode ? (
                  <input
                    type="text"
                    id="pressureBar2"
                    className="level-number"
                    value={this.state.pressureBar2}
                    onChange={this.handleChange}
                  />
                ) : (
                  <span className="level-number">
                    {this.state.pressureBar2}
                  </span>
                )}
              </div>
              <div className="progress progress-bar-vertical">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={this.state.pressureBar2}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ height: `${this.state.pressureBar2}%` }}
                />
              </div>
              <span className="right-mark1" />
              <span className="right-mark2" />
              <span className="right-mark3" />
              <span className="right-text"> L </span>
            </div>
            <div className="progress-container">
              <div className="top-content">
                <div className="number"> 3 </div>
                {this.state.editMode ? (
                  <input
                    type="text"
                    id="pressureBar3"
                    className="level-number"
                    value={this.state.pressureBar3}
                    onChange={this.handleChange}
                  />
                ) : (
                  <span className="level-number">
                    {this.state.pressureBar3}
                  </span>
                )}
              </div>
              <div className="progress progress-bar-vertical">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={this.state.pressureBar3}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ height: `${this.state.pressureBar3}%` }}
                />
              </div>
              <span className="right-mark1" />
              <span className="right-mark2" />
              <span className="right-mark3" />
              <span className="right-text"> L </span>
            </div>
          </div>
        </div>
        {/* third row compleated */}
        <div className="row justify-content-center fourth-row pb-5">
          <div className="col-8 justify-content-center text-center pl-0 bottom-buttons">
            <h4 className="bottom-header"> SUBSYSTEM MENU </h4>
            <button className="btn-outline-mark">UP</button>
            <button className="btn-outline-mark">OMS</button>
            <button className="btn-outline-mark active">APU</button>
            <button className="btn-outline-mark">SPI</button>
            <button className="btn-outline-mark">PORT SEL</button>
            <button className="btn-outline-mark">MESSAGE ACK</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
