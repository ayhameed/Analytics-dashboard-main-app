import { pxToRem, RowStack, StyledImage } from "@web-insight/component-library";
import { AppBar, Box, IconButton, Input, InputAdornment, Toolbar, Typography } from "@mui/material";
import profileAvatar from "./assets/icon/Avatar.jpg";
import profileIcon from "./assets/icon/arrow-circle-down.svg";
import { SearchBar } from "./SearchBar/SearchBar";

export const Header = () => {
  return (
    <AppBar
      elevation={0}
      position="static"
      sx={{
        padding: "16px 39px 15px 5px",
        background: (theme) => theme.navBar.background,
      }}
    >
      <Toolbar disableGutters>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "45% 55%",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <RowStack spacing={"40px"}>
            <Typography sx={{ fontSize: pxToRem(16), fontWeight: 500 }}>
              CRYING $0.0011923
              <Typography
                component={"span"}
                sx={{
                  color: "#DE5151",
                  marginLeft: "5px",
                }}
              >
                -49.36%
              </Typography>
            </Typography>

            <Typography
              sx={{
                background: "linear-gradient(to right, black, rgba(0, 0, 0, 0))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: pxToRem(16),
                fontWeight: 500,
              }}
            >
              MOOWAAN $0.0012944
            </Typography>
          </RowStack>

          <RowStack spacing={"24px"} sx={{ marginLeft: "auto" }}>
            <SearchBar/>

            <RowStack sx={{ flex: "0 0 55%" }}>
              <StyledImage
                src={profileAvatar}
                alt=""
                sx={{ width: "48px", height: "48px", marginRight: "15px" }}
              />

              <Box>
                <Typography
                  sx={{
                    fontSize: pxToRem(16),
                    fontWeight: 700,
                    lineHeight: "150%",
                  }}
                >
                  Opeyemi Adeboye
                </Typography>

                <Typography
                  sx={{
                    fontSize: pxToRem(16),
                    fontWeight: 400,
                    lineHeight: "150%",
                    color: "#5E646E",
                  }}
                >
                  Yemi@fig.com
                </Typography>
              </Box>

              <StyledImage
                src={profileIcon}
                alt=""
                sx={{ width: "24px", height: "24px", marginLeft: "24px" }}
              />
            </RowStack>
          </RowStack>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
