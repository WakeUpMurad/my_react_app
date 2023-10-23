import React, {useState} from 'react';
import './CostForm.css'

const CostForm = ({onSaveCostData, onCancel}) => {

    const [userInput, setUserInput ] = useState({
        description: '',
        amount: '',
        date: ''
    })
    const nameChangeHandle = (event) => {
        setUserInput((previousState) => {
            return {
                ...previousState,
                description: event.target.value
            }
        })
    }
    const amountChangeHandle = (event) => {
        setUserInput((previousState) => {
            return {
                ...previousState,
                amount: event.target.value,
            }
        })
    }

    const dateChangeHandle = (event) => {
        setUserInput((previousState) => {
            return {
                ...previousState,
                date: event.target.value,
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const costData = {
            ...userInput,
            date: new Date(userInput.date)
        }
        onSaveCostData(costData)
        setUserInput({
            description: '',
            amount: '',
            date: ''
        })
    }

    return (
        <form action="" onSubmit={submitHandler}>
            <div className={'new-cost__controls'}>
                <div className={'new-cost__control'}>
                    <label htmlFor="">Название</label>
                    <input type="text" value={userInput.name} onChange={nameChangeHandle}/>
                </div>
                <div className={'new-cost__control'}>
                    <label htmlFor="">Сумма</label>
                    <input type="number" min={'0.01'} step={'0.01'} value={userInput.amount} onChange={amountChangeHandle}/>
                </div>
                <div className={'new-cost__control'}>
                    <label htmlFor="">Дата</label>
                    <input type="date" min={'2019-01-01'} max={'2023-12-31'} value={userInput.date} onChange={dateChangeHandle}/>
                </div>
                <div className={'new-cost__action'}>
                    <button type={"submit"}>Добавить расход</button>
                    <button type={"submit"} onClick={onCancel}>Отмена</button>
                </div>
            </div>
        </form>
    );
};

export default CostForm;