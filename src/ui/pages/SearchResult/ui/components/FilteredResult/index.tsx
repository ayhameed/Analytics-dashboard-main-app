"use client";
import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { pxToRem, RowStack, StyledImage } from "@web-insight/component-library";
import starIcon from "@/ui/assets/icons/star.svg";
import supplyIcon from "@/ui/assets/icons/shellfish.svg";
import { ApiBlockchainData, useApplicationTheme, useAuth, useCryptoApi, useSearch } from "@/common";
import { useSearchParams } from "next/navigation";
import { LinkSignIn } from "../LinkSignIn";
import supplyDarkIcon from "@/ui/pages/Blockchain/ui/components/BlockchainCurrencies/ui/assets/icons/shell_fish_dark.svg";
import starDarkIcon from "@/ui/pages/Blockchain/ui/components/BlockchainCurrencies/ui/assets/icons/star_dark.svg";

export const FilteredResult: React.FC = () => {
  const { searchToken } = useCryptoApi();
  const { isSignedIn } = useAuth();
  const { isDarkMode } = useApplicationTheme();

  const { searchTerm, setSearchTerm } = useSearch();
  const [filteredData, setFilteredData] = useState<ApiBlockchainData[]>([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const searchFromParams = searchParams?.get("q");
    searchFromParams && setSearchTerm(searchFromParams);
  }, [searchParams, setSearchTerm]);

  useEffect(() => {
    if (!searchTerm) return setFilteredData([]);

    const lowerTerm = searchTerm.toLowerCase();

    const fetchData = async () => {
      const data = await searchToken(lowerTerm);
      if (data) {
        // If the user is signed in, show all data without opacity or limit
        const adjustedData = isSignedIn
          ? data // @ts-ignore
          : data.slice(0, 2).length < 2
            ? // @ts-ignore
              [...data, ...data]
            : // @ts-ignore
              data.slice(0, 2);
        setFilteredData(adjustedData);
      }
    };

    fetchData();
  }, [searchTerm, isSignedIn, searchToken]);

  //to capitalize the first letter
  const capitalizeFirstLetter = (string: string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Box position={"relative"}>
      <Typography
        sx={{
          fontSize: pxToRem(32),
          fontWeight: 500,
          lineHeight: "150%",
          color: "#101928",
          marginBottom: "28px",
        }}
      >
        Results for {`"${capitalizeFirstLetter(searchTerm)}"`}
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {filteredData.length > 0 ? (
          filteredData.map((data: ApiBlockchainData, index: number) => {
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
                  marginBottom: "20px",
                  opacity: isSignedIn ? 1 : index === 1 ? 0.3 : index === 2 ? 0.1 : 1,
                  transition: "opacity 0.3s ease",
                }}
              >
                <Stack>
                  <RowStack>
                    <StyledImage
                      src={data.logo}
                      alt={data.name}
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
                      {data.name}
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
                    ${typeof data.tvl === "number" ? data.tvl.toLocaleString() : "N/A"} TVL
                  </Typography>
                </Stack>

                <RowStack>
                  <StyledImage
                    src={!isDarkMode ? starIcon : starDarkIcon}
                    alt="Star"
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
                    {data.circulating_supply.toLocaleString()}
                  </Typography>

                  <StyledImage
                    src={isDarkMode ? supplyDarkIcon : supplyIcon}
                    alt="Supply"
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
                    ${data.market_cap.toLocaleString()}
                  </Typography>
                </RowStack>
              </Box>
            );
          })
        ) : (
          <Typography variant="body1">No results found</Typography>
        )}
      </Box>

      {!isSignedIn && filteredData.length > 0 && <LinkSignIn />}
    </Box>
  );
};
