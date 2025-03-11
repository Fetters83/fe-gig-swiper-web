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

/* export function getArtistTopTrack(artistName){
    return axios
    .post('https://be-gig-swiper-web.onrender.com/api/getSpotifyTrack',{
        artistName:artistName
    }).then((response)=>{

        console.log("api - get Artist Top Track Response:",response.artistName)
        return response
    })
} */

    export function getArtistTopTrack(artistName){
        console.log(`in get artist top track ${artistName}`)
        return axios
        .get('https://be-gig-swiper-web.onrender.com/api/getPreviewTrack',{
            params:{q:artistName}
           
        }).then((response)=>{

            console.log(response.data)
            console.log("api - get Artist Top Track Response:",response.artistName)

            if (!response.data.previewTrackUrl) {
                throw new Error(`No preview track found for ${artistName}`);
            }

            return response.data.previewTrackUrl
        }).catch((error)=>{
            console.error("Error fetching artist top track:", error); 
            throw error; 
        })
    }

export function getLikedGigs(email){
    return axios
    .get(`https://be-gig-swiper-web.onrender.com/api/getLikedGigs/${email}`)
    .then((response)=>{
        return response.data
    })
}


/* export function removeGig(email,id){
    console.log(typeof email)
    console.log(typeof id)
    return axios
    .delete(`https://be-gig-swiper-web.onrender.com/api/removeGig/${email}`,{
        params:{id:Number(id)}
    }).then((response)=>{
        return response.data
    }).catch((error)=>{
        console.log(error)
    })
} */

    export function removeGig(email,gigId){
   
        return axios
        .delete(`https://be-gig-swiper-web.onrender.com/api/removeGig/${email}`,{
            params:{id:gigId}
        }).then((response)=>{
            return response.data
        }).catch((error)=>{
            return error
        })
    }

///https://be-gig-swiper-web.onrender.com/api/saveGig
///https://be-gig-swiper-web.onrender.com/api/gigSearch/:stackNumber