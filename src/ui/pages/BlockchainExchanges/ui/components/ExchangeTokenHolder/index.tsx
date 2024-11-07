import {
  Stack,
  TableContainer,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Table,
  Paper,
  Typography,
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
        border: (theme) => `0.8px solid ${theme.tokenDetails.stakingPool.border}`,
        borderRadius: "10px",
        backgroundColor: (theme) => theme.tokenDetails.stakingPool.background,
      }}
    >
      <Typography
        sx={{
          color: (theme) => theme.tokenDetails.stakingPool.text.secondary,
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
      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
        <Table sx={{ borderCollapse: "separate", border: "none" }}>
          <TableHead
            sx={{
              padding: 0,
              backgroundColor: (theme) => theme.tokenDetails.stakingPool.tableBackground.tHead,
              width: "100%",
            }}
          >
            <TableRow>
              <TableCell
                sx={{
                  fontSize: pxToRem(16),
                  fontWeight: 700,
                  padding: "12px",
                }}
              >
                Address
              </TableCell>

              <TableCell
                sx={{
                  fontSize: pxToRem(16),
                  fontWeight: 700,
                  padding: "12px",
                }}
              >
                Amount of token held
              </TableCell>

              <TableCell
                sx={{
                  fontSize: pxToRem(16),
                  fontWeight: 700,
                  padding: "12px",
                }}
              >
                Percentage of Supply
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell
                colSpan={3}
                sx={{
                  backgroundColor: "transparent",
                  border: "none",
                  height: "10px",
                  padding: 0,
                }}
              />
            </TableRow>
            {ExchangeHolderData.scrollTokenHolder.map((holders, index) => {
              const isWhiteBackground = index % 2 === 0;
              return (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor: (theme) =>
                      index % 2 === 0
                        ? theme.tokenDetails.stakingPool.tableBackground.primary
                        : theme.tokenDetails.stakingPool.tableBackground.secondary,
                  }}
                >
                  <TableCell
                    sx={{
                      fontSize: pxToRem(16),
                      fontWeight: 400,
                      color: (theme) => theme.tokenDetails.stakingPool.text.primary,
                      padding: isWhiteBackground ? "8px 12px" : "14px",
                      border: "none",
                    }}
                  >
                    {holders.TokenAddress}
                  </TableCell>

                  <TableCell
                    sx={{
                      fontSize: pxToRem(16),
                      fontWeight: 400,
                      color: (theme) => theme.tokenDetails.stakingPool.text.primary,
                      padding: isWhiteBackground ? "8px 12px" : "14px",
                      border: "none",
                    }}
                  >
                    {holders.TokenAmount}
                  </TableCell>

                  <TableCell
                    sx={{
                      fontSize: pxToRem(16),
                      fontWeight: 400,
                      textAlign: "center",
                      color: (theme) => theme.tokenDetails.stakingPool.text.primary,
                      padding: isWhiteBackground ? "8px 12px" : "14px",
                      border: "none",
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
