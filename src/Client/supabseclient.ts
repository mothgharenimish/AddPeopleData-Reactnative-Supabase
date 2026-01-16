import 'react-native-url-polyfill/auto'
import { createClient } from "@supabase/supabase-js";


const Supabase_url = "https://clakevpjaxuphuftkksz.supabase.co";
const Supabase_api_key = "sb_publishable_2LtgiAi_vrqf78ILvBnqLg_iuOYDqMy";

export const supabase = createClient (
     Supabase_url,
     Supabase_api_key
)