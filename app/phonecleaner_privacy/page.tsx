import type { Metadata } from 'next'
import PrivacyLayout from '@/components/PrivacyLayout'
import s from '@/styles/privacy.module.css'

export const metadata: Metadata = {
  title: 'AI Phone Storage Cleaner — Privacy Policy | App Axis Lab',
}

export default function PhoneCleanerPrivacy() {
  return (
    <PrivacyLayout
      appName="AI Phone Storage Cleaner"
      subtitle="Privacy Policy"
      lastUpdated="Last updated: April 14, 2026"
    >
      <div className={s.card}>
        <div className={s.privacyContent}>
          <p>Your privacy and data security are extremely important to us. This Privacy Policy explains how AI Phone Storage Cleaner ("we", "us", or "our") collects, uses, and protects your information when you use our mobile application available on the Google Play Store.</p>
          <p>If you have any questions, contact us at: <a href="mailto:appaxislab@gmail.com">appaxislab@gmail.com</a></p>

          <h2>1. Information We Collect</h2>
          <p>We collect limited information necessary to provide and improve our services.</p>
          <p><strong>a. Device Information</strong></p>
          <p>We may automatically collect:</p>
          <ul>
            <li>Device model and Android version</li>
            <li>CPU, RAM, and storage usage information</li>
            <li>Screen resolution and device configuration</li>
            <li>App version and network state</li>
            <li>Advertising ID (for ads and analytics)</li>
          </ul>
          <p><strong>b. Usage &amp; Log Data</strong></p>
          <p>We collect:</p>
          <ul>
            <li>App usage (features used, interactions, screens viewed)</li>
            <li>Performance data (crashes, errors, diagnostics)</li>
          </ul>
          <p>This data helps us improve app functionality and performance.</p>
          <p><strong>c. Information from Third-Party SDKs</strong></p>
          <p>We use trusted third-party services (such as advertising and analytics providers) that may collect:</p>
          <ul>
            <li>Advertising ID</li>
            <li>Approximate location (via IP address)</li>
            <li>Device and usage data</li>
            <li>Fraud prevention data</li>
          </ul>
          <p>These partners include:</p>
          <ul>
            <li>Google AdMob</li>
            <li>Facebook Audience Network (Meta)</li>
            <li>Mintegral</li>
            <li>Pangle</li>
            <li>LiftOff Monetize</li>
            <li>Firebase Analytics</li>
          </ul>
          <p>These third parties process data according to their own privacy policies.</p>

          <h2>2. How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Provide and operate the app</li>
            <li>Improve performance and user experience</li>
            <li>Analyze usage and fix issues</li>
            <li>Deliver and optimize advertisements</li>
            <li>Prevent fraud and ensure app security</li>
          </ul>
          <p>We do not sell your personal data.</p>

          <h2>3. Data Sharing</h2>
          <p>We may share limited data (such as device identifiers and usage data) with trusted third-party partners strictly for:</p>
          <ul>
            <li>Analytics</li>
            <li>Advertising</li>
            <li>App functionality</li>
          </ul>
          <p>These partners are required to handle your data in accordance with their own privacy policies.</p>

          <h2>4. Permissions We Request</h2>
          <p>We request only the permissions necessary for core functionality:</p>
          <ul>
            <li><strong>Storage Access:</strong> Used to scan, manage, and clean unnecessary or large files on your device.</li>
            <li><strong>App Management (if applicable):</strong> Used to identify large or unused apps to help free up storage space.</li>
            <li><strong>Network Access:</strong> Required for analytics, ads, and app updates.</li>
          </ul>
          <p>You can manage or revoke permissions at any time through your device settings, but doing so may affect app functionality.</p>

          <h2>5. Data Retention</h2>
          <p>We retain your information only for as long as necessary to fulfill the purposes described in this Privacy Policy.</p>
          <ul>
            <li>Data used for analytics and performance is retained for a limited time.</li>
            <li>Data is deleted or anonymized when no longer needed.</li>
          </ul>

          <h2>6. Security</h2>
          <p>We implement industry-standard security measures to protect your data from unauthorized access, loss, or misuse. However, no system can be guaranteed to be 100% secure.</p>

          <h2>7. Your Privacy Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access your data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Restrict or object to processing</li>
            <li>Withdraw consent at any time</li>
            <li>Request a copy of your data (data portability)</li>
          </ul>
          <p>To exercise any of these rights, contact us at: <a href="mailto:appaxislab@gmail.com">appaxislab@gmail.com</a></p>

          <h2>8. Children's Privacy</h2>
          <p>Our app is not intended for children under the age of 13. We do not knowingly collect personal data from children. If we become aware that such data has been collected, we will delete it promptly.</p>

          <h2>9. International Users (GDPR Notice)</h2>
          <p>If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, you may have additional rights under applicable data protection laws.</p>

          <h2>10. Third-Party Privacy Policies</h2>
          <p>We recommend reviewing the privacy policies of our partners:</p>
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

          <h2>11. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated effective date.</p>

          <h2>12. Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
          <p><a href="mailto:appaxislab@gmail.com">appaxislab@gmail.com</a></p>
        </div>
      </div>
    </PrivacyLayout>
  )
}
