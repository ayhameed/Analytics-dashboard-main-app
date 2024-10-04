import { Box, Stack } from "@mui/material";
import { pxToRem, RowStack, StyledImage } from "@web-insight/component-library";
import { ChartStyledTypography } from "./component/ChartStyledTypography"; // Import your new component
import chartImage from "./assets/image/Frame 48095589 (1).svg";

export const ExchangeChart = () => {
    return (
        <Stack
            spacing={"40px"}
            sx={{
                marginTop: "20px",
                padding: "20px 24px 0 24px",
                minWidth: "662px",
                borderRadius: "10px",
                border: "0.8px solid var(--Light-Divider-2, #D7D8DC)",
                overflow: "hidden"
            }}
        >
            <RowStack sx={{ justifyContent: "space-between" }}>
                <ChartStyledTypography
                    color="#28292D"
                    backgroundColor="transparent"
                >
                    Transaction volume
                </ChartStyledTypography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "10px",
                    }}
                >
                    <ChartStyledTypography color="#582FD0">Today</ChartStyledTypography>
                    <ChartStyledTypography>Past Week</ChartStyledTypography>
                    <ChartStyledTypography>Month</ChartStyledTypography>
                    <ChartStyledTypography>Year</ChartStyledTypography>
                </Box>
            </RowStack>

            <Box>
                <StyledImage src={chartImage} alt="" sx={{width:"100%"}}/>
            </Box>
        </Stack>
    );
};
