import { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { useMenu, useApplicationTheme } from "@/common";

export const Navigator = () => {
  const { openMenu, toggleMenu } = useMenu();
  const { isDarkMode } = useApplicationTheme();

  // Reference for the sidebar
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && // Ensure the sidebar is mounted
        !menuRef.current.contains(event.target as Node) // Click is outside the sidebar
      ) {
        if (openMenu) {
          toggleMenu(); // Close the sidebar
        }
      }
    };

    // Attach the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu, toggleMenu]);

  return (
    <Box
      ref={menuRef} // Attach the ref to the sidebar
      onClick={toggleMenu}
      sx={{
        display: { xs: "block", sm: "none" },
        position: "relative",
        width: "40px",
        height: "41px",
        borderRadius: "8px",
        zIndex: 1000,
        background: isDarkMode
          ? "#101114"
          : "linear-gradient(90deg, rgba(103, 180, 238, 0.30) 0%, rgba(172, 125, 234, 0.30) 100%)",
        cursor: "pointer",
      }}
    >
      {/* Top Bar */}
      <Box
        component="span"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "16px",
          height: "2.5px",
          transform: openMenu
            ? "translate(-50%, -50%) rotate(45deg)"
            : "translate(-50%, calc(-50% - 6px))",
          background: isDarkMode ? "#fff" : "rgba(0, 0, 0, 0.5)",
          transition: "transform 0.3s ease, opacity 0.3s ease",
        }}
      />
      {/* Middle Bar */}
      <Box
        component="span"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "16px",
          height: "2.5px",
          transform: "translate(-50%, -50%)",
          opacity: openMenu ? 0 : 1,
          background: isDarkMode ? "#fff" : "rgba(0, 0, 0, 0.5)",
          transition: "opacity 0.6s ease",
        }}
      />
      {/* Bottom Bar */}
      <Box
        component="span"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "16px",
          height: "2.5px",
          transform: openMenu
            ? "translate(-50%, -50%) rotate(-45deg)"
            : "translate(-50%, calc(-50% + 6px))",
          background: isDarkMode ? "#fff" : "rgba(0, 0, 0, 0.5)",
          transition: "transform 0.3s ease, opacity 0.3s ease",
        }}
      />
    </Box>
  );
};
