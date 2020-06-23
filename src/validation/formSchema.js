import * as Yup from "yup";

const formSchema = Yup.object().shape({
  email: Yup
    .string()
    .email("Must be a valid email address.")
    .required("Must include email address."),
  username: Yup
    .string()
    .min(3, "Usermame must be at least 3 characters long."),

  userType: Yup
    .string()
    .oneOf(['1', '2'], "Please select role"),
  password: Yup
    .string()
    .required("Password required"),
})

export default formSchema 