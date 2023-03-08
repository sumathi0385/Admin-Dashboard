import { AccountCircle, Notifications } from '@mui/icons-material';
import { AppBar, Badge, Divider, IconButton, Typography } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import * as React from 'react';

export function TopBar() {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginTop: "5px",
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  return (
    <AppBar position="static" color="primary" enableColorOnDark className="topbar">
      <div className="topbar-wrapper">
        <div>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }} />
          </Search>


        </div>
        <div className="top-right">
          <div className="topbadge-iconcontainer">
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon color="white" />
              </Badge>
            </IconButton>
            <IconButton size="large"
              aria-label="show 17 new notifications"
              color="inherit">
              <Badge badgeContent={4} color="error">
                <Notifications color="white" />
              </Badge>
            </IconButton>
            <Divider sx={{ margin: "10px" }} orientation="vertical" variant="middle" flexItem />
            <div className="account-iconcontainer">
              <Typography sx={{ lineHeight: "40px" }}>
                Galwin Paul
              </Typography>

              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>


            </div>


          </div>


        </div>

      </div>

    </AppBar>
  );
}
