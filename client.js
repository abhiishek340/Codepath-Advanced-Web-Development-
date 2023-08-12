import { createClient } from '@supabase/supabase-js';

const URL = 'https://skqrwdsathlqaedilujd.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrcXJ3ZHNhdGhscWFlZGlsdWpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEyODg1NDUsImV4cCI6MjAwNjg2NDU0NX0.ge3b-bxoAef50mZNVOjMBGzEUb4iKE1GHGFTRPq7hFk';
export const supabase = createClient(URL, API_KEY);