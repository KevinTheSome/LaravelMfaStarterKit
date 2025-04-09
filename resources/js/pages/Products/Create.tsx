import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head,usePage,router } from '@inertiajs/react';
import { useState } from 'react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'All products',
        href: '/products',
    },
];

export default function Dashboard() {
    const [values, setValues] = useState({
        name: "",
        price: 0
    })


  function handleChange(e:any) {
    const key = e.target.id;
    const value = e.target.value
    setValues(values => ({
        ...values,
        [key]: value,
    }))
  }

    function handleSubmit(e:any){
        e.preventDefault()
        console.log(values)
        router.post('/products/store',values)
        
    }   

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <form className="space-y-4 border-white border-2 rounded-2xl p-4 m-4" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700" htmlFor="name">
                        Name:
                    </label>
                    <input
                        id="name"
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        value={values["name"]}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700" htmlFor="price">
                        Price:
                    </label>
                    <input
                        id="price"
                        type="number"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        value={values["price"]}
                        onChange={handleChange}
                    />
                </div>
                <button
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    type='submit'
                >
                    Save
                </button>
            </form>
        </AppLayout>
    );
}
