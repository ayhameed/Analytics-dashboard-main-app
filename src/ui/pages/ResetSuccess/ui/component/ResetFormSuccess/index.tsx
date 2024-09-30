"use client"
import { Stack ,Box, Typography} from "@mui/material"
import { pxToRem, StyledImage } from "@web-insight/component-library"
import EnvelopeIcon from '../../assets/envelope with notification.svg'

export const Success = () => {
    return(
        <Stack 
            sx={{
                display:"flex",
                flexDirection: "column",
                alignItems:"center",
                gap: "25px"
            }}
        >
            <Box>
                <StyledImage src={EnvelopeIcon} alt=""
                    sx = {{width:"156px", height: "135px"}}
                />
            </Box>
            <Typography
                sx={{
                    color:"#3D434C",
                    textAlign: "center",
                    fontSize: pxToRem(32),
                    fontWeight: 500,
                    lineHeight: "150%"
                }}
            >
                Password has been changed successfully, Proceed to login
            </Typography>
        </Stack>
    )
}