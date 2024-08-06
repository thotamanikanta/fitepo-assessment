import React, { useState } from "react";
import { Typography, Link, Box, Grid, Button, Card } from "@mui/material";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router";
import * as yup from "yup";
import FormikTextField from "../components/FormikTextField";
import { Form, Formik } from "formik";

const validationSchema = yup.object({
  username: yup
    .string("Enter your username or email")
    .required("* Username or Email is required"),
  password: yup
    .string("Enter your password")
    .required("* Password is required"),
});

const SignIn = () => {
  const navigate = useNavigate();
  const [signinForm] = useState({ username: "", password: "" });

  const token = Cookies.get("loginToken");
  console.log(token);
  if (token !== undefined) {
    return <Navigate to={"/dashboard"} />;
  }
  return (
    <Box
      sx={{
        flex: 1,
        flexWrap: "wrap",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // p: theme => theme.spacing(4),
        // backgroundImage: 'url(https://c.animaapp.com/et313PlD/img/ant-design-pro-3-0.png)',
        // backgroundSize: "auto",
        p: 0,
      }}
    >
      <Card sx={{ maxWidth: "556px", width: "556px", borderRadius: "20px" }}>
        <Box sx={{ px: "117px", py: "39px" }}>
          <Box
            sx={{
              mb: "35px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant={"h1"} color={"primary.dark"}>
              Login to access
            </Typography>
          </Box>

          <Formik
            validateOnChange={true}
            initialValues={signinForm}
            validationSchema={validationSchema}
            onSubmit={(data, { setSubmitting }) => {
              Cookies.set("loginToken", "kjnsdjfbh");
              navigate("/dashboard", { replace: true });
            }}
          >
            {({ values }) => (
              <Form autoComplete="off" style={{ textAlign: "left" }}>
                <Box sx={{ mb: 3, mt: 1 }}>
                  <FormikTextField
                    placeholder={"Enter username or email id"}
                    name="username"
                    id="login-user"
                    autoFocus={true}
                    label="Username or Email"
                  />
                </Box>
                <Box sx={{ mb: 2, mt: 1 }}>
                  <FormikTextField
                    placeholder={"Enter password "}
                    name="password"
                    label="Password"
                    id="login-password"
                    autoComplete="new-password"
                    type="password"
                  />
                </Box>

                <Grid
                  container
                  direction={"column"}
                  rowGap={"40px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Grid item alignSelf={"flex-end"}>
                    <Typography textAlign={"right"} variant={"body1"}>
                      <Link underline="none" color={"primary.dark"}>
                        Forgot your password?
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      type="submit"
                      sx={{
                        mt: 2,
                        width: "182px",
                        p: "6px 16px",
                        height: "42px",
                      }}
                      variant="contained"
                      color="primary"
                      disabled={!values.username || !values.password}
                    >
                      Login
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      </Card>
    </Box>
  );
};

export default SignIn;
