import MeetupDetail from '../../components/meetups/MeetupDetail'

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://images.unsplash.com/photo-1542213458-267646c929e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
      title="First meetup"
      address="123 some road some city"
      description="the first meetup"
    />
  )
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1'
        }
      }  
    ]
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId
  return {
    props: {
      meetupData: {
        id: meetupId,
        image: "https://images.unsplash.com/photo-1542213458-267646c929e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        title: "First meetup",
        address: "123 some road some city",
        description: "the first meetup"
      }
    }
  }
}

export default MeetupDetails