import React from "react";
import CommonBanner from "../../Shared/CommonBanner/CommonBanner";
import useTitle from "../../Shared/useTitle/useTitle";

const Blog = ({ children }) => {
  useTitle("blog");
  return (
    <div>
      <div>
        <CommonBanner text={" Speacial Blog...."}></CommonBanner>
        {children}
      </div>
      <div className="">
        <div className="">
          <h1 className=" relative text-center sm:text-9xl text-3xl md:text-4xl font-bold pt-4">
            Blogs
          </h1>
        </div>
        <div className="mt-4 grid md:grid-cols-3 lg:grid-cols-3  sm:grid-cols-1 gap-6 px-16 py-4">
          <div className="mx-auto">
            <a className="block max-w-sm p-6  bg-gray-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                What is an access token and refresh token? How do they work and
                where should we store them on the client-side?...?
              </h5>
              <p className="mb-2 text-gray-800 font-lg dark:text-gray-800">
                To token are commonly used in authentication and authorization
                systems. Here's an overview of what they are and how they work,
                for Example....
                <ol className="list-decimal mt-5">
                  <li>
                    An access token is a credential that is used to access
                    protected resources in an application or API. It is
                    typically short-lived and contains information about the
                    user's identity and permissions.
                  </li>
                  <li className="mt-5">
                    A refresh token is a credential that is used to obtain a new
                    access token when the current access token expires. Unlike
                    access tokens, refresh tokens are typically long-lived and
                    are used to obtain new access token,
                  </li>
                </ol>
              </p>
            </a>
          </div>
          {/*============ Second Card-=========== */}
          <div className="mx-auto">
            <a className="block max-w-sm p-6 bg-gray-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Compare SQL and NoSQL databases?....?
              </h5>
              <div>
                <p className="mb-2 text-gray-800 font-lg dark:text-gray-800">
                  SQL (Structured Query Language) and NoSQL (Not Only SQL) are
                  two different types of database management systems. Here's a
                  comparison of SQL and NoSQL databases
                  <ol className="list-decimal mt-5">
                    <li>
                      SQL databases use a structured data model based on tables
                      with predefined schemas. They enforce strict data
                      consistency and rely on relational integrity.
                    </li>
                    <li className="mt-5">
                      NoSQL databases use various data models, such as
                      key-value, document, columnar, or graph-based models. They
                      provide more flexibility in data organization and allow
                      for schema-less or dynamic schemas.
                    </li>
                  </ol>
                </p>
              </div>
            </a>
          </div>
          {/* =============Third Card ===============*/}
          <div className="mx-auto">
            <a className="block max-w-sm p-6 bg-gray-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                What is express js? What is Nest JS ?.....?
              </h5>
              <div>
                <p className="mb-2 text-gray-800 font-lg dark:text-gray-800">
                  Here are some of the key differences between the two:
                  <ol className="list-decimal mt-5">
                    <li>
                      Express.js is a minimalistic and flexible web application
                      framework for Node.js. It provides a set of features and
                      utilities for building web applications and APIs.
                      Express.js is known for its simplicity, lightweight
                      nature, and ease of use. It allows developers to handle
                      HTTP requests, define routes,
                    </li>
                    <li className="mt-5">
                      NestJS, on the other hand, is a TypeScript-based
                      progressive web application framework for building
                      scalable and efficient server-side applications. It is
                      built with a focus on modularity, testability, and
                      extensibility.
                    </li>
                  </ol>
                </p>
              </div>
            </a>
          </div>
          {/* =================Fourth Card============== */}
          <div className="mx-auto">
            <a className="block max-w-sm p-6 bg-gray-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                What is MongoDB aggregate and how does it work?
              </h5>
              <div>
                <p className="mb-2 text-gray-800 font-lg dark:text-gray-800">
                  In MongoDB, the aggregate framework is a powerful feature that
                  allows you to perform advanced data processing and analysis
                  operations on the data stored in your MongoDB collections. It
                  provides a flexible and efficient way to query and manipulate
                  data by applying a sequence of operations called stages.
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="mb-10"></div>
      </div>
    </div>
  );
};

export default Blog;
