"use client";

import { Box, Stack, Typography } from "@mui/material";
import { pxToRem, RowStack, StyledImage } from "@web-insight/component-library";
import homeIcon from "./assets/icon/Component 6.svg";
import chartIcon from "./assets/icon/chart-histogram.svg";
import docPlugIcon from "./assets/icon/plug-socket.svg";
import docLinkIcon from "./assets/icon/link-square-01.svg";
import reportBugIcon from "./assets/icon/bug-01.svg";
import sunIcon from "./assets/icon/sun-01.svg";
import moonIcon from "./assets/icon/moon-02.svg";
import { useApplicationTheme } from "@/common";
import { ApplicationLogo } from "@/ui/modules/components";

export const SideBar = () => {
  const { isDarkMode, setDarkMode } = useApplicationTheme();

  const handleToggleTheme = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <Stack sx={{ justifyContent: "space-between", height: "100%" }}>
      <Box>
        {/*<StyledImage*/}
        {/*  src={logo}*/}
        {/*  alt=""*/}
        {/*  sx={{*/}
        {/*    width: "164px",*/}
        {/*    height: "57px",*/}
        {/*    margin: "32px 70px 49px 16px",*/}
        {/*  }}*/}
        {/*/>*/}
        <ApplicationLogo />

        <Stack
          sx={{
            gap: "20px",
            margin: "0 16px",
          }}
        >
          <RowStack
            sx={{
              borderRadius: "12px",
              border: "1px solid #76A8ED",
              background:
                "linear-gradient(90deg, rgba(103, 180, 238, 0.30) 0%, rgba(172, 125, 234, 0.30) 100%)",
              padding: "13px 12px 11px 12px; ",
              gap: "5px",
            }}
          >
            <StyledImage src={homeIcon} alt="" sx={{ width: "23px", height: "24px" }} />
            <Typography
              sx={{
                fontSize: pxToRem(16),
                fontWeight: 600,
                color: "#134432",
              }}
            >
              Home
            </Typography>
          </RowStack>

          <RowStack
            sx={{
              gap: "5px",
              padding: "12px 14px 12px 8px",
              alignItems: "center",
            }}
          >
            <StyledImage src={chartIcon} alt="" sx={{ width: "23px", height: "24px" }} />
            <Typography
              sx={{
                fontSize: pxToRem(16),
                fontWeight: 400,
                color: "#475367",
              }}
            >
              Solana Performance
            </Typography>
          </RowStack>
        </Stack>
      </Box>

      <Stack sx={{ padding: "0 16px 31px 23px", color: "#475367" }}>
        <Typography
          sx={{
            padding: "12px auto 8px 8px",
            fontSize: pxToRem(16),
            fontWeight: 500,
            letterSpacing: "1.82px",
            color: "#66185",
          }}
        >
          Links
        </Typography>

        <RowStack sx={{ padding: "12px 8px" }}>
          <StyledImage src={docPlugIcon} alt="" sx={{ width: "24px", height: "24px" }} />
          <Typography sx={{ fontSize: pxToRem(16), fontWeight: "400", flexGrow: 1 }}>
            Docs
          </Typography>
          <StyledImage
            src={docLinkIcon}
            alt=""
            sx={{ width: "20px", height: "20px", marginLeft: "8px" }}
          />
        </RowStack>

        <RowStack sx={{ padding: "11px 8px", marginBottom: "50px" }}>
          <StyledImage src={reportBugIcon} alt="" sx={{ width: "24px", height: "24px" }} />
          <Typography sx={{ fontSize: pxToRem(16), fontWeight: "400", flexGrow: 1 }}>
            Report Bugs
          </Typography>
          <StyledImage
            src={docLinkIcon}
            alt=""
            sx={{ width: "20px", height: "20px", marginLeft: "8px" }}
          />
        </RowStack>

        <RowStack
          spacing={"26px"}
          sx={{
            padding: "5px 14px 5px 5px",
            margin: "0 auto",
            borderRadius: "40px",
            border: "5px solid #E4E7EC",
            boxShadow: "0px 0px 0px 3px rgba(241, 241, 241, 0.37), -2px -2px 8px 0px #E9E9E9 inset",
            cursor: "pointer",
          }}
          onClick={handleToggleTheme}
        >
          <StyledImage
            src={sunIcon}
            alt="Light Mode"
            sx={{
              width: "20px",
              height: "20px",
              display: isDarkMode ? "none" : "block", // Hide sun in dark mode
            }}
          />
          <StyledImage
            src={moonIcon}
            alt="Dark Mode"
            sx={{
              width: "24px",
              height: "24px",
              display: isDarkMode ? "block" : "none", // Hide moon in light mode
            }}
          />
        </RowStack>
      </Stack>
    </Stack>
  );
};
