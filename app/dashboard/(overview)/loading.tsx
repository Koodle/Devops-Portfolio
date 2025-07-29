import DashboardSkeleton from '@/app/ui/skeletons';

// loading.tsx is a special Next.js file built on top of React Suspense. 
// It allows you to create fallback UI to show as a replacement while page content loads.

export default function Loading() {
    return <DashboardSkeleton />;
}