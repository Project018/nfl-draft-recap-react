/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Rounds from "./rounds"
import TeamList from "./teamList"
import PlayerList from "./playerList"
import BPA from "./bpa"
import Footer from "./footer"
import "./layout.css"

/* { children }  */
class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      roundOne: [
          {id: 1, player: 'Joe Burrow'}
      ],
      roundTwo: [
          {id: 33, player: 'Deshaun Thomas'}
      ]
    }
  }


  handleRoundPick() {
    console.log("button click!")
  
    
    // When user clicks on round button up the list with right rounded player
  }

  // handlePlayerListUpdate() {
  //   alert("We are showing round one player list")
  // }


  render() {
    console.log(this.state)
    return (
      <>
        <Header />
        <div
          style={{
            padding: `0 1.0875rem 1.45rem`,
            display: `flex`,
            flexDirection: `column`
          }}
        >
          <Rounds handleRoundPick={this.handleRoundPick} />
          <div className="row">
            <TeamList />
            <PlayerList 
              // handlePlayerListUpdate={this.handlePlayerListUpdate} 
              playerInfo={this.state.roundOne}
            />
            <BPA />
          </div>
          {/* <main>{children}</main> */}
        </div>
        <Footer />
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
