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
                                <div className="p-6 text-gray-900 text-end flex flex-row justify-between h-[80px] ">
                                <p>You Can Add Admens To The System</p>
                                <PrimaryButton className='bg-blcak'>
                                <a href={route('admens.create')}>Add admen</a>
                                </PrimaryButton>
                                
                                 </div>
                                  : 
                                ""
                                )
                            })
                           
                        }



                              {admens.map((admen)=> {
                                return (
                                auth.user.id == admen.user_id  ?
                                <div className="p-6 text-gray-900 text-end flex flex-row justify-between absolue top-[500px]">
                                <p>You Can Display all Admens On The System</p>
                                <PrimaryButton className='bg-orange-500 hover:bg-orange-700'>
                                <a href={route('admens.index')}>Show admens</a>
                                </PrimaryButton>
                                
                                 </div>
                                  : 
                                ""
                                )
                            })} 

                        



                             
                        
                       </div>                    
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
