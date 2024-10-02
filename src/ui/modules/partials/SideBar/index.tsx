import { Stack , Typography, Box} from "@mui/material"
import {Centered, pxToRem, RowStack, StyledImage} from "@web-insight/component-library"
import logo from '../../../assets/icons/Web3-Insights-Final-Png-02 1.svg'
import homeIcon from './assets/icon/Component 6.svg'
import chartIcon from './assets/icon/chart-histogram.svg'
import docPlugIcon from './assets/icon/plug-socket.svg'
import docLinkIcon from './assets/icon/link-square-01.svg'
import reportBugIcon from './assets/icon/bug-01.svg'
import sunIcon from './assets/icon/sun-01.svg'
import moonIcon from './assets/icon/moon-02.svg'

{/*import React from "react";

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
    {/*</Centered>
  );
};*/}
export const SideBar = () => {
  return(
    <Stack  sx={{ justifyContent: 'space-between', height: '100%'}}>
      <Box>
        <StyledImage src={logo} alt=""
          sx={{
            width:'164px',
            height: '57px',
            margin: '32px 70px 49px 16px'
          }}
        />

        <Stack
          sx={{
            gap: '20px',
            margin: '0 16px'
          }}
        >
          <RowStack 
            sx={{
              borderRadius: '12px',
              border: '1px solid #76A8ED',
              background: 'linear-gradient(90deg, rgba(103, 180, 238, 0.30) 0%, rgba(172, 125, 234, 0.30) 100%)',
              padding: '13px 12px 11px 12px; ',
              gap: '5px'
            }}
          >
            <StyledImage src={homeIcon} alt=""
              sx={{ width:'23px', height: '24px'}}
            />
            <Typography 
              sx={{
                fontSize: pxToRem(16),
                fontWeight: 600,
                color: '#134432'
              }}
            >
              Home
            </Typography>
          </RowStack>

          <RowStack 
            sx={{
              gap: '5px',
              padding: '12px 14px 12px 8px',
              alignItems: 'center',
            }}
          >
            <StyledImage src={chartIcon} alt=""
              sx={{width:'23px', height: '24px'}}
            />
            <Typography 
              sx={{
                fontSize: pxToRem(16),
                fontWeight: 400,
                color: '#475367'
              }}
            >
              Solana Performance
            </Typography>
          </RowStack>
        </Stack>
      </Box>
      
      <Stack 
        sx={{padding: '0 16px 31px 23px', color: '#475367'}}
      >
        <Typography 
          sx={{
            padding: '12px auto 8px 8px',
            fontSize: pxToRem(16),
            fontWeight: 500,
            letterSpacing: '1.82px',
            color: '#66185'
          }}
        >
          Links
        </Typography>

        <RowStack sx={{padding: '12px 8px'}}>
          <StyledImage src={docPlugIcon} alt=""
            sx={{width: '24px', height: '24px'}}
          />
          <Typography
            sx={{fontSize:pxToRem(16),fontWeight: '400', flexGrow:1}}
          >
            Docs
          </Typography>
          <StyledImage src={docLinkIcon} alt=""
            sx={{width: '20px', height: '20px',marginLeft: '8px'}}
          />
        </RowStack>

        <RowStack sx={{padding: '11px 8px', marginBottom: '50px'}}>
          <StyledImage src={reportBugIcon} alt=""
            sx={{width: '24px', height: '24px'}}
          />
          <Typography
            sx={{fontSize:pxToRem(16),fontWeight: '400', flexGrow:1}}
          >
            Report Bugs
          </Typography>
          <StyledImage src={docLinkIcon} alt=""
            sx={{width: '20px', height: '20px',marginLeft: '8px'}}
          />
        </RowStack>

        <RowStack spacing={'26px'} 
          sx={{
            padding: '5px 14px 5px 5px',
            margin: '0 auto',
            borderRadius: '40px',
            border: '5px solid #E4E7EC',
            boxShadow: '0px 0px 0px 3px rgba(241, 241, 241, 0.37), -2px -2px 8px 0px #E9E9E9 inset'
          }}
        >
          <StyledImage src={sunIcon} alt=""
            sx={{width: '20px', height: '20px'}}
          />
          <StyledImage src={moonIcon} alt=""
            sx={{width: '24px', height: '24px'}}
          />
        </RowStack>
      </Stack>
    </Stack>
  )
}
