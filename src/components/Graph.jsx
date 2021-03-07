import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { ResponsiveNetwork } from "@nivo/network";
import sampleData from "./sampleData.json";

const Graph = ({ pkg, version }) => {
  const [dependencies, setDependencies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await API.get(
        "DepTree",
        `/tree?package=${pkg}&version=${version}`
      );
      setDependencies(result.dependencies);
    };
    fetchData();
  }, [pkg, version]);

  return (
    <div style={{ height: 500, width: 500 }}>
      <ResponsiveNetwork
        links={Object.keys(dependencies).map((d) => ({
          source: `${pkg}, ${version}`,
          target: `${d}, ${dependencies[d]}`,
          distance: 200,
        }))}
        nodes={[
          {
            id: `${pkg}, ${version}`,
            radius: 20,
            depth: 1,
            color: "rgb(255, 152, 0)",
          },
          ...Object.keys(dependencies).map((d) => ({
            id: `${d}, ${dependencies[d]}`,
            radius: 8,
            depth: 1,
            color: "rgb(97, 205, 187)",
          })),
        ]}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        repulsivity={300}
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
