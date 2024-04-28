// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {teamMatchesData: {}, isLoad: true}

  componentDidMount() {
    this.getMatchesData()
  }

  getFormatedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,

      latestMatchDetails: this.getFormatedData(data.latest_match_details),

      recentMatches: data.recent_matches.map(each =>
        this.getFormatedData(each),
      ),
    }
    this.setState({teamMatchesData: updatedData, isLoad: false})
  }

  render() {
    const {teamMatchesData, isLoad} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchesData

    return (
      <div className="bg-2">
        {isLoad ? (
          <div testid="loader">
            <Loader type="Oval" height={50} width={50} color="#dd1acd" />
          </div>
        ) : (
          <>
            <img src={teamBannerUrl} alt="team banner" className="team-img" />
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            {recentMatches && <MatchCard recentMatchDetails={recentMatches} />}
          </>
        )}
      </div>
    )
  }
}
export default TeamMatches
