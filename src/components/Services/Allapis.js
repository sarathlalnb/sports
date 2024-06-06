import { commonAPI } from "../../services/commonAPI";
import { BaseUrl } from "./BaseUrl";



//admin



export const collegeListApi=async(header)=>{
    return await commonAPI('GET',`${BaseUrl}/adminapp/college/`,"",header)
}
export const userListApi=async(header)=>{
    return await commonAPI('GET',`${BaseUrl}/adminapp/student/`,"",header)
}
export const sponsorListApi=async(id,header)=>{
    return await commonAPI('GET',`${BaseUrl}/adminapp/sponsor/`,"",header)
}