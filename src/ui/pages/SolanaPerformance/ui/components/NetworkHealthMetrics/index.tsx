"use client"
import { Box, Stack, Typography } from "@mui/material";
import { pxToRem, RowStack, StyledImage } from "@web-insight/component-library";
import arrowDdownicon from "@/ui/assets/icons/arrow-right-04.svg"
import ChartLeftFigure from "./assets/image/Frame 48095636.svg"
import ChartImage from "./assets/image/Frame 48095589 (2).svg"

export const NetworkHealthMetrics = () => {
    return(
        <Box
            sx={{
                gridColumn: "span 4",
                gridRow: "2/3",
                padding: "20px 24px 14px 9px",
                margin: "15px 47px 0 0",
                borderRadius: "10px",
                border: "0.8px solid #D7D8DC",
                backgroundColor: "#fff"

            }}
        >
            <RowStack marginBottom={"66px"}>
                <Stack>
                    <Typography
                        sx={{
                            color: "#28292D",
                            fontFeatureSettings: "'liga' off, 'clig' off",
                            fontSize: pxToRem(16),
                            fontWeight: 600,
                            lineHeight: "24px",
                            marginLeft: "15px"
                        }}
                    >
                        Network health Metrics <br />
                        <Typography component="span"
                            sx={{
                                color: "#747474",
                                fontSize: pxToRem(14),
                                fontWeight: 400,
                                lineHeight: "24px",
                                fontFeatureSettings: "'liga' off, 'clig' off"
                            }}
                        >
                           Success Vote vs Non-Vote Transactions  
                        </Typography>
                    </Typography>
                </Stack>

                <RowStack 
                    sx={{
                            backgroundColor: "rgba(223, 215, 246, 0.40)",
                            padding: "8px" ,
                            gap: "4px",
                            borderRadius: "6px",
                            marginLeft: "auto"
                        }}
                    >
                        <Typography 
                            sx={{
                                fontSize: pxToRem(14), 
                                fontWeight: 600, 
                                color: "#582FD0",
                                fontFeatureSettings: "'liga' off, 'clig' off",
                                lineHeight: "20px",
                                letterSpacing: "0.25"
                            }}
                        >
                            Today
                        </Typography>

                        <StyledImage src={arrowDdownicon} alt=""
                            sx={{width: "24px", height: "24px"}}
                        />
                    </RowStack>
            </RowStack> 
            <RowStack >
                <StyledImage
                    src={ChartLeftFigure}
                    alt=""
                    sx={{
                        position: "relative",
                        top: "-12px",
                    }}
                />
                <StyledImage
                    src={ChartImage}
                    alt=""
                    sx={{flex: 1, position: "relative", right: "10px"}}
                />
            </RowStack>
        </Box>
    )
}