import type { Metadata } from 'next'
import PrivacyLayout from '@/components/PrivacyLayout'
import s from '@/styles/privacy.module.css'

export const metadata: Metadata = {
  title: 'Smart Switch — Privacy Policy & EULA | App Axis Lab',
}

export default function SmartSwitchPrivacy() {
  return (
    <PrivacyLayout
      appName="Smart Switch — Phone Clone & Transfer"
      subtitle="Privacy Policy & End User License Agreement"
      lastUpdated="Last updated: November 10, 2026"
    >
      <div className={s.card}>
        <div className={s.privacyContent}>
          <p>
            This page contains the <a href="#privacy">Privacy Policy</a> and{' '}
            <a href="#eula">End User License Agreement (EULA)</a> for Smart Switch. By using the
            App, you agree to both documents.
          </p>

    <h1 id="privacy">Privacy Policy</h1>

    <h2>Scope</h2>
    <p>
      Welcome to Smart Switch&apos;s Privacy Policy. Your privacy is important to us. This Privacy Policy explains how App Axis Lab (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses, stores, and shares your information when you use our phone-to-phone transfer mobile application (the &quot;App&quot; or &quot;Services&quot;).
    </p>
    <p>
      If you do not agree with this Privacy Policy, please do not use our Services.
    </p>

    <h2>Overview</h2>
    <p>
      Smart Switch lets you send and receive photos, videos, music, documents, files, apps, and contacts between two Android phones connected to the same Wi-Fi network. No account is required. Your files travel directly from one phone to the other and are never uploaded to our servers. Your settings and transfer history are stored locally on your device. We do not sell your personal information.
    </p>
    <div className={s.highlightBox}>
      <ul>
        <li><strong>No account is required</strong> — Smart Switch works without sign-in, email, or any user profile.</li>
        <li><strong>Your files go phone to phone</strong> — transfers happen directly over your local Wi-Fi network and are encrypted. Your files, photos, and contacts are never sent to our servers.</li>
        <li><strong>Settings and history stay on your device</strong> — your language, preferences, and transfer history are stored locally.</li>
        <li><strong>You choose what to share</strong> — the App only reads the files, apps, and contacts you select to send, and only after you grant the matching permission.</li>
        <li><strong>Ads are served by Google AdMob</strong> — Smart Switch displays native and interstitial ads. Google may collect certain data as described in Section 8.</li>
        <li><strong>We never sell your personal information.</strong></li>
      </ul>
    </div>

    <h2>1. What Smart Switch Does</h2>
    <p>Smart Switch is a file-transfer utility for Android. It finds nearby phones running Smart Switch on the same Wi-Fi network, asks the receiving phone to accept the transfer, and then sends the files, apps, or contacts you selected directly to that phone. A 6-digit PIN or a QR code can be used to pair two phones if automatic discovery does not work. It also keeps a local history of your transfers so an interrupted transfer can be resumed.</p>
    <p>The App is a transfer aid only. It does not guarantee that every file, app, or contact can be transferred or that a transfer will complete on every network or device.</p>

    <h2>2. Information We Collect</h2>

    <div className={s.highlightBox}>
      <strong>Smart Switch does not operate its own servers for your files and does not transmit your files, contacts, or history to us.</strong> Data the App creates stays on your device or travels directly to the phone you chose, except for the feedback you choose to submit (Section 2.5) and interactions with the third-party services described in Section 8.
    </div>

    <p><strong>2.1 App Settings and Transfer History</strong></p>
    <p>Your chosen preferences — app language, whether onboarding has been completed, and similar settings — and a history of your transfers (file names, types, sizes, the other device&apos;s name, date, and status) are stored locally on your device. They are never transmitted to us. You can delete individual records or clear the whole history inside the App.</p>

    <p><strong>2.2 Files, Apps, and Contacts You Send or Receive</strong></p>
    <p>When you select photos, videos, music, documents, other files, installed apps (APK files), or contacts to send, the App reads them from your device and sends them over your local Wi-Fi network to the receiving phone you chose. When you receive items, they are saved on your device. The App does not copy, upload, or keep these items anywhere else. Transfers are encrypted in transit. A transfer only starts after the receiving user accepts it.</p>

    <p><strong>2.3 Device Name and Local Network Information</strong></p>
    <p>To find nearby phones, the App advertises and searches for devices on your local network. While discovery is running, your device&apos;s name and a temporary identifier are visible to other Smart Switch devices on the same network. The App also checks whether your phone is connected to Wi-Fi. This information is used only on your local network and is not sent to us.</p>

    <p><strong>2.4 Camera (QR Pairing Only)</strong></p>
    <p>If you choose to pair by scanning a QR code, the App uses the camera to read the code. Images from the camera are processed on your device only to read the code and are not saved or sent anywhere.</p>

    <p><strong>2.5 Feedback You Submit</strong></p>
    <p>If you tell the App it needs work, you can send an optional feedback message and an optional contact detail through the feedback form provided by Swake. We receive only what you type into the form. Submissions are anonymous unless you include your own contact details. See Section 8.1.</p>

    <p><strong>2.6 Diagnostics and Usage Data</strong></p>
    <p>We may use Firebase services (such as Analytics and Crashlytics) to receive crash reports and aggregate usage information, such as which screens are used, app version, device model, Android version, and the circumstances of a crash. This data does not include your files, contacts, or message content. See Section 8.1.</p>

    <p><strong>2.7 Billing Information</strong></p>
    <p>If you purchase a premium subscription or in-app purchase (when available), payment is processed by the Google Play Store. We do not directly collect or store your payment card details. We may receive subscription status and anonymous purchase identifiers to unlock premium features.</p>

    <h2>3. How We Use Your Information</h2>
    <p>We use the information described above to:</p>
    <ul>
      <li>Find nearby devices and send and receive the items you choose</li>
      <li>Show the App in your chosen language</li>
      <li>Keep a local history so you can review, resume, or delete transfers</li>
      <li>Show progress and status notifications while a transfer is running</li>
      <li>Fix crashes, improve stability, and understand how the App is used</li>
      <li>Receive and respond to feedback you choose to send</li>
      <li>Process and manage premium purchases through the app store</li>
    </ul>
    <p>We do <strong>not</strong> use your files, contacts, or other on-device content for advertising profiling or automated decision-making.</p>

    <h2>4. How We Share Your Information</h2>
    <p>We do not share your personal information with third parties, except as described in Section 2.2 (items you send directly to the receiving phone you chose), Section 7 (app store payments), and Section 8 (third-party services). We do not sell your personal information.</p>

    <h2>5. Permissions</h2>
    <p>Smart Switch requests the following permissions. Each is requested only when the related feature is needed, and you may deny any of them; the related feature will not work, but the rest of the App will.</p>
    <ul>
      <li><strong>Photos, Videos, and Audio (READ_MEDIA_IMAGES, READ_MEDIA_VIDEO, READ_MEDIA_AUDIO — Android 13+; READ_EXTERNAL_STORAGE / WRITE_EXTERNAL_STORAGE — Android 8–12):</strong> Used to list and send your media, and to save media you receive.</li>
      <li><strong>All Files Access (MANAGE_EXTERNAL_STORAGE):</strong> Used to list and send documents and other files from your storage, and to save received files in folders you can open. You can turn this off at any time in your device&apos;s settings.</li>
      <li><strong>Contacts (READ_CONTACTS, WRITE_CONTACTS):</strong> Used to list the contacts you choose to send, and to import contacts you receive. When importing, you decide how duplicates are handled.</li>
      <li><strong>Camera (CAMERA):</strong> Used only to scan a QR code when pairing. The App never takes photos or records video.</li>
      <li><strong>Installed Apps and Install Packages (REQUEST_INSTALL_PACKAGES):</strong> Used to list installed apps so you can send them, and to let you open a received APK file with Android&apos;s installer. The App never installs anything silently.</li>
      <li><strong>Nearby Wi-Fi Devices (NEARBY_WIFI_DEVICES — where required by your Android version):</strong> Used to find nearby phones on your Wi-Fi network.</li>
      <li><strong>Network and Wi-Fi State (ACCESS_NETWORK_STATE, ACCESS_WIFI_STATE, CHANGE_WIFI_MULTICAST_STATE):</strong> Used to check that you are on Wi-Fi and to discover other devices on the same network.</li>
      <li><strong>Post Notifications (POST_NOTIFICATIONS — Android 13+):</strong> Used to show transfer progress. You may deny this; transfers still work.</li>
      <li><strong>Foreground Service and Wake Lock (FOREGROUND_SERVICE, WAKE_LOCK):</strong> Used to keep a transfer running while the screen is off or the App is in the background.</li>
      <li><strong>Internet (INTERNET):</strong> Used for local transfers between devices and to load ads, feedback, and diagnostics.</li>
      <li><strong>Advertising ID (AD_ID):</strong> Used by Google AdMob as described in Section 8.</li>
      <li><strong>Billing (com.android.vending.BILLING — Android):</strong> Used to offer premium purchases through Google Play.</li>
    </ul>

    <h2>6. Transfer Notifications</h2>
    <p>While a transfer is running, the App shows a notification with its progress and a cancel option. These are <strong>local notifications</strong> shown by your device. They are not sent from our servers and contain no personal data beyond the transfer&apos;s progress. You can turn notifications off in your device&apos;s settings.</p>

    <h2>7. Subscriptions &amp; Payments</h2>
    <p>Smart Switch may offer a premium subscription or in-app purchases to unlock additional features, such as an ad-free experience. When you purchase:</p>
    <ul>
      <li>Payments are processed by the Google Play Store. We do not directly collect or store your payment card details.</li>
      <li>We receive subscription status and related purchase metadata to unlock premium features.</li>
      <li>Free trials, if offered, convert to paid subscriptions unless cancelled before the trial ends.</li>
      <li>You can manage or cancel subscriptions through your Google Play account (<em>Google Play &gt; Profile &gt; Payments &amp; subscriptions &gt; Subscriptions</em>).</li>
      <li>Refunds and billing disputes are handled according to <a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener noreferrer">Google Play&apos;s refund policy</a>.</li>
    </ul>
    <p>By subscribing, you confirm that you have read and agree to our <a href="https://appaxislab.com/smart_switch_privacy#privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and <a href="https://appaxislab.com/smart_switch_privacy#eula" target="_blank" rel="noopener noreferrer">End User License Agreement (EULA)</a>.</p>

    <h2>8. Third-Party Services — Google AdMob</h2>
    <p>Smart Switch displays native advertisements and interstitial advertisements served by <strong>Google AdMob</strong>. Interstitial ads are shown only after a transfer has finished, never during a transfer. AdMob may collect and use certain information from your device to serve relevant ads, including:</p>
    <ul>
      <li>Device identifiers (advertising ID, device model, OS version)</li>
      <li>Interaction data (ad impressions, clicks)</li>
      <li>Coarse location derived from your IP address</li>
      <li>IP address</li>
    </ul>
    <p>This data is collected and processed by Google under their own privacy policy. Where required by law (for example in the EU/EEA and UK), the App asks for your consent through Google&apos;s consent form before ads are requested, and you can change your choice at any time in the App&apos;s settings where available. For more information, see <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a> and <a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener noreferrer">How Google uses data when you use our partners&apos; apps</a>.</p>

    <p><strong>8.1 Other Services</strong></p>
    <ul>
      <li><strong>Firebase (Google)</strong> — provides crash reporting and usage analytics. See <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Privacy and Security in Firebase</a>.</li>
      <li><strong>Swake</strong> — provides the feedback form used when you tell the App it needs work. Anything you type into the form is handled by Swake and delivered to us. See <a href="https://swake.io" target="_blank" rel="noopener noreferrer">Swake</a> for its own privacy information.</li>
      <li><strong>App store review prompt</strong> — if you tell the App that it helped, it may open the Google Play listing so you can rate it. Any rating or review you submit is handled by Google Play.</li>
    </ul>
    <p>No other third-party analytics, crash-reporting, or cloud-storage SDKs are integrated into the App.</p>

    <h2>9. Data Security</h2>
    <p>Transfers between phones are encrypted in transit, and a transfer starts only after the receiving user accepts it. PIN pairing is limited to a small number of attempts and expires after a short time. Because Smart Switch stores your settings and history only on your device and never uploads your files to our servers, the attack surface is minimal. Data is stored in your device&apos;s protected app storage; received files are saved in your device&apos;s normal storage so you can open them. No method of electronic storage or transmission is completely secure, and we cannot guarantee absolute security. Only transfer files to devices you trust, and only accept transfers from people you know.</p>

    <h2>10. Your Rights &amp; Controls</h2>

    <p><strong>10.1 Access &amp; Control</strong></p>
    <p>You can view and change your settings and review your transfer history directly within the App.</p>

    <p><strong>10.2 Delete Your Data</strong></p>
    <p>You can delete individual history records or clear all history inside the App. Uninstalling the App permanently removes all locally stored settings and history from your device. Files you received remain in your device&apos;s storage until you delete them. There is no account to delete because no account exists.</p>

    <p><strong>10.3 Permissions</strong></p>
    <p>You can revoke any permission at any time through your device&apos;s Settings. Revoking a permission disables only the features that need it.</p>

    <p><strong>10.4 Ad Personalization</strong></p>
    <p>You can limit ad tracking through your device settings: on Android via <em>Settings &gt; Privacy &gt; Ads</em>. Where available, you can also update your ad consent in the App, and opt out of interest-based advertising through <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">Google Ad Settings</a>.</p>

    <p><strong>10.5 For EU/EEA &amp; UK Residents (GDPR)</strong></p>
    <p>If you are located in the European Union, European Economic Area, or United Kingdom, you have rights under the GDPR, including rights to access, rectify, erase, restrict, or object to processing of your personal data. Because Smart Switch does not collect your files, contacts, or history on our own servers, most rights are exercised directly on your device. For data processed by Google AdMob or Firebase, you may contact Google or exercise your rights through Google&apos;s privacy tools. For questions, contact us at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.</p>

    <p><strong>10.6 For California Residents (CCPA/CPRA)</strong></p>
    <p>If you are a California resident, you have rights under the CCPA and CPRA. Smart Switch does not sell your personal information. We do not collect your files, contacts, or history on our servers. Data stored locally on your device can be deleted inside the App or by uninstalling it. For questions about data processed by Google AdMob or Firebase, refer to Google&apos;s privacy tools.</p>

    <h2>11. Data Retention</h2>
    <p>Settings and transfer history are stored only on your device for as long as the App is installed or until you delete them. We do not retain your files, contacts, or history on external servers. Diagnostics, crash reports, and feedback are kept by us and our service providers only as long as needed to fix issues and improve the App. Uninstalling the App permanently deletes all App data from your device.</p>

    <h2>12. Children&apos;s Privacy</h2>
    <p>Smart Switch is not intended for users under 13 years of age (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children. Because the App does not collect your personal data on our servers, no child data is held by us beyond the limited diagnostics described above.</p>
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
    <p>
      This End User License Agreement (&quot;Agreement&quot;) is a legal agreement between you (&quot;User&quot; or &quot;you&quot;) and App Axis Lab (&quot;Licensor&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) for the Smart Switch mobile application (the &quot;App&quot;). By downloading, installing, or using the App, you agree to be bound by this Agreement. If you do not agree, do not download, install, or use the App.
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
      <li>Use the App for any unlawful purpose or in any way that violates applicable laws or regulations</li>
      <li>Use the App to send or receive content that is illegal, infringes the rights of others, or that you do not have the right to share, or to send malware or harmful files to other devices</li>
      <li>Send files, apps, or contacts to another person&apos;s device without their permission</li>
      <li>Interfere with or disrupt the App or connected systems</li>
      <li>Use automated systems or bots to access or use the App without our written consent</li>
    </ul>

    <h2>3. Intellectual Property</h2>
    <p>
      The App, including its design, trademarks, software, and content, is owned by App Axis Lab or its licensors and is protected by copyright, trademark, and other intellectual property laws. This Agreement does not transfer any ownership rights to you.
    </p>

    <h2>4. Your Data and Content</h2>
    <p>
      All settings and history you create in the App are stored locally on your device. The files, apps, and contacts you send or receive belong to you or their respective owners. You are responsible for maintaining your device&apos;s security and for having the right to transfer the content you choose. Because no account or cloud sync is involved, we cannot recover your settings, history, or transferred content if you uninstall the App or lose your device.
    </p>

    <h2>5. Responsible Use &amp; Transfers</h2>
    <p>
      Only send files to devices you trust and only accept transfers from people you know. Check the device name and the file summary before you accept a transfer. Installing an app file (APK) received from another device is your own decision and risk; always make sure it comes from a source you trust. Keep both phones powered on and on the same Wi-Fi network until a transfer finishes, and keep enough free storage on the receiving phone. You are solely responsible for what you send and receive.
    </p>

    <h2>6. Transfer Results Disclaimer</h2>
    <p>
      Transfer speed and success depend on your devices, your Wi-Fi network, router settings (such as client isolation), available storage, and the type of content. The App does not guarantee that all content can be transferred, that every transfer will complete, or that contacts, apps, or files will behave identically on the receiving device. Smart Switch is not a backup service, and you should keep your own backups of important data.
    </p>

    <h2>7. Permissions &amp; Device Access</h2>
    <p>
      The App requests access to media, files, contacts, camera (for QR pairing only), installed apps, nearby devices and network state, notifications, and background operation to support the features described in our <a href="#privacy">Privacy Policy</a>. You may deny certain permissions, but related features may not function.
    </p>

    <h2>8. Advertising</h2>
    <p>
      Smart Switch displays ads served by Google AdMob. By using the App, you agree that ads may be displayed and that Google may collect certain data as described in Section 8 of our Privacy Policy and in <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>.
    </p>

    <h2>9. Subscriptions &amp; In-App Purchases</h2>
    <p>
      Smart Switch may offer a premium subscription or in-app purchases to unlock additional features. Payment and billing are processed by the Google Play Store. Refunds and billing disputes are handled according to the store&apos;s policies. We do not store your full payment card details.
    </p>
    <p>
      Free trials, if offered, convert to paid subscriptions unless cancelled before the trial ends, in accordance with the store&apos;s rules.
    </p>
    <p>By subscribing, you confirm that you have read and agree to our <a href="https://appaxislab.com/smart_switch_privacy#privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and <a href="https://appaxislab.com/smart_switch_privacy#eula" target="_blank" rel="noopener noreferrer">End User License Agreement (EULA)</a>.</p>

    <h2>10. Disclaimer of Warranties</h2>
    <p>
      THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE. WE DO NOT WARRANT THAT ANY TRANSFER WILL COMPLETE OR THAT TRANSFERRED CONTENT WILL BE COMPLETE, UNCORRUPTED, OR FREE OF HARMFUL CODE.
    </p>

    <h2>11. Limitation of Liability</h2>
    <p>
      TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, APP AXIS LAB AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP, INCLUDING ANY LOSS, CORRUPTION, OR UNINTENDED DISCLOSURE OF FILES, APPS, OR CONTACTS, OR ANY HARM CAUSED BY CONTENT RECEIVED FROM ANOTHER DEVICE.
    </p>
    <p>
      OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE APP SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US FOR THE APP IN THE TWELVE (12) MONTHS BEFORE THE CLAIM, OR (B) FIFTY U.S. DOLLARS (USD $50), WHERE PERMITTED BY LAW.
    </p>

    <h2>12. Indemnification</h2>
    <p>
      You agree to indemnify and hold harmless App Axis Lab from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from your use of the App, the content you send or receive, or your violation of this Agreement or applicable law.
    </p>

    <h2>13. Termination</h2>
    <p>
      This license is effective until terminated. We may suspend or terminate your access to the App at any time if you breach this Agreement. Upon termination, you must cease all use of the App and delete all copies from your devices. You may terminate at any time by uninstalling the App. Sections that by their nature should survive termination will survive.
    </p>

    <h2>14. Changes to This Agreement</h2>
    <p>
      We may update this EULA from time to time. Continued use of the App after changes become effective constitutes acceptance of the revised Agreement. The &quot;Last updated&quot; date at the top of this page will reflect material revisions.
    </p>

    <h2>15. Governing Law &amp; Disputes</h2>
    <p>
      This Agreement is governed by the laws of the jurisdiction in which App Axis Lab operates, without regard to conflict-of-law principles, except where mandatory consumer protection laws in your country provide otherwise. Any dispute shall be resolved in the courts of that jurisdiction, unless applicable law requires a different forum.
    </p>

    <h2>16. Children</h2>
    <p>
      The App is not intended for children under 13 years of age (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children as described in our Privacy Policy.
    </p>

    <h2>17. App Stores (Google)</h2>
    <p>
      If you obtained the App through Google Play, you agree that Google is not a party to this Agreement and has no responsibility or liability with respect to the App. Your use of Google Play is subject to Google&apos;s terms of service.
    </p>

    <h2>18. Severability &amp; Entire Agreement</h2>
    <p>
      If any provision of this Agreement is held invalid or unenforceable, the remaining provisions remain in full force. This Agreement, together with our Privacy Policy, constitutes the entire agreement between you and App Axis Lab regarding the App and supersedes prior understandings on the same subject.
    </p>

    <h2>19. Contact</h2>
    <p>
      For questions about this EULA, contact App Axis Lab at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.
    </p>
    
  
        </div>
      </div>
    </PrivacyLayout>
  )
}
