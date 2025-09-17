
import { Helmet } from "react-helmet-async";
import {
    Card,
    CardContent,

} from "@mui/material";

import { CommentsSlider, CustomDivider } from "../components/common";

const Comments = ({ helmetTitle }) => {
  
    return (
        <Card
            sx={{
                height: "100vh",
                backgroundColor: "whitesmoke",
                overflowY: "scroll",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <CustomDivider
                    bColor={"success.main"}
                    cColor={"success"}
                    align={"center"}
                    dirSlide={"down"}
                    text={"نظرات دانشجویان دوره های من"}
                />

                {/* comments slider  hier*/}
                <CommentsSlider />
            </CardContent>
        </Card>
    );
};

export default Comments;
