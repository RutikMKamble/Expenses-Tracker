import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import './Edit.css'


const Edit = () => {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState();
    const [date, setDate] = useState();
    const [desc, setDesc] = useState();

    const { userID } = useParams();

    const [userData, setuserData] = useState([]);



    useEffect(() => {
        axios.get(`http://localhost:6001/expenses/${userID}`)
            .then(async (res) => {
                const rawData = await res.data[0];
                console.log(rawData);

                setTitle(rawData.title);
                setAmount(rawData.amount);
                setDate(rawData.date);

                setuserData(rawData);
            }).catch(err => console.log(err));
    }, [])

    const updateHandler = (e) => {
        e.preventDefault();
        const dataObj = {
            id: Math.random(),
            title: title,
            amount: amount,
            date: new Date(date)
        }
        console.log(dataObj);
        axios.put(`http://localhost:6001/expenses/${userID}`, dataObj)
            .then((res) => {
                alert("user updated");
                navigate("/");
            }).catch(err => {
                alert(err);
            })

    }

 
    const close = ()=>{
        navigate('/')
    }


    return (
        <>
            <div className="header">
                <span>Edit Your Details......</span>
            </div>
            <form onSubmit={updateHandler} className="main-div">
                <div className="inputCover">
                    <label htmlFor="title" className="title">Title</label><br />
                    <input type="text" name="title" className="common-input-css" onChange={e => setTitle(e.target.value)} value={title} required />
                </div>

                <div className="inputCover">
                    <label htmlFor="title" className="title">Desc</label><br />
                    <input type="text" name="title" className="common-input-css" onChange={e => setDesc(e.target.value)} value={desc} required />
                </div>

                <div className="inputCover">
                    <label htmlFor="amount" className="title">Amount</label> <br />
                    <input type="number" name="amount" className="common-input-css" onChange={e => setAmount(e.target.value)} value={amount} required />
                </div>

                <div className="inputCover">
                    <label htmlFor="date" className="title">Date</label> <br />
                    <input type="date" name="date" className="common-input-css" onChange={e => setDate(e.target.value)} value={date} /> <br /><br />
                </div>
                <div className="UpdateForm" >
                <button type="submit" className="submit-button" onClick={close}>Cancel</button>

                </div>
                <div className="UpdateForm">
                    <button type="submit" className="submit-button">Update Data</button>
                </div>
            </form>
        </>

    );
}

export default Edit;

