import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  let location = useLocation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);
  if (!isAuthenticated && !loading) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  } else {
    return children;
  }
}

// import React from 'react';
// import { Route, Navigate, Routes } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

// const PrivateRoute = ({
//   element: Component,
//   auth: { isAuthenticated, loading },
//   ...rest
// }) => (
//   <Routes>
//     <Route
//       {...rest}
//       render={(props) =>
//         !isAuthenticated && !loading ? (
//           <Navigate to='/login' />
//         ) : (
//           <Component {...props} />
//         )
//       }
//     />
//   </Routes>
// );

// PrivateRoute.propTypes = {
//   auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });

// export default connect(mapStateToProps)(PrivateRoute);
