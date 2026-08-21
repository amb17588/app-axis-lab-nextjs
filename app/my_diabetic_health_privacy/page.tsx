import type { Metadata } from 'next'
import PrivacyLayout from '@/components/PrivacyLayout'
import s from '@/styles/privacy.module.css'

export const metadata: Metadata = {
  title: 'My Diabetic Health — Privacy Policy & EULA | App Axis Lab',
}

export default function MyDiabeticHealthPrivacy() {
  return (
    <PrivacyLayout
      appName="My Diabetic Health"
      subtitle="Glucose & BP Tracker — Privacy Policy & End User License Agreement"
      lastUpdated="Last updated: August 21, 2026"
    >
      <div className={s.card}>
        <div className={s.privacyContent}>
          <p>
            This page contains the <a href="#privacy">Privacy Policy</a> and{' '}
            <a href="#eula">End User License Agreement (EULA)</a> for My Diabetic Health. By
            downloading, installing, or using the App, you agree to both documents.
          </p>

          <h1 id="privacy">Privacy Policy</h1>

          <h2>Scope</h2>
          <p>
            Welcome to My Diabetic Health&apos;s Privacy Policy. Your privacy is important to us.
            This Privacy Policy explains how My Diabetic Health (&quot;we&quot;, &quot;our&quot;, or
            &quot;us&quot;) collects, uses, stores, and shares your information when you use our
            diabetes and hypertension tracking mobile application and related services (the
            &quot;App&quot; or &quot;Services&quot;).
          </p>
          <p>If you do not agree with this Privacy Policy, please do not use our Services.</p>

          <h2>Overview</h2>
          <p>
            My Diabetic Health helps you track blood glucose readings, blood pressure,
            medications, meals, and insulin doses — and generate reports you can share with your
            doctor. This App is built with a <strong>privacy-first, local-only</strong> design:
            your health data never leaves your device unless you explicitly choose to export or
            share it.
          </p>
          <div className={s.highlightBox}>
            <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
              <li><strong>No account required</strong> — all your health data is stored locally on your device, encrypted with AES-256. Nothing is uploaded to our servers.</li>
              <li><strong>Your health data is yours</strong> — readings, logs, notes, and reports belong to you. View, edit, export, or delete them at any time.</li>
              <li><strong>Encryption is always on</strong> — your data is protected by a device-specific encryption key stored in iOS Keychain or Android Keystore, gated by biometrics. We never receive your encryption keys, fingerprint, face data, or PIN.</li>
              <li><strong>We show ads and use analytics</strong> — these rely on device identifiers only, never on the content of your health records.</li>
              <li><strong>We never sell your personal information</strong> and we never use your health records for advertising.</li>
            </ul>
          </div>

          <h2>1. How the App Works</h2>
          <p>My Diabetic Health is designed as a local-first health companion. When you set up the App:</p>
          <ul>
            <li>You create a profile on your device — no online account or sign-in is required</li>
            <li>Your health data is encrypted on-device using AES-256 with a device-specific key (DEK/KEK model) stored in iOS Keychain or Android Keystore</li>
            <li>The encryption key is gated by biometric authentication (Face ID, Touch ID, or fingerprint) or a PIN that you set</li>
            <li>Preferences such as glucose units (mg/dL or mmol/L), target ranges, language, and notification settings are stored locally</li>
          </ul>
          <p>Because there is no cloud sync, your data remains on your device at all times unless you actively export it (e.g., as a PDF doctor report or a backup file).</p>

          <h2>2. Information We Collect</h2>

          <p><strong>2.1 Health Data You Enter</strong></p>
          <p>When you use the App, you create health records that are stored and encrypted locally on your device, including:</p>
          <ul>
            <li>Blood glucose readings, timestamps, meal context (pre-meal, post-meal, fasting), and notes</li>
            <li>Blood pressure readings (systolic, diastolic, pulse) and associated notes</li>
            <li>Medication names, doses, schedules, and dose logs</li>
            <li>Meal logs including carbohydrate estimates, calorie information, and photos</li>
            <li>Insulin doses, insulin type, and injection logs</li>
            <li>Profile information such as diabetes type, target glucose range, target blood pressure range, and conditions you track</li>
          </ul>
          <div className={s.highlightBox}>
            This health data is stored <strong>only on your device</strong> in an AES-256 encrypted
            database. We do not receive, transmit, or have access to any of this information.
          </div>

          <p><strong>2.2 Images &amp; Attachments</strong></p>
          <p>You may capture meal photos using your camera or attach images from your photo library. These images are stored locally on your device within the encrypted database. They are not uploaded to our servers. If you choose to export a report, images you include in that export are shared only with the recipient you choose.</p>

          <p><strong>2.3 Usage &amp; Diagnostic Information</strong></p>
          <p>To keep the App reliable and improve it, we collect limited analytics and diagnostic data through third-party tools, including:</p>
          <ul>
            <li>Which features and screens are used and general interaction patterns</li>
            <li>App version, session information, and performance metrics</li>
            <li>Crash logs and diagnostic data</li>
          </ul>
          <p>This analytics data does <strong>not</strong> include any of your health records, readings, notes, or personal health information.</p>

          <p><strong>2.4 Device Data</strong></p>
          <ul>
            <li>Device type, model, and operating system</li>
            <li>App version and language/region settings</li>
            <li>An advertising identifier (Google Advertising ID / IDFA) and anonymous installation identifiers</li>
            <li>Push notification tokens (only if you enable reminders or alerts)</li>
          </ul>

          <p><strong>2.5 Advertising Data</strong></p>
          <p>The free version of the App may be supported by ads. Our advertising partners (Google AdMob and its mediation networks) may collect and process data to serve and measure ads, such as your advertising identifier, IP address, device information, and ad interactions. This data is used to show ads (which may be personalized) and to prevent fraud. Ad partners act as independent controllers of the data they collect under their own privacy policies. Purchasing the Pro subscription removes ads entirely.</p>

          <p><strong>2.6 Billing Information</strong></p>
          <p>If you purchase a Pro subscription, payment is processed by the App Store or Google Play Store, and subscription status is managed through our subscription provider (RevenueCat). We do not directly collect or store your full payment card details. We may receive subscription status, anonymous purchase identifiers, and billing-related metadata to unlock and manage Pro features.</p>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information described above to:</p>
          <ul>
            <li>Provide core features, including glucose tracking, blood pressure monitoring, medication management, meal logging, and insulin tracking</li>
            <li>Generate and display trends, charts, A1C estimates, and pattern insights within the App from locally stored data</li>
            <li>Send reminders and alerts you have enabled (for example, medication dose reminders, glucose check reminders)</li>
            <li>Display and measure advertising, and offer an ad-free Pro subscription option</li>
            <li>Understand aggregate feature usage and fix crashes to improve stability and performance</li>
            <li>Process and manage Pro subscriptions through authorized payment providers</li>
            <li>Provide customer support when you contact us</li>
            <li>Detect, prevent, and address fraud, abuse, and security issues, and comply with legal obligations</li>
          </ul>
          <p>We do <strong>not</strong> use the content of your health records for advertising, profiling, or automated decision-making. We do <strong>not</strong> receive or access your health records — they remain encrypted on your device.</p>

          <h2>4. How We Share Your Information</h2>

          <p><strong>4.1 Exports You Initiate</strong></p>
          <p>When you generate a Doctor Report PDF or export a backup file, that export is shared only through the method you choose (e.g., email, messaging app, AirDrop). We do not receive a copy of your exported data, and we have no visibility into what you share or with whom.</p>

          <p><strong>4.2 With Service Providers</strong></p>
          <p>We use a limited number of trusted providers to operate the App — for analytics and crash reporting, advertising, and subscription management. These providers process data only as needed to perform their services for us, under their own terms, and are not permitted to use your personal information for their own unrelated purposes. None of these providers receive your health records.</p>

          <p><strong>4.3 Legal Requirements</strong></p>
          <p>We may disclose information if required by law, regulation, legal process, or governmental request, or when we believe disclosure is necessary to protect the rights, property, or safety of My Diabetic Health, our users, or others. Because your health data is encrypted on your device and we do not hold the keys, we are technically unable to provide the contents of your health records even if compelled to do so.</p>

          <p><strong>4.4 Business Transfers</strong></p>
          <p>If My Diabetic Health is involved in a merger, acquisition, reorganization, or sale of assets, data we hold may be transferred as part of that transaction. We will notify you of any material change in ownership or use of your personal information.</p>

          <p><strong>4.5 Non-Personal Data</strong></p>
          <p>We may share aggregated or anonymized data that cannot reasonably be used to identify you for analytics and product-improvement purposes.</p>

          <p>We do <strong>not</strong> sell the personal information you provide to us, and we never have access to your health records.</p>

          <h2 id="permissions">5. Permissions</h2>
          <p>My Diabetic Health may request the following device permissions:</p>
          <ul>
            <li><strong>Biometrics (Fingerprint / Face ID):</strong> Required to unlock the App and decrypt your health data. Biometric data is handled entirely by your device&apos;s operating system and is never transmitted to or stored by us.</li>
            <li><strong>Camera:</strong> Optional, to capture meal photos you attach to meal log entries.</li>
            <li><strong>Photos / Media / Storage:</strong> Optional, to choose an existing image for a meal log, and to save exported PDF doctor reports to your device.</li>
            <li><strong>Notifications:</strong> Optional, to send medication reminders, glucose check reminders, and critical alerts you enable. You can disable notifications in your device or App settings.</li>
            <li><strong>Exact Alarms / Schedule Exact Alarm (Android):</strong> Used to deliver care routine reminders at precise times you configure.</li>
            <li><strong>Internet &amp; Network state:</strong> Used to verify subscriptions, show ads, and send analytics. Your health data is never transmitted over the network.</li>
          </ul>

          <h2>6. Data Security</h2>
          <p>We take security seriously — and the App&apos;s architecture is designed to make your health data inaccessible to anyone other than you:</p>
          <ul>
            <li>Your health data is encrypted at rest using AES-256 (SQLCipher) with a device-specific Data Encryption Key (DEK).</li>
            <li>The DEK is protected by a Key Encryption Key (KEK) stored in iOS Keychain or Android Keystore — hardware-backed secure storage.</li>
            <li>The KEK is gated by biometric authentication (Face ID, Touch ID, or fingerprint) or the PIN you set. Without biometric or PIN, the data cannot be decrypted.</li>
            <li>Your health data is never transmitted to our servers and we never hold your encryption keys.</li>
            <li>Data transmitted for analytics, ads, and subscription verification uses encrypted connections (HTTPS/TLS).</li>
          </ul>
          <p>If you lose access to your device or forget your PIN, your data may not be recoverable without a backup you have previously created. We recommend exporting regular backups through the Data Backup feature in the App.</p>

          <h2>7. Cookies &amp; Tracking Technologies</h2>
          <p>The App uses advertising and analytics SDKs that may use device or installation identifiers (such as your advertising ID) to serve and measure ads and to understand aggregate usage and stability. Related web pages (such as this one) may use basic cookies or local storage to remember preferences. You can limit ad personalization and reset your advertising ID through your device settings.</p>

          <h2>8. Subscriptions &amp; Payments</h2>
          <p>My Diabetic Health offers a free tier (with ads) and a Pro subscription (ad-free, with additional features). When you purchase a Pro subscription:</p>
          <ul>
            <li>Payments are processed by the App Store or Google Play Store. We do not directly collect or store your full payment card details.</li>
            <li>We receive subscription status and related purchase metadata (via RevenueCat) to unlock Pro features.</li>
            <li>Refunds and billing disputes are handled according to the applicable store&apos;s policies.</li>
            <li>You can manage or cancel subscriptions through your App Store or Google Play account settings.</li>
          </ul>

          <h2>9. Third-Party Services</h2>
          <p>My Diabetic Health may use the following third-party services:</p>
          <ul>
            <li>Advertising: Google AdMob and its mediation networks (free tier only)</li>
            <li>Analytics and crash reporting (such as Google/Firebase services)</li>
            <li>Subscription management (RevenueCat)</li>
            <li>Payment processing operated by Apple and Google</li>
          </ul>
          <p>
            These services operate under their own privacy policies. We recommend reviewing them,
            including{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Google&apos;s Privacy Policy
            </a>{' '}
            and{' '}
            <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">
              RevenueCat&apos;s Privacy Policy
            </a>{' '}
            where applicable.
          </p>

          <h2>10. Your Rights &amp; Controls</h2>

          <p><strong>10.1 Access &amp; Control</strong></p>
          <p>You can view, edit, and delete your health records directly within the App at any time. Because your data is stored locally on your device, you have full control over it without needing to contact us.</p>

          <p><strong>10.2 Manage Ads</strong></p>
          <p>You can limit ad personalization and reset your advertising identifier in your device settings, and you can remove ads entirely by purchasing the Pro subscription.</p>

          <p><strong>10.3 Delete Your Data</strong></p>
          <p>
            You can delete individual records within the App at any time. You can delete all your
            data by clearing the App&apos;s data through your device settings or by uninstalling
            the App. For any additional privacy concerns, contact us at{' '}
            <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.
          </p>

          <p><strong>10.4 Communication Preferences</strong></p>
          <p>You can control all reminders and notifications through the App&apos;s Care Routine settings or your device settings.</p>

          <p><strong>10.5 For EU/EEA &amp; UK Residents (GDPR)</strong></p>
          <p>If you are located in the European Union, European Economic Area, or United Kingdom, you have rights under the GDPR, including the right to access, rectify, erase, restrict processing, data portability, and to object to certain processing, including a right to object to ad personalization. You also have the right to lodge a complaint with a supervisory authority.</p>

          <p><strong>10.6 For California Residents (CCPA/CPRA)</strong></p>
          <p>If you are a California resident, you have rights under the CCPA and CPRA, including the right to know what personal information is collected, the right to request deletion, and the right to opt out of the &quot;sale&quot; or &quot;sharing&quot; of personal information (including for cross-context behavioral advertising). You can opt out of ad personalization through your device settings.</p>

          <p>
            To exercise your privacy rights or ask questions, contact us at{' '}
            <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>. We aim to respond
            within 30 days.
          </p>

          <h2>11. Data Retention</h2>
          <p>Your health data is retained on your device for as long as you choose to keep it. Deleting records or uninstalling the App removes your locally stored data. We do not hold copies of your health records. Limited analytics and diagnostic data is retained in aggregated or anonymized form. Advertising data is retained by ad partners under their own policies. Subscription metadata is retained as required for account management and legal compliance.</p>

          <h2>12. Children&apos;s Privacy</h2>
          <p>
            My Diabetic Health is not intended for users under 13 years of age (or the applicable
            age of consent in your jurisdiction). We do not knowingly collect personal information
            from children. If we discover that we have collected personal information from a
            child without appropriate consent, we will take steps to delete it promptly.
          </p>
          <p>
            If you are a parent or guardian and believe your child has provided us with personal
            information, please contact us at{' '}
            <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.
          </p>

          <h2>13. International Transfers</h2>
          <p>Your health data is stored exclusively on your device and is not transferred internationally by us. Analytics, advertising, and subscription data collected by third-party services may be processed in countries other than your own. Where data is transferred internationally, appropriate safeguards such as standard contractual clauses or equivalent mechanisms are applied as required by applicable law.</p>

          <h2>14. Legal Basis for Processing</h2>
          <p>Where applicable law requires a legal basis for processing personal data, we rely on one or more of the following:</p>
          <ul>
            <li><strong>Consent:</strong> For personalized advertising, notifications, camera access, and other features where consent is required.</li>
            <li><strong>Contractual necessity:</strong> To provide the App features and subscriptions you request.</li>
            <li><strong>Legal obligations:</strong> To comply with applicable laws and regulations.</li>
            <li><strong>Legitimate interests:</strong> To secure and improve the Services, show non-personalized ads, prevent abuse, and support our business operations, balanced against your rights and interests.</li>
          </ul>

          <h2>15. Medical Disclaimer</h2>
          <div className={[s.callout, s.calloutDanger].join(' ')}>
            <strong>My Diabetic Health is a personal health-tracking tool, not a medical device,
            and not a substitute for professional medical advice, diagnosis, or treatment.</strong>{' '}
            Always seek the guidance of your physician or other qualified health provider with any
            questions you may have regarding your condition or treatment. Do not make medical
            decisions based solely on information shown in the App. If you are experiencing a
            hypertensive crisis, severe hypoglycemia, or any other medical emergency, call
            emergency services immediately.
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
          <p>
            This End User License Agreement (&quot;Agreement&quot;) is a legal agreement between you
            (&quot;User&quot; or &quot;you&quot;) and App Axis Lab (&quot;Licensor&quot;, &quot;we&quot;, &quot;our&quot;, or
            &quot;us&quot;) for the My Diabetic Health mobile application (the &quot;App&quot;). By
            downloading, installing, or using the App, you agree to be bound by this Agreement. If
            you do not agree, do not download, install, or use the App.
          </p>

          <h2>1. License Grant</h2>
          <p>Subject to your compliance with this Agreement, we grant you a limited, non-exclusive, non-transferable, revocable license to install and use the App on devices you own or control, for your personal, non-commercial use, in accordance with this Agreement and applicable app store terms.</p>

          <h2>2. Restrictions</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Copy, modify, adapt, or create derivative works of the App</li>
            <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the App, except where expressly permitted by law</li>
            <li>Rent, lease, lend, sell, sublicense, or distribute the App or any part of it</li>
            <li>Remove, alter, or obscure any proprietary notices or labels on the App</li>
            <li>Use the App for any unlawful purpose, or attempt to circumvent the App&apos;s encryption or security mechanisms</li>
            <li>Interfere with or disrupt the App, its ad or analytics services, or connected networks</li>
            <li>Use automated systems or bots to access or use the App without our written consent</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>The App, including its design, trademarks, software, and content (excluding the data you enter), is owned by App Axis Lab or its licensors and is protected by copyright, trademark, and other intellectual property laws. This Agreement does not transfer any ownership rights to you. You retain full ownership of the health records, notes, and content you create with the App.</p>

          <h2>4. Your Content &amp; Data</h2>
          <p>You retain full ownership of all health data you enter into the App (&quot;User Content&quot;), including glucose readings, blood pressure logs, medication records, meal logs, insulin doses, and notes. Your User Content is encrypted and stored locally on your device. You are responsible for maintaining the security of your device, biometric credentials, and PIN. You are solely responsible for the accuracy of the information you enter and for any decisions you make based on it.</p>

          <h2>5. Medical Disclaimer &amp; Responsible Use</h2>
          <p>
            My Diabetic Health is a personal health-tracking tool and is <strong>not a medical
            device</strong>. It does not provide medical advice, diagnosis, or treatment. You must
            always consult a qualified healthcare professional before making any medical
            decisions. Do not use the App as a substitute for professional medical judgment. In a
            medical emergency, contact emergency services immediately.
          </p>
          <p>You must use the App lawfully and must not use it to infringe the rights or privacy of others. You are responsible for the accuracy of the information you enter and for how you use it.</p>

          <h2>6. Device Security</h2>
          <p>
            You are responsible for securing your device and safeguarding your biometric
            credentials and PIN. If your device is lost, stolen, or compromised, your encrypted
            health data may be at risk if your device lock is bypassed. Notify us at{' '}
            <a href="mailto:support@appaxislab.com">support@appaxislab.com</a> promptly if you
            become aware of any security concern related to the App.
          </p>

          <h2>7. Permissions &amp; Device Access</h2>
          <p>
            The App may request access to biometrics, camera, photos/media/storage, and
            notifications to support features described in our{' '}
            <a href="#privacy">Privacy Policy</a>. You may deny certain permissions, but related
            features may not function. Biometric or PIN authentication is required to access your
            encrypted health data.
          </p>

          <h2>8. Advertising &amp; Third-Party Services</h2>
          <p>The free version of the App may be supported by advertising and may integrate third-party services for analytics, crash reporting, advertising, and subscription management. These services are governed by their own terms and privacy policies. We are not responsible for third-party services, content, or practices. Purchasing the Pro subscription removes in-app ads.</p>

          <h2>9. Subscriptions &amp; In-App Purchases</h2>
          <p>My Diabetic Health may offer a Pro subscription with additional features and an ad-free experience. Payment and billing are processed by the App Store, Google Play Store, or other authorized payment providers. Refunds and billing disputes are handled according to the applicable store&apos;s policies. We do not store your full payment card details.</p>
          <p>Free trials, if offered, convert to paid subscriptions unless cancelled before the trial ends, in accordance with the applicable store&apos;s rules.</p>

          <h2>10. Disclaimer of Warranties</h2>
          <p>THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE, OR THAT YOUR DATA WILL BE STORED OR RECOVERED WITHOUT ERROR ON EVERY DEVICE. THE APP DOES NOT PROVIDE MEDICAL ADVICE, DIAGNOSIS, OR TREATMENT, AND IS NOT A REGULATED MEDICAL DEVICE.</p>

          <h2>11. Limitation of Liability</h2>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, APP AXIS LAB AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP, INCLUDING ANY LOSS OR CORRUPTION OF HEALTH DATA OR ANY MEDICAL OR OTHER DECISIONS YOU MAKE BASED ON INFORMATION IN THE APP.</p>
          <p>OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE APP SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US FOR THE APP IN THE TWELVE (12) MONTHS BEFORE THE CLAIM, OR (B) FIFTY U.S. DOLLARS (USD $50), WHERE PERMITTED BY LAW.</p>

          <h2>12. Indemnification</h2>
          <p>You agree to indemnify and hold harmless App Axis Lab from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from your use of the App, your User Content, or your violation of this Agreement or applicable law.</p>

          <h2>13. Termination</h2>
          <p>This license is effective until terminated. We may suspend or terminate your access to the App at any time if you breach this Agreement. Upon termination, you must cease all use of the App and delete all copies from your devices. You may terminate at any time by uninstalling the App. Your locally stored health data remains on your device until you delete it. Sections that by their nature should survive termination will survive.</p>

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
