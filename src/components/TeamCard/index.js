// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <Link to={`/team-matches/${id}`} className="link">
      <li className="item-c">
        <img src={teamImageUrl} className="logo" alt={name} />
        <p className="name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
