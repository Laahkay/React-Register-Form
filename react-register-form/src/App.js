import React, { useState } from 'react';
import './App.css'


function Form() {
    const [formInfo, setFormInfo] = useState({
        name: "",
        surname: '',

        email: ""
    });

    const [list, setList] = useState([]);

    const handleChange = (e) => {
        setFormInfo({ ...formInfo, [e.target.name]: e.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setList([...list, formInfo])
        setFormInfo({ name: '' })
    };

    return (
        <div className="form">
            <h1>Register Form</h1>

            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    onChange={handleChange}
                    name="name"
                    value={formInfo.name}
                /> <br />
                <br />

                  <label>Surname</label>
                    <input
                    type="text"
                    onChange={handleChange}
                    name="surname"
                    value={formInfo.surname}
                /><br />
                <br />
                <label>email</label>
                    <input
                    type="text"
                    onChange={handleChange}
                    name="email"
                    value={formInfo.email}
                /><br />
                <br />
                <label>Phone Number</label>
                    <input
                    type="text"
                    onChange={handleChange}
                    name="number"
                    value={formInfo.number}
                /><br />
                <br />
                <label>Id Number</label>
                    <input
                    type="text"
                    onChange={handleChange}
                    name="id"
                    value={formInfo.id}
                /><br />
                <br />
                <button type="submit">Submit</button>
            </form>

            <table className="forms">
          <thead>
            <tr className="border-b">
              <th className="">Name</th>
              <br />
              <th className="">Surname</th>
              <br /> 
              <th className="">Number</th>
              <br /> 
              <th className="">Email</th>
              <br /> 
              <th className="">ID Number</th>
            </tr>
          </thead>
          <tbody>
          {list.map((item) => {
                    return (
                        <tr>
                            <td>{item.name}</td>
                            <br />
                            <td> {item.surname}</td>
                            <br />
                            <td> {item.number}</td>
                            <br />
                            <td> {item.email}</td>
                            <br />
                            <td> {item.id}</td>
                        </tr>)
                })}
          </tbody>
        </table>
{/* 
            <ul>
                {list.map((item) => {
                    return (
                        <li>
                            <h2>Name :{item.name}</h2>
                            <h2>Surname: {item.surname}</h2>
                            <h2>Number: {item.number}</h2>
                            <h2>Email : {item.email}</h2>
                            <h2> ID Number: {item.id}</h2>
                        </li>)
                })}
            </ul> */}

        </div>

    )
};

export default Form