"use client";
import { Box, Typography, Stack } from "@mui/material";
import { StyledImage, RowStack, pxToRem } from "@web-insight/component-library";
import Data from "@/ui/blockchain.json";
import starIcon from "@/ui/assets/icons/star.svg";
import supplyIcon from "@/ui/assets/icons/shellfish.svg";
import ScrollImg from "@/ui/assets/icons/image 12.svg";
import EthereumImg from "@/ui/assets/icons/image 14.svg";
import BNBImg from "@/ui/assets/icons/image 16.svg";
import fanthonImg from "@/ui/assets/icons/image 17.svg";
import { blockChainImgs } from "@/common";
import { useSearch } from "@/ui/pages/SearchContext";

interface BlockchainData {
  id: number;
  exchange: string;
  image: string;
}

export const FilteredResult = () => {
    const { searchTerm } = useSearch();
  
    // Convert search term to lowercase and trim it
    const search = searchTerm.toLowerCase().trim();
  
    // Log search term for debugging
    console.log("Search Term in FilteredResult:", searchTerm);
  
    // Use filter + includes to search for the term within the exchange names
    const filteredData = Data.blockchainDatas.filter((item: BlockchainData) =>
      item.exchange.toLowerCase().includes(search)
    );
  
    // Log filtered data for debugging
    console.log("Filtered Data:", filteredData);
  
    const blockchainImages: blockChainImgs = {
      Scroll: ScrollImg,
      Ethereum: EthereumImg,
      "BNB COIN": BNBImg,
      Fanthom: fanthonImg,
    };
  
  
    return (
      <Box>
        {filteredData.length > 0 ? (
          filteredData.map((data: BlockchainData) => (
            <Box
              key={data.id}
              sx={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "61px",
                borderRadius: "12px",
                border: "1px solid rgba(228, 231, 236, 0.50)",
              }}
            >
              <Stack>
                <RowStack>
                  <StyledImage
                    src={blockchainImages[data.exchange as keyof blockChainImgs]}
                    alt={data.exchange}
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
                      color: "#101928",
                    }}
                  >
                    {data.exchange}
                  </Typography>
                </RowStack>
  
                <Typography
                  sx={{
                    color: "#344054",
                    fontSize: pxToRem(16),
                    fontWeight: 500,
                    lineHeight: "26px",
                    letterSpacing: "-0.08px",
                  }}
                >
                  $11,206,723,561.82 Tvl
                </Typography>
              </Stack>
  
              <RowStack>
                <StyledImage
                  src={starIcon}
                  alt=""
                  sx={{ width: "24px", height: "24px", marginRight: "8px" }}
                />
                <Typography
                  sx={{
                    color: "#344054",
                    fontSize: pxToRem(16),
                    fontWeight: 500,
                    lineHeight: "26px",
                    letterSpacing: "-0.08px",
                  }}
                >
                  1,206
                </Typography>
  
                <StyledImage
                  src={supplyIcon}
                  alt=""
                  sx={{ width: "24px", height: "24px", margin: "0 8px" }}
                />
  
                <Typography
                  sx={{
                    color: "#344054",
                    fontSize: pxToRem(16),
                    fontWeight: 500,
                    lineHeight: "26px",
                    letterSpacing: "-0.08px",
                  }}
                >
                  $11,206,723,561.82
                </Typography>
              </RowStack>
            </Box>
          ))
        ) : (
          <Typography variant="body1">No results found</Typography>
        )}
      </Box>
    );
  };
  