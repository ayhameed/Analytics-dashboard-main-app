"use client";

import { Stack } from "@mui/system";
import { Box, Typography } from "@mui/material";
import * as Yup from "yup";
import { AppButton, FormikAppTextField, pxToRem } from "@web-insight/component-library";
import { Form, Formik, FormikHelpers, useFormikContext } from "formik";
import { useUserApi } from "@/common";
import { useRouter } from "next/navigation";

const authSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email")
    .required("Email is required"),
});

interface FormValues {
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

export const AuthForm = () => {
  const { checkEmail } = useUserApi();
  const router = useRouter();

  const handleCheckEmail = async (email: string) => {
    return await checkEmail(email);
  };

  const initialValues: FormValues = {
    email: "",
  };

  const onSubmit = async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    setSubmitting(true);
    const result = await handleCheckEmail(values.email);

    if (result) {
      router.push(`/login?email=${encodeURIComponent(values.email)}`);
    } else {
      router.push("/sign-up?email=" + encodeURIComponent(values.email));
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
        minHeight: { xs: "401px", md: "450px" },
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
            <Stack spacing={"40px"}>
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
                  sx={{}}
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

              <SubmitButton />
            </Stack>
          </Form>
        </Formik>
      </Box>
    </Stack>
  );
};
