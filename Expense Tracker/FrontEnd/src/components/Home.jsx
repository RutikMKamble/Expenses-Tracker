import React from "react";
import "./Home.css"
import { useState } from "react";
import axios from "axios"
import Expenses from "./Expenses";


const Home = () => {


    const [viewForm, setViewForm] = useState(false);
    const [title, setTitle] = useState();
    const [amount, setAmount] = useState();
    const [date, setDate] = useState();
    const [desc, setDesc] = useState();

    const submitHandler = (e) => {
        e.preventDefault();

        const dataObj = {
            title: title,
            desc: desc,
            amount: amount,
            date: new Date(date)
        }
        console.log(dataObj);
        axios.post("http://localhost:6001/expenses", dataObj)
        alert("Data Save successfully.....")
         window.location.reload();
    }

    return (
        <>
            <form onSubmit={submitHandler} className={viewForm ? 'visibleForm' : 'nonvisibleForm'}>
                <div className="input-div">
                    <div className="centar-after_582px">
                        <input type="text" className="textBox" name="title" onChange={(e) => setTitle(e.target.value)} placeholder='Enter Name/Title..........' required />
                    </div>
                    <div className="centar-after_582px">
                      
                        <input type="text" className="textBox" name="desc" onChange={(e) => setDesc(e.target.value)} value={desc} placeholder='Enter Description Here......' required />
                    </div>
                    <div className="centar-after_582px">
                       
                        <input type="number" className="textBox" name="amount" onChange={(e) => setAmount(e.target.value)} value={amount} placeholder='Enter Amount In Number....' required />
                    </div>
                    <div className="centar-after_582px">
                        <input type="date" className="textBox" name="date" onChange={(e) => setDate(e.target.value)} value={date} required  />
                    </div>
                    <div className="btn-center">
                      <input type="submit" onClick={() => setViewForm(!viewForm)} className={!viewForm ? 'nonvisibleForm' : 'visibleForm from-two-btn'} value="Add Expenses" />
                    </div>
                    <div className="btn-center">
                        <button onClick={() => setViewForm(!viewForm)} className={!viewForm ? 'nonvisibleForm' : 'visibleForm from-two-btn'} >Cancel</button>
                    </div>
                </div>
            </form>
            {/* 888888888888888888888 */}
            <div className={viewForm ? 'nonvisibleForm ' : 'visibleForm topBtn'}>
                <div className="addNewBtn">
                    <button onClick={() => setViewForm(!viewForm)} className={viewForm ? 'nonvisibleForm' : 'visibleForm btn-design'} >Add New Expenses</button>
                </div>
            </div>
            <Expenses></Expenses>
        </>
    )
}

export default Home;