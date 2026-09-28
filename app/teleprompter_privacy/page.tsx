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
      subtitle="Script Reading & Video Recording — Privacy Policy & End User License Agreement"
      lastUpdated="Last updated: September 28, 2026"
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
            Teleprompter lets you write or import a script, read it on camera with an
            auto-scrolling teleprompter overlay (including hands-free, voice-driven scrolling),
            and then trim, caption, and style the recording in a built-in video editor before
            exporting or sharing it. Teleprompter is <strong>fully local-first</strong> — there is
            no account, no sign-up, and no backend server. Your scripts and recordings are stored
            on your device using a local database (SQLite) and local key-value storage (MMKV).
          </p>
          <div className={s.highlightBox}>
            <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
              <li><strong>No sign-up or account required</strong> — nothing is tied to your name, email address, or a password.</li>
              <li><strong>Your scripts and recordings stay on your device</strong> — they are stored locally and are never uploaded to any server we operate.</li>
              <li><strong>The AI Script Writer is opt-in</strong> — it sends only the prompt you type (topic/goal/duration) to OpenAI to draft a script.</li>
              <li><strong>Camera, microphone, and speech recognition are used only to record your video and power auto-scroll</strong> — never for anything else, and never while you&apos;re not actively using those features.</li>
              <li><strong>We show ads and use limited device data for them</strong> — via Google AdMob.</li>
              <li><strong>We never sell your personal information.</strong></li>
            </ul>
          </div>

          <h2>1. Account &amp; Setup</h2>
          <p>
            Teleprompter does not require you to create an account. The App works entirely from
            data stored locally on your device, plus whatever onboarding preferences (language,
            notification permission choice, onboarding completion) you set the first time you
            open it.
          </p>

          <h2>2. Information We Collect</h2>

          <p><strong>2.1 Content You Create (Stored Only On Your Device)</strong></p>
          <p>The following is stored locally on your device, in our local database and key-value storage, and is never transmitted to us:</p>
          <ul>
            <li>Scripts you write, paste, or import (including files you import via the document picker, and Word/PDF documents you convert into a script)</li>
            <li>Recorded and edited videos, thumbnails, captions, and export settings created in the built-in video editor</li>
            <li>App preferences — theme, teleprompter font/scroll settings, camera quality, language, subscription status cache, and onboarding status</li>
          </ul>
          <div className={s.highlightBox}>
            None of the above ever leaves your device unless you explicitly use one of the
            optional features described below (an AI feature, sharing, or saving to your photo
            library).
          </div>

          <p><strong>2.2 AI Script Writer (Only If You Use It)</strong></p>
          <p>When you use the script-generation wizard, the language, goal, target duration, and topic you enter are sent to OpenAI&apos;s API to generate a draft script. This uses an API key built into the App; you don&apos;t need to provide your own key. Text you send is processed under OpenAI&apos;s own privacy policy (see <a href="#third-party">Section 9</a>). Only the specific prompt you submit is sent — not your full script library.</p>

          <p><strong>2.3 Camera, Microphone &amp; Speech Recognition</strong></p>
          <ul>
            <li>The camera is used to record video while you read your script.</li>
            <li>The microphone is used to record audio for your video and, if you enable voice-driven scrolling, to power the App&apos;s speech-recognition-based auto-scroll.</li>
            <li>Speech recognition is processed using your device&apos;s built-in speech recognition system (the iOS Speech framework or Android&apos;s SpeechRecognizer), which may process audio on-device or via the OS manufacturer&apos;s own speech service (Apple or Google), depending on your device and settings. We do not receive, store, or transmit this transcript ourselves beyond momentarily using it to track your scroll position.</li>
            <li>Recorded video and audio are saved to your device and are never uploaded by us unless you choose to export, share, or save them yourself.</li>
          </ul>

          <p><strong>2.4 Photo Library Access</strong></p>
          <ul>
            <li>You can import an existing video from your photo library to use as a recording.</li>
            <li>You can save an exported/edited video back to your device&apos;s photo library when you choose &quot;Save to device&quot;.</li>
          </ul>

          <p><strong>2.5 Advertising &amp; Device Information</strong></p>
          <p>We use Google AdMob (Google Mobile Ads SDK) to show ads. Google&apos;s SDK may collect and process data to serve and measure ads, including:</p>
          <ul>
            <li>An advertising identifier (Google Advertising ID) and anonymous installation identifiers</li>
            <li>Device type, model, operating system, and IP address</li>
            <li>Ad interaction data</li>
          </ul>
          <p>This data is used to show and measure ads and to prevent fraud, and is never based on the content of your scripts or recordings.</p>

          <p><strong>2.6 Subscription &amp; Purchase Data</strong></p>
          <p>Premium subscriptions are managed through Google Play Billing via RevenueCat. RevenueCat generates an anonymous app user identifier for your device (no account or email is required) and we receive subscription/entitlement status and anonymous purchase metadata to unlock premium features. We never see or store your payment card details — those are handled entirely by the Google Play Store.</p>

          <p><strong>2.7 Analytics, Crash Reporting &amp; Remote Configuration</strong></p>
          <p>We use Firebase (Google) for:</p>
          <ul>
            <li><strong>Analytics:</strong> anonymous usage events — such as screens viewed, app opens, settings changed, and feature usage — plus an anonymous installation identifier, to understand how the App is used and improve it. This is not tied to your name or email, because we don&apos;t collect either.</li>
            <li><strong>Crashlytics:</strong> crash reports and diagnostic stack traces, so we can find and fix bugs.</li>
            <li><strong>Remote Config:</strong> feature-flag and configuration values fetched to control which features are enabled for your app version. Your script and recording content is never sent as part of this.</li>
          </ul>

          <p><strong>2.8 In-App Feedback</strong></p>
          <p>If you submit feedback, a bug report, or a survey response from Settings, the content you submit (and any screenshot you choose to attach) is sent to our in-app feedback provider, along with an anonymous device-generated identifier so we can read and respond to it without collecting your name or email.</p>

          <p><strong>2.9 What We Do <em>Not</em> Collect</strong></p>
          <ul>
            <li>No name, email address, phone number, or account credentials — there is no account</li>
            <li>No precise or approximate location/GPS</li>
            <li>No contacts list access</li>
            <li>Camera and microphone data is only captured while you are actively recording or using voice-driven scrolling — never in the background or otherwise</li>
            <li>No payment card details — purchases are billed entirely through the Google Play Store</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information described above to:</p>
          <ul>
            <li>Provide the App&apos;s core features — writing/importing scripts, teleprompter auto-scroll (including voice-driven scrolling), recording, editing, exporting, and sharing video</li>
            <li>Generate or polish script text through the AI features you choose to use</li>
            <li>Display and measure advertising</li>
            <li>Process premium purchases and restore entitlements through Google Play Billing / RevenueCat</li>
            <li>Diagnose crashes, understand feature usage, and improve the App</li>
            <li>Respond to feedback, bug reports, and support requests you send us</li>
            <li>Maintain the security and integrity of the App</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>We do <strong>not</strong> use the content of your scripts or recordings for advertising, profiling, or automated decision-making.</p>

          <h2>4. How We Share Your Information</h2>

          <p><strong>4.1 With Our AI Provider</strong></p>
          <p>When you use the AI Script Writer, the prompt you submit is sent to OpenAI and processed under its own privacy policy (see <a href="#third-party">Section 9</a>). We do not otherwise share your scripts with any third party.</p>

          <p><strong>4.2 With Service Providers</strong></p>
          <p>We use a limited number of trusted providers to operate the App — Google (AdMob for advertising, Firebase for analytics/crash reporting/remote config), RevenueCat and Google Play Billing for subscriptions, and an in-app feedback provider. These providers process data only as needed to perform their services for us and are not permitted to use it for their own unrelated purposes.</p>

          <p><strong>4.3 Legal Requirements</strong></p>
          <p>We may disclose information if required by law, regulation, legal process, or governmental request, or when we believe disclosure is necessary to protect the rights, property, or safety of App Axis Lab, our users, or others.</p>

          <p><strong>4.4 Business Transfers</strong></p>
          <p>If Teleprompter or App Axis Lab is involved in a merger, acquisition, reorganization, or sale of assets, data we hold may be transferred as part of that transaction. We will notify you of any material change in ownership or use of your personal information.</p>

          <p><strong>4.5 Non-Personal Data</strong></p>
          <p>We may share aggregated or anonymized data that cannot reasonably be used to identify you for analytics and product-improvement purposes.</p>

          <p>We do <strong>not</strong> sell your personal information, and we never sell your scripts, recordings, or usage data.</p>

          <h2 id="permissions">5. Permissions</h2>
          <p>Teleprompter requests the following device capabilities:</p>
          <ul>
            <li><strong>Camera:</strong> to record video while you read your script.</li>
            <li><strong>Microphone &amp; Speech Recognition:</strong> to record audio and to power voice-driven, hands-free scrolling.</li>
            <li><strong>Photos/Media Library:</strong> to import an existing video as a recording, and to save your exported recordings when you choose &quot;Save to device&quot;.</li>
            <li><strong>Notifications:</strong> optional, used for reminders and in-app alerts. You can disable this in your device settings.</li>
            <li><strong>Display Over Other Apps:</strong> used only by the optional Floating Teleprompter feature, to show your script as an overlay while you use another app or your device&apos;s native camera.</li>
            <li><strong>Background/Foreground Service:</strong> keeps an active recording or the floating teleprompter overlay running reliably while the App is backgrounded.</li>
            <li><strong>Internet &amp; Network State:</strong> used to show ads, process the AI features you opt into, sync subscription status, and send analytics/crash/feedback data as described above.</li>
            <li><strong>Billing:</strong> used to process premium subscriptions through the Google Play Store.</li>
          </ul>
          <p>You can deny or later revoke any of these permissions in your device settings; doing so may disable the corresponding feature (for example, denying the camera prevents recording).</p>

          <h2>6. Data Security</h2>
          <p>We take security seriously:</p>
          <ul>
            <li>Data transmitted between the App and any third-party service (AI providers, AdMob, Firebase, RevenueCat, our feedback provider) is sent over encrypted connections (HTTPS/TLS).</li>
            <li>Your scripts and recordings are stored locally on your device; their security depends in part on your device&apos;s own security (passcode, disk encryption, etc.).</li>
            <li>Any API key you paste into Settings (for the inline polish feature) is stored only in local, on-device storage — it is never transmitted to our servers.</li>
            <li>We minimize the data we collect and transmit to what is needed to provide the Services.</li>
          </ul>
          <p>No system is completely secure, and we cannot guarantee absolute security. Because Teleprompter has no account or cloud backup, you are responsible for keeping your device secure and for backing up any scripts or recordings you don&apos;t want to lose.</p>

          <h2>7. Cookies &amp; Tracking Technologies</h2>
          <p>The App uses the Google AdMob SDK, which may use device or installation identifiers (such as your advertising ID) to serve and measure ads. Related web pages (such as this one) may use basic cookies or local storage to remember preferences. You can limit ad personalization and reset your advertising ID through your device settings.</p>

          <h2>8. Subscriptions &amp; Payments</h2>
          <p>Teleprompter offers an optional premium subscription that removes free-tier limits (such as script length and recording duration) and the export watermark, and unlocks additional features. Where offered:</p>
          <ul>
            <li>Payments are processed by the Google Play Store. We do not directly collect or store your payment card details.</li>
            <li>We receive subscription status and related purchase metadata from RevenueCat/Play to unlock premium features.</li>
            <li>Free trials, where offered, convert to a paid subscription unless cancelled before the trial ends, per the Play Store&apos;s rules.</li>
            <li>Refunds and billing disputes are handled according to the Google Play Store&apos;s policies.</li>
            <li>You can manage or cancel subscriptions through your Google Play account settings, and restore a previous purchase from within the App.</li>
          </ul>

          <h2 id="third-party">9. Third-Party Services</h2>
          <p>Teleprompter uses the following third-party services:</p>
          <ul>
            <li>Script generation — OpenAI</li>
            <li>Advertising, analytics, crash reporting, and remote configuration (Google AdMob, Firebase)</li>
            <li>Subscription management and payment processing — RevenueCat and the Google Play Store</li>
            <li>In-app feedback, bug reports, and surveys</li>
          </ul>
          <p>
            These services operate under their own privacy policies. We recommend reviewing,
            including{' '}
            <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer">
              OpenAI&apos;s Privacy Policy
            </a>
            ,{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Google&apos;s Privacy Policy
            </a>
            , and{' '}
            <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">
              RevenueCat&apos;s Privacy Policy
            </a>
            .
          </p>

          <h2>10. Your Rights &amp; Controls</h2>

          <p><strong>10.1 Access &amp; Control</strong></p>
          <p>You can view, edit, export, and delete your scripts and recordings directly within the App at any time. You can also update your preferences from the app settings.</p>

          <p><strong>10.2 Manage Ads</strong></p>
          <p>You can limit ad personalization and reset your advertising identifier in your device settings.</p>

          <p><strong>10.3 Delete Your Data</strong></p>
          <p>
            Uninstalling the App immediately deletes all on-device data (your scripts,
            recordings, and preferences), since none of it is stored on our servers. For data
            held by our service providers on your behalf — such as feedback submissions or
            purchase records tied to your anonymous RevenueCat identifier — contact us at{' '}
            <a href="mailto:support@appaxislab.com">support@appaxislab.com</a> and we will help
            coordinate deletion where possible.
          </p>

          <p><strong>10.4 Communication Preferences</strong></p>
          <p>You can control notification permissions through your device settings.</p>

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
          <p>On-device data (your scripts, recordings, and preferences) is removed automatically when you uninstall the App, since it is never stored on our servers. Text you submit to the AI Script Writer is retained by OpenAI under its own retention policy. Analytics, crash, advertising, subscription, and feedback data are retained by our respective service providers under their own policies, generally for as long as needed to provide their service or as required by law.</p>

          <h2>12. Children&apos;s Privacy</h2>
          <p>Teleprompter is not directed at children under 13 years of age (or the applicable age of consent in your jurisdiction), and our advertising is configured accordingly (not child-directed). We do not knowingly collect personal information from children. If we discover that we have collected personal information from a child without appropriate consent, we will take steps to delete it promptly.</p>
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
            <li><strong>Consent:</strong> For the AI Script Writer, personalized advertising, notifications, and other features where consent is required.</li>
            <li><strong>Contractual necessity:</strong> To provide the features and subscriptions you request.</li>
            <li><strong>Legal obligations:</strong> To comply with applicable laws and regulations.</li>
            <li><strong>Legitimate interests:</strong> To secure and improve the Services, show non-personalized ads, diagnose crashes, and support our business operations, balanced against your rights and interests.</li>
          </ul>

          <h2>15. Recording &amp; Export Disclaimer</h2>
          <div className={s.warnBox}>
            <strong>Teleprompter is provided on a best-effort basis and cannot guarantee that
            every recording, export, or AI request will complete successfully.</strong> Device
            storage limits, battery-optimization settings, background app restrictions, low
            battery, force-closing the App, or a lost network connection (for the AI Script
            Writer) can all interrupt a recording, export, or AI request. Because scripts and
            recordings are stored only on your device, uninstalling the App or losing your device
            will permanently delete them unless you have exported or backed them up yourself.
            AI-generated script text may contain errors and should be reviewed before you rely on
            it.
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
            Teleprompter mobile application (the &quot;App&quot;). By downloading, installing, or using
            the App, you agree to be bound by this Agreement. If you do not agree, do not
            download, install, or use the App.
          </p>

          <h2>1. License Grant</h2>
          <p>
            Subject to your compliance with this Agreement, we grant you a limited, non-exclusive,
            non-transferable, revocable license to install and use the App on devices you own or
            control, for your personal, non-commercial use, in accordance with this Agreement and
            applicable app store terms.
          </p>

          <h2>2. Restrictions</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Copy, modify, adapt, or create derivative works of the App</li>
            <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the App, except where expressly permitted by law</li>
            <li>Rent, lease, lend, sell, sublicense, or distribute the App or any part of it</li>
            <li>Remove, alter, or obscure any proprietary notices or labels on the App</li>
            <li>Use the App for any unlawful purpose, including recording or distributing content that infringes someone else&apos;s rights or violates their privacy</li>
            <li>Interfere with or disrupt the App or its connected third-party services (AI providers, advertising, analytics, billing)</li>
            <li>Attempt to gain unauthorized access to any backend systems of our service providers</li>
            <li>Use automated systems or bots to access or use the App without our written consent</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>
            The App, including its design, illustrations, trademarks, software, and content
            (excluding the content you create), is owned by App Axis Lab or its licensors and is
            protected by copyright, trademark, and other intellectual property laws. This
            Agreement does not transfer any ownership rights to you. You retain full ownership of
            the scripts, recordings, and other content you create with the App.
          </p>

          <h2>4. Your Content &amp; Account</h2>
          <p>
            You retain ownership of all content you create with the App (&quot;User Content&quot;),
            including your scripts and recordings. Teleprompter has no account system — all User
            Content is stored locally on your device, which also means it cannot be recovered by
            us if you uninstall the App, lose your device, or clear its storage. You are
            responsible for keeping your device secure and for backing up or exporting any content
            you don&apos;t want to lose. You agree not to use the App to create or share content
            that is misleading, offensive, or infringes someone else&apos;s rights.
          </p>

          <h2>5. Recording &amp; Data Loss — Please Read</h2>
          <div className={s.warnBox}>
            <strong>Teleprompter is provided on a best-effort basis and cannot guarantee that
            every recording, export, or AI request will complete successfully or that your
            content will never be lost.</strong> Because scripts and recordings live only on your
            device, uninstalling the App, losing your device, or clearing app storage will
            permanently delete them. <strong>Back up or export anything important</strong> —
            Teleprompter is not a substitute for your own backups.
          </div>
          <p>
            You are responsible for granting the permissions the App requests (camera, microphone,
            photo library, storage) and for keeping enough free storage on your device, as these
            are required for recording, editing, and exporting to work reliably.
          </p>

          <h2>6. AI Features &amp; Third-Party AI Providers</h2>
          <p>
            The App&apos;s AI Script Writer sends the prompt you submit to OpenAI to generate
            content on your behalf. AI-generated text may be inaccurate, incomplete, or unsuitable
            for your purposes, and you are solely responsible for reviewing it before you read it
            on camera, record it, or rely on it in any way. We are not responsible for the output
            of this third-party AI provider or for how you use it.
          </p>

          <h2>7. Responsible Use</h2>
          <p>
            Teleprompter is a tool to help you write, read, and record scripted video, and is not
            a substitute for professional advice of any kind. You must use the App lawfully and
            must not use it to create, record, or share content that harasses, defrauds, or
            infringes the rights or privacy of others. You are responsible for the accuracy of the
            information you enter and for how you use content you generate, record, or export with
            the App.
          </p>

          <h2>8. Account Security</h2>
          <p>
            You are responsible for securing your device. Because the App has no account, we
            cannot verify your identity or recover your content if you lose access to your device.
            Notify us at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>{' '}
            promptly if you have a security concern about the App itself.
          </p>

          <h2>9. Permissions &amp; Device Access</h2>
          <p>
            The App may request access to your camera, microphone, speech recognition, photo
            library, notifications, and display-over-other-apps permission to support the features
            described in our <a href="#privacy">Privacy Policy</a>. You may deny any of these
            permissions, but doing so may prevent the corresponding feature (recording,
            voice-driven scrolling, importing/saving video, the floating overlay) from working.
          </p>

          <h2>10. Advertising &amp; Third-Party Services</h2>
          <p>
            Teleprompter is supported by advertising and integrates third-party services for AI
            script generation, advertising, analytics, crash reporting, remote configuration,
            in-app feedback, and subscription billing. These services are governed by their own
            terms and privacy policies. We are not responsible for third-party services, content,
            or practices.
          </p>

          <h2>11. Subscriptions &amp; In-App Purchases</h2>
          <p>
            Teleprompter may offer premium features, subscriptions, or in-app purchases. Payment
            and billing are processed by the Google Play Store via RevenueCat. Refunds and billing
            disputes are handled according to the applicable store&apos;s policies. We do not store
            your full payment card details.
          </p>
          <p>
            Free trials, if offered, convert to paid subscriptions unless cancelled before the
            trial ends, in accordance with the applicable store&apos;s rules.
          </p>

          <h2>12. Disclaimer of Warranties</h2>
          <p>THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE, OR THAT ANY RECORDING, EXPORT, OR AI REQUEST WILL ALWAYS SUCCEED. THE APP DOES NOT PROVIDE PROFESSIONAL ADVICE OF ANY KIND.</p>

          <h2>13. Limitation of Liability</h2>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, APP AXIS LAB AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP, INCLUDING ANY LOST OR CORRUPTED SCRIPT OR RECORDING.</p>
          <p>OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE APP SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US FOR THE APP IN THE TWELVE (12) MONTHS BEFORE THE CLAIM, OR (B) FIFTY U.S. DOLLARS (USD $50), WHERE PERMITTED BY LAW.</p>

          <h2>14. Indemnification</h2>
          <p>You agree to indemnify and hold harmless App Axis Lab from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from your use of the App, your User Content, or your violation of this Agreement or applicable law.</p>

          <h2>15. Termination</h2>
          <p>This license is effective until terminated. We may suspend or terminate your access to the App at any time if you breach this Agreement. Upon termination, you must cease all use of the App and delete all copies from your devices. You may terminate at any time by uninstalling the App. Sections that by their nature should survive termination will survive.</p>

          <h2>16. Changes to This Agreement</h2>
          <p>We may update this EULA from time to time. Continued use of the App after changes become effective constitutes acceptance of the revised Agreement. The &quot;Last updated&quot; date at the top of this page will reflect material revisions.</p>

          <h2>17. Governing Law &amp; Disputes</h2>
          <p>This Agreement is governed by the laws of the jurisdiction in which App Axis Lab operates, without regard to conflict-of-law principles, except where mandatory consumer protection laws in your country provide otherwise. Any dispute shall be resolved in the courts of that jurisdiction, unless applicable law requires a different forum.</p>

          <h2>18. Children</h2>
          <p>The App is not intended for children under 13 years of age (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children as described in our Privacy Policy.</p>

          <h2>19. App Stores (Google Play)</h2>
          <p>If you obtained the App through Google Play, you agree that Google is not a party to this Agreement and has no responsibility or liability with respect to the App. Your use of the store is subject to Google Play&apos;s terms of service. This Agreement is between you and App Axis Lab only.</p>

          <h2>20. Severability &amp; Entire Agreement</h2>
          <p>If any provision of this Agreement is held invalid or unenforceable, the remaining provisions remain in full force. This Agreement, together with our Privacy Policy, constitutes the entire agreement between you and App Axis Lab regarding the App and supersedes prior understandings on the same subject.</p>

          <h2>21. Contact</h2>
          <p>For questions about this EULA, contact App Axis Lab at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.</p>
        </div>
      </div>
    </PrivacyLayout>
  )
}
