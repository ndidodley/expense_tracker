import React, {Component} from 'react'
import GoogleIcon from '@mui/icons-material/Google'
import AppleIcon from '@mui/icons-material/Apple';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="2xl:container h-screen m-auto">
                <div hidden className="fixed transparent inset-0 w-7/12 lg:block bg-[url('/public/images/money-jar.jpg')] bg-cover bg-right backdrop-blur">
                </div>
                <div hidden role="hidden"
                     className="fixed inset-0 w-6/12 ml-auto bg-white bg-opacity-70 backdrop-blur-xl lg:block ">

                </div>
                <div className="relative h-full ml-auto lg:w-6/12">
                    <div className="m-auto p-8 sm:px-10 sm:pt-6 sm:pb-0 xl:w-10/12">
                        <div>
                            <p className="font-medium text-lg text-center text-gray-600">Welcome to Expense Tracker</p>
                        </div>
                        <div className="mt-12 grid gap-6 sm:grid-cols-2">
                            <button
                                className="py-3 px-6 rounded-xl bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200">
                                <div className="flex gap-4 justify-center">
                                    <GoogleIcon color='primary'/>
                                    <span className="block w-max font-medium tracking-wide text-sm text-blue-700">with  Google</span>
                                </div>
                            </button>
                            <button
                                className="py-3 px-6 rounded-xl bg-gray-900 transition hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700">
                                <div className="flex gap-4 items-center justify-center text-white">
                                    <AppleIcon/>
                                    <span className="block w-max font-medium tracking-wide text-sm text-white">with Apple</span>
                                </div>
                            </button>
                        </div>

                        <div role="hidden" className="mt-12 border-t">
                            <span
                                className="block w-max mx-auto -mt-3 px-4 text-center text-gray-500 bg-white">Or</span>
                        </div>

                        <form action="" className="space-y-6 py-6">
                            <div>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full py-2 px-6 ring-1 ring-gray-300 rounded placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                                />
                            </div>

                            <div className="flex flex-col items-end">
                                <input
                                    type="password"
                                    placeholder="What's the secret word ?"
                                    className="w-full py-2 px-6 ring-1 ring-gray-300 rounded placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                                />
                                <button type="reset" className="w-max p-3 -mr-3">
                                    <span className="text-sm tracking-wide text-blue-600">Forgot password ?</span>
                                </button>
                            </div>

                            <div>
                                <button
                                    className="w-full px-6 py-3 rounded-xl bg-sky-500 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                                    <span className="font-semibold text-white text-lg">Login</span>
                                </button>
                                <a href="#" type="reset" className="w-max p-3 -ml-3">
                                    <span className="text-sm tracking-wide text-blue-600">Create new account</span>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}