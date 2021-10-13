import { BrowserRouter as Router, Switch, useLocation, Route, useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react'


const People = ({ people }) => {

  return (
    <>

      {people.map((person, index) => (

        <div key={index} className="cards-abc-1" style={{ textDecoration: 'none' }} >
          <Link to={{
              pathname: '/detail',
              state:{
                person_url_id: index+1
              }
            }}>

            <div className="top-card">
              <img className="icons-1" src="img/Card.svg" />
              <h1 className="place roboto-normal-white-24px">{person.name}</h1>
            </div>

            <div className="card-body">
              
              <div className="card-header" style={{ paddingLeft: 13  }}  >
                <div className="card-header-1">
                  <div className="card-header-2">
                    <img className="icons-2" src="img/Gender-Male.svg" />
                    <div className="birth roboto-normal-onyx-14px">{person.birth_year}</div>
                  </div>
                  <div className="species roboto-normal-onyx-14px">Species</div>
                </div>
                <div className="divider-card"></div>
              </div>

              <div className="card-info" style={{ paddingLeft: 13  }}>

                <div className="detail-1">
                  <div className="detail-1-top">
                    <img className="icons" src="img/Homeworld.svg" />
                    <div className="homeworld roboto-medium-sonic-silver-10px">HOMEWORLD</div>
                  </div>
                  <div className="planet roboto-normal-onyx-14px">Planet</div>
                </div>

                <div className="detail-1">
                  <div className="detail-1-top">
                    <img className="icons" src="img/Vehicle.svg" />
                    <div className="homeworld roboto-medium-sonic-silver-10px">VEHICLES</div>
                  </div>
                  <div className="planet roboto-normal-onyx-14px">{person.vehicles.length}</div>
                </div>

                <div className="detail-1">
                  <div className="detail-1-top">
                    <img className="icons" src="img/Starship.svg" />
                    <div className="homeworld roboto-medium-sonic-silver-10px">STARSHIPS</div>
                  </div>
                  <div className="planet roboto-normal-onyx-14px">{person.starships.length}</div>
                </div>


              </div>


            </div>
          
          
          </Link>  
        </div>
      
      ))}


    </>
  )
}

export default People
