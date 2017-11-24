import React, { Component } from 'react';
import './Project.css'
import PropTypes from 'prop-types'

class ProjectItem extends Component {
  deleteProject (id) {
    this.props.onDelete(id)
  }

  render() {
    return (
      <div className="project-item">
        {this.props.dataItem.title} <span>belongs to </span> {this.props.dataItem.author}
        <a onClick={this.deleteProject.bind(this, this.props.dataItem.id)}> X</a>
      </div>
    );
  }
}

ProjectItem.propTypes = {
  dataItem: PropTypes.object,
  onDelete: PropTypes.func
}

export default ProjectItem;
