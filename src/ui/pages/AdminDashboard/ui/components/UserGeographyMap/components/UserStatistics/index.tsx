"use client";
import { Stack, Typography } from "@mui/material";
import { pxToRem, RowStack, StyledImage } from "@web-insight/component-library";
import arrowDown from "./assets/icon/Icon (1).svg";
import arrowUp from "./assets/icon/Icon.svg";

export const UserStatistics = () => {
  return (
    <RowStack spacing={"67px"} alignItems={"center"}>
      <Stack
        spacing={"10px"}
        sx={{
          background: "rgba(51, 165, 93, 0.20)",
          pt: "12px",
          px: "12px",
          borderRadius: "10px",
        }}
      >
        <Typography
          sx={{
            fontSize: pxToRem(14),
            fontWeight: 600,
            lineHeight: "18px",
            letterSpacing: "1px",
          }}
        >
          Users
        </Typography>

        <RowStack spacing={"8px"}>
          <Typography
            sx={{
              fontSize: pxToRem(21),
              fontWeight: 600,
              lineHeight: "32px",
              position: "relative",
              top: "-5px",
            }}
          >
            2
          </Typography>

          <RowStack
            sx={{
              padding: "0px 2.085px 0px 1px",
              gap: "6px",
            }}
          >
            <Typography
              sx={{
                color: "#22C55E",
                fontSize: pxToRem(13),
                fontWeight: 500,
                lineHeight: "21px",
              }}
            >
              100
            </Typography>

            <StyledImage src={arrowUp} alt="" />
          </RowStack>
        </RowStack>
      </Stack>

      <Stack spacing={"4px"}>
        <Typography
          sx={{
            fontSize: pxToRem(14),
            fontWeight: 600,
            lineHeight: "18px",
            letterSpacing: "1px",
          }}
        >
          New users
        </Typography>

        <RowStack spacing={"4px"}>
          <Typography
            sx={{
              fontSize: pxToRem(21),
              fontWeight: 600,
              lineHeight: "120%",
            }}
          >
            3
          </Typography>

          <RowStack
            sx={{
              padding: "0px 2.085px 0px 1px",
              gap: "6px",
            }}
          >
            <Typography
              sx={{
                color: "#22C55E",
                fontSize: pxToRem(13),
                fontWeight: 500,
                lineHeight: "21px",
              }}
            >
              100
            </Typography>

            <StyledImage src={arrowUp} alt="" />
          </RowStack>
        </RowStack>
      </Stack>

      <Stack spacing={"4px"}>
        <Typography
          sx={{
            color: "#9AA0A6",
            fontSize: pxToRem(14),
            fontWeight: 600,
            lineHeight: "18px",
            letterSpacing: "1px",
          }}
        >
          Average engagement time
        </Typography>

        <RowStack spacing={"4px"}>
          <Typography
            sx={{
              color: "#9AA0A6",
              fontSize: pxToRem(21),
              fontWeight: 600,
              lineHeight: "32px",
            }}
          >
            5m 25s
          </Typography>

          <RowStack
            sx={{
              padding: "0px 2.085px 0px 1px",
              gap: "6px",
            }}
          >
            <Typography
              sx={{
                color: "#DB4437",
                fontSize: pxToRem(13),
                fontWeight: 500,
                lineHeight: "21px",
              }}
            >
              243
            </Typography>

            <StyledImage src={arrowDown} alt="" />
          </RowStack>
        </RowStack>
      </Stack>
    </RowStack>
  );
};
