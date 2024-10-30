"use client";
import { Box, Stack, Typography } from "@mui/material";
import { pxToRem, RowStack, StyledImage } from "@web-insight/component-library";
import { UserStatistics } from "./components";
import map from "./components/assets/image/Frame 1261155309.svg";
import downloadIcon from "./components/assets/icon/document-download.svg";

export const UsersGeography = () => {
  return (
    <Box gridColumn={"span 2"}>
      <Stack spacing={"80px"}>
        <UserStatistics />
        <Stack spacing={"101px"}>
          <Stack spacing={"24px"}>
            <Typography
              sx={{
                color: "#3C4043",
                fontSize: pxToRem(16),
                fontWeight: 700,
                lineHeight: "24px",
              }}
            >
              Users
              <Typography
                component="span"
                sx={{
                  fontWeight: 500,
                  color: "#3C4043",
                  marginLeft: "10px",
                }}
              >
                by Country
              </Typography>
            </Typography>

            <StyledImage src={map} alt="" />
          </Stack>

          <RowStack justifyContent={"space-between"}>
            <RowStack spacing={"9px"}>
              <Typography
                sx={{
                  borderRadius: "5px",
                  background: "#EEF0F3",
                  padding: "8px 9px",
                  fontSize: pxToRem(11),
                  color: "#61656C",
                  fontWeight: 500,
                  lineHeight: "18px",
                }}
              >
                7 Days
              </Typography>

              <Typography
                sx={{
                  borderRadius: "5px",
                  background: "#EEF0F3",
                  padding: "8px 9px",
                  fontSize: pxToRem(11),
                  color: "#61656C",
                  fontWeight: 500,
                  lineHeight: "18px",
                }}
              >
                30 Days
              </Typography>

              <Typography
                sx={{
                  borderRadius: "5px",
                  background: "#EEF0F3",
                  padding: "8px 9px",
                  fontSize: pxToRem(11),
                  color: "#61656C",
                  fontWeight: 500,
                  lineHeight: "18px",
                }}
              >
                6 Months
              </Typography>

              <Typography
                sx={{
                  border: "1px solid #AC7DEA",
                  borderRadius: "5px",
                  background: "#F0E8FB",
                  padding: "8px 9px",
                  fontSize: pxToRem(11),
                  color: "#61656C",
                  fontWeight: 700,
                  lineHeight: "18px",
                }}
              >
                12 Months
              </Typography>
            </RowStack>

            <RowStack
              sx={{
                borderRadius: "5px",
                border: "1px solid #D4D4D8",
                background: "#FCFCFD",
                padding: "6px 9px",
              }}
            >
              <StyledImage src={downloadIcon} alt="" />

              {/**Plus Jakarta Sans fonts should enter here */}
              <Typography
                sx={{
                  marginLeft: "10px",
                  fontSize: pxToRem(11),
                  fontWeight: 700,
                  lineHeight: "18px",
                }}
              >
                Export PDF
              </Typography>
            </RowStack>
          </RowStack>
        </Stack>
      </Stack>
    </Box>
  );
};
