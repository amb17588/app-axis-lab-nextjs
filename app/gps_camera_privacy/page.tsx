import type { Metadata } from 'next'
import PrivacyLayout from '@/components/PrivacyLayout'
import s from '@/styles/privacy.module.css'

export const metadata: Metadata = {
  title: 'GPS Camera — Privacy Policy & EULA | App Axis Lab',
}

export default function GpsCameraPrivacy() {
  return (
    <PrivacyLayout
      appName="GPS Camera"
      subtitle="Privacy Policy & End User License Agreement"
      lastUpdated="Last updated: October 12, 2026"
    >
      <div className={s.card}>
        <div className={s.privacyContent}>


          <p>
            This page contains the <a href="#privacy">Privacy Policy</a> and{' '}
            <a href="#eula">End User License Agreement (EULA)</a> for GPS Camera. By using the
            App, you agree to both documents.
          </p>

          <h1 id="privacy">Privacy Policy</h1>
          <p>
          GPS Camera (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting your
          personal information. This Privacy Policy explains what data the App collects, how it is used,
          and how it is safeguarded when you use GPS Camera to take geotagged photos, explore maps,
          measure areas, check air quality, and use the other features of the App.
          </p>

          <h2>1. Information We Collect</h2>

          <h3>a. Personal Information</h3>
          <p>
          We do not require account creation, and the App does not ask for your name, email address, or
          phone number.
          </p>
          <p>If you contact us for support, we may receive:</p>
          <ul>
          <li>Your email address</li>
          <li>Any information you choose to include in your message</li>
          </ul>

          <h3>b. Location Data</h3>
          <p>
          GPS Camera uses your device&apos;s GPS and location services to power its core features, including:
          </p>
          <ul>
          <li>Stamping photos and videos with GPS coordinates, address, altitude, speed, and compass bearing</li>
          <li>Showing your current position on the map</li>
          <li>Creating, saving, and navigating routes</li>
          <li>Finding nearby places, parking, and points of interest</li>
          <li>Measuring areas on the map</li>
          <li>Displaying live traffic and Earth map layers</li>
          <li>Air quality data for your current area</li>
          </ul>
          <div className={s.highlightBox}>
          <p><strong>Note</strong></p><p>
          Location is accessed only while the App is in use (foreground). The App does not request
          background location access. GPS coordinates embedded in your photos are stored on your device
          as part of the photo file itself. We do not collect or transmit your location to our servers.
          </p></div>

          <h3>c. Camera &amp; Microphone</h3>
          <p>The App uses your camera to capture photos and videos and your microphone to record audio
          with videos. Media you capture is saved to your device&apos;s photo library. We do not upload,
          access, or store your photos or videos on any server we operate.</p>

          <h3>d. Microphone — Voice Map</h3>
          <p>
          The Voice Map feature uses your microphone and on-device speech recognition to convert a
          spoken destination into a route. Speech recognition is handled by your device&apos;s operating
          system (Android or iOS). We do not record, transmit, or store your voice input.
          </p>

          <h3>e. Photo Library</h3>
          <p>
          The App reads your photo library to display images you have taken with GPS Camera in the
          Photo Grid. The App saves stamped photos and videos to your library. This data stays on your
          device and is never sent to us.
          </p>

          <h3>f. App Preferences &amp; Settings</h3>
          <p>The App stores locally on your device:</p>
          <ul>
          <li>Stamp layout preferences and customizations</li>
          <li>Saved routes and waypoints</li>
          <li>Map style preferences</li>
          <li>Language selection</li>
          <li>Whether you have completed onboarding</li>
          <li>Subscription / purchase status</li>
          </ul>

          <h3>g. Advertising Identifier</h3>
          <p>
          The App uses Google AdMob to display advertisements. AdMob may use your device&apos;s advertising
          identifier (Google Advertising ID on Android, IDFA on iOS) to serve personalized or
          contextual ads. You can opt out of personalized ads at any time in your device settings.
          </p>
          <p>
          For more information, see Google&apos;s privacy policy:
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          https://policies.google.com/privacy
          </a>
          </p>

          <h3>h. Analytics &amp; Crash Reporting</h3>
          <p>
          The App uses Firebase Analytics and Firebase Crashlytics (Google) to understand how the App
          is used and to diagnose crashes. These services may collect:
          </p>
          <ul>
          <li>Anonymous usage events (screens viewed, features used)</li>
          <li>Device type, OS version, and App version</li>
          <li>Crash reports and stack traces</li>
          </ul>
          <p>
          This data is collected in aggregate and anonymized form. It is used solely to improve the App
          and is governed by
          <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">
          Google&apos;s Firebase Privacy Policy
          </a>.
          </p>

          <h2>2. How We Use Information</h2>
          <ul>
          <li>Embed GPS coordinates and metadata in your stamped photos and videos</li>
          <li>Display your location on maps, routes, and navigation screens</li>
          <li>Show nearby places, parking, and points of interest</li>
          <li>Create and navigate routes, including voice-guided directions</li>
          <li>Measure areas on the map</li>
          <li>Provide traffic, live Earth, air quality, and compass features</li>
          <li>Display personalized or contextual advertisements via AdMob</li>
          <li>Diagnose crashes and improve App stability via Firebase Crashlytics</li>
          <li>Analyze feature usage in aggregate to improve the App via Firebase Analytics</li>
          <li>Respond to support queries</li>
          </ul>

          <h2>3. Permissions</h2>
          <ul>
          <li>
          <strong>Location (Foreground):</strong> To geotag photos, show your position on the map,
          create routes, and power all location-based features.
          </li>
          <li>
          <strong>Camera:</strong> To capture geotagged photos and videos.
          </li>
          <li>
          <strong>Microphone:</strong> To record audio with videos and to power Voice Map speech
          recognition.
          </li>
          <li>
          <strong>Photo Library / Media:</strong> To display your captured photos in the Photo Grid
          and to save stamped photos and videos to your device.
          </li>
          <li>
          <strong>Speech Recognition (iOS):</strong> To convert spoken destinations to routes in
          Voice Map.
          </li>
          <li>
          <strong>Internet / Network Access:</strong> To load map tiles, fetch nearby places, air
          quality data, and serve advertisements.
          </li>
          <li>
          <strong>Advertising ID (Android):</strong> Used by Google AdMob for ad serving.
          </li>
          </ul>
          <p>You may deny permissions, but features that depend on them will not function.</p>

          <h2>4. Advertising</h2>
          <p>
          The App displays advertisements served by Google AdMob. AdMob may use your advertising
          identifier and general device information to show personalized ads based on your interests.
          You can opt out of personalized ads:
          </p>
          <ul>
          <li>
          <strong>Android:</strong> Settings → Google → Ads → &quot;Opt out of Ads Personalization&quot;
          </li>
          <li>
          <strong>iOS:</strong> Settings → Privacy &amp; Security → Apple Advertising → turn off
          &quot;Personalized Ads&quot;
          </li>
          </ul>
          <p>Opting out does not remove ads; it limits their personalization.</p>

          <h2>5. Third-Party Services</h2>
          <p>The App integrates with the following third-party services:</p>
          <ul>
          <li>
          <strong>Google Maps Platform</strong> — map tiles, geocoding, routes, and nearby places
          search
          </li>
          <li>
          <strong>Google AdMob</strong> — in-app advertising
          </li>
          <li>
          <strong>Firebase Analytics</strong> — anonymous usage analytics
          </li>
          <li>
          <strong>Firebase Crashlytics</strong> — crash reporting
          </li>
          <li>
          <strong>Google Play In-App Purchases</strong> — subscription and premium feature billing
          (Android)
          </li>
          <li>
          <strong>Apple App Store In-App Purchases</strong> — subscription and premium feature
          billing (iOS)
          </li>
          </ul>
          <p>We recommend reviewing the privacy policies of these providers:</p>
          <ul>
          <li>
          Google:
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          https://policies.google.com/privacy
          </a>
          </li>
          <li>
          Firebase:
          <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">
          https://firebase.google.com/support/privacy
          </a>
          </li>
          <li>
          Apple:
          <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">
          https://www.apple.com/legal/privacy/
          </a>
          </li>
          </ul>

          <h2>6. Data Security</h2>
          <p>We implement the following safeguards:</p>
          <ul>
          <li>All network requests use encrypted (HTTPS / TLS) connections</li>
          <li>Location, photos, and preferences are stored only on your device</li>
          <li>We do not operate servers that store your personal data, photos, or location history</li>
          <li>Crash reports and analytics are anonymized before transmission to Firebase</li>
          </ul>

          <h2>7. Data Retention</h2>
          <ul>
          <li>
          Photos, videos, routes, and preferences are kept on your device until you delete them or
          uninstall the App
          </li>
          <li>
          Firebase Analytics data is retained per Google&apos;s standard retention schedule
          </li>
          <li>
          Firebase Crashlytics crash logs are retained for 90 days per Google&apos;s policy
          </li>
          <li>
          Support emails may be retained to resolve your query
          </li>
          </ul>

          <h2>8. Children&apos;s Privacy</h2>
          <p>
          The App is not intended for children under 13 years of age unless permitted by applicable law
          and under parental supervision.
          </p>
          <p>
          We do not knowingly collect personal data from children under 13. If we learn that such data
          has been collected, we will delete it promptly.
          </p>

          <h2>9. Your Privacy Rights</h2>
          <p>
          Because the App stores its data primarily on your device, you are in control of it. You may:
          </p>
          <ul>
          <li>Delete photos, videos, and routes directly within the App</li>
          <li>Reset or revoke app permissions at any time in your device settings</li>
          <li>Opt out of personalized ads in your device settings (see Section 4)</li>
          <li>Delete all App data by clearing the App&apos;s storage in device settings or uninstalling it</li>
          <li>Request access to or deletion of any support emails you have sent us</li>
          </ul>
          <p>Contact: <a href="mailto:support@appaxislab.com">support@appaxislab.com</a></p>

          <h2>10. Changes to This Policy</h2>
          <p>
          We may update this Privacy Policy. Changes will be reflected with a new effective date at the
          top of this page.
          </p>

          <h2>11. Contact</h2>
          <p>
          <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>
          </p>



          <hr />




          <h1 id="eula">End User License Agreement (EULA)</h1>
          <p>
          This End User License Agreement (&quot;Agreement&quot;) is a legal agreement between you (&quot;User&quot; or
          &quot;you&quot;) and App Axis Lab (&quot;Licensor&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) for the GPS Camera mobile
          application (the &quot;App&quot;). By downloading, installing, or using the App, you agree to be bound
          by this Agreement. If you do not agree, do not download, install, or use the App.
          </p>

          <h2>1. License Grant</h2>
          <p>
          Subject to your compliance with this Agreement, we grant you a limited, non-exclusive,
          non-transferable, revocable license to install and use the App on devices you own or control,
          solely for personal, non-commercial purposes, in accordance with this Agreement and applicable
          app store terms.
          </p>

          <h2>2. Restrictions</h2>
          <p>You agree not to:</p>
          <ul>
          <li>Copy, modify, adapt, translate, or create derivative works of the App</li>
          <li>
          Reverse engineer, decompile, disassemble, or attempt to derive the source code of the App,
          except where expressly permitted by law
          </li>
          <li>Rent, lease, lend, sell, sublicense, or distribute the App or any part of it</li>
          <li>Remove, alter, or obscure any proprietary notices or labels on the App</li>
          <li>
          Use the App to capture, tag, or store imagery of locations or persons you are not
          authorized to photograph
          </li>
          <li>Use the App for any unlawful purpose or in violation of any applicable laws or regulations</li>
          <li>Use automated systems or bots to access or interact with the App without our written consent</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>
          The App, including all content, features, design, trademarks, and software, is owned by
          App Axis Lab or its licensors and is protected by copyright, trademark, and other intellectual
          property laws. This Agreement does not transfer any ownership rights to you.
          </p>
          <p>
          Google Maps, Google Earth, Google TV, Android, and Google Play are trademarks of Google LLC.
          Apple, App Store, and iOS are trademarks of Apple Inc. Firebase is a product of Google LLC.
          The App is an independent product and is not affiliated with, endorsed by, or sponsored by
          any of these companies.
          </p>

          <h2>4. Use of the App &amp; Your Content</h2>
          <p>
          GPS Camera lets you capture, geotag, and manage photos and videos, create and follow routes,
          and use a range of map and location features. You are responsible for the photos and videos
          you capture and for ensuring that your use of the App complies with applicable privacy,
          property, and photography laws in your jurisdiction.
          </p>
          <p>
          We are not responsible for content you capture, routes you create, or any third-party
          services you access while using the App (such as mapping data, nearby-places results, or
          air quality data).
          </p>

          <h2>5. Location Data</h2>
          <p>
          The App embeds GPS coordinates and other location metadata directly into the photos and
          videos you capture. You are responsible for managing the privacy of this geotagged content,
          including who you share it with. We are not liable for any consequences arising from sharing
          geotagged media.
          </p>

          <h2>6. Compatibility Disclaimer</h2>
          <p>
          The App is designed for Android and iOS devices. We do not guarantee that the App will work
          on every device model, OS version, or network configuration. Map data accuracy and
          availability of nearby-places, air quality, and traffic information depend on third-party
          data providers and may not be available in all regions.
          </p>

          <h2>7. Permissions &amp; Device Access</h2>
          <p>
          The App requests access to your device&apos;s camera, microphone, location, photo library, and
          network connection to provide its features. You may deny permissions, but certain features
          will not function. Use of permissions is described in our Privacy Policy.
          </p>

          <h2>8. Third-Party Services &amp; Map Data</h2>
          <p>
          The App integrates with Google Maps Platform, Google AdMob, Firebase, and other third-party
          services. These services are governed by their own terms and privacy policies. We are not
          responsible for third-party services, their accuracy, availability, or practices.
          </p>

          <h2>9. Subscriptions &amp; In-App Purchases</h2>
          <p>
          If the App offers paid features, subscriptions, or in-app purchases, payment and billing are
          processed by Google Play Store (Android) or Apple App Store (iOS). Refunds and billing
          disputes are handled according to the applicable store&apos;s policies. We do not store your full
          payment card details.
          </p>

          <h2>10. Advertising</h2>
          <p>
          The App may display advertisements served by Google AdMob. By using the App, you agree to
          the display of ads as described in our Privacy Policy and in Google&apos;s AdMob policies.
          </p>

          <h2>11. Disclaimer of Warranties</h2>
          <p>
          THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER
          EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR
          A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE
          UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF HARMFUL COMPONENTS. WE DO NOT WARRANT THE
          ACCURACY, COMPLETENESS, OR RELIABILITY OF ANY MAP DATA, LOCATION INFORMATION, NEARBY-PLACES
          RESULTS, AIR QUALITY DATA, OR ROUTE GUIDANCE PROVIDED BY THE APP.
          </p>

          <h2>12. Limitation of Liability</h2>
          <p>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, APP AXIS LAB AND ITS AFFILIATES,
          OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
          SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL,
          ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP, INCLUDING ANY RELIANCE
          ON ROUTE GUIDANCE, MAP DATA, OR LOCATION INFORMATION PROVIDED BY THE APP, EVEN IF WE HAVE
          BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>
          <p>
          OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE APP
          SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US FOR THE APP IN THE TWELVE (12)
          MONTHS BEFORE THE CLAIM, OR (B) FIFTY U.S. DOLLARS (USD $50), WHERE PERMITTED BY LAW.
          </p>
          <div className={s.warnBox}><p>
          <strong>Navigation Safety:</strong> GPS Camera is not a substitute for professional
          navigation equipment. Do not rely solely on the App for navigation in safety-critical
          situations. Always follow local traffic laws and exercise personal judgment while driving
          or navigating.
          </p></div>

          <h2>13. Indemnification</h2>
          <p>
          You agree to indemnify and hold harmless App Axis Lab from any claims, damages, losses,
          liabilities, and expenses (including reasonable legal fees) arising from your use of the App,
          your capture or sharing of geotagged content, or your violation of this Agreement or
          applicable law.
          </p>

          <h2>14. Termination</h2>
          <p>
          This license is effective until terminated. We may suspend or terminate your access to the
          App at any time if you breach this Agreement. Upon termination, you must cease all use of
          the App and delete all copies from your devices. Sections that by their nature should survive
          termination will survive.
          </p>

          <h2>15. Changes to This Agreement</h2>
          <p>
          We may update this EULA from time to time. Continued use of the App after changes become
          effective constitutes acceptance of the revised Agreement. The &quot;EULA last updated&quot; date at
          the top of this page will reflect material revisions.
          </p>

          <h2>16. Governing Law &amp; Disputes</h2>
          <p>
          This Agreement is governed by the laws of the jurisdiction in which App Axis Lab operates,
          without regard to conflict-of-law principles, except where mandatory consumer protection laws
          in your country provide otherwise. Any dispute shall be resolved in the courts of that
          jurisdiction, unless applicable law requires a different forum.
          </p>

          <h2>17. Children</h2>
          <p>
          The App is not intended for children under 13 years of age unless permitted by applicable law
          and under parental supervision.
          </p>

          <h2>18. Google Play (Android)</h2>
          <p>
          If you obtained the App through Google Play, you agree that Google LLC is not a party to this
          Agreement and has no responsibility or liability with respect to the App. Your use of Google
          Play is subject to Google Play&apos;s terms of service.
          </p>

          <h2>19. Apple App Store (iOS)</h2>
          <p>
          If you obtained the App through the Apple App Store, you agree that Apple Inc. is not a party
          to this Agreement and has no responsibility or liability with respect to the App. Apple has no
          obligation to provide maintenance or support for the App. Your use of the App Store is subject
          to Apple&apos;s terms of service.
          </p>

          <h2>20. Severability &amp; Entire Agreement</h2>
          <p>
          If any provision of this Agreement is held invalid or unenforceable, the remaining provisions
          remain in full force. This Agreement, together with our Privacy Policy, constitutes the entire
          agreement between you and App Axis Lab regarding the App and supersedes prior understandings
          on the same subject.
          </p>

          <h2>21. Contact</h2>
          <p>
          For questions about this EULA, contact App Axis Lab at
          <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.
          </p>

        </div>
      </div>
    </PrivacyLayout>
  )
}
