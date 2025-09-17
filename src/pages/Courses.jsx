import { useState, useEffect } from "react";

import { Helmet } from "react-helmet-async";


import Grid from "@mui/material/Unstable_Grid2";
import { SchoolRounded } from "@mui/icons-material";

import {CustomDivider} from "../components/common/"
import {ShowCourses} from "../components/pages/";
import { Card, CardContent } from "@mui/material";

const Courses = ({ helmetTitle }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false);
        };
    }, []);

    return (
        <Card
            sx={{
                height: "100vh",
                backgroundColor: "whitesmoke",
                overflowY: "scroll",
            }}
        >
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>

               <CustomDivider
                   bColor="primary.main"
                   cColor ="primary"
                   icon ={<SchoolRounded />}
                   align ="center"
                   text ="دوره های من"
                   dirSlide={"up"}
               />

                

                <Grid container sx={{ mx: 3 , mt:5 }}>
                    {/* show cursses */}
                  <ShowCourses loading={loading}/>
                </Grid>
            </CardContent>
        </Card>
    );
};
export default Courses;
