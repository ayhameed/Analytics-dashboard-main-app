import { useEffect, useState } from "react";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { pxToRem, RowStack, StyledImage } from "@web-insight/component-library";
import ScrollImg from "@/ui/assets/icons/image 12.svg";
import { ApiBlockchainData, useApplicationTheme, useCryptoApi } from "@/common";
import { usePathname, useRouter } from "next/navigation";

import starDarkIcon from "./ui/assets/icons/star_dark.svg";
import starIcon from "./ui/assets/icons/star.svg";
import supplyDarkIcon from "./ui/assets/icons/shell_fish_dark.svg";
import supplyIcon from "./ui/assets/icons/shell_fish.svg";

export const BlockchainCurrencies = () => {
  const router = useRouter();
  const path = usePathname();
  const { isDarkMode } = useApplicationTheme();
  const { getTopTokens } = useCryptoApi();

  const pathName = path.replace("/", "") === "" ? "token" : path.replace("/", "");

  const [cryptoData, setCryptoData] = useState<ApiBlockchainData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTopTokens = async () => {
      const data = await getTopTokens(pathName);

      if (data) {
        // @ts-ignore
        setCryptoData(data);
      }
      setLoading(false);
    };

    fetchTopTokens();
  }, [getTopTokens]);

  const handleTokenClick = (tokenId: string | number) => {
    router.push(`/blockchain/${tokenId}`);
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Box
      sx={{
        margin: { xs: "18px", sm: "30px 0 0 0" },
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
        gap: "20px",
      }}
    >
      {cryptoData &&
        cryptoData.map((data) => (
          <Box
            key={data.id}
            onClick={() => handleTokenClick(data.id)}
            sx={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "61px",
              borderRadius: "12px",
              border: (theme) => `1px solid ${theme.dashboard.blockchain.border}`,
              cursor: "pointer",
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              },
            }}
          >
            <Stack>
              <RowStack marginBottom={1}>
                <StyledImage
                  src={data.logo || ScrollImg}
                  alt={data.name}
                  sx={{
                    width: "25.794px",
                    height: "25.304px",
                    marginRight: "8px",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: pxToRem(20), md: pxToRem(18), xl: pxToRem(20) },
                    fontWeight: 500,
                    lineHeight: "32px",
                    color: (theme) => theme.dashboard.blockchain.text.primary,
                  }}
                >
                  {data.name}
                </Typography>
              </RowStack>

              <Typography
                sx={{
                  color: (theme) => theme.dashboard.blockchain.text.secondary,
                  fontSize: { xs: pxToRem(16), md: pxToRem(15), xl: pxToRem(16) },
                  fontWeight: 500,
                  lineHeight: "26px",
                  letterSpacing: "-0.08px",
                  fontFeatureSettings: "cv03 on, cv04 on",
                }}
              >
                ${typeof data.tvl === "number" ? data.tvl.toLocaleString() : "N/A"} TVL
              </Typography>
            </Stack>

            <RowStack>
              <RowStack>
                <StyledImage
                  src={!isDarkMode ? starIcon : starDarkIcon}
                  alt="Star Icon"
                  sx={{ width: "24px", height: "24px", marginRight: "8px" }}
                />

                <Typography
                  sx={{
                    color: (theme) => theme.dashboard.blockchain.text.secondary,
                    fontSize: { xs: pxToRem(14), xl: pxToRem(16) },
                    fontWeight: 500,
                    lineHeight: "26px",
                    letterSpacing: "-0.08px",
                    fontFeatureSettings: "cv03 on, cv04 on",
                  }}
                >
                  {data.circulating_supply.toLocaleString()}
                </Typography>
              </RowStack>

              <RowStack>
                <StyledImage
                  src={isDarkMode ? supplyDarkIcon : supplyIcon}
                  alt="Supply Icon"
                  sx={{ width: "24px", height: "24px", margin: "0 8px" }}
                />

                <Typography
                  sx={{
                    color: (theme) => theme.dashboard.blockchain.text.secondary,
                    fontSize: { xs: pxToRem(14), xl: pxToRem(16) },
                    fontWeight: 500,
                    lineHeight: "26px",
                    letterSpacing: "-0.08px",
                    fontFeatureSettings: "cv03 on, cv04 on",
                  }}
                >
                  ${data.market_cap.toLocaleString()}
                </Typography>
              </RowStack>
            </RowStack>
          </Box>
        ))}
    </Box>
  );
};
