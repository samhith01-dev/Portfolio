import React from "react";
import Navbar from "../components/Navbar";

function Details() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "100px 20px", textAlign: "center" }}>
        <h1>Details</h1>
        <p>Here you can find more detailed information about my work.</p>
      </div>
    </>
  );
}

export default Details;