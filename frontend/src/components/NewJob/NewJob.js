import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";
import './NewJob.css'

// core components

function NewJob() {
  return (
    <>
        <div className="newjob-container">
            <div className="newjob-form-container">
                <Form className="newjob-form">
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
                        <Button className="newjob-submit-btn">
                            Add new job
                        </Button>
                    </FormGroup>
                </Form>
            </div>
        </div>
    </>
  );
}

export default NewJob;
