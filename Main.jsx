import React, { useState } from "react";
import receipts from "../Data";
import TargetedReceipt from "./ReList.jsx";
import ReList from "./ReList.jsx";

function Main(){
    const options = [
        { value: '', label: 'All' },
        { value: false , label: 'Unpaid' }
    ];
    
    const [paid, setPaid] = useState('');
    
    function onChangeInput({value}){
        setPaid(value);
    }    
    const filteredReceipts = receipts.filter(receipt =>{
        if(paid === ''){
            return receipt;
        }else{
            return receipt.paid === paid;
        }
    });
    return(
        <div className="Receipts">
            <TargetedReceipt options={options} onChange={onChangeInput} defaultValue={options[0]}/>
            <ReList filteredReceipts={filteredReceipts}/>
        </div>
    );

}

export default Main;