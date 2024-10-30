"use client";
import { Stack, Typography } from "@mui/material";
import { pxToRem, RowStack, StyledImage } from "@web-insight/component-library";
import arrowDown from "./assets/icon/Icon (1).svg";
import arrowUp from "./assets/icon/Icon.svg";

export const UserStatistics = () => {
  return (
    <RowStack spacing={"67px"}>
      <Stack
        spacing={"10px"}
        sx={{
          background: "rgba(51, 165, 93, 0.20)",
          padding: "3px 8px",
          borderRadius: "10px",
        }}
      >
        {/**here Plus Jakarta Sans is used as font*/}
        <Typography
          sx={{
            color: "#71717A",
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
              color: "#18181B",
              fontSize: pxToRem(21),
              fontWeight: 600,
              lineHeight: "32px",
              position: "relative",
              top: "-5px",
            }}
          >
            395
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
              348.9
            </Typography>

            <StyledImage src={arrowUp} alt="" />
          </RowStack>
        </RowStack>
      </Stack>

      <Stack spacing={"4px"} alignSelf={"flex-start"}>
        <Typography
          sx={{
            color: "#9AA0A6",
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
              color: "#9AA0A6",
              fontSize: pxToRem(21),
              fontWeight: 600,
              lineHeight: "120%",
            }}
          >
            932
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
              565.7
            </Typography>

            <StyledImage src={arrowUp} alt="" />
          </RowStack>
        </RowStack>
      </Stack>

      <Stack spacing={"4px"} alignSelf={"flex-start"}>
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
            1m 23s
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
              565.7
            </Typography>

            <StyledImage src={arrowDown} alt="" />
          </RowStack>
        </RowStack>
      </Stack>
    </RowStack>
  );
};
