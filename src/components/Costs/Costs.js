import React, {useState} from 'react';
import './Costs.css'
import CostItem from "./CostItem/CostItem";
import Card from "../UI/Card/Card";
import CostFilter from "./CostFilter/CostFilter";
import CostList from "./CostList/CostList";

const Costs = ({costs}) => {

    const [selectedYear, setSelectedYear] = useState('2021')
    const yearChangeHandler = (year) => {
        setSelectedYear(year)
    }
    const filteredCosts = costs.filter(cost => {
        return cost.date.getFullYear().toString() === selectedYear
    })


    return (
        <Card className={'costs'}>
            <CostFilter year={selectedYear} onChangeYear={yearChangeHandler}/>
            <CostList costs={filteredCosts} />
        </Card>
    );
};

export default Costs;