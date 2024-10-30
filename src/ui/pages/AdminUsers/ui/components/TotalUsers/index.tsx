"use client";
import { pxToRem, RowStack, StyledImage } from "@web-insight/component-library";

import managerIcon from "./assets/icons/manager.svg";
import { Typography, Stack, Box } from "@mui/material";

export const TotalUsers = () => {
  return (
    <RowStack
      sx={{
        marginBottom: "19px",
        padding: "20px 12px",
        gap: "12px",
        borderRadius: "8px",
        backgroundColor: "#F9FAFB",
        flex: "1 0 0",
      }}
    >
      <StyledImage src={managerIcon} alt="" sx={{ alignSelf: "flex-start", paddingTop: "10px" }} />
      <Stack>
        <Typography
          sx={{
            color: "#202020",
            fontSize: pxToRem(20),
            fontWeight: 500, // font family => Inter
            lineHeight: "30px",
          }}
        >
          Users
        </Typography>

        <Typography
          sx={{
            color: "#202020",
            fontSize: pxToRem(30),
            fontWeight: 500, // font family => Inter
            lineHeight: "38px",
          }}
        >
          2,345,90 {/** for total users */}
        </Typography>
      </Stack>

      <Stack marginLeft={"auto"}>
        <RowStack spacing={"20px"}>
          <RowStack>
            <Box
              sx={{
                backgroundColor: " #FF5A5A",
                width: "8.5px",
                height: "8.5px",
                borderRadius: "50%",
                marginRight: "10px",
              }}
            />

            <Typography
              sx={{
                color: "#FF5A5A",
                fontSize: pxToRem(16), // FontFamily: Inter
                fontWeight: 500,
                lineHeight: "120%",
              }}
            >
              Inactive
            </Typography>
          </RowStack>

          <Typography
            sx={{
              color: "#202020",
              fontSize: pxToRem(20),
              fontWeight: 500,
              lineHeight: "38px",
            }}
          >
            2,000,000 {/** total inactive users */}
          </Typography>
        </RowStack>

        <RowStack justifyContent={"space-between"}>
          <RowStack>
            <Box
              sx={{
                backgroundColor: " #009B55",
                width: "8.5px",
                height: "8.5px",
                borderRadius: "50%",
                marginRight: "10px",
              }}
            />

            <Typography
              sx={{
                color: "#009B55",
                fontSize: pxToRem(16), // FontFamily: Inter
                fontWeight: 500,
                lineHeight: "120%",
              }}
            >
              Active
            </Typography>
          </RowStack>

          <Typography
            sx={{
              color: "#202020",
              fontSize: pxToRem(20),
              fontWeight: 500,
              lineHeight: "38px",
            }}
          >
            345,90 {/** total active users */}
          </Typography>
        </RowStack>
      </Stack>
    </RowStack>
  );
};
