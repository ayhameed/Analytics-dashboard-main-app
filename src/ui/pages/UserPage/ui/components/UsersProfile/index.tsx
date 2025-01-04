"use client";

import { Box, Stack, Typography } from "@mui/material";
import { pxToRem, RowStack, StyledImage } from "@web-insight/component-library";
import profileAvatar from "../assets/icons/profile_avatar.svg";
import editIcon from "../assets/icons/icon_edit.svg";
import React, { useEffect, useState } from "react";
import { AppModal, EditProfile } from "@/ui/modules/components";
import { StaticImageData } from "next/image";
import { getUserInfo } from "@/common";

interface UserInfo {
  name: string;
  imageUrl: StaticImageData | string;
  email: string;
}

export const UserProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "User",
    email: "user@user.com",
    imageUrl: profileAvatar,
  });

  const handleModalClick = () => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  useEffect(() => {
    const storedUserInfo = getUserInfo();
    setUserInfo({
      name: storedUserInfo.name || "User",
      email: storedUserInfo.email || "user@user.com",
      imageUrl: storedUserInfo.imageUrl || profileAvatar,
    });
  }, []);

  return (
    <>
      <Box
        sx={{
          position: {xs: "relative", sm: "static"},
          display: "flex",
          flexDirection: {xs: "column", sm: "row"},
          justifyContent: "space-between",
          padding: "20px",
          backgroundColor: (theme) => theme.userPage.profile.background,
          borderRadius: "12px",
          margin: {xs: "20px", sm: "0 0 40px 0"},
        }}
      >
        <RowStack
          spacing={"12px"}
          alignItems={"flex-start"} // Changed from center to flex-start
          sx={{
            mb:{xs: "20px", sm: 0},
            flex: "1", // Added flex: 1 to allow content to take available space
            minWidth: 0, // Added to ensure flex item can shrink below its minimum content size
          }}
        >
          <StyledImage
            src={userInfo.imageUrl}
            alt="Profile Avatar"
            sx={{
              width: "54px",
              height: "54px",
              borderRadius: "50%",
              objectFit: "cover",
              flexShrink: 0, // Prevent avatar from shrinking
            }}
          />
          <Stack
            overflow={"hidden"}
            sx={{
              minWidth: 0, // Enable text truncation in child elements
              flex: 1, // Take remaining space
            }}
          >
            <Typography
              sx={{
                fontSize: pxToRem(16),
                fontWeight: 700,
                lineHeight: "150%",
                color: (theme) => theme.userPage.profile.secondaryCl,
                wordBreak: "break-word", // Enable word breaking
              }}
              title={userInfo.name}
            >
              {userInfo.name}
            </Typography>
            <Typography
              sx={{
                fontSize: pxToRem(16),
                fontWeight: 400,
                lineHeight: "150%",
                color: (theme) => theme.userPage.profile.primaryCl,
                wordBreak: "break-word", // Enable word breaking
                overflowWrap: "break-word", // Handle long words
                whiteSpace: "normal", // Allow text to wrap
              }}
            >
              {userInfo.email}
            </Typography>
          </Stack>
        </RowStack>

        <Stack sx={{gap: {xs: "10px", sm: "20px", md: "32px"}}}>
          <RowStack
            onClick={handleModalClick()}
            sx={{
              cursor: "pointer",
              alignItems: "center",
              justifyContent: {xs: "auto", sm:"flex-end"},
              position: {xs: "absolute", sm: "static"},
              right: {xs: "20px", sm: "auto"},
              top: {xs: "20px", sm: "auto"},
            }}
          >
            <StyledImage
              src={editIcon}
              alt="Edit Icon"
              sx={{
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                objectFit: "cover",
                marginRight: "5px",
              }}
            />

            <Typography
              sx={{
                fontSize: pxToRem(16),
                fontWeight: 400,
                lineHeight: "150%",
                color: "#AC7DEA",
                textTransform: "none",
                cursor: "pointer"
              }}
            >
              Edit Profile
            </Typography>
          </RowStack>

          <RowStack spacing={"10px"}>
            <Typography
              sx={{
                fontSize: pxToRem(16),
                fontWeight: 400,
                lineHeight: "150%",
                color: (theme) => theme.userPage.profile.dateCl,
              }}
            >
              Joined
            </Typography>

            <Box
              sx={{
                height: "10px",
                width: "10px",
                backgroundColor: "#D9D9D9",
                borderRadius: "50%",
              }}
            />

            <Typography
              sx={{
                fontSize: pxToRem(16),
                fontWeight: 400,
                lineHeight: "150%",
                color: (theme) => theme.userPage.profile.dateCl,
              }}
            >
              January 2023
            </Typography>
          </RowStack>
        </Stack>
      </Box>

      <AppModal open={isModalOpen} setOpen={setIsModalOpen} label="edit-user-detail">
        <EditProfile />
      </AppModal>
    </>
  );
};