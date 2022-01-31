import React, {Component} from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import {DeleteModal} from "../Modal/Modal";

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalState: true
        }

    }

    triggerModal = () => {
        this.setState({modalState: !this.state.modalState});
    }

    triggerSort = () => {
        alert('This is supposed to sort the table')
    }

    render() {
        return (
            <div className='min-h-screen overflow-hidden bg-gray-300'>
                <DeleteModal open={this.state.modalState} trigger={this.triggerModal}/>
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden shadow-md sm:rounded-lg">
                                <table className="min-w-full">
                                    <thead className="bg-gray-200 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col"
                                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Transaction Name
                                        </th>
                                        <th scope="col"
                                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Category
                                        </th>
                                        <th scope="col"
                                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Amount
                                        </th>
                                        <th scope="col"
                                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 flex items-center">
                                            <span>Type</span>
                                            <span className='hover:cursor-pointer'
                                                  onClick={this.triggerSort}><ArrowDropDownIcon/></span>
                                        </th>
                                        <th scope="col" className="relative py-3 px-6">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                        <th scope="col" className="relative py-3 px-6">
                                            <span className="sr-only">Delete</span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Apple MacBook Pro 17"
                                        </td>
                                        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            Sliver
                                        </td>
                                        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            Laptop
                                        </td>
                                        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            $2999
                                        </td>
                                        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                            <a href="#"
                                               className="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline">Edit</a>
                                        </td>
                                        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                            <a href="#"
                                               className="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline" onClick={this.triggerModal}>Delete</a>
                                        </td>
                                    </tr>

                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Apple Imac 27"
                                        </td>
                                        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            White
                                        </td>
                                        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            Desktop Pc
                                        </td>
                                        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            $1999
                                        </td>
                                        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                            <a href="#"
                                               className="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline">Edit</a>
                                        </td>
                                        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                            <a href="#"
                                               className="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline" onClick={this.triggerModal}>Delete</a>
                                        </td>
                                    </tr>

                                    <tr className="bg-white dark:bg-gray-800">
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Apple Magic Mouse 2
                                        </td>
                                        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            White
                                        </td>
                                        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            Accessories
                                        </td>
                                        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            $99
                                        </td>
                                        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                            <a href="#"
                                               className="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline">Edit</a>
                                        </td>
                                        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                            <a href="#"
                                               className="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline" onClick={this.triggerModal}>Delete</a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default Table;