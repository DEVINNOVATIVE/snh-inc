/*
# Create inquiries table for contact form submissions

1. New Tables
- `inquiries`
  - `id` (uuid, primary key)
  - `first_name` (text, required, max 80 characters)
  - `last_name` (text, optional, max 80 characters)
  - `email` (text, required, max 254 characters)
  - `interest` (text, the topic the visitor selected, max 40 characters)
  - `message` (text, required, max 2000 characters)
  - `created_at` (timestamp, defaults to now)

2. Security
- Row level security is enabled on `inquiries`.
- Public visitors (anon and signed-in roles) may only INSERT rows, so the contact form can save messages.
- No SELECT, UPDATE, or DELETE access is granted, so visitors cannot read other people's messages.
- Length checks keep stored values bounded.

3. Notes
- The site has no sign-in, so the public form is the only writer.
- Messages are read by the site owner through the Supabase dashboard.
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL CHECK (char_length(first_name) BETWEEN 1 AND 80),
  last_name text NOT NULL DEFAULT '' CHECK (char_length(last_name) <= 80),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 254),
  interest text NOT NULL DEFAULT 'general' CHECK (char_length(interest) <= 40),
  message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON inquiries TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_inquiries" ON inquiries;
CREATE POLICY "anon_insert_inquiries" ON inquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);
