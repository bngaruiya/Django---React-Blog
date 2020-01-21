import React, { Fragment } from 'react';

import Form from './Form';
import Posts from './Posts';

export default function Dashboard() {
  return (
    <div>
      <Fragment>
        <Form />
        <Posts />
      </Fragment>
    </div>
  );
}
