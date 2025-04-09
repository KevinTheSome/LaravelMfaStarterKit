import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head,usePage } from '@inertiajs/react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'products',
        href: '/products/:id',
    },
];

export default function Dashboard() {
    const { product } = usePage().props
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                </div>
        </AppLayout>
    );
}
