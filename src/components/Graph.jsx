import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { ResponsiveNetwork } from "@nivo/network";
import sampleData from "./sampleData.json";

const Graph = ({ pkg, version }) => {
  const [tree, setTree] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = API.get("DepTree", `/tree?package=${pkg}&view=${version}`);
      setTree(result);
    };
    fetchData();
  }, [pkg, version]);

  return (
    <div style={{ height: 500, width: 500 }}>
      <ResponsiveNetwork
        links={sampleData.links}
        nodes={sampleData.nodes}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        repulsivity={6}
        iterations={60}
        nodeColor={function (e) {
          return e.color;
        }}
        nodeBorderWidth={1}
        nodeBorderColor={{ from: "color", modifiers: [["darker", 0.8]] }}
        linkThickness={function (e) {
          return 2 * (2 - e.source.depth);
        }}
        motionStiffness={160}
        motionDamping={12}
      />
    </div>
  );
};

export default Graph;
