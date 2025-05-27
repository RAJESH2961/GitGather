import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

function MeetupDetails(props) {

    return (
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />   
    )
}

export async function getStaticPaths() {
    // fetch data from an API
    const client = await MongoClient.connect(
      'mongodb+srv://RAJESH:%23gBGBRM72931@nextjs.1aijdyj.mongodb.net/?retryWrites=true&w=majority&appName=nextjs'
    );
      const db = client.db('meetups');

      const meetupsCollection = db.collection('meetups')
      const meetups = await meetupsCollection.find({}, {_id : 1}).toArray();

      client.close();
    return {
        fallback: 'blocking',
        paths: meetups.map(meetup => ({ params: { meetupId: meetup._id.toString() }, }))
    }
}

// which is better to use SSG or SSR


export async function getStaticProps(context){
    // getting id from context without using useRouter
    const meetupId = context.params.meetupId;
    // fetching data for single meetup
    const client = await MongoClient.connect(
      'mongodb+srv://RAJESH:%23gBGBRM72931@nextjs.1aijdyj.mongodb.net/?retryWrites=true&w=majority&appName=nextjs'
    );
    const db = client.db('meetups');

      const meetupsCollection = db.collection('meetups')
        const selectedMeetup = await meetupsCollection.findOne({ _id: new ObjectId(meetupId) });
        client.close();
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
            },
    }
}

}

export default MeetupDetails;