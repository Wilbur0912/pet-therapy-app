import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://efgxworplehticfxlguj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmZ3h3b3JwbGVodGljZnhsZ3VqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMyOTM3MDgsImV4cCI6MjA1ODg2OTcwOH0.qxT4TuPTcyiwx47A50sVqXPVQxegKAu8uurZO-6peOM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
