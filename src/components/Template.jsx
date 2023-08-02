import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Sideitems from '../components/SidenavbarItems/SideItems';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import 'react-morphing-modal/dist/ReactMorphingModal.css';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { useTheme } from 'styled-components';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

// const myStyle = {
//     rightItems:{

//     }
// }

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            [theme.breakpoints.down('sm')]: {
                position: 'absolute'
            },
            boxSizing: 'border-box',
            ...(!open && {
                // overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
                [theme.breakpoints.down('sm')]: {
                    width: 0,
                    display: 'none',
                },
            }),
        },
    }),
);

// TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();
const defaultTheme = createTheme({
    palette: {
        primary: {
            light: '#fff',
            main: '#f5f5f7',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});

export default function Template(props) {
    const [open, setOpen] = React.useState(window.innerWidth > 1160);
    // const drawer = useMemo(()=> setOpen(open), [open]);
    const theme = useTheme()
    const toggleDrawer = () => {

        setOpen(!open);
    };

    function sendtoprofile() {
        if (props.pov === "therepist") {
            window.location.href = "/therepist/profile";
        } else if (props.pov === "patient") {
            window.location.href = "/patient/profile";
        } else {
            window.location.href = "/admin/profile";
        }
    }




    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                            backgroundColor: "#f5f5f7",
                            border: "none"
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                color: "#000",
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>


                        <Typography
                            component="h1"
                            variant="h6"
                            color="#000"
                            noWrap
                            
                            sx={{ flexGrow: 1,
                                '@media (max-width: 564px)': {
                                    display:"none"
                                }
                                 }}

                        >
                            {props.pov === "therepist" ?
                                "Hi, Dr. Samantha Aggarwal (Therepist)" : "Hi Rohit Sharma (User)"}
                        </Typography>

                        <IconButton color="inherit" sx={{
                             '@media (max-width: 460px)': {
                                    width:"80%"
                                }
                        }}>
                            <FormControl variant="standard">
                                <InputLabel htmlFor="input-with-icon-adornment">
                                    Search
                                </InputLabel>
                                <Input
                                    id="input-with-icon-adornment"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <Badge badgeContent={4} color="secondary" style={{ "margin-right": "30px" }}>
                                <NotificationsOutlinedIcon style={{ fill: "#000" }} />
                            </Badge>
                            <PopupState variant="popover" popupId="demo-popup-menu">
                                {(popupState) => (
                                    <React.Fragment>
                                        <Avatar alt="Cindy Baker" {...bindTrigger(popupState)} src={require("../images/person.jpg")} />
                                        <Menu {...bindMenu(popupState)}>

                                            <MenuItem onClick={sendtoprofile}><PersonOutlinedIcon /> Profile</MenuItem>
                                            <MenuItem onClick={popupState.close}><LogoutOutlinedIcon /> Logout</MenuItem>
                                        </Menu>
                                    </React.Fragment>
                                )}
                            </PopupState>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open} sx={{
                    backgroundColor: "#021138",

                }}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                            backgroundColor: "#021138",
                            border: "none",

                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <MenuIcon sx={{
                                color: "#fff",
                                position: "absolute",
                                top: "22px",
                                right: '15px',
                            }} />
                            <img style={{
                                width: "210px"
                            }} src={require("../images/speech4all.png")} alt='logo' />
                        </IconButton>
                    </Toolbar>
                    <List component="nav" sx={{
                        backgroundColor: "#021138",
                        color: "#fff",
                        height: "80%",
                        overflowX:"hidden"

                    }}>
                        <Sideitems />
                    </List>
                </Drawer>

                {props.page}

            </Box>
        </ThemeProvider>
    );
}
