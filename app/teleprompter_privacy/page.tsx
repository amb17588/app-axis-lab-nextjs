import type { Metadata } from 'next'
import PrivacyLayout from '@/components/PrivacyLayout'
import s from '@/styles/privacy.module.css'

export const metadata: Metadata = {
  title: 'Teleprompter — Privacy Policy & EULA | App Axis Lab',
}

export default function TeleprompterPrivacy() {
  return (
    <PrivacyLayout
      appName="Teleprompter"
      subtitle="Script Reader & Video Recorder — Privacy Policy & End User License Agreement"
      lastUpdated="Last updated: August 28, 2026"
    >
      <div className={s.card}>
        <div className={s.privacyContent}>
          <p>
            This page contains the <a href="#privacy">Privacy Policy</a> and{' '}
            <a href="#eula">End User License Agreement (EULA)</a> for Teleprompter. By
            downloading, installing, or using the App, you agree to both documents.
          </p>

          <h1 id="privacy">Privacy Policy</h1>

          <h2>Scope</h2>
          <p>
            Welcome to Teleprompter&apos;s Privacy Policy. Your privacy is important to us. This
            Privacy Policy explains how Teleprompter (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses,
            stores, and shares your information when you use our teleprompter and
            video-recording mobile application and related services (the &quot;App&quot; or
            &quot;Services&quot;).
          </p>
          <p>If you do not agree with this Privacy Policy, please do not use our Services.</p>

          <h2>Overview</h2>
          <p>
            Teleprompter lets you write or import a script, read it on camera with the script
            auto-scrolling as you go (including hands-free, voice-driven scrolling), and then
            trim, caption, and style the recording in a built-in video editor before exporting or
            sharing it. Teleprompter is built to be <strong>local-first</strong> — there is no
            account, sign-up, or backend server behind the App.
          </p>
          <div className={s.highlightBox}>
            <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
              <li><strong>No account or sign-up</strong> — the App does not ask for your name, email, or password, and does not create any account, anonymous or otherwise.</li>
              <li><strong>Everything stays on your device</strong> — your scripts, recordings, and settings are stored locally (via on-device SQLite and key-value storage) and are never transmitted to us or to any server we operate.</li>
              <li><strong>No backend, no sync, no social features</strong> — the App has no servers of its own; nothing you create is uploaded anywhere by us.</li>
              <li><strong>Optional AI features are bring-your-own-key</strong> — if you choose to use AI script generation or AI script polishing, the text you submit is sent directly from your device to that feature&apos;s provider (OpenAI or Anthropic) using an API key you supply; we never see or store that content ourselves. See <a href="#ai-features">Section 2.4</a>.</li>
              <li><strong>We request camera, microphone, and photo library access</strong> — used only to record, transcribe speech for voice-scrolling, and import/save videos, all on your device. See <a href="#permissions">Section 5</a>.</li>
              <li><strong>We never sell your personal information.</strong></li>
            </ul>
          </div>

          <h2>1. Account &amp; Setup</h2>
          <p>Teleprompter does not require or create any account. The first time you open the App, you&apos;re taken through a short onboarding flow that only sets local preferences on your device, such as:</p>
          <ul>
            <li>Teleprompter defaults — font size, scroll speed, mirror mode, countdown, and auto-stop</li>
            <li>Camera defaults — default camera position, resolution, and frame rate</li>
            <li>Video export defaults — default aspect ratio and codec</li>
          </ul>
          <p>These settings are stored on your device and let the App remember your preferences between sessions.</p>

          <h2>2. Information We Collect</h2>

          <p><strong>2.1 Scripts, Recordings &amp; Settings (stored only on your device)</strong></p>
          <p>The following is created and stored entirely on your device, using local SQLite storage and MMKV, and is never sent to us or to any server we operate:</p>
          <ul>
            <li>Scripts you write, import (e.g. from a .docx file), or generate/edit with AI</li>
            <li>Video recordings you make with the App, and any edits you apply to them (trims, captions, filters, overlays, background replacement, exported files)</li>
            <li>Teleprompter, camera, and export preferences, and onboarding status</li>
            <li>Logos or images you add for use as overlays in the video editor</li>
          </ul>

          <p><strong>2.2 What We Do <em>Not</em> Collect</strong></p>
          <ul>
            <li>No email address, phone number, real name, or government ID</li>
            <li>No account identifiers of any kind — the App does not create an account for you</li>
            <li>No precise or approximate location/GPS</li>
            <li>No contacts list access</li>
            <li>No payment card details — the App does not currently process any purchases</li>
          </ul>

          <p><strong>2.3 Device Data</strong></p>
          <p>We do not operate analytics, crash-reporting, or advertising services in the App, and we do not collect device identifiers, advertising IDs, or usage analytics ourselves.</p>

          <p id="ai-features"><strong>2.4 Optional AI Features</strong></p>
          <p>Teleprompter includes two optional, bring-your-own-key AI features. Neither is required to use the App, and neither is on by default until you supply an API key:</p>
          <ul>
            <li><strong>AI Script Writer</strong> — a script-generation wizard that sends your prompt (and, for editing tasks, the relevant script text) directly from your device to <strong>OpenAI</strong>, using an API key you configure. This key is read from your local app configuration and is not collected by us.</li>
            <li><strong>Inline script polish</strong> (rewrite, shorten, expand, fix grammar, adjust tone) — sends the relevant script text directly from your device to <strong>Anthropic (Claude)</strong>, using an API key you paste into the App&apos;s Settings screen. This key is stored locally on your device and is not collected by us.</li>
          </ul>
          <div className={s.highlightBox}>
            In both cases, the request goes directly from your device to the AI provider — we do
            not operate a server in between, and we do not receive, log, or store the content of
            these requests or responses. Text you submit to these features is handled under that
            provider&apos;s own privacy policy (see <a href="#third-party">Section 9</a>).
          </div>

          <h2>3. How We Use Your Information</h2>
          <p>Because scripts, recordings, and settings are stored only on your device, we do not &quot;use&quot; this information ourselves — the App uses it locally to:</p>
          <ul>
            <li>Display your script library and recording library</li>
            <li>Scroll the teleprompter, including matching your speech to the script for voice-scrolling</li>
            <li>Apply the edits you make in the video editor and produce an exported video file</li>
            <li>Remember your preferences between app launches</li>
            <li>Send your own prompts/script text to an AI provider, only if and when you use an AI feature with your own API key</li>
          </ul>

          <h2>4. How We Share Your Information</h2>

          <p><strong>4.1 We Don&apos;t Operate a Backend</strong></p>
          <p>Teleprompter has no server of its own. We do not receive your scripts, recordings, or settings, so there is nothing for us to share.</p>

          <p><strong>4.2 With AI Providers (Only If You Use AI Features)</strong></p>
          <p>If you configure an API key and use the AI Script Writer or inline script polish features, the relevant text is sent directly from your device to OpenAI or Anthropic respectively, so that provider can process your request. We do not act as an intermediary and do not receive a copy of this data ourselves.</p>

          <p><strong>4.3 Legal Requirements</strong></p>
          <p>We may disclose information if required by law, regulation, legal process, or governmental request, or when we believe disclosure is necessary to protect the rights, property, or safety of Teleprompter, our users, or others. In practice, because we do not hold your content on any server, we generally have nothing to disclose beyond publicly available app-store account information.</p>

          <p><strong>4.4 Business Transfers</strong></p>
          <p>If Teleprompter or App Axis Lab is involved in a merger, acquisition, reorganization, or sale of assets, any data we do hold (see <a href="#permissions">Sections 2</a> and 6) may be transferred as part of that transaction. We will notify you of any material change in ownership or use of your personal information.</p>

          <p>We do <strong>not</strong> sell your personal information, and we never sell the content of your scripts or recordings.</p>

          <h2 id="permissions">5. Permissions</h2>
          <p>Teleprompter requests the following device capabilities, all used solely to power on-device features:</p>
          <ul>
            <li><strong>Camera:</strong> To record video while you read your script on the teleprompter.</li>
            <li><strong>Microphone:</strong> To record audio with your video, and to power on-device speech recognition for voice-assisted scrolling and auto-generated captions.</li>
            <li><strong>Speech Recognition:</strong> To transcribe your speech on-device so the script can scroll automatically as you read it aloud, and to generate captions for your recordings.</li>
            <li><strong>Photo Library / Media:</strong> To let you import existing videos as recordings, and to save your exported recordings to your device&apos;s photo library.</li>
            <li><strong>Notifications, Overlay &amp; Foreground Service</strong> (Android): Used to support the optional floating teleprompter window that can display over other apps.</li>
          </ul>
          <div className={s.highlightBox}>
            All of the above processing (recording, transcription, caption generation, video
            editing) happens on your device. We do not receive your camera feed, microphone
            audio, transcripts, or photo library contents.
          </div>

          <h2>6. Data Security</h2>
          <p>We take security seriously:</p>
          <ul>
            <li>Because your scripts, recordings, and settings are stored only on your device, most of your content never travels over a network at all.</li>
            <li>If you use an optional AI feature, your API key is stored locally on your device and your request is sent directly to the provider over an encrypted connection (HTTPS/TLS).</li>
            <li>We minimize the data the App transmits to what is strictly needed to provide the Services you choose to use.</li>
          </ul>
          <p>No system is completely secure, and we cannot guarantee absolute security. Because there is no account or cloud backup, uninstalling the App or losing your device may permanently delete your scripts and recordings — you are responsible for backing up anything you want to keep (for example, by saving exported videos to your photo library).</p>

          <h2>7. Cookies &amp; Tracking Technologies</h2>
          <p>The App itself does not use cookies, advertising SDKs, or tracking technologies, and does not show ads. This web page may use basic cookies or local storage to remember display preferences.</p>

          <h2>8. Subscriptions &amp; Payments</h2>
          <p>Teleprompter currently offers a free tier with certain limits (such as a maximum script length, a maximum recording duration, and an export watermark). The App does not currently process any in-app purchases or subscriptions. If we introduce premium features or subscriptions in the future, this Privacy Policy will be updated before that feature becomes available, and any payments would be processed entirely by the applicable app store (Google Play or the App Store) — we would not directly collect or store your payment card details.</p>

          <h2 id="third-party">9. Third-Party Services</h2>
          <p>Teleprompter uses the following third-party services, only when you actively choose to use the corresponding feature:</p>
          <ul>
            <li>AI script generation (OpenAI), if you configure an API key for the AI Script Writer</li>
            <li>AI script polishing (Anthropic/Claude), if you configure an API key in Settings</li>
          </ul>
          <p>
            These services operate under their own privacy policies. We recommend reviewing{' '}
            <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer">
              OpenAI&apos;s Privacy Policy
            </a>{' '}
            and{' '}
            <a href="https://www.anthropic.com/legal/privacy" target="_blank" rel="noopener noreferrer">
              Anthropic&apos;s Privacy Policy
            </a>{' '}
            before using these features.
          </p>

          <h2>10. Your Rights &amp; Controls</h2>

          <p><strong>10.1 Access &amp; Control</strong></p>
          <p>You can view, edit, and delete your scripts and recordings directly within the App at any time. You can change or remove your AI provider API keys, and adjust teleprompter, camera, and export defaults, from the App&apos;s Settings screen.</p>

          <p><strong>10.2 Delete Your Data</strong></p>
          <p>Because all of your content lives only on your device, you can delete it at any time by deleting individual scripts/recordings in the App, or by uninstalling the App, which removes all of its local data (scripts, recordings, settings, and any saved API keys) from your device. We hold no copy of this data to delete on our end.</p>

          <p><strong>10.3 Communication Preferences</strong></p>
          <p>Since we don&apos;t collect contact information, we don&apos;t send you marketing communications. Any notifications the App shows come from features you enable, such as the floating teleprompter window.</p>

          <p><strong>10.4 For EU/EEA &amp; UK Residents (GDPR)</strong></p>
          <p>If you are located in the European Union, European Economic Area, or United Kingdom, you have rights under the GDPR, including the right to access, rectify, erase, restrict processing, data portability, and to object to certain processing. Because Teleprompter stores your content only on your device and has no account system, most of these rights are already exercised directly within the App (see 10.1–10.2). You also have the right to lodge a complaint with a supervisory authority.</p>

          <p><strong>10.5 For California Residents (CCPA/CPRA)</strong></p>
          <p>If you are a California resident, you have rights under the CCPA and CPRA, including the right to know what personal information is collected and the right to request deletion. Teleprompter does not sell or share personal information, and does not use cross-context behavioral advertising.</p>

          <p>
            To exercise your privacy rights or ask questions, contact us at{' '}
            <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>. We aim to respond
            within 30 days.
          </p>

          <h2>11. Data Retention</h2>
          <p>All app data (your scripts, recordings, and preferences) is removed automatically when you uninstall the App, or immediately when you delete it within the App. We do not retain any copy of this data on our end, since we have no backend server. If you use an optional AI feature, retention of the text you submit is governed by that provider&apos;s own policy (see <a href="#third-party">Section 9</a>).</p>

          <h2>12. Children&apos;s Privacy</h2>
          <p>Teleprompter is not directed at children under 13 years of age (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children, and the App does not display advertising. If we discover that we have inadvertently collected personal information from a child, we will take steps to delete it promptly.</p>
          <p>
            If you are a parent or guardian and believe your child has provided us with personal
            information, please contact us at{' '}
            <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.
          </p>

          <h2>13. International Transfers</h2>
          <p>Teleprompter itself does not transfer your content internationally, since it is stored only on your device. If you use an optional AI feature, the text you submit may be processed and stored by that provider in countries other than your own, under its own privacy policy and safeguards.</p>

          <h2>14. Legal Basis for Processing</h2>
          <p>Where applicable law requires a legal basis for processing personal data, we rely on one or more of the following:</p>
          <ul>
            <li><strong>Consent:</strong> For optional AI features, which only activate once you configure an API key.</li>
            <li><strong>Contractual necessity:</strong> To provide the features of the App you choose to use.</li>
            <li><strong>Legal obligations:</strong> To comply with applicable laws and regulations.</li>
            <li><strong>Legitimate interests:</strong> To secure and improve the Services, balanced against your rights and interests.</li>
          </ul>

          <h2>15. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Changes take effect upon posting, and we will update the &quot;Last updated&quot; date at the top of this page. For material changes that significantly affect your rights, we will provide notice through the App or other appropriate means. We encourage you to review this policy periodically.</p>

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
            (&quot;User&quot; or &quot;you&quot;) and App Axis Lab (&quot;Licensor&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) for the
            Teleprompter mobile application (the &quot;App&quot;). By downloading, installing, or using
            the App, you agree to be bound by this Agreement. If you do not agree, do not
            download, install, or use the App.
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
            <li>Use the App for any unlawful purpose, including recording or distributing content you don&apos;t have the right to record or distribute</li>
            <li>Interfere with or disrupt the App or the third-party AI services it optionally connects to</li>
            <li>Use another person&apos;s AI provider API key without authorization, or attempt to extract or misuse API keys stored by the App</li>
            <li>Use automated systems or bots to access or use the App without our written consent</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>The App, including its design, illustrations, trademarks, software, and content (excluding the content you create), is owned by App Axis Lab or its licensors and is protected by copyright, trademark, and other intellectual property laws. This Agreement does not transfer any ownership rights to you. You retain full ownership of the scripts and recordings you create with the App.</p>

          <h2>4. Your Content</h2>
          <p>You retain ownership of all content you create with the App (&quot;User Content&quot;), including scripts, recordings, and edited videos. Because Teleprompter stores this content only on your device and does not operate a backend, we do not have access to, and cannot back up or restore, your User Content — you are solely responsible for backing up anything you want to keep (for example, by saving exported videos to your device&apos;s photo library). You are responsible for the accuracy, legality, and appropriateness of the scripts and recordings you create, and for ensuring you have the right to record and, if applicable, distribute their content.</p>

          <h2>5. Optional AI Features &amp; Third-Party API Keys</h2>
          <div className={s.highlightBox}>
            The AI Script Writer and inline script polish features are optional and require you
            to supply your own API key for OpenAI or Anthropic respectively. By using these
            features, you agree to the applicable provider&apos;s own terms of service and usage
            policies, and you are responsible for any usage charges billed to you by that
            provider. We are not a party to your agreement with the AI provider and are not
            responsible for the availability, accuracy, or output of their services.
          </div>

          <h2>6. Responsible Use</h2>
          <p>Teleprompter is a tool to help you write, read, and record scripted video content. You must use the App lawfully and must not use it to record, generate, or distribute unlawful, defamatory, or infringing content. You are responsible for the accuracy of any script content you write, import, or generate with AI, and for how you use it.</p>

          <h2>7. Device Permissions</h2>
          <p>
            The App may request access to your camera, microphone, speech recognition, and photo
            library to support the features described in our{' '}
            <a href="#privacy">Privacy Policy</a>. You may deny any of these permissions, but
            doing so may prevent the corresponding feature (recording, voice-scrolling, captions,
            or importing/saving videos) from working.
          </p>

          <h2>8. Free Tier &amp; Future Premium Features</h2>
          <p>The App currently offers a free tier with certain limits (such as maximum script length, maximum recording duration, and an export watermark) and does not process any in-app purchases. If premium features, subscriptions, or in-app purchases are introduced in the future, they will be governed by an updated version of this Agreement and processed through the applicable app store, and we will provide notice before such features become available.</p>

          <h2>9. Disclaimer of Warranties</h2>
          <p>THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE, OR THAT ANY OPTIONAL THIRD-PARTY AI FEATURE WILL BE AVAILABLE OR PRODUCE ACCURATE OR APPROPRIATE OUTPUT.</p>

          <h2>10. Limitation of Liability</h2>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, APP AXIS LAB AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA (INCLUDING LOSS OF SCRIPTS OR RECORDINGS) OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP.</p>
          <p>OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE APP SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US FOR THE APP IN THE TWELVE (12) MONTHS BEFORE THE CLAIM, OR (B) FIFTY U.S. DOLLARS (USD $50), WHERE PERMITTED BY LAW.</p>

          <h2>11. Indemnification</h2>
          <p>You agree to indemnify and hold harmless App Axis Lab from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from your use of the App, your User Content, or your violation of this Agreement or applicable law.</p>

          <h2>12. Termination</h2>
          <p>This license is effective until terminated. We may suspend or terminate your access to the App at any time if you breach this Agreement. Upon termination, you must cease all use of the App and delete all copies from your devices. You may terminate at any time by uninstalling the App. Sections that by their nature should survive termination will survive.</p>

          <h2>13. Changes to This Agreement</h2>
          <p>We may update this EULA from time to time. Continued use of the App after changes become effective constitutes acceptance of the revised Agreement. The &quot;Last updated&quot; date at the top of this page will reflect material revisions.</p>

          <h2>14. Governing Law &amp; Disputes</h2>
          <p>This Agreement is governed by the laws of the jurisdiction in which App Axis Lab operates, without regard to conflict-of-law principles, except where mandatory consumer protection laws in your country provide otherwise. Any dispute shall be resolved in the courts of that jurisdiction, unless applicable law requires a different forum.</p>

          <h2>15. Children</h2>
          <p>The App is not intended for children under 13 years of age (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children as described in our Privacy Policy.</p>

          <h2>16. App Stores</h2>
          <p>If you obtained the App through Google Play or the Apple App Store, you agree that the applicable store operator is not a party to this Agreement and has no responsibility or liability with respect to the App. Your use of the store is subject to that store&apos;s terms of service. This Agreement is between you and App Axis Lab only.</p>

          <h2>17. Severability &amp; Entire Agreement</h2>
          <p>If any provision of this Agreement is held invalid or unenforceable, the remaining provisions remain in full force. This Agreement, together with our Privacy Policy, constitutes the entire agreement between you and App Axis Lab regarding the App and supersedes prior understandings on the same subject.</p>

          <h2>18. Contact</h2>
          <p>For questions about this EULA, contact App Axis Lab at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.</p>
        </div>
      </div>
    </PrivacyLayout>
  )
}
