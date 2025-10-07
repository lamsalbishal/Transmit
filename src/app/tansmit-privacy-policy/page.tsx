// app/privacy-policy/page.tsx (Next.js App Router)
import React from "react";

export default function TransmitPrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-3xl mx-auto bg-white p-6 sm:p-10">
        <h1 className="text-3xl font-bold mb-2">🛡️ Privacy Policy</h1>
        <p className="mb-2">
          <strong>Effective Date:</strong> July 15, 2025
        </p>
        <p>
          We care about your privacy. This policy outlines how we collect, use,
          and protect your data.
        </p>

        <hr className="my-8 border-gray-300" />

        <Section title="📦 1. Information We Collect">
          <ul className="list-disc pl-5 space-y-1">
            <li>Profile info: name, email, photo</li>
            <li>Content: videos, likes, comments</li>
            <li>Device info: platform, device tokens (Android/iOS)</li>
            <li>Usage logs: views, actions, IP</li>
          </ul>
        </Section>

        <Section title="🛠️ 2. How We Use It">
          <ul className="list-disc pl-5 space-y-1">
            <li>To personalize your experience</li>
            <li>To send push notifications</li>
            <li>To monitor and improve our services</li>
            <li>To protect users and enforce our policies</li>
          </ul>
        </Section>

        <Section title="🔔 3. Notifications & Tokens">
          <p>
            We may store multiple FCM tokens for your devices (e.g., Android and
            iOS). These are used solely for push notifications.
          </p>
        </Section>

        <Section title="📤 4. Sharing">
          <ul className="list-disc pl-5 space-y-1">
            <li>We do not sell your data.</li>
            <li>
              We may share public videos to third-party platforms like YouTube
              or TikTok for promotional purposes.
            </li>
          </ul>
        </Section>

        <Section title="🔒 5. Data Security">
          <p>
            We implement secure coding and encryption practices to protect your
            information.
          </p>
        </Section>

        <Section title="⚙️ 6. Your Choices">
          <ul className="list-disc pl-5 space-y-1">
            <li>Disable notifications in your device settings.</li>
            <li>
              Request account or data deletion by emailing:{" "}
              <strong>support@transmit.app</strong>
            </li>
          </ul>
        </Section>

        <Section title="👶 7. Children">
          <p>We do not knowingly collect data from children under 13.</p>
        </Section>

        <Section title="🔄 8. Changes">
          <p>
            We may update this policy. You will be notified of major changes
            through the app.
          </p>
        </Section>

        <Section title="✉️ 9. Contact">
          <p className="mt-2">
            Email: <strong>info@transmit.app</strong>
            <br />
            Company: Transmit Pvt. Ltd.
            <br />
            Location: Kathmandu, Nepal
          </p>
        </Section>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        {title}
      </h2>
      <div className="mt-2">{children}</div>
    </section>
  );
}
