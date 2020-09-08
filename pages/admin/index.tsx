import React from 'react';
import privateRoute from 'components/utils/privateRoute';

function Admin() {
  return <div>Admin ne hihi</div>;
}

export default privateRoute(Admin, true);
