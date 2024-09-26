import React from "react";

import { AppLogo, Centered } from "@web-insight/component-library";

export const SideBar = () => {
  // const theme = useTheme();
  // const isActive = (itemLink: string) => pathname.startsWith(itemLink);

  return (
    <Centered
      direction={"column"}
      alignItems={"center"}
      justifyContent={"start"}
      sx={{
        width: "100%",
        height: "100%",
        fontFamily: (theme) => theme.typography.fontFamily,
        // background: (theme) => theme.sidebar.background,
        background: "#FAFAFA",
        paddingBottom: "70px",
      }}
    >
      <AppLogo />
      {/*<Centered direction={"column"} alignItems={"center"} justifyContent={"center"}*/}
      {/*          sx={{*/}
      {/*            padding: "0 14px",*/}
      {/*            width: "100%",*/}
      {/*            borderRadius: "0px 0px 10px 10px",*/}
      {/*          }}>*/}
      {/*  */}
      {/*  {sidebarList.map((list, index) => (*/}
      {/*    <List*/}
      {/*      key={index}*/}
      {/*      subheader={*/}
      {/*        <ListSubheader*/}
      {/*          sx={{*/}
      {/*            color: (theme) => theme.palette.text.primary,*/}
      {/*            fontWeight: 400,*/}
      {/*            fontSize: pxToRem(12),*/}
      {/*            lineHeight: "16.34px",*/}
      {/*          }}*/}
      {/*        >*/}
      {/*          {list.subheader}*/}
      {/*        </ListSubheader>*/}
      {/*      }*/}
      {/*      sx={{*/}
      {/*        display: "flex",*/}
      {/*        flexDirection: "column",*/}
      {/*        width: "100%",*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      {list.items.map((item, itemIndex) => (*/}
      {/*        <StyledLink*/}
      {/*          key={itemIndex}*/}
      {/*          href={item.link}*/}
      {/*          sx={{*/}
      {/*            width: "100%",*/}
      {/*            marginLeft: "21px",*/}
      {/*            borderLeft: isActive(item.link) ? `4px solid ${theme.palette.primary.main}` : "",*/}
      {/*            color: isActive(item.link) ? "primary.main" : "",*/}
      {/*            fontWeight: isActive(item.link) ? 700 : null,*/}
      {/*            "&:hover": {*/}
      {/*              borderLeft: `4px solid ${theme.palette.primary.main}`,*/}
      {/*              color: "primary.main",*/}
      {/*              fontWeight: 700,*/}
      {/*              "& .image, .text": {*/}
      {/*                color: "primary.main",*/}
      {/*                fontWeight: 700,*/}
      {/*              },*/}
      {/*            },*/}
      {/*          }}*/}
      {/*        >*/}
      {/*          <ListItem*/}
      {/*            sx={{*/}
      {/*              textDecoration: "none",*/}
      {/*              color: isActive(item.link) ? "primary.main" : "",*/}
      {/*            }}*/}
      {/*          >*/}
      {/*            <ListItemIcon*/}
      {/*              sx={{*/}
      {/*                color: isActive(item.link) ? `${theme.palette.primary.main}` : "#5F5F5F",*/}
      {/*                width: "20px",*/}
      {/*                height: "20px",*/}
      {/*                fontWeight: 400,*/}
      {/*                minWidth: 0,*/}
      {/*                marginRight: "16px",*/}
      {/*              }}*/}
      {/*              className="image"*/}
      {/*            >*/}
      {/*              {item.icon}*/}
      {/*            </ListItemIcon>*/}
      {/*            <ListItemText*/}
      {/*              primary={item.text}*/}
      {/*              sx={{*/}
      {/*                color: isActive(item.link) ? `${theme.palette.primary.main}` : "#5F5F5F",*/}
      {/*                fontWeight: 400,*/}
      {/*                fontSize: pxToRem(14),*/}
      {/*                lineHeight: "19.07px",*/}
      {/*              }}*/}
      {/*              className="text"*/}
      {/*            />*/}
      {/*          </ListItem>*/}
      {/*        </StyledLink>*/}
      {/*      ))}*/}
      {/*    </List>*/}
      {/*  ))}*/}
      {/*</Centered>*/}

      {/*<Centered*/}
      {/*  direction={"column"}*/}
      {/*  spacing={"42px"}*/}
      {/*  sx={{*/}
      {/*    width: "100%",*/}
      {/*    maxHeight: "197px",*/}
      {/*    // padding: "35px 0",*/}
      {/*    background: "#F6F6F6",*/}
      {/*    padding: "35px 32px 43px 32px",*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <RowStack>*/}
      {/*    <StyledImage src={qrCode} alt="" width={10} height={10}*/}
      {/*                 sx={{*/}
      {/*                   marginRight: "16px",*/}
      {/*                   width: "20px",*/}
      {/*                   height: "20px",*/}
      {/*                   fill: "red",*/}
      {/*                   stroke: "red",*/}
      {/*                 }}*/}
      {/*    />*/}
      {/*    <Box component="span">Settings</Box>*/}
      {/*  </RowStack>*/}
      {/*  <RowStack justifyContent={"space-between"} sx={{ width: "100%" }}>*/}
      {/*    <Typography component="span">System Admin</Typography>*/}
      {/*    <AppButton*/}
      {/*      sx={{*/}
      {/*        padding: 0,*/}
      {/*        background: "none",*/}
      {/*        maxWidth: 0,*/}
      {/*        "&:hover": {*/}
      {/*          background: "none",*/}
      {/*          maxWidth: 0,*/}
      {/*          padding: 0,*/}
      {/*        },*/}
      {/*      }}*/}
      {/*      onClick={() => {*/}
      {/*        router.push("/login");*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      <StyledLink href="#"><StyledImage src={logout} alt="" width={10} height={10} /></StyledLink>*/}
      {/*    </AppButton>*/}
      {/*  </RowStack>*/}
      {/*</Centered>*/}
    </Centered>
  );
};
