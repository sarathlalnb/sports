import { commonAPI } from "../../services/commonAPI";
import { BaseUrl } from "./BaseUrl";



//admin



export const collegeListApi=async(header)=>{
    return await commonAPI('GET',`${BaseUrl}/adminapp/college/`,"",header)
}
export const userListApi=async(header)=>{
    return await commonAPI('GET',`${BaseUrl}/adminapp/student/`,"",header)
}
export const sponsorListApi=async(header)=>{
    return await commonAPI('GET',`${BaseUrl}/adminapp/sponsor/`,"",header)
}
export const getAllEventsApi=async(header)=>{
    return await commonAPI('GET',`${BaseUrl}/adminapp/event/`,"",header)
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

//sponsor

export const getEventListApi=async(header)=>{
    return await commonAPI('GET',`${BaseUrl}/sponsorapp/event/`,"",header)
}