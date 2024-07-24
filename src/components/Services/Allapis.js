import { CmommonAPI, commonAPI } from "../../services/commonAPI";
import { BaseUrl } from "./BaseUrl";


//admin



export const collegeListApi=async(header)=>{
    return await commonAPI('GET',`${BaseUrl}/adminapp/college/`,"",header)
}
export const userListApi=async(id)=>{
    return await commonAPI('GET',`${BaseUrl}/adminapp/college/${id}/`,"","")
}
export const sponsorListApi=async(header)=>{
    return await commonAPI('GET',`${BaseUrl}/adminapp/sponsor/`,"",header)
}
export const getAllEventsApi=async(header)=>{
    return await commonAPI('GET',`${BaseUrl}/adminapp/event/`,"",header)
}
export const addEventApi=async(data,header)=>{
    return await CmommonAPI('POST',`${BaseUrl}/adminapp/event/`,data,header)
}
export const getAllwinnersApi=async(header)=>{
    return await commonAPI('GET',`${BaseUrl}/adminapp/winner/`,"",header)
}
export const addWinnerApi=async(data,reqHeader)=>{
    return await CmommonAPI('POST',`${BaseUrl}/adminapp/winner/`,data,reqHeader)
}
export const EventdeleteApi=async(uid,reqHeader)=>{
    return await CmommonAPI('DELETE',`${BaseUrl}/adminapp/event/${uid}/`,"",reqHeader)
}



//college

export const collegeEventApi=async(header)=>{
    return await commonAPI('GET',`${BaseUrl}/collegeapp/event/`,"",header)
}
export const getAthletesApi=async(header)=>{
    return await commonAPI('GET',`${BaseUrl}/collegeapp/student/`,"",header)
}
export const getSponsorApi=async(header)=>{
    return await commonAPI('GET',`${BaseUrl}/collegeapp/sponsors/`,"",header)
}
export const studentregApi=async(header)=>{
    return await commonAPI('POST',`${BaseUrl}/collegeapp/studregister/`,header,"")
}
export const studentlistApi=async(header)=>{
    return await commonAPI('GET',`${BaseUrl}/collegeapp/student/`,header,"")
}
// export const sponsorlistApi=async(header)=>{
//     return await commonAPI('GET',`${BaseUrl}/collegeapp/sponsors/`,header,"")
// }

 
//sponsor

export const getEventListApi=async(header)=>{
    return await commonAPI('GET',`${BaseUrl}/sponsorapp/event/`,"",header)
}
export const getStudentListApi=async(header)=>{
    return await commonAPI('GET',`${BaseUrl}/sponsorapp/student/`,header,"")
}

export const studsponAPI=async(id,reqbody,header)=>{
    return await commonAPI('POST',`${BaseUrl}/sponsorapp/student/${id}/sponsor_child/`,reqbody,header)
}

export const getSponseredStudentListApi=async(header)=>{
    return await commonAPI('GET',`${BaseUrl}/sponsorapp/sponsorship/`,header,"")
}



//Athletes

export const athletesEventApi=async(header)=>{
    return await commonAPI('GET',`${BaseUrl}/athleteapp/event/`,"",header)
}

export const winnerslistApi=async(header)=>{
    return await commonAPI('GET',`${BaseUrl}/athleteapp/mywins/`,"",header)
}

export const profileApi=async(header)=>{
    return await commonAPI('GET',`${BaseUrl}/athleteapp/profile/`,header,"")
}

export const mySponsorApi=async(header)=>{
    return await commonAPI('GET',`${BaseUrl}/athleteapp/sponsor/`,header,"")
}
export const updateAUserprofileAPI=async(data,header)=>{
    return await commonAPI('PUT',`${BaseUrl}/athleteapp/profile/`,data,header)
}


export const EventregApi=async(payload,header)=>{
    return await commonAPI('GET',`${BaseUrl}/athleteapp/partevent/${payload}/`,header)
}

export const UserEventlistApi=async(header)=>{
    return await commonAPI('GET',`${BaseUrl}/athleteapp/parteventget/`,header,"")
}

