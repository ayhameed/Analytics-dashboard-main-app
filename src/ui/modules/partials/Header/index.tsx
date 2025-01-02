"use client";

import React, { useEffect, useRef, useState } from "react";
import { AppButton, pxToRem, RowStack, StyledImage } from "@web-insight/component-library";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { getUserInfo, useApplicationTheme, useUserApi } from "@/common";
import { Navigator, SearchBar } from "@/ui/modules/partials/Header/ui/components";
import { useRouter } from "next/navigation";
import { StaticImageData } from "next/image";

// Import icons
import profileAvatar from "@/ui/modules/partials/Header/ui/assets/icon/Avatar.jpg";
import logOut from "../assets/icon/logout.svg";
import profileIcon from "@/ui/modules/partials/Header/ui/assets/icon/arrow-circle-down.svg";
import searchIcon from "./ui/assets/icon/search_icon.svg";
import searchIconDark from "./ui/assets/icon/search_icon_dark.svg";

// Interfaces
interface UserInfo {
  name: string;
  imageUrl: StaticImageData | string;
  email: string;
}

interface UseClickOutside {
  ref: React.RefObject<HTMLElement>;
  callback: () => void;
}

// Custom Hooks
const useClickOutside = ({ ref, callback }: UseClickOutside) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [ref, callback]);
};

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 900);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

// Components
const CoinGeckoWidget: React.FC = () => {
  const { isDarkMode } = useApplicationTheme();
  return (
    <Box sx={{ width: "100%", height: "40px", overflow: "hidden", position: "relative" }}>
      <gecko-coin-price-marquee-widget
        coin-ids=""
        initial-currency="usd"
        dark-mode={isDarkMode ? "true" : "false"}
      />
    </Box>
  );
};

const GetStartedButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <AppButton
    onClick={onClick}
    disableArrow
    sx={{
      height: "100%",
      width: "100%",
      maxWidth: "120px",
      padding: "4px 10px",
      borderRadius: "8px",
    }}
  >
    <Typography sx={{ fontSize: pxToRem(14), lineHeight: "21px" }}>Get Started</Typography>
  </AppButton>
);

const UserProfileSection: React.FC<{
  userInfo: UserInfo;
  displayLogout: boolean;
  onProfileClick: () => void;
  onProfileIconClick: (e: React.MouseEvent) => void;
  onLogoutClick: (e: React.MouseEvent) => void;
}> = ({ userInfo, displayLogout, onProfileClick, onProfileIconClick, onLogoutClick }) => {
  const logoutRef = useRef<HTMLDivElement>(null);

  useClickOutside({
    ref: logoutRef,
    callback: () => displayLogout && onProfileIconClick(new MouseEvent("click") as any),
  });

  return (
    <RowStack
      sx={{
        display: { xs: "none", sm: "flex" },
        "@media (max-width: 599px)": { display: "none" },
        alignItems: "center",
        gap: "15px",
        flexShrink: 0,
        position: "relative",
      }}
    >
      <StyledImage
        src={userInfo.imageUrl}
        alt="Profile Avatar"
        sx={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          objectFit: "cover",
          cursor: "pointer",
        }}
        onClick={onProfileClick}
      />

      <UserInfo userInfo={userInfo} onProfileClick={onProfileClick} />
      <ProfileDropdown
        displayLogout={displayLogout}
        onProfileIconClick={onProfileIconClick}
        onLogoutClick={onLogoutClick}
        ref={logoutRef}
      />
    </RowStack>
  );
};

const UserInfo: React.FC<{
  userInfo: UserInfo;
  onProfileClick: () => void;
}> = ({ userInfo, onProfileClick }) => (
  <Box sx={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
    <Typography
      sx={{
        fontSize: pxToRem(16),
        fontWeight: 700,
        lineHeight: "150%",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        cursor: "pointer",
      }}
      onClick={onProfileClick}
    >
      {userInfo.name}
    </Typography>
    <Typography
      sx={{
        fontSize: pxToRem(16),
        fontWeight: 400,
        lineHeight: "150%",
        color: "#5E646E",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        cursor: "pointer",
      }}
      onClick={onProfileClick}
    >
      {userInfo.email}
    </Typography>
  </Box>
);

const ProfileDropdown = React.forwardRef<
  HTMLDivElement,
  {
    displayLogout: boolean;
    onProfileIconClick: (e: React.MouseEvent) => void;
    onLogoutClick: (e: React.MouseEvent) => void;
  }
>((props, ref) => (
  <>
    <StyledImage
      src={profileIcon}
      alt="Profile Dropdown"
      sx={{
        width: "24px",
        height: "24px",
        marginLeft: "24px",
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
          width: "252px",
          position: "absolute",
          top: "70px",
          right: { sm: "10px", md: 0 },
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

ProfileDropdown.displayName = "ProfileDropdown";

// Main Header Component
export const Header: React.FC = () => {
  const { isDarkMode } = useApplicationTheme();
  const router = useRouter();
  const { logout } = useUserApi();
  const [displayLogout, setDisplayLogout] = useState(false);
  const [displaySearch, setDisplaySearch] = useState(false);
  const isMobile = useIsMobile();
  const searchRef = useRef<HTMLDivElement>(null);

  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "User",
    email: "user@user.com",
    imageUrl: profileAvatar,
  });

  useEffect(() => {
    const storedUserInfo = getUserInfo();
    setUserInfo({
      name: storedUserInfo.name || "User",
      email: storedUserInfo.email || "user@user.com",
      imageUrl: storedUserInfo.imageUrl || profileAvatar,
    });
  }, []);

  useClickOutside({
    ref: searchRef,
    callback: () => displaySearch && setDisplaySearch(false),
  });

  const handleLogoutClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const success = await logout();
    if (success) router.push("/check-email");
  };

  return (
    <AppBar
      elevation={0}
      position="static"
      sx={{
        padding: { xs: "16px 15px 15px 5px", sm: "16px 39px 15px 5px" },
        background: (theme) => theme.navBar.background,
        overflow: "visible",
      }}
    >
      <Toolbar disableGutters>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              maxWidth: { xs: "50%", sm: "70%" },
              minWidth: { xs: "150px", sm: "200px" },
              overflow: "hidden",
            }}
          >
            <CoinGeckoWidget />
          </Box>

          <StyledImage
            src={isDarkMode ? searchIconDark : searchIcon}
            alt="Search Icon"
            onClick={() => setDisplaySearch(!displaySearch)}
            sx={{
              width: "30px",
              height: "30px",
              cursor: "pointer",
              margin: "0 -20px",
              display: { xs: "block", md: "none" },
            }}
          />

          <RowStack
            sx={{
              display: { xs: "flex", md: "none" },
              height: "40px",
              alignItems: "center",
              gap: "10px",
              flexShrink: 0,
            }}
          >
            {userInfo.name === "User" ? (
              <GetStartedButton onClick={() => router.push("/check-email")} />
            ) : (
              <StyledImage
                src={userInfo.imageUrl}
                alt="Profile Avatar"
                sx={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() => router.push("/user")}
              />
            )}
            <Navigator />
          </RowStack>

          {(displaySearch && isMobile) || !isMobile ? (
            <Box ref={searchRef} sx={{ display: "block", width: "100%" }}>
              <SearchBar />
            </Box>
          ) : null}

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: "24px",
              flexShrink: 0,
              maxWidth: "500px",
            }}
          >
            {userInfo.name === "User" ? (
              <GetStartedButton onClick={() => router.push("/check-email")} />
            ) : (
              <UserProfileSection
                userInfo={userInfo}
                displayLogout={displayLogout}
                onProfileClick={() => router.push("/user")}
                onProfileIconClick={(e) => {
                  e.stopPropagation();
                  setDisplayLogout(!displayLogout);
                }}
                onLogoutClick={handleLogoutClick}
              />
            )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
