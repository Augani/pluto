import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://oruiasmgnjzdibbrgigh.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDk4NjI1MiwiZXhwIjoxOTM2NTYyMjUyfQ.FBIduNwSgzADtRKQk_bEJzV8otGqrVthfhK5CkoGbm8"
const supabase = createClient(supabaseUrl, supabaseKey)

interface IRepo {
  user: string;
  repo: string;
  link: string;
  theme: string;
}

interface ILink extends IRepo {
    id: string;
}


  export const getRepo = async function(link: string) {
    const { data, error } = await supabase
    .from<ILink>('links')
    .select()
    .filter('link', 'eq', link);
    if(error)return error;
    return data;
  }

  export const saveRepo = async function(repo: IRepo) {
    const { data, error } = await supabase
    .from('links')
    .insert([
    repo
        ])
    if(error)return error;
    return data;
  }