import * as Yup from "yup";


export const signUpSchema = Yup.object({
    firstName: Yup.string().min(2).max(25).required("Please enter your Firstname"),
    lastName: Yup.string().min(2).max(25).required("Please enter your Lastname"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter your password"),
    confirmPassword: Yup.string().required()
        .oneOf([Yup.ref('password'), null], "Password must match ")

})