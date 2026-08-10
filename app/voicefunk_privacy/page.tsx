import type { Metadata } from 'next'
import PrivacyLayout from '@/components/PrivacyLayout'
import s from '@/styles/privacy.module.css'

export const metadata: Metadata = {
  title: 'VoiceFunk — Privacy Policy & EULA | App Axis Lab',
}

export default function VoiceFunkPrivacy() {
  return (
    <PrivacyLayout
      appName="VoiceFunk"
      subtitle="Voice Changer & Audio/Video Effects — Privacy Policy & End User License Agreement (EULA)"
      lastUpdated="Last updated: August 7, 2026"
    >
      <div className={s.card}>
        <div className={s.privacyContent}>
          <p>This page contains the <a href="#privacy">Privacy Policy</a> and <a href="#eula">End User License Agreement (EULA)</a> for VoiceFunk. By downloading, installing, or using the App, you agree to both documents.</p>

          <h1 id="privacy">Privacy Policy</h1>

          <h2>Scope</h2>
          <p>Welcome to VoiceFunk&apos;s Privacy Policy. Your privacy is important to us. This Privacy Policy explains how App Axis Lab (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses, stores, and shares your information when you use our voice changer and audio/video effects mobile application (the &quot;App&quot; or &quot;Services&quot;).</p>
          <p>If you do not agree with this Privacy Policy, please do not use our Services.</p>

          <h2>Overview</h2>
          <p>VoiceFunk lets you record audio and video, apply fun voice and sound effects, and use a set of audio tools — noise reduction, trim, mix audio, speech-to-text transcription, and set-as-ringtone. All recording and effect processing happens directly on your device. No account is required, and we do not collect or upload your recordings.</p>
          <div className={s.highlightBox}>
            <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
              <li><strong>No account is required</strong> — VoiceFunk works without sign-in, email, or any user profile.</li>
              <li><strong>Your recordings stay on your device</strong> — audio and video you record, and the effects applied to them, are processed entirely on-device and are never uploaded to our servers.</li>
              <li><strong>App preferences stay on your device</strong> — your language selection and a couple of local usage counters are stored locally and never transmitted to any server we control.</li>
              <li><strong>VoiceFunk is free and ad-supported</strong> — we don&apos;t currently offer any in-app purchases or subscriptions.</li>
              <li><strong>We never sell your personal information.</strong></li>
            </ul>
          </div>

          <h2>1. What VoiceFunk Does</h2>
          <p>VoiceFunk is a voice changer and audio/video effects app. It lets you record your voice or a video, apply funny or dramatic voice effects, preview and save the result, and share it with others. It also includes a set of audio tools: noise reduction, trim, mix audio, set as ringtone, and speech-to-text transcription of your recordings.</p>
          <p>All effect processing (pitch-shifting, filters, mixing, trimming) happens locally on your device using on-device audio processing — none of your recordings are sent to us to be processed.</p>

          <h2>2. Information We Collect</h2>

          <div className={s.highlightBox}>
            <p style={{ margin: 0 }}><strong>VoiceFunk does not collect or upload your recordings, videos, or photos to our servers.</strong> The information described below is either kept entirely on your device or is limited, anonymous usage data used to understand how the App is used.</p>
          </div>

          <p><strong>2.1 Recordings &amp; Media Files</strong></p>
          <p>Audio and video you record within the App, and any existing audio file you choose to open from your device (via the system file picker), are processed entirely on your device to apply effects, trim, mix, or reduce noise. Processed output is saved to your device&apos;s media library or set as your ringtone only when you choose to do so. We do not access, collect, or transmit these files.</p>

          <p><strong>2.2 App Preferences</strong></p>
          <p>Your selected display language is stored locally on your device so the App remembers your choice. It is never transmitted anywhere.</p>

          <p><strong>2.3 Local Usage Counters</strong></p>
          <p>The App keeps a small local counter to decide when to show an in-app &quot;Rate Us&quot; prompt after you&apos;ve used a few core features. This counter lives only on your device and is never transmitted anywhere.</p>

          <p><strong>2.4 Speech-to-Text Data</strong></p>
          <p>The Speech to Text tool uses your device&apos;s built-in operating system speech-recognition service (for example, Android&apos;s on-device speech recognizer) to convert your recording into text. Your audio is handed to that OS-level service to produce a transcript; VoiceFunk itself does not store or transmit your audio or transcript to our own servers. How that OS-level service handles your audio is governed by your device manufacturer&apos;s and/or Google&apos;s own privacy policy, not by us.</p>

          <p><strong>2.5 Usage &amp; Analytics Data</strong></p>
          <p>We use Firebase Analytics to understand how people use VoiceFunk. This includes technical and behavioral information such as: screens viewed, which mode and effects you select, recording start/stop/duration events, whether content was saved or shared, ad interactions, and error/crash diagnostics. Firebase Analytics may also collect standard device and app-instance identifiers as described in <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Firebase privacy documentation</a>. We do not use this data to identify you personally.</p>

          <p><strong>2.6 Advertising Data</strong></p>
          <p>VoiceFunk is supported by advertising. Our ad partners (listed in Section 6) may collect device identifiers, general location (such as country/region), and ad-interaction data to deliver and measure ads, in accordance with their own privacy policies and your consent choices where required (for example, the App Tracking Transparency or Google&apos;s EU consent prompts).</p>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information described above to:</p>
          <ul>
            <li>Provide and run the App&apos;s recording, effects, and audio-tool features</li>
            <li>Remember your language preference between sessions</li>
            <li>Decide when to show a one-time in-app &quot;Rate Us&quot; prompt</li>
            <li>Understand feature usage and diagnose errors so we can improve the App</li>
            <li>Show and measure advertising that keeps VoiceFunk free to use</li>
          </ul>
          <p>We do <strong>not</strong> use your recordings, videos, or photos for advertising, profiling, or automated decision-making, because we never receive them.</p>

          <h2>4. How We Share Your Information</h2>
          <p>We do not sell your personal information. We share limited technical/usage data with the service providers described below so they can perform their function (analytics and advertising):</p>
          <ul>
            <li><strong>Google Firebase</strong> — analytics as described in Section 2.5.</li>
            <li><strong>Google AdMob and its mediation partners</strong> — advertising as described in Section 2.6 and Section 6.</li>
            <li><strong>Your device&apos;s operating system / Google speech services</strong> — solely to power the optional Speech to Text feature, as described in Section 2.4.</li>
          </ul>
          <p>We do not otherwise share your information with third parties.</p>

          <h2>5. Permissions</h2>
          <p>VoiceFunk requests the following permissions:</p>
          <ul>
            <li><strong>Camera:</strong> Required to record video for the video voice-effects feature.</li>
            <li><strong>Microphone / Record Audio:</strong> Required to record your voice for audio and video effects, and for the audio tools (noise reduction, trim, mix, speech-to-text).</li>
            <li><strong>Modify Audio Settings:</strong> Used to manage audio routing and volume while recording and previewing effects.</li>
            <li><strong>Write Settings:</strong> Used only when you choose to set a processed recording as your device&apos;s ringtone.</li>
            <li><strong>Storage (legacy, Android 12 and below):</strong> Used to save your processed recordings and videos to your device&apos;s media library on older Android versions. On Android 13+, the App saves media without requesting broad storage access.</li>
            <li><strong>Access Media Location:</strong> Used when saving videos so location metadata embedded in a video file (if any) is preserved correctly when writing to your media library; VoiceFunk does not read or transmit this metadata.</li>
            <li><strong>Vibrate:</strong> Used for haptic feedback within the App&apos;s UI.</li>
            <li><strong>Internet:</strong> Required for analytics, advertising, and checking the Play Store listing.</li>
          </ul>
          <p>VoiceFunk does not use system pickers or broad photo/video library permissions to read your existing photos or videos — you only ever provide media by recording it in the App or, for audio tools, by explicitly picking a single file through your device&apos;s own file picker.</p>

          <h2>6. Third-Party Services</h2>
          <p>VoiceFunk integrates the following third-party services:</p>
          <ul>
            <li><strong>Google AdMob</strong> and its mediation partners — <a href="https://unity.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Unity Ads</a>, <a href="https://www.pangleglobal.com/privacy" target="_blank" rel="noopener noreferrer">Pangle</a>, <a href="https://vungle.com/privacy/" target="_blank" rel="noopener noreferrer">Liftoff/Vungle</a>, <a href="https://www.mintegral.com/en/privacy" target="_blank" rel="noopener noreferrer">Mintegral</a>, <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">Meta Audience Network</a>, <a href="https://www.applovin.com/privacy/" target="_blank" rel="noopener noreferrer">AppLovin</a>, <a href="https://www.is.com/privacy-policy/" target="_blank" rel="noopener noreferrer">ironSource</a>, and <a href="https://yandex.com/legal/confidential/" target="_blank" rel="noopener noreferrer">Yandex Mobile Ads</a> — used to show and measure ads. Each of these networks may collect device identifiers and ad-interaction data under its own privacy policy.</li>
            <li><strong>Google Firebase Analytics</strong> — used for app usage analytics as described in Section 2.5. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>.</li>
            <li><strong>Your device&apos;s OS-level speech recognition service</strong> — used only for the optional Speech to Text tool, as described in Section 2.4.</li>
          </ul>
          <p>VoiceFunk does not integrate any cloud storage, login, or crash-only reporting service beyond what is listed above.</p>

          <h2>7. Data Security</h2>
          <p>Because your recordings and media files are processed and stored on your device rather than on our servers, the risk of exposure through us is minimal. Local app preferences are stored using your device&apos;s standard app-data storage. We rely on the security practices of our third-party analytics and advertising providers for the limited data described above.</p>

          <h2>8. Your Rights &amp; Controls</h2>

          <p><strong>8.1 Access &amp; Control</strong></p>
          <p>You can change your language preference at any time from within the App. Your recordings and saved media can be viewed, moved, or deleted using your device&apos;s own gallery or file manager.</p>

          <p><strong>8.2 Delete Your Data</strong></p>
          <p>Uninstalling the App permanently removes all locally stored preferences and counters from your device. Recordings you&apos;ve already saved to your device&apos;s media library are not affected by uninstalling the App and can be deleted directly from your gallery.</p>

          <p><strong>8.3 Advertising Choices</strong></p>
          <p>You can reset your advertising identifier or opt out of interest-based advertising through your device&apos;s OS-level settings (for example, Android Settings &gt; Privacy &gt; Ads, or Google&apos;s <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">Ads Settings</a>).</p>

          <p><strong>8.4 For EU/EEA &amp; UK Residents (GDPR)</strong></p>
          <p>If you are located in the European Union, European Economic Area, or United Kingdom, you have rights under the GDPR, including access, correction, deletion, and objection rights over data held about you. Because VoiceFunk itself does not hold your recordings or an account tied to you, most of these rights are exercised directly on your device or through our analytics/ad partners&apos; own tools. For questions, contact us at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.</p>

          <p><strong>8.5 For California Residents (CCPA/CPRA)</strong></p>
          <p>If you are a California resident, you have rights under the CCPA and CPRA. VoiceFunk does not sell your personal information. We do not hold an account or recordings tied to you that we could delete on request; uninstalling the App removes all locally stored data.</p>

          <h2>9. Data Retention</h2>
          <p>App preferences and local usage counters are stored only on your device for as long as the App is installed. Analytics and advertising data is retained by our third-party providers under their own retention policies. We do not retain your recordings, videos, or photos, because we never receive them.</p>

          <h2>10. Children&apos;s Privacy</h2>
          <p>VoiceFunk is not intended for users under 13 years of age (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children. Because the App does not collect your recordings or require an account, no meaningful child data is held by us.</p>
          <p>If you are a parent or guardian with concerns, please contact us at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.</p>

          <h2>11. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Changes take effect upon posting, and we will update the &quot;Last updated&quot; date at the top of this page. For material changes that significantly affect your rights, we will provide notice through the App or other appropriate means. We encourage you to review this policy periodically.</p>

          <h2>12. Contact Us</h2>
          <p>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:support@appaxislab.com">support@appaxislab.com</a></li>
            <li><strong>Developer:</strong> App Axis Lab</li>
          </ul>

          <hr className={s.divider} />

          <h1 id="eula">End User License Agreement (EULA)</h1>
          <p>This End User License Agreement (&quot;Agreement&quot;) is a legal agreement between you (&quot;User&quot; or &quot;you&quot;) and App Axis Lab (&quot;Licensor&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) for the VoiceFunk mobile application (the &quot;App&quot;). By downloading, installing, or using the App, you agree to be bound by this Agreement. If you do not agree, do not download, install, or use the App.</p>

          <h2>1. License Grant</h2>
          <p>Subject to your compliance with this Agreement, we grant you a limited, non-exclusive, non-transferable, revocable license to install and use the App on devices you own or control, for your personal, non-commercial use, in accordance with this Agreement and applicable app store terms.</p>

          <h2>2. Restrictions</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Copy, modify, adapt, or create derivative works of the App</li>
            <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the App, except where expressly permitted by law</li>
            <li>Rent, lease, lend, sell, sublicense, or distribute the App or any part of it</li>
            <li>Remove, alter, or obscure any proprietary notices or labels on the App</li>
            <li>Use the App to record, process, or share content that infringes another person&apos;s rights, is unlawful, or that you do not have the right to record or distribute</li>
            <li>Interfere with or disrupt the App or connected systems, including its advertising integrations</li>
            <li>Use automated systems or bots to access or use the App without our written consent</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>The App, including its design, trademarks, software, sound effects, and content, is owned by App Axis Lab or its licensors and is protected by copyright, trademark, and other intellectual property laws. This Agreement does not transfer any ownership rights to you.</p>

          <h2>4. Your Content &amp; Recordings</h2>
          <p>Any audio, video, or photo content you record or process using the App remains yours. Because this content is processed and stored on your own device, you are solely responsible for backing it up, storing it securely, and complying with any laws (such as consent-to-record laws) that apply to recording or sharing content featuring other people. We cannot recover your recordings if you uninstall the App, delete them, or lose your device.</p>

          <h2>5. Responsible Use</h2>
          <p>You must use the App lawfully, including obtaining consent from anyone you record where required by law. You are responsible for any consequences arising from your use of the App, including any content you create, save, or share using its features.</p>

          <h2>6. Permissions &amp; Device Access</h2>
          <p>The App requests access to your camera, microphone, audio settings, ringtone settings, and (on older Android versions) storage, to support the features described in our <a href="#privacy">Privacy Policy</a>. You may deny certain permissions, but related features (such as recording video or setting a ringtone) may not function.</p>

          <h2>7. Advertising</h2>
          <p>VoiceFunk is free to use and is supported by advertising served through Google AdMob and its mediation partners listed in our <a href="#privacy">Privacy Policy</a>. VoiceFunk does not currently offer in-app purchases or subscriptions. If that changes in the future, this Agreement will be updated accordingly and any purchases would be processed through the applicable app store.</p>

          <h2>8. Disclaimer of Warranties</h2>
          <p>THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE, OR THAT ANY EFFECT, RECORDING, OR EXPORTED FILE WILL MEET YOUR EXPECTATIONS.</p>

          <h2>9. Limitation of Liability</h2>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, APP AXIS LAB AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP, INCLUDING THE LOSS OF ANY RECORDING OR PROCESSED FILE.</p>
          <p>OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE APP SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US FOR THE APP IN THE TWELVE (12) MONTHS BEFORE THE CLAIM, OR (B) FIFTY U.S. DOLLARS (USD $50), WHERE PERMITTED BY LAW.</p>

          <h2>10. Indemnification</h2>
          <p>You agree to indemnify and hold harmless App Axis Lab from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from your use of the App, any content you record or share using it, or your violation of this Agreement or applicable law.</p>

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
