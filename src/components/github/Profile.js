import React, {Component} from 'react';
import RepoList from './RepoList';

class Profile extends Component {

  render(){
    return(
      <div>
         {this.props.userData.name}
         <img src={this.props.userData.avatar_url}/>
         <div>
           <div>{this.props.userData.public_repos} Repos</div>
           <div>{this.props.userData.public_gists} Public Gists</div>
           <div>{this.props.userData.followers} followers</div>
           <div>{this.props.userData.following} Following</div>
         </div>
         <div>
           <div>
            Username: {this.props.userData.login}
           </div>
           <div>
            Location: {this.props.userData.location}
           </div>
           <div>
            Email Address: {this.props.userData.email}
           </div>
         </div>
         <br />
         <a href={this.props.userData.html_url}> Visit Profile</a>
         <h3>User Repositories</h3>
         <div>
           <RepoList userRepos={this.props.userRepos}/>
         </div>
      </div>
    )
  }
}

export default Profile;
