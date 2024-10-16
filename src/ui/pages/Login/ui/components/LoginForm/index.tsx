"use client";

import { Stack } from "@mui/system";
import { Box, Typography } from "@mui/material";
import * as Yup from "yup";
import {
  AppButton,
  FormikAppPasswordField,
  FormikAppTextField,
  pxToRem,
  StyledLink,
} from "@web-insight/component-library";
import { Form, Formik, FormikHelpers, useFormikContext } from "formik";
import { useUserApi } from "@/common";
import { useRouter, useSearchParams } from "next/navigation";

const authSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

interface LoginFormValues {
  email: string;
  password: string;
}

export const SubmitButton = () => {
  const { isValid, dirty, isSubmitting } = useFormikContext<LoginFormValues>();
  return (
    <AppButton type="submit" disabled={!isValid || !dirty || isSubmitting} isLoading={isSubmitting}>
      Continue
    </AppButton>
  );
};

export const ForgotPasswordLink = () => {
  const { values } = useFormikContext<LoginFormValues>(); // Access Formik values
  return (
    <StyledLink href={`/forget-password?email=${encodeURIComponent(values.email)}`}>
      <Typography
        sx={{
          // @ts-ignore
          color: (theme) => theme.authPage.authLeft.placeholder,
          fontSize: pxToRem(14),
          fontWeight: 400,
          lineHeight: "150%",
          textDecoration: "underline",
          mt: "8px",
        }}
      >
        Forgot Password?
      </Typography>
    </StyledLink>
  );
};

export const LoginForm = () => {
  const { login } = useUserApi();
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialEmail = searchParams.get("email") || "";

  const initialValues: LoginFormValues = {
    email: initialEmail,
    password: "",
  };

  const onSubmit = async (
    values: LoginFormValues,
    { setSubmitting }: FormikHelpers<LoginFormValues>,
  ) => {
    setSubmitting(true);
    const result = await login(values.email, values.password);

    if (result) {
      router.push("/");
    } else {
      setSubmitting(false);
    }
  };

  return (
    <Stack
      spacing={"29px"}
      sx={{
        p: "20px",
        alignItems: "flex-start",
        // @ts-ignore
        background: (theme) => theme.authPage.authLeft.background,
        minHeight: { xs: "401px", md: "501px" },
        width: { xs: "100%", md: "80%", lg: "50%" },
        borderRadius: "20px",
      }}
    >
      <Typography
        sx={{
          color: (theme) => theme.authPage.authLeft.header,
          fontSize: pxToRem(24),
          fontWeight: 500,
          lineHeight: "150%",
        }}
      >
        Let’s get you started
      </Typography>

      <Box width={"100%"}>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={authSchema}>
          <Form>
            <Stack spacing={"20px"}>
              <Box>
                <Typography
                  sx={{
                    color: (theme) => theme.authPage.authLeft.input,
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
                />

                <Typography
                  sx={{
                    color: (theme) => theme.authPage.authLeft.placeholder,
                    fontSize: pxToRem(14),
                    fontWeight: 400,
                    lineHeight: "150%",
                    mt: "8px",
                  }}
                >
                  Example: yemi.fig@gmail.com
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    color: (theme) => theme.authPage.authLeft.input,
                    fontSize: pxToRem(16),
                    fontWeight: 500,
                    lineHeight: "150%",
                    mb: "8px",
                  }}
                >
                  Input Password
                </Typography>

                <FormikAppPasswordField
                  name={"password"}
                  size={"small"}
                  variant={"outlined"}
                  placeholder={"Enter your password"}
                />

                <ForgotPasswordLink />
              </Box>

              <SubmitButton />
            </Stack>
          </Form>
        </Formik>
      </Box>
    </Stack>
  );
};
