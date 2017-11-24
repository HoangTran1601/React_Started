import React, { Component } from 'react';
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'
import uuid from 'uuid'
import './App.css';
import {
  Route,
  Link
} from 'react-router-dom'
// Stateless component, dump component
const TestComp = (props) => (<div>{props.name}</div>)
const ChatMessageMe = (props) => (
  <div>
    <div title={props.name}>{props.name}</div>
    <div>{props.content()}</div>
  </div>
)
const Home = (props) => (
  <div>
    <h1>Home</h1>
  </div>
)
const About = ({match}) => (
  <div>
    <h1>About</h1>
    <ul>
      <li><Link to={`${match.url}/about-me`}>About me</Link></li>
    </ul>
    <Route path={`${match.url}/:id`} component={AboutMe}></Route>
  </div>
)
const AboutMe = ({match}) => (
  <div>
    <h3>{match.params.id}</h3>
  </div>
)

const Hello = ({name}) => {
  const sayHello = () => {
    alert(`Hello ${name}`)
  }
  
  return (
    <div>
      <a onClick={sayHello}>Say hi</a>
    </div>
  )
}
const Greeting = () => (
  <div>
    <Hello name="Nhan"/>
  </div>
)
// Stateful component
class App extends Component {
  constructor () {
    super()
    this.state = {
      num1: 0,
      num2: 0,
      sum: 0,
      count: 0,
      projects: [
        {
          id: uuid.v4(),
          title: 'Project 1',
          author: 'Hoang',
          category: 'Web Development'
        },
        {
          id: uuid.v4(),
          title: 'Project 2',
          author: 'Nhan',
          category: 'Web Development'
        }
      ]
    }
  }

  clickMe () {
    const count = this.state.count + 1
    this.setState({count: count})
  }
  getDataFromURl () {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => {
      if (res.status === 200) {
        res.json().then(data => {
          console.log(data)
        })
      }
    })
  }
  componentDidMount () {
    this.getDataFromURl()
  }
  handleAddProject (project) {
    let projects = this.state.projects
    projects.push(project)
    this.setState({
      projects: projects
    })
  }
  handleDeleteProject (id) {
    const projects = this.state.projects
    const index = projects.findIndex(x => x.id === id)
    if(index > -1) {
      projects.splice(index, 1)
    } else {
      alert('Bam nut')
    }
    this.setState({
      projects
    })
  }
  async handleChange (e) {
    const targetID = e.target.id
    if (targetID === 'num1') {
      await this.setState({
        num1: e.target.value
      })
    } else {
      await this.setState({
        num2: e.target.value
      })
    }
    const num1 = this.state.num1
    const num2 = this.state.num2
    let sum  = this.state.sum
    sum = Number(num1) + Number(num2)
    this.setState({
      sum: sum
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="App">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/product">Product</Link></li>
        </ul>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/product" component={Projects}/>
        <ChatMessageMe name="Mai" content={() => 'Hello'} />
        <ChatMessageMe name="Nhan" content={() => <img alt="hinh Nhan" src="https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.0-1/p50x50/19554396_499707873694231_7621618723392698045_n.jpg?oh=034d5070ae4ef814e863130f664b8f94&oe=5A91B493" />} />
        <TestComp name="Test" />
        <button onClick={this.clickMe.bind(this)}>Count: {count}</button>
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects onDelete={this.handleDeleteProject.bind(this)} data={this.state.projects}/>
        <input id="num1" type="text" value={this.state.num1} onChange={this.handleChange.bind(this)}/>
        <input id="num2" type="text" value={this.state.num2} onChange={this.handleChange.bind(this)}/>
        <h3>{this.state.sum}</h3>
        <Greeting />
      </div>
    );
  }
}

export default App;
