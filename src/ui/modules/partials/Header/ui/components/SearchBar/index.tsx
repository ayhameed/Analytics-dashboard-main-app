"use client";

import { IconButton, Input, InputAdornment } from "@mui/material";
import { pxToRem } from "@web-insight/component-library";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSearch } from "@/common";

export const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useSearch();
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
  const router = useRouter();

  const handleSearch = () => {
    setSearchTerm(localSearchTerm);
    router.push(`/search?q=${encodeURIComponent(localSearchTerm)}`);
  };

  return (
    <Input
      value={localSearchTerm}
      placeholder="Search web3insights"
      type="search"
      fullWidth
      size="small"
      disableUnderline
      onChange={(e) => {
        setLocalSearchTerm(e.target.value);
      }}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          handleSearch();
        }
      }}
      sx={{
        position: {xs:"absolute", md: "static"},
        top: {xs:"90px", md: "auto"},
        left: {xs:"50%", md: "auto"},
        transform:{xs: "translate(-50%, 0)", md: "translate(0, 0)"},
        width: {xs:"50%", md: "100%"},
        flex: {xs: 0 ,md: "0 0 45%"},
        padding: "8px 12px 11px 16px",
        borderRadius: "12px",
        border: (theme) => `1px solid ${theme.navBar.search.border}`,
        fontSize: pxToRem(16),
        fontWeight: 500,
        lineHeight: "24px",
        color: (theme) => theme.navBar.search.color,
        backgroundColor: (theme) => theme.navBar.search.background,
      }}
      inputProps={{
        style: { padding: 0 },
        sx: { "::placeholder": { color: "inherit", opacity: 1 } },
      }}
      endAdornment={
        <InputAdornment
          position="end"
          sx={{
            width: "32px",
            height: "29px",
            background: (theme) => theme.navBar.search.endAdornment.background,
            padding: "9px 0",
            borderRadius: "6px",
          }}
        >
          <IconButton
            edge="end"
            onClick={handleSearch}
            sx={{
              color: "#475367",
              width: "8px",
              margin: "0 auto",
            }}
          >
            /
          </IconButton>
        </InputAdornment>
      }
    />
  );
};
