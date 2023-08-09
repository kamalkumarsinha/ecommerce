import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            We Value our Customer and want to make shopping online comfortable
            and safe.We take precautions to safeguard your financial
            information. Your credit card numbers are protected while in transit
            using the industry-wide standard Secure Sockets Layer encryption.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
