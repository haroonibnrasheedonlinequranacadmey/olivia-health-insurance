# Olivia Health Insurance Website

Complete static front-end + Supabase lead-generation website.

## Public navigation
Home · About · Team · Services · Plans · How It Works · Contact · Login

## Admin
Open `/admin/login.html`, sign in with the Supabase Auth account, then use the private Admin Panel. Site Settings is intentionally inside Admin only.

## Lead form
The Home quote form collects ZIP Code, Age, State, Coverage Type, Full Name, Phone, Email and Message and inserts into `public.leads`. Admin can review leads in `/admin/leads.html`.

## Supabase
`js/supabase.js` contains the browser-safe project URL and publishable key. Never place a service-role/secret key in frontend files. Run `supabase/database.sql` in Supabase SQL Editor.

## Hosting
All public pages use relative paths so the site works from a GitHub Pages project subpath.
