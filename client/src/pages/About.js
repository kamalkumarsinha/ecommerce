import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            This is Kamal Kumar Sinha from IIIT Naya Raipur, This is my
            Ecommerce Website for purchasing acessories
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
