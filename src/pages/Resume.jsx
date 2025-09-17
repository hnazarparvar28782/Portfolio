import { useState, useEffect } from "react";

import { Helmet } from "react-helmet-async";
import {
    Card,
    CardContent,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";


import CustomDivider from "../components/common/CustomDivider";
import  { DevExperTimeLine,DevEduTimeLine } from "../components/pages";
import { HomeRepairServiceRounded, SchoolRounded, SettingsEthernetRounded } from "@mui/icons-material";

const Resume = ({ helmetTitle }) => {
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
                    bColor={"error.main"}
                    cColor={"error"}
                    align={"center"}
                    icon={<SettingsEthernetRounded />}
                    dirSlide={"up"}
                    text={"رزومه من"}
                />

                <Grid container sx={{ mt: 4 }}>
                    <Grid xs={6}>

                        <CustomDivider
                            bColor={"warning.main"}
                            cColor={"warning"}
                            align={"center"}
                            icon={<HomeRepairServiceRounded />}
                            dirSlide={"up"}
                            text={"تجربیات من"}
                        />


                        {/*DevExperTimeLine */}
                        <DevExperTimeLine loading={loading}/>

                    </Grid>

                    <Grid xs={6}>

                        <CustomDivider
                            bColor={"info.main"}
                            cColor={"info"}
                            align={"center"}
                            icon={<SchoolRounded />}
                            dirSlide={"up"}
                            text={"تحصیلات"}
                        />


                        {/* DevEduTimeLine */}
                        <DevEduTimeLine loading={loading}/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default Resume;
