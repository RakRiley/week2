import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { Content, NoMatch } from '../Components';

class Miss extends React.Component {
  render() {
    return (
      <div>
        <h1>Handling a Missed Route {this.props.match.url}</h1>
        <p>With a pathless route you can handle a missed pattern of its sibling Matches. As for example you will be able to show a custom error message for the missed location/pathname. Try clicking on the links below to find a miss.</p>
        <div className="leftNavi">
          <ul>
            <li><Link to={this.props.match.url + "/abc/level1"} className="active">Level 1</Link></li>
            <li><Link to={this.props.match.url + "/level2"} className="active">Level 2</Link></li>
            <li><Link to={this.props.match.url + "/abc/level3"} className="active">Level 3</Link></li>
          </ul>
        </div>
        <div className="rightContent">
          <p>Second Level Content will appear here:</p>
          <p>Find the missing link</p>
            <Switch>
              <Route path={`${this.props.match.url}/abc/:level`} component={Content} />
              <Route path={`${this.props.match.url}`} exact={true} render={() => (null)} />
              <Route component={NoMatch} />
            </Switch>
        </div>
      </div>
    );
  }
}

export default Miss;
