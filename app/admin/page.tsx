
import { authOptions } from '../api/auth/[...nextauth]/route'

import { getServerSession } from 'next-auth/next'
export default async  function Admin() {
    const session = await getServerSession(authOptions)
    return (
        <div>
        <h1 className='myclass'>Seja Bem Vindo</h1> 
          <p className='mt-4'>{session?.user?.name}</p>  
          <p className='mt-4'>{session?.user?.image}</p>  
         <img src={session?.user?.image as string}  />
      </div>

    )
}