import React, {useState} from 'react';
import './CostItem.css';
import CostDate from "../CostDate/CostDate";
import Card from "../../UI/Card/Card";
const CostItem = ({date, description, amount}) => {

    const [descript, setDescript] = useState(description)
    const changeDescriptionHandle = () => {
        setDescript('New cost')
    }
    return (
        <li>
            <Card className={'cost-item'}>
                <CostDate date={date}/>
                <div className={'cost-item__description'}>
                    <h2>{descript}</h2>
                    <div className={'cost-item__price'}>${amount}</div>
                </div>
                <button onClick={changeDescriptionHandle}>Изменить описание</button>
            </Card>
        </li>
    );
};

export default CostItem;