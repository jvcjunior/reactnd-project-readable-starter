import React from 'react';
import { Route } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';

const DefaultLayout = ({component: Component, ...rest}) => {
    return (
      <Route {...rest} render={matchProps => (
        <div className="DefaultLayout">
          <AppBar
            title={<span>Posts</span>}
          />
            <Component {...matchProps} />
          {/* <div className="Footer">Footer</div> */}
        </div>
      )} />
    )
  };

  export default DefaultLayout;