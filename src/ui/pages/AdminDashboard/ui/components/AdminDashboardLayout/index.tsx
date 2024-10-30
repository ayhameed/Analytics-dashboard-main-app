import { Box } from "@mui/material";
import { UserCountries } from "../UserContries";
import { UsersGeography } from "../UserGeographyMap";

export const AdminDashboardLayout = () => {
  return (
    <Box
      sx={{
        padding: "36px 33px 36px 15px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "42px",
        border: "1px solid #E4E4E7",
        borderRadius: "10px",
      }}
    >
      <UsersGeography />
      <UserCountries />
    </Box>
  );
};
