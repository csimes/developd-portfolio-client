import React, { Component } from "react";
import { Table, TableHead } from "@mui/material";
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
        <Table key={index}>
          <tr>
            <TableHead>Project Name</TableHead>
            <TableHead>Project Summary</TableHead>
          </tr>
          <tr>
            <td>{project.projectName}</td>
            <td>{project.projectSummary}</td>
            <td>{project.imageUrl}</td>
            <td>{project.githubUrl}</td>
            <td>{project.projectUrl}</td>
            {project.inProgress === true ? (
              <td>Done</td>
            ) : (
              <td>Still working</td>
            )}
            {/* <td>
            <Button
              onClick={() => {
                this.props.editProject(project);
                this.props.updateOn();
              }}
            >
              Update
            </Button>
            <Button onClick={() => this.deleteProject(project)}>
              Delete
            </Button>
          </td> */}
          </tr>
        </Table>
      );
    });
  };

  render() {
    return <div>{this.projectMapper()}</div>;
  }
}

export default ProjectDisplay;
