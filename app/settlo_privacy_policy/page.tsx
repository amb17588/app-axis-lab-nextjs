import type { Metadata } from 'next'
import PrivacyLayout from '@/components/PrivacyLayout'
import s from '@/styles/privacy.module.css'

export const metadata: Metadata = {
  title: 'Settlo — Privacy Policy & EULA | App Axis Lab',
}

export default function SettloPrivacyPolicy() {
  return (
    <PrivacyLayout
      appName="Settlo"
      subtitle="Privacy Policy & End User License Agreement"
      lastUpdated="Last updated: June 16, 2026"
    >
      <div className={s.card}>
        <div className={s.privacyContent}>
          <p>This page contains the <a href="#privacy">Privacy Policy</a> and <a href="#eula">End User License Agreement (EULA)</a> for Settlo. By downloading, installing, or using the App, you agree to both documents.</p>

          <h1 id="privacy">Privacy Policy</h1>

          <h2>Scope</h2>
          <p>Welcome to Settlo's Privacy Policy. Your privacy and online security are important to us. This Privacy Policy explains how Settlo ("we", "our", or "us") collects, uses, protects, and shares your personal information when you use our shared expense management mobile application and related services (the "App" or "Services") available on the Apple App Store and Google Play Store.</p>
          <p>If you do not agree with this Privacy Policy, please do not use our Services.</p>

          <h2>Overview</h2>
          <p>Settlo is a shared expense management platform that allows users to track, manage, and split expenses with friends, family, or groups.</p>
          <div className={s.highlightBox}>
            <p><strong>You control who you share expenses with</strong> — expenses are visible only to participants you choose. <strong>Participants can edit or delete shared expenses</strong> according to group permissions. <strong>Your data is not public</strong> — Settlo does not publish your expense history or personal profile to the open internet.</p>
          </div>

          <h2>1. Account Registration</h2>
          <p>To use Settlo, you may provide:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number (optional)</li>
            <li>Password</li>
          </ul>
          <p>This information helps us manage your account, authenticate you, and communicate with you about your activity and the Services.</p>

          <h2>2. Information We Collect</h2>
          <p><strong>2.1 Information You Provide</strong></p>
          <ul>
            <li>Registration details (name, email, phone number, password)</li>
            <li>Expenses and transactions (amounts, descriptions, dates, splits, and payment status)</li>
            <li>Group names, notes, and comments</li>
            <li>Receipts and images you upload</li>
            <li>Support communications and feedback you send to us</li>
          </ul>
          <p><strong>2.2 Usage Information</strong></p>
          <p>We collect data about how you interact with Settlo to improve our Services, including:</p>
          <ul>
            <li>Features used and screens viewed</li>
            <li>Session duration and interaction patterns</li>
            <li>Crash logs and diagnostic data</li>
          </ul>
          <p><strong>2.3 Device &amp; Location Data</strong></p>
          <ul>
            <li>Device type and model</li>
            <li>IP address</li>
            <li>Operating system and app version</li>
            <li>Approximate location derived from IP address (we do not collect precise GPS location unless you grant permission for a specific feature)</li>
            <li>Push notification tokens (if you enable notifications)</li>
          </ul>
          <p><strong>2.4 Information Shared by Others</strong></p>
          <p>Other users may share expenses with you, add you to groups, or include your email or phone number when inviting you to Settlo. Information others provide about you is handled in accordance with this policy and is visible to relevant group participants.</p>
          <p><strong>2.5 Billing Information</strong></p>
          <p>If you use premium services, payment details are processed by Apple App Store, Google Play Store, or our subscription management partners. We do not directly collect or store full credit card numbers. We may receive subscription status, purchase identifiers, and billing-related metadata for account management and compliance.</p>
          <p><strong>2.6 Third-Party Integrations</strong></p>
          <p>If you connect Settlo to third-party services, we may collect limited information from those services solely to enable the integration. You can revoke integrations at any time through your account settings.</p>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and maintain the Services, including expense tracking, splitting, and group management</li>
            <li>Track expenses, balances, and payments between participants</li>
            <li>Improve features, performance, and user experience</li>
            <li>Ensure security, prevent fraud, and enforce our terms</li>
            <li>Respond to support requests and communicate service-related notices</li>
            <li>Send notifications about shared expenses, group activity, and account updates (subject to your preferences)</li>
            <li>Process premium subscriptions and manage billing through authorized payment providers</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>4. How We Share Your Information</h2>
          <p><strong>4.1 With Other Users</strong></p>
          <p>Expense data, group details, comments, and related information you share within a group are visible only to selected participants in that group. You choose who to share with when creating or joining groups and adding expenses.</p>
          <p><strong>4.2 With Service Providers</strong></p>
          <p>We use trusted vendors for hosting, cloud infrastructure, analytics, crash reporting, customer support tools, and payment/subscription management. These providers process data on our behalf under contractual obligations and only as needed to perform their services.</p>
          <p><strong>4.3 Legal Requirements</strong></p>
          <p>We may disclose information if required by law, regulation, legal process, or governmental request, or when we believe disclosure is necessary to protect the rights, property, or safety of Settlo, our users, or others.</p>
          <p><strong>4.4 Business Transfers</strong></p>
          <p>If Settlo is involved in a merger, acquisition, reorganization, or sale of assets, your data may be transferred as part of that transaction. We will notify you of any material change in ownership or use of your personal information.</p>
          <p><strong>4.5 Non-Personal Data</strong></p>
          <p>We may share aggregated or anonymized data that cannot reasonably be used to identify you for analytics, research, and business purposes.</p>
          <p>We do <strong>not</strong> sell your personal information.</p>

          <h2>5. Permissions</h2>
          <p>Settlo may request the following device permissions:</p>
          <ul>
            <li><strong>Camera &amp; Photo Library:</strong> To attach receipt images or photos to expenses. You may deny this permission and still use core features without uploading images.</li>
            <li><strong>Notifications:</strong> To alert you about shared expenses, group invites, and payment reminders. You can disable notifications in your device or app settings.</li>
            <li><strong>Internet:</strong> Required to sync expenses, authenticate your account, and deliver updates.</li>
          </ul>

          <h2>6. Data Security</h2>
          <p>We use encryption, access controls, and industry-standard security practices to protect your data in transit and at rest. However, no system is completely secure, and we cannot guarantee absolute security of information transmitted or stored through the Services.</p>
          <p>You are responsible for keeping your account credentials confidential and for activity that occurs under your account.</p>

          <h2>7. Cookies &amp; Tracking Technologies</h2>
          <p>We use cookies, local storage, and similar technologies within the App and on related web pages to maintain sessions, remember preferences, and improve user experience. Analytics and service providers may also use device identifiers and similar technologies.</p>
          <p>You can disable cookies in your browser settings where applicable. Some features may not function properly if cookies or local storage are disabled.</p>

          <h2>8. Subscriptions &amp; Payments</h2>
          <p>Settlo may offer premium features or subscriptions. When you purchase premium services:</p>
          <ul>
            <li>Payments are processed by Apple App Store (iOS) or Google Play Store (Android). We do not directly collect or store your full payment card details.</li>
            <li>We receive subscription status and related purchase metadata to unlock premium features.</li>
            <li>Refunds and billing disputes are handled according to the applicable app store's policies.</li>
            <li>You can manage or cancel subscriptions through your App Store or Google Play account settings.</li>
          </ul>

          <h2>9. Third-Party Services</h2>
          <p>Settlo may integrate with third-party services such as:</p>
          <ul>
            <li>Cloud hosting and database providers</li>
            <li>Analytics and crash reporting (e.g., Firebase Analytics, Firebase Crashlytics)</li>
            <li>Subscription management providers</li>
            <li>Payment processors operated by Apple and Google</li>
          </ul>
          <p>These services operate under their own privacy policies. We recommend reviewing the privacy policies of our partners, including <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a> where applicable.</p>

          <h2>10. Your Rights</h2>
          <p><strong>10.1 Access &amp; Update</strong></p>
          <p>You can access and update your profile information at any time through your account settings in the App.</p>
          <p><strong>10.2 Communication Preferences</strong></p>
          <p>You can control email and push notification preferences through your account or device settings.</p>
          <p><strong>10.3 Location Settings</strong></p>
          <p>If location-related features are enabled, you can disable location tracking through your device settings.</p>
          <p><strong>10.4 Third-Party Access</strong></p>
          <p>You can revoke third-party integrations at any time through your account settings.</p>
          <p><strong>10.5 Account Closure</strong></p>
          <ul>
            <li><strong>Deactivate:</strong> You may temporarily disable your account through account settings.</li>
            <li><strong>Delete:</strong> You may permanently remove your account and associated personal data by requesting account deletion in the App or by contacting us.</li>
          </ul>
          <div className={s.highlightBox}>
            <p><strong>Note:</strong> Shared expenses you participated in may remain visible to other group members after account deletion, but without your personal profile details where technically feasible.</p>
          </div>
          <p><strong>10.6 For EU/EEA Residents (GDPR)</strong></p>
          <p>If you are located in the European Union or European Economic Area, you have rights under the General Data Protection Regulation (GDPR), including the right to access, rectify, erase, restrict processing, data portability, and to object to certain processing. You also have the right to lodge a complaint with a supervisory authority.</p>
          <p><strong>10.7 For California Residents (CCPA/CPRA)</strong></p>
          <p>If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), including the right to know what personal information is collected, the right to request deletion, and the right to opt out of the sale or sharing of personal information. We do not sell personal information.</p>
          <p>To exercise your privacy rights, contact us at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>. We aim to respond within 30 days.</p>

          <h2>11. Data Retention</h2>
          <p>We retain your data for as long as necessary to provide the Services, fulfill the purposes described in this policy, resolve disputes, enforce our agreements, and comply with legal obligations. When you delete your account, we will delete or anonymize your personal data within a reasonable period, except where retention is required by law or where shared expense records must remain available to other participants.</p>

          <h2>12. Children's Privacy</h2>
          <p>Settlo is not intended for users under 13 years of age (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children. If we discover that we have collected personal information from a child without appropriate consent, we will take steps to delete it promptly.</p>
          <p>If you are a parent or guardian and believe your child has provided us with personal information, please contact us at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.</p>

          <h2>13. International Transfers</h2>
          <p>Your data may be processed and stored in countries other than your own, including countries that may have different data protection laws. When we transfer data internationally, we implement appropriate safeguards such as standard contractual clauses or equivalent mechanisms as required by applicable law.</p>

          <h2>14. Legal Basis for Processing</h2>
          <p>Where applicable law requires a legal basis for processing personal data, we rely on one or more of the following:</p>
          <ul>
            <li><strong>Consent:</strong> When you agree to specific processing, such as optional communications or integrations.</li>
            <li><strong>Contractual necessity:</strong> To provide the Services you request, including account management and expense sharing.</li>
            <li><strong>Legal obligations:</strong> To comply with applicable laws and regulations.</li>
            <li><strong>Legitimate interests:</strong> To improve our Services, ensure security, prevent fraud, and support our business operations, balanced against your rights and interests.</li>
          </ul>

          <h2>15. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Changes take effect upon posting, and we will update the "Last updated" date at the top of this page. For material changes that significantly affect your rights, we will provide notice through the App, email, or other appropriate means.</p>
          <p>We encourage you to review this policy periodically.</p>

          <h2>16. Contact Us</h2>
          <p>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:support@appaxislab.com">support@appaxislab.com</a></li>
            <li><strong>Developer:</strong> App Axis Lab</li>
          </ul>

          <hr className={s.divider} />

          <h1 id="eula">End User License Agreement (EULA)</h1>
          <p>This End User License Agreement ("Agreement") is a legal agreement between you ("User" or "you") and App Axis Lab ("Licensor", "we", "our", or "us") for the Settlo mobile application (the "App"). By downloading, installing, or using the App, you agree to be bound by this Agreement. If you do not agree, do not download, install, or use the App.</p>

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
            <li>Use the App to record, share, or manage fraudulent, misleading, or unauthorized financial activity</li>
            <li>Interfere with or disrupt the App, its servers, or connected networks</li>
            <li>Use automated systems or bots to access or use the App without our written consent</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>The App, including its design, trademarks, software, and content (excluding your data), is owned by App Axis Lab or its licensors and is protected by copyright, trademark, and other intellectual property laws. This Agreement does not transfer any ownership rights to you. You retain ownership of the expense data, notes, and images you submit through the App.</p>

          <h2>4. User Content &amp; Shared Expenses</h2>
          <p>You may create groups, add expenses, upload receipts, and share financial information with other participants ("User Content"). You retain ownership of your User Content. You are solely responsible for the accuracy of expense entries and for ensuring you have the right to share any information you submit.</p>
          <p>When you share expenses within a group, relevant User Content becomes visible to other participants in that group. You are responsible for choosing appropriate participants and reviewing shared information before it is submitted.</p>
          <p>Settlo is a record-keeping and expense-splitting tool. It does not process bank transfers, issue loans, or provide financial, tax, or legal advice. Balances shown in the App are informational and depend on data entered by users.</p>

          <h2>5. Account Security</h2>
          <p>You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account. Notify us promptly at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a> if you suspect unauthorized access.</p>

          <h2>6. Permissions &amp; Device Access</h2>
          <p>The App may request access to your camera, photo library, and notifications to support features described in our Privacy Policy. You may deny certain permissions, but related features may not function.</p>

          <h2>7. Third-Party Services</h2>
          <p>The App may integrate third-party services for hosting, analytics, crash reporting, and subscription management. These services are governed by their own terms and privacy policies. We are not responsible for third-party services, content, or practices.</p>

          <h2>8. Subscriptions &amp; In-App Purchases</h2>
          <p>Settlo may offer premium features, subscriptions, or in-app purchases. Payment and billing are processed by Apple App Store, Google Play Store, or other authorized payment providers. Refunds and billing disputes are handled according to the applicable store's policies. We do not store your full payment card details.</p>
          <p>Free trials, if offered, convert to paid subscriptions unless cancelled before the trial ends, in accordance with the applicable store's rules.</p>

          <h2>9. Disclaimer of Warranties</h2>
          <p>THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR THAT EXPENSE CALCULATIONS, BALANCES, OR SHARED RECORDS WILL BE ACCURATE OR COMPLETE.</p>

          <h2>10. Limitation of Liability</h2>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, APP AXIS LAB AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP, INCLUDING DISPUTES BETWEEN USERS REGARDING SHARED EXPENSES OR PAYMENTS.</p>
          <p>OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE APP SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US FOR THE APP IN THE TWELVE (12) MONTHS BEFORE THE CLAIM, OR (B) FIFTY U.S. DOLLARS (USD $50), WHERE PERMITTED BY LAW.</p>

          <h2>11. Indemnification</h2>
          <p>You agree to indemnify and hold harmless App Axis Lab from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from your use of the App, your User Content, disputes with other users, or your violation of this Agreement or applicable law.</p>

          <h2>12. Termination</h2>
          <p>This license is effective until terminated. We may suspend or terminate your access to the App at any time if you breach this Agreement. Upon termination, you must cease all use of the App and delete all copies from your devices. Sections that by their nature should survive termination will survive.</p>

          <h2>13. Changes to This Agreement</h2>
          <p>We may update this EULA from time to time. Continued use of the App after changes become effective constitutes acceptance of the revised Agreement. The "Last updated" date at the top of this page will reflect material revisions.</p>

          <h2>14. Governing Law &amp; Disputes</h2>
          <p>This Agreement is governed by the laws of the jurisdiction in which App Axis Lab operates, without regard to conflict-of-law principles, except where mandatory consumer protection laws in your country provide otherwise. Any dispute shall be resolved in the courts of that jurisdiction, unless applicable law requires a different forum.</p>

          <h2>15. Children</h2>
          <p>The App is not intended for children under 13 years of age (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children as described in our Privacy Policy.</p>

          <h2>16. Apple App Store (iOS)</h2>
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

          <h2>17. Google Play (Android)</h2>
          <p>If you obtained the App through Google Play, you agree that Google LLC is not a party to this Agreement and has no responsibility or liability with respect to the App. Your use of Google Play is subject to Google Play's terms of service.</p>

          <h2>18. Severability &amp; Entire Agreement</h2>
          <p>If any provision of this Agreement is held invalid or unenforceable, the remaining provisions remain in full force. This Agreement, together with our Privacy Policy, constitutes the entire agreement between you and App Axis Lab regarding the App and supersedes prior understandings on the same subject.</p>

          <h2>19. Contact</h2>
          <p>For questions about this EULA, contact App Axis Lab at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.</p>
        </div>
      </div>
    </PrivacyLayout>
  )
}
