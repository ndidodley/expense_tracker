import React, {Component} from 'react';
import './index.css'
import LoginPage from "./views/login/Login.Page";
import Table from './components/Table/Table'

export default class App extends Component {
    render() {
        return (
            <>
                <LoginPage/>
                <Table/>
            </>
        );
    }
}