"use client";
import { Box, Typography, Stack, Button } from "@mui/material";
import { RowStack, StyledImage, pxToRem } from "@web-insight/component-library";
import profileAvatar from "../assets/icons/profile_avatar.svg";
import editIcon from "../assets/icons/icon_edit.svg";
import { useRouter } from "next/navigation";

export const UserProfile = () => {
  const router = useRouter();

  return (
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
          src={profileAvatar}
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
            Opeyemi Adeboye
          </Typography>
          <Typography
            sx={{
              fontSize: pxToRem(16),
              fontWeight: 400,
              lineHeight: "150%",
              color: (theme) => theme.userPage.profile.primaryCl,
            }}
          >
            Yemi@fig.com
          </Typography>
        </Stack>
      </RowStack>

      <Stack spacing={"32px"}>
        <Button
          onClick={() => router.push("/users/edit-profile")}
          sx={{
            textTransform: "none",
            display: "flex",
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
        </Button>

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
  );
};
