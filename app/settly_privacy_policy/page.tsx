import type { Metadata } from 'next'
import PrivacyLayout from '@/components/PrivacyLayout'
import s from '@/styles/privacy.module.css'

export const metadata: Metadata = {
  title: 'Settly — Privacy Policy & EULA | App Axis Lab',
}

export default function SettlyPrivacyPolicy() {
  return (
    <PrivacyLayout
      appName="Settly"
      subtitle="Debt Management — Privacy Policy & End User License Agreement"
      lastUpdated="Last updated: August 7, 2026"
    >
      <div className={s.card}>
        <div className={s.privacyContent}>
          <p>This page contains the <a href="#privacy">Privacy Policy</a> and <a href="#eula">End User License Agreement (EULA)</a> for Settly. By downloading, installing, or using the App, you agree to both documents.</p>

          <h1 id="privacy">Privacy Policy</h1>

          <h2>Scope</h2>
          <p>Welcome to Settly&apos;s Privacy Policy. Your privacy is important to us. This Privacy Policy explains how Settly (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses, stores, and shares your information when you use our debt and personal-finance management mobile application and related services (the &quot;App&quot; or &quot;Services&quot;).</p>
          <p>If you do not agree with this Privacy Policy, please do not use our Services.</p>

          <h2>Overview</h2>
          <p>Settly helps you track money you owe and money owed to you, record transactions, organize contacts, set budgets, and view reports. To provide these features across your devices, Settly uses an <strong>account and secure cloud sync</strong>, while keeping sensitive protections such as your PIN and biometric settings on your device.</p>
          <div className={s.highlightBox}>
            <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
              <li><strong>An account is required</strong> — you sign in with an email and password or with Google so your data can be securely stored and synced.</li>
              <li><strong>Your financial data is yours</strong> — the debts, transactions, budgets, and notes you create belong to you, and you can view, edit, export, or delete them at any time.</li>
              <li><strong>Your PIN and biometric unlock stay on your device</strong> — we never receive your fingerprint, face data, or PIN.</li>
              <li><strong>We show ads and use analytics</strong> — these rely on device identifiers, never on the content of your financial records or contacts.</li>
              <li><strong>We never sell your personal information</strong> and we never use your financial records for advertising.</li>
            </ul>
          </div>

          <h2>1. Account &amp; Setup</h2>
          <p>To use Settly you create an account and configure the App. Depending on how you sign up and what features you use, this may include:</p>
          <ul>
            <li>Signing up with an email address and password, or signing in with your Google account</li>
            <li>A display name and optional profile photo</li>
            <li>Preferences such as language, currency, theme, and notification settings</li>
            <li>Security settings, including an app PIN and biometric (fingerprint/Face ID) unlock, which are stored securely on your device</li>
          </ul>
          <p>These settings let us authenticate you, sync your data, and configure how the App works for you.</p>

          <h2>2. Information We Collect</h2>

          <p><strong>2.1 Account &amp; Profile Information</strong></p>
          <ul>
            <li>Email address and authentication credentials (passwords are stored in hashed form by our authentication provider; we do not see your plain-text password)</li>
            <li>If you sign in with Google, basic profile information such as your name, email address, and profile picture as permitted by your Google account</li>
            <li>Display name and any profile photo you choose to add</li>
          </ul>

          <p><strong>2.2 Financial &amp; Debt Data You Create</strong></p>
          <p>When you use the App, you create records that are stored on your device and synced to your account, including:</p>
          <ul>
            <li>Debts, loans, and balances (amounts owed to or by you)</li>
            <li>Transactions, payments, accounts, categories, budgets, and recurring entries</li>
            <li>Notes, descriptions, dates, and currency information you add to your records</li>
            <li>Records you choose to share with, or that are shared with you by, another Settly user</li>
          </ul>
          <div className={s.highlightBox}>
            <p>This is <strong>your</strong> financial data. We process it to provide the App&apos;s features and to sync it across your devices. We do not use the contents of your financial records for advertising, profiling, or automated decision-making.</p>
          </div>

          <p><strong>2.3 Contacts Information</strong></p>
          <p>To help you associate debts and transactions with the people involved, the App lets you add contacts manually or import them from your device&apos;s address book (with your permission). Contact details you add or import — such as names, phone numbers, and email addresses — are stored with your account so they appear alongside the related records. You control which contacts you add, and you can edit or remove them at any time.</p>

          <p><strong>2.4 Images &amp; Attachments</strong></p>
          <p>You may attach images — such as a profile photo, or photos of receipts or documents related to a transaction — using your camera or photo library. Images you add are uploaded to our secure cloud storage and associated with your account and the related record. You can delete them at any time.</p>

          <p><strong>2.5 Usage &amp; Diagnostic Information</strong></p>
          <p>To keep the App reliable and improve it, we collect limited analytics and diagnostic data through third-party tools, including:</p>
          <ul>
            <li>Which features and screens are used and general interaction patterns</li>
            <li>App version, session information, and performance metrics</li>
            <li>Crash logs and diagnostic data</li>
          </ul>
          <p>This analytics data does <strong>not</strong> include the detailed contents of your financial records or contacts.</p>

          <p><strong>2.6 Device Data</strong></p>
          <ul>
            <li>Device type, model, and operating system</li>
            <li>App version and language/region settings</li>
            <li>An advertising identifier (Google Advertising ID / IDFA) and anonymous installation identifiers</li>
            <li>Push notification tokens (only if you enable notifications)</li>
          </ul>

          <p><strong>2.7 Advertising Data</strong></p>
          <p>The free version of the App may be supported by ads. Our advertising partners (Google AdMob and its mediation networks) may collect and process data to serve and measure ads, such as your advertising identifier, IP address, device information, and ad interactions. This data is used to show ads (which may be personalized) and to prevent fraud. Ad partners act as independent controllers of the data they collect under their own privacy policies. Purchasing the premium/ad-free option removes ads.</p>

          <p><strong>2.8 Billing Information</strong></p>
          <p>If you purchase a premium subscription or one-time purchase, payment is processed by the App Store or Google Play Store, and subscription status is managed through our subscription provider (RevenueCat). We do not directly collect or store your full payment card details. We may receive subscription status, anonymous purchase identifiers, and billing-related metadata to unlock and manage premium features.</p>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information described above to:</p>
          <ul>
            <li>Create and secure your account and authenticate you when you sign in</li>
            <li>Provide core features, including tracking debts, transactions, accounts, budgets, categories, recurring entries, contacts, and reports</li>
            <li>Sync your data across your devices and back it up so you don&apos;t lose it</li>
            <li>Enable optional sharing of records with other Settly users you choose to share with</li>
            <li>Send notifications and reminders you have enabled (for example, payment or due-date reminders)</li>
            <li>Display and measure advertising, and offer an ad-free premium option</li>
            <li>Understand aggregate feature usage and fix crashes to improve stability and performance</li>
            <li>Process and manage premium purchases through authorized payment providers</li>
            <li>Provide customer support when you contact us</li>
            <li>Detect, prevent, and address fraud, abuse, and security issues, and comply with legal obligations</li>
          </ul>
          <p>We do <strong>not</strong> use the content of your financial records or contacts for advertising, profiling, or automated decision-making.</p>

          <h2>4. How We Share Your Information</h2>

          <p><strong>4.1 With People You Choose</strong></p>
          <p>If you use sharing features to share a record, invitation, or transaction with another Settly user, the information you choose to share becomes visible to that person. You control what you share, and sharing only happens at your direction.</p>

          <p><strong>4.2 With Service Providers</strong></p>
          <p>We use a limited number of trusted providers to operate the App — for cloud database and authentication, secure file storage, analytics and crash reporting, advertising, and subscription management. These providers process data only as needed to perform their services for us, under their own terms, and are not permitted to use your personal information for their own unrelated purposes.</p>

          <p><strong>4.3 Legal Requirements</strong></p>
          <p>We may disclose information if required by law, regulation, legal process, or governmental request, or when we believe disclosure is necessary to protect the rights, property, or safety of Settly, our users, or others.</p>

          <p><strong>4.4 Business Transfers</strong></p>
          <p>If Settly is involved in a merger, acquisition, reorganization, or sale of assets, data we hold may be transferred as part of that transaction. We will notify you of any material change in ownership or use of your personal information.</p>

          <p><strong>4.5 Non-Personal Data</strong></p>
          <p>We may share aggregated or anonymized data that cannot reasonably be used to identify you for analytics and product-improvement purposes.</p>

          <p>We do <strong>not</strong> sell the personal information you provide to us, and we never sell your financial records or contacts.</p>

          <h2>5. Permissions</h2>
          <p>Settly may request the following device permissions:</p>
          <ul>
            <li><strong>Contacts:</strong> Optional, to let you import contacts from your device so you can associate them with debts and transactions. You can add contacts manually instead.</li>
            <li><strong>Camera:</strong> Optional, to take a profile photo or capture receipts and documents to attach to a record.</li>
            <li><strong>Photos / Media / Storage:</strong> Optional, to choose an existing image to attach, and to save exported reports (for example, PDF exports).</li>
            <li><strong>Biometrics (Fingerprint / Face ID):</strong> Optional, to unlock the App. Biometric data is handled entirely by your device&apos;s operating system and is never transmitted to or stored by us.</li>
            <li><strong>Notifications:</strong> Optional, to send reminders and alerts you enable. You can disable notifications in your device or app settings.</li>
            <li><strong>Internet &amp; Network state:</strong> Used to sync your data, sign you in, verify subscriptions, and show ads and analytics.</li>
          </ul>

          <h2>6. Data Security</h2>
          <p>We take security seriously:</p>
          <ul>
            <li>Data transmitted between the App and our servers is sent over encrypted connections (HTTPS/TLS).</li>
            <li>Your account is protected by your credentials, and you can add an app PIN and biometric unlock for an extra layer of on-device protection. Your PIN and biometric settings are stored securely on your device and are never sent to us.</li>
            <li>We use reputable infrastructure and service providers with access controls to store and process data.</li>
            <li>We minimize the data we collect and transmit to what is needed to provide the Services.</li>
          </ul>
          <p>No system is completely secure, and we cannot guarantee absolute security. You are responsible for keeping your account credentials and device secure.</p>

          <h2>7. Cookies &amp; Tracking Technologies</h2>
          <p>The App uses advertising and analytics SDKs that may use device or installation identifiers (such as your advertising ID) to serve and measure ads and to understand aggregate usage and stability. Related web pages (such as this one) may use basic cookies or local storage to remember preferences. You can limit ad personalization and reset your advertising ID through your device settings.</p>

          <h2>8. Subscriptions &amp; Payments</h2>
          <p>Settly may offer premium features, an ad-free option, or subscriptions. When you purchase premium services:</p>
          <ul>
            <li>Payments are processed by the App Store or Google Play Store. We do not directly collect or store your full payment card details.</li>
            <li>We receive subscription status and related purchase metadata (via RevenueCat) to unlock premium features.</li>
            <li>Refunds and billing disputes are handled according to the applicable store&apos;s policies.</li>
            <li>You can manage or cancel subscriptions through your App Store or Google Play account settings.</li>
          </ul>

          <h2>9. Third-Party Services</h2>
          <p>Settly may use the following third-party services:</p>
          <ul>
            <li>Cloud database, authentication, and file storage (Supabase)</li>
            <li>Sign-in with Google (Google Sign-In)</li>
            <li>Advertising: Google AdMob and its mediation networks</li>
            <li>Analytics and crash reporting (such as Google/Firebase services)</li>
            <li>Subscription management (RevenueCat)</li>
            <li>Payment processing operated by Apple and Google</li>
          </ul>
          <p>These services operate under their own privacy policies. We recommend reviewing them, including <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>, <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">Supabase&apos;s Privacy Policy</a>, and <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">RevenueCat&apos;s Privacy Policy</a> where applicable.</p>

          <h2>10. Your Rights &amp; Controls</h2>

          <p><strong>10.1 Access &amp; Control</strong></p>
          <p>You can view, edit, and delete your records, contacts, and attachments directly within the App at any time. You can also update your profile and preferences from the app settings.</p>

          <p><strong>10.2 Manage Ads</strong></p>
          <p>You can limit ad personalization and reset your advertising identifier in your device settings, and you can remove ads entirely by purchasing the premium/ad-free option.</p>

          <p><strong>10.3 Delete Your Account &amp; Data</strong></p>
          <p>You can delete individual records and attachments within the App. You may also request deletion of your account and associated data by contacting us at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>. When you delete your account, we remove or anonymize your personal data, except where we are required to retain it for legal, security, or legitimate business purposes.</p>

          <p><strong>10.4 Communication Preferences</strong></p>
          <p>You can control notifications through the App&apos;s settings or your device settings.</p>

          <p><strong>10.5 For EU/EEA &amp; UK Residents (GDPR)</strong></p>
          <p>If you are located in the European Union, European Economic Area, or United Kingdom, you have rights under the GDPR, including the right to access, rectify, erase, restrict processing, data portability, and to object to certain processing, including a right to object to ad personalization. You also have the right to lodge a complaint with a supervisory authority.</p>

          <p><strong>10.6 For California Residents (CCPA/CPRA)</strong></p>
          <p>If you are a California resident, you have rights under the CCPA and CPRA, including the right to know what personal information is collected, the right to request deletion, and the right to opt out of the &quot;sale&quot; or &quot;sharing&quot; of personal information (including for cross-context behavioral advertising). You can opt out of ad personalization through your device settings.</p>

          <p>To exercise your privacy rights or ask questions, contact us at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>. We aim to respond within 30 days.</p>

          <h2>11. Data Retention</h2>
          <p>We retain your account and the records you create for as long as your account is active or as needed to provide the Services. When you delete records or your account, we delete or anonymize the associated data, except where retention is required for legal, tax, security, or fraud-prevention purposes. Limited analytics and diagnostic data is retained in aggregated or anonymized form. Advertising data is retained by ad partners under their own policies. Subscription metadata is retained as required for account management and legal compliance.</p>

          <h2>12. Children&apos;s Privacy</h2>
          <p>Settly is not intended for users under 13 years of age (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children. If we discover that we have collected personal information from a child without appropriate consent, we will take steps to delete it promptly.</p>
          <p>If you are a parent or guardian and believe your child has provided us with personal information, please contact us at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.</p>

          <h2>13. International Transfers</h2>
          <p>Your information may be processed and stored in countries other than your own, including by our service providers. Where data is transferred internationally, appropriate safeguards such as standard contractual clauses or equivalent mechanisms are applied as required by applicable law.</p>

          <h2>14. Legal Basis for Processing</h2>
          <p>Where applicable law requires a legal basis for processing personal data, we rely on one or more of the following:</p>
          <ul>
            <li><strong>Consent:</strong> For personalized advertising, notifications, contacts access, and other features where consent is required.</li>
            <li><strong>Contractual necessity:</strong> To create your account and provide the features and subscriptions you request.</li>
            <li><strong>Legal obligations:</strong> To comply with applicable laws and regulations.</li>
            <li><strong>Legitimate interests:</strong> To secure and improve the Services, show non-personalized ads, prevent abuse, and support our business operations, balanced against your rights and interests.</li>
          </ul>

          <h2>15. Responsible Use &amp; Content Disclaimer</h2>
          <div className={s.highlightBox}>
            <p>Settly is a personal money-management tool, not financial, legal, tax, or accounting advice. <strong>You are solely responsible for the accuracy of the information you enter and for the people whose details you add.</strong> Only add contact information you are entitled to use, and do not use the App to harass, defraud, or unlawfully collect from others. You are responsible for complying with applicable laws relating to debt, lending, and privacy in your jurisdiction.</p>
          </div>

          <h2>16. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Changes take effect upon posting, and we will update the &quot;Last updated&quot; date at the top of this page. For material changes that significantly affect your rights, we will provide notice through the App or other appropriate means. We encourage you to review this policy periodically.</p>

          <h2>17. Contact Us</h2>
          <p>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:support@appaxislab.com">support@appaxislab.com</a></li>
            <li><strong>Developer:</strong> App Axis Lab</li>
          </ul>

          <hr className={s.divider} />

          <h1 id="eula">End User License Agreement (EULA)</h1>
          <p>This End User License Agreement (&quot;Agreement&quot;) is a legal agreement between you (&quot;User&quot; or &quot;you&quot;) and App Axis Lab (&quot;Licensor&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) for the Settly mobile application (the &quot;App&quot;). By downloading, installing, or using the App, you agree to be bound by this Agreement. If you do not agree, do not download, install, or use the App.</p>

          <h2>1. License Grant</h2>
          <p>Subject to your compliance with this Agreement, we grant you a limited, non-exclusive, non-transferable, revocable license to install and use the App on devices you own or control, for your personal, non-commercial use, in accordance with this Agreement and applicable app store terms.</p>

          <h2>2. Restrictions</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Copy, modify, adapt, or create derivative works of the App</li>
            <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the App, except where expressly permitted by law</li>
            <li>Rent, lease, lend, sell, sublicense, or distribute the App or any part of it</li>
            <li>Remove, alter, or obscure any proprietary notices or labels on the App</li>
            <li>Use the App for any unlawful purpose, including unlawful debt collection, harassment, or adding another person&apos;s information without a lawful basis</li>
            <li>Interfere with or disrupt the App, its cloud, ad, or analytics services, or connected networks</li>
            <li>Attempt to gain unauthorized access to other users&apos; accounts or data</li>
            <li>Use automated systems or bots to access or use the App without our written consent</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>The App, including its design, trademarks, software, and content (excluding the data you enter), is owned by App Axis Lab or its licensors and is protected by copyright, trademark, and other intellectual property laws. This Agreement does not transfer any ownership rights to you. You retain full ownership of the records, contacts, notes, and content you create with the App.</p>

          <h2>4. Your Content &amp; Account</h2>
          <p>You retain ownership of all content you create with the App (&quot;User Content&quot;), including debts, transactions, budgets, contacts, notes, and attachments. Your User Content is stored on your device and synced to your account. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You are solely responsible for your User Content and for ensuring you have the rights and consents needed to store and use it, including any third-party contact information.</p>

          <h2>5. Responsible Use</h2>
          <p>Settly is a tool to help you organize personal finances and is not a substitute for professional financial, legal, tax, or accounting advice. You must use the App lawfully and must not use it for unlawful debt collection, harassment, fraud, or to infringe the rights or privacy of others. You are responsible for the accuracy of the information you enter and for how you use it.</p>

          <h2>6. Account Security</h2>
          <p>You are responsible for securing your account and device, including safeguarding your credentials, PIN, and biometric settings. Notify us at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a> promptly if you suspect unauthorized use of your account or any security concern with the App.</p>

          <h2>7. Permissions &amp; Device Access</h2>
          <p>The App may request access to contacts, camera, photos/media/storage, biometrics, and notifications to support features described in our <a href="#privacy">Privacy Policy</a>. You may deny certain permissions, but related features may not function.</p>

          <h2>8. Advertising &amp; Third-Party Services</h2>
          <p>The free version of the App may be supported by advertising and may integrate third-party services for cloud storage and authentication, analytics, crash reporting, advertising, and subscription management. These services are governed by their own terms and privacy policies. We are not responsible for third-party services, content, or practices. Purchasing the premium/ad-free option removes in-app ads.</p>

          <h2>9. Subscriptions &amp; In-App Purchases</h2>
          <p>Settly may offer premium features, subscriptions, or in-app purchases. Payment and billing are processed by the App Store, Google Play Store, or other authorized payment providers. Refunds and billing disputes are handled according to the applicable store&apos;s policies. We do not store your full payment card details.</p>
          <p>Free trials, if offered, convert to paid subscriptions unless cancelled before the trial ends, in accordance with the applicable store&apos;s rules.</p>

          <h2>10. Disclaimer of Warranties</h2>
          <p>THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE, OR THAT YOUR DATA WILL BE STORED, SYNCED, OR RECOVERED WITHOUT ERROR ON EVERY DEVICE. THE APP DOES NOT PROVIDE FINANCIAL, LEGAL, TAX, OR ACCOUNTING ADVICE.</p>

          <h2>11. Limitation of Liability</h2>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, APP AXIS LAB AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP, INCLUDING ANY LOSS OR CORRUPTION OF DATA OR ANY DECISIONS YOU MAKE BASED ON INFORMATION IN THE APP.</p>
          <p>OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE APP SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US FOR THE APP IN THE TWELVE (12) MONTHS BEFORE THE CLAIM, OR (B) FIFTY U.S. DOLLARS (USD $50), WHERE PERMITTED BY LAW.</p>

          <h2>12. Indemnification</h2>
          <p>You agree to indemnify and hold harmless App Axis Lab from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from your use of the App, your User Content, the contact information you add, or your violation of this Agreement or applicable law.</p>

          <h2>13. Termination</h2>
          <p>This license is effective until terminated. We may suspend or terminate your access to the App at any time if you breach this Agreement. Upon termination, you must cease all use of the App and delete all copies from your devices. You may terminate at any time by deleting your account and uninstalling the App. Sections that by their nature should survive termination will survive.</p>

          <h2>14. Changes to This Agreement</h2>
          <p>We may update this EULA from time to time. Continued use of the App after changes become effective constitutes acceptance of the revised Agreement. The &quot;Last updated&quot; date at the top of this page will reflect material revisions.</p>

          <h2>15. Governing Law &amp; Disputes</h2>
          <p>This Agreement is governed by the laws of the jurisdiction in which App Axis Lab operates, without regard to conflict-of-law principles, except where mandatory consumer protection laws in your country provide otherwise. Any dispute shall be resolved in the courts of that jurisdiction, unless applicable law requires a different forum.</p>

          <h2>16. Children</h2>
          <p>The App is not intended for children under 13 years of age (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children as described in our Privacy Policy.</p>

          <h2>17. App Stores (Apple &amp; Google)</h2>
          <p>If you obtained the App through the Apple App Store or Google Play, you agree that the applicable store operator is not a party to this Agreement and has no responsibility or liability with respect to the App. Your use of the store is subject to that store&apos;s terms of service. On iOS, this Agreement is between you and App Axis Lab only, and Apple is a third-party beneficiary entitled to enforce it.</p>

          <h2>18. Severability &amp; Entire Agreement</h2>
          <p>If any provision of this Agreement is held invalid or unenforceable, the remaining provisions remain in full force. This Agreement, together with our Privacy Policy, constitutes the entire agreement between you and App Axis Lab regarding the App and supersedes prior understandings on the same subject.</p>

          <h2>19. Contact</h2>
          <p>For questions about this EULA, contact App Axis Lab at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.</p>
        </div>
      </div>
    </PrivacyLayout>
  )
}
