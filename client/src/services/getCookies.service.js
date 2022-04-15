import Cookies from "universal-cookie";
const cookies = new Cookies();

export const getCollegeId = () =>{
    const college_id = cookies.get("collegeId");
    return college_id
}

export const getAdminId = () =>{
    const admin_id = cookies.get("adminId");
    return admin_id
}