import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Grid,
} from "@mui/material";
// const github = require("../../assets/email-circle.svg") as string;

type ProjectDisplayProps = {
  results: [];
};

type ProjectDisplayState = {};

class ProjectDisplay extends Component<
  ProjectDisplayProps,
  ProjectDisplayState
> {
  // constructor(props: any) {
  //   super(props);
  //   this.state = {};
  // }
  // projectMapper = () => {
  //   return this.props.results.map((project: any, index) => {
  //     return (
  //       <Grid item>
  //         <Card className="project-card" key={index} sx={{ maxWidth: 400 }}>
  //           <CardHeader title={project.projectName} />
  //           <CardMedia
  //             component="img"
  //             height="194"
  //             image={project.imageUrl}
  //             alt={project.name}
  //           />
  //           <CardContent>
  //             <Typography variant="body1">{project.projectSummary}</Typography>
  //           </CardContent>
  //           <CardContent>
  //             <Typography variant="body2">
  //               Status: This project is
  //               {project.inProgress === true
  //                 ? " complete."
  //                 : " a work in progress."}
  //             </Typography>
  //           </CardContent>
  //           <CardActions>
  //             <Button variant="outlined" href={project.githubUrl}>
  //               {/* {github} */}
  //               View Source Code
  //             </Button>
  //             <Button variant="outlined" href={project.projectUrl}>
  //               View Live Site
  //             </Button>
  //           </CardActions>
  //         </Card>
  //       </Grid>
  //     );
  //   });
  // };
  // render() {
  //   return (
  //     // <Box>
  //     <Grid className="projects" container>
  //       {this.projectMapper()}
  //     </Grid>
  //     // </Box>
  //   );
  // }
}

export default ProjectDisplay;
