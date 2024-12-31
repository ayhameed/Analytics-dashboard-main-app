import { Box } from "@mui/material";
import { UserSearchHistory } from "../UserSearchHistory";
import { UserProfile } from "../UsersProfile";

export const UserLayout = () => {
  return (
    <Box sx={{ paddingRight: {xs: "0",md: "52px"} }}>
      <UserProfile />
      <UserSearchHistory />
    </Box>
  );
};
