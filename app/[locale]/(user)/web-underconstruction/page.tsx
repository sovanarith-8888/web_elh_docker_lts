'use client'
import { useEffect } from 'react';
import NotFound from '@/components/not-found/NotFound';
import { useRouter } from 'next/navigation'
const Page = () => {
  // router to push home page
  const router = useRouter()

  // After 4s will back ho home page
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/en")
    }, 3700);
    return () => clearTimeout(timer);
  }, [router]);

  return (
   <>
    <main className={`flex justify-center items-center`}>
      <p className='text-red-600 mt-32'>The current page are under contruction</p>
    </main>
   </>
  )
}

export default Page