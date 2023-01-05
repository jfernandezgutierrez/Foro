import {ref} from "vue";
export default function useFromTweet(){
    const showForm = ref(false);
    const openCloseForm = () => {
        
        showForm.value = !showForm.value;
    }

    return {
        showForm,
        openCloseForm
    }
}