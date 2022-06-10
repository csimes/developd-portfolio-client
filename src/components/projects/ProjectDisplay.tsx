import React, { Component } from "react";

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
        <tr key={index}>
          <th>{project.projectName}</th>
          <td>{project.hours}</td>
          {/* <td>{timesheet.timeType}</td>
          <td>{timesheet.date}</td>
          <td>
            <Button
              onClick={() => {
                this.props.editTimesheet(timesheet);
                this.props.updateOn();
              }}
            >
              Update
            </Button>
            <Button onClick={() => this.deleteTimesheet(timesheet)}>
              Delete
            </Button>
          </td> */}
        </tr>
      );
    });
  };

  render() {
    return <div>{this.projectMapper()}</div>;
  }
}

export default ProjectDisplay;
