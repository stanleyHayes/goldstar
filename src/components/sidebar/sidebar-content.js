import {Box, Stack} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {closeDrawer, selectUI, toggleTheme} from "../../redux/features/ui/ui-slice";
import SidebarLink from "../shared/sidebar-link";

import {
    Close,
    ContactPage,
    ContactPageOutlined,
    DarkMode,
    Escalator,
    EscalatorOutlined,
    Home,
    HomeOutlined,
    LightMode,
    Lock,
    LockOutlined,
    Storage,
    StorageOutlined,
    Telegram
} from "@mui/icons-material";
import React from "react";
import {useLocation} from "react-router";

const SidebarContent = () => {

    const {themeVariant} = useSelector(selectUI);

    const dispatch = useDispatch();
    const {pathname} = useLocation();

    return (
        <Box sx={{minHeight: '100vh', minWidth: "80vw", py: 3}}>
            <Stack direction="column" spacing={2}>
                <Stack sx={{px: 4}} direction="row" alignItems="center" justifyContent="space-between">
                    {themeVariant === 'light' ? (
                        <DarkMode
                            onClick={() => dispatch(toggleTheme())}
                            sx={{
                                cursor: 'pointer',
                                color: 'secondary.main',
                                borderTopRightRadius: 32,
                                borderBottomRightRadius: 0,
                                borderBottomLeftRadius: 32,
                                borderTopLeftRadius: 32,
                                padding: 1,
                                fontSize: 32,
                                backgroundColor: 'light.secondary'
                            }}/>
                    ) : (
                        <LightMode
                            onClick={() => dispatch(toggleTheme())}
                            sx={{
                                cursor: 'pointer',
                                color: 'secondary.main',
                                borderTopRightRadius: 32,
                                borderBottomRightRadius: 0,
                                borderBottomLeftRadius: 32,
                                borderTopLeftRadius: 32,
                                padding: 1,
                                fontSize: 32,
                                backgroundColor: 'light.secondary'
                            }}
                        />
                    )}

                    <Close
                        onClick={() => dispatch(closeDrawer())}
                        sx={{
                            cursor: 'pointer',
                            color: 'secondary.main',
                            borderTopRightRadius: 32,
                            borderBottomRightRadius: 0,
                            borderBottomLeftRadius: 32,
                            borderTopLeftRadius: 32,
                            padding: 1,
                            fontSize: 32,
                            backgroundColor: 'light.secondary'
                        }}
                    />

                </Stack>
                <Stack direction="column">
                    <SidebarLink
                        active={pathname === '/'}
                        label="Home"
                        path="/"
                        icon={pathname === '/' ? (
                            <Home
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 32,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        ) : (
                            <HomeOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.secondary',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 32
                                }}
                            />
                        )}
                    />

                    <SidebarLink
                        active={pathname === '/mineral-storage'}
                        label="Mineral Storage"
                        path="/mineral-storage"
                        icon={pathname === '/mineral-storage' ? (
                            <Storage
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 32,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        ) : (
                            <StorageOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.secondary',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 32
                                }}/>
                        )}
                    />

                    <SidebarLink
                        active={pathname === '/insurance'}
                        label="Insurance"
                        path="/insurance"
                        icon={pathname === '/insurance' ? (
                            <Lock
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 32,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        ) : (
                            <LockOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.secondary',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 32
                                }}/>
                        )
                        }
                    />

                    <SidebarLink
                        active={pathname === '/tracking'}
                        label="Tracking"
                        path="/tracking"
                        icon={pathname === '/tracking' ? (
                            <Escalator
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 32,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        ) : (
                            <EscalatorOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.secondary',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 32
                                }}/>
                        )
                        }
                    />

                    <SidebarLink
                        active={pathname === '/freight'}
                        label="Freight"
                        path="/freight"
                        icon={pathname === '/freight' ? (
                            <Telegram
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 32,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        ) : (
                            <Telegram
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.secondary',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 32
                                }}
                            />
                        )
                        }
                    />

                    <SidebarLink
                        active={pathname === '/message'}
                        label="Contact"
                        path="/contact"
                        icon={pathname === '/message' ? (
                            <ContactPage
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 32,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        ) : (
                            <ContactPageOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.secondary',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 32
                                }}/>
                        )}
                    />
                </Stack>
            </Stack>
        </Box>
    )
}

export default SidebarContent;
