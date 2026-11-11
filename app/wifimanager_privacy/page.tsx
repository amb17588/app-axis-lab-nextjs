import type { Metadata } from 'next'
import PrivacyLayout from '@/components/PrivacyLayout'
import s from '@/styles/privacy.module.css'

export const metadata: Metadata = {
  title: 'WiFi Manager — Privacy Policy & EULA | App Axis Lab',
}

export default function WifiManagerPrivacy() {
  return (
    <PrivacyLayout
      appName="WiFi Manager — Wi-Fi Diagnostics, Security & Sharing"
      subtitle="Privacy Policy & End User License Agreement"
      lastUpdated="Last updated: November 10, 2026"
    >
      <div className={s.card}>
        <div className={s.privacyContent}>

    <p>
      This page contains the <a href="#privacy">Privacy Policy</a> and <a href="#eula">End User License Agreement (EULA)</a> for WiFi Manager. By downloading, installing, or using the App, you agree to both documents.
    </p>

    
    <h1 id="privacy">Privacy Policy</h1>

    <h2>Scope</h2>
    <p>
      Welcome to WiFi Manager&apos;s Privacy Policy. Your privacy is important to us. This Privacy Policy explains how WiFi Manager (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses, stores, and shares your information when you use our Wi-Fi diagnostics, security, and sharing mobile application and related services (the &quot;App&quot; or &quot;Services&quot;).
    </p>
    <p>
      If you do not agree with this Privacy Policy, please do not use our Services.
    </p>

    <h2>Overview</h2>
    <p>
      WiFi Manager helps you understand and manage the Wi-Fi networks you use — run instant speed tests and detect dead zones, share a network instantly via QR code, and get guidance on strengthening your network&apos;s security and managing connected devices and hotspots. WiFi Manager does <strong>not</strong> require you to create an account.
    </p>
    <div className={s.highlightBox}>
      <ul>
        <li><strong>No account or sign-up</strong> — WiFi Manager does not ask for your name, email address, or a password, and it does not create any account for you.</li>
        <li><strong>Your Wi-Fi and diagnostics data stays on your device</strong> — network names, signal/speed-test results, and your saved security preferences are stored locally on your phone and are never uploaded to our servers, because we do not operate a backend server for this data.</li>
        <li><strong>We show ads via Google AdMob</strong> — the App currently ships with Google&apos;s publicly documented <strong>test</strong> ad units while development continues; it will switch to real production ad units only once those are configured, behind a build-time flag (see <a href="#permissions">Section 5</a> and <a href="#third-party">Section 9</a>).</li>
        <li><strong>Subscriptions are processed by Apple/Google and RevenueCat</strong> — if you purchase a premium plan, billing is handled by the Apple App Store or Google Play, and subscription status is synced through our subscription-management provider, RevenueCat. We do not see or store your payment card details.</li>
        <li><strong>We never sell your personal information.</strong></li>
      </ul>
    </div>

    <h2>1. The App &amp; How It Works</h2>
    <p>WiFi Manager is a utility app with three core areas, all used without an account:</p>
    <ul>
      <li><strong>Speed &amp; diagnostics</strong> — run on-demand network speed tests and view signal-strength readings to help you find Wi-Fi dead zones.</li>
      <li><strong>QR sharing</strong> — generate or scan a QR code to share a Wi-Fi network&apos;s connection details with another device, using your device&apos;s own Wi-Fi credential store.</li>
      <li><strong>Security &amp; hotspot guidance</strong> — guidance and settings to help you choose stronger passwords, review connected/unrecognized devices, and manage hotspots.</li>
    </ul>
    <p>App preferences (such as units, notification choices, and onboarding progress) are stored locally on your device.</p>

    <h2>2. Information We Collect</h2>

    <p><strong>2.1 Wi-Fi &amp; Diagnostics Data (stored only on your device)</strong></p>
    <p>The following is processed on your device to power the App&apos;s core features and is never sent to our servers:</p>
    <ul>
      <li>Names (SSIDs) of Wi-Fi networks you scan, view, or save within the App</li>
      <li>Signal-strength and speed-test readings</li>
      <li>Security settings and preferences you configure in the App</li>
      <li>QR codes you generate or scan for sharing a network, and the connection details they encode</li>
    </ul>
    <div className={s.highlightBox}>
      This data is read using your device&apos;s own operating-system Wi-Fi APIs and is used entirely on-device to display diagnostics and sharing features back to you. We do not operate a server that stores this information.
    </div>

    <p><strong>2.2 Advertising &amp; Device Information (Google AdMob)</strong></p>
    <p>We use Google AdMob (Google Mobile Ads SDK) to show native ads. Google&apos;s SDK may collect and process data to serve and measure ads, including:</p>
    <ul>
      <li>An advertising identifier (Google Advertising ID) and anonymous installation identifiers</li>
      <li>Device type, model, operating system, and IP address</li>
      <li>Ad interaction data</li>
    </ul>
    <p>
      The App currently uses Google&apos;s publicly documented <strong>test</strong> ad unit and App IDs while development continues, so no real ad personalization or measurement data is generated by this build yet. Production ad units are controlled by a build-time flag and will only be enabled once configured with our real AdMob account. This data is never based on the content of your Wi-Fi networks, diagnostics, or security settings.
    </p>

    <p><strong>2.3 Purchase &amp; Subscription Data</strong></p>
    <p>If you purchase a premium plan, we use RevenueCat to manage subscription status, together with the Apple App Store or Google Play, which process billing. This involves:</p>
    <ul>
      <li>An anonymous subscriber identifier generated automatically by RevenueCat</li>
      <li>Purchase and subscription status (for example, which plan is active and its renewal date)</li>
    </ul>
    <p>We do not directly collect or store your payment card details — these are handled entirely by Apple or Google.</p>

    <p><strong>2.4 What We Do <em>Not</em> Collect</strong></p>
    <ul>
      <li>No account — no email address, phone number, real name, or password</li>
      <li>No GPS or precise location tracking by us. (On some Android versions, the operating system itself requires the App to hold a location permission in order to return Wi-Fi scan results — this is an Android platform requirement, not something WiFi Manager uses to track your whereabouts, and no location data is transmitted to us.)</li>
      <li>No camera access or photos, beyond rendering/scanning QR codes you choose to generate or scan, which never leaves your device</li>
      <li>No contacts list access</li>
      <li>No microphone or audio recording</li>
      <li>No payment card details — purchases are billed entirely through the Apple App Store or Google Play</li>
    </ul>

    <p><strong>2.5 Device Data</strong></p>
    <ul>
      <li>Device type, model, and operating system</li>
      <li>App version and language/region settings</li>
      <li>An advertising identifier (Google Advertising ID) and anonymous installation identifiers</li>
    </ul>

    <h2>3. How We Use Your Information</h2>
    <p>We use the information described above to:</p>
    <ul>
      <li>Run the App&apos;s core features — speed tests, signal diagnostics, QR sharing, and security/hotspot guidance, entirely on your device</li>
      <li>Display and measure advertising</li>
      <li>Process and manage premium subscriptions through the Apple App Store, Google Play, and RevenueCat</li>
      <li>Maintain the security and integrity of the App</li>
      <li>Provide customer support when you contact us</li>
      <li>Comply with legal obligations</li>
    </ul>
    <p>We do <strong>not</strong> use the Wi-Fi networks, diagnostics, or security settings you view in the App for advertising, profiling, or automated decision-making — that data never reaches us in the first place.</p>

    <h2>4. How We Share Your Information</h2>

    <p><strong>4.1 With Service Providers</strong></p>
    <p>We use a limited number of trusted providers to operate the App — Google AdMob for advertising, and RevenueCat together with the Apple App Store / Google Play for subscription billing. These providers process data only as needed to perform their services for us and are not permitted to use your personal information for their own unrelated purposes.</p>

    <p><strong>4.2 Legal Requirements</strong></p>
    <p>We may disclose information if required by law, regulation, legal process, or governmental request, or when we believe disclosure is necessary to protect the rights, property, or safety of WiFi Manager, our users, or others.</p>

    <p><strong>4.3 Business Transfers</strong></p>
    <p>If WiFi Manager or App Axis Lab is involved in a merger, acquisition, reorganization, or sale of assets, data we hold may be transferred as part of that transaction. We will notify you of any material change in ownership or use of your personal information.</p>

    <p><strong>4.4 Non-Personal Data</strong></p>
    <p>We may share aggregated or anonymized data that cannot reasonably be used to identify you for analytics and product-improvement purposes.</p>

    <p>We do <strong>not</strong> sell your personal information, and we never sell the Wi-Fi, diagnostics, or security data you view in the App — because that data is never sent to us.</p>

    <h2 id="permissions">5. Permissions</h2>
    <p>WiFi Manager may request the following device capabilities, depending on the feature you use and your OS version:</p>
    <ul>
      <li><strong>Wi-Fi state &amp; network state:</strong> To read the current network&apos;s name, signal strength, and run speed tests.</li>
      <li><strong>Location (Android only, some versions):</strong> Required by Android itself to return Wi-Fi scan results on certain OS versions. WiFi Manager does not use this permission to track your location, and does not transmit location data to us.</li>
      <li><strong>Camera (for QR scanning):</strong> Used only to scan a QR code you point the camera at when using the sharing feature; no photo or video is stored or transmitted.</li>
      <li><strong>Internet &amp; Network State:</strong> Used to show ads and process subscription status.</li>
    </ul>
    <div className={s.highlightBox}>
      WiFi Manager does not request Contacts or Microphone permissions.
    </div>

    <h2>6. Data Security</h2>
    <p>We take security seriously:</p>
    <ul>
      <li>Data transmitted by third-party SDKs we use (AdMob, RevenueCat, app store billing) is sent over encrypted connections (HTTPS/TLS) by those providers.</li>
      <li>Because your Wi-Fi, diagnostics, and security data stays on your device, it is protected by your device&apos;s own security (lock screen, encryption, etc.) — keeping your device secure is important.</li>
      <li>We minimize the data we collect and transmit to what is needed to provide the Services.</li>
    </ul>
    <p>No system is completely secure, and we cannot guarantee absolute security.</p>

    <h2>7. Cookies &amp; Tracking Technologies</h2>
    <p>The App uses the Google AdMob SDK, which may use device or installation identifiers (such as your advertising ID) to serve and measure ads. Related web pages (such as this one) may use basic cookies or local storage to remember preferences. You can limit ad personalization and reset your advertising ID through your device settings.</p>

    <h2>8. Subscriptions &amp; Payments</h2>
    <p>WiFi Manager offers premium plans unlocking unlimited high-speed diagnostics, advanced security alerts, and an ad-free, priority experience. Where offered:</p>
    <ul>
      <li>Payments are processed by the Apple App Store or Google Play. We do not directly collect or store your payment card details.</li>
      <li>We receive subscription status and related purchase metadata from RevenueCat and the relevant app store to unlock premium features.</li>
      <li>Free trials, where offered, convert to a paid subscription unless cancelled before the trial ends, per the relevant app store&apos;s rules.</li>
      <li>Refunds and billing disputes are handled according to the Apple App Store&apos;s or Google Play&apos;s policies.</li>
      <li>You can manage or cancel subscriptions through your Apple ID or Google Play account settings.</li>
    </ul>

    <h2 id="third-party">9. Third-Party Services</h2>
    <p>WiFi Manager uses the following third-party services:</p>
    <ul>
      <li>Advertising (Google AdMob)</li>
      <li>Subscription management (RevenueCat)</li>
      <li>Payment processing operated by Apple (Apple App Store) and Google (Google Play), where premium features are offered</li>
    </ul>
    <p>These services operate under their own privacy policies. We recommend reviewing them, including <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>, <a href="https://www.revenuecat.com/privacy/" target="_blank" rel="noopener noreferrer">RevenueCat&apos;s Privacy Policy</a>, and <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Apple&apos;s Privacy Policy</a>.</p>

    <h2>10. Your Rights &amp; Controls</h2>

    <p><strong>10.1 Access &amp; Control</strong></p>
    <p>Because WiFi Manager has no account, all of your Wi-Fi, diagnostics, and security data lives on your device — you can view, change, or delete it directly within the App&apos;s settings at any time, and all of it is removed automatically when you uninstall the App.</p>

    <p><strong>10.2 Manage Ads</strong></p>
    <p>You can limit ad personalization and reset your advertising identifier in your device settings.</p>

    <p><strong>10.3 Subscription Data</strong></p>
    <p>Since there is no account to delete, to request deletion of the anonymous subscriber record RevenueCat holds for your purchase history, contact us at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.</p>

    <p><strong>10.4 For EU/EEA &amp; UK Residents (GDPR)</strong></p>
    <p>If you are located in the European Union, European Economic Area, or United Kingdom, you have rights under the GDPR, including the right to access, rectify, erase, restrict processing, data portability, and to object to certain processing, including a right to object to ad personalization. You also have the right to lodge a complaint with a supervisory authority.</p>
    <div className={s.highlightBox}>
      We are in the process of implementing Google&apos;s User Messaging Platform (UMP) consent flow for EEA/UK users, as required before showing personalized ads in those regions. Until that work is complete, the App ships with Google&apos;s test ad units only.
    </div>

    <p><strong>10.5 For California Residents (CCPA/CPRA)</strong></p>
    <p>If you are a California resident, you have rights under the CCPA and CPRA, including the right to know what personal information is collected, the right to request deletion, and the right to opt out of the &quot;sale&quot; or &quot;sharing&quot; of personal information (including for cross-context behavioral advertising). You can opt out of ad personalization through your device settings.</p>

    <p>To exercise your privacy rights or ask questions, contact us at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>. We aim to respond within 30 days.</p>

    <h2>11. Data Retention</h2>
    <p>On-device data (your Wi-Fi networks, diagnostics history, and security preferences) is removed automatically when you uninstall the App. Advertising data is retained by Google AdMob under its own policies. Subscription/purchase records are retained by RevenueCat and the relevant app store for as long as needed to administer your subscription and comply with legal, tax, and accounting obligations.</p>

    <h2>12. Children&apos;s Privacy</h2>
    <p>WiFi Manager is not directed at children under 13 years of age (or the applicable age of consent in your jurisdiction), and our advertising is configured accordingly (not child-directed). We do not knowingly collect personal information from children. If we discover that we have collected personal information from a child without appropriate consent, we will take steps to delete it promptly.</p>
    <p>If you are a parent or guardian and believe your child has provided us with personal information, please contact us at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.</p>

    <h2>13. International Transfers</h2>
    <p>Information processed by our service providers (AdMob, RevenueCat, Apple, Google) may be processed and stored in countries other than your own. Where data is transferred internationally, appropriate safeguards such as standard contractual clauses or equivalent mechanisms are applied by those providers as required by applicable law.</p>

    <h2>14. Legal Basis for Processing</h2>
    <p>Where applicable law requires a legal basis for processing personal data, we rely on one or more of the following:</p>
    <ul>
      <li><strong>Consent:</strong> For personalized advertising and other features where consent is required.</li>
      <li><strong>Contractual necessity:</strong> To provide the premium subscriptions you request.</li>
      <li><strong>Legal obligations:</strong> To comply with applicable laws and regulations.</li>
      <li><strong>Legitimate interests:</strong> To secure and improve the Services, show non-personalized ads, prevent abuse, and support our business operations, balanced against your rights and interests.</li>
    </ul>

    <h2>15. Accuracy &amp; Responsible Use Disclaimer</h2>
    <div className={s.warnBox}>
      <strong>WiFi Manager is provided on a best-effort basis.</strong> Speed-test results, signal readings, and security guidance are estimates based on your device&apos;s own measurements and are not guaranteed to be perfectly accurate, and following the App&apos;s security suggestions does not guarantee that any network is fully secure against all threats. You are responsible for only viewing, managing, or sharing networks you own or are authorized to administer. Do not rely on the App as your sole means of securing a network handling sensitive data.
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
      This End User License Agreement (&quot;Agreement&quot;) is a legal agreement between you (&quot;User&quot; or &quot;you&quot;) and App Axis Lab (&quot;Licensor&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) for the WiFi Manager mobile application (the &quot;App&quot;). By downloading, installing, or using the App, you agree to be bound by this Agreement. If you do not agree, do not download, install, or use the App.
    </p>

    <h2>1. License Grant</h2>
    <p>
      Subject to your compliance with this Agreement, we grant you a limited, non-exclusive, non-transferable, revocable license to install and use the App on devices you own or control, for your personal, non-commercial use, in accordance with this Agreement and applicable app store terms.
    </p>

    <h2>2. Restrictions</h2>
    <p>You agree not to:</p>
    <ul>
      <li>Copy, modify, adapt, or create derivative works of the App</li>
      <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the App, except where expressly permitted by law</li>
      <li>Rent, lease, lend, sell, sublicense, or distribute the App or any part of it</li>
      <li>Remove, alter, or obscure any proprietary notices or labels on the App</li>
      <li>Use the App to view, test, manage, disrupt, or attempt to gain access to a Wi-Fi network or device you do not own and are not authorized to administer</li>
      <li>Use the App for any unlawful purpose, including unauthorized network access, interception of others&apos; traffic, or harassment</li>
      <li>Interfere with or disrupt the App, its advertising or billing services, or connected networks</li>
      <li>Use automated systems or bots to access or use the App without our written consent</li>
    </ul>

    <h2>3. Intellectual Property</h2>
    <p>
      The App, including its design, illustrations, trademarks, software, and content, is owned by App Axis Lab or its licensors and is protected by copyright, trademark, and other intellectual property laws. This Agreement does not transfer any ownership rights to you.
    </p>

    <h2>4. Your Local Data</h2>
    <p>
      WiFi Manager does not create or require an account. Any Wi-Fi network names, diagnostics history, QR codes, and security settings you view or create in the App are stored locally on your device, and you are solely responsible for them and for the security of your device. Uninstalling the App removes this data and it cannot be recovered by us, since we never receive or store it.
    </p>

    <h2>5. Network Security &amp; Accuracy — Please Read</h2>
    <div className={s.warnBox}>
      <strong>WiFi Manager is provided on a best-effort basis and does not guarantee the accuracy of any speed test, signal reading, or the completeness of any security recommendation.</strong> Actual network security depends on many factors outside the App&apos;s control (router firmware, ISP configuration, physical access, other devices on the network, and more). <strong>Do not rely on WiFi Manager as your sole means of securing a network carrying sensitive data</strong> — use additional safeguards appropriate to your situation.
    </div>
    <p>
      You are solely responsible for only using the App&apos;s scanning, sharing, and security features on networks and devices you own or are legally authorized to administer. Unauthorized access to a network or device is illegal in most jurisdictions, and you assume all responsibility for your use of the App in that respect.
    </p>

    <h2>6. Responsible Use</h2>
    <p>
      WiFi Manager is a tool to help you understand and manage your own Wi-Fi networks, and is not a substitute for professional network-security or IT advice. You must use the App lawfully and must not use its sharing or security features to harass, defraud, or infringe the rights or privacy of others.
    </p>

    <h2>7. Device Security</h2>
    <p>
      Because the App stores diagnostics and security data only on your device and does not use an account, you are solely responsible for securing your device (for example, with a lock screen or device encryption). Notify us at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a> promptly if you discover a security vulnerability in the App.
    </p>

    <h2>8. Permissions &amp; Device Access</h2>
    <p>
      The App may request access to Wi-Fi/network state, camera (for QR scanning), and — on some Android versions, as required by the OS itself — location, to support the features described in our <a href="#privacy">Privacy Policy</a>. WiFi Manager does not request Contacts or Microphone permissions. You may deny available permissions, but doing so may prevent certain features from working.
    </p>

    <h2>9. Advertising &amp; Third-Party Services</h2>
    <p>
      WiFi Manager is supported by advertising (Google AdMob) and integrates RevenueCat and app store billing for subscriptions. These services are governed by their own terms and privacy policies. We are not responsible for third-party services, content, or practices. The App currently uses Google&apos;s test AdMob units during development; this will switch to production ad units through a build-time configuration once set up.
    </p>

    <h2>10. Subscriptions &amp; In-App Purchases</h2>
    <p>
      WiFi Manager offers premium subscriptions. Payment and billing are processed by the Apple App Store or Google Play, with subscription status managed through RevenueCat. Refunds and billing disputes are handled according to the applicable store&apos;s policies. We do not store your full payment card details.
    </p>
    <p>
      Free trials, if offered, convert to paid subscriptions unless cancelled before the trial ends, in accordance with the applicable store&apos;s rules.
    </p>

    <h2>11. Disclaimer of Warranties</h2>
    <p>
      THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE, OR THAT ANY SPEED TEST, SIGNAL READING, OR SECURITY RECOMMENDATION WILL BE ACCURATE OR SUFFICIENT TO SECURE ANY NETWORK. THE APP DOES NOT PROVIDE PROFESSIONAL NETWORK-SECURITY OR IT ADVICE.
    </p>

    <h2>12. Limitation of Liability</h2>
    <p>
      TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, APP AXIS LAB AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP, INCLUDING ANY NETWORK SECURITY INCIDENT OR INACCURATE DIAGNOSTIC RESULT.
    </p>
    <p>
      OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE APP SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US FOR THE APP IN THE TWELVE (12) MONTHS BEFORE THE CLAIM, OR (B) FIFTY U.S. DOLLARS (USD $50), WHERE PERMITTED BY LAW.
    </p>

    <h2>13. Indemnification</h2>
    <p>
      You agree to indemnify and hold harmless App Axis Lab from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from your use of the App, including any unauthorized access to a network or device, or your violation of this Agreement or applicable law.
    </p>

    <h2>14. Termination</h2>
    <p>
      This license is effective until terminated. We may suspend or terminate your access to the App at any time if you breach this Agreement. Upon termination, you must cease all use of the App and delete all copies from your devices. You may terminate at any time by uninstalling the App. Sections that by their nature should survive termination will survive.
    </p>

    <h2>15. Changes to This Agreement</h2>
    <p>
      We may update this EULA from time to time. Continued use of the App after changes become effective constitutes acceptance of the revised Agreement. The &quot;Last updated&quot; date at the top of this page will reflect material revisions.
    </p>

    <h2>16. Governing Law &amp; Disputes</h2>
    <p>
      This Agreement is governed by the laws of the jurisdiction in which App Axis Lab operates, without regard to conflict-of-law principles, except where mandatory consumer protection laws in your country provide otherwise. Any dispute shall be resolved in the courts of that jurisdiction, unless applicable law requires a different forum.
    </p>

    <h2>17. Children</h2>
    <p>
      The App is not intended for children under 13 years of age (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children as described in our Privacy Policy.
    </p>

    <h2>18. App Stores (Apple App Store &amp; Google Play)</h2>
    <p>
      If you obtained the App through the Apple App Store or Google Play, you agree that Apple or Google, as applicable, is not a party to this Agreement and has no responsibility or liability with respect to the App. Your use of the relevant store is subject to that store&apos;s terms of service. This Agreement is between you and App Axis Lab only.
    </p>

    <h2>19. Severability &amp; Entire Agreement</h2>
    <p>
      If any provision of this Agreement is held invalid or unenforceable, the remaining provisions remain in full force. This Agreement, together with our Privacy Policy, constitutes the entire agreement between you and App Axis Lab regarding the App and supersedes prior understandings on the same subject.
    </p>

    <h2>20. Contact</h2>
    <p>
      For questions about this EULA, contact App Axis Lab at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.
    </p>
    
  
        </div>
      </div>
    </PrivacyLayout>
  )
}
