import type { Metadata } from 'next'
import PrivacyLayout from '@/components/PrivacyLayout'
import s from '@/styles/privacy.module.css'

export const metadata: Metadata = {
  title: 'Wallpaper App — Privacy Policy | App Axis Lab',
}

export default function WallpaperPrivacy() {
  return (
    <PrivacyLayout
      appName="Wallpaper App"
      subtitle="Privacy Policy"
      lastUpdated="Last updated: October 12, 2025"
    >
      <div className={s.card}>
        <div className={s.privacyContent}>
          <p><strong>App Axis</strong> ("App Axis," "we," "us," or "our") develops and publishes original wallpaper applications for Android and iOS. Our goal is to bring you high-quality, visually engaging wallpapers and allow our community of users to explore and enjoy them. In some cases, users may also be able to upload and share their own wallpaper creations if they comply with our Terms of Use. Because limited information is required to maintain accounts and app functionality, we've created this Privacy Policy to explain how your data is handled.</p>

          <h2>1. Information We Collect</h2>
          <p><strong>User Provided Information:</strong></p>
          <p>When you sign in to App Axis using Google or Apple, you may provide a display name and an email address. This information is used to keep your account active, synchronize favorites, and associate your uploaded wallpapers with your profile.</p>
          <p><strong>User Generated Content (Uploads):</strong></p>
          <p>If the app allows you to upload wallpapers or photos, your submissions are reviewed for quality and compliance with our Terms of Use. Approved uploads become public and viewable to all App Axis users inside the Community section.</p>

          <h2>2. What Type of Information Does App Axis Collect?</h2>
          <p><strong>User Provided Information:</strong></p>
          <p>We obtain some information when you provide it to us. For instance, while signing in with Apple or Google, you may provide a name/username and an email address for account creation. This information is used to keep your account active and to store your preferences or progress within App Axis applications.</p>
          <p><strong>User Generated Content (Uploads):</strong></p>
          <p>Some of our apps may allow users to upload and share their own content, creations, and/or photos. This content is governed by our Terms of Use and moderated for quality and compliance. If your submission complies with our Terms and is approved, it may become visible to other users within the community features of our apps.</p>

          <h2>3. How Does App Axis Use Information?</h2>
          <p><strong>User Provided Information:</strong></p>
          <p>After account creation, we use personally identifiable information to manage your account, provide customer support, and monitor compliance with our Terms of Use.</p>
          <p><strong>Non-Personally Identifiable Information:</strong></p>
          <p>Our apps may send crash reports or analytics data to help us improve app performance. We analyze this data (which does not identify you personally) to make App Axis apps better and more reliable over time.</p>

          <h2>4. Third Party Advertisers</h2>
          <p>We use third-party advertising companies (like Google AdMob) to serve ads within our applications. These companies may use non-personal information about your device and app usage to provide relevant advertisements. For more details on how these third-party services collect and use information, visit <a href="http://www.aboutads.info" target="_blank" rel="noopener noreferrer">AboutAds.info</a> and <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">Google Ads Policy</a>.</p>

          <h2>5. Disclosures of Information</h2>
          <p>We DO NOT rent, sell, or share your personally identifiable information with anyone. It's that simple.</p>
          <p>However, App Axis may disclose your information when required by law or to investigate potential violations, fraud, or threats to safety. We also reserve the right to share aggregated, non-personally identifiable data with third parties for analytical or operational purposes.</p>
          <ul>
            <li>We do not sell or share any data related to these activities with third parties.</li>
            <li>Records are used solely to track app performance and improve user experience.</li>
            <li>Aggregated data may be analyzed to improve app engagement and functionality.</li>
          </ul>

          <h2>6. Account or Data Deletion</h2>
          <p>You may contact us at any time to remove your account or uploaded data. You can reach us at <a href="mailto:appaxislab@gmail.com">appaxislab@gmail.com</a>. Upon request, we will deactivate or delete your content and/or account. However, some minimal data may be retained to comply with legal or operational requirements.</p>

          <h2>7. Privacy Policy Changes</h2>
          <p>App Axis may modify this Privacy Policy periodically. Any changes will be reflected on this page with an updated revision date.</p>

          <h2>8. Security</h2>
          <p>We take security seriously and use reasonable technical and physical measures to protect user data. However, please note that no security system is completely impenetrable. While we strive to protect your data, we cannot guarantee absolute security.</p>

          <h2>9. Contact</h2>
          <p>If you have any questions regarding our Privacy Policy, please feel free to contact us at: <a href="mailto:appaxislab@gmail.com">appaxislab@gmail.com</a></p>
          <p>Thank you for using App Axis!</p>
        </div>
      </div>
    </PrivacyLayout>
  )
}
