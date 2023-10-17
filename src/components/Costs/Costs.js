import React from 'react';
import './Costs.css'
import CostItem from "./CostItem/CostItem";
import Card from "../UI/Card/Card";

const Costs = ({costs}) => {
    return (
        <Card className={'costs'}>
            {costs.map((cost) => {
                return <CostItem key={cost.date} date={cost.date} description={cost.description} amount={cost.amount}/>
            })}
        </Card>
    );
};

export default Costs;