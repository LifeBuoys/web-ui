import React from "react";
import "flowbite";
import {
  ShoppingBagIcon,
  ClipboardListIcon,
  SupportIcon,
  TrashIcon,
} from "@heroicons/react/solid";
import { Link } from "react-router-dom";

type SideBarProps = {
  accType: string;
};

export default function SideBar(props: SideBarProps) {
  if (props.accType === "general") {
    // GENERAL USER
    // console.log(props.accType);
    return (
      <aside className="w-64" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
          <ul className="space-y-2">
            <li>
              <Link to="/disposal">
                <a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <ShoppingBagIcon className="h-5 w-5 fill-black-100" />
                  <span className="ml-3">Disposal</span>
                </a>
              </Link>
            </li>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
            <li>
              <Link to="/account">
                <a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                  <ClipboardListIcon className="h-5 w-5 fill-gray-500" />
                  <span className="ml-4">Account</span>
                </a>
              </Link>
            </li>
            <li>
              <a
                href="google.com"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <SupportIcon className="h-5 w-5 fill-gray-500" />
                <span className="ml-3">Help</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    );
  } else if (props.accType === "delivery") {
    // DELIVERY RIDER
    // console.log(props.accType);
    return (
      <aside className="w-64" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
          <ul className="space-y-2">
            <li>
              <a
                href="google.com"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <ShoppingBagIcon className="h-5 w-5 fill-black-500" />
                <span className="ml-3">Deliveries</span>
              </a>
            </li>
            <li>
              <a
                href="google.com"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <ShoppingBagIcon className="h-5 w-5 fill-black-500" />
                <span className="ml-3">Past Deliveries</span>
              </a>
            </li>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
            <li>
              <a
                href="google.com"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <ClipboardListIcon className="h-5 w-5 fill-gray-500" />
                <span className="ml-4">Account</span>
              </a>
            </li>
            <li>
              <a
                href="google.com"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <SupportIcon className="h-5 w-5 fill-gray-500" />
                <span className="ml-3">Help</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    );
  } else if (props.accType === "facility") {
    // PROSE
    // console.log(props.accType);
    return (
      <aside className="w-64" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
          <ul className="space-y-2">
            <li>
              <a
                href="google.com"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <ShoppingBagIcon className="h-5 w-5 fill-black-500" />
                <span className="ml-3">Incoming Orders</span>
              </a>
            </li>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
            <li>
              <Link to="/account">
                <a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                  <ClipboardListIcon className="h-5 w-5 fill-gray-500" />
                  <span className="ml-4">Account</span>
                </a>
              </Link>
            </li>
            <li>
              <a
                href="google.com"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <SupportIcon className="h-5 w-5 fill-gray-500" />
                <span className="ml-3">Help</span>
              </a>
            </li>
            <li>
              <a
                href="google.com"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <TrashIcon className="h-5 w-5 fill-gray-500" />
                <span className="ml-3">Available Disposals</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    );
  } else {
    console.log(props.accType);
    return <h1>ERROR. YOU ARE NOT LOGGED IN</h1>;
  }
}
