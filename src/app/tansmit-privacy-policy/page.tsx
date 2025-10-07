// app/privacy-policy/page.tsx
import React from "react";

export default function TransmitPrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-2xl mx-auto bg-white p-6 sm:p-10">
        <h1 className="text-3xl font-bold mb-4">📰 Transmit – Privacy Policy</h1>
        <p className="mb-2">
          <strong>Effective Date:</strong> July 15, 2025
        </p>

        <p>
          Transmit provides national and local news updates. This Privacy Policy
          explains how we handle your information when you use our app.
        </p>

        <hr className="my-6 border-gray-300" />

        <Section title="📦 Information We Collect">
          <p>
            We collect limited data such as device information, app usage stats,
            and optional user details (like name or email if you sign in).
          </p>
        </Section>

        <Section title="🛠️ How We Use Information">
          <p>
            Your data helps us deliver accurate country news, improve app
            performance, and send relevant notifications or alerts.
          </p>
        </Section>

        <Section title="🔔 Notifications">
          <p>
            Transmit may send breaking news alerts or important updates. You can
            turn off notifications anytime in your device settings.
          </p>
        </Section>

        <Section title="📤 Data Sharing">
          <p>
            We do not sell or rent your personal information. Some data may be
            shared with trusted analytics or ad services to enhance user
            experience.
          </p>
        </Section>

        <Section title="🔒 Data Security">
          <p>
            We use encryption and secure communication methods to protect your
            data from unauthorized access.
          </p>
        </Section>

        <Section title="⚙️ Your Rights">
          <p>
            You can request data deletion or account removal anytime by emailing{" "}
            <strong>support@transmit.app</strong>.
          </p>
        </Section>

        <Section title="✉️ Contact Us">
          <p>
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
    <section className="mt-6">
      <h2 className="text-lg font-semibold mb-1">{title}</h2>
      <div className="text-sm">{children}</div>
    </section>
  );
}
