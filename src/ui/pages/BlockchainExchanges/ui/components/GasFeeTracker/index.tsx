import { Box, Menu, MenuItem, Stack, Typography } from "@mui/material";
import { pxToRem, RowStack, StyledImage } from "@web-insight/component-library";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import cloudIcon from "../asset/icon/cloud-download (1).svg";
import arrowdownicon from "../asset/icon/arrow-down-01.svg";
import arrowDownLight from "../asset/icon/arrow_down_light.svg";
import { useApplicationTheme, useCryptoApi } from "@/common";
import GasFeeGraph from "@/ui/pages/BlockchainExchanges/ui/components/GasFeeTracker/component";

export type TimeSpanType = "24h" | "7d" | "30d" | "1Y";

interface TimeSpanOption {
  value: TimeSpanType;
  label: string;
}

interface TimeSpanDropdownProps {
  timeSpan: TimeSpanType;
  setTimeSpan: (value: TimeSpanType) => void;
  isDarkMode: boolean;
}

const timeSpanOptions: TimeSpanOption[] = [
  { value: "24h", label: "Today" },
  { value: "7d", label: "Past Week" },
  { value: "30d", label: "Month" },
  { value: "1Y", label: "Year" },
];

export const TimeSpanDropdown: React.FC<TimeSpanDropdownProps> = ({
  timeSpan,
  setTimeSpan,
  isDarkMode,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const handleSelect = (value: TimeSpanType): void => {
    setTimeSpan(value);
    handleClose();
  };

  return (
    <>
      <RowStack
        onClick={handleClick}
        sx={{
          backgroundColor: "rgba(223, 215, 246, 0.40)",
          padding: "8px",
          gap: "4px",
          borderRadius: "6px",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <Typography
          sx={{
            fontSize: pxToRem(14),
            fontWeight: 600,
            color: "#582FD0",
            fontFeatureSettings: "'liga' off, 'clig' off",
            lineHeight: "20px",
            letterSpacing: "0.25",
          }}
        >
          {timeSpanOptions.find((option) => option.value === timeSpan)?.label}
        </Typography>

        <StyledImage
          src={isDarkMode ? arrowDownLight : arrowdownicon}
          alt="dropdown arrow"
          sx={{
            width: "24px",
            height: "24px",
            transform: open ? "rotate(180deg)" : "none",
            transition: "transform 0.2s",
          }}
        />
      </RowStack>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "time-span-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {timeSpanOptions.map((option) => (
          <MenuItem
            key={option.value}
            onClick={() => handleSelect(option.value)}
            selected={timeSpan === option.value}
            sx={{
              fontSize: pxToRem(14),
              fontWeight: timeSpan === option.value ? 600 : 400,
              color: timeSpan === option.value ? "#582FD0" : "inherit",
              "&:hover": {
                backgroundColor: "rgba(223, 215, 246, 0.40)",
              },
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

type TimeSpan = "24h" | "7d" | "30d" | "1Y";

export const GasFeeTracker = () => {
  const { isDarkMode } = useApplicationTheme();
  const params = useParams();
  const tokenId = Number(params.id);
  const [timeSpan, setTimeSpan] = useState<TimeSpan>("7d");
  const [feeData, setFeeData] = useState(null);
  const { getTokenFeeTracker } = useCryptoApi();

  useEffect(() => {
    const fetchData = async () => {
      if (!tokenId) return;
      const data = await getTokenFeeTracker(tokenId, timeSpan);
      if (data) {
        // @ts-ignore
        setFeeData(data);
      }
    };
    fetchData();
  }, [tokenId, timeSpan, getTokenFeeTracker]);

  return (
    <Stack
      spacing={"12px"}
      sx={{
        padding: "20px 15px 20px 12px",
        margin: "20px 0 10px 0",
        borderRadius: "10px",
        border: (theme) => `0.8px solid ${theme.tokenDetails.gasFeesTracker.border}`,
        backgroundColor: (theme) => theme.tokenDetails.gasFeesTracker.background,
      }}
    >
      <Typography
        sx={{
          color: (theme) => theme.tokenDetails.gasFeesTracker.primary,
          fontSize: pxToRem(20),
          fontWeight: 600,
          lineHeight: "26px",
          letterSpacing: "-0.1px",
        }}
      >
        Gas Fees Tracker
      </Typography>

      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "4px 0",
            marginBottom: "10px",
          }}
        >
          <RowStack
            sx={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              padding: "12px",
            }}
          >
            <Typography
              sx={{
                fontSize: pxToRem(12),
                fontWeight: 400,
                color: (theme) => theme.tokenDetails.gasFeesTracker.PNGcolor,
                marginRight: "10px",
              }}
            >
              Download PNG
            </Typography>

            <StyledImage src={cloudIcon} alt="" sx={{ width: "24px", height: "24px" }} />
          </RowStack>

          <TimeSpanDropdown timeSpan={timeSpan} setTimeSpan={setTimeSpan} isDarkMode={isDarkMode} />
        </Box>

        <Box sx={{ width: "100%" }}>
          <GasFeeGraph data={feeData} />
        </Box>

        <RowStack sx={{ justifyContent: "center" }}>
          <Box
            sx={{
              width: "22px",
              height: "12px",
              backgroundColor: "#22DDD4",
            }}
          />
          <Typography
            sx={{
              fontSize: pxToRem(14),
              fontWeight: 700,
              marginLeft: "5px",
            }}
          >
            Base Fee
          </Typography>

          <Box
            sx={{
              width: "22px",
              height: "12px",
              backgroundColor: "#0E5855",
              margin: "0 5px 0 22px",
            }}
          />
          <Typography
            sx={{
              fontSize: pxToRem(14),
              fontWeight: 700,
            }}
          >
            Priority Fee
          </Typography>
        </RowStack>
      </Box>
    </Stack>
  );
};
