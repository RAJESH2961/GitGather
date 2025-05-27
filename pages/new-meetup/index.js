// our-domain.com/new-meetup
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
function NewMeetupPage() {

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
        
        
    }
    return <NewMeetupForm onAddMeetup={addMeetuphandler} />
}

export default NewMeetupPage;