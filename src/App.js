import React, {useState} from 'react';
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
function App() {

    const [costs, setCosts] = useState([
    {
        id: 'c1',
        date: new Date(2021, 2, 12),
        description: 'Холодильник',
        amount: 999.99,
    },
    {
        id: 'c2',
        date: new Date(2021, 11, 25),
        description: 'MacBook',
        amount: 1254.72,
    },
    {
        id: 'c3',
        date: new Date(2021, 4, 1),
        description: 'Джинсы',
        amount: 49.99,
    },
])

    const addCostHandler = (cost) => {
        setCosts((previousValue) => {
            return [...previousValue, cost]
        })
    }

  return (
    <div>
        <NewCost onAddCost={addCostHandler}/>
        <Costs costs={costs} />
    </div>
  );
}

export default App;
