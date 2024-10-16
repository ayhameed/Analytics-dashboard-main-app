"use client";

import { useState } from "react";
import { InputAdornment, Input, IconButton } from "@mui/material";
import { pxToRem } from "@web-insight/component-library";
import Link from "next/link";
import { blockchainDatas } from "@/ui/blockchain.json"; 

export const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // Filter the blockchain data based on the search term
    const filteredData = blockchainDatas.filter(item =>
        item.exchange.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Input
            placeholder="Search web inside"
            type="search"
            fullWidth
            size="small"
            disableUnderline
            onChange={(e) => setSearchTerm(e.target.value)}
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
                    <Link href={`/search`} passHref>
                        <IconButton
                            edge="end"
                            onClick={() => console.log("Slash clicked")}
                            sx={{
                                color: '#475367',
                                width: '8px',
                                margin: '0 auto'
                            }}
                        >
                            /
                        </IconButton>
                    </Link>
                </InputAdornment>
            }
        />
    );
};
