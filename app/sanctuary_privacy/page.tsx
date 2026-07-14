import type { Metadata } from 'next'
import PrivacyLayout from '@/components/PrivacyLayout'
import s from '@/styles/privacy.module.css'

export const metadata: Metadata = {
  title: 'Sanctuary — Privacy Policy & EULA | App Axis Lab',
}

export default function SanctuaryPrivacyPolicy() {
  return (
    <PrivacyLayout
      appName="Sanctuary"
      subtitle="Privacy Policy & End User License Agreement"
      lastUpdated="Last updated: July 14, 2026"
    >
      <div className={s.card}>
        <div className={s.privacyContent}>
          <p>This page contains the <a href="#privacy">Privacy Policy</a> and <a href="#eula">End User License Agreement (EULA)</a> for Sanctuary. By downloading, installing, or using the App, you agree to both documents.</p>

          <h1 id="privacy">Privacy Policy</h1>

          <h2>Scope</h2>
          <p>Welcome to Sanctuary&apos;s Privacy Policy. Sanctuary (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is a private, voice-journaling application. This Privacy Policy explains what information the App handles, why, and the choices you have. It applies to the Sanctuary mobile application and related services (the &quot;App&quot; or &quot;Services&quot;) available on the Apple App Store and Google Play Store.</p>
          <p>If you do not agree with this Privacy Policy, please do not use the Services.</p>

          <h2>Overview</h2>
          <p>Sanctuary is built around a simple idea: your journal is yours.</p>
          <div className={s.highlightBox}>
            <p><strong>No account, no sign-up.</strong> Sanctuary works fully offline and never asks for your name, email address, or a password. <strong>Your recordings stay on your device.</strong> Audio, transcripts, and AI-generated reflections are stored locally — we don&apos;t operate a server that stores your journal. <strong>Backup is optional and encrypted.</strong> We don&apos;t sell or publish your journal.</p>
          </div>

          <h2>1. No Account Required</h2>
          <p>Sanctuary does not require you to create an account, and we do not collect your name, email address, or a password to use the App. The first time you open Sanctuary, the App generates a random, anonymous identifier (a &quot;Recovery Key&quot;) on your device and stores it in your device&apos;s secure keychain (Apple Keychain Services or the Android Keystore).</p>
          <p>This Recovery Key is used only to:</p>
          <ul>
            <li>Derive the encryption key that protects your optional Google Drive backup (see Section 6 and Section 9).</li>
            <li>Identify your device — not you personally — in crash reports and product analytics (see Section 2.2).</li>
          </ul>
          <p>You can view your Recovery Key at any time from Profile &gt; Security &amp; Backup. You&apos;re responsible for storing a copy of it somewhere safe — we never see it ourselves, so we have no way to recover it for you.</p>

          <h2>2. Information We Collect</h2>
          <p><strong>2.1 Information You Provide</strong></p>
          <ul>
            <li>Voice recordings you create within the App</li>
            <li>Transcripts generated from your recordings, using your device&apos;s built-in speech recognition</li>
            <li>Photos and videos you optionally attach to a journal entry</li>
            <li>A display name, if you choose to set one in Edit Profile (stored on your device only)</li>
            <li>Support messages you send us directly, e.g. by email</li>
          </ul>
          <p><strong>2.2 Usage &amp; Diagnostic Information</strong></p>
          <p>We use Firebase Analytics and Firebase Crashlytics (Google services) to understand how the App is used and to diagnose crashes, including:</p>
          <ul>
            <li>Screens viewed and features used (e.g. entries recorded, streak milestones reached, insights viewed)</li>
            <li>Crash and error reports, together with the anonymous device identifier from Section 1 — never your name or journal content</li>
            <li>Basic device information (device model, operating system version, app version)</li>
          </ul>
          <p><strong>2.3 Device Data</strong></p>
          <ul>
            <li>Device type, model, and operating system version</li>
            <li>Approximate, non-precise location inferred from IP address for analytics purposes only — Sanctuary never requests or accesses your device&apos;s GPS location</li>
            <li>Advertising identifier (IDFA/GAID), for free-tier users only, used to serve and measure ads (see Section 8)</li>
          </ul>
          <p><strong>2.4 Billing Information</strong></p>
          <p>If you subscribe to Sanctuary Pro, your purchase is processed entirely by the Apple App Store or Google Play Store and managed on our behalf by RevenueCat. We receive only your subscription status and purchase metadata (e.g. product identifier, renewal date) — never your card number or billing address.</p>
          <p><strong>2.5 AI-Generated Insights</strong></p>
          <p>If you use Sanctuary&apos;s AI insight features (mood analysis, weekly and monthly reflections), the text transcript of the relevant entries — never the audio itself — is sent to OpenAI&apos;s API to generate a summary. See Section 4.2 for details.</p>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information described above to:</p>
          <ul>
            <li>Provide the App&apos;s core features: recording, transcription, playback, and organizing your journal</li>
            <li>Generate mood analysis and AI-written weekly/monthly reflections from your transcripts</li>
            <li>Maintain your streak, milestones, and unlocked titles</li>
            <li>Let you optionally back up and restore your journal via your own Google Drive</li>
            <li>Diagnose crashes and improve the App&apos;s stability and performance</li>
            <li>Process your Sanctuary Pro subscription and provide the features it unlocks</li>
            <li>Show advertisements to free-tier users (see Section 8)</li>
            <li>Respond to support requests you send us</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>4. How We Share Your Information</h2>
          <p><strong>4.1 With Service Providers</strong></p>
          <p>We use a small number of trusted providers to operate specific features. None of them receive your journal content unless explicitly stated below:</p>
          <ul>
            <li><strong>Google Firebase</strong> (Analytics, Crashlytics, Remote Config): anonymous usage analytics, crash diagnostics, and app configuration</li>
            <li><strong>RevenueCat:</strong> subscription and purchase management</li>
            <li><strong>Google AdMob</strong> and its mediation partners (see Section 8): advertising, for free-tier users only</li>
            <li><strong>Google Drive:</strong> only if you choose to enable backup, to your own Drive storage — not ours</li>
            <li><strong>OpenAI:</strong> only the text transcript of an entry, and only when you use an AI insight feature</li>
          </ul>
          <p><strong>4.2 AI Processing</strong></p>
          <p>When you use Sanctuary&apos;s mood analysis or AI reflection features, the transcript text of the relevant entries is sent to OpenAI&apos;s API to generate the response. Audio is never sent to OpenAI. OpenAI processes this text under its own privacy policy and API terms. We recommend reviewing OpenAI&apos;s privacy policy for details on how it handles API content.</p>
          <p><strong>4.3 Legal Requirements</strong></p>
          <p>We may disclose information if required by law, regulation, legal process, or governmental request, or when we believe disclosure is necessary to protect the rights, property, or safety of Sanctuary, our users, or others.</p>
          <p><strong>4.4 Business Transfers</strong></p>
          <p>If Sanctuary is involved in a merger, acquisition, reorganization, or sale of assets, the information described in Section 2 may be transferred as part of that transaction. We will provide notice of any material change in ownership or use of your information.</p>
          <p><strong>4.5 Non-Personal Data</strong></p>
          <p>We may share aggregated or anonymized data that cannot reasonably be used to identify you for analytics, research, and business purposes.</p>
          <p>We do <strong>not</strong> sell your personal information.</p>

          <h2>5. Permissions</h2>
          <p>Sanctuary may request the following device permissions:</p>
          <ul>
            <li><strong>Microphone:</strong> to record your voice journal entries. Required for the App&apos;s core purpose.</li>
            <li><strong>Speech Recognition:</strong> to transcribe your recordings into text, using your device&apos;s built-in speech recognition.</li>
            <li><strong>Camera &amp; Photo Library:</strong> to attach a photo or video to a journal entry. Optional — you can use Sanctuary fully without granting this.</li>
            <li><strong>Notifications:</strong> for optional daily reminders to journal. You can disable these at any time in Settings.</li>
            <li><strong>Internet:</strong> required for optional Google Drive backup, AI insight generation, advertising (free tier), and analytics.</li>
          </ul>

          <h2>6. Data Security</h2>
          <p>Your journal database and any attachments are stored locally using your device&apos;s own platform-level protections. Your Recovery Key is stored in your device&apos;s secure keychain (Keychain Services on iOS, Keystore on Android) — never in plain text. Optional Google Drive backups are encrypted with AES-256 (the encryption key is derived via PBKDF2 from your Recovery Key) before upload, so neither we nor Google can read your unencrypted journal content from a backup file.</p>
          <p>No system is completely secure, and we cannot guarantee absolute security. You are responsible for keeping your Recovery Key confidential, since it&apos;s the only way to restore a backup.</p>

          <h2>7. Cookies &amp; Tracking Technologies</h2>
          <p>Sanctuary is a native mobile app and does not use browser cookies. Our analytics, crash-reporting, and advertising partners use device-level identifiers (see Sections 2.2, 2.3, and 8) to provide their services.</p>

          <h2>8. Advertising</h2>
          <p>Free-tier users see advertisements served through Google AdMob, which mediates ads through a number of partner ad networks, including AppLovin, Meta Audience Network, ironSource, Mintegral, Pangle, Unity Ads, Vungle, and Yandex Mobile Ads. These networks may use your device&apos;s advertising identifier to serve and measure ads; on iOS, this only happens if you grant permission through Apple&apos;s App Tracking Transparency prompt. Sanctuary Pro subscribers never see advertisements.</p>
          <p>You can control ad personalization through your device settings:</p>
          <ul>
            <li><strong>iOS:</strong> Settings &gt; Privacy &amp; Security &gt; Tracking</li>
            <li><strong>Android:</strong> Settings &gt; Google &gt; Ads &gt; Opt out of Ads Personalization</li>
          </ul>

          <h2>9. Subscriptions &amp; Payments</h2>
          <p>Sanctuary Pro is a subscription that unlocks premium features (such as unlimited AI insights, an ad-free experience, and custom themes). When you subscribe:</p>
          <ul>
            <li>Payments are processed entirely by the Apple App Store (iOS) or Google Play Store (Android) via RevenueCat. We do not directly collect or store your full payment card details.</li>
            <li>We receive subscription status and related purchase metadata to unlock premium features and provide customer support.</li>
            <li>Refunds and billing disputes are handled according to the applicable app store&apos;s policies.</li>
            <li>You can manage or cancel your subscription at any time through your App Store or Google Play account settings.</li>
          </ul>

          <h2>10. Third-Party Services</h2>
          <p>Sanctuary integrates with the following third-party services:</p>
          <ul>
            <li>Google Firebase (Analytics, Crashlytics, Remote Config)</li>
            <li>RevenueCat (subscription management)</li>
            <li>Google AdMob and its mediation partners (advertising)</li>
            <li>Google Drive (optional, user-initiated backup)</li>
            <li>OpenAI API (AI insight generation — transcript text only)</li>
          </ul>
          <p>Each of these operates under its own privacy policy. We recommend reviewing them, including <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a> and OpenAI&apos;s Privacy Policy.</p>

          <h2>11. Your Rights</h2>
          <p><strong>11.1 Access &amp; Export</strong></p>
          <p>Your journal lives on your device — you can view, edit, or delete any entry at any time within the App.</p>
          <p><strong>11.2 Notification Preferences</strong></p>
          <p>You can enable or disable reminder notifications at any time in Settings.</p>
          <p><strong>11.3 Revoke Google Drive Access</strong></p>
          <p>You can disconnect Sanctuary&apos;s access to your Google Drive at any time from your Google Account&apos;s third-party access settings (myaccount.google.com/permissions).</p>
          <p><strong>11.4 Delete Your Data</strong></p>
          <ul>
            <li><strong>On-device:</strong> Use &quot;Delete All Data&quot; in Profile &gt; Account to permanently erase your entries, streaks, and settings from your device.</li>
            <li><strong>Drive backup:</strong> If you&apos;ve enabled Google Drive backup, you can also delete the backup file directly from your Google Drive.</li>
          </ul>
          <div className={s.highlightBox}>
            <p><strong>Note:</strong> Because Sanctuary has no server-side account or database, deleting the App — or using &quot;Delete All Data&quot; — removes your journal completely on our end. There is no remote copy for us to delete, because none exists.</p>
          </div>
          <p><strong>11.5 For EU/EEA Residents (GDPR)</strong></p>
          <p>If you are located in the European Union or European Economic Area, you have rights under the General Data Protection Regulation (GDPR), including the right to access, rectify, erase, restrict processing, data portability, and to object to certain processing of the limited data described in Section 2. You also have the right to lodge a complaint with a supervisory authority.</p>
          <p><strong>11.6 For California Residents (CCPA/CPRA)</strong></p>
          <p>If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), including the right to know what personal information is collected, the right to request deletion, and the right to opt out of the sale or sharing of personal information. We do not sell personal information.</p>
          <p>To exercise your privacy rights, contact us at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>. We aim to respond within 30 days.</p>

          <h2>12. Data Retention</h2>
          <p>Your journal data is retained locally on your device for as long as you keep the App installed, or until you delete it yourself. Anonymous analytics and crash data are retained by our service providers according to their own retention policies, generally no longer than 14 months.</p>

          <h2>13. Children&apos;s Privacy</h2>
          <p>Sanctuary is not intended for users under 13 years of age (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children. Because the App does not require an account, there is no personal profile created for any user, child or otherwise.</p>
          <p>If you believe a child has used a feature that sends data to a third party (such as AI insights or Google Drive backup) without appropriate consent, please contact us at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.</p>

          <h2>14. International Transfers</h2>
          <p>If you use optional features such as Google Drive backup or AI insights, your data may be processed and stored in countries other than your own, subject to the safeguards those providers (Google, OpenAI) apply to international transfers.</p>

          <h2>15. Legal Basis for Processing</h2>
          <p>Where applicable law requires a legal basis for processing personal data, we rely on one or more of the following:</p>
          <ul>
            <li><strong>Consent:</strong> for optional features such as Google Drive backup, AI insights, and notifications.</li>
            <li><strong>Contractual necessity:</strong> to provide the core recording and journaling features you request.</li>
            <li><strong>Legitimate interests:</strong> to diagnose crashes, maintain security, and improve the App, balanced against your rights and interests.</li>
          </ul>

          <h2>16. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Changes take effect upon posting, and we will update the &quot;Last updated&quot; date at the top of this page. For material changes that significantly affect your rights, we will provide notice through the App.</p>
          <p>We encourage you to review this policy periodically.</p>

          <h2>17. Contact Us</h2>
          <p>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:support@appaxislab.com">support@appaxislab.com</a></li>
            <li><strong>Developer:</strong> App Axis Lab</li>
          </ul>

          <hr className={s.divider} />

          <h1 id="eula">End User License Agreement (EULA)</h1>
          <p>This End User License Agreement (&quot;Agreement&quot;) is a legal agreement between you (&quot;User&quot; or &quot;you&quot;) and App Axis Lab (&quot;Licensor&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) for the Sanctuary mobile application (the &quot;App&quot;). By downloading, installing, or using the App, you agree to be bound by this Agreement. If you do not agree, do not download, install, or use the App.</p>

          <h2>1. License Grant</h2>
          <p>Subject to your compliance with this Agreement, we grant you a limited, non-exclusive, non-transferable, revocable license to install and use the App on devices you own or control, solely for personal, non-commercial purposes, in accordance with this Agreement and applicable app store terms.</p>

          <h2>2. Restrictions</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Copy, modify, adapt, or create derivative works of the App</li>
            <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the App, except where expressly permitted by law</li>
            <li>Rent, lease, lend, sell, sublicense, or distribute the App or any part of it</li>
            <li>Remove, alter, or obscure any proprietary notices or labels on the App</li>
            <li>Use the App for any unlawful purpose or in violation of any applicable laws or regulations</li>
            <li>Use the App to record audio involving other identifiable individuals without their consent, where required by applicable recording-consent laws</li>
            <li>Interfere with or disrupt the App or any connected third-party service it relies on</li>
            <li>Use automated systems or bots to access or use the App without our written consent</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>The App, including its design, trademarks, software, and content (excluding your journal content), is owned by App Axis Lab or its licensors and is protected by copyright, trademark, and other intellectual property laws. This Agreement does not transfer any ownership rights to you. You retain ownership of the voice recordings, transcripts, and other content you create through the App.</p>

          <h2>4. User Content</h2>
          <p>You may create voice recordings, transcripts, and attached photos or videos (&quot;User Content&quot;). You retain ownership of your User Content and are solely responsible for it, including for ensuring you have the right to record and store any audio or information you capture.</p>
          <p>Sanctuary is a personal journaling tool. It does not provide medical, clinical, psychological, or professional advice of any kind, and its AI-generated mood analysis and reflections are not a substitute for professional care. Transcripts and AI-generated content are produced using automated speech recognition and third-party AI models and may contain errors or inaccuracies. You are responsible for verifying the accuracy of any AI-generated content before relying on it.</p>

          <h2>5. Device &amp; Local Data Security</h2>
          <p>Sanctuary has no user accounts or passwords — your Recovery Key (see the Privacy Policy, Section 1) is the only credential associated with your journal, and it exists solely on your device. You are responsible for keeping your device and your Recovery Key secure, and for any activity that occurs through direct access to your device. Notify us promptly at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a> if you believe your Recovery Key has been compromised.</p>

          <h2>6. Permissions &amp; Device Access</h2>
          <p>The App may request access to your microphone, speech recognition, camera, photo library, storage, and notifications to support the features described in our Privacy Policy. You may deny certain permissions, but related features may not function.</p>

          <h2>7. Third-Party Services</h2>
          <p>The App integrates third-party services for analytics, crash reporting, AI processing, advertising, and subscription management, as described in our Privacy Policy. These services are governed by their own terms and privacy policies. We are not responsible for third-party services, content, or practices.</p>

          <h2>8. Subscriptions &amp; In-App Purchases</h2>
          <p>Sanctuary may offer premium features and subscriptions (&quot;Sanctuary Pro&quot;). Payment and billing are processed by the Apple App Store, Google Play Store, or other authorized payment providers (via RevenueCat). Refunds and billing disputes are handled according to the applicable store&apos;s policies. We do not store your full payment card details.</p>
          <p>Free trials, if offered, convert to paid subscriptions unless cancelled before the trial ends, in accordance with the applicable store&apos;s rules.</p>

          <h2>9. Disclaimer of Warranties</h2>
          <p>THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE, OR THAT TRANSCRIPTS, MOOD ANALYSIS, OR AI-GENERATED REFLECTIONS WILL BE ACCURATE OR COMPLETE.</p>

          <h2>10. Limitation of Liability</h2>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, APP AXIS LAB AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP, INCLUDING ERRORS IN AI-GENERATED TRANSCRIPTS OR REFLECTIONS, A LOST RECOVERY KEY, OR DATA LOSS.</p>
          <p>OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE APP SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US FOR THE APP IN THE TWELVE (12) MONTHS BEFORE THE CLAIM, OR (B) FIFTY U.S. DOLLARS (USD $50), WHERE PERMITTED BY LAW.</p>

          <h2>11. Indemnification</h2>
          <p>You agree to indemnify and hold harmless App Axis Lab from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from your use of the App, your User Content, violations of recording-consent laws, or your violation of this Agreement or applicable law.</p>

          <h2>12. Termination</h2>
          <p>This license is effective until terminated. We may suspend or terminate your access to the App at any time if you breach this Agreement. Upon termination, you must cease all use of the App and delete all copies from your devices. Sections that by their nature should survive termination will survive.</p>

          <h2>13. Changes to This Agreement</h2>
          <p>We may update this EULA from time to time. Continued use of the App after changes become effective constitutes acceptance of the revised Agreement. The &quot;Last updated&quot; date at the top of this page will reflect material revisions.</p>

          <h2>14. Governing Law &amp; Disputes</h2>
          <p>This Agreement is governed by the laws of the jurisdiction in which App Axis Lab operates, without regard to conflict-of-law principles, except where mandatory consumer protection laws in your country provide otherwise. Any dispute shall be resolved in the courts of that jurisdiction, unless applicable law requires a different forum.</p>

          <h2>15. Children</h2>
          <p>The App is not intended for children under 13 years of age (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children, as described in our Privacy Policy.</p>

          <h2>16. Apple App Store (iOS)</h2>
          <p>If you obtained the App through the Apple App Store, you also agree that:</p>
          <ul>
            <li>This Agreement is between you and App Axis Lab only, not Apple Inc. (&quot;Apple&quot;).</li>
            <li>Apple is not responsible for the App or its content, maintenance, support, or warranty obligations.</li>
            <li>Apple has no obligation to furnish maintenance or support services for the App.</li>
            <li>In the event of any failure of the App to conform to any applicable warranty, you may notify Apple for a refund of the purchase price (if any); to the maximum extent permitted by law, Apple has no other warranty obligation.</li>
            <li>Apple is not responsible for addressing any claims relating to the App, including product liability, legal compliance, consumer protection, privacy, or intellectual property infringement.</li>
            <li>Apple and its subsidiaries are third-party beneficiaries of this Agreement and may enforce it against you as a third-party beneficiary.</li>
            <li>You represent that you are not located in a country subject to a U.S. Government embargo or designated as a &quot;terrorist supporting&quot; country, and that you are not listed on any U.S. Government prohibited or restricted party list.</li>
            <li>You must comply with applicable third-party terms when using the App (e.g., wireless data service agreements).</li>
          </ul>

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
