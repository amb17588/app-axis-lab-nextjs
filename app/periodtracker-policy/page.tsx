import type { Metadata } from 'next'
import PrivacyLayout from '@/components/PrivacyLayout'
import s from '@/styles/privacy.module.css'

export const metadata: Metadata = {
  title: 'Period Tracker — Privacy Policy & EULA | App Axis Lab',
}

export default function PeriodTrackerPolicy() {
  return (
    <PrivacyLayout
      appName="Period Tracker"
      subtitle="Privacy Policy &amp; End User License Agreement (EULA)"
      lastUpdated="Last updated: July 3, 2026"
    >
      <div className={s.card}>
        <div className={s.privacyContent}>
          <div className={s.highlightBox}>
            <p>
              This page contains the <a href="#privacy">Privacy Policy</a> and{' '}
              <a href="#eula">End User License Agreement (EULA)</a> for Period Tracker.
              By downloading, installing, or using the App, you agree to both documents.
            </p>
          </div>

          {/* ── PRIVACY POLICY ── */}
          <h1 id="privacy">Privacy Policy</h1>

          <h2>Scope</h2>
          <p>
            Welcome to Period Tracker&apos;s Privacy Policy. Your privacy and the security of your health
            information are our highest priority. This Privacy Policy explains how Period Tracker
            (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) handles your information when you use our period, cycle, and
            ovulation tracking mobile application and related services (the &quot;App&quot; or &quot;Services&quot;)
            available on the Apple App Store and Google Play Store.
          </p>
          <p>If you do not agree with this Privacy Policy, please do not use our Services.</p>

          <h2>Overview — Privacy by Design</h2>
          <p>
            Period Tracker is built to be <strong>offline-first and privacy-focused</strong>. The health
            information you log stays on your device by default.
          </p>
          <div className={s.highlightBox}>
            <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
              <li><strong>Your data lives on your device</strong> — cycle logs, symptoms, and notes are stored locally in an encrypted database (SQLCipher).</li>
              <li><strong>No account is required</strong> — you can use the App without creating an account or giving us your email or name.</li>
              <li><strong>We do not have a server that stores your health data</strong> — we cannot read your logs, and there is no online profile of you.</li>
              <li><strong>Cloud backup is optional and end-to-end encrypted</strong> — if you enable it, your data is encrypted on your device before it ever leaves it.</li>
              <li><strong>We never sell your data</strong> and we do not use your health information for advertising.</li>
            </ul>
          </div>

          <h2>1. Account &amp; Local Setup</h2>
          <p>Period Tracker does not require you to register an account to use its core features. When you first use the App, you may optionally provide:</p>
          <ul>
            <li>A profile name or nickname (stored on your device)</li>
            <li>Basic cycle information such as your typical cycle and period length</li>
            <li>A PIN or biometric (Face ID / Touch ID / fingerprint) to lock the App</li>
          </ul>
          <p>This information is stored locally on your device and is used to personalize predictions and secure access to the App. Your PIN and encryption keys are never transmitted to us.</p>

          <h2>2. Information We Collect</h2>

          <h3>2.1 Health &amp; Cycle Information You Provide (Stored On Your Device)</h3>
          <p>You may log sensitive personal and health information, which is stored locally in an encrypted database on your device:</p>
          <ul>
            <li>Menstrual cycle dates, period start and end dates, and flow intensity</li>
            <li>Symptoms, moods, physical and emotional signs</li>
            <li>Basal body temperature (BBT), sexual activity, and fertility indicators</li>
            <li>Pill or contraception reminders and intake logs</li>
            <li>Personal notes, journal entries, and daily logs</li>
            <li>Predictions and insights generated from your data</li>
          </ul>
          <div className={s.highlightBox}>
            <p>
              This information is processed <strong>on your device</strong> to generate predictions and
              insights. Our calculation engine runs locally — this data is not sent to us and is not
              required to leave your device unless you choose to enable cloud backup or export it yourself.
            </p>
          </div>

          <h3>2.2 Usage &amp; Diagnostic Information</h3>
          <p>To keep the App reliable and improve it, we collect limited, non-health analytics and diagnostic data through third-party tools (such as Firebase Analytics and Crashlytics), including:</p>
          <ul>
            <li>Which features and screens are used and general interaction patterns</li>
            <li>App version, session information, and performance metrics</li>
            <li>Crash logs and diagnostic data</li>
          </ul>
          <p>This analytics data is aggregated and is <strong>not linked to your cycle logs or health entries</strong>. It does not include the contents of your period, symptom, or note data.</p>

          <h3>2.3 Device Data</h3>
          <ul>
            <li>Device type, model, and operating system</li>
            <li>App version and language settings</li>
            <li>Push notification tokens (only if you enable notifications)</li>
            <li>Anonymous device or installation identifiers used by analytics and subscription providers</li>
          </ul>

          <h3>2.4 Optional Cloud Backup Data</h3>
          <p>
            If you choose to enable cloud backup, a copy of your data is <strong>encrypted on your device</strong>{' '}
            before it is uploaded, using a key derived from your recovery code or password. Because the data
            is end-to-end encrypted, the backup is unreadable to us and to the cloud storage provider. Only
            you, with your recovery code or password, can restore and decrypt it. If you lose your recovery
            code, we cannot recover your backup for you.
          </p>

          <h3>2.5 Billing Information</h3>
          <p>
            If you purchase a premium subscription, payment is processed by the Apple App Store or Google
            Play Store, and subscription status is managed through our subscription provider (RevenueCat).
            We do not directly collect or store your full payment card details. We may receive subscription
            status, anonymous purchase identifiers, and billing-related metadata to unlock and manage
            premium features.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information described above to:</p>
          <ul>
            <li>Provide core features on your device, including cycle tracking, predictions, insights, and reminders</li>
            <li>Secure your data with encryption and PIN/biometric lock</li>
            <li>Provide optional, end-to-end encrypted cloud backup and restore</li>
            <li>Send local reminders and notifications you have enabled (e.g., period, ovulation, or pill reminders)</li>
            <li>Understand aggregate feature usage and fix crashes to improve stability and performance</li>
            <li>Process and manage premium subscriptions through authorized payment providers</li>
            <li>Provide customer support when you contact us</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>We do <strong>not</strong> use your health or cycle data for advertising, profiling, or automated decision-making that produces legal effects.</p>

          <h2>4. How We Share Your Information</h2>

          <h3>4.1 Your Health Data Stays With You</h3>
          <p>Your cycle, symptom, and note data is stored on your device and, if you enable backup, in an end-to-end encrypted form that we cannot read. We do not share your health data with any third party, and there is no social or sharing feature that publishes your data to other users.</p>

          <h3>4.2 With Service Providers</h3>
          <p>We use a limited number of trusted providers for analytics and crash reporting, encrypted cloud storage/backup infrastructure, and subscription management. These providers process only the limited data described in this policy, under contractual obligations, and only as needed to perform their services. They do not receive your unencrypted health data.</p>

          <h3>4.3 Legal Requirements</h3>
          <p>We may disclose information if required by law, regulation, legal process, or governmental request, or when we believe disclosure is necessary to protect the rights, property, or safety of Period Tracker, our users, or others. Because your health data is encrypted and stored on your device, we generally have no such data to disclose.</p>

          <h3>4.4 Business Transfers</h3>
          <p>If Period Tracker is involved in a merger, acquisition, reorganization, or sale of assets, limited data we hold may be transferred as part of that transaction. We will notify you of any material change in ownership or use of your personal information.</p>

          <h3>4.5 Non-Personal Data</h3>
          <p>We may share aggregated or anonymized data that cannot reasonably be used to identify you for analytics and product-improvement purposes.</p>

          <div className={s.callout}>
            <p>We do <strong>not</strong> sell your personal information, and we do not sell or share your health data.</p>
          </div>

          <h2>5. Permissions</h2>
          <p>Period Tracker may request the following device permissions:</p>
          <ul>
            <li><strong>Face ID / Touch ID / Biometrics:</strong> To securely unlock the App. Biometric data never leaves your device and is handled by your operating system, not by us.</li>
            <li><strong>Notifications:</strong> To send reminders you enable, such as upcoming period, fertile window, or pill reminders. You can disable notifications in your device or app settings.</li>
            <li><strong>Internet:</strong> Optional and used only for features such as cloud backup, subscription verification, analytics, and app updates. Core tracking works offline.</li>
          </ul>

          <h2>6. Data Security</h2>
          <p>We take the security of your health data seriously:</p>
          <ul>
            <li>Your local database is encrypted using SQLCipher (encrypted SQLite).</li>
            <li>Encryption keys are protected using a two-tier key system and stored in your device&apos;s secure hardware-backed storage, unlocked by your biometric or PIN.</li>
            <li>Optional cloud backups are end-to-end encrypted on your device before upload.</li>
          </ul>
          <p>No system is completely secure, and we cannot guarantee absolute security. You are responsible for keeping your device, PIN, and recovery code confidential. If you lose your recovery code, encrypted backups cannot be recovered.</p>

          <h2>7. Cookies &amp; Tracking Technologies</h2>
          <p>The App itself does not use advertising cookies. Analytics and subscription providers may use device or installation identifiers to measure aggregate usage and stability. Related web pages (such as this one) may use basic cookies or local storage to remember preferences. We do not use your health data for tracking or advertising.</p>

          <h2>8. Subscriptions &amp; Payments</h2>
          <p>Period Tracker may offer premium features or subscriptions. When you purchase premium services:</p>
          <ul>
            <li>Payments are processed by the Apple App Store (iOS) or Google Play Store (Android). We do not directly collect or store your full payment card details.</li>
            <li>We receive subscription status and related purchase metadata (via RevenueCat) to unlock premium features.</li>
            <li>Refunds and billing disputes are handled according to the applicable app store&apos;s policies.</li>
            <li>You can manage or cancel subscriptions through your App Store or Google Play account settings.</li>
          </ul>

          <h2>9. Third-Party Services</h2>
          <p>Period Tracker may use the following third-party services:</p>
          <ul>
            <li>Analytics and crash reporting (e.g., Firebase Analytics, Firebase Crashlytics, Firebase Remote Config)</li>
            <li>Subscription management (RevenueCat)</li>
            <li>Encrypted cloud backup and storage infrastructure</li>
            <li>Payment processors operated by Apple and Google</li>
          </ul>
          <p>
            These services operate under their own privacy policies. We recommend reviewing them, including{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>{' '}
            and{' '}
            <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">RevenueCat&apos;s Privacy Policy</a>{' '}
            where applicable.
          </p>

          <h2>10. Your Rights &amp; Controls</h2>

          <h3>10.1 Access &amp; Control</h3>
          <p>Because your data is stored on your device, you have direct control over it at all times. You can view, edit, or delete any entry within the App.</p>

          <h3>10.2 Export Your Data</h3>
          <p>You can export your data (for example, as JSON, CSV, or PDF) from within the App at any time.</p>

          <h3>10.3 Delete Your Data</h3>
          <p>You can delete individual entries, or delete all data by clearing the App&apos;s data or uninstalling the App from your device. If you enabled cloud backup, you can delete your encrypted backup from within the App.</p>

          <h3>10.4 Communication Preferences</h3>
          <p>You can control reminders and notifications through the App&apos;s settings or your device settings.</p>

          <h3>10.5 For EU/EEA &amp; UK Residents (GDPR)</h3>
          <p>If you are located in the European Union, European Economic Area, or United Kingdom, you have rights under the GDPR, including the right to access, rectify, erase, restrict processing, data portability, and to object to certain processing. Health data is treated as a special category of personal data and is primarily processed on your device under your control. You also have the right to lodge a complaint with a supervisory authority.</p>

          <h3>10.6 For California Residents (CCPA/CPRA)</h3>
          <p>If you are a California resident, you have rights under the CCPA and CPRA, including the right to know what personal information is collected, the right to request deletion, and the right to opt out of the sale or sharing of personal information. We do not sell or share your personal information.</p>

          <p>
            To exercise your privacy rights or ask questions, contact us at{' '}
            <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>. We aim to respond within 30 days.
          </p>

          <h2>11. Data Retention</h2>
          <p>Because your health data is stored on your device, it is retained until you delete it or uninstall the App. Optional encrypted backups are retained until you delete them. Limited analytics and diagnostic data is retained for as long as necessary to improve the Services and is aggregated or anonymized. Subscription metadata is retained as required for account management and legal compliance.</p>

          <h2>12. Children&apos;s Privacy</h2>
          <p>Period Tracker is not intended for users under 13 years of age (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children. If we discover that we have collected personal information from a child without appropriate consent, we will take steps to delete it promptly.</p>
          <p>
            If you are a parent or guardian and believe your child has provided us with personal information,
            please contact us at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.
          </p>

          <h2>13. International Transfers</h2>
          <p>Your primary data remains on your device. Any limited data processed by our service providers (such as analytics or encrypted backups) may be processed in countries other than your own. Where we transfer data internationally, we implement appropriate safeguards such as standard contractual clauses or equivalent mechanisms as required by applicable law.</p>

          <h2>14. Legal Basis for Processing</h2>
          <p>Where applicable law requires a legal basis for processing personal data, we rely on one or more of the following:</p>
          <ul>
            <li><strong>Consent:</strong> For processing special-category health data, enabling optional cloud backup, and enabling notifications or analytics where consent is required.</li>
            <li><strong>Contractual necessity:</strong> To provide the features and subscriptions you request.</li>
            <li><strong>Legal obligations:</strong> To comply with applicable laws and regulations.</li>
            <li><strong>Legitimate interests:</strong> To improve stability, prevent abuse, and support our business operations, balanced against your rights and interests.</li>
          </ul>

          <h2>15. Medical Disclaimer</h2>
          <div className={s.calloutWarning}>
            <p>
              Period Tracker is a tracking and informational tool. It is <strong>not a medical device</strong> and
              does not provide medical advice, diagnosis, or treatment. Predictions, fertile windows, and insights
              are estimates based on the data you enter and should not be relied upon as a form of contraception
              or for medical decisions. Always consult a qualified healthcare professional for medical concerns.
            </p>
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

          {/* ── EULA ── */}
          <h1 id="eula">End User License Agreement (EULA)</h1>

          <div className={s.highlightBox}>
            <p>
              This End User License Agreement (&quot;Agreement&quot;) is a legal agreement between you (&quot;User&quot; or
              &quot;you&quot;) and App Axis Lab (&quot;Licensor&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) for the Period Tracker mobile
              application (the &quot;App&quot;). By downloading, installing, or using the App, you agree to be bound by
              this Agreement. If you do not agree, do not download, install, or use the App.
            </p>
          </div>

          <h2>1. License Grant</h2>
          <p>
            Subject to your compliance with this Agreement, we grant you a limited, non-exclusive,
            non-transferable, revocable license to install and use the App on devices you own or control,
            solely for personal, non-commercial purposes, in accordance with this Agreement and applicable
            app store terms.
          </p>

          <h2>2. Restrictions</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Copy, modify, adapt, or create derivative works of the App</li>
            <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code or encryption mechanisms of the App, except where expressly permitted by law</li>
            <li>Rent, lease, lend, sell, sublicense, or distribute the App or any part of it</li>
            <li>Remove, alter, or obscure any proprietary notices or labels on the App</li>
            <li>Use the App for any unlawful purpose or in violation of any applicable laws or regulations</li>
            <li>Interfere with or disrupt the App, its backup infrastructure, or connected networks</li>
            <li>Use automated systems or bots to access or use the App without our written consent</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>
            The App, including its design, trademarks, software, and content (excluding your data), is owned
            by App Axis Lab or its licensors and is protected by copyright, trademark, and other intellectual
            property laws. This Agreement does not transfer any ownership rights to you. You retain full
            ownership of the health data, logs, notes, and content you enter into the App.
          </p>

          <h2>4. Your Data &amp; Content</h2>
          <p>
            You retain ownership of all data you enter into the App (&quot;User Content&quot;), including cycle logs,
            symptoms, notes, and related information. Your User Content is stored on your device and, if you
            enable backup, in an end-to-end encrypted form that we cannot read. You are solely responsible
            for maintaining your recovery code or backup password; if lost, encrypted backups cannot be
            recovered by us.
          </p>

          <h2>5. Medical Disclaimer</h2>
          <p>
            The App is a tracking and informational tool and is <strong>not a medical device</strong>. It does not
            provide medical advice, diagnosis, or treatment, and must not be used as a method of contraception
            or for making medical decisions. Predictions and insights are estimates based on data you enter.
            Always consult a qualified healthcare professional regarding your health.
          </p>

          <h2>6. Account &amp; Device Security</h2>
          <p>
            You are responsible for securing your device, PIN, biometric access, and recovery code, and for
            all activity that occurs within the App on your device. Notify us at{' '}
            <a href="mailto:support@appaxislab.com">support@appaxislab.com</a> if you have concerns about the
            security of the App.
          </p>

          <h2>7. Permissions &amp; Device Access</h2>
          <p>
            The App may request access to biometrics and notifications to support features described in our{' '}
            <a href="#privacy">Privacy Policy</a>. You may deny certain permissions, but related features may
            not function.
          </p>

          <h2>8. Third-Party Services</h2>
          <p>
            The App may integrate third-party services for analytics, crash reporting, encrypted cloud backup,
            and subscription management. These services are governed by their own terms and privacy policies.
            We are not responsible for third-party services, content, or practices.
          </p>

          <h2>9. Subscriptions &amp; In-App Purchases</h2>
          <p>
            Period Tracker may offer premium features, subscriptions, or in-app purchases. Payment and billing
            are processed by the Apple App Store, Google Play Store, or other authorized payment providers.
            Refunds and billing disputes are handled according to the applicable store&apos;s policies. We do
            not store your full payment card details.
          </p>
          <p>
            Free trials, if offered, convert to paid subscriptions unless cancelled before the trial ends, in
            accordance with the applicable store&apos;s rules.
          </p>

          <h2>10. Disclaimer of Warranties</h2>
          <p>
            THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER
            EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE
            UNINTERRUPTED, ERROR-FREE, OR SECURE, OR THAT PREDICTIONS, INSIGHTS, OR CALCULATIONS WILL BE
            ACCURATE OR COMPLETE.
          </p>

          <h2>11. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, APP AXIS LAB AND ITS AFFILIATES, OFFICERS,
            DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR
            RELATED TO YOUR USE OF OR INABILITY TO USE THE APP, INCLUDING ANY RELIANCE ON PREDICTIONS OR
            INSIGHTS OR ANY LOSS OF DATA OR BACKUPS.
          </p>
          <p>
            OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE APP SHALL
            NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US FOR THE APP IN THE TWELVE (12) MONTHS BEFORE
            THE CLAIM, OR (B) FIFTY U.S. DOLLARS (USD $50), WHERE PERMITTED BY LAW.
          </p>

          <h2>12. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless App Axis Lab from any claims, damages, losses,
            liabilities, and expenses (including reasonable legal fees) arising from your use of the App,
            your User Content, or your violation of this Agreement or applicable law.
          </p>

          <h2>13. Termination</h2>
          <p>
            This license is effective until terminated. We may suspend or terminate your access to the App at
            any time if you breach this Agreement. Upon termination, you must cease all use of the App and
            delete all copies from your devices. Sections that by their nature should survive termination
            will survive.
          </p>

          <h2>14. Changes to This Agreement</h2>
          <p>
            We may update this EULA from time to time. Continued use of the App after changes become
            effective constitutes acceptance of the revised Agreement. The &quot;Last updated&quot; date at the top
            of this page will reflect material revisions.
          </p>

          <h2>15. Governing Law &amp; Disputes</h2>
          <p>
            This Agreement is governed by the laws of the jurisdiction in which App Axis Lab operates, without
            regard to conflict-of-law principles, except where mandatory consumer protection laws in your
            country provide otherwise. Any dispute shall be resolved in the courts of that jurisdiction, unless
            applicable law requires a different forum.
          </p>

          <h2>16. Children</h2>
          <p>
            The App is not intended for children under 13 years of age (or the applicable age of consent in
            your jurisdiction). We do not knowingly collect personal information from children as described in
            our Privacy Policy.
          </p>

          <h2>17. Apple App Store (iOS)</h2>
          <p>If you obtained the App through the Apple App Store, you also agree that:</p>
          <ul>
            <li>This Agreement is between you and App Axis Lab only, not Apple Inc. (&quot;Apple&quot;).</li>
            <li>Apple is not responsible for the App or its content, maintenance, support, or warranty obligations.</li>
            <li>Apple has no obligation to furnish maintenance or support services for the App.</li>
            <li>In the event of any failure of the App to conform to any applicable warranty, you may notify Apple for a refund of the purchase price (if any); to the maximum extent permitted by law, Apple has no other warranty obligation.</li>
            <li>Apple is not responsible for addressing any claims relating to the App, including product liability, legal compliance, consumer protection, privacy, or intellectual property infringement.</li>
            <li>Apple and its subsidiaries are third-party beneficiaries of this Agreement and may enforce it against you as a third-party beneficiary.</li>
            <li>You represent that you are not located in a country subject to a U.S. Government embargo or designated as a &quot;terrorist supporting&quot; country, and that you are not listed on any U.S. Government prohibited or restricted party list.</li>
            <li>You must comply with applicable third-party terms when using the App (e.g., wireless data service agreements).</li>
          </ul>

          <h2>18. Google Play (Android)</h2>
          <p>
            If you obtained the App through Google Play, you agree that Google LLC is not a party to this
            Agreement and has no responsibility or liability with respect to the App. Your use of Google Play
            is subject to Google Play&apos;s terms of service.
          </p>

          <h2>19. Severability &amp; Entire Agreement</h2>
          <p>
            If any provision of this Agreement is held invalid or unenforceable, the remaining provisions
            remain in full force. This Agreement, together with our Privacy Policy, constitutes the entire
            agreement between you and App Axis Lab regarding the App and supersedes prior understandings on
            the same subject.
          </p>

          <h2>20. Contact</h2>
          <p>
            For questions about this EULA, contact App Axis Lab at{' '}
            <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.
          </p>
        </div>
      </div>
    </PrivacyLayout>
  )
}
