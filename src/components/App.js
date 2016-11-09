import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile';
import Search from './github/Search';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: 'andela-denoma',
      userData: [],
      userRepos: [],
      perPage: 10
    }
  }

  getUserData(){
    $.ajax({
      url:
       'https://api.github.com/users/'+this.state.username+'?client_id='+
       this.props.clientId+'&client_secret='+this.props.clientSecret,
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({userData: data})

      }.bind(this),
      error: function(xhr, status, err){
        this.setState({username: null})
        alert(err);
      }.bind(this)
    })
  }

  getUserRepos(){
    $.ajax({
      url:
       'https://api.github.com/users/'+this.state.username+'/repos?per_page='+
       this.state.perPage+'&client_id='+this.props.clientId+'&client_secret='+
       this.props.clientSecret+'&sort=created',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({userRepos: data})
      }.bind(this),
      error: function(xhr, status, err){
        this.setState({username: null})
        alert(err);
      }.bind(this)
    })
  }

  handleFormSubmit(username) {
    this.setState({
      username: username}, function(){
        this.getUserData();
        this.getUserRepos();
    })
  }

  componentDidMount(){
    this.getUserData();
    this.getUserRepos();
  }

  render(){
    return(
      <div>
      <Search onFormSubmit={this.handleFormSubmit.bind(this)}/>
      <Profile {...this.state}/>
      </div>
    )
  }
}

App.propTypes = {
    clientId: React.PropTypes.string,
    clientSecret: React.PropTypes.string,
}

App.defaultProps = {
  clientId: 'b190b0a153651db25cdd',
  clientSecret: '95019b15ca6b9f1aa14540e193cbfb1240e622ef',
}

export default App;
