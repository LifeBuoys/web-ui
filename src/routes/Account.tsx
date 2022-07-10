import SideBar from "../components/SideBar";
import GeneralInfo from "../components/GeneralInfo";
import PasswordInfoCard from "../components/Profile/PasswordInfoCard";

const accType = "facility";

export default function Account() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar accType={accType} />
        <div>
          <div
            style={{
              width: "900px",
              height: "600px",
              boxShadow: "0px 1.15937px 2.31875px rgba(0, 0, 0, 0.08)",
              borderRadius: "9.275px",
              marginTop: "20px",
            }}
          >
            <GeneralInfo />
          </div>
          <div
            style={{
              width: "900px",
              height: "600px",
              boxShadow: "0px 1.15937px 2.31875px rgba(0, 0, 0, 0.08)",
              borderRadius: "9.275px",
              marginTop: "20px",
            }}
          >
            <PasswordInfoCard />
          </div>
        </div>
      </div>
    </>
  );
}
