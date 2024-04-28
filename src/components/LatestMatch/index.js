// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
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
  } = latestMatchDetails
  return (
    <div className="latest-section">
      <p>Latest matches</p>
      <div className="latest-match-card">
        <div className="left-text">
          <p className="competing-team-title">{competingTeam}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          className="logo"
          alt={`latest match ${competingTeam}`}
        />
        <div className="right-text">
          <h1>First Innings</h1>
          <p>{firstInnings}</p>
          <h1>second innings</h1>
          <p>{secondInnings}</p>
          <h1>Man of the Match</h1>
          <p>{manOfTheMatch}</p>
          <h1>Umpires</h1>
          <p>{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
