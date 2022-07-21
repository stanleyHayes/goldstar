import {Avatar, Badge, Button, Container, Divider, Menu, MenuItem, Stack, Toolbar, Typography} from "@mui/material";
import logo from "./../../assets/images/logo.png";
import {useDispatch, useSelector} from "react-redux";
import {selectAuth} from "../../redux/features/auth/auth-slice";
import {UTILS} from "../../utils/utils";
import {
    DarkMode,
    ExitToApp,
    Face,
    FeaturedPlayList,
    LightMode,
    MoreHoriz,
    Notifications,
    Videocam,
    WatchLater
} from "@mui/icons-material";
import {selectUI, toggleTheme} from "../../redux/features/ui/ui-slice";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import NavLink from "../shared/nav-link";

const DesktopHeader = () => {

    const {authData} = useSelector(selectAuth);
    const {themeVariant, activePath} = useSelector(selectUI);
    const dispatch = useDispatch();

    const [openMenu, setMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = event => {
        setMenuOpen(true);
        setAnchorEl(event.currentTarget);
    }

    const handleMenuClose = () => {
        setMenuOpen(false);
        setAnchorEl(null);
    }

    return (
        <Toolbar variant="regular">
            <Container maxWidth="xl">
                <Stack
                    divider={<Divider variant="fullWidth" light={true}/>}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center">
                    <Stack spacing={2} direction="row" alignItems="center">
                        <Link to="/" style={{textDecoration: 'none'}}>
                            <img
                                src={logo}
                                style={{width: 50, height: 50, objectFit: 'contain', objectPosition: 'center'}}
                                alt="Gold Star Logo"
                            />
                        </Link>
                        <Link to="/" style={{textDecoration: 'none'}}>
                            <Typography
                                sx={{color: 'secondary.main'}}
                                variant="h5">Gold Star</Typography>
                        </Link>
                    </Stack>

                    <Stack direction="row" alignItems="center" spacing={3}>
                        <NavLink label="Home" path="/" active={activePath === '/'}/>
                        <NavLink label="Mineral Storage" path="/mineral-storage"
                                 active={activePath === '/mineral-storage'}/>
                        <NavLink label="Insurance" path="/insurance" active={activePath === '/insurance'}/>
                        <NavLink label="Freight" path="/freight" active={activePath === '/freight'}/>
                        <NavLink label="Tracking" path="/tracking" active={activePath === '/tracking'}/>
                        <NavLink label="Contact" path="/contact" active={activePath === '/message'}/>
                    </Stack>

                    <Stack direction="row" alignItems="center" spacing={2}>
                        {authData ? (
                            <React.Fragment>
                                <Link to="/profile" style={{textDecoration: 'none'}}>
                                    <Avatar
                                        sx={{
                                            backgroundColor: 'light.secondary',
                                        }}>
                                        <Typography
                                            sx={{color: 'secondary.main'}}
                                            variant="h6">
                                            {UTILS.getInitials(authData?.fullName)}
                                        </Typography>
                                    </Avatar>
                                </Link>
                                <Badge color="secondary" max={100} badgeContent={999} variant="dot">
                                    <Notifications
                                        sx={{
                                            cursor: 'pointer',
                                            color: 'secondary.main',
                                            padding: 1,
                                            fontSize: 18,
                                            backgroundColor: 'light.secondary'
                                        }}/>
                                </Badge>
                                <MoreHoriz
                                    onClick={handleMenuOpen}
                                    sx={{
                                        cursor: 'pointer',
                                        color: 'secondary.main',
                                        padding: 1,
                                        fontSize: 18,
                                        backgroundColor: 'light.secondary'
                                    }}/>
                                <Menu
                                    open={openMenu}
                                    onClose={handleMenuClose}
                                    elevation={2}
                                    anchorEl={anchorEl}>
                                    <MenuItem>
                                        <Link to="/profile" style={{textDecoration: 'none'}}>
                                            <Button
                                                size="large"
                                                sx={{
                                                    justifyContent: 'flex-start',
                                                    color: 'text.primary',
                                                    textTransform: 'capitalize'
                                                }}
                                                fullWidth={true}
                                                variant="text"
                                                startIcon={
                                                    <Face
                                                        sx={{
                                                            cursor: 'pointer',
                                                            color: 'secondary.main',
                                                            padding: 1,
                                                            fontSize: 18
                                                        }}/>}>
                                                Profile
                                            </Button>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to="/trailers/me" style={{textDecoration: 'none'}}>
                                            <Button
                                                size="large"
                                                sx={{
                                                    justifyContent: 'flex-start',
                                                    color: 'text.primary',
                                                    textTransform: 'capitalize'
                                                }}
                                                fullWidth={true}
                                                variant="text"
                                                startIcon={
                                                    <Videocam
                                                        sx={{
                                                            cursor: 'pointer',
                                                            color: 'secondary.main',
                                                            padding: 1,
                                                            fontSize: 18
                                                        }}/>}>
                                                My Trailers
                                            </Button>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to="/watch-later" style={{textDecoration: 'none'}}>
                                            <Button
                                                size="large"
                                                sx={{
                                                    justifyContent: 'flex-start',
                                                    color: 'text.primary',
                                                    textTransform: 'capitalize'
                                                }}
                                                fullWidth={true}
                                                variant="text"
                                                startIcon={
                                                    <WatchLater
                                                        sx={{
                                                            cursor: 'pointer',
                                                            color: 'secondary.main',
                                                            padding: 1,
                                                            fontSize: 18
                                                        }}/>}>
                                                Watch later
                                            </Button>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to="/playlists" style={{textDecoration: 'none'}}>
                                            <Button
                                                size="large"
                                                sx={{
                                                    justifyContent: 'flex-start',
                                                    color: 'text.primary',
                                                    textTransform: 'capitalize'
                                                }}
                                                fullWidth={true}
                                                variant="text"
                                                startIcon={
                                                    <FeaturedPlayList
                                                        sx={{
                                                            cursor: 'pointer',
                                                            color: 'secondary.main',
                                                            padding: 1,
                                                            borderRadius: '25%',
                                                            fontSize: 18,
                                                        }}/>}>
                                                Playlists
                                            </Button>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Button
                                            size="large"
                                            sx={{
                                                justifyContent: 'flex-start',
                                                color: 'text.primary',
                                                textTransform: 'capitalize'
                                            }}
                                            fullWidth={true}
                                            variant="text"
                                            startIcon={
                                                <ExitToApp
                                                    sx={{
                                                        cursor: 'pointer',
                                                        color: 'secondary.main',
                                                        padding: 1,
                                                        fontSize: 18
                                                    }}/>}>
                                            Logout
                                        </Button>
                                    </MenuItem>
                                </Menu>
                            </React.Fragment>
                        ) : (
                            <Link to="/auth/login" style={{textDecoration: 'none'}}>
                                <Button
                                    color="secondary"
                                    fullWidth={true}
                                    sx={{
                                        textTransform: 'capitalize',
                                    }}
                                    variant="contained"
                                    disableElevation={true}>
                                    Login
                                </Button>
                            </Link>
                        )}

                        {themeVariant === 'light' ? (
                            <DarkMode
                                onClick={() => dispatch(toggleTheme())}
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    padding: 1,
                                    fontSize: 18,
                                    borderRadius: '25%',
                                    backgroundColor: 'light.secondary'
                                }}/>
                        ) : (
                            <LightMode
                                onClick={() => dispatch(toggleTheme())}
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    padding: 1,
                                    fontSize: 18,
                                    borderRadius: '25%',
                                    backgroundColor: 'light.secondary'
                                }}/>
                        )}
                    </Stack>
                </Stack>
            </Container>
        </Toolbar>
    )
}


export default DesktopHeader;
