import type { Metadata } from 'next'
import PrivacyLayout from '@/components/PrivacyLayout'
import s from '@/styles/privacy.module.css'

export const metadata: Metadata = {
  title: 'Studio Recorder — Privacy Policy & EULA | App Axis Lab',
}

export default function StudioRecorderPrivacy() {
  return (
    <PrivacyLayout
      appName="Studio Recorder"
      subtitle="Privacy Policy & End User License Agreement (EULA)"
      lastUpdated="Last updated: July 20, 2026"
    >
      <div className={s.card}>
        <div className={s.privacyContent}>
          <p>This page contains the <a href="#privacy">Privacy Policy</a> and <a href="#eula">End User License Agreement (EULA)</a> for Studio Recorder. By downloading, installing, or using the App, you agree to both documents.</p>

          <h1 id="privacy">Privacy Policy</h1>

          <h2>Scope</h2>
          <p>Welcome to Studio Recorder&apos;s Privacy Policy. Your privacy is important to us. This Privacy Policy explains how Studio Recorder (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) handles your information when you use our screen recording mobile application and related services (the &quot;App&quot; or &quot;Services&quot;) available on the Google Play Store.</p>
          <p>If you do not agree with this Privacy Policy, please do not use our Services.</p>

          <h2>Overview — Privacy by Design</h2>
          <p>Studio Recorder is built to be <strong>on-device and privacy-focused</strong>. The recordings and screenshots you capture stay on your device by default.</p>
          <div className={s.highlightBox}>
            <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
              <li><strong>Your recordings live on your device</strong> — screen recordings, audio, and screenshots are saved to your device&apos;s storage/gallery.</li>
              <li><strong>No account is required</strong> — you can use the App without creating an account or giving us your email or name.</li>
              <li><strong>We do not have a server that stores your recordings</strong> — we cannot see or access the videos, audio, or screenshots you create.</li>
              <li><strong>We show ads and use analytics</strong> — these rely on device identifiers, never on the content of your recordings.</li>
              <li><strong>We never sell your recordings</strong> and we never use your recorded content for advertising.</li>
            </ul>
          </div>

          <h2>1. Account &amp; Local Setup</h2>
          <p>Studio Recorder does not require you to register an account to use its features. When you use the App, you may configure options that are stored locally on your device, such as:</p>
          <ul>
            <li>Recording settings (resolution, frame rate, bitrate, orientation, audio source)</li>
            <li>A custom text or image watermark</li>
            <li>Face-cam and floating-control preferences</li>
          </ul>
          <p>This information is stored locally on your device and is used to configure how the App records. It is not transmitted to us.</p>

          <h2>2. Information We Collect</h2>

          <p><strong>2.1 Recordings &amp; Content You Create (Stored On Your Device)</strong></p>
          <p>When you use the App, you create content that is stored locally on your device:</p>
          <ul>
            <li>Screen recording videos, including whatever is visible on your screen while recording</li>
            <li>Audio captured from your microphone and/or internal (device) audio, if you enable it</li>
            <li>Screenshots taken during a recording</li>
            <li>Face-cam (front camera) footage, if you enable the face cam</li>
            <li>Watermark text or images you add</li>
          </ul>
          <div className={s.highlightBox}>
            <p style={{ margin: 0 }}>This content is captured and saved <strong>on your device</strong> (for example, to your gallery or app storage). It is not sent to us and does not leave your device unless you choose to share or export it yourself. Because a screen recording captures whatever is on your screen, you are responsible for what you choose to record.</p>
          </div>

          <p><strong>2.2 Usage &amp; Diagnostic Information</strong></p>
          <p>To keep the App reliable and improve it, we collect limited analytics and diagnostic data through third-party tools (such as Firebase Analytics and Crashlytics), including:</p>
          <ul>
            <li>Which features and screens are used and general interaction patterns</li>
            <li>App version, session information, and performance metrics</li>
            <li>Crash logs and diagnostic data</li>
          </ul>
          <p>This analytics data does <strong>not</strong> include the contents of your recordings, audio, or screenshots.</p>

          <p><strong>2.3 Device Data</strong></p>
          <ul>
            <li>Device type, model, and operating system</li>
            <li>App version and language settings</li>
            <li>An advertising identifier (Google Advertising ID) and anonymous installation identifiers</li>
            <li>Push notification tokens (only if you enable notifications)</li>
          </ul>

          <p><strong>2.4 Advertising Data</strong></p>
          <p>The App is supported by ads. Our advertising partners (Google AdMob and its mediation networks) may collect and process data to serve and measure ads, such as your advertising identifier, IP address, device information, and ad interactions. This data is used to show ads (which may be personalized) and to prevent fraud. Ad partners act as independent controllers of the data they collect under their own privacy policies. Purchasing the premium/ad-free option removes ads.</p>

          <p><strong>2.5 Billing Information</strong></p>
          <p>If you purchase a premium subscription or one-time purchase, payment is processed by the Google Play Store, and subscription status is managed through our subscription provider (RevenueCat). We do not directly collect or store your full payment card details. We may receive subscription status, anonymous purchase identifiers, and billing-related metadata to unlock and manage premium features.</p>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information described above to:</p>
          <ul>
            <li>Provide core features on your device, including screen recording, audio capture, screenshots, watermarks, face cam, and the floating control button</li>
            <li>Save your recordings and screenshots to your device and let you manage them in the in-app library</li>
            <li>Send notifications you have enabled, including the ongoing recording-control notification</li>
            <li>Display and measure advertising, and offer an ad-free premium option</li>
            <li>Understand aggregate feature usage and fix crashes to improve stability and performance</li>
            <li>Process and manage premium purchases through authorized payment providers</li>
            <li>Provide customer support when you contact us</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>We do <strong>not</strong> use the content of your recordings for advertising, profiling, or automated decision-making.</p>

          <h2>4. How We Share Your Information</h2>

          <p><strong>4.1 Your Recordings Stay With You</strong></p>
          <p>Your recordings, audio, screenshots, and watermarks are stored on your device. We do not upload, share, or have access to them, and there is no social or sharing feature that publishes your content to other users on our behalf. You control any sharing you do yourself through your device.</p>

          <p><strong>4.2 With Service Providers</strong></p>
          <p>We use a limited number of trusted providers for advertising, analytics and crash reporting, and subscription management. These providers process only the limited data described in this policy, under their own terms, and only as needed to perform their services. They do not receive the contents of your recordings.</p>

          <p><strong>4.3 Legal Requirements</strong></p>
          <p>We may disclose information if required by law, regulation, legal process, or governmental request, or when we believe disclosure is necessary to protect the rights, property, or safety of Studio Recorder, our users, or others. Because your recordings are stored on your device, we generally have no such content to disclose.</p>

          <p><strong>4.4 Business Transfers</strong></p>
          <p>If Studio Recorder is involved in a merger, acquisition, reorganization, or sale of assets, limited data we hold may be transferred as part of that transaction. We will notify you of any material change in ownership or use of your personal information.</p>

          <p><strong>4.5 Non-Personal Data</strong></p>
          <p>We may share aggregated or anonymized data that cannot reasonably be used to identify you for analytics and product-improvement purposes.</p>

          <p>We do <strong>not</strong> sell the personal information you provide to us, and we never sell your recorded content.</p>

          <h2>5. Permissions</h2>
          <p>Studio Recorder may request the following device permissions:</p>
          <ul>
            <li><strong>Screen capture (Media Projection):</strong> To record your screen. Android shows a system consent dialog before recording begins and a recording indicator while it is active.</li>
            <li><strong>Microphone:</strong> Optional, to record your voice or device audio as part of a recording.</li>
            <li><strong>Camera:</strong> Optional, for the front-camera &quot;face cam&quot; overlay during a recording.</li>
            <li><strong>Photos / Media / Storage:</strong> To save recordings and screenshots to your gallery and to let you choose an image for your watermark.</li>
            <li><strong>Display over other apps:</strong> For the floating control button, watermark, and face-cam bubble shown on top of the screen while recording.</li>
            <li><strong>Notifications:</strong> To show recording controls and any reminders you enable. You can disable notifications in your device or app settings.</li>
            <li><strong>Internet &amp; Network state:</strong> Used for ads, analytics, subscription verification, and app updates. Recording itself works offline.</li>
            <li><strong>Vibration:</strong> For start/stop haptic feedback.</li>
          </ul>

          <h2>6. Data Security</h2>
          <p>We take security seriously:</p>
          <ul>
            <li>Your recordings and screenshots are stored on your device under the protections your operating system provides.</li>
            <li>We minimize the data we collect and transmit, and we use reputable third-party providers for ads, analytics, and billing.</li>
            <li>Data transmitted for analytics, ads, and subscriptions is sent over encrypted connections.</li>
          </ul>
          <p>No system is completely secure, and we cannot guarantee absolute security. You are responsible for keeping your device and your recordings secure, including any content you choose to share or export.</p>

          <h2>7. Cookies &amp; Tracking Technologies</h2>
          <p>The App uses advertising and analytics SDKs that may use device or installation identifiers (such as your advertising ID) to serve and measure ads and to understand aggregate usage and stability. Related web pages (such as this one) may use basic cookies or local storage to remember preferences. You can limit ad personalization and reset your advertising ID through your device settings.</p>

          <h2>8. Subscriptions &amp; Payments</h2>
          <p>Studio Recorder may offer premium features, an ad-free option, or subscriptions. When you purchase premium services:</p>
          <ul>
            <li>Payments are processed by the Google Play Store. We do not directly collect or store your full payment card details.</li>
            <li>We receive subscription status and related purchase metadata (via RevenueCat) to unlock premium features.</li>
            <li>Refunds and billing disputes are handled according to Google Play&apos;s policies.</li>
            <li>You can manage or cancel subscriptions through your Google Play account settings.</li>
          </ul>

          <h2>9. Third-Party Services</h2>
          <p>Studio Recorder may use the following third-party services:</p>
          <ul>
            <li>Advertising: Google AdMob and its mediation networks, which may include Unity Ads, AppLovin, Meta Audience Network, Pangle, Liftoff (Vungle), Mintegral, and Yandex</li>
            <li>Analytics and crash reporting (e.g., Firebase Analytics, Firebase Crashlytics)</li>
            <li>Subscription management (RevenueCat)</li>
            <li>Payment processing operated by Google</li>
          </ul>
          <p>
            These services operate under their own privacy policies. We recommend reviewing them, including{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>,{' '}
            <a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener noreferrer">how Google uses advertising data</a>,{' '}
            and <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">RevenueCat&apos;s Privacy Policy</a>{' '}
            where applicable.
          </p>

          <h2>10. Your Rights &amp; Controls</h2>

          <p><strong>10.1 Access &amp; Control</strong></p>
          <p>Because your recordings are stored on your device, you have direct control over them at all times. You can view, rename, or delete any recording within the App or from your device&apos;s gallery.</p>

          <p><strong>10.2 Manage Ads</strong></p>
          <p>You can limit ad personalization and reset your advertising identifier in your device settings, and you can remove ads entirely by purchasing the premium/ad-free option.</p>

          <p><strong>10.3 Delete Your Data</strong></p>
          <p>You can delete individual recordings and screenshots, or remove all app data by clearing the App&apos;s data or uninstalling the App from your device.</p>

          <p><strong>10.4 Communication Preferences</strong></p>
          <p>You can control notifications through the App&apos;s settings or your device settings.</p>

          <p><strong>10.5 For EU/EEA &amp; UK Residents (GDPR)</strong></p>
          <p>If you are located in the European Union, European Economic Area, or United Kingdom, you have rights under the GDPR, including the right to access, rectify, erase, restrict processing, data portability, and to object to certain processing, including a right to object to ad personalization. You also have the right to lodge a complaint with a supervisory authority.</p>

          <p><strong>10.6 For California Residents (CCPA/CPRA)</strong></p>
          <p>If you are a California resident, you have rights under the CCPA and CPRA, including the right to know what personal information is collected, the right to request deletion, and the right to opt out of the &quot;sale&quot; or &quot;sharing&quot; of personal information (including for cross-context behavioral advertising). You can opt out of ad personalization through your device settings.</p>

          <p>To exercise your privacy rights or ask questions, contact us at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>. We aim to respond within 30 days.</p>

          <h2>11. Data Retention</h2>
          <p>Because your recordings are stored on your device, they are retained until you delete them or uninstall the App. Limited analytics and diagnostic data is retained for as long as necessary to improve the Services and is aggregated or anonymized. Advertising data is retained by ad partners under their own policies. Subscription metadata is retained as required for account management and legal compliance.</p>

          <h2>12. Children&apos;s Privacy</h2>
          <p>Studio Recorder is not intended for users under 13 years of age (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children. If we discover that we have collected personal information from a child without appropriate consent, we will take steps to delete it promptly.</p>
          <p>If you are a parent or guardian and believe your child has provided us with personal information, please contact us at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.</p>

          <h2>13. International Transfers</h2>
          <p>Your recordings remain on your device. Any limited data processed by our service providers (such as ads, analytics, or subscriptions) may be processed in countries other than your own. Where data is transferred internationally, appropriate safeguards such as standard contractual clauses or equivalent mechanisms are applied as required by applicable law.</p>

          <h2>14. Legal Basis for Processing</h2>
          <p>Where applicable law requires a legal basis for processing personal data, we rely on one or more of the following:</p>
          <ul>
            <li><strong>Consent:</strong> For personalized advertising and notifications where consent is required.</li>
            <li><strong>Contractual necessity:</strong> To provide the features and subscriptions you request.</li>
            <li><strong>Legal obligations:</strong> To comply with applicable laws and regulations.</li>
            <li><strong>Legitimate interests:</strong> To improve stability, show non-personalized ads, prevent abuse, and support our business operations, balanced against your rights and interests.</li>
          </ul>

          <h2>15. Responsible Use &amp; Content Disclaimer</h2>
          <div className={s.highlightBox}>
            <p style={{ margin: 0 }}>Studio Recorder records whatever appears on your screen and, if enabled, audio and the front camera. <strong>You are solely responsible for what you record.</strong> Only record content you have the right to record, and do not record other people, private information, or copyrighted material without appropriate consent or authorization. Recording certain content may be restricted by law in your jurisdiction. The App must not be used for unlawful surveillance or to infringe anyone&apos;s rights.</p>
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
          <p>This End User License Agreement (&quot;Agreement&quot;) is a legal agreement between you (&quot;User&quot; or &quot;you&quot;) and App Axis Lab (&quot;Licensor&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) for the Studio Recorder mobile application (the &quot;App&quot;). By downloading, installing, or using the App, you agree to be bound by this Agreement. If you do not agree, do not download, install, or use the App.</p>

          <h2>1. License Grant</h2>
          <p>Subject to your compliance with this Agreement, we grant you a limited, non-exclusive, non-transferable, revocable license to install and use the App on devices you own or control, for your personal use, in accordance with this Agreement and applicable app store terms.</p>

          <h2>2. Restrictions</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Copy, modify, adapt, or create derivative works of the App</li>
            <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the App, except where expressly permitted by law</li>
            <li>Rent, lease, lend, sell, sublicense, or distribute the App or any part of it</li>
            <li>Remove, alter, or obscure any proprietary notices or labels on the App</li>
            <li>Use the App for any unlawful purpose, including recording others or content without required consent or authorization</li>
            <li>Interfere with or disrupt the App, its ad or analytics services, or connected networks</li>
            <li>Use automated systems or bots to access or use the App without our written consent</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>The App, including its design, trademarks, software, and content (excluding your recordings), is owned by App Axis Lab or its licensors and is protected by copyright, trademark, and other intellectual property laws. This Agreement does not transfer any ownership rights to you. You retain full ownership of the recordings, screenshots, and content you create with the App.</p>

          <h2>4. Your Content</h2>
          <p>You retain ownership of all content you create with the App (&quot;User Content&quot;), including screen recordings, audio, screenshots, and watermarks. Your User Content is stored on your device. You are solely responsible for your User Content and for ensuring you have the rights and consents needed to record and use it.</p>

          <h2>5. Responsible Recording</h2>
          <p>The App records your screen and, if enabled, audio and the front camera. You must only record content you are legally permitted to record and must comply with all applicable laws, including those relating to privacy, consent, wiretapping, and intellectual property. You must not use the App for unlawful surveillance, harassment, or to infringe the rights of others. We are not responsible for how you use the App or for the content you record.</p>

          <h2>6. Device Security</h2>
          <p>You are responsible for securing your device and for all activity that occurs within the App on your device, including safeguarding the recordings you create. Notify us at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a> if you have concerns about the security of the App.</p>

          <h2>7. Permissions &amp; Device Access</h2>
          <p>The App may request access to screen capture, microphone, camera, storage/media, display-over-other-apps, and notifications to support features described in our <a href="#privacy">Privacy Policy</a>. You may deny certain permissions, but related features may not function.</p>

          <h2>8. Advertising &amp; Third-Party Services</h2>
          <p>The App is supported by advertising and may integrate third-party services for ads, analytics, crash reporting, and subscription management. These services are governed by their own terms and privacy policies. We are not responsible for third-party services, content, or practices. Purchasing the premium/ad-free option removes in-app ads.</p>

          <h2>9. Subscriptions &amp; In-App Purchases</h2>
          <p>Studio Recorder may offer premium features, subscriptions, or in-app purchases. Payment and billing are processed by the Google Play Store or other authorized payment providers. Refunds and billing disputes are handled according to the applicable store&apos;s policies. We do not store your full payment card details.</p>
          <p>Free trials, if offered, convert to paid subscriptions unless cancelled before the trial ends, in accordance with the applicable store&apos;s rules.</p>

          <h2>10. Disclaimer of Warranties</h2>
          <p>THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE, OR THAT RECORDINGS WILL BE CAPTURED, SAVED, OR PLAYED BACK WITHOUT ERROR ON EVERY DEVICE.</p>

          <h2>11. Limitation of Liability</h2>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, APP AXIS LAB AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP, INCLUDING ANY LOSS OR CORRUPTION OF RECORDINGS OR ANY CONSEQUENCES OF CONTENT YOU RECORD.</p>
          <p>OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE APP SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US FOR THE APP IN THE TWELVE (12) MONTHS BEFORE THE CLAIM, OR (B) FIFTY U.S. DOLLARS (USD $50), WHERE PERMITTED BY LAW.</p>

          <h2>12. Indemnification</h2>
          <p>You agree to indemnify and hold harmless App Axis Lab from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from your use of the App, your User Content, the content you record, or your violation of this Agreement or applicable law.</p>

          <h2>13. Termination</h2>
          <p>This license is effective until terminated. We may suspend or terminate your access to the App at any time if you breach this Agreement. Upon termination, you must cease all use of the App and delete all copies from your devices. Sections that by their nature should survive termination will survive.</p>

          <h2>14. Changes to This Agreement</h2>
          <p>We may update this EULA from time to time. Continued use of the App after changes become effective constitutes acceptance of the revised Agreement. The &quot;Last updated&quot; date at the top of this page will reflect material revisions.</p>

          <h2>15. Governing Law &amp; Disputes</h2>
          <p>This Agreement is governed by the laws of the jurisdiction in which App Axis Lab operates, without regard to conflict-of-law principles, except where mandatory consumer protection laws in your country provide otherwise. Any dispute shall be resolved in the courts of that jurisdiction, unless applicable law requires a different forum.</p>

          <h2>16. Children</h2>
          <p>The App is not intended for children under 13 years of age (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children as described in our Privacy Policy.</p>

          <h2>17. Google Play (Android)</h2>
          <p>If you obtained the App through Google Play, you agree that Google LLC is not a party to this Agreement and has no responsibility or liability with respect to the App. Your use of Google Play is subject to Google Play&apos;s terms of service.</p>

          <h2>18. Severability &amp; Entire Agreement</h2>
          <p>If any provision of this Agreement is held invalid or unenforceable, the remaining provisions remain in full force. This Agreement, together with our Privacy Policy, constitutes the entire agreement between you and App Axis Lab regarding the App and supersedes prior understandings on the same subject.</p>

          <h2>19. Contact</h2>
          <p>For questions about this EULA, contact App Axis Lab at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.</p>
        </div>
      </div>
    </PrivacyLayout>
  )
}
