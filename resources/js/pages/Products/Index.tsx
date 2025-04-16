import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'All products',
        href: '/products',
    },
];

export default function Dashboard() {
    const { products } = usePage().props;
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            {products.map((product) => (
                <a href={'products/show/' + product.id}>
                    <div className="m-4 space-y-4 rounded-2xl border-2 border-white p-4" key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                    </div>
                </a>
            ))}
        </AppLayout>
    );
}
