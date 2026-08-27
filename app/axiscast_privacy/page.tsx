import type { Metadata } from 'next'
import PrivacyLayout from '@/components/PrivacyLayout'
import s from '@/styles/privacy.module.css'

export const metadata: Metadata = {
  title: 'AxisCast — Privacy Policy & EULA | App Axis Lab',
}

export default function AxisCastPrivacy() {
  return (
    <PrivacyLayout
      appName="AxisCast"
      subtitle="Screen Mirroring & Casting — Privacy Policy & End User License Agreement"
      lastUpdated="Last updated: August 27, 2026"
    >
      <div className={s.card}>
        <div className={s.privacyContent}>
          <p>
            This page contains the <a href="#privacy">Privacy Policy</a> and{' '}
            <a href="#eula">End User License Agreement (EULA)</a> for AxisCast. By downloading,
            installing, or using the App, you agree to both documents.
          </p>

          <h1 id="privacy">Privacy Policy</h1>

          <h2>Scope</h2>
          <p>
            Welcome to AxisCast&apos;s Privacy Policy. Your privacy is important to us. This
            Privacy Policy explains how AxisCast (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses,
            stores, and shares your information when you use our screen-mirroring mobile
            application and related services (the &quot;App&quot; or &quot;Services&quot;).
          </p>
          <p>If you do not agree with this Privacy Policy, please do not use our Services.</p>

          <h2>Overview</h2>
          <p>
            AxisCast mirrors your phone&apos;s screen to nearby devices — computers, TVs, and
            other screens — directly over your local Wi-Fi network. Discovery and streaming
            happen <strong>peer-to-peer on your own network</strong>: the video of your screen
            travels straight from your phone to the receiving device and is{' '}
            <strong>never routed through, uploaded to, or stored on any AxisCast server</strong>.
            AxisCast is built around an <strong>anonymous, device-local setup</strong> — we
            don&apos;t ask for your name, email, or password to use the App.
          </p>
          <div className={s.highlightBox}>
            <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
              <li><strong>No sign-up required</strong> — you can mirror your screen without an account; no email, phone number, or password is ever collected.</li>
              <li><strong>Your screen never touches our servers</strong> — mirroring is a direct, encrypted peer-to-peer connection over your local Wi-Fi; we cannot see, record, or store what you cast.</li>
              <li><strong>Pairing stays on your network</strong> — devices are found using local network discovery (mDNS/Bonjour), and pairing is confirmed with a one-time PIN or QR code shown on the receiving device.</li>
              <li><strong>The camera is used only to scan a pairing QR code</strong> — nothing is photographed, recorded, or transmitted; scanning happens entirely on your device (see <a href="#permissions">Section 5</a>).</li>
              <li><strong>We show ads and use limited device data for them</strong> — via Google AdMob (with Unity Ads as a fallback), never based on the content of what you mirror.</li>
              <li><strong>We never sell your personal information.</strong></li>
            </ul>
          </div>

          <h2>1. Setup &amp; Configuration</h2>
          <p>To use AxisCast, no account is required — you can start mirroring right away. Depending on how you use the App, we store the following locally on your device:</p>
          <ul>
            <li>A randomly generated, on-device identifier so nearby devices can recognize your phone during pairing</li>
            <li>A device display name (defaulting to your device&apos;s name) shown to the receiving device when you connect</li>
            <li>Preferences such as language, onboarding choices, and recently connected devices</li>
            <li>Your subscription status, if you upgrade to premium</li>
          </ul>
          <p>These settings let us operate the App&apos;s core mirroring features and remember your preferences between sessions.</p>

          <h2>2. Information We Collect</h2>

          <p><strong>2.1 On-Device Identity</strong></p>
          <ul>
            <li>A randomly generated identifier created and stored locally on your device to support device pairing</li>
            <li>A device display name (which you can change) presented to the device you connect to</li>
            <li>No email address, phone number, or real name is collected to use the App</li>
          </ul>

          <p><strong>2.2 Screen &amp; Mirroring Content</strong></p>
          <p>When you mirror your screen, the captured video is streamed directly to the receiving device over your local network using a peer-to-peer connection (WebRTC).</p>
          <div className={s.highlightBox}>
            We do <strong>not</strong> receive, view, record, or store the contents of your
            screen, your mirroring sessions, or the media you cast. This data never leaves your
            local Wi-Fi network and never reaches our servers — because AxisCast has no
            streaming server in between.
          </div>

          <p><strong>2.3 Data Stored Only on Your Device</strong></p>
          <p>The following stays on your device and is never sent to our servers:</p>
          <ul>
            <li>Your on-device identifier and chosen device display name</li>
            <li>Recently connected devices and pairing history</li>
            <li>App preferences — language, onboarding status, and local settings toggles</li>
          </ul>

          <p><strong>2.4 Local Network &amp; Pairing Data</strong></p>
          <p>To find and connect to nearby devices, the App uses your local network. This involves:</p>
          <ul>
            <li>Broadcasting and browsing for AxisCast devices on your Wi-Fi using local discovery (mDNS/Bonjour)</li>
            <li>Exchanging local network addresses and a one-time PIN (or QR code) to establish a direct, encrypted connection</li>
          </ul>
          <p>This information is used only on your local network to set up the connection between your phone and the receiving device. It is not transmitted to us.</p>

          <p><strong>2.5 Advertising &amp; Device Information</strong></p>
          <p>We use Google AdMob (Google Mobile Ads SDK), with Unity Ads as a fallback, to show ads. These SDKs may collect and process data to serve and measure ads, including:</p>
          <ul>
            <li>An advertising identifier (Google Advertising ID / iOS Identifier for Advertisers) and anonymous installation identifiers</li>
            <li>Device type, model, operating system, and IP address</li>
            <li>Ad interaction data</li>
          </ul>
          <p>On iOS, personalized ads are shown only if you allow tracking through Apple&apos;s App Tracking Transparency prompt; otherwise ads are non-personalized. This data is used to show ads and prevent fraud, and is never based on the content of what you mirror.</p>

          <p><strong>2.6 What We Do <em>Not</em> Collect</strong></p>
          <ul>
            <li>No email address, phone number, or government ID</li>
            <li>No precise or approximate location/GPS — AxisCast does not track your location</li>
            <li>No photos or camera images — the camera is used solely to read a pairing QR code on-device; no image is captured, transmitted, or stored (see <a href="#permissions">Section 5</a>)</li>
            <li>No contacts list access</li>
            <li>No microphone or audio recording</li>
            <li>No contents of your mirrored screen or casting sessions</li>
            <li>No payment card details — any purchases are billed entirely through the Apple App Store or Google Play Store, which do not share your card details with us</li>
          </ul>

          <p><strong>2.7 Diagnostics &amp; Analytics</strong></p>
          <p>We use Firebase (Google) for anonymous, aggregate usage analytics, crash reporting, and remote configuration. This helps us understand how features are used and fix crashes. It may include:</p>
          <ul>
            <li>Anonymous, app-generated instance identifiers</li>
            <li>Events such as launching the App, starting or ending a mirroring session, viewing the upgrade screen, and completing onboarding — never the contents of what you mirror</li>
            <li>Crash logs, device type, model, operating system, app version, and language/region settings</li>
          </ul>

          <p><strong>2.8 Billing Information</strong></p>
          <p>If you purchase an AxisCast premium subscription, payment is processed entirely by the Apple App Store or Google Play Store and managed through our subscription provider, RevenueCat. We do not directly collect or store your payment card details. We receive subscription status and anonymous purchase metadata to unlock premium features.</p>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information described above to:</p>
          <ul>
            <li>Operate the App without requiring an account</li>
            <li>Provide core features — discovering nearby devices, pairing securely, and mirroring your screen over your local network</li>
            <li>Remember your preferences, device name, and recently connected devices</li>
            <li>Display and measure advertising</li>
            <li>Diagnose crashes and understand aggregate feature usage to improve the App</li>
            <li>Process premium purchases through the App Store or Google Play Store</li>
            <li>Maintain the security and integrity of the App</li>
            <li>Provide customer support when you contact us</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>We do <strong>not</strong> use the content of your screen or mirroring sessions for advertising, profiling, or automated decision-making — we never have access to it.</p>

          <h2>4. How We Share Your Information</h2>

          <p><strong>4.1 With Devices You Choose</strong></p>
          <p>When you mirror your screen, your device display name and the mirrored video are shared directly with the receiving device you connect to, over your local network, at your direction. AxisCast is not an intermediary in this stream.</p>

          <p><strong>4.2 With Service Providers</strong></p>
          <p>We use a limited number of trusted providers to operate the App — Google AdMob and Unity Ads for advertising, Firebase (Google) for analytics, crash reporting, and remote configuration, and RevenueCat together with the app stores for subscription management. These providers process data only as needed to perform their services for us and are not permitted to use your personal information for their own unrelated purposes.</p>

          <p><strong>4.3 Legal Requirements</strong></p>
          <p>We may disclose information if required by law, regulation, legal process, or governmental request, or when we believe disclosure is necessary to protect the rights, property, or safety of AxisCast, our users, or others.</p>

          <p><strong>4.4 Business Transfers</strong></p>
          <p>If AxisCast or App Axis Lab is involved in a merger, acquisition, reorganization, or sale of assets, data we hold may be transferred as part of that transaction. We will notify you of any material change in ownership or use of your personal information.</p>

          <p><strong>4.5 Non-Personal Data</strong></p>
          <p>We may share aggregated or anonymized data that cannot reasonably be used to identify you for analytics and product-improvement purposes.</p>

          <p>We do <strong>not</strong> sell the personal information you provide to us, and we never sell data about what you mirror.</p>

          <h2 id="permissions">5. Permissions</h2>
          <p>AxisCast requests the following device capabilities:</p>
          <ul>
            <li><strong>Local Network &amp; Wi-Fi:</strong> Used to discover nearby devices (mDNS/Bonjour) and establish the direct, encrypted mirroring connection over your Wi-Fi. On iOS this appears as a Local Network permission; the App does not use this to determine your geographic location.</li>
            <li><strong>Camera:</strong> Optional, and used only to scan a pairing QR code shown on the receiving device. No photo or video is captured, saved, or transmitted; the scan is processed on-device to read the pairing PIN.</li>
            <li><strong>Screen Recording / Media Projection:</strong> Required to capture your screen so it can be mirrored. On Android this uses the system media-projection prompt; on iOS it uses the system broadcast picker. Capture only occurs while you are actively mirroring.</li>
            <li><strong>Notifications:</strong> Optional, used to show the ongoing-mirroring status and related alerts. You can disable this in your device settings.</li>
            <li><strong>Internet &amp; Network State:</strong> Used to establish connections, show ads, and send anonymous diagnostics.</li>
          </ul>
          <div className={s.highlightBox}>
            <strong>AxisCast does not request Location (GPS), Contacts, or Microphone permissions.</strong>{' '}
            The camera is used only to read a pairing QR code, and the mirrored video of your
            screen is sent directly to the device you choose over your local network — it is
            never captured, transmitted, or stored by us.
          </div>

          <h2>6. Data Security</h2>
          <p>We take security seriously:</p>
          <ul>
            <li>Mirroring connections between your phone and the receiving device are encrypted end-to-end using the WebRTC standard (DTLS/SRTP).</li>
            <li>Pairing is confirmed with a one-time PIN (or QR code) so only a device you approve can connect.</li>
            <li>Because mirroring stays on your local network and never reaches our servers, there is no central store of your screen content to breach.</li>
            <li>We use reputable infrastructure and service providers with access controls for advertising, analytics, and subscription data.</li>
            <li>We minimize the data we collect and transmit to what is needed to provide the Services.</li>
          </ul>
          <p>No system is completely secure, and we cannot guarantee absolute security. Because AxisCast does not use accounts, you are responsible for keeping your device and Wi-Fi network secure and for only pairing with devices you trust.</p>

          <h2>7. Cookies &amp; Tracking Technologies</h2>
          <p>The App uses the Google AdMob and Unity Ads SDKs, which may use device or installation identifiers (such as your advertising ID) to serve and measure ads. Related web pages (such as this one) may use basic cookies or local storage to remember preferences. You can limit ad personalization and reset your advertising ID through your device settings.</p>

          <h2>8. Subscriptions &amp; Payments</h2>
          <p>AxisCast may offer premium features or subscriptions unlocking benefits such as an ad-free experience, unlimited or longer mirroring sessions, and additional tools. Where offered:</p>
          <ul>
            <li>Payments are processed by the Apple App Store or Google Play Store and managed through RevenueCat. We do not directly collect or store your payment card details.</li>
            <li>We receive subscription status and related purchase metadata to unlock premium features.</li>
            <li>Free trials, where offered, convert to a paid subscription unless cancelled before the trial ends, per the applicable store&apos;s rules.</li>
            <li>Refunds and billing disputes are handled according to the App Store or Google Play Store policies.</li>
            <li>You can manage or cancel subscriptions through your Apple ID or Google Play account settings.</li>
          </ul>

          <h2>9. Third-Party Services</h2>
          <p>AxisCast uses the following third-party services:</p>
          <ul>
            <li>Advertising (Google AdMob, with Unity Ads as a fallback)</li>
            <li>Analytics, crash reporting, and remote configuration (Firebase, by Google)</li>
            <li>Subscription management (RevenueCat)</li>
            <li>Payment processing operated by Apple (App Store) and Google (Google Play Store), where premium features are offered</li>
          </ul>
          <p>
            These services operate under their own privacy policies. We recommend reviewing them,
            including{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Google&apos;s Privacy Policy
            </a>
            ,{' '}
            <a href="https://unity.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
              Unity&apos;s Privacy Policy
            </a>
            ,{' '}
            <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">
              RevenueCat&apos;s Privacy Policy
            </a>
            , and{' '}
            <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">
              Apple&apos;s Privacy Policy
            </a>
            .
          </p>

          <h2>10. Your Rights &amp; Controls</h2>

          <p><strong>10.1 Access &amp; Control</strong></p>
          <p>You can change your device display name, clear recently connected devices, and update your preferences directly within the App at any time.</p>

          <p><strong>10.2 Manage Ads</strong></p>
          <p>You can limit ad personalization and reset your advertising identifier in your device settings. On iOS, you can decline tracking through the App Tracking Transparency prompt.</p>

          <p><strong>10.3 Delete Your Data</strong></p>
          <p>
            Uninstalling the App immediately deletes all on-device data (your on-device
            identifier, device name, recent devices, and preferences). Because AxisCast does not
            use accounts and does not store your screen content or personal profile on our
            servers, there is no server-side personal profile to delete. To ask questions about
            data associated with advertising or diagnostics, contact us at{' '}
            <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.
          </p>

          <p><strong>10.4 Communication Preferences</strong></p>
          <p>You can control notifications through your device settings.</p>

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
          <p>On-device data (your identifier, device name, recent devices, and preferences) is removed automatically when you uninstall the App. We do not retain your screen content or mirroring sessions at all, because they never reach us. Advertising and analytics data is retained by Google, Unity, and RevenueCat under their own policies. Subscription status is retained for as long as needed to provide premium features, or as required by law.</p>

          <h2>12. Children&apos;s Privacy</h2>
          <p>AxisCast is not directed at children under 13 years of age (or the applicable age of consent in your jurisdiction), and our advertising is configured accordingly (not child-directed). We do not knowingly collect personal information from children. If we discover that we have collected personal information from a child without appropriate consent, we will take steps to delete it promptly.</p>
          <p>
            If you are a parent or guardian and believe your child has provided us with personal
            information, please contact us at{' '}
            <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.
          </p>

          <h2>13. International Transfers</h2>
          <p>Your information may be processed and stored in countries other than your own, including by our service providers. Where data is transferred internationally, appropriate safeguards such as standard contractual clauses or equivalent mechanisms are applied as required by applicable law.</p>

          <h2>14. Legal Basis for Processing</h2>
          <p>Where applicable law requires a legal basis for processing personal data, we rely on one or more of the following:</p>
          <ul>
            <li><strong>Consent:</strong> For personalized advertising, notifications, and other features where consent is required.</li>
            <li><strong>Contractual necessity:</strong> To provide the features and subscriptions you request.</li>
            <li><strong>Legal obligations:</strong> To comply with applicable laws and regulations.</li>
            <li><strong>Legitimate interests:</strong> To secure and improve the Services, show non-personalized ads, prevent abuse, and support our business operations, balanced against your rights and interests.</li>
          </ul>

          <h2>15. Responsible Use &amp; Service Reliability Disclaimer</h2>
          <div className={[s.callout, s.calloutDanger].join(' ')}>
            <strong>AxisCast is provided on a best-effort basis and cannot guarantee that
            mirroring will always connect or stream without interruption.</strong>{' '}
            Wi-Fi signal strength, network congestion, router or firewall settings, device
            performance, battery-optimization settings, and operating-system restrictions can all
            affect discovery, pairing, and streaming quality. AxisCast is intended for lawful
            screen sharing of content you own or are authorized to display. Do not use it to
            mirror or record content you do not have the right to share, and do not rely on it
            for safety-critical or time-critical purposes.
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
            (&quot;User&quot; or &quot;you&quot;) and App Axis Lab (&quot;Licensor&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) for the
            AxisCast mobile application (the &quot;App&quot;). By downloading, installing, or using the
            App, you agree to be bound by this Agreement. If you do not agree, do not download,
            install, or use the App.
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
            <li>Use the App for any unlawful purpose, or to mirror, capture, or display content you do not own or are not authorized to share</li>
            <li>Interfere with or disrupt the App, its ad, analytics, or subscription services, or connected networks</li>
            <li>Attempt to connect to or capture from devices you are not authorized to access</li>
            <li>Use automated systems or bots to access or use the App without our written consent</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>The App, including its design, illustrations, trademarks, software, and content (excluding the content you mirror), is owned by App Axis Lab or its licensors and is protected by copyright, trademark, and other intellectual property laws. This Agreement does not transfer any ownership rights to you. You retain full ownership of the content you display or mirror with the App.</p>

          <h2>4. Your Content &amp; Device</h2>
          <p>You retain ownership of all content you mirror or display with the App (&quot;User Content&quot;). AxisCast does not require an account and does not receive or store your User Content — it is streamed directly to the device you choose over your local network. You are responsible for keeping your device and network secure, for only pairing with devices you trust, and for all activity that occurs through the App on your device. You agree not to use the App to display content that is unlawful, infringing, or that you are not authorized to share.</p>

          <h2>5. Service Reliability — Please Read</h2>
          <div className={[s.callout, s.calloutDanger].join(' ')}>
            <strong>AxisCast is provided on a best-effort basis and cannot guarantee
            uninterrupted discovery, pairing, or streaming.</strong>{' '}
            Wi-Fi signal strength, network congestion, router or firewall settings, device
            performance, battery-optimization settings, and operating-system restrictions can all
            affect the App. <strong>Do not rely on AxisCast for safety-critical or
            time-critical purposes.</strong>
          </div>
          <p>You are responsible for granting the permissions the App requests (local network access, screen capture, and optionally camera and notifications) and for connecting both devices to the same, trusted Wi-Fi network, as these are typically required for mirroring to work.</p>

          <h2>6. Responsible Use</h2>
          <p>AxisCast is a tool for mirroring your own screen and content to devices you control or are authorized to use. You must use the App lawfully and must not use it to capture, mirror, or display content that infringes the rights or privacy of others, or that you are not authorized to share. You are responsible for how you use the App and for the content you choose to mirror.</p>

          <h2>7. Device &amp; Network Security</h2>
          <p>
            You are responsible for securing your device and Wi-Fi network. Because AxisCast
            does not use accounts, we cannot verify your identity or recover any configuration
            for you. Only pair with devices and networks you trust. Notify us at{' '}
            <a href="mailto:support@appaxislab.com">support@appaxislab.com</a> promptly if you
            discover a security concern with the App.
          </p>

          <h2>8. Permissions &amp; Device Access</h2>
          <p>
            The App may request access to your local network, screen capture (media projection /
            broadcast), and optionally the camera (for QR pairing) and notifications, to support
            the features described in our <a href="#privacy">Privacy Policy</a>. AxisCast does
            not request Location (GPS), Contacts, or Microphone permissions. You may deny
            available permissions, but doing so may prevent the App from discovering devices or
            mirroring your screen.
          </p>

          <h2>9. Advertising &amp; Third-Party Services</h2>
          <p>AxisCast is supported by advertising and integrates third-party services for advertising, analytics and crash reporting, and subscription management. These services are governed by their own terms and privacy policies. We are not responsible for third-party services, content, or practices.</p>

          <h2>10. Subscriptions &amp; In-App Purchases</h2>
          <p>AxisCast may offer premium features, subscriptions, or in-app purchases. Payment and billing are processed by the Apple App Store or Google Play Store and managed through RevenueCat. Refunds and billing disputes are handled according to the applicable store&apos;s policies. We do not store your full payment card details.</p>
          <p>Free trials, if offered, convert to paid subscriptions unless cancelled before the trial ends, in accordance with the applicable store&apos;s rules.</p>

          <h2>11. Disclaimer of Warranties</h2>
          <p>THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE, OR THAT MIRRORING WILL ALWAYS CONNECT OR STREAM WITHOUT INTERRUPTION.</p>

          <h2>12. Limitation of Liability</h2>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, APP AXIS LAB AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP, INCLUDING ANY FAILED OR INTERRUPTED MIRRORING SESSION.</p>
          <p>OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE APP SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US FOR THE APP IN THE TWELVE (12) MONTHS BEFORE THE CLAIM, OR (B) FIFTY U.S. DOLLARS (USD $50), WHERE PERMITTED BY LAW.</p>

          <h2>13. Indemnification</h2>
          <p>You agree to indemnify and hold harmless App Axis Lab from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from your use of the App, your User Content, or your violation of this Agreement or applicable law.</p>

          <h2>14. Termination</h2>
          <p>This license is effective until terminated. We may suspend or terminate your access to the App at any time if you breach this Agreement. Upon termination, you must cease all use of the App and delete all copies from your devices. You may terminate at any time by uninstalling the App. Sections that by their nature should survive termination will survive.</p>

          <h2>15. Changes to This Agreement</h2>
          <p>We may update this EULA from time to time. Continued use of the App after changes become effective constitutes acceptance of the revised Agreement. The &quot;Last updated&quot; date at the top of this page will reflect material revisions.</p>

          <h2>16. Governing Law &amp; Disputes</h2>
          <p>This Agreement is governed by the laws of the jurisdiction in which App Axis Lab operates, without regard to conflict-of-law principles, except where mandatory consumer protection laws in your country provide otherwise. Any dispute shall be resolved in the courts of that jurisdiction, unless applicable law requires a different forum.</p>

          <h2>17. Children</h2>
          <p>The App is not intended for children under 13 years of age (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children as described in our Privacy Policy.</p>

          <h2>18. App Stores (Apple App Store &amp; Google Play)</h2>
          <p>If you obtained the App through the Apple App Store or Google Play, you agree that Apple and Google are not parties to this Agreement and have no responsibility or liability with respect to the App. Your use of the store is subject to that store&apos;s terms of service. This Agreement is between you and App Axis Lab only. On iOS, Apple and its subsidiaries are third-party beneficiaries of this Agreement and may enforce it against you.</p>

          <h2>19. Severability &amp; Entire Agreement</h2>
          <p>If any provision of this Agreement is held invalid or unenforceable, the remaining provisions remain in full force. This Agreement, together with our Privacy Policy, constitutes the entire agreement between you and App Axis Lab regarding the App and supersedes prior understandings on the same subject.</p>

          <h2>20. Contact</h2>
          <p>For questions about this EULA, contact App Axis Lab at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.</p>
        </div>
      </div>
    </PrivacyLayout>
  )
}
