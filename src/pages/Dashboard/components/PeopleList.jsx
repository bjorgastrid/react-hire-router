import PeopleListItem from './PeopleListItem'

function PeopleList(props) {
  const { people } = props

  return (
    <ul>
      {people.map((person) => (
        <PeopleListItem key={person.id} person={person}/>
      ))}
    </ul>
  )
}

export default PeopleList
