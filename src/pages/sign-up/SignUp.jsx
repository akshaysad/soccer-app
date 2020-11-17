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
                {id:1, name:"sam", skills:3},
                {id:2, name:"Donald", skills:1},
                {id:3, name:"ram", skills:8},
                {id:4, name:"john", skills:5},
                {id:5, name:"messi", skills:6},
                {id:6, name:"sammy", skills:5},
                {id:7, name:"jimmy", skills:3},
                {id:8, name:"stephan", skills:8},
                {id:9, name:"paul", skills:1},
                {id:10, name:"saul", skills:5},
                {id:11, name:"david", skills:6},
                {id:12, name:"jacob", skills:1},
            ],
            allPlayer: [],
            allSkills:null,
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
        this.allPlayers(players);
    }

    allPlayers(players){
        let countSkill=0;
        for (let i = 0; i < players.length; i++) {
            this.setState(prevState => ({
                allPlayer: [...prevState.allPlayer, players[i]]
            }));

            countSkill = players[i].skills + countSkill;
        }
        this.setState({allSkills:countSkill});
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
        for (let i = 0; i <  this.state.allPlayer.length ;i++) {
        playerList.push(this.state.allPlayer[i])
        }
        this.shuffle(playerList);
        let half_length = Math.ceil(playerList.length / 2);
        console.log(this.state.allPlayer);

        let rightSide = playerList.splice(5,half_length);
        let leftSide = playerList.splice(0,half_length);

        this.setState({
            secondTeam: rightSide
        });
        this.setState({
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

                      {/*<div className="card-action">*/}
                      {/*<a href="#">This is a link</a>*/}
                      {/*<a href="#">This is a link</a>*/}
                      {/*</div>*/}
                      </div>
                      </div>

                  )}
                  </ul>
              </div>
              <div className="col s2">
                  <p>Vs</p>
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

                                  {/*<div className="card-action">*/}
                                  {/*    <a href="#">This is a link</a>*/}
                                  {/*    <a href="#">This is a link</a>*/}
                                  {/*</div>*/}
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

