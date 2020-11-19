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
            position : [
                {
                    x: 110,
                    y: -190
                },
                {
                    x: -110,
                    y: -190
                },
                {
                    x: 150,
                    y: 50
                },
                {
                    x: 0,
                    y: 100
                },
                {
                    x: -150,
                    y: 50
                },
                {
                    x: -200,
                    y: 180
                },
                {
                    x: 200,
                    y: 180
                },
                {
                    x: 100,
                    y: 300
                },
                {
                    x: -100,
                    y: 300
                },

                {
                    x: 0,
                    y: 410
                }
            ],
            playersPool : [
             {
                 id:1,
                 skills:1,
                 description:"irregular ball control and shooting",
                name: 'Pizarro',
                asset: 'bm-pizarro.jpg',
                origin: 'Peru',
                height: '1.84m',
                shirt: '14',
                pos: 'Forward',
                dob: '36',
                goals: 1,
                games: 16
            },
                {
                     id:2,
                    skills:8,
                    description:"our local messi / ronaldo",
                name: 'Robben',
                asset: 'bm-robben.png',
                origin: 'Holland',
                height: '1.80m',
                shirt: '10',
                pos: 'Forward',
                dob: '32',
                goals: 19,
                games: 30
            }, {
                 id:3, skills:5, description:"good ball control and good shot",
                name: 'Rilbery',
                asset: 'bm-rilbery.jpg',
                origin: 'France',
                height: '1.70m',
                shirt: '7',
                pos: 'Midfield',
                dob: '32',
                goals: 9,
                games: 22
            }, {id:4, skills:6, description:"good play maker",
                name: 'Schweinsteiger',
                asset: 'bm-schweinsteiger.jpg',
                origin: 'Germany',
                height: '1.87m',
                shirt: '24',
                pos: 'Forward',
                dob: '31',
                goals: 21,
                games: 3
            }, {
                 id:5, skills:5, description:"good ball control and good shot",
                name: 'Martinez',
                asset: 'bm-martinez.jpg',
                origin: 'Spain',
                height: '1.90m',
                shirt: '8',
                pos: 'Midfield',
                dob: '28',
                goals: 0,
                games: 2
            }, {
                 id:6, skills:3, description:"decent ball control and field vision.",
                name: 'Alaba',
                asset: 'bm-alaba.jpg',
                origin: 'Austria',
                height: '1.80m',
                shirt: '27',
                pos: 'Defence',
                dob: '24',
                goals: 5,
                games: 27
            }, {id:7, skills:8, description:"our local messi / ronaldo",
                name: 'Lahm',
                asset: 'bm-lahm.jpg',
                origin: 'Germany',
                height: '1.70',
                shirt: '21',
                pos: 'Defence',
                dob: '32',
                goals: 2,
                games: 25
            }, {id:8, skills:1, description:"irregular ball control and shooting",
                name: 'Benatia',
                asset: 'bm-benatia.jpg',
                origin: 'France',
                height: '1.87m',
                shirt: '5',
                pos: 'Defence',
                dob: '31',
                goals: 21,
                games: 1
            }, {id:9, skills:5, description:"good ball control and good shot",
                name: 'Dante',
                asset: 'bm-dante.jpg',
                origin: 'Brazil',
                height: '1.87m',
                shirt: '4',
                pos: 'Defence',
                dob: '32',
                goals: 0,
                games: 34
            }, {
                 id:10, skills:6, description:"good play maker",
                name: 'Neuer',
                asset: 'bm-neuer.jpg',
                origin: 'Germany',
                height: '1.93m',
                shirt: '1',
                pos: 'Goalie',
                dob: '29',
                goals: 0,
                games: 48
            }],
            allPlayer: [],
            averageSkills:null,
            firstTeam: [],
            secondTeam:[],

        };
        this.makeTeams = this.makeTeams.bind(this);
        this.getPosition = this.getPosition.bind(this);

    }
    componentDidMount()
    {
        this.choosePlayers();

    }


    getPosition(i) {
        const x = this.state.position[i].x;
        const y = this.state.position[i].y;

        return {display:"block", opacity: 1,transform: `translateX(${x}px) translateZ(${y}px`}

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
                      <img  src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/"+player.asset} alt="" className="circle"/>
                          <span className="title">{player.name}</span>
                          <a href="#!" className="secondary-content"><i className="material-icons">Skills:{player.skills}</i></a>
                  </li>
          )}
          </ul>

          <button onClick={this.makeTeams} className="waves-effect waves-light btn">Make Teams</button>
          </div>

              <div className="col s4">

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

          </div>
          </div>

          <div className="row">
              <div className="stage">
                  <div className="world">
                      <div className="team">

                          {this.state.firstTeam && this.state.firstTeam.map((player, i)=>
                              <div className="player" style={this.getPosition(i)}>
                                  <div className="player__placeholder">
                                  </div>
                                  <div className="player__card">
                                      <h3>{player.name}</h3>
                                      <ul className="player__card__list">
                                          <li>DOB<br/>{player.dob}</li>
                                          <li>Height<br/>{player.height}</li>
                                          <li>Origin<br/>{player.origin}</li>
                                      </ul>
                                      <ul className="player__card__list player__card__list--last">
                                          <li><span>Games</span><br/>{player.games}</li>
                                          <li><span>Goals</span><br/>{player.goals}</li>
                                      </ul>
                                  </div>
                                  <div className="player__label" style={{display:"block", opacity: "1"}}>
                                      <span>{player.name}</span>
                                  </div>
                                  <div className="player__img"><img
                                      src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/"+player.asset}/>
                                  </div>
                              </div>
                          )}

                          {this.state.secondTeam && this.state.secondTeam.map((player, i)=>
                              <div className="player" style={this.getPosition(i+5)}>
                                  <div className="player__placeholder">
                                  </div>
                                  <div className="player__card">
                                      <h3>{player.name}</h3>
                                      <ul className="player__card__list">
                                          <li>DOB<br/>{player.dob}</li>
                                          <li>Height<br/>{player.height}</li>
                                          <li>Origin<br/>{player.origin}</li>
                                      </ul>
                                      <ul className="player__card__list player__card__list--last">
                                          <li><span>Games</span><br/>{player.games}</li>
                                          <li><span>Goals</span><br/>{player.goals}</li>
                                      </ul>
                                  </div>
                                  <div className="player__label" style={{display:"block", opacity: "1"}}>
                                      <span>{player.name}</span>
                                  </div>
                                  <div className="player__img"><img
                                      src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/"+player.asset}/>
                                  </div>
                              </div>
                          )}

                      </div>

                      <div className="terrain">
                          <div className="field ground">
                              <div className="field__texture field__texture--gradient"></div>
                              <div className="field__texture field__texture--gradient-b"></div>
                              <div className="field__texture field__texture--grass"></div>
                              <div className="field__line field__line--goal"></div>
                              <div className="field__line field__line--goal field__line--goal--far"></div>
                              <div className="field__line field__line--outline"></div>
                              <div className="field__line field__line--penalty"></div>
                              <div className="field__line field__line--penalty-arc"></div>
                              <div className="field__line field__line--penalty-arc field__line--penalty-arc--far"></div>
                              <div className="field__line field__line--mid"></div>
                              <div className="field__line field__line--circle"></div>
                              <div className="field__line field__line--penalty field__line--penalty--far"></div>
                          </div>
                          <div className="field__side"></div>
                      </div>
                  </div>
              </div>

              <canvas id="pitch" width="600" height="600"></canvas>

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

