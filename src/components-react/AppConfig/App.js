import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';



@withRouter
export default class App extends Component {
  constructor(props, context) {
    super(props, context);
  }
  
  render() {
    const { route } = this.props;
    return (
    	<div>
    		<div>xxx配置</div>
	    	{renderRoutes(route.routes)}
        <div>
          <input type='button' value='cancel' />
          <input type='button' value='ok' />
        </div>
    	</div>
    );
  }
}
