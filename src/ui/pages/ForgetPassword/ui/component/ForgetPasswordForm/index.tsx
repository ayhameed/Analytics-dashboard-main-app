"use client";

import yellowPadlock from '../../assets/icons/yellow_padlock.svg'
import { Box, Typography,Stack} from "@mui/material";
import * as Yup from "yup";
import {
  AppButton,
  FormikAppTextField,
  pxToRem,
  RowStack,
  StyledImage
} from "@web-insight/component-library";
import { Form, Formik, FormikHelpers, useFormikContext } from "formik";
import { useUserApi } from "@/common";
import { useRouter } from "next/navigation";

const authSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email")
    .required("Email is required"),
});

interface LoginFormValues {
  email: string;
}

export const SubmitButton = () => {
  const { isValid, dirty, isSubmitting } = useFormikContext();
  return (
    <AppButton type="submit" disabled={!isValid || !dirty || isSubmitting} isLoading={isSubmitting}>
      Continue
    </AppButton>
  );
};

export const ForgetPasswordForm = () => {
  const { login } = useUserApi();

  const router = useRouter();

  const initialValues: LoginFormValues = {
    email: "",
  };

  const onSubmit = async (
    // values: LoginFormValues,
    // { setSubmitting }: FormikHelpers<LoginFormValues>,
  ) => {
    // setSubmitting(true);
    // const result = await login(values.email, values.password);

    // if (result) {
    //   router.push("/");
    // } else {
    //   setSubmitting(false);
    // }
  };

  return (
    <Stack
      spacing={"29px"}
      sx={{
        p: "20px",
        alignItems: "flex-start",
        background: "#F7F7F7",
        minHeight: { xs: "401px", md: "501px" },
        width: { xs: "100%", md: "80%", lg: "50%" },
        borderRadius: "20px",
      }}
    >
        <Box>
            <RowStack sx={{}}>
                <Typography
                    sx={{
                    color: "#101928",
                    fontSize: pxToRem(24),
                    fontWeight: 500,
                    lineHeight: "150%",
                    }}
                >
                Forget Password?
                </Typography>
                <StyledImage src={yellowPadlock} alt="" 
                    sx = {{
                        width:"27.714px",
                        height:"40.373px",
                    }}
                />
            </RowStack >
                
            <Typography
                sx={{
                    fontSize: pxToRem(13),
                    fontWeight: 400,
                    lineHeight: "150%"
                }}
            >
                It is alright, kindly input your email below to start 
                your password recovery process
            </Typography>
        </Box>

        <Box width={"100%"}>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={authSchema}>
            <Form>
                <Stack spacing={"20px"}>
                <Box>
                    <Typography
                    sx={{
                        color: "#101928",
                        fontSize: pxToRem(16),
                        fontWeight: 500,
                        lineHeight: "150%",
                        mb: "8px",
                    }}
                    >
                        Email Address
                    </Typography>

                    <FormikAppTextField
                    type="email"
                    name="email"
                    size="small"
                    variant="outlined"
                    placeholder={"Input your email address"}
                    sx={{}}
                    />

                    <Typography
                    sx={{
                        color: "#7A7A7A",
                        fontSize: pxToRem(14),
                        fontWeight: 400,
                        lineHeight: "150%",
                        mt: "8px",
                    }}
                    >
                        Example: yemi.fig@gmail.com
                    </Typography>
                </Box>
                
                <SubmitButton />
                </Stack>
            </Form>
            </Formik>
        </Box>
    </Stack>
  );
};

