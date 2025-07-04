"use client";

import { Box, Stack, Typography } from "@mui/material";
import { pxToRem, RowStack, StyledImage, StyledLink } from "@web-insight/component-library";
import homeIcon from "../assets/icon/Component 6.svg";
import chartIcon from "../assets/icon/chart-histogram.svg";
import docPlugIcon from "../assets/icon/plug-socket.svg";
import docLinkIcon from "../assets/icon/link-square-01.svg";
import reportBugIcon from "../assets/icon/bug-01.svg";
import { useApplicationTheme } from "@/common";
import { ApplicationLogo } from "@/ui/modules/components";
import { usePathname, useRouter } from "next/navigation";

export const AdminSideBar = () => {
  const { isDarkMode, setDarkMode } = useApplicationTheme();
  const router = useRouter();
  const pathname = usePathname();

  const handleToggleTheme = () => {
    setDarkMode(!isDarkMode);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <Stack sx={{ justifyContent: "space-between", height: "100%" }}>
      <Box>
        <StyledLink
          href={"/admin"}
          sx={{
            ml: "-55px",
            mt: "-55px",
          }}
        >
          <ApplicationLogo />
        </StyledLink>

        <Stack
          sx={{
            gap: "20px",
            margin: "0 16px",
            mt: "-50px",
          }}
        >
          <RowStack
            sx={{
              borderRadius: "12px",
              border: (theme) =>
                isActive("/admin") ? `1px solid ${theme.sideBar.btn.border}` : "none",
              background: (theme) => (isActive("/admin") ? theme.sideBar.btn.background : "none"),
              padding: "13px 12px 11px 12px",
              gap: "5px",
              cursor: "pointer",
            }}
            onClick={() => router.push("/admin")}
          >
            <StyledImage src={homeIcon} alt="" sx={{ width: "23px", height: "24px" }} />

            <Typography
              sx={{
                fontSize: pxToRem(16),
                fontWeight: 600,
                color: (theme) =>
                  isActive("/admin") ? theme.sideBar.btn.text.color : theme.sideBar.text.link,
              }}
            >
              Dashboard
            </Typography>
          </RowStack>

          <RowStack
            sx={{
              gap: "5px",
              padding: "12px 14px 12px 8px",
              alignItems: "center",
              borderRadius: "12px",
              border: (theme) =>
                isActive("/admin/users") ? `1px solid ${theme.sideBar.btn.border}` : "none",
              background: (theme) =>
                isActive("/admin/users") ? theme.sideBar.btn.background : "none",
              cursor: "pointer",
            }}
            onClick={() => router.push("/admin/users")}
          >
            <StyledImage src={chartIcon} alt="" sx={{ width: "23px", height: "24px" }} />

            <Typography
              sx={{
                fontSize: pxToRem(16),
                fontWeight: 400,
                color: (theme) =>
                  isActive("/admin/users") ? theme.sideBar.btn.text.color : theme.sideBar.text.link,
              }}
            >
              Users
            </Typography>
          </RowStack>
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

        <RowStack spacing={1} marginBottom={"27px"}>
          <StyledImage src={docPlugIcon} alt="" sx={{ width: "24px", height: "24px" }} />

          <Typography
            sx={{
              fontSize: pxToRem(16),
              fontWeight: "400",
              color: (theme) => theme.sideBar.text.color,
              flexGrow: 1,
            }}
          >
            Docs
          </Typography>

          <StyledImage
            src={docLinkIcon}
            alt=""
            sx={{ width: "20px", height: "20px", marginLeft: "8px" }}
          />
        </RowStack>

        <RowStack spacing={1} marginBottom={"50px"}>
          <StyledImage src={reportBugIcon} alt="" sx={{ width: "24px", height: "24px" }} />

          <Typography
            sx={{
              fontSize: pxToRem(16),
              fontWeight: "400",
              color: (theme) => theme.sideBar.text.color,
              flexGrow: 1,
            }}
          >
            Report Bugs
          </Typography>

          <StyledImage
            src={docLinkIcon}
            alt=""
            sx={{ width: "20px", height: "20px", marginLeft: "8px" }}
          />
        </RowStack>

        {/*<RowStack*/}
        {/*  spacing={"26px"}*/}
        {/*  sx={{*/}
        {/*    padding: "5px 14px 5px 5px",*/}
        {/*    margin: "0 auto",*/}
        {/*    borderRadius: "40px",*/}
        {/*    background: (theme) => theme.sideBar.toggle.background,*/}
        {/*    border: (theme) => `5px solid ${theme.sideBar.toggle.border}`,*/}
        {/*    boxShadow: (theme) => theme.sideBar.toggle.boxShadow,*/}
        {/*    cursor: "pointer",*/}
        {/*  }}*/}
        {/*  onClick={handleToggleTheme}*/}
        {/*>*/}
        {/*  <StyledImage*/}
        {/*    src={sunIcon}*/}
        {/*    alt="Light Mode"*/}
        {/*    sx={{*/}
        {/*      width: "20px",*/}
        {/*      height: "20px",*/}
        {/*      // display: isDarkMode ? "none" : "block",*/}
        {/*    }}*/}
        {/*  />*/}
        {/*  <StyledImage*/}
        {/*    src={moonIcon}*/}
        {/*    alt="Dark Mode"*/}
        {/*    sx={{*/}
        {/*      width: "24px",*/}
        {/*      height: "24px",*/}
        {/*      // display: isDarkMode ? "block" : "none",*/}
        {/*    }}*/}
        {/*  />*/}
        {/*</RowStack>*/}
      </Stack>
    </Stack>
  );
};
