import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Expenses.css";
import moment from "moment";
import { NavLink } from "react-router-dom";

const Expenses = (props) => {

    const [userData, setuserData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:6001/expenses")
            .then(async (res) => {
                const rawData = await res.data;
                setuserData(rawData)
            }).catch(err => console.log(err))
    }, [])

    const deleteUser = (_id) => {
        axios.delete(`http://localhost:6001/expenses/${_id}`)
            .then(res => {
                alert(" User Deleted");
            }).catch(err => {
                alert(err);
            })
        window.location.reload();
    }

    return (
        <>
          <div  className="product-all-item-2">
            <h4>DATE</h4>
            <h4>NAME</h4>
            <h4>PRICE</h4>
            <h4>DELETE</h4>
            <h4>EDIT</h4>
          </div>
            { 
                userData.map((row) => {
                    return (
                        <>
                            <div className="product-all-item">
                                <div>
                                    <span>{moment(row.date).format("DD")}</span>-
                                    <span>{moment(row.date).format("MMM")}</span>-
                                    <span>{moment(row.date).format("YYYY")}</span>
                                </div>
                                <div>
                                    <span>{row.title}</span>
                                </div>
                                <div>
                                    <span>Rs.{row.amount}</span>
                                </div>
                                <div>
                                    <button onClick={() => deleteUser(row._id)} type="submit" className="del-btn" >Delete</button>
                                </div>
                                <div>
                                    <NavLink exact to={`/edit/${row._id}`}>
                                        <button type="submit" className="edit-btn">Edit</button>
                                    </NavLink>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default Expenses;