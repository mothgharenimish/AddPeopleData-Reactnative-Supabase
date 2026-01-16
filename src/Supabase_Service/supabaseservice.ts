
import { supabase } from "../Client/supabseclient"

type People_Data = {

    name : string;
    email : string;
    mobile_no : string;
    area_no : string;
}

export async function PeopleData(peopledata : People_Data) {


         const {data , error } = await supabase
         
         .from("Person_Info")
         .insert([peopledata]);

         if (error) {
            throw error
         }

         console.log(data)

         return data;
    }
