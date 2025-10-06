// src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pegfycmkxbwliakumbgx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlZ2Z5Y21reGJ3bGlha3VtYmd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxMTc1NTMsImV4cCI6MjA3MzY5MzU1M30.t4m11PFqsWPohiPIksA7jPSflY9e8f2gnWSp-q_ubfw'; // استخدم الـ anon key كامل

export const supabase = createClient(supabaseUrl, supabaseKey);