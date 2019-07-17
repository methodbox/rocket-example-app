import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles.css';
interface Props {}

interface State {
  welcomeMessage: string;
  rocketName: string | null;
}

export default class RocketApp extends React.Component<Props, State> {
  state: State = {
    welcomeMessage: 'Random SpaceX Launch',
    rocketName: null,
  };

  _getNewRocket() {
    let flightNumber = Math.floor(Math.random() * 81);
    fetch(`https://api.spacexdata.com/v3/launches/${flightNumber}`)
      .then(res => res.json())
      .then(json => {
        this.setState({ rocketName: json.rocket.rocket_id });
        console.log(json);
      });
  }
  render() {
    return (
      <div>
        <h1>{this.state.welcomeMessage}</h1>
        <button className="btn" onClick={() => this._getNewRocket()}>
          Random Launch
        </button>
        <h3>{this.state.rocketName}</h3>
      </div>
    );
  }
}
