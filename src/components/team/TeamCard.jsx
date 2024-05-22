import React from "react"

const TeamCard = ({ team }) => {
  return (
    <>
      {team.map((val, index) => (
        <div className='items shadow' key={index}>
          <div className='img'>
            <img src={val.cover} alt={val.name} />
            <div className='overlay'>
              <a href={val.twitterLink} target="_blank" rel="noopener noreferrer">
                <i className='fab fa-twitter icon'></i>
              </a>
              <a href={val.instagramLink} target="_blank" rel="noopener noreferrer">
                <i className='fab fa-instagram icon'></i>
              </a>
              <a href={val.tiktokLink} target="_blank" rel="noopener noreferrer">
                <i className='fab fa-tiktok icon'></i>
              </a>
            </div>
          </div>
          <div className='details'>
            <h2>{val.name}</h2>
            <p>{val.work}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default TeamCard
