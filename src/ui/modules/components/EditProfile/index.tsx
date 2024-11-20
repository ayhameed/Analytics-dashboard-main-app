"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import {
  AppButton,
  FormikAppTextField,
  pxToRem,
  RowStack,
  StyledImage,
} from "@web-insight/component-library";
import * as Yup from "yup";
import { Form, Formik, FormikHelpers, useFormikContext } from "formik";
import { useRouter } from "next/navigation";
import { useUserApi } from "@/common";

import profileAvatar from "./components/assets/image/avatar.svg";
import React from "react";

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
  const { updateUserProfile } = useUserApi();
  const router = useRouter();

  const initialValues: FormContent = {
    email: "",
    lastName: "",
    firstName: "",
  };

  const onSubmit = async (values: FormContent, { setSubmitting }: FormikHelpers<FormContent>) => {
    try {
      setSubmitting(true);

      // Create FormData object for multipart/form-data submission
      const formData = new FormData();
      formData.append("email", values.email);
      formData.append("first_name", values.firstName);
      formData.append("last_name", values.lastName);

      const success = await updateUserProfile(formData);

      if (success) {
        // Optionally redirect or show success message
        router.push("/user");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleAvatarChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const formData = new FormData();
      formData.append("avatar", event.target.files[0]);

      await updateUserProfile(formData);
    }
  };

  return (
    <Box
      sx={{
        borderRadius: "20px",
        boxShadow: "0px 6px 15px 0px rgba(124, 124, 124, 0.05)",
        bgcolor: "#101114",
        padding: "40px 46px",
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

            <input
              type="file"
              id="avatar-upload"
              hidden
              accept="image/*"
              onChange={handleAvatarChange}
            />
            <Button onClick={() => document.getElementById("avatar-upload")?.click()}>
              Change Avatar
            </Button>
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
