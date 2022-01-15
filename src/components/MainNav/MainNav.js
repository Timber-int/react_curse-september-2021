import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";


export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const navigate =useNavigate()

    useEffect(() => {
        if (value === 0) navigate('/');
        if (value === 1) navigate('/movies');
        if (value === 2) navigate('/series');
        if (value === 3) navigate('/search');
    }, [value,navigate]);


    return (
        <Box sx={{width: 500}}>
            <BottomNavigation
                style={{
                    width: "100%",
                    position: "fixed",
                    bottom: 0,
                    backgroundColor: "#2d313a",
                    zIndex: 100,
                }}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction
                    style={{color: "white"}}
                    label="Trending"
                    icon={<WhatshotIcon/>}
                />
                <BottomNavigationAction
                    style={{color: "white"}}
                    label="Movies"
                    icon={<MovieIcon/>}
                />
                <BottomNavigationAction
                    style={{color: "white"}}
                    label="TV Series"
                    icon={<TvIcon/>}
                />
                <BottomNavigationAction
                    style={{color: "white"}}
                    label="Search"
                    icon={<SearchIcon/>}
                />
            </BottomNavigation>
        </Box>
    );
}