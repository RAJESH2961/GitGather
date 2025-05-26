import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";
function MeetupDetails() {

    useRouter
    return (
        <>
      <MeetupDetail
        image="https://images.unsplash.com/photo-1581091870622-436f2cd86b39"
        title="Next.js Dev Meetup"
        address="Online Zoom Event"
        description="Join CSE students and developers to learn about modern full-stack web development using Next.js."
      />

    </>        
    )
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            { params: {
                meetupId: 'm1',
            } }
        ]
    }
}

// which is better to use SSG or SSR


export async function getStaticProps(context){
    // getting id from context without using useRouter
    const meetupId = context.params.meetupId;
    // fetching data for single meetup
    return {
        props: {
            meetupData: {
                image: "https://images.unsplash.com/photo-1581091870622-436f2cd86b39",
                id: meetupId,
        title: "Next.js Dev Meetup",
        address: "Online Zoom Event",
        description: "Join CSE students and developers to learn about modern full-stack web development using Next.js."
            }
        }
    }

}

export default MeetupDetails;