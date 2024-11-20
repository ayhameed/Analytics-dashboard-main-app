import { Box, Stack, Typography } from "@mui/material";
import { pxToRem, RowStack, StyledImage } from "@web-insight/component-library";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useCryptoApi } from "@/common";

interface TokenDetailsData {
  id: number;
  name: string;
  symbol: string;
  logo: string;
  tvl: number;
  market_cap: number;
  fdv: string;
  volume_24h: number;
}

const formatNumber = (num: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num);
};

export const ExchangeCard = () => {
  const params = useParams();
  const tokenId = Number(params.id);
  const { getTokenDetails } = useCryptoApi();
  const [tokenData, setTokenData] = useState<TokenDetailsData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!tokenId) return;
      const data = await getTokenDetails(tokenId);
      if (data) setTokenData(data);
    };
    fetchData();
  }, [getTokenDetails, tokenId]);

  if (!tokenData) return null;

  return (
    <Stack
      spacing={"24px"}
      sx={{
        padding: "20px",
        borderRadius: "12px",
        border: (theme) => `1px solid ${theme.tokenDetails.card.border}`,
        backgroundColor: (theme) => theme.tokenDetails.card.background,
      }}
    >
      <RowStack>
        <StyledImage
          src={tokenData.logo}
          alt={tokenData.name}
          sx={{ width: "25.794px", height: "25.304px" }}
        />
        <Typography
          sx={{
            fontSize: pxToRem(20),
            fontWeight: 500,
            lineHeight: "32px",
            marginLeft: "5px",
            color: (theme) => theme.tokenDetails.card.text.primary,
          }}
        >
          {tokenData.name}
        </Typography>
      </RowStack>
      <RowStack>
        <Typography
          sx={{
            color: (theme) => theme.tokenDetails.card.text.secondary,
            fontFeatureSettings: "'cv03' on, 'cv04' on",
            fontSize: pxToRem(16),
            fontWeight: 500,
            lineHeight: "26px",
            letterSpacing: "-0.08px",
          }}
        >
          TVL <br />
          <Box component="span">{formatNumber(tokenData.tvl)}</Box>
        </Typography>

        <Typography
          sx={{
            color: (theme) => theme.tokenDetails.card.text.secondary,
            fontFeatureSettings: "'cv03' on, 'cv04' on",
            fontSize: pxToRem(16),
            fontWeight: 500,
            lineHeight: "26px",
            letterSpacing: "-0.08px",
            marginLeft: "auto",
          }}
        >
          Market cap <br />
          <Box component="span">{formatNumber(tokenData.market_cap)}</Box>
        </Typography>

        <Typography
          sx={{
            color: (theme) => theme.tokenDetails.card.text.secondary,
            fontFeatureSettings: "'cv03' on, 'cv04' on",
            fontSize: pxToRem(16),
            fontWeight: 500,
            lineHeight: "26px",
            letterSpacing: "-0.08px",
            marginLeft: "auto",
          }}
        >
          FDV <br />
          <Box component="span">${tokenData.fdv}</Box>
        </Typography>

        <Typography
          sx={{
            color: (theme) => theme.tokenDetails.card.text.secondary,
            fontFeatureSettings: "'cv03' on, 'cv04' on",
            fontSize: pxToRem(16),
            fontWeight: 500,
            lineHeight: "26px",
            letterSpacing: "-0.08px",
            marginLeft: "auto",
          }}
        >
          1 day volume <br />
          <Box component="span">{formatNumber(tokenData.volume_24h)}</Box>
        </Typography>
      </RowStack>
    </Stack>
  );
};
