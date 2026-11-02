import type { Metadata } from 'next'
import PrivacyLayout from '@/components/PrivacyLayout'
import s from '@/styles/privacy.module.css'

export const metadata: Metadata = {
  title: 'LingoLab: AI Language Tutor — Privacy Policy & EULA | App Axis Lab',
}

export default function LingoLabPrivacy() {
  return (
    <PrivacyLayout
      appName="LingoLab: AI Language Tutor"
      subtitle="Privacy Policy & End User License Agreement"
      lastUpdated="Last updated: November 2, 2026"
    >
      <div className={s.card}>
        <div className={s.privacyContent}>
          <p>
            This page contains the <a href="#privacy">Privacy Policy</a> and{' '}
            <a href="#eula">End User License Agreement (EULA)</a> for LingoLab: AI Language Tutor. By using the
            App, you agree to both documents.
          </p>

    <h1 id="privacy">Privacy Policy</h1>
    <p>
      LingoLab: AI Language Tutor (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains what information the App uses, how it is used, and how it is safeguarded when you use the App to learn and practice languages, including speaking practice, lessons, quizzes, translation, and chat with an AI tutor.
    </p>

    <h2>1. Information We Collect</h2>
    <h3>a. Personal Information</h3>
    <p>We do not require account creation, and the App does not ask for your name, email address, phone number, or location.</p>
    <p>If you contact us:</p>
    <ul>
      <li>Email address</li>
      <li>Any information you provide</li>
    </ul>

    <h3>b. Learning Progress &amp; Preferences</h3>
    <p>To personalize your experience, the App stores on your device:</p>
    <ul>
      <li>Your selected app language and learning (target) language</li>
      <li>Your Translate screen language pair</li>
      <li>Whether you have completed onboarding</li>
      <li>Your Learning Path progress, completed steps, gems, and daily missions and streaks</li>
      <li>Your premium (subscription) status</li>
      <li>The number of free AI chat messages you have used today</li>
    </ul>
    <p>Note:</p>
    <ul>
      <li>This data is stored only on your device</li>
      <li>It stays on your device until you clear the App&apos;s data or uninstall the App</li>
    </ul>

    <h3>c. Voice &amp; Speaking Practice</h3>
    <p>When you use speaking practice, the Speaking Quiz, Job Interview practice, or the microphone button in Chat:</p>
    <ul>
      <li>The App uses your device&apos;s speech recognition to convert what you say into text, so it can compare it with the expected phrase</li>
      <li>The App does not record, store, or upload your audio</li>
      <li>Speech recognition is provided by your device&apos;s operating system (for example, Apple&apos;s or Google&apos;s speech services), and your device may process it on-device or through that provider under its own privacy policy</li>
    </ul>

    <h3>d. AI Features (Quiz Feedback, Chat with AI &amp; Translate)</h3>
    <p>When you use AI features, the App sends <strong>text only</strong> to our AI provider (OpenAI) to produce a response:</p>
    <ul>
      <li><strong>Quiz feedback:</strong> the expected phrases and the text that was recognized from your speech</li>
      <li><strong>Chat with AI:</strong> the messages in your current chat session (up to the last 24 turns)</li>
      <li><strong>Translate:</strong> the text you enter and the selected languages</li>
    </ul>
    <p>Note:</p>
    <ul>
      <li>Audio is never sent</li>
      <li>Chat conversations live only in the App&apos;s memory while the screen is open and are not saved by the App; leaving the screen starts a fresh session next time</li>
      <li>We do not ask for personal information in these features; please avoid entering sensitive personal information into chat or translation</li>
    </ul>

    <h3>e. Learning Content</h3>
    <p>Lessons, quizzes, passages, and vocabulary are downloaded from our content service (Supabase). These requests fetch learning content only; they use no account and do not send your personal information. Your IP address may be visible to the service as part of any normal internet request.</p>

    <h3>f. Usage, Diagnostics &amp; Device Data</h3>
    <p>The App uses Google Firebase services to understand how the App is used and to keep it stable:</p>
    <ul>
      <li><strong>Firebase Analytics:</strong> screen views and actions such as lessons completed or language changed</li>
      <li><strong>Firebase Crashlytics:</strong> crash reports and error details, including device model, operating system version, and App version</li>
      <li><strong>Firebase Remote Config:</strong> settings that control App behavior, such as which screens or ads are shown</li>
    </ul>
    <p>These services may use an app-instance identifier and may collect general device and approximate-location (derived from IP address) information. We do not use this data to identify you personally.</p>

    <h3>g. Purchases</h3>
    <p>If you buy a subscription, the purchase is processed by the Apple App Store or Google Play and managed through RevenueCat. We receive your subscription status and an anonymous purchase identifier. We do not receive or store your payment card details.</p>

    <h2>2. How We Use Information</h2>
    <ul>
      <li>Provide lessons, quizzes, speaking practice, translation, and AI chat</li>
      <li>Check your pronunciation and give feedback on your practice</li>
      <li>Remember your progress, language choices, and preferences</li>
      <li>Manage subscriptions and unlock premium features</li>
      <li>Show advertisements</li>
      <li>Analyze usage and fix crashes to improve the App</li>
      <li>Respond to support queries</li>
    </ul>

    <h2>3. Permissions</h2>
    <ul>
      <li><strong>Microphone:</strong> To hear your speech during speaking practice and dictation.</li>
      <li><strong>Speech Recognition (iOS):</strong> To convert your speech into text for pronunciation checking.</li>
      <li><strong>Internet / Network Access:</strong> To download learning content, use AI features, show ads, and process purchases.</li>
      <li><strong>Billing (Android):</strong> To process subscriptions through Google Play.</li>
    </ul>
    <p>The App does not request access to your camera, contacts, photos, or precise location. You can use the App without granting the microphone permission, but speaking features will not work.</p>

    <h2>4. Advertising</h2>
    <p>The App shows advertisements through Google AdMob to users without an active premium subscription. Ads include banner ads, native ads, and full-screen (interstitial) ads shown at app start and after the subscription screen closes.</p>
    <p>AdMob may use advertising identifiers (such as the Android Advertising ID or the iOS IDFA) and device information to show and measure ads and to prevent fraud, and may show personalized ads where permitted. You can limit personalized ads in your device settings:</p>
    <ul>
      <li>Android: Settings &gt; Privacy &gt; Ads</li>
      <li>iOS: Settings &gt; Privacy &amp; Security &gt; Tracking, and Apple Advertising settings</li>
    </ul>
    <p>Subscribing to premium removes ads.</p>

    <h2>5. Third-Party Services</h2>
    <p>The App uses the following third-party services, each operating under its own privacy policy:</p>
    <ul>
      <li>Google Firebase (Analytics, Crashlytics, Remote Config): <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
      <li>Google AdMob: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads</a></li>
      <li>OpenAI (AI feedback, chat, and translation, text only): <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer">https://openai.com/policies/privacy-policy</a></li>
      <li>Supabase (learning content): <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">https://supabase.com/privacy</a></li>
      <li>RevenueCat (subscription management): <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">https://www.revenuecat.com/privacy</a></li>
      <li>Apple App Store and Google Play (purchases): <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Apple Privacy Policy</a> · <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
      <li>Your device&apos;s speech recognition and text-to-speech services (Apple / Google)</li>
    </ul>
    <p>We do not sell your personal information.</p>

    <h2>6. Data Security</h2>
    <p>We implement:</p>
    <ul>
      <li>Encrypted (HTTPS) connections for content, AI requests, and purchases</li>
      <li>Text-only AI requests; audio is never uploaded</li>
      <li>No chat history saved by the App</li>
      <li>Minimal data collection, no accounts, and learning progress kept on your device</li>
    </ul>
    <p>No method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p>

    <h2>7. Data Retention</h2>
    <ul>
      <li>Progress, gems, preferences, and settings are kept on your device until you clear the App&apos;s data or uninstall the App</li>
      <li>Chat messages are not stored by the App; text sent to OpenAI is handled under OpenAI&apos;s retention policy</li>
      <li>Analytics and crash data are retained by Firebase according to its retention settings</li>
      <li>Emails may be retained for support</li>
    </ul>

    <h2>8. AI &amp; Learning Disclaimer</h2>
    <p>
      AI-generated feedback, chat replies, and translations may be inaccurate, incomplete, or unsuitable for professional, legal, medical, or official use. Pronunciation scoring depends on your device&apos;s speech recognition and may vary with accent, noise, and device. LingoLab is an educational aid and does not guarantee any exam result, including IELTS or job interviews.
    </p>

    <h2>9. Children&apos;s Privacy</h2>
    <p>
      The App is not intended for children under 13 years of age unless permitted by applicable law and under parental supervision.
    </p>
    <p>We do not knowingly collect personal data from children under 13. If we learn that such data has been collected, we will delete it promptly.</p>

    <h2>10. Your Privacy Rights</h2>
    <p>Because the App stores your progress only on your device, you are in control of it. You may:</p>
    <ul>
      <li>Delete all App data by clearing the App&apos;s storage in your device settings or by uninstalling the App</li>
      <li>Limit ad personalization or reset your advertising ID in your device settings</li>
      <li>Deny or revoke the microphone and speech recognition permissions in your device settings</li>
      <li>Cancel your subscription in the Apple App Store or Google Play settings</li>
      <li>Request access to or deletion of any support emails you have sent us</li>
      <li>Depending on where you live (for example, the EEA, UK, or California), exercise additional rights under local privacy laws by contacting us</li>
    </ul>
    <p>Contact: <a href="mailto:support@appaxislab.com">support@appaxislab.com</a></p>

    <h2>11. Changes to Policy</h2>
    <p>We may update this policy. Changes will be reflected with a new effective date.</p>

    <h2>12. Contact</h2>
    <p><a href="mailto:support@appaxislab.com">support@appaxislab.com</a></p>
    

    <h1 id="eula">End User License Agreement (EULA)</h1>
    <p>
      This End User License Agreement (&quot;Agreement&quot;) is a legal agreement between you (&quot;User&quot; or &quot;you&quot;) and App Axis Lab (&quot;Licensor&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) for the LingoLab: AI Language Tutor mobile application (the &quot;App&quot;). By downloading, installing, or using the App, you agree to be bound by this Agreement. If you do not agree, do not download, install, or use the App.
    </p>

    <h2>1. License Grant</h2>
    <p>
      Subject to your compliance with this Agreement, we grant you a limited, non-exclusive, non-transferable, revocable license to install and use the App on devices you own or control, solely for personal, non-commercial purposes, in accordance with this Agreement and applicable app store terms.
    </p>

    <h2>2. Restrictions</h2>
    <p>You agree not to:</p>
    <ul>
      <li>Copy, modify, adapt, translate, or create derivative works of the App</li>
      <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the App, except where expressly permitted by law</li>
      <li>Rent, lease, lend, sell, sublicense, or distribute the App or any part of it</li>
      <li>Remove, alter, or obscure any proprietary notices or labels on the App</li>
      <li>Copy, scrape, or redistribute the App&apos;s lessons, quizzes, passages, vocabulary, or other learning content</li>
      <li>Use the AI features to generate unlawful, harmful, abusive, or infringing content</li>
      <li>Use the App for any unlawful purpose or in violation of any applicable laws or regulations</li>
      <li>Interfere with or disrupt the App, our content services, or connected networks, or attempt to bypass usage limits, ads, or subscription checks</li>
      <li>Use automated systems or bots to access or use the App without our written consent</li>
    </ul>

    <h2>3. Intellectual Property</h2>
    <p>
      The App, including all content, lessons, quizzes, features, design, trademarks, and software, is owned by App Axis Lab or its licensors and is protected by copyright, trademark, and other intellectual property laws. This Agreement does not transfer any ownership rights to you.
    </p>
    <p>
      Apple, App Store, Google, Google Play, Android, and Firebase are trademarks of their respective owners. IELTS is a trademark of its respective owners. The App is an independent product and is not affiliated with, endorsed by, or sponsored by any of these companies or exam bodies.
    </p>

    <h2>4. Use of the App &amp; AI Features</h2>
    <p>
      The App provides language-learning tools, including speaking practice, lessons, quizzes, translation, and an AI tutor. AI-generated responses and translations may contain errors. You are responsible for how you use them and should verify important information independently. Free users may be subject to daily limits on AI chat messages.
    </p>
    <p>
      Do not submit sensitive personal information to AI features. Text you submit is sent to a third-party AI provider as described in our <a href="#privacy">Privacy Policy</a>.
    </p>

    <h2>5. Educational Disclaimer</h2>
    <p>
      The App is intended as a study aid. We do not guarantee that using the App will improve your language skills to any particular level or lead to any particular result, including exam scores or employment outcomes. Pronunciation checking depends on your device&apos;s speech recognition and may not be accurate in every environment.
    </p>

    <h2>6. Permissions &amp; Device Access</h2>
    <p>
      The App requests access to your microphone and speech recognition for speaking practice and dictation, and to network connectivity for content, AI features, ads, and purchases. You may deny permissions, but certain features may not function. Use of permissions is described in our <a href="#privacy">Privacy Policy</a>.
    </p>

    <h2>7. Third-Party Services</h2>
    <p>
      The App interacts with third-party products and services, including advertising, analytics, AI, content hosting, subscription management, and your device&apos;s speech services. These services are governed by their own terms and privacy policies. We are not responsible for third-party services, content, or practices.
    </p>

    <h2>8. Subscriptions &amp; In-App Purchases</h2>
    <p>
      The App offers optional premium features, including removal of ads and unlimited AI chat, through subscriptions or in-app purchases. Payment and billing are processed by the Apple App Store or Google Play Store, and subscription status is managed through RevenueCat. Subscriptions renew automatically unless canceled at least 24 hours before the end of the current period, and you can manage or cancel them in your store account settings. Refunds and billing disputes are handled according to the applicable store&apos;s policies. We do not store your full payment card details.
    </p>

    <h2>9. Advertising</h2>
    <p>
      Users without an active premium subscription may see advertisements in the App. We are not responsible for the content of ads or for third-party websites or apps you reach through them.
    </p>

    <h2>10. Disclaimer of Warranties</h2>
    <p>
      THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, ACCURATE, OR FREE OF HARMFUL COMPONENTS, OR THAT AI-GENERATED CONTENT WILL BE CORRECT.
    </p>

    <h2>11. Limitation of Liability</h2>
    <p>
      TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, APP AXIS LAB AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP, INCLUDING ANY RELIANCE ON AI-GENERATED CONTENT OR TRANSLATIONS, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
    </p>
    <p>
      OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE APP SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US FOR THE APP IN THE TWELVE (12) MONTHS BEFORE THE CLAIM, OR (B) FIFTY U.S. DOLLARS (USD $50), WHERE PERMITTED BY LAW.
    </p>

    <h2>12. Indemnification</h2>
    <p>
      You agree to indemnify and hold harmless App Axis Lab from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from your use of the App, content you submit to the AI features, or your violation of this Agreement or applicable law.
    </p>

    <h2>13. Termination</h2>
    <p>
      This license is effective until terminated. We may suspend or terminate your access to the App at any time if you breach this Agreement. Upon termination, you must cease all use of the App and delete all copies from your devices. Sections that by their nature should survive termination will survive.
    </p>

    <h2>14. Changes to This Agreement</h2>
    <p>
      We may update this EULA from time to time. Continued use of the App after changes become effective constitutes acceptance of the revised Agreement. The &quot;EULA last updated&quot; date at the top of this page will reflect material revisions.
    </p>

    <h2>15. Governing Law &amp; Disputes</h2>
    <p>
      This Agreement is governed by the laws of the jurisdiction in which App Axis Lab operates, without regard to conflict-of-law principles, except where mandatory consumer protection laws in your country provide otherwise. Any dispute shall be resolved in the courts of that jurisdiction, unless applicable law requires a different forum.
    </p>

    <h2>16. Children</h2>
    <p>
      The App is not intended for children under 13 years of age unless permitted by applicable law and under parental supervision.
    </p>

    <h2>17. Apple App Store &amp; Google Play</h2>
    <p>
      If you obtained the App through the Apple App Store, you acknowledge that this Agreement is between you and App Axis Lab only, not Apple; Apple has no obligation to provide maintenance or support for the App, and Apple and its subsidiaries are third-party beneficiaries of this Agreement and may enforce it against you. If you obtained the App through Google Play, you agree that Google LLC is not a party to this Agreement and has no responsibility or liability with respect to the App. Your use of these stores is subject to their terms of service.
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
