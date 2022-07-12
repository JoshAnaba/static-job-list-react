// import logo from './logo.svg'
import './App.css'
import Header from './components/Header.js'
import JobLists from './components/JobLists.js'
import JobJsonData  from './components/JobJsonData'
import SearchStack  from './components/SearchStack'
import {useEffect, useState} from 'react'
function App() {
  const jobJson = JobJsonData()
  const [jobs, setJobs] = useState(jobJson)
  const [chips, setChips] = useState([])
  const deleteChip = (chip) => {
    setChips(chips.filter(c => c !== chip))
  };
  const clearChip = () => {
    setChips([])
  }
  const filterJobs = (chip) => {
    if (chip) {
      chip = chip.toLowerCase()
      const formattedJobs = jobJson.map(job => {
        job.languages = job.languages.map(e => {
          e = e.toLowerCase()
          return e
        })
        job.tools = job.tools.map(e => {
          e = e.toLowerCase()
          return e
        })
        return job
      })
      setChips([...chips, chip])
      setJobs(formattedJobs.filter(e=> e.languages.includes(chip) || e.role.toLowerCase().includes(chip) || e.tools.includes(chip)))
    }
  }
  useEffect(()=>{
    // formatJobs()
  },[])
  return (
    <div className="App">
      <Header />
      <SearchStack emitCurrentStack={filterJobs} chips={chips} clearStack={clearChip} deleteStack={deleteChip} />
      <JobLists content={jobs} />
    </div>
  )
}

export default App
