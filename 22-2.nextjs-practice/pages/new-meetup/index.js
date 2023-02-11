import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import {useRouter} from "next/router";
import {Fragment} from "react";
import Head from "next/head";

const NewMeetup = ()=>{
    const router = useRouter();

    const addMeetupHandler = async (data)=>{
        const response = await fetch('/api/new-meetup',{
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();

        router.push('/');
    }

    return(
        <Fragment>
            <Head>
                <title>Add a New Meetups</title>
                <meta
                    name='description'
                    content='Add your own meetups and create networking opportunities'
                />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </Fragment>

    );
}
export default NewMeetup