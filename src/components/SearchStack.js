import React, { useEffect } from 'react'
import { useState, useRef } from 'react'
import DeleteBtn from './DeleteBtn'
import { Error } from '@material-ui/icons';

function SearchStack({emitCurrentStack}) {
  const [search, setSearch] = useState('')
  const [chips, setChips] = useState([])
  const [currentStack, setCurrentStack] = useState('')
  const [error, setError] = useState(null)

  const handleChange = (evt) => {
    setSearch(evt.target.value);
  };
  useEffect(() => {
    emitCurrentStack('')
  },[])

  const handleKeyDown = (evt) => {
    if (['Enter'].includes(evt.key)) {
      evt.preventDefault();
      var chip = search.toLowerCase().trim();
      if (chip && isValid(chip)) {
        setChips([...chips, chip])
        setSearch('')
        emitCurrentStack(chip.toLowerCase())
      }
    }
  };
  const deleteStack = (stack) => {
    setChips(chips.filter(c => c !== stack))
  };
  const isInList=(stack)=> {
    return chips.includes(stack);
  }
  const isValid = (stack) => { 
    if (isInList(stack)) {
      setError(`${stack} has already been added.`)
      setCurrentStack(stack)
      return false
    }
    setError(null)
    return true;
  }

  const clearStack = () => {
    setChips([])
  }

  return (
    <div className="search-stack-ctn">
      <input className={`stack-search-bar ${(error && chips.includes(currentStack)) ? 'error-indication' : ''}`}
      placeholder="Type or paste a stack and press `Enter`"
      value={search}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
    {chips.length ? <div className="chip-ctn">
      <div className="chip-item-ctn">
          {chips.map((c, index)=>
          <div className="chip-item" key={index}>
            <span>{c}</span>
            <DeleteBtn
            deleteStack={deleteStack}
            stack={c}
          />
          </div>
          )}
        </div>
          {chips.length ? <button className="clear-stack" onClick={()=>clearStack()}>Clear</button> : ''}
      </div> : ''}
      {(error && chips.includes(currentStack)) ? <p className="error"><Error/>{error}</p> : ''}
    </div>
  )
}

export default SearchStack
