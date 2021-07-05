
import { action, makeAutoObservable, runInAction } from "mobx";
import axios from "axios";


class FeedsStore {
    feed = []

    constructor() {
        // Call it here
        makeAutoObservable(this)
    }


    async getFeed() {
        let response = await axios.get(
            `https://tech-conferences.org/tech-conferences/feed`
        )
        if (response.status === 200) {
                this.feed = response.data
        } else {
            this.feed = null
        }
    }
}


export default new FeedsStore()