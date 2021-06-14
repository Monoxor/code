
import { action, makeAutoObservable, runInAction } from "mobx";
import axios from "axios";

class ConferencesStore {
    count = 0
    conferences = []
    offset = 0
    apiPage = 1
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
        let response = await axios.get(
            `https://v1.nocodeapi.com/monoxor/google_sheets/KBzOroxMnqRqplyw?tabId=Sheet1&perPage=5&page=${this.apiPage}`
        )
        if (response.status === 200) {
            this.apiPage = this.apiPage + 1
            let nextBatch = response.data.data
            if (this.conferences.length === 0) {
                this.conferences = nextBatch
            } else {
                this.conferences = this.conferences.concat(nextBatch)
            }
        }
    }


    async getNextBatchv1() {
        let response = await axios.get('https://60c6093a19aa1e001769e9f3.mockapi.io/conferences')
        if (response.status === 200) {
            let nextBatch = response.data.slice(this.offset, this.offset+5)
            this.offset = this.offset + 5
            if (this.conferences.length === 0) {
                this.conferences = nextBatch
            } else {
                this.conferences = this.conferences.concat(nextBatch)
            }
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