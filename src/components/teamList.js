import React from "react"
import Team from "./team"

// Problem: Need to render list of teams in sidebar

class TeamList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            teams: [
                { id: 1, name: 'Cincinnati Bengals', subName: 'bengals'},
                { id: 2, name: 'Washington Redskins', subName: 'redskins'},
                { id: 3, name: 'Detroit Lions', subName: 'lions'},
                { id: 4, name: 'New York Giants', subName: 'giants'},
                { id: 5, name: 'Miami Dolphins', subName: 'dolphins'},
                { id: 6, name: 'Los Angeles Chargers', subName: 'chargers'},
                { id: 7, name: 'Carolina Panthers', subName: 'panthers'},
                { id: 8, name: 'Arizona Cardinals', subName: 'cardinals'},
                { id: 9, name: 'Jacksonville Jaguars', subName: 'jaguars'},
                { id: 10, name: 'Cleveland Browns', subName: 'browns'},
                { id: 11, name: 'New York Jets', subName: 'jets'},
                { id: 12, name: 'Las Vegas Raiders', subName: 'raiders'},
                { id: 13, name: 'Tampa Bay Bucs', subName: 'bucs'},
                { id: 14, name: 'San Francisco 49ers', subName: '49ers'},
                { id: 15, name: 'Denver Broncos', subName: 'broncos'},
                { id: 16, name: 'Atlanta Falcons', subName: 'falcons'},
                { id: 17, name: 'Dallas Cowboys', subName: 'cowboys'},
                { id: 18, name: 'Miami Dolphins', subName: 'dolphins'},
                { id: 19, name: 'Las Vegas Raiders', subName: 'raiders'},
                { id: 20, name: 'Jacksonville Jaguars', subName: 'jaguars'},
                { id: 21, name: 'Philadelphia Eagles', subName: 'eagles'},
                { id: 22, name: 'Minnesota Vikings', subName: 'vikings'},
                { id: 23, name: 'Los Angeles Chargers', subName: 'chargers'},
                { id: 24, name: 'New Orleans Saints', subName: 'saints'},
                { id: 25, name: 'San Francisco 49ers', subName: '49ers'},
                { id: 26, name: 'Green Bay Packers', subName: 'packers'},
                { id: 27, name: 'Seattle Seahawks', subName: 'seahawks'},
                { id: 28, name: 'Baltimore Ravens', subName: 'ravens'},
                { id: 29, name: 'Tennessee Titans', subName: 'titans'},
                { id: 30, name: 'Miami Dolphins', subName: 'dolphins'},
                { id: 31, name: 'Minnesota Vikings', subName: 'vikings'},
                { id: 32, name: 'Kansas City Chiefs', subName: 'chiefs'},
            ]
        }
    }

    render() {
        console.log(this.state.teams)
        return(
            <aside>
                <ul className="nfl">
                    <Team teamInfo={this.state.teams} /> 
                </ul>
            </aside>
        )
    }
}

export default TeamList