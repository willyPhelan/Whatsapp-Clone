import { createClient } from '@supabase/supabase-js'
 
const supabaseURl = 'https://axfpvawzlmfkqkjnoxel.supabase.co' ;  

const supabaseKey =  import.meta.env.VITE_SUPABASE_KEY ;

export const supabase = createClient(supabaseURl, supabaseKey) ; 