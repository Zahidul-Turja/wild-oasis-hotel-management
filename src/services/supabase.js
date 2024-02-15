import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zsohrkvvrvnxwxbhedoj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpzb2hya3Z2cnZueHd4YmhlZG9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MzMyOTgsImV4cCI6MjAyMzUwOTI5OH0.LaP-jTnBlydjGyo5vk4pdnKJpONPJf_rKR4xTtpqDvo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
