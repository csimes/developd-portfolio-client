import React, { Component } from "react";
import ProjectDisplay from "./ProjectDisplay";

type ProjectIndexProps = {};

type ProjectIndexState = {
  results: [];
};

class ProjectIndex extends Component<ProjectIndexProps, ProjectIndexState> {
  constructor(props: any) {
    super(props);
    this.state = {
      results: [],
    };
  }

  getProjects = async () => {
    await fetch("http://localhost:3000/project/allProjects", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          results: res.projects,
        })
      )
      .catch((err) => `error: ${err}`);
    console.log(this.state.results);
  };

  componentDidMount() {
    this.getProjects();
  }
  render() {
    return <div>
      <ProjectDisplay results={this.state.results}/>
    </div>;
  }
}

export default ProjectIndex;
