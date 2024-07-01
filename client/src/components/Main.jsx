import React from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'
import { div } from 'three/examples/jsm/nodes/Nodes.js'
import SongCard from './SongCard'
import Playheader from './Playheader'

const Main = ()=>{
  return (
    <>
        <Nav />
        <div className=' flex flex-1'>
            <Sidebar />
            <div className='relative flex flex-1 border'>
              {
                [{
                  image: "https://i1.sndcdn.com/artworks-0WovZIV3mGnvybu3-LeSzUA-t500x500.jpg",
                  title: "Haule Haule"
                },{
                  image: "https://i1.sndcdn.com/artworks-0WovZIV3mGnvybu3-LeSzUA-t500x500.jpg",
                  title: "Haule Haule"
                },{
                  image: "https://i1.sndcdn.com/artworks-0WovZIV3mGnvybu3-LeSzUA-t500x500.jpg",
                  title: "Haule Haule"
                }].map((item) => (
                    <SongCard image={item.image} title={item.title}/>
                )
                )
                
              }
                  
              <Playheader /> 
            </div>
             
        </div>
    </>
  )
}

export default Main