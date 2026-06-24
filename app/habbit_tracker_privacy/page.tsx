import type { Metadata } from 'next'
import PrivacyLayout from '@/components/PrivacyLayout'
import s from '@/styles/privacy.module.css'

export const metadata: Metadata = {
  title: 'Habbit Tracker — Privacy Policy & EULA | App Axis Lab',
}

export default function HabbitTrackerPrivacy() {
  return (
    <PrivacyLayout
      appName="Habbit Tracker"
      subtitle="Privacy Policy &amp; End User License Agreement"
      lastUpdated="Last updated: June 24, 2026"
    >
      <div className={s.card}>
        <div className={s.privacyContent}>
          <div className={s.highlightBox}>
            <p>
              This page contains the <a href="#privacy">Privacy Policy</a> and{' '}
              <a href="#eula">End User License Agreement (EULA)</a> for Habbit Tracker.
              By downloading, installing, or using the App, you agree to both documents.
            </p>
          </div>

          {/* ── PRIVACY POLICY ── */}
          <h1 id="privacy">Privacy Policy</h1>

          <h2>Scope</h2>
          <p>
            Welcome to Habbit Tracker&apos;s Privacy Policy. Your privacy and data security matter to us.
            This Privacy Policy explains how App Axis Lab (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses, protects,
            and shares your information when you use our habit tracking mobile application and related services
            (the &quot;App&quot; or &quot;Services&quot;) available on the Apple App Store and Google Play Store.
          </p>
          <p>If you do not agree with this Privacy Policy, please do not use our Services.</p>

          <h2>Overview</h2>
          <p>
            Habbit Tracker is a personal productivity app that helps you build, track, and maintain daily habits
            through streaks, analytics, achievements, and expert-designed journeys.
          </p>
          <ul>
            <li>All habit data is stored locally on your device using Realm — we do not publish your habits or personal profile publicly.</li>
            <li>You control your data, including the ability to back up, export, or delete it at any time.</li>
            <li>Optional cloud-connected features (analytics, crash reporting) are used solely to improve the App.</li>
          </ul>

          <h2>1. Account Registration</h2>
          <p>
            Habbit Tracker is primarily a local-first app and does not require account registration to use core
            habit-tracking features. If we introduce account-based features in the future, we may collect:
          </p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Password</li>
          </ul>
          <p>This information would be used to manage your account, authenticate you, and communicate service-related notices.</p>

          <h2>2. Information We Collect</h2>
          <h3>2.1 Information You Provide</h3>
          <ul>
            <li>Habits you create — names, categories, icons, colors, schedules, and frequencies</li>
            <li>Habit completions, streaks, and notes you log</li>
            <li>Journey progress and goal selections</li>
            <li>Notification preferences and reminder schedules</li>
            <li>Feedback and support messages you send to us</li>
          </ul>

          <h3>2.2 Usage Information</h3>
          <p>We collect data about how you interact with the App to improve our Services, including:</p>
          <ul>
            <li>Features used and screens viewed</li>
            <li>Session duration and interaction patterns</li>
            <li>Crash logs and diagnostic data (via Firebase Crashlytics)</li>
            <li>Analytics events (via Firebase Analytics)</li>
          </ul>

          <h3>2.3 Device Data</h3>
          <ul>
            <li>Device type and model</li>
            <li>Operating system and app version</li>
            <li>IP address</li>
            <li>Push notification tokens (if you enable notifications)</li>
            <li>Approximate location derived from IP address — we do not collect precise GPS location</li>
          </ul>

          <h3>2.4 Advertising Data</h3>
          <p>
            The App uses Google AdMob to display ads. AdMob may collect device identifiers and usage data
            to serve relevant ads. You can opt out of personalized advertising through your device&apos;s ad settings.
            See{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Google&apos;s Privacy Policy
            </a>{' '}
            for details.
          </p>

          <h3>2.5 Billing Information</h3>
          <p>
            If you purchase premium features, payment details are processed entirely by the Apple App Store or Google Play Store.
            We do not directly collect or store your payment card details. We may receive subscription status and
            purchase identifiers for account management purposes.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and maintain core habit-tracking, streak, and achievement features</li>
            <li>Generate your personal statistics, weekly graphs, and progress reports</li>
            <li>Improve app performance, features, and user experience</li>
            <li>Detect and fix crashes, bugs, and errors</li>
            <li>Deliver push notifications for habit reminders and milestones</li>
            <li>Display advertisements through Google AdMob (free tier)</li>
            <li>Process premium subscriptions and manage billing through authorized payment providers</li>
            <li>Respond to support requests and service-related communications</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>4. How We Share Your Information</h2>
          <h3>4.1 With Service Providers</h3>
          <p>
            We use trusted vendors for cloud infrastructure, analytics, crash reporting, advertising, and subscription
            management. These providers process data on our behalf under contractual obligations and only as needed
            to perform their services. Key providers include Firebase (Google), Google AdMob, and RevenueCat.
          </p>

          <h3>4.2 Legal Requirements</h3>
          <p>
            We may disclose information if required by law, regulation, legal process, or governmental request,
            or when necessary to protect the rights, property, or safety of App Axis Lab, our users, or others.
          </p>

          <h3>4.3 Business Transfers</h3>
          <p>
            If App Axis Lab is involved in a merger, acquisition, or sale of assets, your data may be transferred
            as part of that transaction. We will notify you of any material change in ownership or use of your data.
          </p>

          <h3>4.4 Non-Personal Data</h3>
          <p>We may share aggregated or anonymized data that cannot reasonably identify you for analytics and research.</p>

          <div className={s.callout}>
            <p><strong>✅ We do not sell your personal information.</strong></p>
          </div>

          <h2>5. Permissions</h2>
          <p>Habbit Tracker may request the following device permissions:</p>
          <ul>
            <li><strong>Notifications:</strong> To send habit reminders, streak alerts, and milestone celebrations. You can disable this in your device or app settings.</li>
            <li><strong>Internet:</strong> Required for analytics, crash reporting, ads, and subscription management.</li>
            <li><strong>Storage / File System:</strong> To back up and export your habit data to your device.</li>
            <li><strong>Camera &amp; Photo Library (optional):</strong> If a future feature supports attaching images to habits or your profile. Core features work without this permission.</li>
          </ul>

          <h2>6. Data Security</h2>
          <p>
            Habit data is stored locally on your device using the Realm database. We use encryption, access controls,
            and industry-standard security practices to protect any data transmitted to or stored on our servers.
            However, no system is completely secure, and we cannot guarantee absolute security of transmitted information.
          </p>
          <p>You are responsible for keeping your device and any account credentials secure.</p>

          <h2>7. Cookies &amp; Tracking Technologies</h2>
          <p>
            We use local storage and similar technologies within the App to maintain settings, remember preferences,
            and improve your experience. Analytics and advertising providers (Firebase, AdMob) may also use device
            identifiers and similar tracking technologies.
          </p>
          <p>You can limit ad tracking through your device&apos;s privacy settings.</p>

          <h2>8. Subscriptions &amp; Payments</h2>
          <p>Habbit Tracker may offer a premium tier to remove ads and unlock advanced features. When you purchase:</p>
          <ul>
            <li>Payments are processed by the Apple App Store (iOS) or Google Play Store (Android). We do not collect or store your payment card details.</li>
            <li>We receive subscription status and purchase metadata to unlock premium features via RevenueCat.</li>
            <li>Refunds and billing disputes are handled according to the applicable app store&apos;s policies.</li>
            <li>You can manage or cancel subscriptions through your App Store or Google Play account settings.</li>
            <li>Free trials, if offered, convert to paid subscriptions unless cancelled before the trial ends.</li>
          </ul>

          <h2>9. Third-Party Services</h2>
          <p>Habbit Tracker integrates with the following third-party services:</p>
          <ul>
            <li>Firebase Analytics — usage analytics and event tracking</li>
            <li>Firebase Crashlytics — crash and error reporting</li>
            <li>Firebase Remote Config — remote feature configuration</li>
            <li>Google AdMob — in-app advertising (free tier)</li>
            <li>RevenueCat — subscription and in-app purchase management</li>
            <li>Apple App Store / Google Play Store — app distribution and payment processing</li>
          </ul>
          <p>
            These services operate under their own privacy policies. We recommend reviewing{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>{' '}
            and{' '}
            <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">RevenueCat&apos;s Privacy Policy</a>{' '}
            where applicable.
          </p>

          <h2>10. Your Rights</h2>
          <h3>10.1 Access &amp; Update</h3>
          <p>You can view and update your profile information at any time through the Profile section of the App.</p>

          <h3>10.2 Notification Preferences</h3>
          <p>You can configure or disable push notifications in the Notifications settings screen or through your device settings.</p>

          <h3>10.3 Data Export &amp; Backup</h3>
          <p>You can export and back up all your habit data locally through the Profile &gt; Settings &gt; Data Management section.</p>

          <h3>10.4 Account &amp; Data Deletion</h3>
          <ul>
            <li><strong>Clear Data:</strong> You can delete all locally stored habits and progress from within the App&apos;s data management settings.</li>
            <li><strong>Delete Account:</strong> If account-based features are available, you may request permanent account deletion by contacting us.</li>
          </ul>

          <h3>10.5 For EU/EEA Residents (GDPR)</h3>
          <p>
            If you are located in the European Union or European Economic Area, you have rights under the GDPR,
            including the right to access, rectify, erase, restrict processing, data portability, and to object to
            certain processing. You also have the right to lodge a complaint with a supervisory authority.
          </p>

          <h3>10.6 For California Residents (CCPA/CPRA)</h3>
          <p>
            If you are a California resident, you have rights under the CCPA and CPRA, including the right to know
            what personal information is collected, the right to request deletion, and the right to opt out of the
            sale or sharing of personal information. We do not sell personal information.
          </p>
          <p>
            To exercise your privacy rights, contact us at{' '}
            <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>. We aim to respond within 30 days.
          </p>

          <h2>11. Data Retention</h2>
          <p>
            Habit data is stored locally on your device for as long as you keep the App installed.
            Any data transmitted to our servers (analytics, crash logs) is retained for as long as necessary
            to provide and improve the Services, resolve issues, and comply with legal obligations.
            You can clear local data at any time from within the App.
          </p>

          <h2>12. Children&apos;s Privacy</h2>
          <p>
            Habbit Tracker is not intended for users under 13 years of age (or the applicable age of consent in your
            jurisdiction). We do not knowingly collect personal information from children. If we discover that we have
            inadvertently collected data from a child, we will take steps to delete it promptly.
          </p>
          <p>
            If you are a parent or guardian and believe your child has provided us with personal information,
            please contact us at{' '}
            <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.
          </p>

          <h2>13. International Transfers</h2>
          <p>
            Your data may be processed and stored in countries other than your own, including countries with different
            data protection laws. When we transfer data internationally, we implement appropriate safeguards such as
            standard contractual clauses or equivalent mechanisms as required by applicable law.
          </p>

          <h2>14. Legal Basis for Processing</h2>
          <p>Where applicable law requires a legal basis for processing personal data, we rely on:</p>
          <ul>
            <li><strong>Consent:</strong> When you agree to specific processing, such as enabling notifications or analytics.</li>
            <li><strong>Contractual necessity:</strong> To provide the Services you request, including habit tracking and subscription management.</li>
            <li><strong>Legal obligations:</strong> To comply with applicable laws and regulations.</li>
            <li><strong>Legitimate interests:</strong> To improve the App, ensure security, display relevant ads, and prevent fraud.</li>
          </ul>

          <h2>15. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes take effect upon posting, and we will update
            the &quot;Last updated&quot; date at the top of this page. For material changes that significantly affect your rights,
            we will provide notice through the App or other appropriate means. We encourage you to review this policy periodically.
          </p>

          <h2>16. Contact Us</h2>
          <p>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
          <ul>
            <li>Email: <a href="mailto:support@appaxislab.com">support@appaxislab.com</a></li>
            <li>Developer: App Axis Lab</li>
          </ul>

          <hr className={s.divider} />

          {/* ── EULA ── */}
          <h1 id="eula">End User License Agreement (EULA)</h1>

          <div className={s.highlightBox}>
            <p>
              This End User License Agreement (&quot;Agreement&quot;) is a legal agreement between you (&quot;User&quot; or &quot;you&quot;) and
              App Axis Lab (&quot;Licensor&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) for the Habbit Tracker mobile application (the &quot;App&quot;).
              By downloading, installing, or using the App, you agree to be bound by this Agreement.
              If you do not agree, do not download, install, or use the App.
            </p>
          </div>

          <h2>1. License Grant</h2>
          <p>
            Subject to your compliance with this Agreement, we grant you a limited, non-exclusive, non-transferable,
            revocable license to install and use the App on devices you own or control, solely for personal,
            non-commercial purposes, in accordance with this Agreement and applicable app store terms.
          </p>

          <h2>2. Restrictions</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Copy, modify, adapt, or create derivative works of the App</li>
            <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the App, except where expressly permitted by law</li>
            <li>Rent, lease, lend, sell, sublicense, or distribute the App or any part of it</li>
            <li>Remove, alter, or obscure any proprietary notices or labels on the App</li>
            <li>Use the App for any unlawful purpose or in violation of any applicable laws or regulations</li>
            <li>Manipulate or falsify habit completion data, streaks, or achievements</li>
            <li>Interfere with or disrupt the App, its servers, or connected networks</li>
            <li>Use automated systems or bots to interact with the App without our written consent</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>
            The App, including its design, trademarks, software, habit presets, journey programs, achievement system,
            and content (excluding your personal habit data), is owned by App Axis Lab or its licensors and is
            protected by copyright, trademark, and other intellectual property laws. This Agreement does not transfer
            any ownership rights to you. You retain ownership of the personal habit data and notes you create in the App.
          </p>

          <h2>4. User Content &amp; Habit Data</h2>
          <p>
            You may create habits, log completions, set goals, follow journeys, and record notes (&quot;User Content&quot;).
            You retain ownership of your User Content. You are solely responsible for the accuracy and appropriateness
            of the data you enter. Habbit Tracker is a personal productivity and habit-building tool. It does not
            provide medical, psychological, financial, or legal advice. Streaks, scores, and analytics displayed in
            the App are informational and depend entirely on data entered by you.
          </p>

          <h2>5. Account Security</h2>
          <p>
            If account-based features are available, you are responsible for maintaining the confidentiality of your
            login credentials and for all activity under your account. Notify us promptly at{' '}
            <a href="mailto:support@appaxislab.com">support@appaxislab.com</a> if you suspect unauthorized access.
          </p>

          <h2>6. Permissions &amp; Device Access</h2>
          <p>
            The App may request access to notifications, local storage, and optionally your camera or photo library
            to support features described in our Privacy Policy. You may deny certain permissions, but related
            features may not function as a result.
          </p>

          <h2>7. Third-Party Services</h2>
          <p>
            The App integrates third-party services including Firebase (analytics, crash reporting, remote config),
            Google AdMob (advertising), and RevenueCat (subscription management). These services are governed by
            their own terms and privacy policies. We are not responsible for third-party service behavior,
            content, or practices.
          </p>

          <h2>8. Subscriptions &amp; In-App Purchases</h2>
          <p>
            Habbit Tracker may offer a premium subscription to remove ads and unlock advanced features.
            Payment and billing are processed by the Apple App Store or Google Play Store. Refunds and
            billing disputes are handled according to the applicable store&apos;s policies. We do not store
            your full payment card details. Free trials, if offered, convert to paid subscriptions unless
            cancelled before the trial ends.
          </p>

          <h2>9. Disclaimer of Warranties</h2>
          <p>
            THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS,
            IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
            PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED,
            ERROR-FREE, OR SECURE, OR THAT HABIT DATA, STREAKS, ACHIEVEMENT CALCULATIONS, OR STATISTICS
            WILL BE ACCURATE OR COMPLETE AT ALL TIMES.
          </p>

          <h2>10. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, APP AXIS LAB AND ITS AFFILIATES, OFFICERS,
            DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF HABIT DATA, STREAKS, ACHIEVEMENTS, OR
            PROGRESS, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP.
          </p>
          <p>
            OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE APP
            SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US FOR THE APP IN THE TWELVE (12)
            MONTHS BEFORE THE CLAIM, OR (B) FIFTY U.S. DOLLARS (USD $50), WHERE PERMITTED BY LAW.
          </p>

          <h2>11. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless App Axis Lab from any claims, damages, losses, liabilities,
            and expenses (including reasonable legal fees) arising from your use of the App, your User Content,
            or your violation of this Agreement or applicable law.
          </p>

          <h2>12. Termination</h2>
          <p>
            This license is effective until terminated. We may suspend or terminate your access to the App at
            any time if you breach this Agreement. Upon termination, you must cease all use of the App and
            delete all copies from your devices. Sections that by their nature should survive termination will survive.
          </p>

          <h2>13. Changes to This Agreement</h2>
          <p>
            We may update this EULA from time to time. Continued use of the App after changes become effective
            constitutes acceptance of the revised Agreement. The &quot;Last updated&quot; date at the top of this page
            will reflect material revisions.
          </p>

          <h2>14. Governing Law &amp; Disputes</h2>
          <p>
            This Agreement is governed by the laws of the jurisdiction in which App Axis Lab operates, without
            regard to conflict-of-law principles, except where mandatory consumer protection laws in your country
            provide otherwise. Any dispute shall be resolved in the courts of that jurisdiction, unless applicable
            law requires a different forum.
          </p>

          <h2>15. Children</h2>
          <p>
            The App is not intended for children under 13 years of age (or the applicable age of consent in your
            jurisdiction). We do not knowingly collect personal information from children as described in our Privacy Policy.
          </p>

          <h2>16. Apple App Store (iOS)</h2>
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

          <h2>17. Google Play (Android)</h2>
          <p>
            If you obtained the App through Google Play, you agree that Google LLC is not a party to this Agreement
            and has no responsibility or liability with respect to the App. Your use of Google Play is subject to
            Google Play&apos;s terms of service.
          </p>

          <h2>18. Severability &amp; Entire Agreement</h2>
          <p>
            If any provision of this Agreement is held invalid or unenforceable, the remaining provisions remain
            in full force. This Agreement, together with our Privacy Policy, constitutes the entire agreement between
            you and App Axis Lab regarding the App and supersedes prior understandings on the same subject.
          </p>

          <h2>19. Contact</h2>
          <p>
            For questions about this EULA, contact App Axis Lab at{' '}
            <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.
          </p>
        </div>
      </div>
    </PrivacyLayout>
  )
}
