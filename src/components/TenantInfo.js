import React, { Component } from 'react';

class TenantInfo extends Component {
  render() {
    return (
      <div>
      <h1>Tenant info part</h1>
      <p>Once authenticated (logged in), the tenant's personal information like current rent balance and date of last payment will show here. There will be two buttons, one to jump to the Buildium portal at  https://potrerolife.managebuilding.com/, and the other to "Pay Now with Bitcoin" that opens a bitcoin invoice from the btcpay server. use https://jsonplaceholder for samples</p>
      </div>
    );
  }
}

export default TenantInfo;
