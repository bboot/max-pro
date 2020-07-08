import React, { Component } from 'react';
import Header from '../layout/Header'

class About extends Component {
  render() {
    return (
        <div className="About">
          <div className="container">
            <React.Fragment>
              <Header />
            </React.Fragment>
            <h1>About part</h1>
            <p>This part talks ABOUT this app.</p>
        </div>
      </div>
    );
  }
}

export default About;
