"use client";
import { pxToRem, RowStack, StyledImage } from "@web-insight/component-library";
import { Box, IconButton, Input, InputAdornment, Stack, Theme, Typography } from "@mui/material";
import searchIcon from "../../../../../assets/icons/search-01.svg";
import sortIcon from "../../../../../assets/icons/sorting-05.svg";
import arrowRightIcon from "../../../../../assets/icons/arrow-right-04.svg";
import React from "react";

export const BlockchainSearch = () => {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
  }

  return (
    <Stack spacing={"24px"}>
      <Box>
        <Typography
          sx={{
            fontSize: pxToRem(32),
            fontWeight: 500,
            color: (theme) => theme.dashboard.text.header,
            lineHeight: "150%",
          }}
        >
          Blockchains
        </Typography>

        <Typography
          sx={{
            fontSize: pxToRem(18),
            color: (theme) => theme.dashboard.text.subHeader,
            fontWeight: 400,
            lineHeight: "26px",
            letterSpacing: "-0.09px",
            fontFeatureSettings: "cv03 on, cv04 on",
          }}
        >
          Browse through collection of blockchain and discover new platforms.
        </Typography>
      </Box>

      <Box>
        <RowStack
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "48px",
          }}
        >
          <Input
            placeholder="Search by network, name."
            type="search"
            fullWidth
            size="small"
            disableUnderline
            onChange={handleChange}
            sx={{
              flex: "0 0 50%",
              padding: "8px 0 8px 12px",
              borderRadius: "12px",
              border: (theme) => `1px solid ${theme.dashboard.search.border}`,
              fontSize: pxToRem(16),
              fontWeight: 400,
              color: (theme) => theme.dashboard.search.color,
              backgroundColor: (theme) => theme.dashboard.search.background,
            }}
            inputProps={{
              style: { padding: 0 },
              sx: {
                "::placeholder": {
                  color: (theme: Theme) => theme.dashboard.search.color,
                  opacity: 1,
                },
              },
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
            }}
          >
            <StyledImage src={sortIcon} alt="" sx={{ height: "22px", width: "22px" }} />

            <Typography
              sx={{
                color: (theme) => theme.dashboard.text.filter,
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
      </Box>
    </Stack>
  );
};
