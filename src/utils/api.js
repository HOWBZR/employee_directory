import axios from "axios"

export default {
    getEmployeeInfo: () => {
        return axios.get("https://randomuser.me/api/?results=200&nat=us")
    }
}




