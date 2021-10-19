import React from 'react'
import Logo from './Logo'
// import 
const JobList = ({logo, company, newJob, featured, position, postedAt, contract, location, languages, role}) => {
  return (
    <div className={`list-item ${featured ? 'featured': ''}`}>
      <div className="left-side">
        <Logo logo={logo} companyName={company}/>
        <div className="job-content">
          <div className="job-content-row">
            <span className="company-name">{company}</span>
            {newJob && <span className="new-job">NEW!</span>}
            {featured && <span className="featured-job">FEATURED</span>}
          </div>
          <div className="job-content-row">
            <p>{position}</p>
          </div>
          <ul className="job-content-row">
              <li>{postedAt}</li>
              <li>{contract}</li>
              <li>{location}</li>
          </ul>
        </div>
      </div>
      <div className="right-side">
        <span>{role}</span>
        {languages.map(stack=> <span className="stack-item" key={stack}>{stack}</span>)}
      </div>
    </div>
  )
}

export default JobList
