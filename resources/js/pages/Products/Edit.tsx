import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, router, usePage } from '@inertiajs/react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Edit products',
        href: '/products/edit',
    },
];

export default function Dashboard() {
    const { product } = usePage().props;
    const [values, setValues] = useState({
        name: product.name,
        Description: product.Description,
        id: product.id,
    });

    function handleChange(e: any) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e: any) {
        e.preventDefault();
        console.log(values);
        router.post('/products/update/${product.id}', values);
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <form className="m-4 space-y-4 rounded-2xl border-2 border-white p-4" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700" htmlFor="name">
                        Name:
                    </label>
                    <input
                        id="name"
                        type="text"
                        className="focus:ring-opacity-50 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200"
                        value={values['name']}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700" htmlFor="Description">
                        Description:
                    </label>
                    <input
                        id="Description"
                        type="text"
                        className="focus:ring-opacity-50 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200"
                        value={values['Description']}
                        onChange={handleChange}
                    />
                </div>
                <button
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                    type="submit"
                >
                    Save
                </button>
            </form>
        </AppLayout>
    );
}
