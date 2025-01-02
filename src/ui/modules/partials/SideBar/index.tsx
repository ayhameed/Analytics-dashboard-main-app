"use client";

import { Box, Stack, Typography } from "@mui/material";
import { pxToRem, RowStack, StyledImage } from "@web-insight/component-library";
import { useApplicationTheme } from "@/common";
import { ApplicationLogo } from "@/ui/modules/components";
import { usePathname, useRouter } from "next/navigation";

// Import all icons
import homeIcon from "../assets/icon/Component 6.svg";
import chartIcon from "../assets/icon/chart-histogram.svg";
import docPlugIcon from "../assets/icon/plug-socket.svg";
import docLinkIcon from "../assets/icon/link-square-01.svg";
import reportBugIcon from "../assets/icon/bug-01.svg";
import sunIcon from "../assets/icon/sun-01.svg";
import moonIcon from "../assets/icon/moon-02.svg";

// Navigation item interface
interface NavItem {
  path: string;
  label: string;
  icon: string;
  matchPattern?: RegExp;
}

// Link item interface
interface LinkItem {
  label: string;
  icon: string;
  externalIcon: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    path: "/",
    label: "Home",
    icon: homeIcon,
    matchPattern: /^\/($|search|blockchain\/\d+)/,
  },
  {
    path: "/nft",
    label: "NFT",
    icon: chartIcon,
  },
  {
    path: "/defi",
    label: "Defi",
    icon: chartIcon,
  },
  {
    path: "/blockchain",
    label: "Solana Performance",
    icon: chartIcon,
  },
];

const LINK_ITEMS: LinkItem[] = [
  {
    label: "Docs",
    icon: docPlugIcon,
    externalIcon: docLinkIcon,
  },
  {
    label: "Report Bugs",
    icon: reportBugIcon,
    externalIcon: docLinkIcon,
  },
];

export const SideBar = () => {
  const { isDarkMode, setDarkMode } = useApplicationTheme();
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (item: NavItem) => {
    if (item.matchPattern) {
      return item.matchPattern.test(pathname);
    }
    return pathname === item.path;
  };

  const getNavItemStyles = (active: boolean) => ({
    borderRadius: "12px",
    border: (theme: any) => (active ? `1px solid ${theme.sideBar.btn.border}` : "none"),
    background: (theme: any) => (active ? theme.sideBar.btn.background : "none"),
    padding: "13px 12px 11px 12px",
    gap: "5px",
    cursor: "pointer",
  });

  const getNavTextStyles = (active: boolean) => ({
    fontSize: pxToRem(16),
    fontWeight: active ? 600 : 400,
    color: (theme: any) => (active ? theme.sideBar.btn.text.color : theme.sideBar.text.link),
  });

  return (
    <Stack
      sx={{
        justifyContent: "space-between",
        height: { xs: "calc(100% - 88px)", sm: "100%" },
      }}
    >
      <Box>
        <Box margin="32px 70px 49px 16px">
          <ApplicationLogo />
        </Box>

        <Stack sx={{ gap: "20px", margin: "0 16px" }}>
          {NAV_ITEMS.map((item) => (
            <RowStack
              key={item.path}
              sx={getNavItemStyles(isActive(item))}
              onClick={() => router.push(item.path)}
            >
              <StyledImage src={item.icon} alt="" sx={{ width: "23px", height: "24px" }} />
              <Typography sx={getNavTextStyles(isActive(item))}>{item.label}</Typography>
            </RowStack>
          ))}
        </Stack>
      </Box>

      <Stack sx={{ padding: "0 16px 31px 23px" }}>
        <Typography
          sx={{
            padding: "12px auto 8px 8px",
            fontSize: pxToRem(16),
            fontWeight: 500,
            letterSpacing: "1.82px",
            mb: "22px",
            color: (theme) => theme.sideBar.text.link,
          }}
        >
          Links
        </Typography>

        {LINK_ITEMS.map((item, index) => (
          <RowStack
            key={item.label}
            spacing={1}
            marginBottom={index === LINK_ITEMS.length - 1 ? "50px" : "27px"}
          >
            <StyledImage src={item.icon} alt="" sx={{ width: "24px", height: "24px" }} />
            <Typography
              sx={{
                fontSize: pxToRem(16),
                fontWeight: "400",
                color: (theme) => theme.sideBar.text.color,
                flexGrow: 1,
              }}
            >
              {item.label}
            </Typography>
            <StyledImage
              src={item.externalIcon}
              alt=""
              sx={{ width: "20px", height: "20px", marginLeft: "8px" }}
            />
          </RowStack>
        ))}

        <RowStack
          spacing="26px"
          sx={{
            padding: "5px 14px 5px 5px",
            margin: "0 auto",
            borderRadius: "40px",
            background: (theme) => theme.sideBar.toggle.background,
            border: (theme) => `5px solid ${theme.sideBar.toggle.border}`,
            boxShadow: (theme) => theme.sideBar.toggle.boxShadow,
            cursor: "pointer",
          }}
          onClick={() => setDarkMode(!isDarkMode)}
        >
          <StyledImage src={sunIcon} alt="Light Mode" sx={{ width: "20px", height: "20px" }} />
          <StyledImage src={moonIcon} alt="Dark Mode" sx={{ width: "24px", height: "24px" }} />
        </RowStack>
      </Stack>
    </Stack>
  );
};
