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
  return {
    props: {
      meetups: DUMMY_DATA
    },
    revalidate: 1
  }
}

export default HomePage