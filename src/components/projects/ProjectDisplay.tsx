import React, { Component } from "react";
import {
  Container,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Link,
} from "@mui/material";
// import github from "../../assets/github-circle.svg";

type ProjectDisplayProps = {
  results: [];
};

type ProjectDisplayState = {};

class ProjectDisplay extends Component<
  ProjectDisplayProps,
  ProjectDisplayState
> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  projectMapper = () => {
    return this.props.results.map((project: any, index) => {
      return (
        <Container>
          <Card key={index} sx={{ maxWidth: 400 }}>
            <CardHeader title={project.projectName} />
            <CardMedia
              component="img"
              height="194"
              image={project.imageUrl}
              alt={project.name}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {project.projectSummary}
              </Typography>
            </CardContent>
            {/* 
            {project.inProgress === true ? (
              <TableCell>Done</TableCell>
            ) : (
              <TableCell>Still working</TableCell>
            )} */}
            <CardActions>
              <Button variant="outlined" href={project.githubUrl}>
                Github Repository
              </Button>
              <Button variant="outlined" href={project.projectUrl}>
                Deployed Project
              </Button>
            </CardActions>
          </Card>
        </Container>
      );
    });
  };

  render() {
    return <div>{this.projectMapper()}</div>;
  }
}

export default ProjectDisplay;
