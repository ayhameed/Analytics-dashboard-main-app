import { pxToRem, RowStack, StyledImage} from "@web-insight/component-library";
import { 
  AppBar, 
  Toolbar, 
  Box, 
  Typography,
  Input,
  InputAdornment,
  IconButton
} from "@mui/material";
import profileAvatar from './assets/icon/Avatar.jpg';
import profileIcon from './assets/icon/arrow-circle-down.svg'

export const Header = () => {
  return (
    <AppBar elevation={0} position="static" 
      sx={{
        padding: "16px 39px 15px 5px",
        backgroundColor:'#F9FAFB '
      }}
    >
      <Toolbar disableGutters>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '45% 55%',
            alignItems: 'center',
            width:'100%',
            justifyContent: 'space-between'
          }}
        >
          <RowStack spacing={'40px'}>
            <Typography sx={{fontSize: pxToRem(16), fontWeight:500}}>
              CRYING $0.0011923

              <Typography
                component={'span'}
                sx={{
                  color: "#DE5151",
                  marginLeft: "5px"
                }}
              >
                -49.36%
              </Typography>
            </Typography>
              
            <Typography
              sx={{
                background: 'linear-gradient(to right, black, rgba(0, 0, 0, 0))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: pxToRem(16),
                fontWeight: 500
              }}
            >
              MOOWAAN $0.0012944
            </Typography>
          </RowStack>

          <RowStack spacing={'24px'} sx={{marginLeft: 'auto'}}>
            <Input
              placeholder="Search web inside"
              type="search"
              fullWidth
              size="small"
              disableUnderline
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
                style:{padding:0},
                sx: {'::placeholder':{color: 'inherit',opacity: 1}}
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
                    onClick={() => console.log("Slash clicked")}
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

            <RowStack sx={{flex: '0 0 55%'}}>
              <StyledImage src={profileAvatar} alt=""
                sx={{ width:'48px', height: '48px',marginRight: '15px'}}
              />

              <Box>
                <Typography
                  sx={{
                    fontSize: pxToRem(16),
                    fontWeight:700, 
                    lineHeight: '150%'
                  }}
                >
                  Opeyemi Adeboye
                </Typography>

                <Typography
                  sx={{
                    fontSize: pxToRem(16),
                    fontWeight:400, 
                    lineHeight: '150%',
                    color: '#5E646E'
                  }}
                >
                  Yemi@fig.com
                </Typography>
              </Box>
              
              <StyledImage src={profileIcon} alt=""
                sx={{width: '24px', height: '24px', marginLeft: '24px'}}
              />
            </RowStack>
          </RowStack>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
