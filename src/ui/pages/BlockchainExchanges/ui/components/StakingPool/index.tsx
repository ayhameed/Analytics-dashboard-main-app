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
import stakePoolData from "@/ui/blockchain.json";

export const StakingPool = () => {
  return (
    <Stack
      spacing={"12px"}
      sx={{
        padding: "20px 12px",
        marginTop: "30px",
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
        Staking Pool
      </Typography>

      {/* the whole of the table makes use of fontFamily: 
            Lato.their size nd width have been  implemented already*/}
      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
        <Table sx={{ borderCollapse: "separate", border: "none" }}>
          <TableHead
            sx={{
              padding: "20px",
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
                  border: "none",
                }}
              >
                Validator
              </TableCell>

              <TableCell
                sx={{
                  fontSize: pxToRem(16),
                  fontWeight: 700,
                  padding: "12px",
                  border: "none",
                }}
              >
                Annual Yield
              </TableCell>

              <TableCell
                sx={{
                  fontSize: pxToRem(16),
                  fontWeight: 700,
                  padding: "12px",
                  border: "none",
                }}
              >
                Total Staked Value
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
            {stakePoolData.stakingPool.map((stakeData, index) => {
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
                    {stakeData.validator}
                  </TableCell>

                  <TableCell
                    sx={{
                      fontSize: pxToRem(16),
                      fontWeight: 400,
                      color: (theme) => theme.tokenDetails.stakingPool.text.primary,
                      textAlign: "center",
                      padding: isWhiteBackground ? "8px 12px" : "14px",
                      border: "none",
                    }}
                  >
                    {stakeData.AnnualYeid}
                  </TableCell>

                  <TableCell
                    sx={{
                      fontSize: pxToRem(16),
                      fontWeight: 400,
                      color: (theme) => theme.tokenDetails.stakingPool.text.primary,
                      textAlign: "center",
                      padding: isWhiteBackground ? "8px 12px" : "14px",
                      border: "none",
                    }}
                  >
                    {stakeData.ToTalStakedValue}
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
