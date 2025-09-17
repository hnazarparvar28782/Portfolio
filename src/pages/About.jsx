
import { Helmet } from "react-helmet-async";
import { Card, CardContent,} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { CodeRounded, SelfImprovementRounded } from "@mui/icons-material";

import { DevWorkCount, Skills } from "../components/pages";
import avatar from "../assets/avatar2.jpg";
import CustomAvatar from "../components/common/CustomAvatar";
import CustomDivider from "../components/common/CustomDivider";

const About = ({ helmetTitle }) => {
    
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
                <Grid container sx={{ mx: 3 }}>
                    <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
                        <CustomDivider
                            bColor={"primary.main"}
                            cColor={"primary"}
                            icon={<CodeRounded />}
                            align={"right"}
                            text={"توسعه دهنده فول استک و مدرس برنامه نویسی "}
                            //* up or down
                            dirSlide={"down"}
                        />


                        <Grid container>
                            <Grid
                                xs={4}
                                sm={4}
                                md={3}
                                lg={3}
                                sx={{
                                    mt: 3,
                                    display: {
                                        xs: "none",
                                        sm: "block",
                                        md: "block",
                                    },
                                }}
                            >
                              <DevWorkCount/>
                            </Grid>

                            <Grid xs={12} sm={8} md={9} lg={9}>
                               {/* devinfo hier */}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
                        <CustomAvatar
                            size={250}
                            avatar={avatar}
                            falback="YG"
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid sx={{ width: 1, mt: 1 }}>
                        <CustomDivider
                            bColor={"secondary.main"}
                            cColor={"secondary"}
                            icon={<SelfImprovementRounded />}
                            align={"center"}
                            text={"مهارت های من"}
                            //* up or down
                            dirSlide={"up"}
                        />
                        {/* skilles hier */}
                        <Skills />

                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default About;
