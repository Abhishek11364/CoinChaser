import React from "react";
import Banner from "../components/Banner/Banner";
import CoinsTable from "../components/CoinsTable";

const Homepage = () => {
  const homepageStyle = {
    backgroundImage: `url("https://img.freepik.com/premium-photo/technology-network-background_303085-5279.jpg")`,
    backgroundSize: "100% 100%",  
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100%", 
  };

  return (
    <div style={homepageStyle}>
      <Banner />
      <CoinsTable />
    </div>
  );
};

export default Homepage;
