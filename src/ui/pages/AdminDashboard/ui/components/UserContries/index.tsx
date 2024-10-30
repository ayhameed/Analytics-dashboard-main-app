"use client";
import { useEffect, useState } from "react";
import { Box, CircularProgress, Stack, Typography, Button } from "@mui/material";
import { pxToRem, RowStack, StyledImage } from "@web-insight/component-library";
import UserCountryData from "@/ui/blockchain.json";
import type { StaticImageData } from "next/image";

import englandImg from "./assets/Images/england_rating.png";
import brazilImg from "./assets/Images/brazil_rating.png";
import cyprusImg from "./assets/Images/cyprus_rating (2).png";
import nigeriaImg from "./assets/Images/nigeria_rating.png";
import philipineImg from "./assets/Images/mid_rating.png";
import tanzanianImg from "./assets/Images/tanzanian_rating.jpg";

type TopCountryUser = {
  Country: string;
  Users: number;
};

// Mapping of country names to imported images
const countryImageMap: Record<string, string | StaticImageData> = {
  England: englandImg,
  Brazil: brazilImg,
  Cyprus: cyprusImg,
  Nigeria: nigeriaImg,
  Philipines: philipineImg,
  Tanzania: tanzanianImg,
};

export const UserCountries = () => {
  const [countryUsers, setCountryUsers] = useState<TopCountryUser[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Set data from the JSON file as initial state
      const data = UserCountryData.topCountryUser;
      setCountryUsers(data);
      setLoading(false);
    } catch (error) {
      setError("Failed to load country data");
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Box sx={{ gridColumn: "span 1" }} position={"relative"}>
      <RowStack justifyContent={"space-between"} marginBottom={"24px"}>
        <Typography
          sx={{
            fontSize: pxToRem(16),
            fontWeight: 600,
            color: "#828282",
            lineHeight: "21px",
          }}
        >
          Top Countries
        </Typography>

        <Typography
          sx={{
            fontSize: pxToRem(16),
            fontWeight: 600,
            color: "#828282",
            lineHeight: "21px",
          }}
        >
          Users
        </Typography>
      </RowStack>

      {countryUsers &&
        countryUsers.map((data) => (
          <Box key={data.Country} marginBottom={"12px"}>
            <Stack>
              <RowStack justifyContent={"space-between"} marginBottom={"10px"}>
                <Typography
                  sx={{
                    fontSize: pxToRem(14),
                    fontWeight: 500,
                    color: "#1E2025",
                    lineHeight: "18px",
                  }}
                >
                  {data.Country}
                </Typography>

                <Typography
                  sx={{
                    fontSize: pxToRem(14),
                    fontWeight: 500,
                    color: "#61656C",
                    lineHeight: "18px",
                  }}
                >
                  {data.Users}
                </Typography>
              </RowStack>
              <StyledImage
                src={countryImageMap[data.Country as keyof typeof countryImageMap]}
                alt={data.Country}
              />
            </Stack>
          </Box>
        ))}
      <Button
        sx={{
          border: "1px solid #000",
          borderRadius: "8px",
          padding: "8px 16px",
          position: "absolute",
          right: 0,
          marginTop: "24px"
        }}
      >
        <Typography
          sx={{
            color: "#475367",
            fontSize: pxToRem(14),
            fontWeight: 400,
          }}
        >
          View Country
        </Typography>
      </Button>
    </Box>
  );
};
