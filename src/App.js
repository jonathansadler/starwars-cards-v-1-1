// useCallback

import { useState, useEffect } from 'react'

import { BrowserRouter as Router, Switch, useLocation, Route, useParams, Link } from "react-router-dom";

import People from './components/People'
import Detail from './components/Detail'


const App = () => {

  const [passrev, setPassrev] = useState(2) ;

  const [people, setPeople] = useState([])

  //callback for name
  //const [count2, setCount2] = useState("");
  /*
  const callback = useCallback((count2) => {
  }, [count2]);  
  */

  useEffect(() => {
    const getPeople = async () => {
      setPassrev(2)
      const peopleFromServer = await fetchPeople(passrev)
      setPeople(peopleFromServer)
    }

    getPeople()


  }, [])

  const ascorder = async () => {

    setPassrev(2)

    const FromServer = await fetchPeople(passrev)
    setPeople(FromServer)
  }


  const dscorder = async () => {

    setPassrev(1)

    const FromServer = await fetchPeople(passrev)
    setPeople(FromServer)
  
  }



  // Fetch Tasks
  const fetchPeople = async (b) => {
    const res = await fetch('http://swapi.dev/api/people')
    const data = await res.json()

    //.reverse()

    //var b = 1;

    if (b == 1){
      //desc
      var alldata = data.results.reverse();

      //console.log(alldata)

      return alldata
    
    } else if (b == 2) {

      //asc
      var alldata = data.results;

      //console.log(alldata)

      return alldata


    }




  }


  // Fetch Names
  const fetchNames = async (idname) => {
    const res = await fetch(`http://swapi.dev/api/people/${idname}`)
    //const res = await fetch(`http://swapi.dev/api/people/${person_url_id}`)
    const data = await res.json()
    return data
  }

  //<Detail parentCallback={callback}  /> //callback sets name

  return (
    <Router>


    <div className="all-content">
      
      <div className="panel-1">

        <Link to ='/'>
        <div className="button button-1" style={{ textDecoration: 'none' }}>
          <img className="icon" src="img/Card.svg" />
          <div className="roboto-normal-onyx-16px text">All Cards</div>
        </div> 
        </Link>
        
        <div className="button button-2">
          <img className="icon" src="img/Deck.svg" />
          <div className="roboto-normal-onyx-16px text">Decks</div>
        </div> 
        
        <div className="main-title">
          <div className="color2">SW-API Deck Builder</div>
        </div> 

        <div className="button button-3">

          <div className="roboto-normal-onyx-16px text callbackname-notes "></div>
        </div>

      </div>
      
      <div className="seperator-1">
      </div>


      <div className="breadcrumb">
        <div className="text-abc-1 roboto-normal-sonic-silver-16px" >All Cards</div>
        <img className="icon-abc-1" src="img/breadcumb-temp@2x.svg"/>
        <div className="text-abc-2 roboto-normal-mountain-mist-16px">Select a card</div>
      </div>      

      <div className="flex-container-a1">

            <form className="search flex-item-left-a1">
              <input className="search-text-1 roboto-normal-pink-swan-16px" type="text" id="search" name="search" value="Search" />
              <img className="icons" src="img/Search.svg"/>
            </form>


            <div className="sort roboto-normal-onyx-16px flex-item-right-a1">
              <div className="text-1">Sort by</div>
              
              <form className="sort-form">

                <select className="card-filter border-1px-pink-swan" id="cars" name="cars">
                  <option value="Homeworld">Homeworld</option>
                </select>

              </form>

              <div className="card-filter-buts">
                <img onClick={ascorder} className="label-sort-by-img-1" src="img/asc@2x.svg" />
                <img onClick={dscorder} className="label-sort-by-img-2" src="img/desc@2x.svg" /> 
              </div>
            </div>

      </div>
       


        <Switch>  

          <Route path="/detail">
            <div className="frame-abc-1" >
              <Detail />
            </div>
          </Route>

          <Route path="/" exact >
            <div className="frame-abc-1">
              <People people={people} />
            </div>
          </Route>  

        </Switch>


    </div>  


    </Router>

  )
}

export default App
