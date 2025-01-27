import { Menu, MenuItem, MenuProps, Stack, Typography } from "@mui/material";
import { pxToRem } from "@web-insight/component-library";

export type AppDropdownMenuProps = MenuProps & {
  title?: string;
  options?: string[];
  selectedOption?: string;
  onOptionSelected?: (option: string, optionIndex: number) => void;
  minWidth?: string;
};

export const AppDropdownMenu = ({
  title,
  options,
  selectedOption,
  onOptionSelected,
  children,
  sx,
  minWidth = "140px",
  ...rest
}: AppDropdownMenuProps) => {
  return (
    <Menu
      {...rest}
      sx={{
        ...sx,
      }}
      slotProps={{
        paper: {
          sx: {
            boxShadow:
              "0px 14px 22px -9px rgba(16, 25, 40, 0.14), 0px 0px 3px -1px rgba(16, 25, 40, 0.04)",
            minWidth,
            borderRadius: "4px",

            "& .MuiMenu-list": {
              paddingBottom: 0,
            },
          },
        },
      }}
    >
      {title && (
        <Typography
          sx={{
            fontSize: pxToRem(12),
            fontWeight: 700,
            padding: "13px",
            marginBottom: "0",
          }}
        >
          {title}
        </Typography>
      )}

      {options && (
        <Stack>
          {options.map((option, index) => (
            <MenuItem
              key={index}
              onClick={() => onOptionSelected && onOptionSelected(option, index)}
              sx={{
                padding: "8px 13px",
              }}
            >
              <Typography
                sx={{
                  fontSize: pxToRem(12),
                  fontWeight: selectedOption === option ? 700 : 400,
                }}
              >
                {option}
              </Typography>
            </MenuItem>
          ))}
        </Stack>
      )}

      {children}
    </Menu>
  );
};
