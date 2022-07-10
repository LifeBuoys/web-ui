import SideBar from "../components/SideBar";
import Datepicker from "../components/Datepicker";
import { Button } from "flowbite-react";

const accType = "general";

export default function NewDisposal() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar accType={accType} />
        <div style={{ margin: "30px" }}>
          <p
            className="text-4xl"
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            Choose Collection Date
          </p>
          <Datepicker />
          <p style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Button>Confirm</Button>
          </p>
        </div>
      </div>
    </>
  );
}
