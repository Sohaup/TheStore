import { useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
export default function Delete({category_id}) {
const {data,setData,delete:destroy,processing,errors}=useForm({

})
function handleSubmit(e) {
e.preventDefault()
destroy(route('categoriespath.destroy',{'categoriespath':category_id}))
}
return (
    <form onSubmit={handleSubmit}>
       <PrimaryButton className="bg-red-500 hover:bg-red-700 h-[40px]">Delete</PrimaryButton>
    </form>
)
}