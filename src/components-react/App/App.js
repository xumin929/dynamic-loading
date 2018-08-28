import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import css from "./style/app.less";


@withRouter
export default class App extends Component {
  constructor(props, context) {
    super(props, context);
  }
  
  render() {
    const { route } = this.props;
    return (
    	<div>
    		<div className={css.header}></div>
	    	<div className={css.work}> 
		    	<div className={css.left}></div>
		    	<div className={css.right}>
		    		{renderRoutes(route.routes)}
		    	</div>
	    	</div>
    	</div>
    );
  }
}
