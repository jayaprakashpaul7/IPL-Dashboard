// Write your code here
import './index.css'
import {Component} from 'react'

const LatestMatch=(props)=> {
  state = {latestMatchData: {}}

  componentDidMount() {
    this.convertData()
  }

  convertData = () => {
    const {latestMatchDetails} = this.props
    const updatedData = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }
    this.setState({latestMatchData: updatedData})
  }

  render() {
    const {latestMatchData} = this.state
    const {
      umpires,
      result,
      manOfTheMatch,
      date,
      venue,
      competingTeam,
      competingTeamLogo,
      firstInnings,
      secondInnings,
      matchStatus,
    } = latestMatchData
    const umpiresArray = latestMatchData.umpires
      ? latestMatchData.umpires.split(', ')
      : []
    return <div>k</div>
  }
}
export default LatestMatch
