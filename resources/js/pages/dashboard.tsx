import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex gap-4">
                    <h1>Hello to my MFA CRUD</h1>
                    <p>to create / edit products you need to be editor</p>
                    <p>Only admins can delete products</p>
                    <p>Admins ofc can do anything thy want</p>
                    <p>gl ;|</p>
                    <p className="text-green-200">Your'r role: {usePage().props.auth.user.role}</p>
                </div>
            </div>
        </AppLayout>
    );
}
