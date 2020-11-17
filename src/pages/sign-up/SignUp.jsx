import React from 'react';

import loadable from 'react-loadable';
import {connect} from "react-redux";
import {loadApiLoader} from "@/js/actions";


function mapDispatchToProps(dispatch) {
    return {
        loadApiLoader: loader => dispatch(loadApiLoader(loader))
    };
}
let test;
class SignUpComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             playersPool : [
                {id:1, name:"sam", skills:3, description:"decent ball control and field vision."},
                {id:2, name:"Donald", skills:1, description:"irregular ball control and shooting"},
                {id:3, name:"ram", skills:8, description:"our local messi / ronaldo"},
                {id:4, name:"john", skills:5, description:"good ball control and good shot"},
                {id:5, name:"messi", skills:6, description:"good play maker"},
                {id:6, name:"sammy", skills:5, description:"good ball control and good shot"},
                {id:7, name:"jimmy", skills:3, description:"decent ball control and field vision."},
                {id:8, name:"stephan", skills:8, description:"our local messi / ronaldo"},
                {id:9, name:"paul", skills:1, description:"irregular ball control and shooting"},
                {id:10, name:"saul", skills:5, description:"good ball control and good shot"},
                {id:11, name:"david", skills:6, description:"good play maker"},
                {id:12, name:"jacob", skills:1, description:"irregular ball control and shooting"},
            ],
            allPlayer: [],
            averageSkills:null,
            firstTeam: [],
            secondTeam:[],

        };
        this.makeTeams = this.makeTeams.bind(this);

    }
    componentDidMount()
    {
        this.choosePlayers();
    }


    choosePlayers() {
        const players= [];
        for (let i = 0; players.length <10; i++) {
            const idx = Math.floor((Math.random() * this.state.playersPool.length) +1);
            const found = players.some(el => el.id === idx);
            if (!found){
                players.push(this.state.playersPool[idx -1]);
            }
        }
        let countSkill=0;
        for (let i = 0; i < players.length; i++) {
            this.setState(prevState => ({
                allPlayer: [...prevState.allPlayer, players[i]]
            }));

            countSkill = players[i].skills + countSkill;
        }

        this.setState({averageSkills:countSkill/2});
    }


    shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    makeTeams(){
        let playerList= [];
        let teamOneSkills = 0;
        let teamTwoSkills = 0;
        for (let i = 0; i <  this.state.allPlayer.length ;i++) {
        playerList.push(this.state.allPlayer[i])
        }
        this.shuffle(playerList);
        let half_length = Math.ceil(playerList.length / 2);
        let rightSide = playerList.splice(5,half_length);
        let leftSide = playerList.splice(0,half_length);
        for (let team of leftSide) {
            teamOneSkills = team.skills + teamOneSkills;
        }
        for (let team of rightSide) {
            teamTwoSkills = team.skills + teamTwoSkills;
        }
        const difference= Math.abs(teamOneSkills - teamTwoSkills);
        if(difference !==0 && difference >1 ) {
            this.setState({balanced: "not_balanced" });
        } else {
            this.setState({balanced: "balanced" });
        }
        this.setState({
            secondTeam: rightSide,
            teamOneSkills,
            teamTwoSkills,
            firstTeam: leftSide

        });


    }

    render() {

        return (
      <div>
          <div className="row">
              <div className="col s2">
          <ul className="collection">

          {this.state.allPlayer && this.state.allPlayer.map((player)=>

                  <li className="collection-item avatar">
                      <img src="./assets/images/temp/user-image.jpg" alt="" className="circle"/>
                          <span className="title">{player.name}</span>
                          <a href="#!" className="secondary-content"><i className="material-icons">Skills:{player.skills}</i></a>
                  </li>
          )}
          </ul>

          <button onClick={this.makeTeams} className="waves-effect waves-light btn">Make Teams</button>
          </div>

              <div className="col s4">
                  <ul className="collection">

                  {this.state.firstTeam && this.state.firstTeam.map((player)=>

                      <div className="col s12 m6">
                      <div className="card darken-1">
                      <div className="card-content">
                      <span className="card-title">{player.name}</span>
                          <img src="./assets/images/temp/user-image.jpg" alt="" className="circle"/>
                          <span className="title">{player.name}</span>
                          <a href="#!" className="secondary-content"><i className="material-icons">Skills:{player.skills}</i></a>
                      </div>

                      <div className="card-action">
                      <a href="#">{player.description}</a>
                      </div>
                      </div>
                      </div>

                  )}
                  </ul>
              </div>
              <div className="col s2 " style={{textAlign: "center"}}>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                    <label>Average</label>
                  <p>{this.state.averageSkills}</p>
                  <br/>

                  {this.state.teamTwoSkills &&
                  <div>
                      <label>Team One</label>
                  <p>{this.state.teamOneSkills}</p>

                  <br/>
                  </div>
                  }

                  {this.state.teamTwoSkills &&
                      <div>
                      <label>Team Two</label>
                  <p>{this.state.teamTwoSkills}</p>
                      </div>
                  }
                  <br/>

                  {this.state.balanced != undefined && this.state.balanced === "not_balanced" &&
                  <div>
                      <h4 style={{color: "red"}}>NOT BALANCED</h4>
                      <br/>
                      <button onClick={this.makeTeams} className="waves-effect waves-light red btn">Retry</button>
                  </div>
                  }
                  {this.state.balanced != undefined && this.state.balanced === "balanced" &&
                  <div>
                      <h4 style={{color: "#64dd17"}}>BALANCED</h4>
                      <br/>
                  </div>
                  }

              </div>
              <div className="col s4">
                  <ul className="collection">

                      {this.state.secondTeam && this.state.secondTeam.map((player)=>
                          <div className="col s12 m6">
                              <div className="card darken-1">
                                  <div className="card-content">
                                      <span className="card-title">{player.name}</span>
                                      <img src="./assets/images/temp/user-image.jpg" alt="" className="circle"/>
                                      <span className="title">{player.name}</span>
                                      <a href="#!" className="secondary-content"><i className="material-icons">Skills:{player.skills}</i></a>
                                  </div>
                                  <div className="card-action">
                                  <a href="#">{player.description}</a>
                              </div>
                              </div>
                          </div>
                      )}
                  </ul>
          </div>
          </div>

      </div>


        )
    }
}

const SignUp = connect(
    null,
    mapDispatchToProps
)(SignUpComponent);

export default SignUp;

