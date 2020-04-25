/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="Home page of gits solutions application"
        />
      </Helmet>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    </div>
  );
}
