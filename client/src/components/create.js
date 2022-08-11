import React, { useState } from "react";
import { useNavigate } from "react-router";
import { config } from "../utils/constants";

export default function Create() {
    const [form, setForm] = useState({
        name: "",
        position: "",
        level: "",
    });
    const navigate = useNavigate();

    //These methods will update the state properties.
    function updateForm(value) {
        setForm((prev) => {
            console.log("updateForm function", prev, value)
            return {...prev, ...value}
        });
    }

    //This function will handle the submission.
    async function onSubmit(e) {
        e.preventDefault();

        //When a post request is sent to the create url, we'll add a new record to the database.
        const newPerson = { ...form };
        const URL = config.url; 


        await fetch(`${URL}/record/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPerson),
        })
        .catch(err=> {
            console.log(err);
            return;
        });

        //reset the form
        setForm({ name: "", person: "", level: "" });

        //navigate back to the homepage
        navigate("/");
    }

    //This following section will display the form that takes the input from the user.
    return (
        <div>
            <h3>Create New Records</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={form.name}
                        onChange={(e) => updateForm({ name: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="position">Position</label>
                    <input
                        type="text"
                        className="form-control"
                        id="position"
                        value={form.position}
                        onChange={(e) => updateForm({ position: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="positionOptions"
                            id="positionIntern"
                            value="Intern"
                            checked={form.level === "Intern"}
                            onChange={(e) => updateForm({ level: e.target.value })}
                        />
                        <label htmlFor="positionIntern" className="form-check-label"> Intern</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="positionOptions"
                            id="positionJunior"
                            value="Junior"
                            checked={form.level === "Junior"}
                            onChange={(e) => updateForm({ level: e.target.value })}
                        />
                        <label htmlFor="positionJunior" className="form-check-label"> Junior</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="positionOptions"
                            id="positionSenior"
                            value="Senior"
                            checked={form.level === "Senior"}
                            onChange={(e) => updateForm({ level: e.target.value })}
                        />
                        <label htmlFor="positionSenior" className="form-check-label"> Senior</label>
                    </div>
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Create person"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
}