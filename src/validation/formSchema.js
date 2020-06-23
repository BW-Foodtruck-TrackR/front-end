import * as Yup from "yup";

const formSchema = Yup.object().shape({
  email: Yup
    .string()
    .email("Must be a valid email address.")
    .required("Must include email address."),
  username: Yup
    .string()
    .min(3, "Usermame must be at least 3 characters long."),

  userOrOperator: Yup
    .string()
    .oneOf(['1', '2'], "Please select role"),
  password: Yup
    .string()
    .min(6, "Password must contain 6 characters")
    .required("Password required"),
})

export default formSchema