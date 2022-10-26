import React from 'react';

const Faq = () => {
    return (
        <section className="bg-gray-200 text-black my-12 mx-5">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                <p className="mt-4 mb-8 text-black">Here are most popular some answers , people are very curious to know this type of questions answer</p>
                <div className="space-y-4">
                    <details className="w-full border-white border-2 rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-xl">Is React is best for build Single Page Application(SPA)?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-black">Good news! According to Statista, in 2021, React.js became the most widely used web framework among software developers. The survey revealed that 40.14% of respondents relied on it.

                            React.js is a fantastic library for front-end development. No steep learning curve, user-friendly interface and great possibilities - that’s how we can quickly describe React.js. Today we offer you to learn a few useful facts about React and build a small SPA, for which React.js suits just great </p>
                    </details>
                    <details className="w-full border-2 rounded-lg border-white text-xl">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is single-page application means?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-black">An SPA (Single-page application) is a web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as XMLHttpRequest and Fetch when different content is to be shown. </p>
                    </details>
                    <details className="w-full border-2 border-white rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-xl">What is MERN stack ?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-black">MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.

                            MongoDB — document database
                            Express(.js) — Node.js web framework
                            React(.js) — a client-side JavaScript framework
                            Node(.js) — the premier JavaScript web server


                            Express and Node make up the middle (application) tier. Express.js is a server-side web framework, and Node.js is the popular and powerful JavaScript server platform. Regardless of which variant you choose, ME(RVA)N is the ideal approach to working with JavaScript and JSON, all the way through. </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Faq;