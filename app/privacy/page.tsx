import type { Metadata } from 'next'
import PrivacyLayout from '@/components/PrivacyLayout'
import s from '@/styles/privacy.module.css'

export const metadata: Metadata = {
  title: 'Privacy Policy | App Axis Lab',
}

export default function PrivacyPage() {
  return (
    <PrivacyLayout
      appName="App Axis Lab"
      subtitle="Privacy Policy — All Applications"
      lastUpdated="Last updated: April 1, 2026 · Effective for all App Axis Lab applications"
    >
      <div className={s.card}>
        <div className={s.privacyContent}>
          <div className={s.toc}>
            <p className={s.tocTitle}>Table of Contents</p>
            <ol className={s.tocList}>
              <li><a href="#s1">Introduction</a></li>
              <li><a href="#s2">Information We Collect</a></li>
              <li><a href="#s3">How We Use Your Information</a></li>
              <li><a href="#s4">Analytics Services</a></li>
              <li><a href="#s5">Advertising &amp; AdMob Mediation</a></li>
              <li><a href="#s6">Data Sharing &amp; Disclosure</a></li>
              <li><a href="#s7">Data Retention</a></li>
              <li><a href="#s8">Your Rights &amp; Choices</a></li>
              <li><a href="#s9">Children's Privacy</a></li>
              <li><a href="#s10">Security</a></li>
              <li><a href="#s11">International Data Transfers</a></li>
              <li><a href="#s12">Changes to This Policy</a></li>
              <li><a href="#s13">Contact Us</a></li>
            </ol>
          </div>

          <h2 id="s1">1. Introduction</h2>
          <p>Welcome to <strong>AppAxis Lab</strong> ("we", "our", or "us"). We are committed to protecting your privacy and handling your personal information with transparency and care.</p>
          <p>This Privacy Policy describes how we collect, use, share, and protect information when you use any of our mobile applications available on the Google Play Store or Apple App Store, as well as our website at <a href="https://www.appaxislab.com" target="_blank" rel="noopener noreferrer">www.appaxislab.com</a>.</p>
          <p>By downloading or using any of our applications, you agree to the terms of this Privacy Policy. If you do not agree with these terms, please discontinue use of our apps.</p>
          <div className={s.callout}>
            <p><strong>This is a global privacy policy</strong> applicable to all applications developed and published by AppAxis Lab. Some apps may handle sensitive categories of data (such as health or financial data) — additional details are provided in Section 2.</p>
          </div>

          <h2 id="s2">2. Information We Collect</h2>
          <p>We collect information in two ways: automatically (when you use our apps) and, in some apps, information you provide voluntarily.</p>
          <h3>2.1 Information Collected Automatically</h3>
          <ul>
            <li><strong>Device information:</strong> Device model, operating system version, unique device identifiers (e.g., Android ID, IDFA), screen resolution, language settings, and time zone.</li>
            <li><strong>Usage data:</strong> Features accessed, in-app events, session duration, crash logs, error reports, and app performance data.</li>
            <li><strong>Advertising identifiers:</strong> Google Advertising ID (GAID) or Apple Identifier for Advertising (IDFA) for delivering and measuring ads.</li>
            <li><strong>Network information:</strong> IP address, connection type (Wi-Fi/mobile data), and approximate geographic location derived from IP.</li>
            <li><strong>Log data:</strong> Timestamps, activity logs, and diagnostic information for debugging and improving app stability.</li>
          </ul>
          <h3>2.2 Information You Provide Voluntarily</h3>
          <p>Certain apps may collect data you enter directly. This varies by app.</p>
          <div className={[s.callout, s.calloutWarning].join(' ')}>
            <p><strong>Sensitive Health Data:</strong> Apps such as BP &amp; Sugar Tracking and Period Cycle Tracker collect sensitive health-related information. This data is stored locally on your device and is <strong>not</strong> transmitted to our servers or shared with third parties for advertising purposes. We strongly encourage you to use device-level security (PIN, biometrics) to protect this data.</p>
          </div>
          <h3>2.3 Permissions We May Request</h3>
          <ul>
            <li><strong>Camera:</strong> Used by Face Swap for photo capture.</li>
            <li><strong>Storage / Media:</strong> Used by Documents Reader, Face Swap, Live Wallpaper, and Daily Journaling to read or save files.</li>
            <li><strong>Activity Recognition:</strong> Used by Walk Mate Step Counter to count steps via device sensors.</li>
            <li><strong>Microphone:</strong> Used by Language Translator for voice-based translation input.</li>
            <li><strong>Internet Access:</strong> Required for ads, analytics, and certain online features.</li>
          </ul>
          <p>All permissions are requested only when needed and only for their stated purpose. You may revoke permissions at any time in your device settings.</p>

          <h2 id="s3">3. How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul>
            <li>To operate, maintain, and improve our applications and services</li>
            <li>To analyze usage patterns and optimize user experience</li>
            <li>To display relevant advertisements and measure their effectiveness</li>
            <li>To detect, diagnose, and fix technical issues, bugs, and crashes</li>
            <li>To comply with applicable legal obligations and enforce our terms</li>
            <li>To communicate updates to this policy or our apps (where applicable)</li>
          </ul>
          <p>We do <strong>not</strong> sell your personal information to third parties. We do not use your data for automated decision-making or profiling that produces legal effects.</p>

          <h2 id="s4">4. Analytics Services</h2>
          <p>We use the following analytics platforms to understand how users interact with our apps and to improve performance:</p>
          <ul>
            <li><strong>Firebase Analytics</strong> — Provides event tracking, user engagement metrics, crash reporting, and performance monitoring. <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Firebase Privacy Policy</a></li>
            <li><strong>Google Analytics</strong> — Used for website and app traffic analysis, behavior flow, and audience insights. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
            <li><strong>ByteBrew</strong> — Mobile-first analytics for in-app events, retention analysis, A/B testing, and revenue tracking. <a href="https://bytebrew.io/privacy-policy" target="_blank" rel="noopener noreferrer">ByteBrew Privacy Policy</a></li>
          </ul>
          <p>These services may collect device identifiers, usage events, and aggregated behavioral data. The data collected by these services is governed by their respective privacy policies linked above. You may opt out of analytics data collection through your device settings (e.g., by disabling Advertising ID or enabling "Limit Ad Tracking").</p>

          <h2 id="s5">5. Advertising &amp; AdMob Mediation</h2>
          <p>We use <strong>Google AdMob</strong> as our primary advertising platform. AdMob operates a mediation layer that allows multiple ad networks to serve ads within our apps. This helps us deliver relevant advertisements and generate revenue to keep our apps free to use.</p>
          <p>Our ad mediation network includes the following partners:</p>
          <ul>
            <li><strong>Google AdMob</strong> — <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            <li><strong>Mintegral</strong> — <a href="https://www.mintegral.com/en/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            <li><strong>AppLovin</strong> — <a href="https://www.applovin.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            <li><strong>Liftoff (Vungle)</strong> — <a href="https://liftoff.io/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            <li><strong>Pangle (Global)</strong> — <a href="https://www.pangleglobal.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            <li><strong>Yandex Ads</strong> — <a href="https://yandex.com/legal/confidential" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            <li><strong>Unity Ads</strong> — <a href="https://unity.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            <li><strong>Meta Audience Network</strong> — <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            <li><strong>Chartboost</strong> — <a href="https://www.chartboost.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
          </ul>
          <h3>How Advertising Works</h3>
          <p>These ad networks may use cookies, advertising identifiers (GAID/IDFA), IP addresses, and other signals to serve personalized advertisements based on your interests and browsing behavior. Each partner operates under its own privacy policy as linked above.</p>
          <h3>Opting Out of Personalized Ads</h3>
          <ul>
            <li><strong>Android:</strong> Go to Settings → Google → Ads → "Delete advertising ID" or "Opt out of Ads Personalization".</li>
            <li><strong>iOS:</strong> Go to Settings → Privacy → Tracking → disable "Allow Apps to Request to Track", and Settings → Privacy → Apple Advertising → disable "Personalized Ads".</li>
            <li>You may also visit <a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer">youronlinechoices.com</a> or <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer">NAI Opt-Out</a> for additional controls.</li>
          </ul>
          <div className={s.callout}>
            <p>Opting out of personalized ads does not mean you will stop seeing ads — it means the ads you see will be less relevant to your interests. We rely on ad revenue to offer our apps free of charge.</p>
          </div>

          <h2 id="s6">6. Data Sharing &amp; Disclosure</h2>
          <p>We do not sell, rent, or trade your personal information. We share data only in the following limited circumstances:</p>
          <ul>
            <li><strong>Analytics &amp; Advertising Partners:</strong> As described in Sections 4 and 5, data is shared with our analytics and advertising partners solely to operate those services.</li>
            <li><strong>Legal Requirements:</strong> We may disclose information if required to do so by law, court order, or government authority, or to protect the rights, property, or safety of AppAxis Lab, our users, or the public.</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or part of our business, user information may be transferred as part of that transaction. We will notify you via a notice on our website or within our apps before any such transfer takes place.</li>
            <li><strong>Aggregated / Anonymized Data:</strong> We may share aggregated, de-identified data that cannot reasonably be used to identify you, for research, analytics, or marketing purposes.</li>
          </ul>

          <h2 id="s7">7. Data Retention</h2>
          <p>We retain collected data only for as long as necessary to fulfill the purposes described in this policy, or as required by applicable law.</p>
          <ul>
            <li><strong>Analytics data</strong> is retained according to the retention settings configured in Firebase, Google Analytics, and ByteBrew (typically 2–14 months).</li>
            <li><strong>Locally stored app data</strong> (journals, health entries, financial records) remains on your device until you uninstall the app or manually delete it.</li>
            <li><strong>Advertising identifiers</strong> are used in real-time and not stored on our servers.</li>
          </ul>
          <p>When data is no longer needed, it is securely deleted or anonymized in accordance with industry standards.</p>

          <h2 id="s8">8. Your Rights &amp; Choices</h2>
          <p>Depending on your country or region, you may have the following rights regarding your personal data:</p>
          <ul>
            <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you.</li>
            <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete data.</li>
            <li><strong>Right to Deletion:</strong> Request that we delete your personal data ("right to be forgotten").</li>
            <li><strong>Right to Object:</strong> Object to the processing of your data for certain purposes, including direct marketing.</li>
            <li><strong>Right to Data Portability:</strong> Request your data in a structured, machine-readable format.</li>
            <li><strong>Right to Withdraw Consent:</strong> Where processing is based on consent, you may withdraw it at any time.</li>
          </ul>
          <p><strong>GDPR (EU/EEA users):</strong> You have additional rights under the General Data Protection Regulation. To exercise these rights, please contact us using the details in Section 13.</p>
          <p><strong>CCPA (California users):</strong> California residents have the right to know what personal information is collected, to opt out of its sale, and to non-discriminatory treatment for exercising their rights.</p>
          <p><strong>LGPD (Brazil users):</strong> Brazilian users have similar rights under the Lei Geral de Proteção de Dados.</p>
          <p>To submit any rights request, please email us at <a href="mailto:appaxislab@gmail.com">appaxislab@gmail.com</a>. We will respond within 30 days.</p>
          <h3>Account &amp; Data Deletion</h3>
          <p>Since most of our apps do not require account registration, the majority of your data is stored locally on your device. To delete this data, simply uninstall the app. For any server-side data deletion requests, contact us directly.</p>

          <h2 id="s9">9. Children's Privacy</h2>
          <p>Our applications are intended for general audiences and are <strong>not directed at children under the age of 13</strong> (or 16 in certain jurisdictions, including the EU under GDPR).</p>
          <p>We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal data, please contact us immediately at <a href="mailto:appaxislab@gmail.com">appaxislab@gmail.com</a>. Upon verification, we will promptly delete any such information.</p>
          <div className={[s.callout, s.calloutWarning].join(' ')}>
            <p>If you allow a child to use your device to access our apps, please supervise their usage and ensure they do not input personal or sensitive information into apps.</p>
          </div>

          <h2 id="s10">10. Security</h2>
          <p>We implement commercially reasonable technical and organizational measures to protect your information against unauthorized access, loss, misuse, alteration, or destruction. These measures include:</p>
          <ul>
            <li>Encrypted data transmission using HTTPS/TLS protocols</li>
            <li>Restricted access to user data by our development team</li>
            <li>Regular security assessments of our apps and infrastructure</li>
            <li>Use of reputable, security-audited third-party SDKs for analytics and advertising</li>
          </ul>
          <p>However, please note that no method of data transmission or storage over the internet is 100% secure. We cannot guarantee absolute security, and you use our apps at your own risk. We encourage you to use device-level security features such as screen locks and encryption.</p>

          <h2 id="s11">11. International Data Transfers</h2>
          <p>AppAxis Lab operates globally. The analytics and advertising services we use (Google, Meta, Unity, etc.) may transfer and process your data in countries other than your own, including the United States and other jurisdictions that may have different data protection laws.</p>
          <p>Where such transfers occur, our partners rely on approved legal mechanisms such as Standard Contractual Clauses (SCCs) or adequacy decisions to ensure your data remains protected. By using our apps, you consent to such transfers in accordance with this Privacy Policy.</p>

          <h2 id="s12">12. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or for other operational reasons. When we do, we will:</p>
          <ul>
            <li>Update the "Last Updated" date at the top of this page</li>
            <li>Post the revised policy on our website at <a href="https://www.appaxislab.com" target="_blank" rel="noopener noreferrer">www.appaxislab.com</a></li>
            <li>Display an in-app notification for material changes where feasible</li>
          </ul>
          <p>Your continued use of our apps after any changes constitutes your acceptance of the updated policy. We encourage you to review this page periodically.</p>

          <h2 id="s13">13. Contact Us</h2>
          <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please reach out to us:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:appaxislab@gmail.com">appaxislab@gmail.com</a> — We aim to respond to all inquiries within 2–5 business days.</li>
            <li><strong>Website:</strong> <a href="https://www.appaxislab.com" target="_blank" rel="noopener noreferrer">www.appaxislab.com</a></li>
          </ul>
        </div>
      </div>
    </PrivacyLayout>
  )
}
