import type { Metadata } from 'next'
import PrivacyLayout from '@/components/PrivacyLayout'
import s from '@/styles/privacy.module.css'

export const metadata: Metadata = {
  title: 'Notch Mate — Privacy Policy & EULA | App Axis Lab',
}

export default function NotchMatePrivacy() {
  return (
    <PrivacyLayout
      appName="Notch Mate"
      subtitle="Notch Gesture Launcher — Privacy Policy & End User License Agreement"
      lastUpdated="Last updated: August 21, 2026"
    >
      <div className={s.card}>
        <div className={s.privacyContent}>
          <p>
            This page contains the <a href="#privacy">Privacy Policy</a> and{' '}
            <a href="#eula">End User License Agreement (EULA)</a> for Notch Mate. By
            downloading, installing, or using the App, you agree to both documents.
          </p>

          <h1 id="privacy">Privacy Policy</h1>

          <h2>Scope</h2>
          <p>
            Welcome to Notch Mate&apos;s Privacy Policy. Your privacy and online security are
            important to us. This Privacy Policy explains how Notch Mate (&quot;we&quot;, &quot;our&quot;, or
            &quot;us&quot;) collects, uses, protects, and shares your personal information when you use
            our Android gesture-launcher application and related services (the &quot;App&quot; or
            &quot;Services&quot;) available on the Google Play Store. Notch Mate is published under
            the package name <code>com.appaxislab.notchmate</code> and may also be listed as
            &quot;Action Notch.&quot;
          </p>
          <p>If you do not agree with this Privacy Policy, please do not use our Services.</p>

          <h2>Overview</h2>
          <p>
            Notch Mate turns your phone&apos;s camera cutout (&quot;notch&quot;) into a gesture pad.
            Tapping, double-tapping, long-pressing, or swiping the notch fires an action you
            choose — system navigation, hardware toggles, media control, silent capture, app
            launching, or floating tools — subject to per-app safeguards and rules you configure.
          </p>
          <div className={s.highlightBox}>
            <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
              <li><strong>Notch Mate does not require an account.</strong> All gesture settings, rules, and notes are stored only on your device.</li>
              <li><strong>Notch Mate&apos;s gesture, capture, and automation engine runs entirely on-device.</strong> Network access is limited to in-app purchases, ads, anonymous crash/diagnostic reporting, and remote ad configuration — described in full below.</li>
              <li><strong>Your captured photos, videos, and audio never leave your device</strong> unless you personally choose to share them using your device&apos;s share sheet.</li>
            </ul>
          </div>

          <h2>1. Account Registration</h2>
          <p>
            Notch Mate does not require you to create an account, and we do not collect a
            name, email address, or password to use the App. All gesture, rule, and appearance
            settings are stored locally on your device using on-device storage
            (MMKV/SharedPreferences), and are never transmitted to us.
          </p>

          <h2>2. Information We Collect</h2>

          <p><strong>2.1 Settings and Configuration You Provide</strong></p>
          <ul>
            <li>Gesture-to-action mappings, calibration data, timing and haptics preferences, and appearance settings</li>
            <li>Per-app safeguards, blacklists, and rule-based overrides you create</li>
            <li>Notes you create through the Notes tab</li>
            <li>Contacts you select for a speed-dial gesture (read from your device&apos;s contacts only to populate a picker; never uploaded)</li>
            <li>Automations, shortcuts, and website/activity links you configure</li>
          </ul>
          <p>All of the above is stored exclusively on your device. We do not operate a server that receives, stores, or has access to this information.</p>

          <p><strong>2.2 Silent Capture Content</strong></p>
          <p>If you configure a silent photo, video, or audio-capture gesture, the resulting file is written directly to the App&apos;s private on-device storage (not your device&apos;s shared gallery) and is deleted automatically if you uninstall the App. We never receive, view, or transmit this content. You may choose to share a captured file yourself using Android&apos;s share sheet, which is entirely your action and outside our control.</p>

          <p><strong>2.3 Device Permission Data</strong></p>
          <p>To operate its core gesture, capture, and toggle features, the App reads certain device state locally — for example, which app is currently in the foreground, whether the keyboard is visible, call/orientation state, and Wi‑Fi/Bluetooth status. This information is read and used entirely on-device to evaluate guards and fire actions; it is not collected by us, logged remotely, or transmitted anywhere.</p>

          <p><strong>2.4 Billing Information</strong></p>
          <p>If you purchase a premium unlock, payment is processed by the Google Play Store and our subscription-management partner, RevenueCat. We do not directly collect or store your payment card details. We may receive a purchase/entitlement status from RevenueCat to unlock premium features on your device.</p>

          <p><strong>2.5 Advertising Data</strong></p>
          <p>If you use the free version of the App, Google AdMob may serve ads and, in doing so, may collect device and advertising identifiers as described in Section 9 below.</p>

          <p><strong>2.6 Crash &amp; Diagnostic Data</strong></p>
          <p>We use Firebase Crashlytics to automatically collect crash reports and diagnostic logs when the App fails unexpectedly. This may include device model, OS version, App version, a stack trace, and an anonymous installation identifier. Crashlytics does not receive your notes, gesture configuration, contacts, or any captured photo/video/audio content — those remain on-device as described above.</p>

          <p><strong>2.7 Remote Configuration Data</strong></p>
          <p>We use Firebase Remote Config to remotely adjust ad-related behavior (for example, which ad placements are active or how often they appear) without shipping an App update. Remote Config communicates with Firebase using a device/installation identifier to fetch configuration values; it does not read or transmit your notes, gesture configuration, contacts, or captured content.</p>

          <h2>3. How We Use Your Information</h2>
          <p>Because nearly all App data stays on your device, our use of information is limited to:</p>
          <ul>
            <li>Operating the gesture pad, silent capture, automations, and safeguards you configure — entirely on-device</li>
            <li>Unlocking premium features you purchase, via Google Play Billing and RevenueCat</li>
            <li>Serving ads through Google AdMob (free version only)</li>
            <li>Diagnosing and fixing crashes, via Firebase Crashlytics</li>
            <li>Remotely tuning ad placement and behavior, via Firebase Remote Config</li>
            <li>Complying with legal obligations, where applicable</li>
          </ul>
          <p>We do not use your information for profiling, do not build a server-side account, and do not sell your information.</p>

          <h2>4. How We Share Your Information</h2>

          <p><strong>4.1 We Do Not Operate a Server for Your App Data</strong></p>
          <p>Gesture settings, rules, notes, contacts you pick for speed dial, and captured media stay on your device and are never sent to us or to any third party by the App.</p>

          <p><strong>4.2 With Our Billing Provider</strong></p>
          <p>
            If you make a purchase, Google Play Billing and RevenueCat process the transaction
            and provide us with entitlement status (e.g., &quot;premium unlocked&quot;) so the App can
            enable purchased features. See{' '}
            <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">
              RevenueCat&apos;s Privacy Policy
            </a>.
          </p>

          <p><strong>4.3 With Our Advertising Provider</strong></p>
          <p>If you use the free version, Google AdMob serves ads within the App and may collect advertising identifiers and device information under its own privacy policy. See Section 9.</p>

          <p><strong>4.4 With Our Crash Reporting &amp; Remote Configuration Provider</strong></p>
          <p>We use Google Firebase (Crashlytics and Remote Config) to receive anonymous crash/diagnostic data and to fetch ad-configuration values. Firebase processes this data under Google&apos;s privacy policy. See Section 9.</p>

          <p><strong>4.5 Legal Requirements</strong></p>
          <p>We may disclose information if required by law, regulation, legal process, or governmental request, or when we believe disclosure is necessary to protect the rights, property, or safety of Notch Mate, our users, or others.</p>

          <p><strong>4.6 Business Transfers</strong></p>
          <p>If Notch Mate is involved in a merger, acquisition, reorganization, or sale of assets, any information we hold (such as billing/entitlement records) may be transferred as part of that transaction. We will notify you of any material change in ownership or use of your information.</p>

          <p>We do <strong>not</strong> sell your personal information.</p>

          <h2 id="permissions">5. Permissions</h2>
          <p>Notch Mate may request the following device permissions. Every permission below is used strictly on-device to power a specific gesture or safeguard; none of them is used to collect data for us.</p>
          <ul>
            <li><strong>Accessibility Service:</strong> Required for the notch gesture pad to detect taps/swipes and identify the foreground app while the App is backgrounded or closed. The service is configured to receive only window-state-change events (which app is in front, keyboard visibility) — it is never configured to read window text or on-screen content.</li>
            <li><strong>Display over other apps (overlay):</strong> Draws the invisible hotspot over the notch area so gestures can be detected. The overlay is sized to the calibrated hotspot and never intercepts touches outside it.</li>
            <li><strong>Camera &amp; Microphone:</strong> Used for the built-in QR/barcode scanner and for silent photo/video/audio capture gestures you configure. Captured content stays on-device (see Section 2.2).</li>
            <li><strong>Contacts (read/write):</strong> Used only to let you pick a contact for a speed-dial gesture. Contacts are read locally for the picker and are never uploaded.</li>
            <li><strong>Phone state / Call phone:</strong> Used for the call-related gesture action (e.g., dialing your chosen speed-dial contact) and for the in-call safeguard that can disable the notch during an active call.</li>
            <li><strong>Notifications:</strong> Used to show status/foreground-service notifications for features such as ongoing silent capture.</li>
            <li><strong>Bluetooth &amp; Wi‑Fi state:</strong> Used for hardware-toggle gesture actions and to reflect current connectivity status. On modern Android versions, Wi‑Fi, airplane mode, and location cannot be toggled directly by third-party apps, so those actions open the relevant system settings panel instead.</li>
            <li><strong>Usage access / query all installed apps:</strong> Used to power the app picker, per-app blacklist, and per-app rule overrides. This data is read and evaluated only on-device.</li>
            <li><strong>Storage / media access:</strong> Used to attach images to notes and to let you export or share captured content you choose to share.</li>
            <li><strong>System settings (write) &amp; Vibrate:</strong> Used for toggle actions (e.g., flashlight, ringer mode) and haptic feedback on gestures.</li>
            <li><strong>Foreground services:</strong> Used to keep silent capture and certain background gesture features running reliably.</li>
            <li><strong>Internet:</strong> Used only for in-app purchases (Google Play Billing / RevenueCat), serving ads (Google AdMob), fetching remote ad configuration (Firebase Remote Config), and sending anonymous crash reports (Firebase Crashlytics). No other feature in the App uses network access.</li>
          </ul>
          <p>You can deny or later revoke most of these permissions in your device&apos;s App Settings; the App will explain in-app when a specific feature cannot function without its required permission, and the onboarding flow specifically requires the Accessibility Service and overlay permission before the notch gesture pad will work at all.</p>

          <h2>6. Data Security</h2>
          <p>Because gesture settings, notes, rules, and captured media are stored locally in the App&apos;s private app-storage sandbox (not a shared or public location), they are protected by Android&apos;s standard per-app sandboxing and are removed automatically when you uninstall the App. We use industry-standard security practices for the limited billing/entitlement data we do handle. No system is completely secure, and we cannot guarantee absolute security.</p>
          <p>You are responsible for keeping your device secure, since anyone with access to an unlocked device could access locally stored App data.</p>

          <h2>7. Cookies &amp; Tracking Technologies</h2>
          <p>The App itself does not use cookies. Our advertising partner, Google AdMob, may use device identifiers and similar technologies within ad content to serve and measure ads. Firebase Crashlytics and Firebase Remote Config use a device/installation identifier to associate crash reports and configuration fetches with an anonymous install, not with you personally. You can manage ad personalization through your device&apos;s Google Settings (Settings &gt; Google &gt; Ads) or by resetting your advertising ID.</p>

          <h2>8. Subscriptions &amp; Payments</h2>
          <p>Notch Mate may offer a premium unlock or subscription. When you purchase premium access:</p>
          <ul>
            <li>Payments are processed by the Google Play Store. We do not directly collect or store your full payment card details.</li>
            <li>We receive purchase/entitlement status via RevenueCat to unlock premium features on your device.</li>
            <li>Refunds and billing disputes are handled according to Google Play&apos;s policies.</li>
            <li>You can manage or cancel subscriptions through your Google Play account settings.</li>
          </ul>

          <h2 id="third-party">9. Third-Party Services</h2>
          <p>Notch Mate integrates with a small, fixed set of third-party services — for billing, advertising, crash reporting, and remote ad configuration, never to sync your gesture data, notes, or captures:</p>
          <ul>
            <li>Google Play Billing and RevenueCat, for processing purchases and delivering entitlement status</li>
            <li>Google AdMob (react-native-google-mobile-ads), for serving ads in the free version of the App</li>
            <li>Google Firebase Crashlytics, for anonymous crash and diagnostic reporting</li>
            <li>Google Firebase Remote Config, for remotely tuning ad placement and behavior</li>
          </ul>
          <p>
            These services operate under their own privacy policies. We recommend reviewing{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Google&apos;s Privacy Policy
            </a>,{' '}
            <a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener noreferrer">
              Google AdMob&apos;s data disclosure
            </a>,{' '}
            <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">
              Firebase&apos;s Privacy and Security policy
            </a>, and{' '}
            <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">
              RevenueCat&apos;s Privacy Policy
            </a>.
          </p>

          <h2>10. Your Rights</h2>

          <p><strong>10.1 Access &amp; Update</strong></p>
          <p>Because your gesture settings, rules, notes, and captured content are stored only on your device, you can view, change, or delete them at any time directly within the App or by clearing the App&apos;s storage in your device&apos;s App Settings.</p>

          <p><strong>10.2 Notification Preferences</strong></p>
          <p>You can control notification preferences through your device settings.</p>

          <p><strong>10.3 Permission Revocation</strong></p>
          <p>You can revoke any granted permission (Accessibility Service, overlay, camera, microphone, contacts, etc.) at any time through your device&apos;s App Settings. Revoking a permission may disable the corresponding gesture or feature.</p>

          <p><strong>10.4 Account Closure</strong></p>
          <div className={s.highlightBox}>
            <strong>Note:</strong> There is no server-side account to delete. Uninstalling the App permanently removes all locally stored settings, notes, rules, and captured content from your device. Purchase/entitlement records are retained by Google Play and RevenueCat, and anonymous crash/diagnostic records are retained by Firebase Crashlytics, per their own retention policies.
          </div>

          <p><strong>10.5 For EU/EEA Residents (GDPR)</strong></p>
          <p>If you are located in the European Union or European Economic Area, you have rights under the General Data Protection Regulation (GDPR), including the right to access, rectify, erase, restrict processing, data portability, and to object to certain processing, to the extent we process any personal data (primarily billing/entitlement, advertising, and crash/diagnostic data). You also have the right to lodge a complaint with a supervisory authority.</p>

          <p><strong>10.6 For California Residents (CCPA/CPRA)</strong></p>
          <p>If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), including the right to know what personal information is collected, the right to request deletion, and the right to opt out of the sale or sharing of personal information. We do not sell personal information.</p>

          <p>
            To exercise your privacy rights, contact us at{' '}
            <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>. We aim to
            respond within 30 days.
          </p>

          <h2>11. Data Retention</h2>
          <p>Gesture settings, rules, notes, and captured media remain on your device only until you delete them or uninstall the App — we do not separately retain copies. Purchase/entitlement records are retained by Google Play and RevenueCat, and anonymous crash/diagnostic and remote-config fetch records are retained by Firebase, for as long as required to support your purchase history, diagnose issues, and comply with legal obligations.</p>

          <h2>12. Children&apos;s Privacy</h2>
          <p>Notch Mate is not intended for users under 13 years of age (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children. If we discover that we have collected personal information from a child without appropriate consent, we will take steps to delete it promptly.</p>
          <p>
            If you are a parent or guardian and believe your child has provided us with personal
            information, please contact us at{' '}
            <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.
          </p>

          <h2>13. International Transfers</h2>
          <p>Billing/entitlement, advertising, and crash/diagnostic data handled by our third-party providers (Google, Firebase, RevenueCat) may be processed and stored in countries other than your own, including countries that may have different data protection laws. Where we transfer such data internationally, appropriate safeguards such as standard contractual clauses or equivalent mechanisms are used as required by applicable law.</p>

          <h2>14. Legal Basis for Processing</h2>
          <p>Where applicable law requires a legal basis for processing personal data, we rely on one or more of the following:</p>
          <ul>
            <li><strong>Consent:</strong> When you agree to specific processing, such as granting a device permission or viewing ads.</li>
            <li><strong>Contractual necessity:</strong> To fulfill a premium purchase you make through Google Play.</li>
            <li><strong>Legal obligations:</strong> To comply with applicable laws and regulations.</li>
            <li><strong>Legitimate interests:</strong> To operate and improve the App, ensure security, and support our business operations, balanced against your rights and interests.</li>
          </ul>

          <h2>15. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Changes take effect upon posting, and we will update the &quot;Last updated&quot; date at the top of this page. For material changes that significantly affect your rights, we will provide notice through the App or other appropriate means.</p>
          <p>We encourage you to review this policy periodically.</p>

          <h2>16. Contact Us</h2>
          <p>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:support@appaxislab.com">support@appaxislab.com</a></li>
            <li><strong>Developer:</strong> App Axis Lab</li>
          </ul>

          <hr className={s.divider} />

          <h1 id="eula">End User License Agreement (EULA)</h1>
          <p>
            This End User License Agreement (&quot;Agreement&quot;) is a legal agreement between you
            (&quot;User&quot; or &quot;you&quot;) and App Axis Lab (&quot;Licensor&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) for the Notch
            Mate mobile application (the &quot;App&quot;). By downloading, installing, or using the
            App, you agree to be bound by this Agreement. If you do not agree, do not download,
            install, or use the App.
          </p>

          <h2>1. License Grant</h2>
          <p>Subject to your compliance with this Agreement, we grant you a limited, non-exclusive, non-transferable, revocable license to install and use the App on Android devices you own or control, solely for personal, non-commercial purposes, in accordance with this Agreement and applicable Google Play terms.</p>

          <h2>2. Restrictions</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Copy, modify, adapt, or create derivative works of the App</li>
            <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the App, except where expressly permitted by law</li>
            <li>Rent, lease, lend, sell, sublicense, or distribute the App or any part of it</li>
            <li>Remove, alter, or obscure any proprietary notices or labels on the App</li>
            <li>Use the App for any unlawful purpose or in violation of any applicable laws or regulations</li>
            <li>Use the App&apos;s Accessibility Service, overlay, or silent-capture features to surveil, record, or capture another person without their knowledge or consent where required by applicable law</li>
            <li>Interfere with or disrupt the App, its services, or connected networks</li>
            <li>Use automated systems or bots to access or use the App without our written consent</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>The App, including its design, trademarks, software, and content (excluding your data), is owned by App Axis Lab or its licensors and is protected by copyright, trademark, and other intellectual property laws. This Agreement does not transfer any ownership rights to you. You retain ownership of the notes, rules, gesture configurations, and captured media you create through the App.</p>

          <h2>4. User Content &amp; Local Data</h2>
          <p>You may create notes, gesture mappings, automations, rules, and silently captured photos, videos, and audio recordings through the App (&quot;User Content&quot;). You retain ownership of your User Content, which is stored solely on your device. You are solely responsible for how you use the App&apos;s silent-capture and accessibility-driven features, including compliance with any applicable consent or wiretapping laws in your jurisdiction.</p>
          <p>Notch Mate is a gesture-automation and utility tool. It does not back up, sync, or transmit your User Content to us, and we have no ability to access, recover, or restore User Content that is lost, corrupted, or deleted from your device (including as a result of uninstalling the App).</p>

          <h2>5. Device Security</h2>
          <p>
            You are responsible for the security of your device, since captured content, notes,
            and settings are stored locally and accessible to anyone with access to your
            unlocked device. Notify us promptly at{' '}
            <a href="mailto:support@appaxislab.com">support@appaxislab.com</a> if you discover a
            security issue in the App.
          </p>

          <h2>6. Permissions &amp; Device Access</h2>
          <p>
            The App may request access to Accessibility Service, display-over-other-apps
            (overlay), camera, microphone, contacts, phone state, notifications, Bluetooth,
            Wi‑Fi state, installed-apps/usage access, storage, and system settings to support
            the features described in our <a href="#privacy">Privacy Policy</a>. Granting the
            Accessibility Service and overlay permission is required for the core notch gesture
            pad to function. You may deny other permissions, but related features may not
            function.
          </p>

          <h2>7. Known Capability Limits</h2>
          <p>Some actions are constrained by the Android platform and cannot be changed by us:</p>
          <ul>
            <li>Wi‑Fi (Android 10+), airplane mode, and location cannot be toggled directly by a third-party app; the corresponding actions open the relevant system settings panel instead.</li>
            <li>Split-screen may be unavailable on some device manufacturers&apos; builds.</li>
            <li>The Take Screenshot action requires Android 11 (API 30) or higher.</li>
            <li>Reading another app&apos;s in-app shortcuts requires the default-launcher role, so this feature may return no results on most devices.</li>
          </ul>

          <h2>8. Third-Party Services</h2>
          <p>
            The App integrates third-party services solely for billing (Google Play Billing,
            RevenueCat), advertising (Google AdMob), crash reporting (Google Firebase
            Crashlytics), and remote ad configuration (Google Firebase Remote Config), as
            described in our <a href="#privacy">Privacy Policy</a>. These services are governed
            by their own terms and privacy policies. We are not responsible for third-party
            services, content, or practices.
          </p>

          <h2>9. Subscriptions &amp; In-App Purchases</h2>
          <p>Notch Mate may offer a premium unlock, subscription, or in-app purchases to remove ads and/or enable additional features. Payment and billing are processed by the Google Play Store and RevenueCat. Refunds and billing disputes are handled according to Google Play&apos;s policies. We do not store your full payment card details.</p>
          <p>Free trials, if offered, convert to paid subscriptions unless cancelled before the trial ends, in accordance with Google Play&apos;s rules.</p>

          <h2>10. Disclaimer of Warranties</h2>
          <p>THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE, OR THAT ANY GESTURE, TOGGLE, AUTOMATION, OR CAPTURE ACTION WILL BEHAVE IDENTICALLY ACROSS ALL ANDROID DEVICES, MANUFACTURERS, OR OS VERSIONS, INCLUDING THE CAPABILITY LIMITS DESCRIBED IN SECTION 7.</p>

          <h2>11. Limitation of Liability</h2>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, APP AXIS LAB AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP, INCLUDING LOSS OF LOCALLY STORED NOTES, RULES, SETTINGS, OR CAPTURED MEDIA.</p>
          <p>OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE APP SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US FOR THE APP IN THE TWELVE (12) MONTHS BEFORE THE CLAIM, OR (B) FIFTY U.S. DOLLARS (USD $50), WHERE PERMITTED BY LAW.</p>

          <h2>12. Indemnification</h2>
          <p>You agree to indemnify and hold harmless App Axis Lab from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from your use of the App, your User Content, your use of the silent-capture or accessibility-driven features with respect to third parties, or your violation of this Agreement or applicable law.</p>

          <h2>13. Termination</h2>
          <p>This license is effective until terminated. We may suspend or terminate your access to the App at any time if you breach this Agreement. Upon termination, you must cease all use of the App and delete all copies from your devices. Sections that by their nature should survive termination will survive.</p>

          <h2>14. Changes to This Agreement</h2>
          <p>We may update this EULA from time to time. Continued use of the App after changes become effective constitutes acceptance of the revised Agreement. The &quot;Last updated&quot; date at the top of this page will reflect material revisions.</p>

          <h2>15. Governing Law &amp; Disputes</h2>
          <p>This Agreement is governed by the laws of the jurisdiction in which App Axis Lab operates, without regard to conflict-of-law principles, except where mandatory consumer protection laws in your country provide otherwise. Any dispute shall be resolved in the courts of that jurisdiction, unless applicable law requires a different forum.</p>

          <h2>16. Children</h2>
          <p>The App is not intended for children under 13 years of age (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children as described in our Privacy Policy.</p>

          <h2>17. Google Play (Android)</h2>
          <p>Notch Mate is distributed exclusively through Google Play for Android devices. You agree that Google LLC is not a party to this Agreement and has no responsibility or liability with respect to the App. Your use of Google Play is subject to Google Play&apos;s terms of service.</p>

          <h2>18. Severability &amp; Entire Agreement</h2>
          <p>If any provision of this Agreement is held invalid or unenforceable, the remaining provisions remain in full force. This Agreement, together with our Privacy Policy, constitutes the entire agreement between you and App Axis Lab regarding the App and supersedes prior understandings on the same subject.</p>

          <h2>19. Contact</h2>
          <p>For questions about this EULA, contact App Axis Lab at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.</p>
        </div>
      </div>
    </PrivacyLayout>
  )
}
