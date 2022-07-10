import React from "react";
import "flowbite";

export default function PasswordInfoCard() {
  return (
    <>
      <h1 className="text-3xl mx-6 font-bold ">Password Information</h1>
      <form>
        <div className="grid gap-6 m-6 md:grid-cols-2">
          <div className="m-6">
            <label
              htmlFor="old_password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Old Password
            </label>
            <input
              type="password"
              id="old_password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="****"
              required
            />
          </div>
          <div className="m-6">
            <label
              htmlFor="new_password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              New Password
            </label>
            <input
              type="password"
              id="new_password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="****"
              required
            />
          </div>
          <div className="m-6">
            <label
              htmlFor="confirm_new_password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirm_new_password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="****"
              required
            />
          </div>
        </div>
        <div className="m-6">
          <label
            htmlFor="confirm_password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Password requirements:
          </label>
          <p>Ensure that these requirements are met:</p>
          <ul className="list-disc dark:text-gray-400">
            <li>At least 10 characters (and up to 100 characters)</li>
            <li> At least one uppercase character</li>
            <li> Inclusion of at least one special character</li>
            <li> Inclusion of at least one digit</li>
          </ul>
        </div>
        <button
          type="submit"
          className="mx-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Save
        </button>
      </form>
    </>
  );
}
