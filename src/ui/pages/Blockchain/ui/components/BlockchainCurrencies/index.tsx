"use client"
import { Box, Typography,Stack} from "@mui/material";
import { StyledImage, RowStack, pxToRem } from "@web-insight/component-library";
import Data from './blockchain.json';
import starIcon from "./assets/icon/star.svg";
import supplyIcon from "./assets/icon/shellfish.svg"
import ScrollImg from "./assets/icon/image 12.svg"
import EthereumImg from "./assets/icon/image 14.svg"
import BNBImg from "./assets/icon/image 16.svg"
import fanthonImg from "./assets/icon/image 17.svg"
import { blockChainImgs } from "@/common";

export const BlockchainCurrencies = () => {
    const blockchainImages :blockChainImgs= {
        "Scroll": ScrollImg,
        "Ethereum": EthereumImg,
        "BNB COIN": BNBImg,
        "Fanthom": fanthonImg
    };

    return(
        <Box 
            sx={{
                marginTop: "30px",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
            }}
        >
           {
            Data.blockchainDatas.map(data => {
                return(
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
                                    alt=""
                                    sx={{
                                        width: "25.794px",
                                        height: "25.304px",
                                        marginRight: "5px"
                                    }}  
                                />

                                <Typography
                                    sx={{
                                        fontSize: pxToRem(20),
                                        fontWeight: 500,
                                        lineHeight: "32px",
                                        color: "#101928"
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
                                    letterSpacing: "-0.08px"
                                }}
                            >
                                $11,206,723,561.82 Tvl
                            </Typography>
                        </Stack>
                        
                        <RowStack>
                            <StyledImage src ={starIcon} alt =''
                                sx={{width: "24px", height: "24px",marginRight: "8px"}}
                            />

                            <Typography
                                sx={{
                                    color: "#344054",
                                    fontSize: pxToRem(16),
                                    fontWeight: 500,
                                    lineHeight: "26px",
                                    letterSpacing: "-0.08px"
                                }} 
                            >
                                1,206
                            </Typography>

                            <StyledImage src ={supplyIcon} alt =''
                                sx={{width: "24px", height: "24px",margin: "0 8px"}}
                            />

                            <Typography
                                sx={{
                                    color: "#344054",
                                    fontSize: pxToRem(16),
                                    fontWeight: 500,
                                    lineHeight: "26px",
                                    letterSpacing: "-0.08px"
                                }}
                            >
                                $11,206,723,561.82
                            </Typography>
                        </RowStack>
                    </Box>
                )
            })
           } 
        </Box>
    )
}