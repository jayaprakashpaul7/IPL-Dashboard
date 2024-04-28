// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    result,
    matchStatus,
  } = recentMatchDetails
  return (
    <div>
      {recentMatchDetails.map(match => (
        <li key={match.id} className="match-card">
          <img
            src={match.competingTeamLogo}
            alt={`competing team ${match.competingTeam}`}
          />
          <p> {match.competingTeam}</p>
          <p> {match.result}</p>
          <p>{match.matchStatus}</p>
        </li>
      ))}
    </div>
  )
}
export default MatchCard
