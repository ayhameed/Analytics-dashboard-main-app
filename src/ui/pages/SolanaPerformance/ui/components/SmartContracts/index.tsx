"use client"
import { pxToRem } from "@web-insight/component-library";
import SmartContractData from "@/ui/blockchain.json"
import { 
    Stack, 
    TableContainer,
    TableBody, 
    TableHead,
    TableRow,
    TableCell,
    Table,
    Paper,
    Typography
} from "@mui/material";

export const SmartContracts = () => {
    return(
        <Stack
            sx={{
                gridColumn: "span 3",
                gridRow: "1/2",
                borderRadius: "10px",
                border: "0.8px solid #D7D8DC",
                backgroundColor: "#fff",
                margin: "0 39px 15px 16px",
                padding: "20px 12px"
            }}
        >
           <Typography
                sx={{
                    color: "#000",
                    fontSize: pxToRem(20),
                    fontWeight: 600,
                    lineHeight: "26px",
                    letterSpacing: "-0.1px",
                    marginBottom: "20px"
                }}
            >
                Smart Contracts
            </Typography>

            {/* the whole of the table makes use of fontFamily: 
            Lato.their size nd width have been  implemented already*/}
            <TableContainer component={Paper}>
                <Table sx={{ borderCollapse: "separate"}}>
                    <TableHead
                        sx={{
                            padding: 0,
                            backgroundColor: "#F2EEFB",
                            width: "100%",
                        }}
                    >
                        <TableRow>
                            <TableCell
                                sx={{
                                    fontSize: pxToRem(16),
                                    fontWeight: 700,
                                    padding: "8px 12px",
                                }}
                            >
                                Token
                            </TableCell>

                            <TableCell
                                sx={{
                                    fontSize: pxToRem(16),
                                    fontWeight: 700,
                                    padding: "8px 12px",
                                }}
                            >
                                Contract Address
                            </TableCell>

                            <TableCell
                                sx={{
                                    fontSize: pxToRem(16),
                                    fontWeight: 700,
                                    padding: "8px 12px",
                                }}
                            >
                                Interactions
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {SmartContractData.SmartContracts.map((Contracts, index) => {
                            const isWhiteBackground = index % 2 === 0;
                            return (
                                <TableRow
                                    key={index}
                                    sx={{
                                        backgroundColor: isWhiteBackground ? "#ffffff" : "#F9FAFB",
                                    }}
                                >
                                    <TableCell
                                        sx={{
                                            fontSize: pxToRem(16),
                                            fontWeight: 400,
                                            color: "#606060",
                                            padding: isWhiteBackground ? "12px" : "8px 12px"
                                        }}
                                    >
                                        {Contracts.Token}
                                    </TableCell>

                                    <TableCell
                                        sx={{
                                            fontSize: pxToRem(16),
                                            fontWeight: 400,
                                            color: "#606060",
                                            textAlign: "center",
                                            padding: isWhiteBackground ? "12px" : "8px 12px"
                                        }}
                                    >
                                        {Contracts["Contract Address"]}
                                    </TableCell>

                                    <TableCell
                                        sx={{
                                            fontSize: pxToRem(16),
                                            fontWeight: 400,
                                            color: "#606060",
                                            textAlign: "center",
                                            padding: isWhiteBackground ? "12px" : "8px 12px"
                                        }}
                                    >
                                        {Contracts.Interactions}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
    )
}