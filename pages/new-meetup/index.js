import Head from 'next/head'
import { useRouter } from 'next/router'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function NewMeetup() {
  const router = useRouter()
  async function addMeetupHandler(enteredMeetupData) {
    console.log("new meetup page", enteredMeetupData);
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log(data);
    router.push('/')
  }
  return (
    <>
      <Head>
        <title>
          Add a new Hangout
        </title>
        <meta name="description" content="Create a new hangout" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  )
  
}

export default NewMeetup