import React from 'react';
import './NetworkRepresentation.css';
import * as go from 'gojs';
import { ReactDiagram } from 'gojs-react';
function NetworkDiagram({lineData}){
    // console.log(lineData);
    var bus= new Set();
     var link=[];
     var busData=[]
    //  console.log(k);
     lineData.forEach(row=>{
        //  console.log(row.keys[1]);
         bus.add(row.S);
         bus.add(row.R);
         let send=row.S;
         let receive=row.R;
         link.push({from:send,to:receive})
        busData.push({key:row.S});
     })
     
     
function initDiagram() {
    const $ = go.GraphObject.make;
    const diagram =
      $(go.Diagram,
        {
          'undoManager.isEnabled': true, 
          'clickCreatingTool.archetypeNodeData': { text: 'new node', color: 'lightblue' },
          model: $(go.GraphLinksModel,{
            linkKeyProperty: 'key'  
          })
        });
  
    // diagram.nodeTemplate =
    //   $(go.Node, 'Auto',  
    //     new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(go.Point.stringify),
    //     $(go.Shape, 'RoundedRectangle',
    //       { name: 'SHAPE', fill: 'white', strokeWidth: 0 },
    //         new go.Binding('fill', 'color')),
    //     $(go.TextBlock,
    //       { margin: 8, editable: true },  
    //       new go.Binding('text').makeTwoWay()
    //     )
    //   );
  
    return diagram;
  }

    return(<div>
<ReactDiagram
        initDiagram={initDiagram}
        divClassName='diagram-component'
        nodeDataArray={busData}
        linkDataArray={link}
      />
    </div>)
}

export default NetworkDiagram;