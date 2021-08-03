
import { action, makeAutoObservable, runInAction } from "mobx";
import axios from "axios";
import FeedsStore from "./feeds.store"

class ConferencesStore {
    count = 0
    conferences = []
    offset = 0
    apiPage = 1
    height = window.innerHeight
    constructor() {
        // Call it here
        makeAutoObservable(this)
    }


    async getConfernces() {
        let response = await axios.get('https://tech-conferences.org/tech-conferences/conferences?page_num=1')
        if (response.status === 200) {
            runInAction(()=> this.conferences = response.data) 
        } else { 
            this.conferences = null
        }
        return this.conferences
    }


    async getNextBatch() {
        let response = await axios.get(
            // `https://v1.nocodeapi.com/monoxor/google_sheets/KBzOroxMnqRqplyw?tabId=Sheet1&perPage=5&page=${this.apiPage}`
            `https://tech-conferences.org/tech-conferences/conferences?page_num=1`
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
        this.updateHeight()
    }


    increaseCount() {
        this.count += 1
        return this.count
    }

    updateHeight() {
        this.height = window.innerHeight
    }
}


export default new ConferencesStore()