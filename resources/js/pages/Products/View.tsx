import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'products info',
        href: '/products/show/:id',
    },
];

export default function Dashboard() {
    const { product } = usePage().props;
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8" key={product.id}>
                <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                    <div className="mt-10 lg:col-start-2 lg:row-start-1 lg:mt-0 lg:self-center">
                        <h2 className="text-3xl leading-tight font-bold text-gray-100">{product.name}</h2>
                        <p className="mt-3 text-gray-200">{product.Description}</p>
                    </div>
                    <div className="mt-8 flex gap-x-6">
                        <Link
                            href={`/products/edit/${product.id}`}
                            className="inline-flex items-center rounded-lg bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-600 focus:ring-4 focus:ring-gray-300"
                        >
                            Edit
                        </Link>
                        <Link
                            href={`/products/destroy/${product.id}`}
                            className="inline-flex items-center rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-600 focus:ring-4 focus:ring-red-300"
                            method="delete"
                        >
                            Delete
                        </Link>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
