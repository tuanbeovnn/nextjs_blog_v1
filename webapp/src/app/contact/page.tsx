import React from "react";

const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto md:px-8 px-4">
            <div className="flex justify-center items-center my-sm-5 my-3">
                <form className="w-full max-w-3xl">
                    <div className="relative h-0 pb-[45.25%] rounded-[8px] overflow-hidden mb-5">
                        <img
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            src="https://images.unsplash.com/photo-1683117927786-f146451082fb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="this-image"
                        />
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                required
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="name"
                                type="text"
                                placeholder="John Doe"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                required
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded p-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="email"
                                type="email"
                                placeholder="example@email.com"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="message"
                            >
                                Message
                            </label>
                            <textarea
                                className="h-[180px] appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded p-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="message"
                                placeholder="Your message..."
                            ></textarea>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <button
                                className="w-full text-[18px] uppercase bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded-md transition-colors duration-300"
                                type="submit"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
