import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../common/layouts";
import Seo from "../common/seo";
import "tachyons";

export default () => (
  <Layout>
    <Seo title="Privacy Policy" description="Privacy policies and statements" />
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
    <div className="bg-washed-red pv5 flex flex-column items-center">
      <h1 className="db f1 display fw1">Impressum</h1>
      <p className="db sans-serif f5 tracked ttu tc">
        Daniela Sohneg
        Dörfla 76/2
        8082 Kirchbach
      </p>
    </div>
  </Layout>
);
