import React, {Component} from 'react';
import './index.css'

export default class App extends Component{
    render() {
        return (
            <div className='text-xs'>
                This is the first frontend
                <button className='bg-blue-300'>
                    Click Me!
                </button>
            </div>
        );
    }
}