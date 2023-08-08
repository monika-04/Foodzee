import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
    const [credentials, setcredentials] = useState({
        name: "",
        email: "",
        password: "",
        geolocation: "",
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:4000/api/createUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
        });
        const json = await response.json();
        console.log(json);

        if (!json.success) {
            alert("Enter valid credentials")
        }
    };

    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }
    return (
        <>
            <div className="container" style={{marginTop:"10%",marginLeft:"20%"}}>
                <h2>SignUp</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group" style={{padding:"5px"}}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            style={{width:"40%"}}
                            value={credentials.name}
                            onChange={onChange}
                            className="form-control"
                            placeholder="Name"
                        />
                    </div>

                    <div className="form-group"
                    style={{padding:"5px"}}>
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            style={{width:"40%"}}
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            name="email"
                            value={credentials.email}
                            onChange={onChange}
                        />
                        <small id="emailHelp" className="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div>
                    <div className="form-group"
                    style={{padding:"5px"}}>
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            style={{width:"40%"}}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            name="password"
                            value={credentials.password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="form-group"
                    style={{padding:"5px"}}>
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            style={{width:"40%"}}
                            name="geolocation"
                            value={credentials.geolocation}
                            onChange={onChange}
                            className="form-control"
                            placeholder="Address"
                        />
                    </div>

                    <button type="submit" className="btn btn-success">
                        Submit
                    </button>
                    <Link to="/login" className="m-3 btn btn-danger">
                        Already a user
                    </Link>
                </form>
            </div>
        </>
    );
}
