// import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import JobLists from './components/JobLists.js'
import JobJsonData  from './components/JobJsonData';
import SearchStack  from './components/SearchStack';
import {useEffect, useState} from 'react'
function App() {
  const [filteredJobs, setFilteredJobs] = useState([])
  let formattedJobs = []
  JobJsonData().forEach(job=>{
      job.languages =job.languages.map(j=>j.toLowerCase())
      formattedJobs.push(job)
  })
  const filterJobs = (stack) => {
    if (stack) {
    setFilteredJobs(formattedJobs.filter(job => job.languages.includes(stack)))
    }
  }
  useEffect(()=>{
    // formatJobs()
  },[])
  return (
    <div className="App">
      <Header />
      <SearchStack emitCurrentStack={filterJobs} />
      <JobLists content={filteredJobs.length ? filteredJobs : formattedJobs} />
    </div>
  );
}

export default App;
