import React from "react";
import Course from "./components/courseMUI";
import witCrest from "./wit_crest.png";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
    appHeader: {
        backgroundColor: "lightblue",
        height: "120px",
        padding: "10px",
        color: "white",
    },
    course: {
        padding: "10px",
    },
});

const App = () => {
    const classes = useStyles();
    const modules = [
        {
            name: "Cloud Architecture",
            noLectures: 1,
            noPracticals: 2
        },
        {
            name: "Programming",
            noLectures: 2,
            noPracticals: 3
        },
        {
            name: "Enterprise Web Dev",
            noLectures: 2,
            noPracticals: 2
        },
        {
            name: "Mobile App Development",
            noLectures: 2,
            noPracticals: 2
        },
        {
            name: "Agile Software Development",
            noLectures: 2,
            noPracticals: 3
        }
    ];
    const name = "HDip Computer Systems";

    return (
        <>
            <header className={classes.appHeader}>
                <img src={witCrest} alt="logo" />
            </header>
            <Box className={classes.course}>
                <Course title={name} modules={modules} />
            </Box>
        </>
    );
};
export default App;