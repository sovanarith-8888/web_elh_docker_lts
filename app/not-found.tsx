'use client'
import { useEffect } from 'react';
import NotFound from '@/components/not-found/NotFound';
import { useRouter } from 'next/navigation'
const NotFoundPage = () => {
  // router to push home page
  const router = useRouter()

  // after 3.5s will back ho home page
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/en")
    }, 3500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className={`flex justify-center items-center`}>
      <NotFound/>
    </main>
  )
}

export default NotFoundPage
