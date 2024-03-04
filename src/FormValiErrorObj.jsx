import { useFormik } from "formik";
import React from "react";

function checklform(values){
    // console.log('checkform',values)
    let error={}
    if(!values.fname){
        error.fname='fname is mandatory'
    }
    if(!values.lname){
        error.lname='lname is mandatory'
    }
    if(!values.age){
        error.age='required'
    }
    return error
}

function FormValidation() {
    let formdata = useFormik({
        initialValues: {
            fname: "",
            lname: "",
            age: "",
        },
        validate:checklform,
        
        onSubmit: (values) => console.log(values)



    })
    return <div className="">
        {console.log(formdata)}
        <form onSubmit={formdata.handleSubmit} className="border border-danger d-flex flex-column align-items-center">
            <h1>Form handling using Error object</h1>
            <div>
                <input type="text" placeholder="Name" {...formdata.getFieldProps('fname')} className="m-1" /><br />
                {formdata.errors.fname&& <p>Required</p>}
                <input type="text" placeholder="lname" {...formdata.getFieldProps('lname')} className="m-1" /> <br />
                <input type="text" placeholder="age" {...formdata.getFieldProps('age')} className="m-1" /> <br />
            </div>

            <div className="text-center">
                <button className="btn btn-primary m-3" type="submit">submit</button>
            </div>
        </form>
    </div>

}

export default FormValidation