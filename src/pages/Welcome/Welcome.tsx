import {
  Box,
  Text,
  Stack,
  Radio,
  RadioGroup,
  Input,
  FormControl,
  FormLabel,
  Button,
  Divider,
  Image,
  Avatar,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import or from "../../assets/or.png";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";
import linkedin from "../../assets/linkedin.png";
import getToast from "../../utils/Toast";
import { useToast } from "@chakra-ui/react";
import inputs from "./Inputs";
import { toastSuccess, toastError } from "./ToastDescription";
import Axios from "axios";
import { useCookies } from "react-cookie";

const Welcome = () => {
  const toast = useToast();
  const [screen, setScreen] = useState("Sign In");
  const [isPass, setIsPass] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [cookies, setCookie] = useCookies(["ecommerceui"]);

  const { REACT_APP_API_URL: apiUrl } = process.env;

  const validateField = (name: string, value: string): boolean => {
    if (name === "password" || value.length < 8 || value.length > 10) {
      setIsPass(true);
      setErrMsg("Invalid Password");
      return false;
    }

    return true;
  };

  const matchPass = (
    pass: string | undefined,
    confirmPass: string | undefined
  ): boolean => {
    if (pass !== confirmPass) {
      setIsPass(true);
      setErrMsg("Passwords Don't Match");
      return false;
    }
    return true;
  };
  const refreshError = () => {
    setIsPass(false);
    setErrMsg("");
  };
  const handleSubmit = async (event: any) => {
    try {
      event.preventDefault();
      const { target } = event;
      let postData: {
          email?: string;
          username?: string;
          password?: string;
          firstName?: string;
          lastName?: string;
          name?: { firstName?: string; lastName?: string };
          address?: string;
          phone?: string;
          confirmPassword?: string;
        } = {
          email: "",
          username: "",
          password: "",
          firstName: "",
          lastName: "",
          name: { firstName: "", lastName: "" },
          confirmPassword: "",
        },
        isAllow = true;
      Object.keys(target).map((input: any) => {
        let { name, value, type } = target[input];
        if (type === "password") isAllow = validateField(name, value);

        if (type === "text" || type === "email" || type === "password")
          postData = { ...postData, [name]: value };
      });
      //check whether the create password and confirm password are same or not
      isAllow = matchPass(postData.confirmPassword, postData.password);
      if (screen === "Sign Up" && isAllow) {
        refreshError();
        postData = {
          ...postData,
          username: postData.email,
          name: { firstName: postData.firstName, lastName: postData.lastName },
        };
        let { address } = postData;
        try {
          const response = await Axios.post(
            `${apiUrl}users`,
            JSON.stringify({
              ...postData,
              address: {
                address,
                city: "null",
                street: "null",
                number: 0,
                zipcode: "null",
                geolocation: {
                  lat: "null",
                  long: "null",
                },
              },
            }),
            {
              headers: {
                "Access-Control-Allow-Origin": "Access-Control-Allow-Origin",
                "Content-Type": "application/json",
              },
            }
          );
          if (response.data) {
            getToast(toast, toastSuccess["signUp"]);
            setScreen("Sign In");
          } else throw "No Response found";
        } catch (err) {
          getToast(toast, toastError["signUp"]);
        }
      }
      if (screen === "Sign In") {
        refreshError();
        let loginPostData: { username?: string; password?: string };
        loginPostData = {
          username: postData.username,
          password: postData.password,
        };
        try {
          const response = await Axios.post(
            `${apiUrl}auth/login`,
            JSON.stringify(loginPostData),
            {
              headers: {
                "Access-Control-Allow-Origin": "Access-Control-Allow-Origin",
                "Content-Type": "application/json",
              },
            }
          );
          if (response.data) {
            getToast(toast, toastSuccess["signIn"]);
            let minutes = 1440;
            let d = new Date();
            d.setTime(d.getTime() + minutes * 60 * 1000);
            setCookie("ecommerceui", response.data.token, {
              path: "/",
              expires: d,
            });
          } else throw "No Response found";
        } catch (err) {
          getToast(toast, toastError["signIn"]);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Box
        display="flex"
        flexDir={"column"}
        justifyContent="center"
        alignItems={"center"}
        py={4}
      >
        <Box
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems={"center"}
          width={["80vw", "40vw"]}
          gap={4}
        >
          <Text
            fontWeight={"bold"}
            fontSize={["xl", "3xl"]}
            casing={"uppercase"}
          >
            Welcome
          </Text>
          <Text
            fontWeight={"bold"}
            fontSize={["xl", "3xl"]}
            casing={"uppercase"}
          >
            Please {screen}
          </Text>
          <RadioGroup onChange={setScreen} value={screen}>
            <Stack direction="row">
              <Radio value="Sign In" colorScheme={"orange"}>
                Sign in
              </Radio>
              <Radio value="Sign Up" colorScheme={"orange"}>
                Sign up
              </Radio>
            </Stack>
          </RadioGroup>
          <form onSubmit={handleSubmit}>
            {inputs.map((input) => {
              let { screens, name, label, type } = input;
              let isInvalid = false;
              if (name === "password" && screens.includes("Sign Up"))
                isInvalid = isPass;
              if (screens.includes(screen)) {
                return (
                  <>
                    <FormControl
                      isRequired
                      width={["80vw", "40vw"]}
                      isInvalid={isInvalid}
                    >
                      <FormLabel>{label}</FormLabel>

                      <Input variant="filled" type={type} name={name} />

                      {input.helperText && !isInvalid && (
                        <FormHelperText marginBottom={2}>
                          {input.helperText}
                        </FormHelperText>
                      )}
                      {input.errorText && (
                        <FormErrorMessage>{errMsg}</FormErrorMessage>
                      )}
                    </FormControl>
                  </>
                );
              }
            })}

            <Button
              bgColor={"#F09522"}
              size="md"
              width={"100%"}
              mt={8}
              color="white"
              type="submit"
            >
              {screen}
            </Button>
          </form>
          <Box boxSize="lg" height="14px">
            <Image src={or} alt="error" />
          </Box>
          <Text color="black" fontWeight={"semibold"}>
            {screen} With
          </Text>
          <Stack direction={"row"}>
            <Avatar
              size={["sm", "md"]}
              name="Google"
              src={google}
              backgroundColor="white"
              cursor={"pointer"}
            />

            <Avatar
              name="Facebook"
              src={facebook}
              size={["sm", "md"]}
              cursor="pointer"
            />
            <Avatar
              name="Linkedin"
              src={linkedin}
              backgroundColor="white"
              size={["sm", "md"]}
              cursor={"pointer"}
            />
          </Stack>
          <Stack direction={"row"}>
            <Text fontSize={["xs", "md"]}>Privacy Policy and Cookies</Text>{" "}
            <Divider orientation="vertical" height="30px" />{" "}
            <Text fontSize={["xs", "md"]}>Terms of Sales and Us</Text>
          </Stack>
        </Box>
      </Box>
    </>
  );
};
export default Welcome;
