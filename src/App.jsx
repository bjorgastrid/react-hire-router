import { useState, useEffect } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'
import {Routes, Route, Link} from "react-router-dom"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  const url = "https://randomuser.me/api/?results=50"
  useEffect(() => {
    const fetchData = async () => {
      const peopleResponse = await fetch(url);
      const jsonPeople = await peopleResponse.json();
      setPeople(jsonPeople.results.map((person, index) => ({
        ...person,
        id: index + 1
      })))
    };
    fetchData();
  }, []);


  return (
    <div>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <Link to="/">Dashboard</Link>
          </ul>
        </nav>
      </header> 
      <Routes>
        <Route path = "/" element = {<Dashboard people = {people} hiredPeople = {hiredPeople}/>}/>
        <Route path = "/view/:id" element = {<PersonProfile people = {people} hiredPeople = {hiredPeople} setHiredPeople={setHiredPeople}/>}/>
      </Routes>
    </div>
  )
}
