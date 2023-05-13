import { MongoClient } from 'mongodb'

import MeetupList from "../components/meetups/MeetupList"

const DUMMY_DATA = [
  {
    id: "m1",
    title: "first meetup",
    image: "https://images.unsplash.com/photo-1542213458-267646c929e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    address: "upstate",
    description: "come in the fall"
  }
]

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />
}

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       meetups: DUMMY_DATA
//     }
//   }
// }

export async function getStaticProps() {
  const client = new MongoClient('mongodb+srv://Justin:MongoDB12@cluster0.gi7kf.mongodb.net/?retryWrites=true&w=majority')

  await client.connect()
  const db = client.db('meetups')
  const meetupsCollection = db.collection('meetups')
  const meetups = await meetupsCollection.find().toArray()
  client.close()

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    revalidate: 1
  }
}

export default HomePage