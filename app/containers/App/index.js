/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import AboutUs from 'containers/AboutUs/Loadable';
import Header from '../../components/Header';

import GlobalStyle from '../../global-styles';

export default function App({ title, name, theme }) {
  return (
    <BootstrapProvider theme={theme}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={`Home page of ${name} application`} />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BootstrapProvider>
  );
}
App.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  theme: PropTypes.object,
};
