import { useState } from "react";

import {  Typography } from "@mui/material";
import { RandomReveal } from "react-random-reveal";

import ThemeActionButton from "../ThemeActionButton";
import avatar from "../../assets/avatar.png";
import { alphabetPersian } from "../../constants/alphabetPersian";
import { CustomAvatar } from "../common";
import SocialIcon from "../SocialIcon";

const SidebarHeader = () => {
    const [start, setStart] = useState(false);

    return (
        <>
            <ThemeActionButton />
            <CustomAvatar
              avatar={avatar}
              size={200}
              falback="YG"
             />
            
            <Typography variant="h6" color="#F93C92">
                <Typography variant="caption" color="tomato">
                    {" {{ "}
                </Typography>
                <RandomReveal
                    isPlaying
                    duration={4}
                    characterSet={alphabetPersian}
                    characters="حسن نظرپرور نوشادی"
                    onComplete={() => setStart(true)}
                />

                <Typography variant="caption" color="tomato">
                    {" }} "}
                </Typography>
            </Typography>
            {start && (
                <Typography variant="caption" color="gray">
                    <Typography variant="caption" color="tomato">
                        [[{" "}
                    </Typography>
                    <RandomReveal
                        isPlaying
                        duration={4}
                        characterSet={alphabetPersian}
                        characters="توسعه دهنده فول استک و مدرس"
                    />
                    <Typography variant="caption" color="tomato">
                        {" "}
                        ]]
                    </Typography>
                </Typography>
            )}

            {/* social icon  */}
            <SocialIcon/>
        </>
    );
};

export default SidebarHeader;
