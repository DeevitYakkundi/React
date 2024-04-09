import React, { useState } from "react";

export function DropMenu() {
    let initialState = {
        name: "",
        city: ""
    };

    const [currentStateFormData, setStateFormData] = useState(initialState);

    // function handleName(event) {
    //     setStateFormData({
    //         ...currentStateFormData,
    //         name: event.target.value
    //     });
    // }


    // function handleCity(event) {
    //     setStateFormData({
    //         ...currentStateFormData,
    //         city: event.target.value
    //     });

    // }
    console.log(currentStateFormData);

    return (
        <div>
            <h1>Drop Menu</h1>
            <input onChange={(event) => {
                setStateFormData({
                    ...currentStateFormData,
                    name: event.target.value
                })
            }}
                type="text"
                name="name"
                placeholder="Enter Name"
            />
            <select onChange={(event) => {
                setStateFormData(
                    {
                        ...currentStateFormData,
                        city: event.target.value
                    })
                }} 
                name="city">
                
                <option value={""} id="">
                    Select City
                </option>
                <option value={"Bengaulru"} id={"Bengaulru"}>
                    Bengaluru
                </option>
                <option value={"Mumbai"} id={"Mumbai"}>
                    Mumbai
                </option>
                
            </select>
            <p>Hi my name is {currentStateFormData.name}.
                I'm from {currentStateFormData.city}.</p>


        </div>
    );
}