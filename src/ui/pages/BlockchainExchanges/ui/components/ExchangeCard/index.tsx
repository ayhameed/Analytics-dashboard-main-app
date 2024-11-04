import { Box, Stack, Typography } from "@mui/material";
import { pxToRem, RowStack, StyledImage } from "@web-insight/component-library";
import scrollImg from "@/ui/assets/icons/image 12.svg";

export const ExchangeCard = () => {
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
        <StyledImage src={scrollImg} alt="" sx={{ width: "25.794px", height: "25.304px" }} />

        <Typography
          sx={{
            fontSize: pxToRem(20),
            fontWeight: 500,
            lineHeight: "32px",
            marginLeft: "5px",
            color: (theme) => theme.tokenDetails.card.text.primary,
          }}
        >
          Scroll
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
          Tvl <br />
          <Box component="span">$11,206,723,561.82</Box>
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
          <Box component="span">$11,206,723,561.82</Box>
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
          <Box component="span">$11,206,723,561.82</Box>
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
          <Box component="span">$11,206,723,561.82</Box>
        </Typography>
      </RowStack>
    </Stack>
  );
};
