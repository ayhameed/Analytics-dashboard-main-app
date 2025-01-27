"use client";
import React, { useRef } from "react";
import { useClickOutside, UserInfo } from "@/common";
import { RowStack, StyledImage } from "@web-insight/component-library";
import { ProfileDropdown } from "../ProfileDropDown";
import { UserDetails } from "../UserDetails";

export const UserProfileSection: React.FC<{
  userData: UserInfo;
  displayLogout: boolean;
  onProfileClick: () => void;
  onProfileIconClick: (e: React.MouseEvent) => void;
  onLogoutClick: (e: React.MouseEvent) => void;
  isMobileView?: boolean;
}> = ({
  userData,
  displayLogout,
  onProfileClick,
  onProfileIconClick,
  onLogoutClick,
  isMobileView,
}) => {
  const logoutRef = useRef<HTMLDivElement>(null);

  useClickOutside({
    ref: logoutRef,
    callback: () => displayLogout && onProfileIconClick(new MouseEvent("click") as any),
  });

  return (
    <RowStack
      sx={{
        display: "flex",
        alignItems: "center",
        gap: isMobileView ? "10px" : "15px",
        flexShrink: 0,
        position: "relative",
      }}
    >
      <StyledImage
        src={userData.imageUrl}
        alt="Profile Avatar"
        sx={{
          width: isMobileView ? "30px" : "48px",
          height: isMobileView ? "30px" : "48px",
          borderRadius: "50%",
          objectFit: "cover",
          cursor: "pointer",
        }}
        onClick={onProfileClick}
      />

      {!isMobileView && <UserDetails userInfo={userData} onProfileClick={onProfileClick} />}
      <ProfileDropdown
        displayLogout={displayLogout}
        onProfileIconClick={onProfileIconClick}
        onLogoutClick={onLogoutClick}
        ref={logoutRef}
        isMobileView={isMobileView}
      />
    </RowStack>
  );
};
