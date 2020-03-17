
import React from "react";
import Link from "@material-ui/core/Link";
import myIcon from '../../icons/Aquicon-Github.png';
import Typography from "@material-ui/core/Typography";
export default function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © Fundação São Francisco Xavier"}
            {" "}
            {new Date().getFullYear()}
            {". "}
            <Link color="inherit" href="https://github.com/luantafarel/Painel_React">
                <img src={myIcon} alt="GithubIcon" height="15" width="15" crop="fill" />
            </Link>
        </Typography>
    );
}