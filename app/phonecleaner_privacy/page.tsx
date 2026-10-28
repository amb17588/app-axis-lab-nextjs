import type { Metadata } from 'next'
import PrivacyLayout from '@/components/PrivacyLayout'
import s from '@/styles/privacy.module.css'

export const metadata: Metadata = {
  title: 'AI Phone Storage Cleaner — Privacy Policy & EULA | App Axis Lab',
}

export default function PhoneCleanerPrivacy() {
  return (
    <PrivacyLayout
      appName="AI Phone Storage Cleaner"
      subtitle="Privacy Policy & End User License Agreement"
      lastUpdated="Last updated: October 28, 2026"
    >
      <div className={s.card}>
        <div className={s.privacyContent}>
          <p>
            This page contains both the <a href="#privacy">Privacy Policy</a> and the{' '}
            <a href="#eula">End User License Agreement (EULA)</a> for AI Phone Storage Cleaner. By
            downloading, installing, or using the App, you agree to both documents.
          </p>

          <h1 id="privacy">Privacy Policy</h1>
          <p>
            AI Phone Storage Cleaner (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is
            committed to protecting your personal information. This Privacy Policy explains what
            data the App uses, how it is used, and how it is safeguarded when you use the App to
            clean, optimize, and manage storage on your Android device.
          </p>

          <h2>1. Information We Collect</h2>

          <p><strong>a. Personal Information</strong></p>
          <p>
            We do not require account creation. The App does not ask for your name, email address,
            phone number, or location.
          </p>
          <p>If you contact us for support:</p>
          <ul>
            <li>Your email address</li>
            <li>Any information you choose to provide</li>
          </ul>

          <p><strong>b. Device Storage &amp; File Data</strong></p>
          <p>To scan and clean your device, the App reads:</p>
          <ul>
            <li>File names, sizes, paths, and types of files stored on your device (photos, videos, audio, documents, APKs, cache, etc.)</li>
            <li>Duplicate file information detected on your device</li>
            <li>Installed app names, package names, sizes, and last-used timestamps (for app management features)</li>
            <li>Storage usage statistics (used / free space on internal and external storage)</li>
          </ul>
          <div className={s.highlightBox}>
            <p>
              ✅ This data is processed entirely on your device. It is never sent to us or to any
              server we operate. It is not stored beyond your current session unless you
              explicitly save a scan report within the App.
            </p>
          </div>

          <p><strong>c. App Preferences</strong></p>
          <p>The App stores on your device:</p>
          <ul>
            <li>Scan history and saved reports</li>
            <li>User preferences (theme, notification settings, scheduled scan times)</li>
            <li>Onboarding completion status</li>
          </ul>

          <p><strong>d. Analytics &amp; Crash Data</strong></p>
          <p>
            The App uses <strong>Firebase Analytics</strong> and <strong>Firebase Crashlytics</strong>{' '}
            (by Google) to collect:
          </p>
          <ul>
            <li>Anonymized usage events (e.g., feature tapped, scan completed)</li>
            <li>Crash reports and diagnostic data to help us fix bugs</li>
            <li>Device model, OS version, and app version (no personally identifiable information)</li>
          </ul>
          <div className={s.highlightBox}>
            <p>
              ✅ This data is anonymized and aggregated. It does not identify you personally. You
              can opt out of analytics by disabling data sharing in the App&apos;s Settings.
            </p>
          </div>

          <h2>2. How We Use Information</h2>
          <ul>
            <li>Scan your device storage to detect junk files, duplicates, large files, and unused apps</li>
            <li>Perform cleaning and optimization operations you request</li>
            <li>Schedule automatic smart scans (with your permission)</li>
            <li>Send cleanup-reminder notifications (with your permission)</li>
            <li>Remember your preferences and scan history</li>
            <li>Improve the App through anonymized analytics</li>
            <li>Fix bugs using crash reports</li>
            <li>Respond to support queries</li>
          </ul>

          <h2>3. Permissions</h2>
          <p>The App requests the following Android permissions:</p>
          <ul>
            <li><strong>READ / WRITE EXTERNAL STORAGE:</strong> To scan and delete files on your device storage.</li>
            <li><strong>READ_MEDIA_IMAGES / VIDEO / AUDIO:</strong> To scan media files for duplicates and large files (Android 13+).</li>
            <li><strong>MANAGE_EXTERNAL_STORAGE:</strong> To access and clean all folders, including restricted ones (Android 11+).</li>
            <li><strong>PACKAGE_USAGE_STATS:</strong> To show last-used dates for installed apps so you can identify unused ones.</li>
            <li><strong>KILL_BACKGROUND_PROCESSES:</strong> To free RAM by stopping background app processes.</li>
            <li><strong>POST_NOTIFICATIONS:</strong> To send cleanup-reminder and scan-complete notifications.</li>
            <li><strong>VIBRATE / MODIFY_AUDIO:</strong> For haptic and sound feedback during interactions.</li>
            <li><strong>WRITE_SETTINGS:</strong> To apply certain device optimization settings.</li>
          </ul>
          <div className={s.warnBox}>
            <p>
              ⚠️ You may deny optional permissions, but some features may not function. The App
              will clearly explain why each permission is needed before requesting it.
            </p>
          </div>
          <p>
            The App does <strong>not</strong> request access to your microphone, camera, contacts,
            or location.
          </p>

          <h2>4. Advertising</h2>
          <p>
            The App may display advertisements served by <strong>Google AdMob</strong> and
            mediation partners (such as Pangle and Liftoff/Vungle). These ad networks may use
            advertising identifiers (e.g., Android Advertising ID) and cookies to show relevant ads.
          </p>
          <p>
            We do not share your personal data with advertisers. Ad networks operate under their
            own privacy policies:
          </p>
          <ul>
            <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google / AdMob Privacy Policy</a></li>
            <li><a href="https://www.pangleglobal.com/privacy" target="_blank" rel="noopener noreferrer">Pangle Privacy Policy</a></li>
            <li><a href="https://www.vungle.com/privacy/" target="_blank" rel="noopener noreferrer">Liftoff / Vungle Privacy Policy</a></li>
          </ul>
          <p>
            You can opt out of personalized ads at any time via{' '}
            <strong>Android Settings → Privacy → Ads → Opt out of Ads Personalization</strong>.
          </p>

          <h2>5. Third-Party Services</h2>
          <p>The App uses the following third-party services:</p>
          <ul>
            <li><strong>Firebase Analytics &amp; Crashlytics</strong> (Google) — anonymized usage and crash data</li>
            <li><strong>Firebase Remote Config</strong> (Google) — to update App configuration without a full update</li>
            <li><strong>Google AdMob</strong> — advertising</li>
            <li><strong>RevenueCat</strong> — subscription and in-app purchase management</li>
            <li><strong>Google Play Billing</strong> — payment processing</li>
          </ul>
          <p>Each third-party service is governed by its own privacy policy. We recommend reviewing:</p>
          <ul>
            <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
            <li><a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">RevenueCat Privacy Policy</a></li>
          </ul>

          <h2>6. Data Security</h2>
          <ul>
            <li>All file scanning and cleaning operations are performed locally on your device</li>
            <li>No file content or file data is transmitted to our servers</li>
            <li>Analytics data sent to Firebase is anonymized and encrypted in transit (TLS)</li>
            <li>We practice minimal data collection — we only collect what is necessary</li>
          </ul>

          <h2>7. Data Retention</h2>
          <ul>
            <li>Scan history and preferences are stored on your device until you clear the App&apos;s data or uninstall it</li>
            <li>Anonymized analytics data is retained by Firebase per Google&apos;s retention policy</li>
            <li>Support emails may be retained for up to 2 years</li>
          </ul>

          <h2>8. Background Processing</h2>
          <p>
            The App may use Android&apos;s <strong>WorkManager / Background Task</strong> API to
            perform scheduled smart scans. These scans run on your device and do not transmit file
            data externally. You can disable scheduled scans in the App&apos;s Settings.
          </p>

          <h2>9. Children&apos;s Privacy</h2>
          <p>
            The App is not intended for children under 13 years of age unless permitted by
            applicable law and under parental supervision.
          </p>
          <p>
            We do not knowingly collect personal data from children under 13. If we learn that such
            data has been collected, we will delete it promptly.
          </p>

          <h2>10. Your Privacy Rights</h2>
          <p>
            Because most App data is stored only on your device, you are in full control. You may:
          </p>
          <ul>
            <li>Clear scan history and reports from within the App&apos;s Settings</li>
            <li>Delete all App data by clearing storage in <strong>Android Settings → Apps → AI Phone Storage Cleaner → Clear Data</strong></li>
            <li>Uninstall the App to remove all locally stored data</li>
            <li>Request access to or deletion of any support emails you have sent us</li>
            <li>Opt out of personalized ads via Android Settings</li>
          </ul>
          <p>
            Contact: <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>
          </p>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be reflected with a
            new &quot;Privacy Policy last updated&quot; date at the top of this page. Continued use of the
            App after changes become effective constitutes your acceptance of the revised policy.
          </p>

          <h2>12. Contact</h2>
          <p>For privacy-related questions or requests, please contact us at:</p>
          <p><a href="mailto:support@appaxislab.com">support@appaxislab.com</a></p>

          <h1 id="eula">End User License Agreement (EULA)</h1>
          <p>
            This End User License Agreement (&quot;Agreement&quot;) is a legal agreement between you
            (&quot;User&quot; or &quot;you&quot;) and App Axis Lab (&quot;Licensor&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) for the{' '}
            <strong>AI Phone Storage Cleaner</strong> mobile application (the &quot;App&quot;). By
            downloading, installing, or using the App, you agree to be bound by this Agreement. If
            you do not agree, do not download, install, or use the App.
          </p>

          <h2>1. License Grant</h2>
          <p>
            Subject to your compliance with this Agreement, we grant you a limited, non-exclusive,
            non-transferable, revocable license to install and use the App on devices you own or
            control, solely for personal, non-commercial purposes, in accordance with this
            Agreement and applicable app store terms.
          </p>

          <h2>2. Restrictions</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Copy, modify, adapt, translate, or create derivative works of the App</li>
            <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the App, except where expressly permitted by law</li>
            <li>Rent, lease, lend, sell, sublicense, or distribute the App or any part of it</li>
            <li>Remove, alter, or obscure any proprietary notices or labels on the App</li>
            <li>Use the App to delete or modify files on a device you do not own or are not authorized to use</li>
            <li>Use the App for any unlawful purpose or in violation of any applicable laws or regulations</li>
            <li>Use automated systems or bots to access or operate the App without our written consent</li>
            <li>Attempt to use the App to interfere with the normal operation of your device&apos;s operating system</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>
            The App, including all content, features, design, trademarks, and software, is owned by
            App Axis Lab or its licensors and is protected by copyright, trademark, and other
            intellectual property laws. This Agreement does not transfer any ownership rights to
            you.
          </p>
          <p>
            Android and Google Play are trademarks of Google LLC. The App is an independent product
            and is not affiliated with, endorsed by, or sponsored by Google or any device
            manufacturer.
          </p>

          <h2>4. Use of the App &amp; Your Device</h2>
          <p>
            The App helps you scan and remove junk files, duplicates, large files, and manage
            installed apps on your Android device. <strong>You are solely responsible</strong> for
            deciding which files and apps to delete. Deleted files may not be recoverable.
          </p>
          <div className={s.warnBox}>
            <p>
              ⚠️ Always review files carefully before deletion. We are not responsible for any data
              loss resulting from your use of the App&apos;s cleaning or deletion features.
            </p>
          </div>

          <h2>5. Compatibility Disclaimer</h2>
          <p>
            The App is designed for Android devices and is available on Android only. We do not
            guarantee that the App will work with every device model, Android version, firmware, or
            OEM customization. Device manufacturers and Google may update their software in ways
            that affect how the App functions.
          </p>
          <p>
            Some features (such as RAM boost, background process management, or deep storage
            access) may require additional permissions or may be restricted by your device
            manufacturer.
          </p>

          <h2>6. Permissions &amp; Device Access</h2>
          <p>
            The App requests storage, notification, and other permissions as described in the
            Privacy Policy to perform its core cleaning and optimization functions. You may deny
            permissions, but this may prevent certain features from working. Use of permissions is
            described in our Privacy Policy.
          </p>

          <h2>7. Third-Party Services</h2>
          <p>
            The App integrates with third-party services including Google Firebase, Google AdMob,
            RevenueCat, and advertising mediation partners. These services are governed by their
            own terms and privacy policies. We are not responsible for third-party services,
            content, or practices.
          </p>

          <h2>8. Subscriptions &amp; In-App Purchases</h2>
          <p>
            If the App offers paid features, subscriptions, or in-app purchases, payment and
            billing are processed by Google Play Store. Refunds and billing disputes are handled
            according to Google Play&apos;s policies. Subscription management is handled through
            RevenueCat.
          </p>
          <p>We do not store your full payment card details.</p>

          <h2>9. Disclaimer of Warranties</h2>
          <p>
            THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND,
            WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO
            NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR COMPATIBLE WITH
            YOUR DEVICE. THE APP IS A CLEANING AID — ALWAYS VERIFY FILES BEFORE DELETING THEM. WE
            ARE NOT RESPONSIBLE FOR DATA LOSS.
          </p>

          <h2>10. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, APP AXIS LAB AND ITS AFFILIATES,
            OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT,
            INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA, FILES,
            OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP,
            INCLUDING ANY EFFECT ON YOUR DEVICE OR DATA, EVEN IF WE HAVE BEEN ADVISED OF THE
            POSSIBILITY OF SUCH DAMAGES.
          </p>
          <p>
            Our total liability for any claim arising out of or relating to this Agreement or the
            App shall not exceed the greater of (a) the amount you paid us for the App in the
            twelve (12) months before the claim, or (b) Fifty U.S. Dollars (USD $50), where
            permitted by law.
          </p>

          <h2>11. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless App Axis Lab from any claims, damages, losses,
            liabilities, and expenses (including reasonable legal fees) arising from your use of
            the App, your deletion of files or apps through the App, or your violation of this
            Agreement or applicable law.
          </p>

          <h2>12. Termination</h2>
          <p>
            This license is effective until terminated. We may suspend or terminate your access to
            the App at any time if you breach this Agreement. Upon termination, you must cease all
            use of the App and delete all copies from your devices. Sections that by their nature
            should survive termination will survive.
          </p>

          <h2>13. Changes to This Agreement</h2>
          <p>
            We may update this EULA from time to time. Continued use of the App after changes
            become effective constitutes your acceptance of the revised Agreement. The &quot;EULA last
            updated&quot; date at the top of this page will reflect material revisions.
          </p>

          <h2>14. Governing Law &amp; Disputes</h2>
          <p>
            This Agreement is governed by the laws of the jurisdiction in which App Axis Lab
            operates, without regard to conflict-of-law principles, except where mandatory
            consumer protection laws in your country provide otherwise. Any dispute shall be
            resolved in the courts of that jurisdiction, unless applicable law requires a
            different forum.
          </p>

          <h2>15. Children</h2>
          <p>
            The App is not intended for children under 13 years of age unless permitted by
            applicable law and under parental supervision.
          </p>

          <h2>16. Google Play (Android)</h2>
          <p>
            If you obtained the App through Google Play, you agree that Google LLC is not a party
            to this Agreement and has no responsibility or liability with respect to the App. Your
            use of Google Play is subject to Google Play&apos;s terms of service.
          </p>

          <h2>17. Severability &amp; Entire Agreement</h2>
          <p>
            If any provision of this Agreement is held invalid or unenforceable, the remaining
            provisions remain in full force. This Agreement, together with our Privacy Policy,
            constitutes the entire agreement between you and App Axis Lab regarding the App and
            supersedes all prior understandings on the same subject.
          </p>

          <h2>18. Contact</h2>
          <p>For questions about this EULA, contact App Axis Lab at:</p>
          <p><a href="mailto:support@appaxislab.com">support@appaxislab.com</a></p>
        </div>
      </div>
    </PrivacyLayout>
  )
}
