import React from "react";
import "./style.css";
import * as go from "gojs";
import { ReactDiagram } from "gojs-react";

const NodalAnalysis = ({ lineData }) => {
  // console.log(lineData);
  let bus = new Set();
  let link = [];
  let busData = [];
  //  console.log(k);
  lineData.forEach((row) => {
    //  console.log(row.keys[1]);
    bus.add(row.S);
    bus.add(row.R);
    let send = row.S;
    let receive = row.R;
    link.push({ from: send, to: receive });
    busData.push({ key: row.S });
  });

  const initDiagram = () => {
    const $ = go.GraphObject.make;
    const diagram = $(go.Diagram, {
      "undoManager.isEnabled": true,
      "clickCreatingTool.archetypeNodeData": {
        text: "new node",
        color: "lightblue",
      },
      model: $(go.GraphLinksModel, {
        linkKeyProperty: "key",
      }),
    });

    return diagram;
  };

  return (
    <div>
      <ReactDiagram
        initDiagram={initDiagram}
        divClassName="diagram-component"
        nodeDataArray={busData}
        linkDataArray={link}
      />
    </div>
  );
};

export default NodalAnalysis;
