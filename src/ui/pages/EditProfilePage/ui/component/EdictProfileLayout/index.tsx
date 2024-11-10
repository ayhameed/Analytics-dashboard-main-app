import { Box } from "@mui/material";
import { UserPage } from "@/ui/pages/UserPage";
import { EditProfile } from "../EditProfile";

export const EditProfileLayout = () => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          bgcolor: "rgba(101, 101, 101, 0.18)",
          backdropFilter: "blur(5.699999809265137px)",
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: 1000,
        }}
      />
      <UserPage />
      <EditProfile />
    </Box>
  );
};
