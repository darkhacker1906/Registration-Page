import * as Yup from "yup"
export const signUpSchema=Yup.object({
    firstName:Yup.string().min(2).max(20).required("Please enter your first name"),
    lastName:Yup.string().min(2).max(20).required("Please enter your last name"),
    email:Yup.string().email().required("Please enter your email"),
    password:Yup.string().min(6).required("Please enter your password"),
    confirm_password:Yup.string().required().oneOf([Yup.ref('password'),""],"Password must match"),
    age:Yup.string().required("Please select age"),
    gender:Yup.string().required("Please select gender"),
    comment:Yup.string().min(10).max(20).required("Please enter the comments"),
    mobileNo:Yup.string().min(10).required("Please enter the mobile number")
});