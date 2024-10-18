"use client";
import React, { useEffect, useState } from 'react';
import { Box, Typography, Stack } from "@mui/material";
import { StyledImage, RowStack, pxToRem } from "@web-insight/component-library";
import Data from "@/ui/blockchain.json";
import starIcon from "@/ui/assets/icons/star.svg";
import supplyIcon from "@/ui/assets/icons/shellfish.svg";
import ScrollImg from "@/ui/assets/icons/image 12.svg";
import EthereumImg from "@/ui/assets/icons/image 14.svg";
import BNBImg from "@/ui/assets/icons/image 16.svg";
import fanthomImg from "@/ui/assets/icons/image 17.svg";
import { blockChainImgs } from "@/common";
import { useSearch } from "@/ui/pages/SearchContext";
import { useSearchParams } from 'next/navigation';
import { LinkSignIn } from '../LinkSignIn';

interface BlockchainData {
  id: number;
  exchange: string;
  image: string;
}

const blockchainImages: blockChainImgs = {
  Scroll: ScrollImg,
  Ethereum: EthereumImg,
  "BNB COIN": BNBImg,
  Fanthom: fanthomImg,
};

export const FilteredResult: React.FC = () => {
    const { searchTerm, setSearchTerm } = useSearch();
    const [filteredData, setFilteredData] = useState<BlockchainData[]>([]);
    const searchParams = useSearchParams();
    
    useEffect(() => {
      const searchFromParams = searchParams?.get('q');
      searchFromParams && setSearchTerm(searchFromParams); // Set searchTerm if params exist
    }, [searchParams, setSearchTerm]);
    
    useEffect(() => {
      if (!searchTerm) return setFilteredData([]);
    
      const lowerTerm = searchTerm.toLowerCase();
      const startIndex = Data.blockchainDatas.findIndex(item =>
        item.exchange.toLowerCase().includes(lowerTerm)
      );
    
      setFilteredData(
        startIndex !== -1 ? Data.blockchainDatas.slice(startIndex, startIndex + 3) : []
      );
    }, [searchTerm]);
    
    //to capitalize the first letter
    const capitalizeFirstLetter = (string: string) => {
        if (!string) return ''; // Handle empty strings
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <Box position={"relative"}>
            <Typography 
                sx={{
                    fontSize:pxToRem(32),
                    fontWeight: 500,
                    lineHeight: "150%",
                    color: "#101928",
                    marginBottom: "28px"
                }}
            >
                Results for {`"${capitalizeFirstLetter(searchTerm)}"`}
            </Typography>
    
            <Box
                sx={{
                    display: "grid", 
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "20px"
                }}
            >
                {filteredData.length > 0 ? (
                    filteredData.map((data: BlockchainData, index: number) => {
                        let opacity = 1; // Default opacity
    
                        // Set opacity based on the index
                        if (index === 1) {
                            opacity = 0.3; // Half visible for the second item
                        } else if (index === 2) {
                            opacity = 0.1; // Faded for the third item
                        }
    
                        return (
                            <Box
                                key={data.id}
                                sx={{
                                    padding: "20px",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "61px",
                                    borderRadius: "12px",
                                    border: "1px solid rgba(228, 231, 236, 0.50)",
                                    marginBottom: "20px",
                                    opacity: opacity, // Set calculated opacity
                                    transition: 'opacity 0.3s ease', // Smooth transition effect
                                }}
                            >
                                <Stack>
                                    <RowStack>
                                        <StyledImage
                                            src={blockchainImages[data.image as keyof blockChainImgs]}
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
                                        alt="Star"
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
                                        alt="Supply"
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
                        );
                    })
                ) : (
                    <Typography variant="body1">No results found</Typography>
                )}
            </Box>
            <LinkSignIn/>
        </Box>
    );
}    