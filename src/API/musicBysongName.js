import axios from 'axios';

export  const  getmusicBysongName=(songName)=>{
    const options = {
        method: 'GET',
        url: 'https://unsa-unofficial-spotify-api.p.rapidapi.com/search',
        params: {query: `${songName}`, count: '5', type: 'tracks'},
        headers: {
          'x-rapidapi-host': 'unsa-unofficial-spotify-api.p.rapidapi.com',
          'x-rapidapi-key': 'a602fbb5camshd575243ffb18719p1e81f4jsn11bc047e7093'
        }
      };
      axios.request(options).then(function ({data}) {
       // console.log(data);
        return data
    }).catch(function (error) {
     //   console.error(error);
        return error
    });
     
}