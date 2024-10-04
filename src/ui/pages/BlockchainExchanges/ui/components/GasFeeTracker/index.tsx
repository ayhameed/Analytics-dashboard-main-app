import { Box, Stack , Typography} from "@mui/material";
import { pxToRem,RowStack, StyledImage } from "@web-insight/component-library";
import cloudIcon from "../asset/icon/cloud-download (1).svg";
import histograph from "../asset/image/Frame 48095650.svg"
import arrowDdownicon from "../asset/icon/arrow-down-01.svg"


export const GasFeeTracker = () => {
    return(
        <Stack spacing={"12px"}
            sx={{
                padding: "20px 15px 20px 12px",
                margin: "20px 0 10px 0",
                borderRadius: "10px",
                border: "0.8px solid #D7D8DC"
            }}
        >
            <Typography
                sx={{
                    color: "#000",
                    fontSize: pxToRem(20),
                    fontWeight: 600,
                    lineHeight: "26px",
                    letterSpacing: "-0.1px"
                }}
            >
                Gas Fees Tracker
            </Typography>

            <Box>
                <Box 
                    sx={{
                        display: "flex", 
                        justifyContent: "space-between",
                        padding:"4px 0"
                    }}
                >
                    <RowStack sx={{}}>
                        <Typography 
                            sx={{
                                //fontFamily: "Inter",
                                fontSize: pxToRem(12), 
                                fontWeight: 400, 
                                color: "#737373",
                                marginRight: "10px"
                            }}
                        >
                            Download PNG
                        </Typography>

                        <StyledImage src={cloudIcon} alt=""
                            sx={{width: "24px", height: "24px"}}
                        />
                    </RowStack>

                    <RowStack 
                        sx={{
                            backgroundColor: "rgba(223, 215, 246, 0.40)",
                            padding: "8px" ,
                            gap: "4px",
                            borderRadius: "6px"
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
                </Box>

                <Box sx={{padding: "0 9px 25px 15px"}}>
                    <StyledImage src={histograph} alt=""
                        sx={{width: "100%"}}
                    />
                </Box>

                <RowStack sx={{justifyContent: "center"}}>
                    <Box 
                        sx={{
                            width: "22px", 
                            height: "12px", 
                            backgroundColor: "#22DDD4"
                        }}
                    />
                    <Typography
                    sx={{
                        //fontFamily: "Lato", 
                        fontSize: pxToRem(14),
                        fontWeight: 700,
                        marginLeft: "5px"
                    }}
                    >
                        Base Fee
                    </Typography>

                    <Box 
                        sx={{
                            width: "22px", 
                            height: "12px", 
                            backgroundColor: "#0E5855",
                            margin: "0 5px 0 22px"
                        }}
                    />
                    <Typography
                    sx={{
                        //fontFamily: "Lato",
                        fontSize: pxToRem(14),
                        fontWeight: 700
                    }}
                    >
                        Priority Fee
                    </Typography>
                </RowStack>
            </Box>
        </Stack>
    )
}