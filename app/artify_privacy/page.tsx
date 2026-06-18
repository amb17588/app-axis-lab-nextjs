import type { Metadata } from 'next'
import PrivacyLayout from '@/components/PrivacyLayout'
import s from '@/styles/privacy.module.css'

export const metadata: Metadata = {
  title: 'Artify — Privacy Policy & EULA | App Axis Lab',
}

export default function ArtifyPrivacy() {
  return (
    <PrivacyLayout
      appName="Artify: AR Draw Trace & Sketch"
      subtitle="Privacy Policy & End User License Agreement"
      lastUpdated="Last updated: June 3, 2026"
    >
      <div className={s.card}>
        <div className={s.privacyContent}>
          <p>This page contains the Privacy Policy and End User License Agreement (EULA) for Artify: AR Draw Trace &amp; Sketch. By using the App, you agree to both documents.</p>

          <h1>Privacy Policy</h1>
          <p>Artify: AR Draw Trace &amp; Sketch ("we", "our", or "us") respects your privacy. This Privacy Policy explains how we handle information when you use our drawing and sketch tracing mobile application (the "App").</p>
          <p>The App helps you trace sketches using your device camera or on-screen overlay. You may place paper in front of the camera to view a sketch overlay and draw on paper, or place paper on the screen and trace a sketch displayed on the device. The App does not require an account.</p>

          <h2>1. Information We Collect</h2>
          <p><strong>a. Personal Information</strong></p>
          <p>We do not require account creation.</p>
          <p>If you contact us for support, we may receive:</p>
          <ul>
            <li>Email address</li>
            <li>Any information you choose to provide</li>
          </ul>
          <p><strong>b. Camera Data</strong></p>
          <p>The App uses your device camera only to display a live preview with a sketch overlay for tracing. Camera data is processed on your device in real time. We do not record, upload, or permanently store camera video or images.</p>
          <p><strong>c. Device Information</strong></p>
          <p>We may collect:</p>
          <ul>
            <li>Device model</li>
            <li>OS version</li>
            <li>App version</li>
            <li>Language settings</li>
          </ul>
          <p><strong>d. Usage Data</strong></p>
          <p>We may collect anonymized:</p>
          <ul>
            <li>App usage</li>
            <li>Crash logs</li>
            <li>Feature interaction</li>
          </ul>

          <h2>2. How We Use Information</h2>
          <ul>
            <li>Provide sketch tracing and drawing assistance features</li>
            <li>Improve performance and user experience</li>
            <li>Fix bugs</li>
            <li>Respond to support requests</li>
            <li>Display advertisements</li>
          </ul>

          <h2>3. Permissions</h2>
          <ul>
            <li><strong>Camera:</strong> Required to show the live camera preview with sketch overlay for AR tracing. Camera content is not stored by us.</li>
            <li><strong>Internet:</strong> Required for advertisements and app updates.</li>
          </ul>

          <h2>4. Advertising (Google AdMob)</h2>
          <p>We use Google AdMob to display ads. AdMob may collect and use:</p>
          <ul>
            <li>Device identifiers (e.g., Advertising ID)</li>
            <li>IP address</li>
            <li>App usage data</li>
          </ul>
          <p>This helps show personalized ads.</p>
          <p><strong>Personalized Ads</strong></p>
          <ul>
            <li>Ads may be tailored based on user interests</li>
            <li>Users in certain regions (EEA, UK, etc.) may be asked for consent</li>
          </ul>
          <p><strong>Opt-Out</strong></p>
          <p>Users can opt out of personalized advertising by:</p>
          <ul>
            <li>Adjusting device ad settings</li>
            <li>Visiting: <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">https://adssettings.google.com</a></li>
          </ul>
          <p>For more details: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></p>

          <h2>5. Third-Party Services</h2>
          <p>We may use analytics tools and advertising networks (AdMob). These services operate under their own privacy policies. We recommend reviewing the privacy policies of our partners:</p>
          <ul>
            <li>Google (AdMob &amp; Firebase): <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
            <li>Meta (Facebook Audience Network): <a href="https://www.facebook.com/about/privacy" target="_blank" rel="noopener noreferrer">https://www.facebook.com/about/privacy</a></li>
            <li>LiftOff Monetize (Vungle): <a href="https://vungle.com/privacy/" target="_blank" rel="noopener noreferrer">https://vungle.com/privacy/</a></li>
            <li>Pangle: <a href="https://ad.oceanengine.com/union/media/privacy" target="_blank" rel="noopener noreferrer">https://ad.oceanengine.com/union/media/privacy</a></li>
            <li>Mintegral: <a href="https://www.mintegral.com/en/privacy/" target="_blank" rel="noopener noreferrer">https://www.mintegral.com/en/privacy/</a></li>
            <li>AppLovin: <a href="https://www.applovin.com/privacy/" target="_blank" rel="noopener noreferrer">https://www.applovin.com/privacy/</a></li>
            <li>Unity Ads: <a href="https://unity.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">https://unity.com/legal/privacy-policy</a></li>
            <li>Yandex Ads: <a href="https://yandex.com/legal/confidential" target="_blank" rel="noopener noreferrer">https://yandex.com/legal/confidential</a></li>
            <li>Chartboost: <a href="https://www.chartboost.com/privacy-policy" target="_blank" rel="noopener noreferrer">https://www.chartboost.com/privacy-policy</a></li>
          </ul>

          <h2>6. Data Security</h2>
          <p>We implement:</p>
          <ul>
            <li>HTTPS encryption where data is transmitted</li>
            <li>Minimal data collection</li>
            <li>No storage of camera recordings</li>
          </ul>

          <h2>7. Data Retention</h2>
          <ul>
            <li>Camera preview data is not stored</li>
            <li>Support emails may be retained to respond to your request</li>
          </ul>

          <h2>8. Children's Privacy</h2>
          <p>The App is not intended for children under 13 years of age unless permitted by applicable law and under parental supervision. We do not knowingly collect personal data from children under 13. If we learn that such data has been collected, we will delete it promptly.</p>

          <h2>9. Your Privacy Rights</h2>
          <p>You may request access, request deletion, or withdraw consent. Contact: <a href="mailto:support@appaxislab.com">support@appaxislab.com</a></p>

          <h2>10. Changes to Policy</h2>
          <p>We may update this policy. Changes will be reflected with a new effective date at the top of this page.</p>

          <h2>11. Contact</h2>
          <p><a href="mailto:support@appaxislab.com">support@appaxislab.com</a></p>

          <hr className={s.divider} />

          <h1>End User License Agreement (EULA)</h1>
          <p>This End User License Agreement ("Agreement") is a legal agreement between you ("User" or "you") and App Axis Lab ("Licensor", "we", "our", or "us") for Artify: AR Draw Trace &amp; Sketch (the "App"). By downloading, installing, or using the App, you agree to be bound by this Agreement. If you do not agree, do not download, install, or use the App.</p>

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
            <li>Interfere with or disrupt the App, its servers, or connected networks</li>
            <li>Use automated systems or bots to access or use the App without our written consent</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>The App, including sketches, templates, design, trademarks, and software, is owned by App Axis Lab or its licensors and is protected by copyright, trademark, and other intellectual property laws. This Agreement does not transfer any ownership rights to you. You may not copy or redistribute in-app sketch content except as permitted within the App for personal tracing use.</p>

          <h2>4. App Use</h2>
          <p>The App provides AR and on-screen sketch tracing to help you draw on paper. You are responsible for your physical setup, lighting, and safe use of the device while drawing. Physical drawings you create are yours; we do not claim ownership of artwork you produce on paper.</p>

          <h2>5. Permissions &amp; Device Access</h2>
          <p>The App requires camera access for the AR tracing feature. Camera data is used only for live on-device preview and is not stored by us. Internet access is used for ads and related services. Details are in our Privacy Policy above.</p>

          <h2>6. Third-Party Services &amp; Advertising</h2>
          <p>The App may use analytics and advertising networks (such as Google AdMob and other ad partners listed in our Privacy Policy). These services are governed by their own terms and privacy policies. We are not responsible for third-party services, content, or practices. The App may display advertisements. Ad partners may collect device and usage data as described in our Privacy Policy.</p>

          <h2>7. Subscriptions &amp; In-App Purchases</h2>
          <p>If the App offers paid features, subscriptions, or in-app purchases, payment and billing are processed by Apple App Store, Google Play Store, or other authorized payment providers. Refunds and billing disputes are handled according to the applicable store's policies. We do not store your full payment card details.</p>

          <h2>8. Disclaimer of Warranties</h2>
          <p>THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR THAT TRACING OVERLAYS WILL MATCH YOUR EXPECTATIONS IN ALL CONDITIONS.</p>

          <h2>9. Limitation of Liability</h2>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, APP AXIS LAB AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP.</p>
          <p>OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE APP SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US FOR THE APP IN THE TWELVE (12) MONTHS BEFORE THE CLAIM, OR (B) FIFTY U.S. DOLLARS (USD $50), WHERE PERMITTED BY LAW.</p>

          <h2>10. Indemnification</h2>
          <p>You agree to indemnify and hold harmless App Axis Lab from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from your use of the App or your violation of this Agreement or applicable law.</p>

          <h2>11. Termination</h2>
          <p>This license is effective until terminated. We may suspend or terminate your access to the App at any time if you breach this Agreement. Upon termination, you must cease all use of the App and delete all copies from your devices.</p>

          <h2>12. Changes to This Agreement</h2>
          <p>We may update this EULA from time to time. Continued use of the App after changes become effective constitutes acceptance of the revised Agreement.</p>

          <h2>13. Governing Law &amp; Disputes</h2>
          <p>This Agreement is governed by the laws of the jurisdiction in which App Axis Lab operates, without regard to conflict-of-law principles, except where mandatory consumer protection laws in your country provide otherwise.</p>

          <h2>14. Children</h2>
          <p>The App is not intended for children under 13 years of age unless permitted by applicable law and under parental supervision.</p>

          <h2>15. Apple App Store (iOS)</h2>
          <p>If you obtained the App through the Apple App Store, you also agree that:</p>
          <ul>
            <li>This Agreement is between you and App Axis Lab only, not Apple Inc. ("Apple").</li>
            <li>Apple is not responsible for the App or its content, maintenance, support, or warranty obligations.</li>
            <li>Apple has no obligation to furnish maintenance or support services for the App.</li>
            <li>In the event of any failure of the App to conform to any applicable warranty, you may notify Apple for a refund of the purchase price (if any); to the maximum extent permitted by law, Apple has no other warranty obligation.</li>
            <li>Apple is not responsible for addressing any claims relating to the App, including product liability, legal compliance, consumer protection, privacy, or intellectual property infringement.</li>
            <li>Apple and its subsidiaries are third-party beneficiaries of this Agreement and may enforce it against you as a third-party beneficiary.</li>
            <li>You represent that you are not located in a country subject to a U.S. Government embargo or designated as a "terrorist supporting" country, and that you are not listed on any U.S. Government prohibited or restricted party list.</li>
            <li>You must comply with applicable third-party terms when using the App (e.g., wireless data service agreements).</li>
          </ul>

          <h2>16. Google Play (Android)</h2>
          <p>If you obtained the App through Google Play, you agree that Google LLC is not a party to this Agreement and has no responsibility or liability with respect to the App. Your use of Google Play is subject to Google Play's terms of service.</p>

          <h2>17. Severability &amp; Entire Agreement</h2>
          <p>If any provision of this Agreement is held invalid or unenforceable, the remaining provisions remain in full force. This Agreement, together with our Privacy Policy, constitutes the entire agreement between you and App Axis Lab regarding the App.</p>

          <h2>18. Contact</h2>
          <p>For questions about this EULA, contact App Axis Lab at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.</p>
        </div>
      </div>
    </PrivacyLayout>
  )
}
