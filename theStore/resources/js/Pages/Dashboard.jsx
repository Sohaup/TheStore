import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import { useState } from 'react';

export default function Dashboard({ auth , admens=[]}) {
    
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-white leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg flex flex-col gap-3 ">                    
                           
                            {admens.map((admen)=> {
                                return (
                                auth.user.id == admen.user_id  ?
                                <div className='grid grid-row-3 gap-4'>
                                    <div>
                                        <h1 className='text-orange-400 text-center font-bold text-xl'>System Admens Control</h1>
                                    </div>
                                <div className="p-4 text-gray-900 text-end flex flex-row justify-between h-[80px] ">
                                <p>You Can Add Admens To The System</p>
                                <PrimaryButton className='bg-blcak h-[35px]'>
                                <a href={route('admens.create')}>Add admen</a>
                                </PrimaryButton>                                    
                                </div>
                                <div className="p-4 text-gray-900  flex flex-row justify-between absolue top-[500px]">
                                <p>You Can Display all Admens On The System</p>
                                <PrimaryButton className='bg-orange-500 hover:bg-orange-700 '>
                                <a href={route('admens.index')}>Show admens</a>
                                </PrimaryButton>
                                
                                 </div>
                                 </div>
                                  : 
                                ""
                                )
                            })
                           
                        }        
                        
                 </div>         
                 <div className='mt-2 bg-white'>
                 {admens.map((admen)=> {
                                return (
                                auth.user.id == admen.user_id  ?
                                <div className='grid grid-row-3 gap-4'>
                                    <div>
                                        <h1 className='text-green-400 text-center font-bold text-xl'>System Categories Control</h1>
                                    </div>
                                <div className="p-4 text-gray-900 text-end flex flex-row justify-between h-[80px] ">
                                <p>You Can Add Category To The Store</p>
                                <PrimaryButton className='bg-blcak h-[35px]'>
                                <a href={route('categoriespath.create')}>Add Category</a>
                                </PrimaryButton>                                    
                                </div>
                                <div className="p-4 text-gray-900 flex flex-row justify-between absolue top-[500px]">
                                <p>You Can Display all Categories On The Store</p>
                                <PrimaryButton className='bg-orange-500 hover:bg-orange-700 h-auto '>
                                <a href={route('categoriespath.index')}>Show Categories</a>
                                </PrimaryButton>
                                
                                 </div>
                                 </div>
                                  : 
                                ""
                                )
                            })
                           
                        }        
                 </div>           
                 <div className='mt-2 bg-white'>
                 {admens.map((admen)=> {
                                return (
                                auth.user.id == admen.user_id  ?
                                <div className='grid grid-row-3 gap-4'>
                                    <div>
                                        <h1 className='text-blue-400 text-center font-bold text-xl'>System Items Control</h1>
                                    </div>
                                <div className="p-4 text-gray-900 text-end flex flex-row justify-between h-[80px] ">
                                <p>You Can Add Item To The Store</p>
                                <PrimaryButton className='bg-blcak h-[35px]'>
                                <a href={route('items.create')}>Add Item</a>
                                </PrimaryButton>                                    
                                </div>
                                <div className="p-4 text-gray-900  flex flex-row justify-between absolue top-[500px]">
                                <p>You Can Display all Items On The Store</p>
                                <PrimaryButton className='bg-orange-500 hover:bg-orange-700 '>
                                <a href={route('items.index')}>Show Items</a>
                                </PrimaryButton>
                                
                                 </div>
                                 </div>
                                  : 
                                ""
                                )
                            })
                           
                        }        
                 </div>  
                 <div className='mt-2 bg-white'>
                 {admens.map((admen)=> {
                                return (
                                auth.user.id == admen.user_id  ?
                                <div className='grid grid-row-3 gap-4'>
                                    <div>
                                        <h1 className='text-red-400 text-center font-bold text-xl'>System Types Control</h1>
                                    </div>
                                <div className="p-4 text-gray-900 text-end flex flex-row justify-between h-[80px] ">
                                <p>You Can Add Type To The Store</p>
                                <PrimaryButton className='bg-blcak h-[35px]'>
                                <a href={route('types.create')}>Add Type</a>
                                </PrimaryButton>                                    
                                </div>
                                <div className="p-4 text-gray-900  flex flex-row justify-between absolue top-[500px]">
                                <p>You Can Display all Types On The Store</p>
                                <PrimaryButton className='bg-orange-500 hover:bg-orange-700 '>
                                <a href={route('types.index')}>Show Types</a>
                                </PrimaryButton>
                                
                                 </div>
                                 </div>
                                  : 
                                ""
                                )
                            })
                           
                        }        
                 </div>                    
                </div>
            </div>
        </AuthenticatedLayout>
    );
}


                         
                        



                    