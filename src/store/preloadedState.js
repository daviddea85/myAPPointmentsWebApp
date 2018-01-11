import queryString from 'query-string';

const LOCATION_CLEAR_REGEXP = /^.+\?/g;

export default function preloadedState (initialState, location) {
    const clearLoc = (location || '').replace(LOCATION_CLEAR_REGEXP, '');
    const parsed = queryString.parse(clearLoc);

    return Object.assign({}, {
        appBarState: {
            drawerState: 'close'
        },
        autoCompleteState: {
            searchText: parsed.searchText || '',
            autoCompleteList: []
        },
        navigationState: {
            routeName: 'home'
        },
        searchState: {
            selectedDomain: parsed.domain || 'dev',
            resultList: [],
            marketList: (parsed.marketList ? parsed.marketList.split(',') : [
                'europe',
                'north-america',
                'asia',
                'other'
            ])
        }
    }, initialState || {});
}
