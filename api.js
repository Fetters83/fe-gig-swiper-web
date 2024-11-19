import axios from "axios";


export function getAllEvents(location,radius){
    return axios
    .post(`https://be-gig-swiper-web.onrender.com/api/gigSearch`, {
        location:location,
        radius:radius
    }).then((response)=>{

              return response.data
    })
}

export function saveGig(likedgig,user){
    if(user){
        const gig = likedgig[0]
         return axios
    .post('https://be-gig-swiper-web.onrender.com/api/saveGig',{
            email:user.email,
            id:gig.id,
            title:gig.title,
            location:gig.location,
            imageurl:gig.imageurl,
            description:gig.description,
            eventname:gig.eventname,
            doorsopening:gig.doorsopening,
            doorsclosing:gig.doorsclosing,
            lastentry:gig.lastentry,
            date:gig.date,
            town:gig.town,
            postcode:gig.postcode,
            link:gig.link

    } ).then((response)=>{
        return response
    })
    }
   /*  return axios
    .post('https://be-gig-swiper-web.onrender.com/api/saveGig'),{

    } */
}

export function getArtistTopTrack(artistName){
    return axios
    .post('https://be-gig-swiper-web.onrender.com/api/getSpotifyTrack',{
        artistName:artistName
    }).then((response)=>{

        return response
    })
}

export function getLikedGigs(email){
    return axios
    .get(`https://be-gig-swiper-web.onrender.com/api/getLikedGigs/${email}`)
    .then((response)=>{
        return response.data
    })
}

///https://be-gig-swiper-web.onrender.com/api/saveGig
///https://be-gig-swiper-web.onrender.com/api/gigSearch/:stackNumber