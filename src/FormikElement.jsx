import React from "react";
import { Formik } from 'formik'
import * as Yup from 'yup'

let LoginSchema = Yup.object({
    fname: Yup.string().min(2, 'Too Short').max(15, 'Too long').required('Required'),
    lname: Yup.string().min(1, 'Too Short').max(15, 'Too long').required('Required'),
    age: Yup.string().min(2, 'Too Short').max(15, 'Too long').required('Required'),
    cnum: Yup.string().length(10, 'should be 10 numbers').required('Required')

})


function FormikElement() {

    return <div className="bg-container">
        <div className="container">
            <h1 className="m-3">Form validation using Formik element</h1>
            <Formik
                initialValues={{
                    'fname': "",
                    'lname': '',
                    'age': '',
                    'cnum': ""
                }}
                validationSchema={LoginSchema}
                onSubmit={(fd) => console.log(fd)}
            >
                {
                    (userForm) => {
                        console.log(userForm)
                        return <form onSubmit={userForm.handleSubmit} className="p-4">
                            <label>Enter your FirstName:</label> <br />
                            
                            <input type="text" {...userForm.getFieldProps('fname')} /> <br />

                            {userForm.errors.fname && userForm.touched.fname && <p className='err-msg-color'>{`*${userForm.errors.fname}`}</p>}
                            <label>Enter your lastName:</label> <br />
                            <input type="text" {...userForm.getFieldProps('lname')} /> <br />
                            {userForm.errors.lname && userForm.touched.lname && <p className='err-msg-color'>{`*${userForm.errors.lname}`}</p>}
                            <label>Enter your age:</label> <br />
                            <input type="text" {...userForm.getFieldProps('age')} /> <br />
                            {userForm.errors.age && userForm.touched.age && <p className='err-msg-color'>{`*${userForm.errors.age}`}</p>}

                            <label>Enter your contact:</label> <br />
                            <input type="text" {...userForm.getFieldProps('cnum')} /> <br />
                            {userForm.errors.cnum && userForm.touched.cnum && <p className='err-msg-color'>{`*${userForm.errors.cnum}`}</p>}
                            <div className="text-center m-4">
                                <button className="btn btn-primary" type="submit">submit</button>
                            </div>
                        </form>
                    }
                }

            </Formik>

        </div>
    </div>
}

export default FormikElement
