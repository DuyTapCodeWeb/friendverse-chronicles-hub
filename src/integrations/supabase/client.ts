// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://amyjancgqozdktveuuul.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFteWphbmNncW96ZGt0dmV1dXVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU3MDcxNzQsImV4cCI6MjA2MTI4MzE3NH0.8iMUTA7t4M7RyeSr2pSt7vOMvcZ7NNQtvSveu1mkfCQ";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);