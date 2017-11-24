import React, { Component } from 'react';
import './Project.css'
import ProjectItem from './ProjectItem'
import PropTypes from 'prop-types'

class Projects extends Component {
  deleteProject (id) {
    this.props.onDelete(id)
  }
  render() {
    let projectItems
    if (this.props.data) {
      projectItems = this.props.data.map((project, index) => 
        <ProjectItem onDelete={this.deleteProject.bind(this)} dataItem={project} key={index}/>        
      )
    }
    return (
      <div className="project">
        {projectItems}
      </div>
    );
  }
}

Projects.propTypes = {
  data: PropTypes.array,
  onDelete: PropTypes.func
}

export default Projects;
