import React, { Component } from 'react';
import uuid from 'uuid'
import PropTypes from 'prop-types'

class AddProject extends Component {
  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile']
  }

  handleSubmit (e) {
    e.preventDefault()
    const title = this.refs.title.value 
    const author = this.refs.author.value
    const category = this.refs.category.value
    if (!title || !author || !category) {
      return
    } else {
      this.setState({
        newProject: {
          id: uuid.v4(),
          title,
          author,
          category
        }
      }, () => {
        this.props.addProject(this.state.newProject)
      })
    }
  }

  render() {
    const option = this.props.categories.map((category, index) => 
      <option key={index} value={category}>{category}</option>
    )
    return (
      <div>
        <h1>Add project</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label htmlFor="">Title</label>
            <input type="text" ref="title" />
          </div>
          <div>
            <label htmlFor="">Author</label>
            <input type="text" ref="author" />
          </div>
          <div>
            <label htmlFor="">Category</label>
            <select ref="category">
              {option}
            </select>
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

AddProject.propTypes = {
  categories: PropTypes.array,
  addProject: PropTypes.func
}

export default AddProject;
