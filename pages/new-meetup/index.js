// our-domain.com/new-meetup
import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
function NewMeetupPage() {

    // Redirecting to success page after submitted
    const router = useRouter();

    async function addMeetuphandler(enteredMeetupData) {
        // console.log(enteredMeetupData);
        // absolute path to send data internally
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        const data = await response.json();
        console.log(data);

        router.push('/');
        
        
    }
    return <NewMeetupForm onAddMeetup={addMeetuphandler} />
}

export default NewMeetupPage;