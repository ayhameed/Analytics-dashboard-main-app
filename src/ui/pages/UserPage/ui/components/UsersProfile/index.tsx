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
      <RowStack
        sx={{
          justifyContent: "space-between",
          padding: "20px",
          backgroundColor: (theme) => theme.userPage.profile.background,
          borderRadius: "12px",
          marginBottom: "40px",
        }}
      >
        <RowStack spacing={"12px"} alignItems={"center"}>
          <StyledImage
            src={userInfo.imageUrl}
            alt="Profile Avatar"
            sx={{
              width: "54px",
              height: "54px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <Stack overflow={"hidden"}>
            <Typography
              sx={{
                fontSize: pxToRem(16),
                fontWeight: 700,
                lineHeight: "150%",
                color: (theme) => theme.userPage.profile.secondaryCl,
              }}
              title="Opeyemi Adeboye"
            >
              {userInfo.name}
            </Typography>
            <Typography
              sx={{
                fontSize: pxToRem(16),
                fontWeight: 400,
                lineHeight: "150%",
                color: (theme) => theme.userPage.profile.primaryCl,
              }}
            >
              {userInfo.email}
            </Typography>
          </Stack>
        </RowStack>

        <Stack spacing={"32px"}>
          <RowStack
            onClick={handleModalClick()}
            sx={{
              cursor: "pointer",
              alignItems: "center",
              justifyContent: "flex-end",
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
      </RowStack>

      <AppModal open={isModalOpen} setOpen={setIsModalOpen} label="edit-user-detail">
        <EditProfile />
      </AppModal>
    </>
  );
};
