import {Routes, Route, Link} from "react-router-dom"
import PersonProfile from "../../PersonProfile"

function PeopleListItem(props) {
  const { person } = props

  return (
    <li>
      <Link to = {`/view/${person.id}`}>
        {person.name.first} {person.name.last}
      </Link>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  )
}

export default PeopleListItem
