import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head,usePage } from '@inertiajs/react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'All products',
        href: '/products',
    },
];

export default function Dashboard() {
    const { products } = usePage().props
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

           {products.map(product => (
                <a href="product/{product.id}" >
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                    </div>
                </a>
           ))}
        </AppLayout>
    );
}
