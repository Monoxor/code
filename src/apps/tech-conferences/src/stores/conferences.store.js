
import { action, makeAutoObservable, runInAction } from "mobx";
import axios from "axios";

class ConferencesStore {
    count = 0
    conferences = null
    constructor() {
        // Call it here
        makeAutoObservable(this)
    }


    async getConfernces() {
        console.log('getConferences')
        let response = await axios.get('https://reqres.in/api/users?page=2')
        if (response.status === 200) {
            runInAction(()=> this.conferences = response.data)
            
        } else 
        { 
            this.conferences = null
        }
        return this.conferences
    }


    increaseCount() {
        this.count += 1
        return this.count
    }
}


export default new ConferencesStore()