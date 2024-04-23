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
        <div key={match.id} className="match-card">
          <img src={match.competingTeamLogo} alt={competingTeam} />
          <p> {match.competingTeam}</p>
          <p> {match.result}</p>
          <p>{match.matchStatus}</p>
        </div>
      ))}
    </div>
  )
}
export default MatchCard
