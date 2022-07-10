import SideBar from "../components/SideBar";
import OrderDeliveryCard from "../components/OrderDeliveryCard";
import Stepper from "../components/Stepper";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const accType = "general";

export default function Disposal() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar accType={accType} />
        <div style={{ margin: "30px" }}>
          <p>
            <Link to="new">
              <Button color="success">New Disposal +</Button>
            </Link>
          </p>
          <p
            className="text-4xl"
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            Disposals (Ongoing)
          </p>
          <OrderDeliveryCard
            orderID={81792}
            status="Accepted"
            wasteType="chicken"
            weight={4.65}
            action="View Order"
          />
          <OrderDeliveryCard
            orderID={81792}
            status="Pending"
            wasteType="chicken"
            weight={4.65}
            action="View Order"
          />
          <p
            className="text-4xl"
            style={{ marginTop: "50px", marginBottom: "20px" }}
          >
            Disposals (Completed)
          </p>
          <OrderDeliveryCard
            orderID={81792}
            status="Completed"
            wasteType="chicken"
            weight={4.65}
            action="View Order"
          />
          <OrderDeliveryCard
            orderID={81792}
            status="Completed"
            wasteType="chicken"
            weight={4.65}
            action="View Order"
          />
        </div>
        <div>
          <p className="text-4xl" style={{ margin: "30px" }}>
            Order ID: 81792
          </p>
          <Stepper status={2} time={1657367012} />
        </div>
      </div>
    </>
  );
}
