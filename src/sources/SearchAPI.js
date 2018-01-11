import fetch from 'core/fetch';
import {validateResponse, mockRespData} from 'models/Response';


export function searchBy (state) {
    return fetch('/').then((resp) => {
        return validateResponse(mockRespData());
        // if (resp.ok) {
        //     // return resp.json();
        //     return validateResponse(mockRespData());
        // }
    }).catch((err) => { return {autoCompleteList: [], resultList: []};});
}

export function searchByText (state, text) {
    return fetch('/').then((resp) => {
        return validateResponse(mockRespData());
        // if (resp.ok) {
        //     // return resp.json();
        //     return validateResponse(mockRespData());
        // }
    }).catch((err) => { return {autoCompleteList: [], resultList: []};});
}

export function autoCompleteText (state, text) {
    return fetch('/').then((resp) => {
        return validateResponse(mockRespData());
    }).catch((err) => { return {autoCompleteList: [], resultList: []};});
}

export function searchByMarket (state, market) {
    return fetch('/').then((resp) => {
        return validateResponse(mockRespData());
        // if (resp.ok) {
        //     // return resp.json();
        //     return validateResponse(mockRespData());
        // }
    }).catch((err) => { return {autoCompleteList: [], resultList: []};});
}

export function searchByDomain (state, type) {
    return fetch('/').then((resp) => {
        return validateResponse(mockRespData());
        // if (resp.ok) {
        //     // return resp.json();
        //     return validateResponse(mockRespData());
        // }
    }).catch((err) => { return {autoCompleteList: [], resultList: []};});
}

export function fetchLatest (state) {
    return fetch('/').then((resp) => {
        return validateResponse(mockRespData());
        // if (resp.ok) {
        //     // return resp.json();
        //     return validateResponse(mockRespData());
        // }
    }).catch((err) => { return {autoCompleteList: [], resultList: []};});
}
