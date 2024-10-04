import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm({person, hiredPeople, setHiredPeople}) {
  const [wage, setWage] = useState(0)

  const navigate = useNavigate()

  const handleSubmit = (event) =>{
    event.preventDefault();
    let personIndex = hiredPeople.findIndex(p => p.id === person.id)
    if(personIndex !== -1){
      const newHiredPeople = [...hiredPeople]
      newHiredPeople[personIndex].wage = wage;
      setHiredPeople(newHiredPeople)
    }
    else{
    setHiredPeople([...hiredPeople, {... person, wage: wage}])
    } 
    navigate("/")
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm
