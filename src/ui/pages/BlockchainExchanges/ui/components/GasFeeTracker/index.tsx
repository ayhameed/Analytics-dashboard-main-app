import { Box, Stack, Typography } from "@mui/material";
import { pxToRem, RowStack, StyledImage } from "@web-insight/component-library";
import cloudIcon from "../asset/icon/cloud-download (1).svg";
import GasFeeGraph from "./component";
import arrowdownicon from "../asset/icon/arrow-down-01.svg";
import arrowDownLight from "../asset/icon/arrow_down_light.svg";
import { useApplicationTheme } from "@/common";

export const GasFeeTracker = () => {
  const { isDarkMode } = useApplicationTheme();
  return (
    <Stack
      spacing={"12px"}
      sx={{
        padding: "20px 15px 20px 12px",
        margin: "20px 0 10px 0",
        borderRadius: "10px",
        border: (theme) => `0.8px solid ${theme.tokenDetails.gasFeesTracker.border}`,
        backgroundColor: (theme) => theme.tokenDetails.gasFeesTracker.background,
      }}
    >
      <Typography
        sx={{
          color: (theme) => theme.tokenDetails.gasFeesTracker.primary,
          fontSize: pxToRem(20),
          fontWeight: 600,
          lineHeight: "26px",
          letterSpacing: "-0.1px",
        }}
      >
        Gas Fees Tracker
      </Typography>

      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "4px 0",
            marginBottom: "10px",
          }}
        >
          <RowStack
            sx={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              padding: "12px",
            }}
          >
            <Typography
              sx={{
                //fontFamily: "Inter",
                fontSize: pxToRem(12),
                fontWeight: 400,
                color: (theme) => theme.tokenDetails.gasFeesTracker.PNGcolor,
                marginRight: "10px",
              }}
            >
              Download PNG
            </Typography>

            <StyledImage src={cloudIcon} alt="" sx={{ width: "24px", height: "24px" }} />
          </RowStack>

          <RowStack
            sx={{
              backgroundColor: "rgba(223, 215, 246, 0.40)",
              padding: "8px",
              gap: "4px",
              borderRadius: "6px",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: pxToRem(14),
                fontWeight: 600,
                color: "#582FD0",
                fontFeatureSettings: "'liga' off, 'clig' off",
                lineHeight: "20px",
                letterSpacing: "0.25",
              }}
            >
              Today
            </Typography>

            <StyledImage
              src={isDarkMode ? arrowDownLight : arrowdownicon}
              alt=""
              sx={{ width: "24px", height: "24px" }}
            />
          </RowStack>
        </Box>

        <Box sx={{ width: "100%" }}>
          <GasFeeGraph />
        </Box>

        <RowStack sx={{ justifyContent: "center" }}>
          <Box
            sx={{
              width: "22px",
              height: "12px",
              backgroundColor: "#22DDD4",
            }}
          />
          <Typography
            sx={{
              //fontFamily: "Lato",
              fontSize: pxToRem(14),
              fontWeight: 700,
              marginLeft: "5px",
            }}
          >
            Base Fee
          </Typography>

          <Box
            sx={{
              width: "22px",
              height: "12px",
              backgroundColor: "#0E5855",
              margin: "0 5px 0 22px",
            }}
          />
          <Typography
            sx={{
              //fontFamily: "Lato",
              fontSize: pxToRem(14),
              fontWeight: 700,
            }}
          >
            Priority Fee
          </Typography>
        </RowStack>
      </Box>
    </Stack>
  );
};
