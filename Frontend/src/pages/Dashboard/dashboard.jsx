import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getReq } from "../../api";

const Dashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const userId = localStorage.getItem("userId");

  const [istoken, setisTOken] = useState(token);
  const [getrole, setgetrole] = useState(role);
  // logout
  const handleLogout = () => {
    localStorage.clear("token");
    localStorage.clear("role");
    localStorage.clear("userId");
    navigate("/login");
  };
  // apicalling
  const [getapidata, setgetapidata] = useState([]);
  const geteData = async () => {
    const responce = await getReq("/auth/get");
    const data = responce?.data.users;

    const filterData = data.filter((value, index) => value._id == userId);

    console.log(filterData);

    // setgetapidata(data)
  };
  geteData();

  // useEffect
  useEffect(() => {
    if (token && role) {
      if (role === "admin") {
        navigate("/dashboardAdmin");
      } else if (role === "user") {
        navigate("/dashboard");
      } else {
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  }, [token, role, navigate]);
  return (
    <div>
      dashboard
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;