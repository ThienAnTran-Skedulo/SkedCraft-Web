import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";
import { useDispatch } from "react-redux";
import './NewJob.css'

// core components

function NewJob() {
    // Job description
    const [description, setDescription] = useState("")
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setDescription(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const jobDescription = event.target['desciption'].value
        const jobStatus = event.target['status'].value
        const temp = {
            id: 10,
            description: jobDescription,
            status: jobStatus
        }
        dispatch({ type: 'CREATE_JOB', payload: temp })

        setDescription('')
    }
    
    return (
        <>
            <div className="newjob-container">
                <div className="newjob-form-container">
                    <Form className="newjob-form" onSubmit={handleSubmit} >
                        {/* Job Type */}
                        <FormGroup row>
                            <Label className="newform-label" for="type">
                                Job Type
                            </Label>
                            <Input
                                id="newjob-type"
                                name="type"
                                type="select"
                            >
                                <option>
                                1
                                </option>
                                <option>
                                2
                                </option>
                                <option>
                                3
                                </option>
                                <option>
                                4
                                </option>
                                <option>
                                5
                                </option>
                            </Input>
                        </FormGroup>
                        
                        {/* Description */}
                        <FormGroup row>
                            <Label className="newform-label" for="desciption">
                                Description
                            </Label>
                            <Input
                                id="newjob-description"
                                name="desciption"
                                type="textarea"
                                required={true}
                                value={description}
                                onChange={handleChange}
                            />
                        </FormGroup>

                        {/* Status */}
                        <FormGroup row>
                            <Label className="newform-label" for="status">
                                Status
                            </Label>
                            <Input
                                id="newjob-status"
                                name="status"
                                type="text"
                                disabled="true"
                                value="ToDo"
                            />
                        </FormGroup>

                        {/* Account Name */}
                        <FormGroup row>
                            <Label className="newform-label" for="account">
                                Account Name 
                            </Label>
                            <Input
                                id="newjob-account"
                                name="account"
                                type="text"
                            />
                        </FormGroup>
                        
                        {/* Contact Name */}
                        <FormGroup row>
                            <Label className="newform-label" for="contact">
                                Contact Name 
                            </Label>
                            <Input
                                id="newjob-contact"
                                name="contact"
                                type="text"
                            />
                        </FormGroup>


                        {/* Contact Name */}
                        <FormGroup
                            check
                            row
                        >
                            <Input className="newjob-submit-btn" type="submit" value="Add new job">
                            </Input>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default NewJob;
