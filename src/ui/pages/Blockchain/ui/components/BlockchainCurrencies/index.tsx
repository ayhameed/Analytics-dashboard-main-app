"use client";

import { Box, Stack, Typography } from "@mui/material";
import { pxToRem, RowStack, StyledImage } from "@web-insight/component-library";
import Data from "@/ui/blockchain.json";
import ScrollImg from "@/ui/assets/icons/image 12.svg";

import EthereumImg from "@/ui/assets/icons/image 14.svg";
import BNBImg from "@/ui/assets/icons/image 16.svg";
import fanthonImg from "@/ui/assets/icons/image 17.svg";
import { blockChainImgs, useApplicationTheme } from "@/common";

import starDarkIcon from "./ui/assets/icons/star_dark.svg";
import starIcon from "./ui/assets/icons/star.svg";
import supplyDarkIcon from "./ui/assets/icons/shell_fish_dark.svg";
import supplyIcon from "./ui/assets/icons/shell_fish.svg";

export const BlockchainCurrencies = () => {
  const { isDarkMode } = useApplicationTheme();

  const blockchainImages: blockChainImgs = {
    Scroll: ScrollImg,
    Ethereum: EthereumImg,
    "BNB COIN": BNBImg,
    Fanthom: fanthonImg,
  };

  return (
    <Box
      sx={{
        marginTop: "30px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
      }}
    >
      {Data.blockchainDatas.map((data) => {
        return (
          <Box
            key={data.id}
            sx={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "61px",
              borderRadius: "12px",
              border: (theme) => `1px solid ${theme.dashboard.blockchain.border}`,
            }}
          >
            <Stack>
              <RowStack marginBottom={1}>
                <StyledImage
                  src={blockchainImages[data.exchange as keyof blockChainImgs]}
                  alt=""
                  sx={{
                    width: "25.794px",
                    height: "25.304px",
                    marginRight: "5px",
                  }}
                />

                <Typography
                  sx={{
                    fontSize: pxToRem(20),
                    fontWeight: 500,
                    lineHeight: "32px",
                    color: (theme) => theme.dashboard.blockchain.text.primary,
                  }}
                >
                  {data.exchange}
                </Typography>
              </RowStack>

              <Typography
                sx={{
                  color: (theme) => theme.dashboard.blockchain.text.secondary,
                  fontSize: pxToRem(16),
                  fontWeight: 500,
                  lineHeight: "26px",
                  letterSpacing: "-0.08px",
                  fontFeatureSettings: "cv03 on, cv04 on",
                }}
              >
                $11,206,723,561.82 Tvl
              </Typography>
            </Stack>

            <RowStack>
              <StyledImage
                src={!isDarkMode ? starIcon : starDarkIcon}
                alt=""
                sx={{ width: "24px", height: "24px", marginRight: "8px" }}
              />

              <Typography
                sx={{
                  color: (theme) => theme.dashboard.blockchain.text.secondary,
                  fontSize: pxToRem(16),
                  fontWeight: 500,
                  lineHeight: "26px",
                  letterSpacing: "-0.08px",
                  fontFeatureSettings: "cv03 on, cv04 on",
                }}
              >
                1,206
              </Typography>

              <StyledImage
                src={isDarkMode ? supplyDarkIcon : supplyIcon}
                alt=""
                sx={{ width: "24px", height: "24px", margin: "0 8px" }}
              />

              <Typography
                sx={{
                  color: (theme) => theme.dashboard.blockchain.text.secondary,
                  fontSize: pxToRem(16),
                  fontWeight: 500,
                  lineHeight: "26px",
                  letterSpacing: "-0.08px",
                  fontFeatureSettings: "cv03 on, cv04 on",
                }}
              >
                $11,206,723,561.82
              </Typography>
            </RowStack>
          </Box>
        );
      })}
    </Box>
  );
};
