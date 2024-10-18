import { Stack, Typography ,Button} from "@mui/material"
import { pxToRem } from "@web-insight/component-library"
import Link from "next/link"

export const LinkSignIn = () => {
    return(
        <Stack spacing={"20px"}
            sx={{
                position: "absolute",
                right: "8%",
                bottom: "20%"
            }}
        >
            <Typography
                sx={{
                    color: "#101928",
                    textAlign: "center",
                    fontSize: pxToRem(24),
                    fontWeight: 500,
                    lineHeight: "150%"
                }}
            >
                Kindly sign in to <br /> view all result
            </Typography>

            <Link href={"login"} passHref style={{textDecoration: "none"}}>    
                <Button
                    sx={{
                        border: "1px solid #76A8ED",
                        background: "linear-gradient(90deg, #67B4EE 0%, #AC7DEA 100%)",
                        borderRadius: "12px",
                        display: "flex",
                        padding: "12px 43.5px 12px 42.5px",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "0 auto"
                    }}
                >
                    <Typography
                        sx={{
                            color: "#fff",
                            fontFamily: "Poppins",
                            fontSize: pxToRem(16),
                            fontWeight: 500,
                        }}
                    >
                        Sign IN
                    </Typography>
                </Button>
            </Link>
        </Stack>
    )
}