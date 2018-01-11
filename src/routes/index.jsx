/* eslint-disable global-require */
import React from 'react';
import { Route } from 'react-router';

import AppHelmet from 'components/App/AppHelmet';

import Home from './Home';
import Login from './Login';
import CompanyInformation from './CompanyInformation';
import CompaniesList from './CompaniesList';
import Dashboard from './Dashboard';
import AppointmentsList from './AppointmentsList';
import AppointmentInformation from './AppointmentInformation';
import NotFound from './NotFound';

export default (
    <Route component={AppHelmet}>
        <Route path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/companyInformation' component={CompanyInformation} />
        <Route path='/companiesList' component={CompaniesList} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/appointmentsList' component={AppointmentsList} />
        <Route path='/appointmentInformation' component={AppointmentInformation} />
        <Route path='*' component={NotFound} />
    </Route>
);
