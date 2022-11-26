import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <section className=" ">
                    <div className="container text-secondary font-bold flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                        <div className="space-y-4">
                            <details className="w-full border rounded-lg cursor-pointer">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-teal-400">What are the different ways to manage a state in a React application?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-800">
                                    The Four Kinds of React State to Manage
                                    1.Local state.
                                    2.Global state.
                                    3.Server state.
                                    4.URL state.
                                </p>
                            </details>
                            <details className="w-full border rounded-lg cursor-pointer">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-teal-400">How does prototypical inheritance work?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-800">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                            </details>
                            <details className="w-full border rounded-lg cursor-pointer">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-teal-400">What is a unit test? Why should we write unit tests?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-800">The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                            </details>
                            <details className="w-full border rounded-lg cursor-pointer">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-teal-400">React vs. Angular vs. Vue?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-800">Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
                            </details>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Blog;