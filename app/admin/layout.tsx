import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { authOptions } from '@/app/api/auth/[...nextauth]/auth'
import Aside from "../components/aside"
import Nav from "../components/nav"

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/admin')
  }
    return (
        <div className="md:container md:mx-auto">
            <Nav />
            <div className="flex">
                <Aside />
                <div className="w-full">
                    {children}
                </div>
            </div>
        </div>


    )
}