import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://oruiasmgnjzdibbrgigh.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDk4NjI1MiwiZXhwIjoxOTM2NTYyMjUyfQ.FBIduNwSgzADtRKQk_bEJzV8otGqrVthfhK5CkoGbm8"
const supabase = createClient(supabaseUrl, supabaseKey)

type Link = {
    id: string;
    user: string;
    repo: string;
    link: string;
}

type repo = {
    user: string;
    repo: string;
    link: string
}

  export const getRepo = async function(link: string) {
    const { data, error } = await supabase
    .from<Link>('link')
    .select()
    .filter('link', 'eq', link)
    return data;
  }

  export const saveRepo = async function(repo: repo) {
    const { data, error } = await supabase
    .from('link')
    .insert([
    repo
        ])
  }