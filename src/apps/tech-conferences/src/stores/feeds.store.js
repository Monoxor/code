
import { action, makeAutoObservable, runInAction } from "mobx";
import Parser from "rss-parser"


class FeedsStore {
    feed = []

    constructor() {
        // Call it here
        makeAutoObservable(this)
    }


    async getFeeds() {
        let parser = new Parser();  
        let feed = await parser.parseURL('https://cors-anywhere.herokuapp.com/https://feeds.feedburner.com/TechCrunch/');
        if (feed !== null) {
            runInAction(()=> this.feed = feed)
            
        } else 
        { 
            this.feed = null
        }
        return this.feed
    }
}


export default new FeedsStore()