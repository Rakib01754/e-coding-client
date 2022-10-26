import React from 'react';

const Blog = () => {
    return (
        <div className='p-5 mt-5'>
            <h1 className='text-5xl font-bold text-center underline'>Blogs</h1>
            <div className="bg-gray-200 text-black my-12">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg">
                    <div className="mt-3 border-2 p-4 border-white shadow-md">
                        <h4 className="text-3xl font-bold hover:underline">What is cors?</h4>
                        <p className="mt-2">CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests. The same-origin security policy forbids cross-origin access to resources. But CORS gives web servers the ability to say they want to opt into allowing cross-origin access to their resources.</p>
                    </div>
                    <div className="mt-3  border-2 p-4 border-white shadow-md">
                        <h4 className="text-3xl font-bold hover:underline">Why are you using `firebase`? What other options do you have to implement authentication?</h4>

                        <p className="mt-2">Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.   The same-origin security policy forbids cross-origin access to resources. But CORS gives web servers the ability to say they want to opt into allowing cross-origin access to their resources.</p>

                        <h5 className='font-bold text-2xl my-2 underline'>Some Alternatives Of Firebase Authentication</h5>
                        <div className='px-5'>
                            <li className='text-xl text-left'>Auth0</li>
                            <li className='text-xl text-left'>MongoDb</li>
                            <li className='text-xl text-left'>Passport</li>
                            <li className='text-xl text-left'>Okta</li>
                            <li className='text-xl text-left'>JSON Web Token</li>
                            <li className='text-xl text-left'>Keycloak</li>
                            <li className='text-xl text-left'>Amazon Cognito</li>
                        </div>
                    </div>
                    <div className="mt-3  border-2 p-4 border-white shadow-md">
                        <p className="text-3xl font-bold hover:underline">How does the private route work?</p>
                        <p className="mt-2">The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property. The current logged in user (authUser) is retrieved from Redux state with a call to the useSelector() hook. Redux is used in this example however it is not required to implement a Private Route component in React Router 6. You could use a different state management library or any approach you prefer to get the logged in status of the user.</p>
                    </div>
                    <div className="mt-3  border-2 p-4 border-white shadow-md">
                        <p className="text-3xl font-bold hover:underline">What is Node? How does Node work?</p>
                        <h5 className='font-bold text-2xl my-2 underline'>Defination Of Node.</h5>
                        <p className="mt-2">
                            Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                        </p>
                        <h5 className='font-bold text-2xl my-2 underline'>Working Process Of Node.</h5>
                        <p className="mt-2">
                            Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

                            Node.js basically works on two concept

                            Asynchronous
                            Non-blocking I/O
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Blog;