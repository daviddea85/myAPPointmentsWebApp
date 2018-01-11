import { browserHistory } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory';

const history = process.env.BROWSER && createBrowserHistory() || {
    location: {
        pathname: '',
        search: '',
        hash: ''
    }
};

export const getLocation = () => history.location;
export const getPathname = () => history.location.pathname;
export const getQueryString = () => history.location.search;
export const getLocationHash = () => history.location.hash;

export default browserHistory;
