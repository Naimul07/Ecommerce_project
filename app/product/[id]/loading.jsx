'use client';
import { Skeleton } from '@/components/ui/skeleton'
const loading = () => {
    return (
        <div className='pt-16 container mx-auto px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 space-x-10 min-h-screen'>
                <div className='flex gap-4'>
                    <div className="flex flex-col gap-2">
                        <Skeleton className="h-[100px] w-[100px] my-2" />
                        <Skeleton className="h-[100px] w-[100px] my-2" />
                        <Skeleton className="h-[100px] w-[100px] my-2" />
                    </div>
                    <div>
                        <Skeleton className="h-[350px] w-[400px] my-2" />
                    </div>


                </div>
                <div>
                    <Skeleton className="h-6 w-20 my-2" />
                    <Skeleton className="h-4 w-14 my-2" />
                    <Skeleton className="h-8 w-24 my-2" />
                    <Skeleton className="h-14 w-full my-2" />
                    <Skeleton className="h-8 w-60 my-2 mb-10" />
                    <Skeleton className="h-8 w-24 my-2" />
                    <Skeleton className="h-8 w-24 my-2" />
                    <Skeleton className="h-8 w-24 my-2" />

                </div>
            </div>
        </div>
    )
}

export default loading