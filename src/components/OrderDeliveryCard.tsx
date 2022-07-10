import { Card } from "flowbite-react";
import { IOrderDelivery } from "../utils/types/IOrderDelivery";
import { Button } from "flowbite-react";

export default function OrderDeliveryCard(props: IOrderDelivery) {
  return (
    <div className="max-w-sm">
      <Card>
        {props.imgURL && <img src={props.imgURL} className="w-80 h-80" />}
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.clientName ? props.clientName : "Order ID: " + props.orderID}
        </h5>
        {props.status && (
          <span className="font-normal text-gray-700 dark:text-gray-400">
            Status: {props.status}
          </span>
        )}
        {props.eta && (
          <span className="font-normal text-gray-700 dark:text-gray-400">
            ETA: {props.eta}
          </span>
        )}
        <span className="font-normal text-gray-700 dark:text-gray-400">
          Type of food waste: {props.wasteType}
        </span>
        <span className="font-normal text-gray-700 dark:text-gray-400">
          Weight/kg: {props.weight}
        </span>
        {props.reward && (
          <span className="font-normal text-gray-700 dark:text-gray-400">
            Reward (SGD): {props.reward}
          </span>
        )}
        <Button>{props.action}</Button>
      </Card>
    </div>
  );
}
