import React from "react";

export default function Login() {
    return (
        <div className="max-w-7xl mx-auto md:px-8 px-4">
            <div className="max-w-md mx-auto my-6 w-full bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
                    Login
                </h2>
                <form action="#" method="POST">
                    <div className="mb-4">
                        <label
                            htmlFor="login-email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="login-email"
                            name="email"
                            required
                            className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="login-password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="login-password"
                            name="password"
                            required
                            className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="••••••••"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Login Now
                    </button>
                </form>
            </div>
        </div>
    );
}
