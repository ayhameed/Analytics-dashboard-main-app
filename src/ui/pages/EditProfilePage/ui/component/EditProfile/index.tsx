"use client";
import { Box, Typography, Stack, Button } from "@mui/material";
import {
  pxToRem,
  RowStack,
  StyledImage,
  AppButton,
  FormikAppTextField,
} from "@web-insight/component-library";
import * as Yup from "yup";
import { Form, Formik, FormikHelpers, useFormikContext } from "formik";
import { useUserApi } from "@/common";
import { useRouter } from "next/navigation";

import profileAvatar from "./components/assets/image/avatar.svg";

const authSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email")
    .required("Email is required"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
});

interface FormContent {
  email: string;
  firstName: string;
  lastName: string;
}

export const SubmitButton = () => {
  const { isValid, dirty, isSubmitting } = useFormikContext();
  return (
    <AppButton type="submit" disabled={!isValid || !dirty || isSubmitting} isLoading={isSubmitting}>
      Continue
    </AppButton>
  );
};

export const EditProfile = () => {
  // const { checkEmail } = useUserApi();
  const router = useRouter();

  const handleCheckEmail = async (email: string) => {
    // return await checkEmail(email);
    return true;
  };

  const initialValues: FormContent = {
    email: "",
    lastName: "",
    firstName: "",
  };

  const onSubmit = async (values: FormContent, { setSubmitting }: FormikHelpers<FormContent>) => {
    setSubmitting(true);
    const result = await handleCheckEmail(values.email);

    // if (result) {
    //   router.push(`/login?email=${encodeURIComponent(values.email)}`);
    // } else {
    //   router.push("/sign-up?email=" + encodeURIComponent(values.email));
    // }

    setSubmitting(false);
  };

  return (
    <Box
      sx={{
        borderRadius: "20px",
        boxShadow: "0px 6px 15px 0px rgba(124, 124, 124, 0.05)",
        bgcolor: "#101114",
        position: "fixed",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 2000,
        padding: "40px 46px",
        width: "fit-content",
      }}
    >
      <Stack spacing="60px">
        <Box>
          <Typography
            sx={{
              color: "#F8F9FB",
              fontSize: pxToRem(16),
              fontWeight: 400,
              lineHeight: "24px",
            }}
          >
            Edit Profile
          </Typography>

          <Typography
            sx={{
              color: "#CBCFD6",
              fontSize: pxToRem(16),
              fontWeight: 400,
              lineHeight: "24px",
            }}
          >
            Editing your email address will require you verify again
          </Typography>
        </Box>

        <RowStack spacing="44px">
          <Box alignSelf="flex-start">
            <StyledImage
              src={profileAvatar}
              alt="profile_avatar"
              sx={{
                width: "106px",
                height: "106px",
              }}
            />

            <Button>Change Avatar</Button>
          </Box>

          <Box width={"100%"}>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={authSchema}>
              {() => (
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
                        placeholder={"yemi.fig@figma.com"}
                        sx={{}}
                      />
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
                        First Name
                      </Typography>

                      <FormikAppTextField
                        type="text"
                        name="firstName"
                        size="small"
                        variant="outlined"
                        placeholder={"Opeyemi"}
                        sx={{}}
                      />
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
                        Last Name
                      </Typography>

                      <FormikAppTextField
                        type="text"
                        name="lastName"
                        size="small"
                        variant="outlined"
                        placeholder={"Melusaabu"}
                        sx={{}}
                      />
                    </Box>
                    <SubmitButton />
                  </Stack>
                </Form>
              )}
            </Formik>
          </Box>
        </RowStack>
      </Stack>
    </Box>
  );
};
