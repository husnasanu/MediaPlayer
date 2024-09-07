import serverUrl from "./baseURL"
import commonAPI from "./commonAPI"


// upload video
export const uploadVideoAPI = async (uploadVideo)=>{
    return await commonAPI("POST",`${serverUrl}/allVideos`,uploadVideo)
}

// get allvideos API must called by view component
export const getAllVideosAPI = async ()=>{
    return await commonAPI("GET",`${serverUrl}/allVideos`,"")
}

// store watch history Api must called by videocard
export const storeHistoryAPI = async (videoDetails)=>{
    return await commonAPI("POST",`${serverUrl}/history`,videoDetails)
}

//get history api must called history component
export  const getHistoryAPI = async ()=>{
    return await commonAPI("GET",`${serverUrl}/history`,"")
}

// revovehistoryAPI called by history component
export const removeHistoryAPI = async(historyId)=>{
    return await commonAPI("DELETE",`${serverUrl}/history/${historyId}`,{})
}
// removeVideoAPI called by videocard Component
export const removeVideoAPI = async(videoId)=>{
  return await commonAPI("DELETE",`${serverUrl}/allVideos/${videoId}`,{})
}


// add category api
export const addCategoryAPI = async (categoryDetails)=>{
    return await commonAPI("POST",`${serverUrl}/categories`,categoryDetails)
}
// getCategoryAPI
export const getCategoryAPI = async ()=>{
    return await commonAPI("GET",`${serverUrl}/categories`,"")
}
//removeCategoryAPI
export const removeCategoryAPI  = async (categoryId)=>{
    return await commonAPI("DELETE",`${serverUrl}/categories/${categoryId}`,{})
}