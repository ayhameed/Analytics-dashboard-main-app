"use client";
import { pxToRem, RowStack, StyledImage } from "@web-insight/component-library";
import { Box, Button, IconButton, Input, InputAdornment, Stack, Typography } from "@mui/material";
import searchIcon from "@/ui/assets/icons/search-01.svg";
import sortIcon from "@/ui/assets/icons/sorting-05.svg";
import arrowRightIcon from "@/ui/assets/icons/arrow-right-04.svg";

export const BlockSearchFailure = () => {
  return (
    <Stack spacing={"24px"}>
      <Box>
        <Typography
          sx={{
            fontSize: pxToRem(32),
            fontWeight: 500,
            color: "#101928",
            lineHeight: "150%",
          }}
        >
          Blockchains
        </Typography>

        <Typography
          sx={{
            fontSize: pxToRem(18),
            fontWeight: 400,
            lineHeight: "26px",
            letterSpacing: "-0.09px",
          }}
        >
          Browse through collection of blockchain and discover new platforms.
        </Typography>
      </Box>

      <Box>
        <RowStack
          sx={{
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <RowStack sx={{ width: "60%" }}>
            <Input
              placeholder="Search by network, name."
              type="search"
              fullWidth
              size="small"
              disableUnderline
              sx={{
                flex: "0 0 50%",
                padding: "8px 0 8px 12px",
                borderRadius: "12px",
                border: "1px solid #E4E7EC",
                fontSize: pxToRem(16),
                fontWeight: 400,
                color: "#667185",
                backgroundColor: "#ffff",
              }}
              inputProps={{
                style: { padding: 0 },
                sx: { "::placeholder": { color: "#667185", opacity: 1 } },
              }}
              startAdornment={
                <InputAdornment position="start">
                  <IconButton
                    edge="start"
                    onClick={() => console.log("Search clicked")}
                    sx={{
                      color: "#475367",
                      width: "8px",
                      margin: "0 auto",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    <StyledImage
                      src={searchIcon}
                      alt=""
                      sx={{
                        height: "20px",
                        width: "20px",
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              }
            />

            <RowStack
              spacing={"8px"}
              sx={{
                border: "1px solid  #E4E7EC",
                padding: "11px 13px 11px 12px",
                borderRadius: "12px",
                marginLeft: "10px",
              }}
            >
              <StyledImage src={sortIcon} alt="" sx={{ height: "22px", width: "22px" }} />

              <Typography
                sx={{
                  color: "#475367",
                  fontSize: pxToRem(16),
                  fontWeight: 400,
                  lineHeight: "24px",
                }}
              >
                Filter
              </Typography>

              <StyledImage src={arrowRightIcon} alt="" sx={{ height: "22px", width: "14px" }} />
            </RowStack>
          </RowStack>

          <Typography
            sx={{
              fontSize: pxToRem(16),
              fontWeight: 400,
              lineHeight: "26px",
              letterSpacing: "-0.08px",
              color: "#66718",
            }}
          >
            Can&apos;t find any?
            <Button
              sx={{
                color: "#174C39",
                fontSize: pxToRem(16),
                lineHeight: "26px",
                letterSpacing: "-0.08px",
                textDecorationLine: "underline",
                textTransform: "none",
                fontFeatureSettings: "'cv03' on, 'cv04' on",
              }}
            >
              Create a request
            </Button>
            or
            <Button
              sx={{
                color: "#174C39",
                fontSize: pxToRem(16),
                lineHeight: "26px",
                letterSpacing: "-0.08px",
                textDecorationLine: "underline",
                textTransform: "none",
                fontFeatureSettings: "'cv03' on, 'cv04' on",
              }}
            >
              contribute
            </Button>
          </Typography>
        </RowStack>
      </Box>
    </Stack>
  );
};
