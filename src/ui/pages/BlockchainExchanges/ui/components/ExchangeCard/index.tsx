import { Box,Stack,Typography } from "@mui/material";
import { pxToRem, RowStack, StyledImage} from "@web-insight/component-library";
import scrollImg from "@/ui/assets/icons/image 12.svg"

export const ExchangeCard = () => {
    return(
        <Stack spacing={"24px"} 
            sx={{
                padding: "20px",
                borderRadius: "12px",
                border: "1px solid rgba(228, 231, 236, 0.50)" ,
                backgroundColor: "#F9F9F9"
            }}
        >
            <RowStack>
                <StyledImage src={scrollImg} alt=""
                    sx={{width: "25.794px", height: "25.304px"}}
                />

                <Typography
                   sx={{
                    fontSize: pxToRem(20),
                    fontWeight: 500,
                    lineHeight: "32px",
                    marginLeft: "5px",
                    color: "#101928"
                   }} 
                >
                    Scroll
                </Typography>
            </RowStack>
            <RowStack>
                <Typography
                    sx={{
                        color: "#344054",
                        fontFeatureSettings: "'cv03' on, 'cv04' on",
                        fontSize: pxToRem(16),
                        fontWeight: 500,
                        lineHeight: "26px",
                        letterSpacing: "-0.08px"
                    }}
                >
                    Tvl <br />
                    <Typography component="span">
                        $11,206,723,561.82 
                    </Typography>
                </Typography>

                <Typography
                    sx={{
                        color: "#344054",
                        fontFeatureSettings: "'cv03' on, 'cv04' on",
                        fontSize: pxToRem(16),
                        fontWeight: 500,
                        lineHeight: "26px",
                        letterSpacing: "-0.08px",
                        marginLeft: "auto"
                    }}
                >
                    Market cap <br />
                    <Typography component="span">
                        $11,206,723,561.82 
                    </Typography>
                </Typography>

                <Typography
                    sx={{
                        color: "#344054",
                        fontFeatureSettings: "'cv03' on, 'cv04' on",
                        fontSize: pxToRem(16),
                        fontWeight: 500,
                        lineHeight: "26px",
                        letterSpacing: "-0.08px",
                        marginLeft: "auto"
                    }}
                >
                    FDV <br />
                    <Typography component="span">
                        $11,206,723,561.82 
                    </Typography>
                </Typography>

                <Typography
                    sx={{
                        color: "#344054",
                        fontFeatureSettings: "'cv03' on, 'cv04' on",
                        fontSize: pxToRem(16),
                        fontWeight: 500,
                        lineHeight: "26px",
                        letterSpacing: "-0.08px",
                        marginLeft: "auto"
                    }}
                >
                    1 day volume <br />
                    <Typography component="span">
                        $11,206,723,561.82 
                    </Typography>
                </Typography>
            </RowStack>
        </Stack>
    )
}