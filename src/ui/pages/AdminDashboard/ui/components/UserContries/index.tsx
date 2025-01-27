"use client";
import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { pxToRem, RowStack, StyledImage } from "@web-insight/component-library";
import { toast } from "react-toastify";

import { Country, useCryptoApi } from "@/common";

import exportIcon from "../../assets/icons/download.svg";
import dropdownIcon from "../../assets/icons/dropdown.svg";
import { AppDropdownMenu } from "@/ui/modules/components";

export const UserCountries = () => {
  const { getTopCountries, exportCountryData } = useCryptoApi();
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [countryUsers, setCountryUsers] = useState<Country[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options = ["30d", "7d", "6m", "12m"]; // Dropdown options

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTopCountries();
        setCountryUsers(data);
      } catch (error) {
        setError("Failed to load country data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [getTopCountries]);

  // Handle dropdown open
  const handleOpenDropdown = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(true);
  };

  // Handle dropdown close
  const handleCloseDropdown = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };

  // Handle export
  const handleExport = async (timeRange: string) => {
    if (!timeRange) return;
    try {
      await exportCountryData(timeRange); // Call the API function
    } catch (error) {
      toast.error("Failed to export country data");
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Box sx={{ gridColumn: "span 1" }} position="relative">
      <RowStack justifyContent="space-between" marginBottom="24px">
        <Typography
          sx={{
            fontSize: pxToRem(16),
            fontWeight: 600,
            lineHeight: "21px",
          }}
        >
          Top Countries
        </Typography>

        <Typography
          sx={{
            fontSize: pxToRem(16),
            fontWeight: 600,
            lineHeight: "21px",
          }}
        >
          Users
        </Typography>
      </RowStack>

      {countryUsers &&
        countryUsers.map((data) => (
          <Box key={data.country_name} marginBottom="12px">
            <Stack>
              <RowStack justifyContent="space-between" marginBottom="10px">
                <Typography
                  sx={{
                    fontSize: pxToRem(14),
                    fontWeight: 500,
                    lineHeight: "18px",
                  }}
                >
                  {data.country_name}
                </Typography>

                <Typography
                  sx={{
                    fontSize: pxToRem(14),
                    fontWeight: 500,
                    lineHeight: "18px",
                  }}
                >
                  {data.visitor_count}
                </Typography>
              </RowStack>

              <Box
                sx={{
                  width: "100%",
                  height: "10px",
                  overflow: "hidden",
                  borderRadius: "8px",
                  backgroundColor: "#D9D9D9",
                }}
              >
                <Box
                  sx={{
                    width: `${data.visitor_count}%`,
                    height: "100%",
                    bgcolor: "#AAB0EA",
                    transition: "width 0.3s ease-in-out",
                  }}
                />
              </Box>
            </Stack>
          </Box>
        ))}

      <RowStack justifyContent="center" width="100%" marginTop="55px">
        <RowStack
          spacing="12px"
          sx={{
            border: "1px solid #D4D4D8",
            borderRadius: "5px",
            padding: "8px 16px",
            marginTop: "24px",
            cursor: "pointer",
          }}
          onClick={handleOpenDropdown}
        >
          <StyledImage
            src={exportIcon}
            alt="export"
            sx={{
              width: "20px",
              height: "20px",
              objectFit: "cover",
              marginLeft: "10px",
            }}
          />

          <Typography
            sx={{
              fontSize: pxToRem(14),
              fontWeight: 400,
            }}
          >
            Export
          </Typography>

          <StyledImage
            src={dropdownIcon}
            alt="dropdown"
            sx={{
              width: "20px",
              height: "20px",
              marginLeft: "10px",
              transform: "rotate(180deg)",
              transition: "opacity 0.3s ease-in-out",
            }}
          />
        </RowStack>
      </RowStack>

      <AppDropdownMenu
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleCloseDropdown}
        options={options}
        onOptionSelected={(option) => {
          setSelectedOption(option);
          handleCloseDropdown();
          handleExport(option);
        }}
      />
    </Box>
  );
};
