# Olivia Health Insurance Website

Supabase-ready professional insurance lead-generation website.

## Included
- Home, About, Team, Services, Plans, How It Works, FAQ, Consultation, Contact, Privacy and Terms
- Individual, Family, Medicare, Medicaid, Dental/Vision, Prescription and Employer pages
- All 29 supplied team names
- Quote and consultation forms
- Supabase database schema and seed data
- Supabase Auth admin login/dashboard
- Central settings for phone, WhatsApp, email, address, hours and social links
- Responsive design and floating Call/WhatsApp buttons
- Distinct health-insurance visuals on service pages

## Setup
1. Create a Supabase project.
2. Run `supabase/database.sql` in Supabase SQL Editor.
3. Create an administrator in Supabase Authentication > Users.
4. Edit `js/supabase.js` and replace `YOUR_SUPABASE_URL` and `YOUR_SUPABASE_ANON_KEY`.
5. Upload/host the folder.
6. Open `/admin/login.html`.
7. Test Settings, quote forms and consultation forms.
8. Replace placeholder team portraits with approved real team photos before publication.
9. Replace placeholder social URLs.
10. Review privacy, terms, insurance and legal wording for the actual business.
11. Tighten RLS so only designated administrators can manage/read sensitive data.
12. Use HTTPS in production.

Never put a Supabase service-role key in browser code.
