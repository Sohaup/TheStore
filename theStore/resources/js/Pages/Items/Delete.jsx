import { useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton"; 

export default function Delete({item_id}) {
    const {data , setData , delete:destroy , processing , errors} = useForm({
        name:'',
        src:null,
        category_id:''
    })
    function handleSubmit(e) {
        e.preventDefault()
        destroy(route('items.destroy',{'item':item_id}))
    }

    return (
        <form onSubmit={handleSubmit}>
            <PrimaryButton className="bg-red-500 hover:bg-red-700">Delete</PrimaryButton>
        </form>
    )
}