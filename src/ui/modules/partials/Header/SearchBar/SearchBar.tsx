"use client";

import { InputAdornment, Input, IconButton } from "@mui/material";
import { pxToRem } from "@web-insight/component-library";
import { useRouter } from 'next/navigation';
import { useSearch } from "@/ui/pages/SearchContext";
import { useState } from 'react';

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
            placeholder="Search web inside"
            type="search"
            fullWidth
            size="small"
            disableUnderline
            onChange={(e) => {
                setLocalSearchTerm(e.target.value);
            }}
            onKeyPress={(e) => {
                if (e.key === 'Enter') {
                    handleSearch();
                }
            }}
            sx={{
                flex: '0 0 45%',
                padding: '8px 12px 11px 16px',
                borderRadius: '12px',
                border: '1px solid #E4E7EC',
                fontSize: pxToRem(16),
                fontWeight: 500,
                lineHeight: '24px',
                color: '#667185',
                backgroundColor: '#ffff'
            }}
            inputProps={{
                style: { padding: 0 },
                sx: { '::placeholder': { color: 'inherit', opacity: 1 } }
            }}
            endAdornment={
                <InputAdornment position="end"
                    sx={{
                        width: '32px',
                        height: '29px',
                        background: '#F7F9FC',
                        padding: '9px 0',
                        borderRadius: '6px'
                    }}
                >
                    <IconButton
                        edge="end"
                        onClick={handleSearch}
                        sx={{
                            color: '#475367',
                            width: '8px',
                            margin: '0 auto'
                        }}
                    >
                        /
                    </IconButton>
                </InputAdornment>
            }
        />
    );
};