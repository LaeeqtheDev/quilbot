
import {getKindeServerSession} from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation';
import Image from 'next/image';

const Page =() =>{
    const {getUser} = getKindeServerSession();
    const user = getUser();
    if(!user || !user.id) redirect('/auth-callback?origin-dashboard')


    return(
        <div>
        <h1 className='text-4xl font-semibold text-green-600'>
            I cant do this anymore 
        </h1>
       
        </div>
    )
}

export default Page