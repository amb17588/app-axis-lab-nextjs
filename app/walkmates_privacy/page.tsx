import type { Metadata } from 'next'
import PrivacyLayout from '@/components/PrivacyLayout'
import s from '@/styles/privacy.module.css'

export const metadata: Metadata = {
  title: 'WalkMates — Privacy Policy & EULA | App Axis Lab',
}

export default function WalkmatesPrivacy() {
  return (
    <PrivacyLayout
      appName="WalkMates"
      subtitle="Step & Fitness Tracking — Privacy Policy & End User License Agreement"
      lastUpdated="Last updated: September 2, 2026"
    >
      <div className={s.card}>
        <div className={s.privacyContent}>
          <p>
            This page contains the <a href="#privacy">Privacy Policy</a> and{' '}
            <a href="#eula">End User License Agreement (EULA)</a> for WalkMates. By
            downloading, installing, or using the App, you agree to both documents.
          </p>

          <h1 id="privacy">Privacy Policy</h1>

          <h2>Scope</h2>
          <p>
            Welcome to WalkMates&apos; Privacy Policy. Your privacy is important to us. This
            Privacy Policy explains how WalkMates (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses,
            stores, and shares your information when you use our walking and fitness
            tracking mobile application and related services (the &quot;App&quot; or &quot;Services&quot;).
          </p>
          <p>If you do not agree with this Privacy Policy, please do not use our Services.</p>

          <h2>Overview</h2>
          <p>
            WalkMates helps you track your daily steps, distance, calories, and heart
            rate, build walking streaks, earn achievements, and compete with friends
            (&quot;buddies&quot;) in walking challenges. To provide these features across your
            devices, WalkMates uses an <strong>account and secure cloud sync</strong>.
          </p>
          <div className={s.highlightBox}>
            <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
              <li><strong>An account is required</strong> — you sign in by email (one-time passcode) or create a username/password, or you can try the App as a guest with limited, local-only features.</li>
              <li><strong>Your activity data is yours</strong> — the steps, distance, challenges, and achievements you generate belong to you, and you can view or delete them at any time.</li>
              <li><strong>We read health data from your device&apos;s health platform</strong> — Health Connect (Android) or Apple Health (iOS) — only to power the features you use.</li>
              <li><strong>We show ads and use analytics</strong> — these rely on device identifiers, never on the content of your health records.</li>
              <li><strong>We never sell your personal information</strong> and we never use your health data for advertising.</li>
            </ul>
          </div>

          <h2>1. Account &amp; Setup</h2>
          <p>To use WalkMates you create an account and configure the App during onboarding. Depending on how you sign up and what features you use, this may include:</p>
          <ul>
            <li>Signing in with your email address (a one-time passcode is emailed to you), or creating a username and password</li>
            <li>Using the App as a guest, without creating an account (your data stays on your device and is not synced)</li>
            <li>A display name/username and an optional short bio (&quot;slogan&quot;)</li>
            <li>Basic profile details you choose to add: sex, height, weight, and year of birth</li>
            <li>Your daily step goal and streak goal, chosen during onboarding</li>
            <li>Preferences such as language, units, theme, and notification settings</li>
          </ul>
          <p>These settings let us authenticate you, sync your data, personalize goals, and configure how the App works for you.</p>

          <h2>2. Information We Collect</h2>

          <p><strong>2.1 Account &amp; Profile Information</strong></p>
          <ul>
            <li>Email address, and a password if you use the username/password sign-in option (passwords are never stored or transmitted in plain text)</li>
            <li>Username, optional bio/&quot;slogan&quot;, and profile details you choose to add (sex, height, weight, year of birth)</li>
            <li>Daily step goal and streak goal</li>
          </ul>

          <p><strong>2.2 Health &amp; Activity Data</strong></p>
          <p>With your explicit permission, the App reads from your device&apos;s health platform and its own sensors:</p>
          <ul>
            <li>Daily step counts and distance walked</li>
            <li>Calories burned</li>
            <li>Heart rate — read from Health Connect (Android) or Apple Health (iOS), and optionally measured directly using your device&apos;s <strong>camera</strong> (a photoplethysmography/PPG-style reading taken by placing your finger over the camera lens; no photo or video is saved or transmitted)</li>
          </ul>
          <div className={s.healthBox}>
            This is <strong>your</strong> health data. We process it to provide the App&apos;s core features — showing your stats, tracking goals, and calculating streaks and challenge progress. We do not use health data for advertising, profiling, or sell it to third parties.
          </div>

          <p><strong>2.3 Location Data</strong></p>
          <p>
            The App may request access to your precise (GPS) or approximate location, and — where you separately grant it — background location, to support distance-based walk tracking while the App is in use. We do not use your location for advertising, and we do not track your location when you are not actively using a location-based feature.
          </p>

          <p><strong>2.4 Social &amp; Challenge Data</strong></p>
          <ul>
            <li>Buddy/friend connections and pending requests (found and added by username)</li>
            <li>Challenge participation, progress, and results</li>
            <li>Streak information (current and longest) and achievement/XP progress</li>
          </ul>
          <p>When you connect with a buddy or join a challenge, your username and relevant step/progress data become visible to the other participant(s). You control who you add as a buddy.</p>

          <p><strong>2.5 Usage &amp; Diagnostic Information</strong></p>
          <p>To keep the App reliable and improve it, we collect analytics and diagnostic data through Firebase Analytics, including which features and screens are used, general interaction patterns, app version and session information, and crash/diagnostic logs. This analytics data does <strong>not</strong> include the detailed contents of your health records.</p>

          <p><strong>2.6 Device Data</strong></p>
          <ul>
            <li>Device type, model, and operating system</li>
            <li>App version and language/region settings</li>
            <li>An advertising identifier (Google Advertising ID / IDFA) and anonymous installation identifiers</li>
            <li>Push notification permission status (used to send goal and streak reminders you enable)</li>
          </ul>

          <p><strong>2.7 Advertising Data</strong></p>
          <p>The App is supported by ads served through Google AdMob. Our advertising partners may collect and process data to serve and measure ads, such as your advertising identifier, IP address, device information, and ad interactions. On iOS, we ask for your permission (via Apple&apos;s App Tracking Transparency prompt) before using your device identifier for personalized ads. Purchasing the premium/ad-free option removes ads.</p>

          <p><strong>2.8 Billing Information</strong></p>
          <p>If you purchase a premium subscription, payment is processed by the App Store or Google Play Store, and subscription status is managed through our subscription provider (RevenueCat). We do not directly collect or store your full payment card details. We receive subscription status and anonymous purchase identifiers to unlock and manage premium features.</p>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information described above to:</p>
          <ul>
            <li>Create and secure your account and authenticate you when you sign in</li>
            <li>Provide core features, including step, distance, calorie, and heart-rate tracking, streaks, and achievements</li>
            <li>Enable social features — buddies, challenges, and leaderboards</li>
            <li>Send notifications and reminders you have enabled (for example, daily step-goal reminders)</li>
            <li>Display and measure advertising, and offer an ad-free premium option</li>
            <li>Understand aggregate feature usage and fix crashes to improve stability and performance</li>
            <li>Process and manage premium purchases through authorized payment providers</li>
            <li>Provide customer support when you contact us</li>
            <li>Detect, prevent, and address fraud, abuse, and security issues, and comply with legal obligations</li>
          </ul>
          <p>We do <strong>not</strong> use the content of your health data for advertising, profiling, or automated decision-making.</p>

          <h2>4. How We Share Your Information</h2>

          <p><strong>4.1 With Other Users (In-App)</strong></p>
          <p>Your username and step/challenge progress are visible to your buddies and to other participants in challenges you join. Leaderboards show usernames and step counts, never your email address or health identifiers. You control who you connect with.</p>

          <p><strong>4.2 With Service Providers</strong></p>
          <p>We use a limited number of trusted providers to operate the App — for cloud database and authentication (Supabase), analytics and crash reporting (Firebase), advertising (Google AdMob), and subscription management (RevenueCat). These providers process data only as needed to perform their services for us, under their own terms, and are not permitted to use your personal information for their own unrelated purposes.</p>

          <p><strong>4.3 Legal Requirements</strong></p>
          <p>We may disclose information if required by law, regulation, legal process, or governmental request, or when we believe disclosure is necessary to protect the rights, property, or safety of WalkMates, our users, or others.</p>

          <p><strong>4.4 Business Transfers</strong></p>
          <p>If WalkMates is involved in a merger, acquisition, reorganization, or sale of assets, data we hold may be transferred as part of that transaction. We will notify you of any material change in ownership or use of your personal information.</p>

          <p><strong>4.5 Non-Personal Data</strong></p>
          <p>We may share aggregated or anonymized data that cannot reasonably be used to identify you for analytics and product-improvement purposes.</p>

          <p>We do <strong>not</strong> sell the personal information you provide to us, and we never sell your health records.</p>

          <h2>5. Permissions</h2>
          <p>WalkMates may request the following device permissions:</p>
          <ul>
            <li><strong>Physical Activity / Motion:</strong> To count your steps in real time using your device&apos;s motion sensor.</li>
            <li><strong>Health Connect (Android) / Apple Health (iOS):</strong> Optional, to read your steps, distance, calories, and heart rate so the App can display and track them.</li>
            <li><strong>Camera:</strong> Optional, used only to take a finger-based heart-rate reading. No photo or video is captured or stored.</li>
            <li><strong>Location:</strong> Optional, to support distance-based walk tracking while the App is in use.</li>
            <li><strong>Notifications:</strong> Optional, to send reminders and alerts you enable. You can disable notifications in your device or app settings.</li>
            <li><strong>Background/Foreground Service (Android):</strong> Used to keep step tracking running reliably while the App is active, including after a device restart.</li>
            <li><strong>Storage (Android):</strong> Used only to cache app data on your device; we do not browse or collect your other files.</li>
            <li><strong>Internet &amp; Network state:</strong> Used to sync your data, sign you in, verify subscriptions, and show ads and analytics.</li>
          </ul>

          <h2>6. Data Security</h2>
          <p>We take security seriously:</p>
          <ul>
            <li>Data transmitted between the App and our servers is sent over encrypted connections (HTTPS/TLS).</li>
            <li>Passwords are never stored in plain text.</li>
            <li>We use reputable infrastructure and service providers with access controls to store and process data.</li>
            <li>We minimize the data we collect and transmit to what is needed to provide the Services.</li>
          </ul>
          <p>No system is completely secure, and we cannot guarantee absolute security. You are responsible for keeping your account credentials and device secure.</p>

          <h2>7. Cookies &amp; Tracking Technologies</h2>
          <p>The App uses advertising and analytics SDKs that may use device or installation identifiers (such as your advertising ID) to serve and measure ads and to understand aggregate usage and stability. You can limit ad personalization and reset your advertising ID through your device settings.</p>

          <h2>8. Subscriptions &amp; Payments</h2>
          <p>WalkMates may offer premium features or an ad-free subscription. When you purchase premium services:</p>
          <ul>
            <li>Payments are processed by the App Store or Google Play Store. We do not directly collect or store your full payment card details.</li>
            <li>We receive subscription status and related purchase metadata (via RevenueCat) to unlock premium features.</li>
            <li>Refunds and billing disputes are handled according to the applicable store&apos;s policies.</li>
            <li>You can manage or cancel subscriptions through your App Store or Google Play account settings.</li>
          </ul>

          <h2>9. Third-Party Services</h2>
          <p>WalkMates may use the following third-party services:</p>
          <ul>
            <li>Cloud database and authentication (Supabase)</li>
            <li>Advertising: Google AdMob</li>
            <li>Analytics and crash reporting (Firebase)</li>
            <li>Subscription management (RevenueCat)</li>
            <li>Payment processing operated by Apple and Google</li>
            <li>Health Connect (Google) and Apple Health, used only to read the data you authorize</li>
          </ul>
          <p>
            These services operate under their own privacy policies. We recommend reviewing them, including{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>,{' '}
            <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">Supabase&apos;s Privacy Policy</a>,{' '}
            <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Apple&apos;s Privacy Policy</a>, and{' '}
            <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">RevenueCat&apos;s Privacy Policy</a> where applicable.
          </p>

          <h2>10. Your Rights &amp; Controls</h2>

          <p><strong>10.1 Access &amp; Control</strong></p>
          <p>You can view your stats, edit your profile and preferences, and remove buddies or leave challenges directly within the App at any time.</p>

          <p><strong>10.2 Manage Ads</strong></p>
          <p>You can limit ad personalization and reset your advertising identifier in your device settings, and you can remove ads entirely by purchasing the premium/ad-free option.</p>

          <p><strong>10.3 Delete Your Account &amp; Data</strong></p>
          <p>
            You may request deletion of your account and associated data at any time by contacting us at{' '}
            <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>. When you delete your account, we remove or anonymize your personal data, except where we are required to retain it for legal, security, or legitimate business purposes.
          </p>

          <p><strong>10.4 Communication Preferences</strong></p>
          <p>You can control notifications through the App&apos;s settings or your device settings.</p>

          <p><strong>10.5 For EU/EEA &amp; UK Residents (GDPR)</strong></p>
          <p>If you are located in the European Union, European Economic Area, or United Kingdom, you have rights under the GDPR, including the right to access, rectify, erase, restrict processing, data portability, and to object to certain processing, including a right to object to ad personalization. You also have the right to lodge a complaint with a supervisory authority.</p>

          <p><strong>10.6 For California Residents (CCPA/CPRA)</strong></p>
          <p>If you are a California resident, you have rights under the CCPA and CPRA, including the right to know what personal information is collected, the right to request deletion, and the right to opt out of the &quot;sale&quot; or &quot;sharing&quot; of personal information (including for cross-context behavioral advertising). You can opt out of ad personalization through your device settings.</p>

          <p>
            To exercise your privacy rights or ask questions, contact us at{' '}
            <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>. We aim to respond within 30 days.
          </p>

          <h2>11. Data Retention</h2>
          <p>We retain your account and the data you generate for as long as your account is active or as needed to provide the Services. When you delete your account, we delete or anonymize the associated data, except where retention is required for legal, tax, security, or fraud-prevention purposes. Guest-mode data that was never synced to an account is stored only on your device and is removed when you uninstall the App. Analytics data is retained in aggregated or anonymized form. Advertising data is retained by ad partners under their own policies. Subscription metadata is retained as required for account management and legal compliance.</p>

          <h2>12. Children&apos;s Privacy</h2>
          <p>WalkMates is not intended for users under 13 years of age (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children. If we discover that we have collected personal information from a child without appropriate consent, we will take steps to delete it promptly.</p>
          <p>
            If you are a parent or guardian and believe your child has provided us with personal information, please contact us at{' '}
            <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.
          </p>

          <h2>13. International Transfers</h2>
          <p>Your information may be processed and stored in countries other than your own, including by our service providers. Where data is transferred internationally, appropriate safeguards such as standard contractual clauses or equivalent mechanisms are applied as required by applicable law.</p>

          <h2>14. Legal Basis for Processing</h2>
          <p>Where applicable law requires a legal basis for processing personal data, we rely on one or more of the following:</p>
          <ul>
            <li><strong>Consent:</strong> For personalized advertising, notifications, camera-based heart-rate measurement, location access, and other features where consent is required.</li>
            <li><strong>Contractual necessity:</strong> To create your account and provide the features and subscriptions you request.</li>
            <li><strong>Legal obligations:</strong> To comply with applicable laws and regulations.</li>
            <li><strong>Legitimate interests:</strong> To secure and improve the Services, show non-personalized ads, prevent abuse, and support our business operations, balanced against your rights and interests.</li>
          </ul>

          <h2>15. Health Data — Additional Commitments</h2>
          <div className={s.highlightBox}>
            Health data is among the most sensitive categories of personal information. Steps, distance, calories, and heart rate read from Health Connect or Apple Health are used solely to power the App&apos;s tracking, streak, and challenge features. This data is <strong>never used for advertising, sold to third parties, or shared with advertising or analytics partners in identifiable form</strong>, and camera-based heart-rate readings never leave your device as image or video data.
          </div>

          <h2>16. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Changes take effect upon posting, and we will update the &quot;Last updated&quot; date at the top of this page. For material changes that significantly affect your rights, we will provide notice through the App or other appropriate means. We encourage you to review this policy periodically.</p>

          <h2>17. Contact Us</h2>
          <p>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:support@appaxislab.com">support@appaxislab.com</a></li>
            <li><strong>App:</strong> WalkMates (com.appaxislab.walkmates)</li>
            <li><strong>Developer:</strong> App Axis Lab</li>
          </ul>

          <hr className={s.divider} />

          <h1 id="eula">End User License Agreement (EULA)</h1>
          <p>
            This End User License Agreement (&quot;Agreement&quot;) is a legal agreement between you
            (&quot;User&quot; or &quot;you&quot;) and App Axis Lab (&quot;Licensor&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) for the
            WalkMates mobile application (the &quot;App&quot;). By downloading, installing, or using
            the App, you agree to be bound by this Agreement. If you do not agree, do not
            download, install, or use the App.
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
            <li>Use the App for any unlawful purpose, including harassment, impersonation, or falsifying step, health, or challenge data to gain an unfair advantage over other users</li>
            <li>Interfere with or disrupt the App, its cloud, ad, or analytics services, or connected networks</li>
            <li>Attempt to gain unauthorized access to other users&apos; accounts or data</li>
            <li>Use automated systems, bots, or spoofed sensor data to inflate step counts or challenge results without our written consent</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>
            The App, including its design, trademarks, software, and content (excluding the data you enter), is owned by App Axis Lab or its licensors and is protected by copyright, trademark, and other intellectual property laws. This Agreement does not transfer any ownership rights to you. You retain full ownership of the profile information, notes, and content you create with the App.
          </p>

          <h2>4. Your Content &amp; Account</h2>
          <p>
            You retain ownership of all content you create with the App (&quot;User Content&quot;), including your profile details, goals, and any text you add. Your User Content is stored on your device and, unless you use guest mode, synced to your account. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You are solely responsible for your User Content and for ensuring you have the rights and consents needed to store and use it.
          </p>

          <h2>5. Responsible Use &amp; Health Disclaimer</h2>
          <div className={s.warnBox}>
            WalkMates is a fitness and activity tracking tool, not a medical device, and is not intended to diagnose, treat, cure, or prevent any disease or health condition. Step counts, distance, calories, and heart-rate readings (including camera-based measurements) are estimates for general wellness purposes only and may not be clinically accurate. Consult a qualified healthcare professional before beginning any exercise program, especially if you have a pre-existing health condition. You use the App&apos;s health and fitness features at your own risk.
          </div>

          <h2>6. Account Security</h2>
          <p>
            You are responsible for securing your account and device, including safeguarding your credentials. Notify us at{' '}
            <a href="mailto:support@appaxislab.com">support@appaxislab.com</a> promptly if you suspect unauthorized use of your account or any security concern with the App.
          </p>

          <h2>7. Permissions &amp; Device Access</h2>
          <p>
            The App may request access to motion/activity data, Health Connect or Apple Health, camera, location, and notifications to support features described in our{' '}
            <a href="#privacy">Privacy Policy</a>. You may deny certain permissions, but related features may not function.
          </p>

          <h2>8. Advertising &amp; Third-Party Services</h2>
          <p>
            The App may be supported by advertising and may integrate third-party services for cloud storage and authentication, analytics, crash reporting, advertising, and subscription management. These services are governed by their own terms and privacy policies. We are not responsible for third-party services, content, or practices. Purchasing the premium/ad-free option removes in-app ads.
          </p>

          <h2>9. Subscriptions &amp; In-App Purchases</h2>
          <p>
            WalkMates may offer premium features, subscriptions, or in-app purchases. Payment and billing are processed by the App Store, Google Play Store, or other authorized payment providers. Refunds and billing disputes are handled according to the applicable store&apos;s policies. We do not store your full payment card details.
          </p>
          <p>Free trials, if offered, convert to paid subscriptions unless cancelled before the trial ends, in accordance with the applicable store&apos;s rules.</p>

          <h2>10. Disclaimer of Warranties</h2>
          <p>THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE, OR THAT STEP, HEALTH, OR LOCATION DATA WILL BE MEASURED, SYNCED, OR RECOVERED WITHOUT ERROR ON EVERY DEVICE. THE APP DOES NOT PROVIDE MEDICAL, HEALTH, OR FITNESS ADVICE.</p>

          <h2>11. Limitation of Liability</h2>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, APP AXIS LAB AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP, INCLUDING ANY LOSS OR CORRUPTION OF DATA OR ANY DECISIONS YOU MAKE BASED ON INFORMATION IN THE APP.</p>
          <p>OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE APP SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US FOR THE APP IN THE TWELVE (12) MONTHS BEFORE THE CLAIM, OR (B) FIFTY U.S. DOLLARS (USD $50), WHERE PERMITTED BY LAW.</p>

          <h2>12. Indemnification</h2>
          <p>You agree to indemnify and hold harmless App Axis Lab from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from your use of the App, your User Content, or your violation of this Agreement or applicable law.</p>

          <h2>13. Termination</h2>
          <p>This license is effective until terminated. We may suspend or terminate your access to the App at any time if you breach this Agreement. Upon termination, you must cease all use of the App and delete all copies from your devices. You may terminate at any time by deleting your account and uninstalling the App. Sections that by their nature should survive termination will survive.</p>

          <h2>14. Changes to This Agreement</h2>
          <p>We may update this EULA from time to time. Continued use of the App after changes become effective constitutes acceptance of the revised Agreement. The &quot;Last updated&quot; date at the top of this page will reflect material revisions.</p>

          <h2>15. Governing Law &amp; Disputes</h2>
          <p>This Agreement is governed by the laws of the jurisdiction in which App Axis Lab operates, without regard to conflict-of-law principles, except where mandatory consumer protection laws in your country provide otherwise. Any dispute shall be resolved in the courts of that jurisdiction, unless applicable law requires a different forum.</p>

          <h2>16. Children</h2>
          <p>The App is not intended for children under 13 years of age (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children as described in our Privacy Policy.</p>

          <h2>17. App Stores (Apple &amp; Google)</h2>
          <p>
            If you obtained the App through the Apple App Store or Google Play, you agree that the applicable store operator is not a party to this Agreement and has no responsibility or liability with respect to the App. Your use of the store is subject to that store&apos;s terms of service. On iOS, this Agreement is between you and App Axis Lab only, and Apple is a third-party beneficiary entitled to enforce it.
          </p>

          <h2>18. Severability &amp; Entire Agreement</h2>
          <p>If any provision of this Agreement is held invalid or unenforceable, the remaining provisions remain in full force. This Agreement, together with our Privacy Policy, constitutes the entire agreement between you and App Axis Lab regarding the App and supersedes prior understandings on the same subject.</p>

          <h2>19. Contact</h2>
          <p>For questions about this EULA, contact App Axis Lab at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.</p>
        </div>
      </div>
    </PrivacyLayout>
  )
}
