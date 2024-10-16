"use client";

import yellowPadlock from "../../assets/icons/yellow_padlock.svg";
import { Box, Stack, Typography } from "@mui/material";
import * as Yup from "yup";
import {
  AppButton,
  FormikAppTextField,
  pxToRem,
  RowStack,
  StyledImage,
} from "@web-insight/component-library";
import { Form, Formik, FormikHelpers, useFormikContext } from "formik";
import { useUserApi } from "@/common";
import { useRouter, useSearchParams } from "next/navigation";

const authSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email")
    .required("Email is required"),
});

interface LoginFormValues {
  email: string;
}

export const SubmitButton = () => {
  const { isValid, isSubmitting } = useFormikContext();
  return (
    <AppButton type="submit" disabled={!isValid || isSubmitting} isLoading={isSubmitting}>
      Continue
    </AppButton>
  );
};

export const ForgetPasswordForm = () => {
  const { forgotPassword } = useUserApi();

  const router = useRouter();
  const searchParams = useSearchParams();
  const initialEmail = searchParams.get("email") || "";

  const initialValues: LoginFormValues = {
    email: initialEmail,
  };

  const onSubmit = async (
    values: LoginFormValues,
    { setSubmitting }: FormikHelpers<LoginFormValues>,
  ) => {
    setSubmitting(true);
    const result = await forgotPassword(values.email);

    if (result) {
      router.push(`/email-success?email=${encodeURIComponent(values.email)}`);
    }

    setSubmitting(false);
  };

  return (
    <Stack
      spacing={"29px"}
      sx={{
        p: "20px",
        alignItems: "flex-start",
        background: (theme) => theme.authPage.authLeft.background,
        minHeight: { xs: "401px", lg: "501px" },
        width: { xs: "100%", md: "80%", lg: "50%" },
        borderRadius: "20px",
      }}
    >
      <Box>
        <RowStack spacing={1} marginBottom={1}>
          <Typography
            sx={{
              color: (theme) => theme.authPage.authLeft.header,
              fontSize: pxToRem(24),
              fontWeight: 500,
              lineHeight: "150%",
            }}
          >
            Forget Password?
          </Typography>

          <StyledImage
            src={yellowPadlock}
            alt=""
            sx={{
              width: "27.714px",
              height: "40.373px",
            }}
          />
        </RowStack>

        <Typography
          sx={{
            fontSize: pxToRem(13),
            fontWeight: 400,
            lineHeight: "150%",
          }}
        >
          It is alright, kindly input your email below to start your password recovery process
        </Typography>
      </Box>

      <Box width={"100%"}>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={authSchema}>
          <Form>
            <Stack spacing={"20px"}>
              <Box>
                <Typography
                  sx={{
                    // @ts-ignore
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
                  sx={{}}
                />

                <Typography
                  sx={{
                    color: (theme) => theme.authPage.authLeft.placeholder,
                    fontSize: pxToRem(14),
                    fontWeight: 400,
                    lineHeight: "150%",
                    my: "8px",
                    mb: "16px",
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
