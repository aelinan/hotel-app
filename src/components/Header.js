import React, { useState } from 'react';
import { AppBar, Toolbar, makeStyles, InputBase, Typography, Avatar, IconButton, Drawer } from "@material-ui/core";
import logo from "../images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";

const Header = () => {
    const [mobile, setMobile] = useState(true);
    const classes = useStyle();
    const displayMobile = () => {
        const handleDrawerOpen = () => {

        };
        const handleDrawerClose = () => {

        };
        const getDrawerChoices = () => {

        };
        return (
            <Toolbar>
                <IconButton {...{ edge: "start", color: "#ccc", "aria-label": "menu", "aria-haspopup": "true", onCLick: handleDrawerOpen, }}>
                    <MenuIcon fontSize='large' />
                </IconButton>
                <Drawer {...{
                    anchor: "left",
                    open: handleDrawerOpen,
                    onClose: handleDrawerClose,
                }}>
                    <div>{getDrawerChoices()}</div>
                </Drawer>
            </Toolbar>
        );
    }
        
    
    const displayDestop = () => {
        return (
            <Toolbar className={classes.toolbar}>
                <img src={logo} className={classes.logo} />
                <div className={classes.center}>
                    <InputBase fullWidth placeholder='Busque aquí...' inputProps={{ className: classes.input }} />
                    <SearchIcon />
                </div>
                <div className={classes.right} >
                    <Typography>Sign in</Typography>
                    <Avatar className={classes.avatar} />
                </div>
            </Toolbar>
        )
    }
    return (
        <AppBar className={classes.root}>
            {
                mobile ? displayMobile() : displayDestop()
            }
        </AppBar>
    );
}

const useStyle = makeStyles((theme) => ({
    root: {
        position: 'sticky',
        top: 0,
        backgroundColor: "#fff",
        zIndex: 99,
        width: "100vw",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logo: {
        height: "50px",
        margin: theme.spacing(1, 0, 0, 2),
        objectFit: "contain",
    },
    center: {
        display: "flex",
        alignItems: "center",
        border: "1px solid lightgray",
        minWidth: "300px",
        borderRadius: "999px",
        padding: theme.spacing(1),
        margin: theme.spacing(1),
    },
    input: {
        fontSize: "1.2rem",
        padding: theme.spacing(1, 5, 1, 5),
    },
    right: {
        color: "#333",
        display: "flex",
        alignItems: "center",
    },
    avatar: {
        marginLeft: theme.spacing(2),
    }
}))

export default Header