import React from 'react'
import ListItem from './ListItem'

const JobLists = ({content}) => {
  return (
    <div className="list-item-ctn">
      {content.map(c => 
      <ListItem 
      key={c.id}
      logo={c.logo} 
      company={c.company}
      newJob={c.new}
      featured={c.featured}
      position={c.position}
      postedAt={c.postedAt}
      contract={c.contract}
      location={c.location}
      languages={c.languages}
      role={c.role}
      />
      )}
    </div>
  )
}

export default JobLists
