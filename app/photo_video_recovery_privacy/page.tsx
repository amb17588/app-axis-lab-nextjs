import type { Metadata } from 'next'
import PrivacyLayout from '@/components/PrivacyLayout'
import s from '@/styles/privacy.module.css'

export const metadata: Metadata = {
  title: 'Photos & Videos Recovery — Privacy Policy & EULA | App Axis Lab',
}

export default function PhotoVideoRecoveryPrivacy() {
  return (
    <PrivacyLayout
      appName="Photos & Videos Recovery"
      subtitle="Privacy Policy & End User License Agreement"
      lastUpdated="Last updated: November 10, 2026"
    >
      <div className={s.card}>
        <div className={s.privacyContent}>
          <p>
            This page contains the <a href="#privacy">Privacy Policy</a> and{' '}
            <a href="#eula">End User License Agreement (EULA)</a> for Photos &amp; Videos Recovery. By using the
            App, you agree to both documents.
          </p>

    <h1 id="privacy">Privacy Policy</h1>
    <p>
      Photos &amp; Videos Recovery (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains what information the App collects, how it is used, and how it is safeguarded when you use the App to recover deleted photos, videos, and audio files from your device.
    </p>

    <h2>1. Information We Collect</h2>
    <h3>a. Personal Information</h3>
    <p>We do not require account creation, and the App does not ask for your name, email address, phone number, or location.</p>
    <p>If you contact us for support, we may collect:</p>
    <ul>
      <li>Your email address</li>
      <li>Any information you choose to provide</li>
    </ul>
    <h3>b. Media &amp; Storage Data</h3>
    <p>To scan and recover deleted files, the App accesses:</p>
    <ul>
      <li>Your device&apos;s media library — photos, videos, and audio files you grant access to</li>
      <li>File metadata such as file name, size, type, and modification date</li>
      <li>Thumbnails generated locally for recovered file previews</li>
    </ul>
    <p>Note:</p>
    <ul>
      <li>All media scanning and recovery happens entirely on your device</li>
      <li>Your photos, videos, and audio files are never uploaded to us or any server we operate</li>
      <li>Recovery results are stored only on your device and cleared when you uninstall the App</li>
    </ul>
    <h3>c. App Preferences</h3>
    <p>The App stores on your device:</p>
    <ul>
      <li>Scan history and recovered file records (stored in a local database)</li>
      <li>Appearance settings (light / dark / system)</li>
      <li>Whether you have completed onboarding</li>
      <li>Language and localization preferences</li>
    </ul>
    <h3>d. Usage &amp; Crash Data</h3>
    <p>The App uses Firebase Analytics and Firebase Crashlytics to help us understand how the App is used and to fix crashes. These services may collect:</p>
    <ul>
      <li>Anonymous usage events (screens visited, features used)</li>
      <li>Crash reports and diagnostic information</li>
      <li>Device type, OS version, and App version</li>
    </ul>
    <p>Note: </p>

    <h2>2. How We Use Information</h2>
    <ul>
      <li>Scan your device&apos;s media library to find and recover deleted photos, videos, and audio</li>
      <li>Display previews and thumbnails of recoverable files</li>
      <li>Save recovered files to your chosen location on your device</li>
      <li>Remember your scan history and preferences</li>
      <li>Improve App performance and fix bugs using crash and usage data</li>
      <li>Respond to support queries</li>
    </ul>

    <h2>3. Permissions</h2>
    <ul>
      <li><strong>Read Media (Photos / Videos / Audio):</strong> Required to scan your device&apos;s media library and display recoverable files. Requested via Android&apos;s granular media permissions.</li>
      <li><strong>Read External Storage (Android 9 and below):</strong> Required to access media files on older Android versions.</li>
      <li><strong>Internet / Network Access:</strong> Used for Firebase Analytics, Crashlytics, Remote Config, and ads (if applicable).</li>
    </ul>
    <p>The App does not request access to your microphone, camera, contacts, or location.</p>

    <h2>4. Advertising</h2>
    <p>The App may display advertisements provided by Google AdMob. AdMob may use your advertising identifier (GAID) and other non-personally-identifiable signals to show relevant ads.</p>
    <p>You can opt out of personalized ads at any time in your Android device settings under <strong>Google → Ads → Opt out of Ads Personalization</strong>.</p>
    <p>For more information, see Google&apos;s privacy policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></p>

    <h2>5. Third-Party Services</h2>
    <p>The App integrates the following third-party services:</p>
    <ul>
      <li><strong>Firebase Analytics &amp; Crashlytics (Google):</strong> Usage analytics and crash reporting</li>
      <li><strong>Firebase Remote Config (Google):</strong> Remote feature configuration</li>
      <li><strong>Google AdMob:</strong> Advertising</li>
      <li><strong>RevenueCat:</strong> In-app purchase and subscription management</li>
    </ul>
    <p>We recommend reviewing the privacy policies of these providers:</p>
    <ul>
      <li>Google / Firebase: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></li>
      <li>RevenueCat: <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">revenuecat.com/privacy</a></li>
    </ul>

    <h2>6. Data Security</h2>
    <ul>
      <li>All media scanning and recovery is processed locally on your device</li>
      <li>No media files, photos, or videos are ever transmitted to our servers</li>
      <li>Local database (SQLite) stores only file metadata and scan records — not your actual media content</li>
      <li>Communication with Firebase and AdMob services uses encrypted (TLS) connections</li>
      <li>Minimal data collection — we only collect what is necessary for the App to function</li>
    </ul>

    <h2>7. Data Retention</h2>
    <ul>
      <li>Scan history and app preferences are stored on your device until you clear the App&apos;s data or uninstall the App</li>
      <li>Your media files are never stored or retained by us</li>
      <li>Firebase Analytics data is retained per Google&apos;s standard retention policies</li>
      <li>Support emails may be retained for a reasonable period to resolve your query</li>
    </ul>

    <h2>8. Recovery Disclaimer</h2>
    <p>The App can only recover files that have not yet been permanently overwritten by your device&apos;s storage system. Recovery success depends on your device model, Android version, storage type, and how much time has passed since deletion. We cannot guarantee that all deleted files will be recoverable.</p>

    <h2>9. Children&apos;s Privacy</h2>
    <p>The App is not intended for children under 13 years of age unless permitted by applicable law and under parental supervision.</p>
    <p>We do not knowingly collect personal data from children under 13. If we learn that such data has been collected, we will delete it promptly.</p>

    <h2>10. Your Privacy Rights</h2>
    <p>Because the App stores its data only on your device, you are in full control of it. You may:</p>
    <ul>
      <li>Clear scan history from within the App</li>
      <li>Delete all App data by clearing the App&apos;s storage in Android Settings or by uninstalling the App</li>
      <li>Revoke media permissions at any time in Android Settings → Apps → Photos &amp; Videos Recovery → Permissions</li>
      <li>Request access to or deletion of any support emails you have sent us</li>
    </ul>
    <p>Contact: <a href="mailto:support@appaxislab.com">support@appaxislab.com</a></p>

    <h2>11. Changes to This Policy</h2>
    <p>We may update this Privacy Policy from time to time. Changes will be reflected with a new effective date at the top of this page. Continued use of the App after changes become effective constitutes acceptance of the updated policy.</p>

    <h2>12. Contact</h2>
    <p>For privacy-related questions or requests, contact us at:</p>
    <p>Contact: <a href="mailto:support@appaxislab.com">support@appaxislab.com</a></p>

    <h1 id="eula">End User License Agreement (EULA)</h1>
    <p>
      This End User License Agreement (&quot;Agreement&quot;) is a legal agreement between you (&quot;User&quot; or &quot;you&quot;) and App Axis Lab (&quot;Licensor&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) for the Photos &amp; Videos Recovery mobile application (the &quot;App&quot;). By downloading, installing, or using the App, you agree to be bound by this Agreement. If you do not agree, do not download, install, or use the App.
    </p>

    <h2>1. License Grant</h2>
    <p>Subject to your compliance with this Agreement, we grant you a limited, non-exclusive, non-transferable, revocable license to install and use the App on devices you own or control, solely for personal, non-commercial purposes, in accordance with this Agreement and applicable app store terms.</p>

    <h2>2. Restrictions</h2>
    <p>You agree not to:</p>
    <ul>
      <li>Copy, modify, adapt, translate, or create derivative works of the App</li>
      <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the App, except where expressly permitted by law</li>
      <li>Rent, lease, lend, sell, sublicense, or distribute the App or any part of it</li>
      <li>Remove, alter, or obscure any proprietary notices or labels on the App</li>
      <li>Use the App to recover media files from a device you do not own or are not authorized to access</li>
      <li>Use the App for any unlawful purpose or in violation of any applicable laws or regulations</li>
      <li>Use automated systems or bots to access or use the App without our written consent</li>
    </ul>

    <h2>3. Intellectual Property</h2>
    <p>The App, including all content, features, design, trademarks, and software, is owned by App Axis Lab or its licensors and is protected by copyright, trademark, and other intellectual property laws. This Agreement does not transfer any ownership rights to you.</p>
    <p>Android and Google Play are trademarks of Google LLC. The App is an independent product and is not affiliated with, endorsed by, or sponsored by Google or any device manufacturer.</p>

    <h2>4. Use of the App &amp; Your Media</h2>
    <p>The App lets you scan your device&apos;s media library to find and recover deleted photos, videos, and audio files. You are responsible for ensuring you are authorized to access and recover media on any device you use the App with.</p>
    <p>Recovered files are saved to a location on your device that you choose. We are not responsible for any accidental overwriting, data loss, or damage to files that may occur during the recovery process.</p>
    <p>Recovery success is not guaranteed. The App can only recover files that have not been permanently overwritten by your device. We make no warranty that any specific file will be recoverable.</p>

    <h2>5. Compatibility Disclaimer</h2>
    <p>The App is designed for Android devices and is available on Android only. Recovery capability depends on your device model, Android version, storage type (internal / SD card), and the time elapsed since deletion. We do not guarantee that the App will work identically on every device or Android version. Device manufacturers and Google may release software updates that affect recovery functionality.</p>

    <h2>6. Permissions &amp; Device Access</h2>
    <p>The App requests access to your device&apos;s media files (photos, videos, audio) to perform scanning and recovery. You may deny permissions, but the App will not be able to function without them. Use of permissions is described in our Privacy Policy.</p>

    <h2>7. Third-Party Services</h2>
    <p>The App integrates third-party services including Firebase (Google), Google AdMob, and RevenueCat. These services are governed by their own terms and privacy policies. We are not responsible for third-party services, content, or practices.</p>

    <h2>8. Subscriptions &amp; In-App Purchases</h2>
    <p>The App may offer paid features, subscriptions, or in-app purchases. Payment and billing are processed by Google Play Store through RevenueCat. Refunds and billing disputes are handled according to Google Play&apos;s policies. We do not store your payment card details.</p>

    <h2>9. Disclaimer of Warranties</h2>
    <p>THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR THAT ALL DELETED FILES WILL BE RECOVERABLE.</p>

    <h2>10. Limitation of Liability</h2>
    <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, APP AXIS LAB AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA, PROFITS, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP, INCLUDING ANY DATA LOSS ON YOUR DEVICE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
    <p>OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE APP SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US FOR THE APP IN THE TWELVE (12) MONTHS BEFORE THE CLAIM, OR (B) FIFTY U.S. DOLLARS (USD $50), WHERE PERMITTED BY LAW.</p>

    <h2>11. Indemnification</h2>
    <p>You agree to indemnify and hold harmless App Axis Lab from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from your use of the App, your recovery of media files, or your violation of this Agreement or applicable law.</p>

    <h2>12. Termination</h2>
    <p>This license is effective until terminated. We may suspend or terminate your access to the App at any time if you breach this Agreement. Upon termination, you must cease all use of the App and delete all copies from your devices. Sections that by their nature should survive termination will survive.</p>

    <h2>13. Changes to This Agreement</h2>
    <p>We may update this EULA from time to time. Continued use of the App after changes become effective constitutes acceptance of the revised Agreement. The &quot;EULA last updated&quot; date at the top of this page will reflect material revisions.</p>

    <h2>14. Governing Law &amp; Disputes</h2>
    <p>This Agreement is governed by the laws of the jurisdiction in which App Axis Lab operates, without regard to conflict-of-law principles, except where mandatory consumer protection laws in your country provide otherwise. Any dispute shall be resolved in the courts of that jurisdiction, unless applicable law requires a different forum.</p>

    <h2>15. Children</h2>
    <p>The App is not intended for children under 13 years of age unless permitted by applicable law and under parental supervision.</p>

    <h2>16. Google Play (Android)</h2>
    <p>If you obtained the App through Google Play, you agree that Google LLC is not a party to this Agreement and has no responsibility or liability with respect to the App. Your use of Google Play is subject to Google Play&apos;s terms of service.</p>

    <h2>17. Severability &amp; Entire Agreement</h2>
    <p>If any provision of this Agreement is held invalid or unenforceable, the remaining provisions remain in full force. This Agreement, together with our Privacy Policy, constitutes the entire agreement between you and App Axis Lab regarding the App and supersedes prior understandings on the same subject.</p>

    <h2>18. Contact</h2>
    <p>For questions about this EULA, contact App Axis Lab at:</p>
    <p>Contact: <a href="mailto:support@appaxislab.com">support@appaxislab.com</a></p>

        </div>
      </div>
    </PrivacyLayout>
  )
}
