import axios from "axios"; 
 export const commonAPI = async(httprequest,url,reqBody,reqHeader)=>{
    const token = localStorage.getItem('token');
    const reqConfig = {
        method:httprequest,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader:{"Content-Type":"application/json", "Authorization": `Token ${token}`}
    }
    
     return await axios(reqConfig).then((result)=>{
        return result

    }).catch((err)=>{
        return err
    })

}

export const CmommonAPI = async(httprequest,url,reqBody,reqHeader)=>{
    const token = localStorage.getItem('token');
    const reqConfig = {
        method:httprequest,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader:{"Content-Type":"multipart/form-data", "Authorization": `Token ${token}`}
    }
    
     return await axios(reqConfig).then((result)=>{
        return result

    }).catch((err)=>{
        return err
    })

}