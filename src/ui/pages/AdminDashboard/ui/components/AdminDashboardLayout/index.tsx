import { Box } from "@mui/material";
import { UserCountries } from "../UserContries";
import { UserStatistics } from "@/ui/pages/AdminDashboard/ui/components/UserGeographyMap/components";

export const AdminDashboardLayout = () => {
  return (
    <Box
      sx={{
        padding: "36px 33px 36px 15px",
        width: { lg: "60%" },
        gap: "42px",
        // border: "1px solid #E4E4E7",
        borderRadius: "10px",
      }}
    >
      {/*<UsersGeography />*/}
      <UserStatistics />

      <Box
        sx={{
          mt: "45px",
        }}
      >
        <UserCountries />
      </Box>
    </Box>
  );
};
