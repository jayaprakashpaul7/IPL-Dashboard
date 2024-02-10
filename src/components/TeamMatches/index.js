// Write your code here
import './index.css'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  state = {teamMatchesData: {}}

  componentDidMount() {
    this.getMatchesData()
  }

  getMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updateddata = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerURl: data.team_banner_url,
    }
    this.setState({teamMatchesData: updateddata})
  }

  render() {
    const {teamMatchesData} = this.state
    const {teamBannerURl, latestMatchDetails, recentMatches} = teamMatchesData
    return (
      <div>
        <img src={teamBannerURl} alt="" className="team-img" />
        <div>
          <LatestMatch latestMatchDetails={latestMatchDetails} />
        </div>
      </div>
    )
  }
}
export default TeamMatches
