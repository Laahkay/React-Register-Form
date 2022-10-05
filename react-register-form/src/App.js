import React, { useRef, useState } from "react";
import "./App.css";

function Form() {
  const [formInfo, setFormInfo] = useState({
    FirstName: "",
    surname:"",
    email:"",
    number:"",
    Id: "",
  });




  const [list, setList] = useState([]);
  const clear = useRef(null);
  const handleChange = (e) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, formInfo]);
    setFormInfo({ FirstName: "" });
    clear.current.reset();
  };

  function numberOfppl(newuser) {
    setFormInfo(formInfo.concat({ ...newuser, id: list.length + 1 }));
  }

  // function handleRemove(id) {
  //   console.log(id);

  //   const newList = list.filter((item) => item.id !== id);

  //   setList(newList);
  // }

  return (
    <div className="forms">
      <form ref={clear} onSubmit={handleSubmit} className="form">
        <h1>Register Form </h1>
        <p>
          Hello Please <span>Register</span>
        </p>
        <hr />
        <label>Name</label>
        <input
          type="text"
          onChange={handleChange}
          name="FirstName"
          value={formInfo.FirstName}
        />{" "}
        <br />
        <br />
        <label>Surname</label>
        <input
          type="text"
          onChange={handleChange}
          name="surname"
          value={formInfo.surname}
        />
        <br />
        <br />
        <label>email</label>
        <input
          type="text"
          onChange={handleChange}
          name="email"
          value={formInfo.email}
        />
        <br />
        <br />
        <label>Phone Number</label>
        <input
          type="text"
          onChange={handleChange}
          name="number"
          value={formInfo.number}
        />
        <br />
        <br />
        <label>Id Number</label>
        <input
          type="text"
          onChange={handleChange}
          name="Id"
          value={formInfo.Id}
        />
        <br />
        <br />
        <button type="submit" onSubmit={numberOfppl} className="butt">
          Submit
        </button>
      </form>
      <br />
      <h2 className="center">Display Result</h2>
      <div className="table">
        <h2 className="text-xl">Num Of loggers ({list.length})</h2>
        <hr></hr>
        <table>
          <thead>
            <tr>
              <th className="one">Name</th>

              <th className="two">Surname</th>

              <th className="three">Phone</th>

              <th className="four">Email</th>
              <th className="four">ID Number</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => {
              return (
                <tr className="" key={item.id}>
                  
                  <td>{item.FirstName}</td>

                  <td> {item.surname}</td>

                  <td> {item.number}</td>

                  <td> {item.email}</td>

                  <td> {item.Id}</td>
                  {/* <button
                    type="button"
                    className="butts"
                    onClick={() => handleRemove(item.id)}
                  >
                    Delete
                  </button> */}
                </tr>
                
              );
          
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Form;
