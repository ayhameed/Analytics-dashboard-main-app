"use client";
import React from "react";
import { pxToRem, StyledImage } from "@web-insight/component-library";
import profileIcon from "@/ui/modules/partials/Header/ui/assets/icon/arrow-circle-down.svg";
import { Box, Typography } from "@mui/material";
import logOut from "@/ui/modules/partials/assets/icon/logout.svg";

// eslint-disable-next-line react/display-name
export const ProfileDropdown = React.forwardRef<
  HTMLDivElement,
  {
    displayLogout: boolean;
    onProfileIconClick: (e: React.MouseEvent) => void;
    onLogoutClick: (e: React.MouseEvent) => void;
    isMobileView?: boolean;
  }
>((props, ref) => (
  <>
    <StyledImage
      src={profileIcon}
      alt="Profile Dropdown"
      sx={{
        width: "24px",
        height: "24px",
        marginLeft: props.isMobileView ? "0" : "24px",
        flexShrink: 0,
        cursor: "pointer",
        transform: props.displayLogout ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.3s ease",
      }}
      onClick={props.onProfileIconClick}
    />
    {props.displayLogout && (
      <Box
        ref={ref}
        onClick={props.onLogoutClick}
        sx={{
          display: "flex",
          padding: "15px 0 15px 10px",
          alignItems: "flex-start",
          borderRadius: "9px",
          backgroundColor: (theme) => theme.navBar.logOut.background,
          boxShadow: "0px 4px 27.1px -6px rgba(92, 92, 92, 0.25)",
          gap: "8px",
          width: props.isMobileView ? "200px" : "252px",
          position: "absolute",
          top: props.isMobileView ? "40px" : "70px",
          right: { xs: "0", sm: "10px", md: 0 },
          marginTop: "10px",
          cursor: "pointer",
          transition: "all 0.3s ease",
          transform: "scaleY(1)",
          transformOrigin: "top",
          zIndex: 2000,
        }}
      >
        <StyledImage
          src={logOut}
          alt="logOutIcon"
          sx={{
            height: "24px",
            width: "24px",
            display: "block",
          }}
        />
        <Typography
          sx={{
            fontSize: pxToRem(16),
            fontWeight: 400,
            lineHeight: "150%",
            color: (theme) => theme.navBar.logOut.color,
          }}
        >
          Log Out
        </Typography>
      </Box>
    )}
  </>
));
