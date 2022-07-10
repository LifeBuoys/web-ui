import React from "react";
import "flowbite";
import "clsx";
import { CheckCircleIcon } from "@heroicons/react/solid";

interface StepperProps {
  status: number;
  time: number;
}

export default function Stepper({ status, time }: StepperProps) {
  const created = new Date(time * 1000).toLocaleString();
  const content = [
    { title: "Order Placed", wait: created, done: created },
    { title: "Repurposing Facility", wait: "Pending", done: "Accepted" },
    { title: "Delivery Partner", wait: "Pending", done: "Accepted" },
    { title: "Delivery Rider", wait: "Pending", done: "Accepted" },
    { title: "Delivery In-progress" },
    { title: "Completed" },
  ];
  return (
    <div className="m-9">
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {content.map((entry, index) => (
          <li className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              {index > status ? (
                <div className="h-5 w-5 border-2 border-blue-600 rounded-full" />
              ) : (
                <CheckCircleIcon className="fill-blue-600" />
              )}
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              {entry.title}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-700">
              {index > status ? entry.wait : entry.done}
            </time>
          </li>
        ))}
      </ol>
    </div>
  );
}
