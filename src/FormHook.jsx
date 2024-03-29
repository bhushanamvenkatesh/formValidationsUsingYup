import React from "react";
import { useFormik } from 'formik'
import * as Yup from 'yup'

let LoginSchema = Yup.object({
    fname: Yup.string().min(2, 'Too Short').max(15, 'Too long').required('Required'),
    lname: Yup.string().min(1, 'Too Short').max(15, 'Too long').required('Required'),
    age: Yup.string().min(2, 'Too Short').max(15, 'Too long').required('Required'),
    cnum: Yup.string().length(10, 'should be 10 numbers').required('Required'),
    password:Yup.string().matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    "Password must contain, at least 8 characters, one uppercase, one number, one special case character"
    ).required('Required'),
    confirmpassword:Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required')

})


function FormHook() {
    let formik = useFormik({
        initialValues: {
            'fname': "",
            'lname': '',
            'age': '',
            'cnum': ""
        },
        validationSchema: LoginSchema,
        onSubmit: (fd) => console.log(fd)

    })

    return <div className="bg-container">
        <div className="container">
            <h1 className="m-3">Form validations using useFormik hook</h1>
            <form onSubmit={formik.handleSubmit} className="p-4">
                <label>Enter your FirstName:</label> <br />
                <input type="text" name='fname' onChange={formik.handleChange} onBlur={formik.handleBlur} /> <br />
                {formik.errors.fname && formik.touched.fname && <p className='err-msg-color'>{`*${formik.errors.fname}`}</p>}
                <label>Enter your lastName:</label> <br />
                <input type="text" name='lname' onChange={formik.handleChange} onBlur={formik.handleBlur} /> <br />
                {formik.errors.lname && formik.touched.lname && <p className='err-msg-color'>{`*${formik.errors.lname}`}</p>}
                <label>Enter your age:</label> <br />
                <input type="text" name='age' onChange={formik.handleChange} onBlur={formik.handleBlur} /> <br />
                {formik.errors.age && formik.touched.age && <p className='err-msg-color'>{`*${formik.errors.age}`}</p>}

                <label>Enter your contact:</label> <br />
                <input type="text" name='cnum' onChange={formik.handleChange} onBlur={formik.handleBlur} /> <br />
                {formik.errors.cnum && formik.touched.cnum && <p className='err-msg-color'>{`*${formik.errors.cnum}`}</p>}
                    
                <input type="text" placeholder="password" name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.password && formik.touched.password && <p className='err-msg-color'>{<ul>{formik.errors.password.split(",").map((e)=><li>{e}</li>)}</ul>}</p>}
                    <br />
                <input type="text" placeholder="confirm password" name='confirmpassword' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.confirmpassword && formik.touched.confirmpassword && <p className='err-msg-color'>{formik.errors.confirmpassword}</p>}

                <br />
                <div className="text-center m-4">
                    <button className="btn btn-primary" type="submit">submit</button>
                </div>

            </form>





        </div>
    </div>
}

export default FormHook
