import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from '../../Componants/header/header';
import SideBar from '../../Componants/Sidebar/Sidebar';
import Songlist from '../songList/songList';
import { getmusicByArtist} from "../../API/musicBysongArtist"
import { getmusicBysongName} from "../../API/musicBysongName"

const Mainpage = (props) => {
    const {toggle ,setToggel}= props
    const [Artist,setArtist]=useState('')
    const [Song,setSong]=useState('')
    const [data,setdata]=useState([])
    const handelChange =(event)=>{
        const {name,value}= event.target
        if(name==='Artist'){
            setArtist(value);
        }
        else{
            setSong(value);
        }
    }
    useEffect(()=>{
        async function fetchData() {
              getmusicByArtist(Artist,setdata);
           }
          fetchData();
    },[Artist])

    useEffect(()=>{
           async function fetchData() {
            console.log(getmusicBysongName(Song,setdata));
          
          }
          fetchData();
    },[Song])
    console.log("data from home",data)
    return ( 
        <>
            <Header toggle={toggle} setToggel={setToggel} Artist={handelChange} song={handelChange}></Header>
            <SideBar>
            </SideBar>
            <Songlist data={data.Results}></Songlist>
           
        </>
        /*
        {
         
        }
        */
     );
     
}
 
export default Mainpage;