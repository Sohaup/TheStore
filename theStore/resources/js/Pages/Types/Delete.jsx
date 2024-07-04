import { useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton"; 

export default function Delete({type_id}) {
    const {data , setData , delete:destroy , processing , errors} = useForm({
        name:'',
        src:null,
        category_id:'',
        item_id:''
    })
    function handleSubmit(e) {
        e.preventDefault()
        destroy(route('types.destroy',{'type':type_id}))
    }

    return (
        <form onSubmit={handleSubmit}>
            <PrimaryButton className="bg-red-500 hover:bg-red-700">Delete</PrimaryButton>
        </form>
    )
}