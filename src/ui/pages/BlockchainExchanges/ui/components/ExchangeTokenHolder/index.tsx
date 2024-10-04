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
import { pxToRem } from "@web-insight/component-library";
import ExchangeHolderData from "@/ui/blockchain.json";

export const ExchangeTokenHolder = () => {
    return (
        <Stack
            spacing={"12px"}
            sx={{
                padding: "20px 12px",
                margin: "20px 0 30px 0",
                border: "0.8px solid #D7D8DC",
                borderRadius: "10px",
            }}
        >
            <Typography
                sx={{
                    color: "#000",
                    fontSize: pxToRem(20),
                    fontWeight: 600,
                    lineHeight: "26px",
                    letterSpacing: "-0.1px",
                }}
            >
                Exchange Token holders
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
                                Address
                            </TableCell>

                            <TableCell
                                sx={{
                                    fontSize: pxToRem(16),
                                    fontWeight: 700,
                                    padding: "8px 12px",
                                }}
                            >
                                Amount of token held
                            </TableCell>

                            <TableCell
                                sx={{
                                    fontSize: pxToRem(16),
                                    fontWeight: 700,
                                    padding: "8px 12px",
                                }}
                            >
                                Percentage of Supply
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {ExchangeHolderData.scrollTokenHolder.map((holders, index) => {
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
                                        {holders.TokenAddress}
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
                                        {holders.TokenAmount}
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
                                        {holders.SupplyPercentages}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
    );
};
