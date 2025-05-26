// our-domain.com/new-meetup
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
function NewMeetupPage() {

    function addMeetuphandler(enteredMeetupData) {
        console.log(enteredMeetupData);
        
    }
    return <NewMeetupForm onAddMeetup={addMeetuphandler} />
}

export default NewMeetupPage;