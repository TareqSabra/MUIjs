import axios from 'axios';

export  const  getmusicBysongName=(songName,setData)=>{
    const options = {
        method: 'GET',
        url: 'https://unsa-unofficial-spotify-api.p.rapidapi.com/search',
        params: {query: `${songName}`, count: '5', type: 'tracks'},
        headers: {
          'x-rapidapi-host': 'unsa-unofficial-spotify-api.p.rapidapi.com',
          'x-rapidapi-key': '960019a03cmsh25fd760599a8346p1691a1jsn8a9d50eab0a3'
         // 'a602fbb5camshd575243ffb18719p1e81f4jsn11bc047e7093'
        }
      };
    axios.request(options).then(function ({data}) {
       // console.log(data);
       setData( data)
    }).catch(function (error) {
     //   console.error(error);
        return error
    });  
}