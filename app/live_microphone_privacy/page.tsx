import type { Metadata } from 'next'
import PrivacyLayout from '@/components/PrivacyLayout'
import s from '@/styles/privacy.module.css'

export const metadata: Metadata = {
  title: 'Live Microphone — Privacy Policy & Legal | App Axis Lab',
}

export default function LiveMicrophonePrivacy() {
  return (
    <PrivacyLayout
      appName="Live Microphone"
      subtitle="Privacy Policy, Terms of Service & End User License Agreement"
      lastUpdated="Last updated: August 14, 2026"
    >
      <div className={s.card}>
        <div className={s.privacyContent}>
          <div className={s.highlightBox}>
            <p>
              This page contains the <a href="#privacy">Privacy Policy</a>,{' '}
              <a href="#terms">Terms of Service</a>, and{' '}
              <a href="#eula">End User License Agreement (EULA)</a> for Live Microphone
              (&quot;Microphone to Speaker&quot;). By downloading, installing, or using the App,
              you agree to all three documents.
            </p>
          </div>

          {/* ── PRIVACY POLICY ── */}
          <h1 id="privacy">Privacy Policy</h1>

          <h2>Scope</h2>
          <p>
            Welcome to Live Microphone&apos;s Privacy Policy. Your privacy is important to us.
            This Privacy Policy explains how App Axis Lab (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) handles
            information in connection with your use of the Live Microphone mobile application
            and related features (the &quot;App&quot; or &quot;Services&quot;) available on the Google Play Store
            and, in the future, the Apple App Store.
          </p>
          <p>If you do not agree with this Privacy Policy, please do not use the App.</p>

          <h2>Overview</h2>
          <p>
            Live Microphone is an offline audio toolkit: hands-free push-to-talk recording, a
            manual voice recorder with a live waveform, text-to-speech playback of typed or
            imported text, a voice-effects tool for recordings, and a live microphone-to-speaker
            passthrough. There is no backend server, no user account, and no cloud storage.
          </p>
          <ul>
            <li>Everything you create — recordings, text documents, and imported files — is stored only on your device</li>
            <li>All processing (speech playback, text extraction, voice effects, live audio passthrough) happens on-device; nothing about your recordings, documents, photos, or files is uploaded anywhere</li>
            <li>The App does not require you to sign up, log in, or provide an email address</li>
            <li>The App contains no analytics SDK and no crash-reporting SDK</li>
            <li>The App includes the Google Mobile Ads SDK to support optional advertising (see Sections 2.4 and 7). This is the only component in the App that makes network requests or shares any data with a third party — every other feature works entirely offline</li>
          </ul>

          <h2>1. No Account Registration</h2>
          <p>
            Live Microphone does not use accounts, sign-in, or authentication of any kind. We do
            not collect your name, email address, or any other identity information, because we
            never ask for it.
          </p>

          <h2>2. Information We Collect</h2>

          <h3>2.1 Content You Create or Import</h3>
          <p>
            In the ordinary course of using the App&apos;s features, the App stores the following
            directly on your device, in a local database and local file storage — never on a
            server we operate or on any third party&apos;s server:
          </p>
          <ul>
            <li>Audio recordings you make with Hold &amp; Speak, Voice Recorder, Change Voice, and their voice-effect renders</li>
            <li>Text documents you type, plus any text extracted from files, photos, or PDFs you choose to import for Text to Audio</li>
            <li>Photos you capture or select to scan text from (processed on-device, then discarded unless you keep the resulting text document)</li>
            <li>Files you pick to import (plain text, Markdown, CSV, JSON, PDF, DOCX, RTF, EPUB, or images)</li>
            <li>Your app preferences (e.g. reduce-noise toggle, echo toggle, playback voice/rate/pitch, mic-skin choice), stored locally as simple key-value settings</li>
          </ul>
          <p>
            None of this content is transmitted off your device by the App. It exists only for as
            long as it remains on your device, or until you delete it or uninstall the App.
          </p>

          <h3>2.2 Device &amp; Technical Data</h3>
          <p>
            We (App Axis Lab) do not collect device identifiers, IP addresses, usage analytics,
            or diagnostic/crash data ourselves, and the App has no analytics or crash-reporting
            integration of our own. The only &quot;technical data&quot; the OS itself handles is what it
            needs to grant the permissions listed in Section 5, which never reaches us.
          </p>
          <p>
            The one exception is the Google Mobile Ads SDK described in Section 2.4: when it is
            actively serving ads, Google (not us) automatically receives certain device and
            technical data needed to request and deliver an ad — see Section 2.4 and Section 7
            for what that involves.
          </p>
          <p>
            We do not collect precise or approximate location data of any kind. Google&apos;s Mobile
            Ads SDK may use approximate, IP-based location for ad delivery when active — see
            Section 2.4.
          </p>

          <h3>2.3 Billing Information</h3>
          <p>
            The App does not currently offer any in-app purchase, subscription, or other paid
            feature — there is no purchase screen or checkout flow anywhere in the App. The
            Android build declares the Google Play &quot;In-App Billing&quot; permission for possible
            future use, but nothing in the App currently exercises it (see Section 5). If we
            introduce a purchase feature in the future, it will be processed entirely by Google
            Play Billing (and, if the App becomes available there, Apple App Store billing) — we
            will never directly collect or store your payment card details — and this policy will
            be updated before that feature goes live.
          </p>

          <h3>2.4 Advertising Data (Google Mobile Ads SDK)</h3>
          <p>
            The App has the Google Mobile Ads SDK (AdMob) built in to support optional,
            ad-supported use of the App. As of this update, the SDK is wired up only with
            Google&apos;s official <em>sample/test</em> ad unit IDs for development purposes — the App
            is not yet serving live ads to users. This section describes what happens once real ad
            units are configured and ads go live.
          </p>
          <p>
            When the Mobile Ads SDK actively requests and displays an ad, Google receives data
            directly (not through us) to select and serve that ad, which may include:
          </p>
          <ul>
            <li>Your device&apos;s advertising identifier (Android Advertising ID, or Apple&apos;s IDFA on iOS if requested via App Tracking Transparency)</li>
            <li>Device and app information (device model, OS version, language, app version)</li>
            <li>Approximate location derived from your IP address</li>
            <li>Ad interaction data (impressions, clicks)</li>
          </ul>
          <p>
            This data is collected and processed by Google under Google&apos;s own privacy policy
            (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>)
            and, for the Mobile Ads SDK specifically, Google&apos;s{' '}
            <a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener noreferrer">Mobile Ads SDK data disclosure</a>
            {' '}— we do not receive, store, or have access to this data ourselves. On iOS, if/when
            the App becomes available there, App Tracking Transparency permission will be
            requested before any tracking-based advertising identifier is used, as required by
            Apple. See Section 7 for more on how and where ads may appear once live ad units are
            configured.
          </p>

          <div className={s.highlightBox}>
            <h3>On-Device Processing Only</h3>
            <p>Every processing step in the App runs locally on your device:</p>
            <ul>
              <li><strong>Text-to-speech playback</strong> uses your device&apos;s built-in speech engine — your text is never sent to a server</li>
              <li><strong>Photo/document text scanning (OCR)</strong> and <strong>PDF text extraction</strong> run using on-device libraries — images and PDFs are never uploaded</li>
              <li><strong>Voice-effect rendering</strong> (Change Voice) runs an on-device audio engine over your own recording — it never leaves your device</li>
              <li><strong>Live Mic</strong> passes microphone audio straight to your speaker/Bluetooth output in real time, on-device, with nothing recorded or transmitted</li>
            </ul>
            <p>
              Because none of this data leaves your device, there is nothing for us to receive,
              store on a server, share, or sell. The one exception is ad requests made by the
              Google Mobile Ads SDK described in Section 2.4 — the only network activity anywhere
              in the App.
            </p>
          </div>

          <h2>3. How We Use Information</h2>
          <p>Since all App content stays on your device, &quot;use&quot; is limited to what the App does locally, at your direction:</p>
          <ul>
            <li>Playing back your recordings and text documents</li>
            <li>Reading your saved preferences to restore your chosen settings between sessions</li>
            <li>Running the on-device features described above (speech, OCR, PDF extraction, voice effects, live passthrough) when you invoke them</li>
          </ul>
          <p>
            We do not use your recordings, text documents, imported files, or photos for
            advertising, profiling, analytics, or any purpose beyond providing the feature you
            asked for. Any ad shown by the Google Mobile Ads SDK (Sections 2.4 and 7) is selected
            by Google using its own advertising data — never your App content.
          </p>

          <h2>4. How We Share Information</h2>
          <p>
            We do not share, sell, or transmit your recordings, text documents, imported files,
            photos, or preferences to anyone — including us — because none of it is ever sent off
            your device. There is no server for it to go to.
          </p>
          <p>
            The only exceptions are: (a) when the Google Mobile Ads SDK is actively serving an ad
            (Section 2.4), Google directly receives the advertising-related data described there
            in order to select and deliver that ad; and (b) if and when we introduce in-app
            purchases in the future, Google Play Billing (and, on iOS if applicable, Apple) would
            process the transaction directly between you and that platform, and we would only
            receive a purchase/entitlement status, not your payment details.
          </p>
          <p>
            We may be required to disclose information if compelled by law — though as described
            above, we do not hold any of your App content to disclose in the first place.
          </p>

          <h2>5. Permissions</h2>
          <p>Live Microphone requests the following device permissions, each tied to a specific feature:</p>
          <ul>
            <li><strong>Microphone (Record Audio):</strong> Required for Hold &amp; Speak, Voice Recorder, Change Voice, and Live Mic. Without it, none of the App&apos;s recording or live-passthrough features can function.</li>
            <li><strong>Modify Audio Settings:</strong> Used by Live Mic to route audio to your speaker or connected Bluetooth device and apply the Reduce Noise / Echo effects.</li>
            <li><strong>Camera:</strong> Used only when you choose to scan text from a photo in Text to Audio. You can deny this and still use every other feature, including importing files or typing text directly.</li>
            <li><strong>Photos:</strong> Used only when you choose to pick an existing photo to scan text from. The App uses the modern OS photo picker, which shares only the photo you actually select — it is not granted ongoing access to your photo library.</li>
            <li><strong>Storage / Files:</strong> Used to let you pick files to import into Text to Audio, and to save/read your own recordings on your device.</li>
            <li><strong>In-App Billing:</strong> Declared for possible future use. There is currently no purchase feature anywhere in the App, so this permission is not exercised (see Section 2.3).</li>
            <li><strong>Internet / Network State:</strong> Used only by the Google Mobile Ads SDK to request and display ads once live ad units are configured (see Section 2.4). No other feature in the App uses network access.</li>
          </ul>
          <p>You can grant or revoke any of these permissions at any time in your device&apos;s Settings; the corresponding feature will simply be unavailable until re-granted.</p>

          <h2>6. Data Security</h2>
          <p>
            Your recordings, text documents, and preferences are stored in your device&apos;s
            app-private storage, protected by your operating system&apos;s standard app sandboxing.
            We recommend you also protect your device itself (e.g. with a screen lock), since
            anyone with access to an unlocked device could access locally stored App data, the
            same as any other app on your phone.
          </p>
          <p>
            Because the App does not transmit your content anywhere, there is no &quot;in transit&quot;
            exposure to secure — the relevant security boundary is your device itself.
          </p>

          <h2>7. Advertising</h2>
          <p>
            The App has the Google Mobile Ads SDK (AdMob) integrated. As of this update, it is
            configured only with Google&apos;s sample/test ad unit IDs for development purposes, so
            the App is not currently showing any live ads to users. Once real ad units are
            configured, this section will be updated to describe exactly where and when ads
            appear within the App.
          </p>
          <p>
            When ads do go live, Google (and its advertising partners) will collect the data
            described in Section 2.4 to select and serve ads, and standard Google Play (and, if
            applicable, Apple App Store) requirements for ad-related disclosures and, where
            required, consent will apply. This Privacy Policy will be updated with the &quot;Last
            updated&quot; date revised accordingly at that point, including how to manage ad
            personalization through your device&apos;s ad settings (e.g. &quot;Opt out of Ads
            Personalization&quot; in Google Settings on Android).
          </p>

          <h2>8. Purchases</h2>
          <p>
            The App does not currently offer any purchase, subscription, or paid unlock of any
            kind — there is no purchase screen anywhere in the current version. If we introduce a
            purchase feature in the future, it will be handled entirely by Google Play Billing
            (and Apple App Store billing, if applicable), subject to that platform&apos;s refund and
            billing policies, and this policy will be updated accordingly before it goes live.
          </p>

          <h2>9. Your Rights &amp; Data Control</h2>

          <h3>9.1 Access, Export &amp; Deletion</h3>
          <p>Because there is no account and no server copy of your data, you already have full, direct control over everything the App stores:</p>
          <ul>
            <li>Recordings and text documents can be played, and (where the App exposes it) deleted from within the App itself</li>
            <li>You can export a recording or generated audio by sharing the file through your device&apos;s normal share/export mechanisms</li>
            <li>Uninstalling the App permanently deletes its local database and all locally stored recordings, text documents, and preferences from your device</li>
          </ul>

          <h3>9.2 For EU/EEA Residents (GDPR)</h3>
          <p>
            Although the App does not transmit personal data to us, if you are located in the
            European Union or European Economic Area you retain rights under the General Data
            Protection Regulation with respect to any personal data processing that does occur
            (for example, on-device processing at your direction), including the right to access,
            rectify, erase, or restrict that data, and the right to lodge a complaint with a
            supervisory authority. Given the App&apos;s local-only design, the practical way to
            exercise these rights is by deleting content within the App or uninstalling it.
          </p>

          <h3>9.3 For California Residents (CCPA/CPRA)</h3>
          <p>
            The App does not sell or share personal information, because it does not transmit
            personal information off your device in the first place. California residents retain
            their rights under the CCPA/CPRA; for any questions about how these rights apply given
            the App&apos;s local-only design, contact us using the details in Section 14.
          </p>

          <h2>10. Data Retention</h2>
          <p>
            Recordings, text documents, imported files, and preferences remain on your device for
            as long as you keep them, or until you delete them individually within the App.
            Uninstalling the App removes all of this data immediately and permanently — we hold no
            separate copy, so nothing can be recovered by us after uninstall.
          </p>

          <h2>11. Children&apos;s Privacy</h2>
          <p>
            Live Microphone is not directed at children under 13 (or 16 in the European Union, or
            the applicable age of consent in your jurisdiction). Since the App collects no
            personal information from anyone, it does not knowingly collect personal information
            from children either. If you are a parent or guardian with a concern, contact us at
            the address in Section 14.
          </p>

          <h2>12. International Transfers</h2>
          <p>
            Your recordings, text documents, imported files, and preferences are stored only on
            your device and never transmitted to us or any third-party server, so there is no
            cross-border transfer of that content to describe. The one exception is the Google
            Mobile Ads SDK (Section 2.4): once it is actively serving ads, the advertising data
            described there is processed by Google&apos;s global infrastructure, which may involve
            transferring that data outside your country, under Google&apos;s own privacy policy and
            safeguards.
          </p>

          <h2>13. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time, in particular before enabling
            live advertising, introducing a purchase feature, or making any other change that
            would change what is described above. Changes take effect upon posting, and we will
            update the &quot;Last updated&quot; date at the top of this page.
          </p>

          <h2>14. Contact Us</h2>
          <p>If you have questions or concerns about this Privacy Policy, please contact us at:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:support@appaxislab.com">support@appaxislab.com</a></li>
            <li><strong>Developer:</strong> App Axis Lab</li>
          </ul>

          <hr className={s.divider} />

          {/* ── TERMS OF SERVICE ── */}
          <h1 id="terms">Terms of Service</h1>

          <h2>1. Acceptance of Terms</h2>
          <p>
            These Terms of Service (&quot;Terms&quot;) are a legal agreement between you (&quot;User&quot;, &quot;you&quot;)
            and App Axis Lab (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) governing your use of the Live
            Microphone mobile application (the &quot;App&quot;) and its features (the &quot;Services&quot;).
          </p>
          <p>By downloading, installing, accessing, or using the App, you agree to be bound by these Terms. If you do not agree, do not use the App.</p>

          <h2>2. Description of Service</h2>
          <p>Live Microphone is an offline audio toolkit that enables you to:</p>
          <ul>
            <li>Record hands-free with Hold &amp; Speak (press-and-hold, up to 5 minutes per take)</li>
            <li>Record manually with Voice Recorder, including start/pause/resume and a live waveform display</li>
            <li>Create or import text and have it read aloud with on-device text-to-speech (Text to Audio), including importing text from files, photos (via on-device OCR), or PDFs</li>
            <li>Apply one of several on-device voice-effect presets to a recording and save the result (Change Voice)</li>
            <li>Pass live microphone audio through to your device&apos;s speaker or a connected Bluetooth speaker in real time (Live Mic)</li>
            <li>Browse, play back, and manage everything you&apos;ve saved (Generated Recording List)</li>
          </ul>
          <p>All of the above runs entirely on your device. There is no cloud sync, backend service, or account system.</p>

          <h2>3. Eligibility</h2>
          <p>You must be at least 13 years of age (or 16 in the EU, or the age of consent applicable in your jurisdiction) to use the App. By using the App, you represent that you meet this requirement.</p>

          <h2>4. No Account Required</h2>
          <p>The App does not require registration, sign-in, or the creation of any account. There is nothing for you to keep confidential besides your own device, and no account for us to suspend or terminate.</p>

          <h2>5. User Content</h2>

          <h3>5.1 Your Recordings and Documents</h3>
          <p>
            You retain full ownership of all recordings, text documents, imported files, and
            photos you create or import through the App (&quot;User Content&quot;). Because the App
            stores everything locally and does not transmit it to us, we do not host, access, or
            license your User Content in any way — it simply exists on your device, under your
            control.
          </p>

          <h3>5.2 Responsibility for Content</h3>
          <p>You are solely responsible for:</p>
          <ul>
            <li>The accuracy, legality, and appropriateness of anything you record, type, or import</li>
            <li>Having the right to use, copy, or process any content you feed into the App (recordings of others, imported files, photos, etc.)</li>
            <li>Keeping your own backups — see Section 8 below</li>
          </ul>

          <h3>5.3 Prohibited Content</h3>
          <p>You agree not to use the App to create, store, or process content that:</p>
          <ul>
            <li>Infringes the intellectual property or privacy rights of others</li>
            <li>Is used to record another person without their knowledge or consent where such recording is unlawful in your jurisdiction</li>
            <li>Contains malware or is used to attempt to exploit the App or your device</li>
            <li>Violates any applicable law or regulation</li>
          </ul>

          <h2>6. On-Device Processing Features</h2>
          <p>
            Text to Audio&apos;s speech playback, OCR text scanning, and PDF text extraction, and
            Change Voice&apos;s voice-effect rendering, are all automated, on-device processes. You
            acknowledge that:
          </p>
          <ul>
            <li>OCR and PDF extraction results may be inaccurate or incomplete, particularly for low-quality photos, scanned/image-only PDFs, unusual fonts, or complex layouts (e.g. tables)</li>
            <li>Text-to-speech pronunciation may not always be accurate, especially for names, abbreviations, or non-standard text</li>
            <li>Voice-effect renders are provided as-is; we do not guarantee a particular audio outcome</li>
            <li>You are responsible for reviewing any extracted text or rendered audio before relying on it</li>
          </ul>

          <h2>7. Purchases &amp; Advertising</h2>
          <p>The App does not currently offer any in-app purchase or subscription — there is no purchase flow anywhere in this version. If we introduce a purchase feature in the future:</p>
          <ul>
            <li>Payment will be processed by Google Play Billing (and Apple App Store billing, if the App becomes available on iOS) — not by us directly</li>
            <li>All sales will be final and non-refundable except as required by applicable law or the relevant app store&apos;s refund policy</li>
            <li>You will be able to restore a completed purchase on a new device through the platform&apos;s standard &quot;restore purchase&quot; mechanism</li>
          </ul>
          <p>
            Separately, the App has the Google Mobile Ads SDK integrated to support optional
            advertising, currently configured only with test ad unit IDs (no live ads are shown
            yet). See our Privacy Policy, Sections 2.4 and 7, for what happens once live ads are
            enabled.
          </p>

          <h2>8. No Cloud Backup — Please Read</h2>
          <p>Live Microphone stores everything only on your device. This means:</p>
          <ul>
            <li>If you uninstall the App, reset your device, or lose/damage your device, your recordings, text documents, and saved preferences will be permanently lost and cannot be recovered by us — we hold no copy</li>
            <li>The App does not automatically back up your content to any cloud service</li>
            <li>If you want to keep something long-term, export or share it (e.g. save the audio file elsewhere) using your device&apos;s own sharing tools before uninstalling the App or switching devices</li>
          </ul>

          <h2>9. Prohibited Uses</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the App for any unlawful purpose or in violation of these Terms</li>
            <li>Reverse engineer, decompile, or disassemble the App, except where expressly permitted by law</li>
            <li>Copy, modify, distribute, or create derivative works of the App itself</li>
            <li>Remove or alter any proprietary notices or branding within the App</li>
            <li>Interfere with or attempt to disrupt the App&apos;s normal operation</li>
            <li>Use the App to transmit malware or harmful code to another device</li>
            <li>Circumvent any usage limits or feature gating within the App</li>
          </ul>

          <h2>10. Intellectual Property</h2>
          <p>The App, including its software, design, logos, trademarks, voice-effect presets, and content (excluding your User Content), is owned by App Axis Lab or its licensors and is protected by copyright, trademark, and other intellectual property laws.</p>
          <p>These Terms do not transfer any ownership rights to you. You are granted only a limited license to use the App as described in the EULA below.</p>

          <h2>11. Third-Party Components</h2>
          <p>The App uses on-device, open-source and platform-provided components to power some features — for example, an FFmpeg-based audio engine for Change Voice&apos;s voice effects, and your operating system&apos;s own text-to-speech, photo-picker, and file-picker facilities. None of these transmit your data anywhere; they run locally as part of the App.</p>
          <p>The App also has the Google Mobile Ads SDK integrated (currently configured with test ad unit IDs only, not yet serving live ads — see our Privacy Policy, Section 2.4), which is the one component that does communicate over the network, subject to Google&apos;s own terms. If and when a purchase feature (Section 7) is introduced, Google Play Billing (and, if applicable, Apple App Store billing) would also be involved solely to process that transaction, subject to their own terms.</p>

          <h2>12. Disclaimers</h2>

          <h3>12.1 Accuracy of Processed Content</h3>
          <p>You are responsible for reviewing the accuracy of any OCR-extracted text, PDF-extracted text, text-to-speech playback, or voice-effect render before relying on it. We do not guarantee these on-device processes will be accurate, complete, or suitable for your purposes.</p>

          <h3>12.2 Service Availability</h3>
          <p>THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.</p>
          <p>WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR THAT ANY FEATURE (INCLUDING RECORDING, PLAYBACK, TEXT EXTRACTION, VOICE EFFECTS, OR LIVE MIC PASSTHROUGH) WILL FUNCTION WITHOUT ERROR ON EVERY DEVICE.</p>

          <h2>13. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, APP AXIS LAB AND ITS AFFILIATES,
            OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT,
            INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA,
            RECORDINGS, OR DOCUMENTS, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE
            THE APP — INCLUDING DATA LOSS FROM UNINSTALLING THE APP OR LOSING YOUR DEVICE, AS
            DESCRIBED IN SECTION 8.
          </p>
          <p>
            OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THESE TERMS OR THE APP
            SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS
            BEFORE THE CLAIM, OR (B) FIFTY U.S. DOLLARS (USD $50), WHERE PERMITTED BY LAW.
          </p>

          <h2>14. Indemnification</h2>
          <p>You agree to indemnify, defend, and hold harmless App Axis Lab from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from:</p>
          <ul>
            <li>Your use of the App</li>
            <li>Your User Content, including any recording made of another person</li>
            <li>Your violation of these Terms or any applicable law</li>
            <li>Your violation of any third party&apos;s rights</li>
          </ul>

          <h2>15. Termination</h2>
          <p>We may discontinue or restrict availability of the App at any time. Since there is no account, &quot;termination&quot; for you simply means uninstalling the App, at which point:</p>
          <ul>
            <li>Your right to use the App ends</li>
            <li>All locally stored User Content is removed along with the App (see Section 8)</li>
            <li>Sections that by their nature should survive termination will survive, including intellectual property rights, disclaimers, and limitations of liability</li>
          </ul>

          <h2>16. Changes to Terms</h2>
          <p>We may update these Terms from time to time, in particular before enabling live advertising, introducing a purchase feature, or making any other change described as not yet active above. Continued use of the App after changes become effective constitutes acceptance of the revised Terms. The &quot;Last updated&quot; date at the top of this page reflects material revisions.</p>

          <h2>17. Governing Law &amp; Disputes</h2>
          <p>These Terms are governed by the laws of the jurisdiction in which App Axis Lab operates, without regard to conflict-of-law principles, except where mandatory consumer protection laws in your country provide otherwise. Any dispute arising from these Terms or the App shall be resolved in the courts of that jurisdiction, unless applicable law requires a different forum.</p>

          <h2>18. Severability</h2>
          <p>If any provision of these Terms is held invalid, illegal, or unenforceable, the remaining provisions remain in full force and effect.</p>

          <h2>19. Entire Agreement</h2>
          <p>These Terms, together with our Privacy Policy and EULA, constitute the entire agreement between you and App Axis Lab regarding the App and supersede all prior agreements on the same subject.</p>

          <h2>20. Contact</h2>
          <p>For questions about these Terms, contact App Axis Lab at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.</p>

          <hr className={s.divider} />

          {/* ── EULA ── */}
          <h1 id="eula">End User License Agreement (EULA)</h1>

          <div className={s.highlightBox}>
            <p>
              This End User License Agreement (&quot;Agreement&quot; or &quot;EULA&quot;) is a legal agreement
              between you (&quot;User&quot;, &quot;you&quot;) and App Axis Lab (&quot;Licensor&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;)
              for the Live Microphone mobile application (the &quot;App&quot;). By downloading,
              installing, or using the App, you agree to be bound by this Agreement. If you do not
              agree, do not download, install, or use the App.
            </p>
          </div>

          <h2>1. License Grant</h2>
          <p>Subject to your compliance with this Agreement, we grant you a limited, non-exclusive, non-transferable, revocable license to install and use the App on devices you own or control, solely for personal, non-commercial purposes, in accordance with this Agreement and applicable app store terms.</p>

          <h2>2. License Restrictions</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Copy, modify, adapt, translate, or create derivative works of the App</li>
            <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the App, except where expressly permitted by law</li>
            <li>Rent, lease, lend, sell, sublicense, distribute, or transfer the App or any part of it</li>
            <li>Remove, alter, or obscure any proprietary notices, labels, or trademarks on the App</li>
            <li>Use the App for any unlawful purpose or in violation of any applicable laws or regulations</li>
            <li>Use the App&apos;s recording features to record another person without their knowledge or consent where doing so is unlawful in your jurisdiction</li>
            <li>Interfere with or disrupt the App or attempt to bypass any of its feature restrictions</li>
            <li>Use automated systems or bots to access or use the App without our written consent</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>The App, including its design, software, trademarks, logos, voice-effect presets, and content (excluding your User Content), is owned by App Axis Lab or its licensors and is protected by copyright, trademark, and other intellectual property laws.</p>
          <p>This Agreement does not transfer any ownership rights to you. You retain ownership of the recordings, text documents, imported files, and photos you create or process through the App.</p>

          <h2>4. User Content Ownership</h2>
          <p>You retain all ownership rights to your recordings, text documents, imported files, and photos (&quot;User Content&quot;). Because everything is stored locally on your device and the App does not transmit User Content to us, we neither hold nor claim any license over it beyond what your device&apos;s operating system needs to run the App.</p>
          <p>You are solely responsible for:</p>
          <ul>
            <li>The legality of any content you record, type, or import</li>
            <li>Ensuring you have the right to use any file or photo you import</li>
            <li>Keeping your own backups of anything you wish to preserve (see the Terms of Service, Section 8)</li>
          </ul>

          <h2>5. No Account — Device Security is Yours to Manage</h2>
          <p>The App has no login or account system. Because your recordings and documents are stored locally, protecting your device (e.g. with a screen lock) is the primary way to keep your App content secure from others who might access your device.</p>

          <h2>6. Permissions &amp; Device Access</h2>
          <p>The App may request access to your microphone, camera, photo library, and files/storage to support the features described in our Privacy Policy. You may deny any of these permissions, but the corresponding feature will not function until the permission is granted.</p>

          <h2>7. Third-Party Components</h2>
          <p>The App uses on-device, open-source and platform-provided components (including an FFmpeg-based audio engine for voice effects, and your device&apos;s own text-to-speech, photo-picker, and file-picker facilities) to deliver its features locally. The App also has the Google Mobile Ads SDK integrated to support optional advertising — currently configured with test ad unit IDs only, so no live ads are shown yet (see our Privacy Policy, Section 2.4, for details once ads go live). If and when a purchase feature described below is enabled, Google Play Billing (and Apple App Store billing, if applicable) will process that transaction under its own terms.</p>

          <h2>8. In-App Purchases</h2>
          <p>The App does not currently offer any in-app purchase or subscription — there is no purchase flow anywhere in this version. If we introduce a purchase feature in the future:</p>
          <ul>
            <li>Payment and billing will be processed by Google Play Store or, if applicable, the Apple App Store</li>
            <li>All sales will be final and non-refundable except as required by applicable law or the relevant store&apos;s policy</li>
            <li>We will not store your full payment card details</li>
          </ul>

          <h2>9. Updates &amp; Modifications</h2>
          <p>We may release updates, upgrades, or modifications to the App from time to time. You may be required to install updates to continue using the App. Updates may modify or remove features without notice.</p>

          <h2>10. Data Storage &amp; Loss</h2>
          <p>All App content lives only on your device — the App keeps no server-side copy. Uninstalling the App, resetting your device, or losing/damaging your device will permanently and irrecoverably delete your recordings, text documents, imported files, and preferences. You are solely responsible for exporting or backing up anything you wish to keep before any of these events.</p>

          <h2>11. Disclaimer of Warranties</h2>
          <p>THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.</p>
          <p>WE DO NOT WARRANT THAT:</p>
          <ul>
            <li>The App will be uninterrupted, error-free, or compatible with every device</li>
            <li>Text-to-speech playback, OCR/PDF text extraction, or voice-effect renders will be accurate, complete, or suitable for your purposes</li>
            <li>Live Mic&apos;s audio passthrough will be free from latency, feedback, or interruption on every device or audio setup</li>
            <li>Any defects or errors will be corrected</li>
          </ul>
          <p>You use the App at your own risk. Your sole remedy for dissatisfaction with the App is to stop using it.</p>

          <h2>12. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, APP AXIS LAB AND ITS AFFILIATES,
            OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT,
            INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO
            YOUR USE OF OR INABILITY TO USE THE APP.
          </p>
          <p>THIS INCLUDES BUT IS NOT LIMITED TO DAMAGES RESULTING FROM:</p>
          <ul>
            <li>Loss of recordings, text documents, or other User Content, including loss caused by uninstalling the App or losing your device</li>
            <li>Errors or inaccuracies in text extraction, speech playback, or voice-effect rendering</li>
            <li>Audio feedback, hearing discomfort, or device speaker/audio issues arising from use of Live Mic</li>
            <li>Interruption of a feature due to a denied or revoked device permission</li>
          </ul>
          <p>
            OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE
            APP SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US FOR THE APP IN THE
            TWELVE (12) MONTHS BEFORE THE CLAIM, OR (B) FIFTY U.S. DOLLARS (USD $50), WHERE
            PERMITTED BY LAW.
          </p>
          <p>Some jurisdictions do not allow the exclusion or limitation of certain damages, so the above limitations may not apply to you.</p>

          <h2>13. Indemnification</h2>
          <p>You agree to indemnify and hold harmless App Axis Lab from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from:</p>
          <ul>
            <li>Your use of the App</li>
            <li>Your User Content, including any recording of another person made using the App</li>
            <li>Your violation of this Agreement or applicable law</li>
            <li>Your violation of any third party&apos;s rights</li>
          </ul>

          <h2>14. Termination</h2>
          <p>This license is effective until terminated. We may discontinue or restrict the App at any time. You may terminate this license at any time simply by uninstalling the App, which also removes all locally stored User Content (Section 10).</p>
          <p>Sections that by their nature should survive termination will survive, including intellectual property rights, disclaimers, limitations of liability, and indemnification.</p>

          <h2>15. Changes to This Agreement</h2>
          <p>We may update this EULA from time to time, in particular before enabling live advertising, introducing a purchase feature, or making any other change described as not yet active above. Continued use of the App after changes become effective constitutes acceptance of the revised Agreement. The &quot;Last updated&quot; date at the top of this page reflects material revisions.</p>

          <h2>16. Governing Law &amp; Disputes</h2>
          <p>This Agreement is governed by the laws of the jurisdiction in which App Axis Lab operates, without regard to conflict-of-law principles, except where mandatory consumer protection laws in your country provide otherwise. Any dispute shall be resolved in the courts of that jurisdiction, unless applicable law requires a different forum.</p>

          <h2>17. Children</h2>
          <p>The App is not intended for children under 13 years of age (or 16 in the EU, or the applicable age of consent in your jurisdiction). As described in our Privacy Policy, the App does not knowingly collect personal information from anyone, including children.</p>

          <h2>18. Export Compliance</h2>
          <p>You agree to comply with all applicable export and import control laws and regulations. You represent that you are not located in a country subject to a U.S. Government embargo or designated as a &quot;terrorist supporting&quot; country, and that you are not listed on any U.S. Government prohibited or restricted party list.</p>

          <h2>19. Apple App Store (iOS)</h2>
          <p>If you obtained the App through the Apple App Store, you also agree that:</p>
          <ul>
            <li>This Agreement is between you and App Axis Lab only, not Apple Inc. (&quot;Apple&quot;)</li>
            <li>Apple is not responsible for the App or its content, maintenance, support, or warranty obligations</li>
            <li>Apple has no obligation to furnish maintenance or support services for the App</li>
            <li>In the event of any failure of the App to conform to any applicable warranty, you may notify Apple for a refund of the purchase price (if any); to the maximum extent permitted by law, Apple has no other warranty obligation</li>
            <li>Apple is not responsible for addressing any claims relating to the App, including product liability, legal compliance, consumer protection, privacy, or intellectual property infringement</li>
            <li>Apple and its subsidiaries are third-party beneficiaries of this Agreement and may enforce it against you as a third-party beneficiary</li>
            <li>You must comply with applicable third-party terms when using the App (e.g., wireless data service agreements)</li>
          </ul>

          <h2>20. Google Play (Android)</h2>
          <p>If you obtained the App through Google Play, you agree that Google LLC is not a party to this Agreement and has no responsibility or liability with respect to the App. Your use of Google Play is subject to Google Play&apos;s terms of service.</p>

          <h2>21. Severability &amp; Entire Agreement</h2>
          <p>If any provision of this Agreement is held invalid, illegal, or unenforceable, the remaining provisions remain in full force and effect.</p>
          <p>This Agreement, together with our Privacy Policy and Terms of Service, constitutes the entire agreement between you and App Axis Lab regarding the App and supersedes all prior understandings on the same subject.</p>

          <h2>22. Contact</h2>
          <p>For questions about this EULA, contact App Axis Lab at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.</p>
        </div>
      </div>
    </PrivacyLayout>
  )
}
