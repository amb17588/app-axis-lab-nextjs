import type { Metadata } from 'next'
import PrivacyLayout from '@/components/PrivacyLayout'
import s from '@/styles/privacy.module.css'

export const metadata: Metadata = {
  title: 'Privacy Shield — Privacy Policy & EULA | App Axis Lab',
}

export default function PrivacyShieldPrivacyPolicy() {
  return (
    <PrivacyLayout
      appName="Privacy Shield"
      subtitle="Visual Privacy Overlay — Privacy Policy & End User License Agreement"
      lastUpdated="Last updated: August 7, 2026"
    >
      <div className={s.card}>
        <div className={s.privacyContent}>
          <p>This page contains the <a href="#privacy">Privacy Policy</a> and <a href="#eula">End User License Agreement (EULA)</a> for Privacy Shield. By downloading, installing, or using the App, you agree to both documents.</p>

          <h1 id="privacy">Privacy Policy</h1>

          <h2>Scope</h2>
          <p>Welcome to Privacy Shield&apos;s Privacy Policy. Your privacy is important to us. This Privacy Policy explains how App Axis Lab (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses, stores, and shares your information when you use our visual privacy overlay mobile application (the &quot;App&quot; or &quot;Services&quot;).</p>
          <p>If you do not agree with this Privacy Policy, please do not use our Services.</p>

          <h2>Overview</h2>
          <p>Privacy Shield draws a dark directional gradient overlay over all on-screen content, making your display difficult to read from side angles while remaining clear to you face-on. The overlay is controlled by a floating bubble and an optional schedule. No account is required and no personal data is transmitted — all processing happens entirely on your device.</p>
          <div className={s.highlightBox}>
            <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
              <li><strong>No account is required</strong> — Privacy Shield works without sign-in, email, or any user profile.</li>
              <li><strong>All data stays on your device</strong> — your overlay settings and schedule are stored locally and never transmitted to any server.</li>
              <li><strong>Sensor data is never saved</strong> — gyroscope and accelerometer readings are processed in memory in real time and are never stored or sent anywhere.</li>
              <li><strong>We do not serve ads</strong> — Privacy Shield contains no advertising SDKs or ad tracking.</li>
              <li><strong>We never sell your personal information.</strong></li>
            </ul>
          </div>

          <h2>1. What Privacy Shield Does</h2>
          <p>Privacy Shield is a system-wide visual privacy overlay for Android. When activated, it draws a dark directional gradient over all on-screen content using Android&apos;s standard overlay system. The direction and intensity of the gradient respond to your device&apos;s gyroscope, keeping your screen readable face-on while making it difficult to read from side angles.</p>
          <p>The App is <strong>not</strong> a screen lock, screenshot blocker, or parental-control tool. It is a visual privacy layer only.</p>

          <h2>2. Information We Collect</h2>

          <div className={s.highlightBox}>
            <p><strong>Privacy Shield does not collect, transmit, or store any personal data on external servers.</strong> The only data the App creates stays on your device.</p>
          </div>

          <p><strong>2.1 Overlay Settings</strong></p>
          <p>Your chosen overlay color, opacity, and blur preferences are stored locally on your device. They are never transmitted anywhere.</p>

          <p><strong>2.2 Schedule Settings</strong></p>
          <p>Any time windows you configure for automatic overlay activation are stored locally on your device. They are never transmitted anywhere.</p>

          <p><strong>2.3 Sensor Data (Gyroscope &amp; Accelerometer)</strong></p>
          <p>The App reads your device&apos;s motion sensors in real time to power the directional gradient feature:</p>
          <ul>
            <li><strong>Gyroscope</strong> — detects the tilt direction and angle of your device so the gradient darkens the correct edge of the screen.</li>
            <li><strong>Accelerometer</strong> — used as a fallback on devices without a gyroscope; provides overall tilt magnitude for uniform opacity adjustment.</li>
          </ul>
          <p>Sensor readings are processed <strong>in-memory only</strong>, used solely to render the overlay in real time, and are <strong>never saved to disk, logged, or transmitted</strong>.</p>

          <p><strong>2.4 Billing Information</strong></p>
          <p>If you purchase a premium subscription, payment is processed by the Google Play Store. We do not directly collect or store your full payment card details. We may receive subscription status and anonymous purchase identifiers to unlock and manage premium features.</p>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information described above to:</p>
          <ul>
            <li>Render and configure the privacy overlay according to your preferences</li>
            <li>Activate and deactivate the overlay on the schedule you define</li>
            <li>Re-register your schedule after device restarts</li>
            <li>Process and manage premium purchases through Google Play</li>
          </ul>
          <p>We do <strong>not</strong> use sensor data, settings, or any other on-device data for advertising, profiling, or automated decision-making.</p>

          <h2>4. How We Share Your Information</h2>
          <p>We do not share your personal information with third parties. The only external interaction is with Google Play for subscription billing, as described in Section 7. We do not sell your personal information.</p>

          <h2>5. Permissions</h2>
          <p>Privacy Shield requests the following Android permissions:</p>
          <ul>
            <li><strong>Draw over other apps (SYSTEM_ALERT_WINDOW):</strong> Required to display the privacy overlay on top of all other apps. This is the core function of the App. Without it, no overlay can be displayed.</li>
            <li><strong>Foreground service (FOREGROUND_SERVICE):</strong> Required to keep the overlay running reliably while you use other apps. Android requires a visible notification when an app runs a foreground service.</li>
            <li><strong>Foreground service type (FOREGROUND_SERVICE_SPECIAL_USE):</strong> Required by Android 14+ to declare the specific type of foreground service the App uses.</li>
            <li><strong>Receive boot completed (RECEIVE_BOOT_COMPLETED):</strong> Re-registers your scheduled activation times after the device restarts so your schedule continues to work without manual intervention.</li>
            <li><strong>Schedule exact alarm (SCHEDULE_EXACT_ALARM):</strong> Activates and deactivates the overlay at the exact times you specify in the scheduler.</li>
            <li><strong>Ignore battery optimizations (REQUEST_IGNORE_BATTERY_OPTIMIZATIONS):</strong> Requests that the device not stop the overlay service in the background. You can deny this permission; the App will still work but may be less reliable on battery-aggressive devices such as Xiaomi, Huawei, and Samsung.</li>
          </ul>

          <h2>6. Foreground Service Notification</h2>
          <p>When the overlay is active, a persistent notification is shown in your notification drawer. This is a mandatory Android requirement for foreground services. The notification indicates that the privacy overlay is running and provides a quick way to stop it. It contains no personal data.</p>

          <h2>7. Subscriptions &amp; Payments</h2>
          <p>Privacy Shield may offer a premium subscription to unlock all features. When you purchase premium services:</p>
          <ul>
            <li>Payments are processed by the Google Play Store. We do not directly collect or store your full payment card details.</li>
            <li>We receive subscription status and related purchase metadata to unlock premium features.</li>
            <li>Free trials, if offered, convert to paid subscriptions unless cancelled before the trial ends.</li>
            <li>You can manage or cancel subscriptions through your Google Play account settings (<em>Google Play &gt; Profile &gt; Payments &amp; subscriptions &gt; Subscriptions</em>).</li>
            <li>Refunds and billing disputes are handled according to <a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener noreferrer">Google Play&apos;s refund policy</a>.</li>
          </ul>

          <h2>8. Third-Party Services</h2>
          <p>Privacy Shield does not integrate any third-party analytics, advertising, crash-reporting, or cloud-storage services. The only third-party interaction is Google Play for subscription billing as described in Section 7. Google may collect payment and account information as described in <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>.</p>

          <h2>9. Data Security</h2>
          <p>Because Privacy Shield stores only local configuration data and never transmits data to external servers, the attack surface is minimal. Local settings are stored in a secure, encrypted on-device key-value store. Sensor data is never persisted to storage.</p>

          <h2>10. Your Rights &amp; Controls</h2>

          <p><strong>10.1 Access &amp; Control</strong></p>
          <p>You can view, edit, and reset all overlay settings and schedule preferences directly within the App at any time.</p>

          <p><strong>10.2 Delete Your Data</strong></p>
          <p>Uninstalling the App permanently removes all locally stored settings and schedule data from your device.</p>

          <p><strong>10.3 Communication Preferences</strong></p>
          <p>The only notification the App sends is the foreground service notification required by Android while the overlay is active. You can stop this notification by disabling the overlay service.</p>

          <p><strong>10.4 For EU/EEA &amp; UK Residents (GDPR)</strong></p>
          <p>If you are located in the European Union, European Economic Area, or United Kingdom, you have rights under the GDPR. Because Privacy Shield does not collect personal data beyond what is stored locally on your device, most GDPR rights are exercised directly on your device. For questions, contact us at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.</p>

          <p><strong>10.5 For California Residents (CCPA/CPRA)</strong></p>
          <p>If you are a California resident, you have rights under the CCPA and CPRA. Privacy Shield does not sell or share personal information. Because no personal data is collected by us, there is nothing to request deletion of on our end. Uninstalling the App removes all locally stored data.</p>

          <h2>11. Data Retention</h2>
          <p>All data (overlay settings and schedule) is stored only on your device for as long as the App is installed. We retain no data on external servers. Uninstalling the App permanently deletes all App data from your device.</p>

          <h2>12. Children&apos;s Privacy</h2>
          <p>Privacy Shield is not intended for users under 13 years of age (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children. Because the App does not collect personal data, no child data is held by us.</p>
          <p>If you are a parent or guardian with concerns, please contact us at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.</p>

          <h2>13. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Changes take effect upon posting, and we will update the &quot;Last updated&quot; date at the top of this page. For material changes that significantly affect your rights, we will provide notice through the App or other appropriate means. We encourage you to review this policy periodically.</p>

          <h2>14. Contact Us</h2>
          <p>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:support@appaxislab.com">support@appaxislab.com</a></li>
            <li><strong>Developer:</strong> App Axis Lab</li>
          </ul>

          <hr className={s.divider} />

          <h1 id="eula">End User License Agreement (EULA)</h1>
          <p>This End User License Agreement (&quot;Agreement&quot;) is a legal agreement between you (&quot;User&quot; or &quot;you&quot;) and App Axis Lab (&quot;Licensor&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) for the Privacy Shield mobile application (the &quot;App&quot;). By downloading, installing, or using the App, you agree to be bound by this Agreement. If you do not agree, do not download, install, or use the App.</p>

          <h2>1. License Grant</h2>
          <p>Subject to your compliance with this Agreement, we grant you a limited, non-exclusive, non-transferable, revocable license to install and use the App on devices you own or control, for your personal, non-commercial use, in accordance with this Agreement and applicable app store terms.</p>

          <h2>2. Restrictions</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Copy, modify, adapt, or create derivative works of the App</li>
            <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the App, except where expressly permitted by law</li>
            <li>Rent, lease, lend, sell, sublicense, or distribute the App or any part of it</li>
            <li>Remove, alter, or obscure any proprietary notices or labels on the App</li>
            <li>Use the App for any unlawful purpose or in any way that violates applicable laws or regulations</li>
            <li>Interfere with or disrupt the App or connected systems</li>
            <li>Use automated systems or bots to access or use the App without our written consent</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>The App, including its design, trademarks, software, and content, is owned by App Axis Lab or its licensors and is protected by copyright, trademark, and other intellectual property laws. This Agreement does not transfer any ownership rights to you.</p>

          <h2>4. Your Settings &amp; Data</h2>
          <p>All overlay settings and schedule preferences you configure in the App are stored locally on your device. You are responsible for maintaining your device&apos;s security. Because no account or cloud sync is involved, we cannot recover your settings if you uninstall the App or lose your device.</p>

          <h2>5. Responsible Use</h2>
          <p>Privacy Shield is a tool to protect the visual privacy of your screen and is not a substitute for professional security software or advice. You must use the App lawfully. You are responsible for any consequences arising from your use of the App, including any privacy or security decisions you make based on the overlay.</p>

          <h2>6. Permissions &amp; Device Access</h2>
          <p>The App requests access to draw over other apps, run a foreground service, receive boot-completed broadcasts, schedule exact alarms, and request battery-optimization exemption to support the features described in our <a href="#privacy">Privacy Policy</a>. You may deny certain permissions, but related features may not function.</p>

          <h2>7. Subscriptions &amp; In-App Purchases</h2>
          <p>Privacy Shield may offer a premium subscription or in-app purchases to unlock additional features. Payment and billing are processed by the Google Play Store. Refunds and billing disputes are handled according to Google Play&apos;s policies. We do not store your full payment card details.</p>
          <p>Free trials, if offered, convert to paid subscriptions unless cancelled before the trial ends, in accordance with Google Play&apos;s rules.</p>

          <h2>8. Disclaimer of Warranties</h2>
          <p>THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE. THE OVERLAY IS A VISUAL PRIVACY AID ONLY AND DOES NOT GUARANTEE THAT YOUR SCREEN CONTENT CANNOT BE VIEWED, PHOTOGRAPHED, OR RECORDED BY OTHERS.</p>

          <h2>9. Limitation of Liability</h2>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, APP AXIS LAB AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP, INCLUDING ANY PRIVACY INCIDENT THAT OCCURS DESPITE USE OF THE OVERLAY.</p>
          <p>OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE APP SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US FOR THE APP IN THE TWELVE (12) MONTHS BEFORE THE CLAIM, OR (B) FIFTY U.S. DOLLARS (USD $50), WHERE PERMITTED BY LAW.</p>

          <h2>10. Indemnification</h2>
          <p>You agree to indemnify and hold harmless App Axis Lab from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from your use of the App or your violation of this Agreement or applicable law.</p>

          <h2>11. Termination</h2>
          <p>This license is effective until terminated. We may suspend or terminate your access to the App at any time if you breach this Agreement. Upon termination, you must cease all use of the App and delete all copies from your devices. You may terminate at any time by uninstalling the App. Sections that by their nature should survive termination will survive.</p>

          <h2>12. Changes to This Agreement</h2>
          <p>We may update this EULA from time to time. Continued use of the App after changes become effective constitutes acceptance of the revised Agreement. The &quot;Last updated&quot; date at the top of this page will reflect material revisions.</p>

          <h2>13. Governing Law &amp; Disputes</h2>
          <p>This Agreement is governed by the laws of the jurisdiction in which App Axis Lab operates, without regard to conflict-of-law principles, except where mandatory consumer protection laws in your country provide otherwise. Any dispute shall be resolved in the courts of that jurisdiction, unless applicable law requires a different forum.</p>

          <h2>14. Children</h2>
          <p>The App is not intended for children under 13 years of age (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children as described in our Privacy Policy.</p>

          <h2>15. App Stores (Google)</h2>
          <p>If you obtained the App through Google Play, you agree that Google is not a party to this Agreement and has no responsibility or liability with respect to the App. Your use of Google Play is subject to Google&apos;s terms of service.</p>

          <h2>16. Severability &amp; Entire Agreement</h2>
          <p>If any provision of this Agreement is held invalid or unenforceable, the remaining provisions remain in full force. This Agreement, together with our Privacy Policy, constitutes the entire agreement between you and App Axis Lab regarding the App and supersedes prior understandings on the same subject.</p>

          <h2>17. Contact</h2>
          <p>For questions about this EULA, contact App Axis Lab at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.</p>
        </div>
      </div>
    </PrivacyLayout>
  )
}
