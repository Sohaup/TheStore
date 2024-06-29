import { useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";

export default function Delete({admen_id}) {
const {data , setData , delete:destroy , processing , errors} = useForm({
user_id:admen_id
})
function handleSubmit(e) {
    e.preventDefault();
    destroy(route("admens.destroy",{"admen":admen_id}))
}
return (
    <form onSubmit={handleSubmit}>
        <PrimaryButton className="bg-red-500 hover:bg-red-700">
            Delete
        </PrimaryButton>
    </form>
)
}