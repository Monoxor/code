import {
  Box
} from '@material-ui/core'
import ConfSummary from './ConfSummary'
import InfiniteScroll from 'react-infinite-scroll-component';

const conflist = {
  "data": [
    {
      "description": "Find out how Airflow is being used by leading companies, what is its roadmap and how you can participate in its development.", 
      "end_date": "2021-07-16T00:00:00", 
      "img_link": "https://i.imgur.com/1meNRB4.jpg", 
      "link": "https://airflowsummit.org/", 
      "name": "Airflow Summit 2021", 
      "start_date": "2021-07-08T00:00:00", 
      "uuid": "041aed49-0ebe-4fd0-a9c1-914c371597f9"
    }, 
    {
      "description": "As every year, ContainerDays will be loaded with deeply technical talks and hands-on workshops with the focus on #Microservices, #DistributedApps, #Kubernetes #CloudNative, #CICD, and #DevOps. So save the date today to make sure not to miss out when the container community finally gathers again.", 
      "end_date": "2021-09-23T00:00:00", 
      "img_link": "https://i.imgur.com/nstPnG9.jpg", 
      "link": "https://www.containerdays.io/", 
      "name": "Container Days 2021", 
      "start_date": "2021-09-20T00:00:00", 
      "uuid": "758e2345-e099-45aa-bf69-a3c7f7a59851"
    }, 
    {
      "description": "Delve deep and find solutions to the most pressing issues in BFSI sector - reducing operational costs, digital payments, security, and customer experience.", 
      "end_date": "2021-07-06T00:00:00", 
      "img_link": "https://i.imgur.com/GL6VqBA.jpg", 
      "link": "https://tresconglobal.com/conferences/bfsi/india/", 
      "name": "TresconBFSI 9th", 
      "start_date": "2021-07-06T00:00:00", 
      "uuid": "1872207e-085b-41b7-bf97-d39e7056046b"
    }, 
    {
      "description": "Delve deep and find solutions to the most pressing issues in BFSI sector - reducing operational costs, digital payments, security, and customer experience.", 
      "end_date": "2021-07-06T00:00:00", 
      "img_link": "https://i.imgur.com/GL6VqBA.jpg", 
      "link": "https://tresconglobal.com/conferences/bfsi/india/", 
      "name": "TresconBFSI 9th", 
      "start_date": "2021-07-06T00:00:00", 
      "uuid": "37357cf5-6750-4293-b03f-8c11d8725555"
    }, 
    {
      "description": "A plethora of sessions covering all software development tools, stacks, and technologies!", 
      "end_date": "2021-07-15T00:00:00", 
      "img_link": "https://i.imgur.com/FbySG83.jpg", 
      "link": "https://nebraskacode.amegala.com/", 
      "name": "Nebraska Code 2021", 
      "start_date": "2021-07-13T00:00:00", 
      "uuid": "512cf54e-9ea4-4988-a50a-b10d56ec0a1d"
    }, 
    {
      "description": "We are planning to have talks about the Apache Airflow technical roadmap, best practices, use cases, and community. Besides talks, we plan on having in-depth workshops for people with little prior knowledge of Airflow to get comfortable writing and debugging their own DAGs. This includes an introduction into the Airflow ecosystem and learning the best practices for writing DAGs. The target audience is Data {Engineers, Scientists, Analysts} with knowledge of Python and eager to dive into Airflow to automate their data pipelines. We will also have workshops for people interested in contributing with code and/or documentation to Apache Airflow.\r\n\r", 
      "end_date": "2021-07-16T00:00:00", 
      "img_link": "https://i.imgur.com/1meNRB4.jpg", 
      "link": "https://airflowsummit.org/", 
      "name": "Airflow Summit 2021", 
      "start_date": "2021-07-08T00:00:00", 
      "uuid": "e52dea93-f2a7-4fc3-a17e-dd264a0642bc"
    }, 
    {
      "description": "SciPy 2021, the 20th annual Scientific Computing with Python conference, will be a virtual conference held July 12-18, 2021. The annual SciPy Conference brings together attendees from industry, academia, and government to showcase their latest projects, learn from skilled users and developers, and collaborate on code development. The full program will consist of 2 days tutorials (July 12-13), 3 days of talks (July 14-16), and 2 days of developer sprints (July 17-18).", 
      "end_date": "2021-07-18T00:00:00", 
      "img_link": "https://i.imgur.com/Q2bRKxa.jpg", 
      "link": "https://www.scipy2021.scipy.org/", 
      "name": "SciPy2021", 
      "start_date": "2021-07-12T00:00:00", 
      "uuid": "b76de04f-4eec-46c4-9271-5830b658472e"
    }, 
    {
      "description": "Get set for two days of invaluable product insight, some of the biggest names in product, countless opportunities to network with your peers, and the chance for us all to contribute to our incredible community.", 
      "end_date": "2021-07-15T00:00:00", 
      "img_link": "https://i.imgur.com/qLJZN0o.jpg", 
      "link": "https://www.mindtheproduct.com/mtpcon/digital#americas", 
      "name": "#mtpcon Digital Americas 2021", 
      "start_date": "2021-07-14T00:00:00", 
      "uuid": "7379c7fe-d700-467e-b8c2-6cd6b5c645b6"
    }, 
    {
      "description": "Devopsdays is a worldwide series of technical conferences covering topics of software development, IT infrastructure operations, and the intersection between them. Each event is run by volunteers from the local area.", 
      "end_date": "2021-07-10T00:00:00", 
      "img_link": "https://i.imgur.com/zGThmwq.jpg", 
      "link": "https://devopsdays.org/events/2021-porto-alegre/welcome/", 
      "name": "Devopsdays Porto Alegre 2021", 
      "start_date": "2021-07-10T00:00:00", 
      "uuid": "e2a2afa5-8be5-4db3-8679-a3edc5b24a8e"
    }
  ]
}

function ConfList() {
  return (
    <InfiniteScroll
      dataLength={10}
      next={async () => console.log('get more conferences')}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      {conflist.data.map((conference) => (
        <ConfSummary key={Math.random()} conference={conference} />
      ))}
    </InfiniteScroll>
  )
}

export default ConfList;