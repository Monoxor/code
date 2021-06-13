
import { action, makeAutoObservable, runInAction } from "mobx";
import axios from "axios";

class ConferencesStore {
    count = 0
    conferences = []
    offset = 0
    constructor() {
        // Call it here
        makeAutoObservable(this)
    }


    async getConfernces() {
        let response = await axios.get('https://60c6093a19aa1e001769e9f3.mockapi.io/conferences')
        if (response.status === 200) {
            runInAction(()=> this.conferences = response.data)
            
        } else 
        { 
            this.conferences = null
        }
        return this.conferences
    }


    async getNextBatch() {
        console.log('getNextBatch')
        console.log(this.conferences.length)
        let response = await axios.get('https://60c6093a19aa1e001769e9f3.mockapi.io/conferences')
        if (response.status === 200) {
            let nextBatch = response.data.slice(this.offset, this.offset+5)
            this.offset = this.offset + 5
            console.log('this.conferences: ')
            console.log(this.conferences)
            console.log('nextBatch')
            console.log(nextBatch)
            if (this.conferences.length === 0) {
                console.log('first batch')
                this.conferences = nextBatch
            } else {
                console.log('concat')
                this.conferences = this.conferences.concat(nextBatch)
                console.log(this.conferences.length)
            }
            // if (this.conferences && nextBatch) {
            //     this.conferences.concat(nextBatch)
            // }
            // this.conferences = nextBatch
        } else { 
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