// app/privacy-policy/page.tsx (Next.js App Router)
// or pages/privacy-policy.tsx (if using Pages Router)

import React from "react";

export default function PrivacyPolicy() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="mb-6">
                Sofzone {"(\"we\", \"our\", or \"us\")"} respects your privacy and is committed to
                protecting the personal information you share with us. This Privacy
                Policy explains how we collect, use, disclose, and safeguard your
                information when you use our Point-of-Sale (POS) systems, websites, and
                related services {"(\"Services\")"}.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">a. Personal Information</h3>
            <ul className="list-disc list-inside space-y-2">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Billing and Shipping Address</li>
                <li>Payment Information (credit/debit card details, wallet information)</li>
                <li>Government-issued ID (if required for compliance)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">b. Transaction Data</h3>
            <ul className="list-disc list-inside space-y-2">
                <li>Purchase history</li>
                <li>Order details (products, prices, discounts, taxes)</li>
                <li>POS terminal and cashier information</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">c. Device and Technical Data</h3>
            <ul className="list-disc list-inside space-y-2">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Location data (with consent)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">d. Account Data (for registered users)</h3>
            <ul className="list-disc list-inside space-y-2">
                <li>Username, password (hashed)</li>
                <li>Communication preferences</li>
                <li>Shopping cart and wishlist data</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2">
                <li>To process and fulfill orders (POS or online)</li>
                <li>To manage your account</li>
                <li>To provide customer support</li>
                <li>To detect and prevent fraud or unauthorized activities</li>
                <li>To improve our services and products</li>
                <li>To send order confirmations, receipts, updates, and promotional materials</li>
                <li>To comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Sharing Your Information</h2>
            <p className="mb-3">We may share your information with:</p>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Payment processors</strong> to complete transactions</li>
                <li><strong>Shipping and logistics providers</strong> for delivery</li>
                <li><strong>Cloud service providers</strong> for data storage and hosting</li>
                <li><strong>Marketing platforms</strong> (if you opt-in to promotions)</li>
                <li><strong>Regulatory bodies</strong>, if required by law</li>
            </ul>
            <p className="mt-2">We do not sell your personal data.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Retention</h2>
            <p className="mb-3">We retain personal data as long as necessary to:</p>
            <ul className="list-disc list-inside space-y-2">
                <li>Provide services and support</li>
                <li>Comply with tax, accounting, and legal requirements</li>
                <li>Resolve disputes and enforce agreements</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Security</h2>
            <p className="mb-3">We use industry-standard security measures, including:</p>
            <ul className="list-disc list-inside space-y-2">
                <li>SSL encryption for data transmission</li>
                <li>Firewalls and access control</li>
                <li>Regular audits and security monitoring</li>
            </ul>
            <p className="mt-2">
                However, no system is 100% secure. We encourage you to protect your
                passwords and access devices.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights and Choices</h2>
            <p className="mb-3">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc list-inside space-y-2">
                <li>Access your data</li>
                <li>Correct or update data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Opt-out of marketing communications</li>
            </ul>
            <p className="mt-2">To exercise these rights, please contact us at <strong>[Your Contact Email]</strong>.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Cookies and Tracking</h2>
            <p className="mb-2">
                Our website may use cookies and similar tracking tools to improve user
                experience, personalize content, and analyze usage.
            </p>
            <p>You can manage cookie settings through your browser.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Children's Privacy</h2>
            <p>
                Our Services are not directed to individuals under the age of 13. We do
                not knowingly collect personal information from children.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to This Privacy Policy</h2>
            <p>
                We may update this policy from time to time. Any changes will be posted
                here with an updated effective date.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
            <p className="mb-2">
                If you have any questions or concerns about this Privacy Policy or our
                practices, contact us at:
            </p>
            <p className="font-semibold">Sofzone</p>
            <p>info.bsbtech@gmail.com</p>
        </div>
    );
}
