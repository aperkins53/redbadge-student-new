import React from "react";
import PropsExample from './component/PropsExample';
import PropsMapping from './component/PropsMapping';

function App() {
  const visitedPlaces = ['Pikes Peak', 'Myrtle Beach', 'Panama City', 'Denver', 'Chicago', 'Mamaws House']
  return (
    <div>
      <PropsExample name='Tom' business='MySpace' />
      <PropsMapping visited={visitedPlaces} />
    </div>
  ); 
}

export default App;
