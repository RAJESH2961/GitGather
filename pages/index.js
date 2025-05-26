import MeetupList from '../components/meetups/MeetupList'
// import Layout from '../components/layout/Layout'
const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'AI & ML Student Conclave',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
    address: 'IIT Madras, Chennai, India',
    description: 'An event focused on Artificial Intelligence and Machine Learning, featuring student-led research, workshops, and hackathons.'
  },
  {
    id: 'm2',
    title: 'DevFest for CSE Juniors',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df',
    address: 'Online (Zoom & Discord)',
    description: 'A beginner-friendly developer festival with talks, coding challenges, and peer networking sessions.'
  },
  {
    id: 'm3',
    title: 'Data Structures Bootcamp',
    image: 'https://images.unsplash.com/photo-1573164574396-9d6b2211f56f',
    address: 'NIT Trichy, Tamil Nadu, India',
    description: '3-day offline bootcamp to dive deep into DS & Algorithms with hands-on mentorship from alumni.'
  },
  {
    id: 'm4',
    title: 'Full Stack Student Hackathon',
    image: 'https://images.unsplash.com/photo-1581091870620-eb89cceba1b3',
    address: 'VIT Vellore, India',
    description: 'Team-based hackathon where students solve real-world problems using MERN stack or Django.'
  },
  {
    id: 'm5',
    title: 'Cloud Computing Meetup',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
    address: 'Online (Google Meet)',
    description: 'A meetup covering the basics and use cases of AWS, GCP, and Azure — ideal for CSE cloud enthusiasts.'
  },
  {
    id: 'm6',
    title: 'Open Source Sprint Day',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    address: 'IIIT Hyderabad Campus',
    description: 'Hands-on contributions to real GitHub repositories with help from mentors and OSS contributors.'
  },
  {
    id: 'm7',
    title: 'Cybersecurity & Ethical Hacking Meet',
    image: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437b1',
    address: 'Online',
    description: 'A virtual conference on ethical hacking, bug bounty, and cybersecurity careers for students.'
  },
  {
    id: 'm8',
    title: 'Women in Tech Circle',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998',
    address: 'BITS Pilani, Rajasthan',
    description: 'A meetup to empower women CSE students through talks, workshops, and mentorship.'
  },
  {
    id: 'm9',
    title: 'AI for Social Good Meetup',
    image: 'https://images.unsplash.com/photo-1549924231-f129b911e442',
    address: 'IISc Bangalore',
    description: 'Meet developers working on AI solutions that impact education, health, and environment.'
  },
  {
    id: 'm10',
    title: 'Code & Chill Evening',
    image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0',
    address: 'Local Cafés (Pan-India)',
    description: 'Relaxed coding sessions in local cafés with pizza, peers, and productive vibes.'
  }
];


function HomePage(props) {
    return<MeetupList meetups={props.meetups} />
}
// before the component renders this below code will be executed.
// statis generation
export async function getStaticProps() {
    // fetch data from an API
    // any thing inside this will never run on client machine
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 1
    };
}
// // it runs for every request
// export async function getServerSideProps(){
//     const req = context.req;
//     const res = context.req;

//     return{
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export default HomePage;