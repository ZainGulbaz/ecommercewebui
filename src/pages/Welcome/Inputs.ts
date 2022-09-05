interface Inputs {
  label: string;
  screens: string[];
  type: string;
  name: string;
  helperText: string;
  errorText: string;
}
const inputs: Inputs[] = [
  {
    label: "First Name",
    screens: ["Sign Up"],
    type: "text",
    name: "firstName",
    helperText: "",
    errorText: "",
  },
  {
    label: "Last Name",
    screens: ["Sign Up"],
    type: "text",
    name: "lastName",
    helperText: "",
    errorText: "",
  },
  {
    label: "Email",
    screens: ["Sign Up"],
    type: "email",
    name: "email",
    helperText: "",
    errorText: "",
  },
  {
    label: "Create Password",
    screens: ["Sign Up"],
    type: "password",
    name: "password",
    helperText: "Password must be 8-10 characters",
    errorText: "Invalid Password",
  },
  {
    label: "Confirm Password",
    screens: ["Sign Up"],
    type: "password",
    name: "confirmPassword",
    helperText: "",
    errorText: "",
  },

  {
    label: "Address",
    screens: ["Sign Up"],
    type: "text",
    name: "address",
    helperText: "",
    errorText: "",
  },
  {
    label: "Phone",
    screens: ["Sign Up"],
    type: "text",
    name: "phone",
    helperText: "",
    errorText: "",
  },
  {
    label: "Username",
    screens: ["Sign In"],
    type: "text",
    name: "username",
    helperText: "",
    errorText: "",
  },
  {
    label: "Password",
    screens: ["Sign In"],
    type: "password",
    name: "password",
    helperText: "",
    errorText: "",
  },
];
export default inputs;
