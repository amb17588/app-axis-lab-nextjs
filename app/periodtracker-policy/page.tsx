import type { Metadata } from 'next'
import PrivacyLayout from '@/components/PrivacyLayout'
import s from '@/styles/privacy.module.css'

export const metadata: Metadata = {
  title: 'AxisFlow Period Tracker — Privacy Policy | App Axis Lab',
}

export default function PeriodTrackerPolicy() {
  return (
    <PrivacyLayout
      appName="AxisFlow Period Tracker"
      subtitle="Privacy Policy"
      lastUpdated="Last updated: May 06, 2026 · Version 2.1"
    >
      <div className={s.card}>
        <div className={s.privacyContent}>
          <div className={s.toc}>
            <p className={s.tocTitle}>Contents</p>
            <ol className={s.tocList}>
              <li><a href="#introduction">Introduction</a></li>
              <li><a href="#data-we-process">Data We Process</a></li>
              <li><a href="#where-your-data-lives">Where Your Data Lives</a></li>
              <li><a href="#advertising">Advertising</a></li>
              <li><a href="#product-analytics-firebase">Product Analytics (Firebase)</a></li>
              <li><a href="#data-sharing">Data Sharing with Third Parties</a></li>
              <li><a href="#subscription-data">Subscription Data</a></li>
              <li><a href="#cloud-backup">Cloud Backup</a></li>
              <li><a href="#your-rights">Your Rights</a></li>
              <li><a href="#childrens-privacy">Children's Privacy</a></li>
              <li><a href="#law-enforcement">Law Enforcement</a></li>
              <li><a href="#changes">Changes to This Policy</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ol>
          </div>

          <h2 id="introduction">1. Introduction</h2>
          <p><strong>AxisFlow</strong> ("the App") is a menstrual cycle and ovulation tracking application developed by App Axis Lab ("we," "us," or "our"). Your privacy matters to us, and this policy explains in plain language what data the App handles, how we handle it, and what rights you have.</p>
          <p>The App is designed so that <strong>your health data is stored on your device and encrypted</strong>. We do not operate backend servers that store your health information. However, the App does display advertisements provided by third-party ad networks, which involves certain data collection as described in <a href="#advertising">Section 4</a> below. We also use Firebase for anonymized product analytics to understand general usage patterns, as described in <a href="#product-analytics-firebase">Section 5</a>.</p>
          <div className={s.callout}>
            <p><strong>The short version:</strong> Your health data (cycles, symptoms, BBT, mood) stays on your phone, encrypted. We never see it. We display ads on the free tier via mediation partners listed in this policy, and we use Firebase for generic usage analytics — neither receives your health logs. Premium subscribers enjoy an ad-free experience.</p>
          </div>

          <h2 id="data-we-process">2. Data We Process</h2>
          <h3>Health data you enter</h3>
          <p>The App processes the following health-related data that you voluntarily enter:</p>
          <ul>
            <li>Menstrual cycle dates (period start and end dates)</li>
            <li>Flow intensity</li>
            <li>Symptoms and their severity</li>
            <li>Mood</li>
            <li>Basal body temperature (BBT) readings</li>
            <li>Cervical mucus observations</li>
            <li>Sexual activity</li>
            <li>Pill reminder status (taken, skipped, missed)</li>
          </ul>
          <p>This health data is stored <strong>exclusively on your device</strong> and is never transmitted to our servers or to any advertising partner.</p>
          <h3>Profile preferences</h3>
          <ul>
            <li>Birth year (for age verification only — not your full date of birth)</li>
            <li>Cycle and period length defaults</li>
            <li>Temperature unit preference (°F / °C)</li>
            <li>Goal mode (tracking, conceiving, or fertility awareness)</li>
          </ul>
          <h3>Data collected by advertising SDKs</h3>
          <p>When ads are displayed, the third-party ad networks integrated into the App may automatically collect certain device and usage information. This data is collected <strong>by the ad network directly</strong>, not by us. See <a href="#advertising">Section 4 (Advertising)</a> for full details.</p>
          <h3>Product analytics (Firebase)</h3>
          <p>We use <strong>Google Firebase</strong> to collect <strong>non-health</strong> app events (for example screen views and generic navigation flows) so we can understand the user journey and improve the App. Events are not used to reconstruct your cycle, symptoms, or any health entries. See <a href="#product-analytics-firebase">Section 5 (Product Analytics)</a> for full details.</p>
          <h3>What we do NOT collect</h3>
          <p>We do <strong>not</strong> collect your name, email address, phone number, physical address, or precise geographic location. We do <strong>not</strong> transmit your health data (cycle dates, symptoms, BBT readings, mood, or any other health entries) to any server, ad network, analytics SDK, or other third party.</p>

          <h2 id="where-your-data-lives">3. Where Your Data Lives</h2>
          <p><strong>All health data is stored exclusively on your device.</strong> It is encrypted at rest using AES-256 encryption (via SQLCipher). The encryption key is stored in your device's secure hardware (iOS Keychain / Android Keystore) and is protected by your biometric authentication or device passcode.</p>
          <p>We operate <strong>no backend servers</strong> that store your health data. We maintain <strong>no database</strong> of user health information.</p>
          <table>
            <thead>
              <tr>
                <th>Scenario</th>
                <th>Data leaves device?</th>
                <th>What data?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Normal app usage (health data)</td>
                <td>No</td>
                <td>Encrypted at rest on device (AES-256)</td>
              </tr>
              <tr>
                <td>Ads displayed (free tier)</td>
                <td>Yes — by the ad SDK</td>
                <td>Device identifiers, ad interaction data (see Section 4). <strong>No health data is shared.</strong></td>
              </tr>
              <tr>
                <td>Product analytics (Firebase)</td>
                <td>Yes — to Google per Firebase terms</td>
                <td>Aggregated usage and event data only (see Section 5). <strong>No health data is sent.</strong></td>
              </tr>
              <tr>
                <td>Cloud backup (optional, paid)</td>
                <td>Yes — to your own cloud storage</td>
                <td>AES-256 encrypted before upload; we never hold the key</td>
              </tr>
              <tr>
                <td>Data export (JSON/CSV)</td>
                <td>Only if you share it</td>
                <td>Your responsibility after export</td>
              </tr>
            </tbody>
          </table>

          <h2 id="advertising">4. Advertising</h2>
          <p>AxisFlow displays advertisements in the <strong>free tier</strong> of the App to support ongoing development. <strong>Premium subscribers do not see any ads.</strong></p>
          <h3>Ad networks we use</h3>
          <p>The free tier shows ads through <strong>Google AdMob mediation</strong> and partner networks. Depending on your region, device, and inventory, ads may be served by one or more of the following:</p>
          <ul>
            <li><strong>Google AdMob</strong> (Google LLC) — <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
            <li><strong>Pangle</strong> (ByteDance Pte. Ltd.) — <a href="https://www.pangleglobal.com/privacy" target="_blank" rel="noopener noreferrer">Pangle Privacy</a></li>
            <li><strong>Yandex Advertising Network</strong> (Yandex) — <a href="https://yandex.com/legal/confidential/" target="_blank" rel="noopener noreferrer">Yandex Privacy Policy</a></li>
            <li><strong>Meta Audience Network</strong> (Meta Platforms, Inc.) — <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">Meta Privacy Policy</a></li>
            <li><strong>Liftoff Monetize</strong> (Liftoff / Vungle) — <a href="https://liftoff.io/privacy-policy/" target="_blank" rel="noopener noreferrer">Liftoff Privacy Policy</a></li>
            <li><strong>Mintegral</strong> (Mintegral International Limited) — <a href="https://www.mintegral.com/en/privacy/" target="_blank" rel="noopener noreferrer">Mintegral Privacy Policy</a></li>
            <li><strong>AppLovin</strong> (AppLovin Corporation) — <a href="https://www.applovin.com/privacy/" target="_blank" rel="noopener noreferrer">AppLovin Privacy Policy</a></li>
          </ul>
          <p>We may add, remove, or replace mediation partners from time to time. When we do, this list will be updated and we will notify you via an in-app notice when the change is material.</p>
          <h3>What ad networks collect</h3>
          <p>When an ad is displayed, the ad SDK may automatically collect the following data from your device:</p>
          <table>
            <thead>
              <tr>
                <th>Data type</th>
                <th>Examples</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Device identifiers</td>
                <td>Advertising ID (IDFA on iOS, GAID on Android), device model, OS version</td>
                <td>Ad delivery, frequency capping, fraud prevention</td>
              </tr>
              <tr>
                <td>Network information</td>
                <td>IP address (coarsely geolocated to city/region level), connection type (Wi-Fi/cellular)</td>
                <td>Ad delivery, regional ad targeting</td>
              </tr>
              <tr>
                <td>Ad interaction data</td>
                <td>Whether an ad was viewed, tapped, or dismissed; ad display timestamps</td>
                <td>Ad performance measurement, billing</td>
              </tr>
              <tr>
                <td>App context (limited)</td>
                <td>App bundle identifier, app version</td>
                <td>Ad delivery targeting by app category</td>
              </tr>
            </tbody>
          </table>
          <div className={[s.callout, s.calloutWarning].join(' ')}>
            <p><strong>What we do NOT share with ad networks:</strong> We never transmit your health data (cycle dates, period status, symptoms, BBT readings, mood, cervical mucus observations, sexual activity, pill logs, or any other health entries) to any ad network. The ad SDK does not have access to the App's encrypted health database. Ads are not targeted based on your cycle, fertility status, or any health information.</p>
          </div>
          <h3>Personalized vs. non-personalized ads</h3>
          <ul>
            <li><strong>Personalized ads:</strong> If you have not opted out of ad personalization on your device, the ad network may use your advertising ID and browsing/app usage history to show ads relevant to your general interests. This does NOT involve your health data from AxisFlow.</li>
            <li><strong>Non-personalized ads:</strong> If you have opted out of ad personalization, the ad network will show contextual or non-targeted ads.</li>
          </ul>
          <h3>Your ad choices</h3>
          <ul>
            <li><strong>iOS:</strong> When you first use the App, you will see Apple's App Tracking Transparency (ATT) prompt. If you choose "Ask App Not to Track," only non-personalized ads will be shown.</li>
            <li><strong>Android:</strong> You can opt out via Settings → Google → Ads → Opt out of Ads Personalization on your device.</li>
            <li><strong>Remove ads entirely:</strong> Subscribe to <strong>AxisFlow Premium</strong>. Premium subscribers see zero ads.</li>
          </ul>
          <h3>Ad placement</h3>
          <p>Ads are placed in non-intrusive locations within the App. Ads are <strong>never</strong> shown:</p>
          <ul>
            <li>During period logging or symptom entry</li>
            <li>On the PIN/biometric lock screen</li>
            <li>During onboarding</li>
            <li>As fullscreen interstitials that block core functionality</li>
            <li>In push notifications</li>
          </ul>
          <h3>Children and ads</h3>
          <p>If the App detects that the user may be under 18 (based on the birth year provided during onboarding), the App requests child-directed ad treatment from the ad network, which disables personalized advertising and limits data collection in compliance with COPPA and applicable laws.</p>

          <h2 id="product-analytics-firebase">5. Product Analytics (Firebase)</h2>
          <p>We use <strong>Google Firebase</strong> (including Firebase Analytics and related Firebase SDK features) to collect <strong>product analytics events</strong>. These events help us understand how people navigate the App so we can fix bugs, prioritize improvements, and measure stability.</p>
          <h3>What we send (and what we do not)</h3>
          <p>We configure analytics so that events reflect <strong>generic app usage only</strong>. We do <strong>not</strong> include any of your health entries in Firebase events: no cycle dates, period logs, symptoms, BBT readings, mood, cervical mucus or sexual activity logs, pill reminders, notes, or similar wellness data. We do <strong>not</strong> intentionally send your name, email address, phone number, or account credentials to Firebase.</p>
          <p>For details, see: <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Firebase Privacy Information</a> and <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>.</p>
          <div className={s.callout}>
            <p><strong>Summary:</strong> Firebase tells us <em>how the App is used in general</em>, not <em>what health information you logged</em>.</p>
          </div>

          <h2 id="data-sharing">6. Data Sharing with Third Parties</h2>
          <p>The following table summarizes all third-party services that may receive data from or through the App:</p>
          <table>
            <thead>
              <tr>
                <th>Third party</th>
                <th>Data received</th>
                <th>Purpose</th>
                <th>Receives health data?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Ad mediation partners</strong> (Google AdMob, Pangle, Yandex, Meta Audience Network, Liftoff, Mintegral, AppLovin)</td>
                <td>Device identifiers, IP address (coarse), ad interactions, limited app context</td>
                <td>Serving and measuring ads on the free tier</td>
                <td><strong>No</strong></td>
              </tr>
              <tr>
                <td><strong>Google Firebase</strong></td>
                <td>Usage and diagnostic events; technical identifiers per Google's policies</td>
                <td>Product analytics, quality, and stability</td>
                <td><strong>No</strong></td>
              </tr>
              <tr>
                <td><strong>RevenueCat</strong></td>
                <td>Pseudonymous user ID, subscription transaction events</td>
                <td>Subscription management</td>
                <td><strong>No</strong></td>
              </tr>
              <tr>
                <td><strong>Apple / Google</strong></td>
                <td>Purchase receipts (handled by the platform)</td>
                <td>Payment processing</td>
                <td><strong>No</strong></td>
              </tr>
            </tbody>
          </table>
          <p><strong>We do not sell your personal information.</strong> We do not share, sell, rent, or trade your health data with any third party for any purpose, including advertising.</p>

          <h2 id="subscription-data">7. Subscription Data</h2>
          <p>If you subscribe to AxisFlow Premium, your payment is processed entirely by <strong>Apple</strong> (via the App Store) or <strong>Google</strong> (via Google Play). We never see your payment details.</p>
          <p>Subscription status is managed by <strong>RevenueCat, Inc.</strong>, which receives anonymous transaction data from Apple and Google. RevenueCat assigns a pseudonymous identifier to track your subscription status. RevenueCat does <strong>not</strong> receive any health data from the App. For RevenueCat's privacy practices, see <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">revenuecat.com/privacy</a>.</p>
          <div className={s.callout}>
            <p><strong>Premium benefit:</strong> AxisFlow Premium subscribers enjoy a completely ad-free experience. When Premium is active, the ad SDK is not initialized, and no ad-related data collection occurs.</p>
          </div>

          <h2 id="cloud-backup">8. Cloud Backup (Optional, Paid Feature)</h2>
          <p>If you choose to use the Cloud Backup feature:</p>
          <ul>
            <li>Your data is encrypted <strong>on your device</strong> using a password you set, <strong>before</strong> it leaves your device.</li>
            <li>The encrypted backup is stored in <strong>your own cloud storage account</strong> (Google Drive, iCloud, OneDrive, Dropbox, or Box).</li>
            <li>We never possess the encryption key and <strong>cannot decrypt your backup</strong>.</li>
            <li>A recovery code generated during setup allows you to restore your data on a new device. <strong>If you lose both your device and your recovery code, your data is unrecoverable.</strong></li>
          </ul>
          <div className={s.callout}>
            <p><strong>Important:</strong> We do not operate the cloud storage. Your backup lives in your personal Google Drive, iCloud, OneDrive, Dropbox, or Box account. We have no access to it.</p>
          </div>

          <h2 id="your-rights">9. Your Rights</h2>
          <h3>Delete your health data</h3>
          <p>You can delete <strong>all</strong> your health data at any time from <strong>Settings → Data Management → Delete All Data</strong>. This action is irreversible and immediate.</p>
          <h3>Export your data</h3>
          <p>You can export your data in JSON or CSV format at any time from <strong>Settings → Data Management → Export Data</strong>.</p>
          <h3>Control ad personalization</h3>
          <p>You can opt out of personalized ads via your device settings (see <a href="#advertising">Section 4</a>), or remove ads entirely by subscribing to Premium.</p>
          <h3>Reset your advertising identifier</h3>
          <p>You can reset your device's advertising ID at any time through your device settings.</p>
          <h3>Access your data</h3>
          <p>All your health data is visible to you within the App at all times.</p>
          <h3>For EU/EEA residents (GDPR)</h3>
          <p>You have additional rights under the General Data Protection Regulation, including the right to data portability, the right to erasure, and the right to object to processing. A consent dialog will be presented before any personalized ads are shown, in compliance with the GDPR and the ePrivacy Directive.</p>
          <h3>For California residents (CCPA/CPRA)</h3>
          <p>We do not sell your personal information. The sharing of device identifiers with ad networks for the purpose of displaying ads may constitute "sharing" under the CPRA. You have the right to opt out of this sharing by declining ad personalization on your device or by subscribing to Premium.</p>

          <h2 id="childrens-privacy">10. Children's Privacy</h2>
          <p>The App is not intended for children under 13 (or under 16 in jurisdictions where GDPR applies). Age verification is performed during the App's onboarding process. We do not knowingly collect data from children below these ages. If the App detects the user may be a minor (under 18), child-directed ad treatment is enabled.</p>

          <h2 id="law-enforcement">11. Law Enforcement Requests</h2>
          <p>Because we do not operate servers or databases containing user health data, <strong>we have no health data to provide</strong> in response to subpoenas, court orders, or government requests. Cloud backups are encrypted with user-held keys. We do not possess decryption keys and cannot comply with requests to decrypt backup data. Ad networks and analytics providers (such as Google Firebase) may independently receive and respond to legal requests for data they have collected.</p>

          <h2 id="changes">12. Changes to This Policy</h2>
          <p>If we make material changes to this policy — including adding new ad networks or changing data sharing practices — we will update this policy with the changes. Non-material changes (formatting, clarification, typo fixes) may be made without notification.</p>

          <h2 id="contact">13. Contact Us</h2>
          <p>If you have questions about this privacy policy, our data practices, or advertising in the App, contact us at:</p>
          <ul>
            <li><strong>Email:</strong> support@appaxislab.com</li>
            <li><strong>Company:</strong> App Axis Lab</li>
          </ul>
        </div>
      </div>
    </PrivacyLayout>
  )
}
