import React from 'react';
import reactDom from 'react-dom';
import PeopleList from './components/PeopleList';
import AddPersonForm from './components/AddPersonForm';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './style.css';

const initialState = {
    contacts: ["Bob Sagot", "Hillary Duff", "Luna"]
    };
//reducer
function reducer(state = initialState, action) {
    switch(action.type){
        case 'ADD_PERSON':
            return {...state,
            contacts: [...state.contacts, action.data]}
        default:
            return state;
    }
}

const store = createStore(reducer);
ReactDOM.render(
    <Provider store={store}>
        <AddPersonForm />
        <PeopleList />
    </Provider>,
    document.getElementById('root')
);