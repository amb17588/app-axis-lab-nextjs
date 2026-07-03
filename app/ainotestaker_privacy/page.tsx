import type { Metadata } from 'next'
import PrivacyLayout from '@/components/PrivacyLayout'
import s from '@/styles/privacy.module.css'

export const metadata: Metadata = {
  title: 'AI Notes Taker — Privacy Policy & EULA | App Axis Lab',
}

export default function AiNotesTakerPrivacy() {
  return (
    <PrivacyLayout
      appName="AI Notes Taker"
      subtitle="Privacy Policy &amp; End User License Agreement (EULA)"
      lastUpdated="Last updated: July 3, 2026"
    >
      <div className={s.card}>
        <div className={s.privacyContent}>
          <div className={s.highlightBox}>
            <p>
              <strong>Important:</strong> This page contains the{' '}
              <a href="#privacy">Privacy Policy</a> and{' '}
              <a href="#eula">End User License Agreement (EULA)</a> for AI Notes Taker.
              By downloading, installing, or using the App, you agree to both documents.
            </p>
          </div>

          {/* ── PRIVACY POLICY ── */}
          <h1 id="privacy">Privacy Policy</h1>

          <h2>Scope</h2>
          <p>
            Welcome to AI Notes Taker&apos;s Privacy Policy. Your privacy and online security are
            important to us. This Privacy Policy explains how AI Notes Taker (&quot;we&quot;, &quot;our&quot;, or
            &quot;us&quot;) collects, uses, protects, and shares your personal information when you use our
            AI-powered note-taking mobile application and related services (the &quot;App&quot; or
            &quot;Services&quot;) available on the Apple App Store and Google Play Store.
          </p>
          <p>If you do not agree with this Privacy Policy, please do not use our Services.</p>

          <h2>Overview</h2>
          <p>
            AI Notes Taker is a voice-to-text note-taking platform that allows users to record
            audio memos, transcribe them into text using AI, and generate smart summaries.
          </p>
          <ul>
            <li>You control your recordings and notes — your data is private and not shared with other users unless you choose to export or share it.</li>
            <li>Your recordings are processed to generate transcripts and summaries using AI technology.</li>
            <li>Your data is not public — AI Notes Taker does not publish your recordings, notes, or personal profile to the open internet.</li>
          </ul>

          <h2>1. Account Registration</h2>
          <p>To use AI Notes Taker, you may provide:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Google account information (if using Google Sign-In)</li>
            <li>Password (if creating a direct account)</li>
          </ul>
          <p>This information helps us manage your account, authenticate you, sync your notes across devices, and communicate with you about your activity and the Services.</p>

          <h2>2. Information We Collect</h2>

          <h3>2.1 Information You Provide</h3>
          <ul>
            <li>Registration details (name, email, password, Google account information)</li>
            <li>Voice recordings and audio files you create within the App</li>
            <li>Transcripts, summaries, and notes generated from your recordings</li>
            <li>PDFs, images, and videos you upload for text extraction or processing</li>
            <li>Notes, titles, tags, and metadata you add to your recordings</li>
            <li>Support communications and feedback you send to us</li>
          </ul>

          <h3>2.2 Usage Information</h3>
          <p>We collect data about how you interact with AI Notes Taker to improve our Services, including:</p>
          <ul>
            <li>Features used and screens viewed</li>
            <li>Session duration and interaction patterns</li>
            <li>Crash logs and diagnostic data via Firebase Crashlytics</li>
            <li>Analytics data via Firebase Analytics</li>
          </ul>

          <h3>2.3 Device &amp; Location Data</h3>
          <ul>
            <li>Device type and model</li>
            <li>IP address</li>
            <li>Operating system and app version</li>
            <li>Approximate location derived from IP address (we do not collect precise GPS location)</li>
            <li>Push notification tokens (if you enable notifications)</li>
            <li>Advertising identifiers for ad serving (for free users only)</li>
          </ul>

          <h3>2.4 Billing Information</h3>
          <p>If you purchase premium features or subscriptions, payment details are processed by Apple App Store, Google Play Store, or our subscription management partner (RevenueCat). We do not directly collect or store full credit card numbers. We receive subscription status, purchase identifiers, and billing-related metadata for account management and premium feature access.</p>

          <h3>2.5 Third-Party Integrations</h3>
          <p>If you connect AI Notes Taker to third-party services (such as Google Calendar or Google Sign-In), we may collect limited information from those services solely to enable the integration. You can revoke integrations at any time through your account settings or device settings.</p>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and maintain the Services, including voice recording, transcription, and AI-powered summarization</li>
            <li>Process your audio recordings to generate accurate transcripts and intelligent summaries</li>
            <li>Extract text from uploaded PDFs, images, and videos</li>
            <li>Sync your notes and recordings across your devices</li>
            <li>Improve features, performance, and user experience</li>
            <li>Ensure security, prevent fraud, and enforce our terms</li>
            <li>Respond to support requests and communicate service-related notices</li>
            <li>Send notifications about app updates, new features, and account activity (subject to your preferences)</li>
            <li>Process premium subscriptions and manage billing through authorized payment providers</li>
            <li>Display relevant advertisements to free users through Google AdMob</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>4. How We Share Your Information</h2>

          <h3>4.1 With Service Providers</h3>
          <p>We use trusted vendors for hosting, cloud infrastructure, analytics, crash reporting, customer support tools, AI processing, and payment/subscription management. These providers process data on our behalf under contractual obligations and only as needed to perform their services. Our key service providers include:</p>
          <ul>
            <li><strong>Supabase:</strong> Cloud hosting, database, authentication, and file storage</li>
            <li><strong>Firebase (Google):</strong> Analytics, crash reporting, and performance monitoring</li>
            <li><strong>RevenueCat:</strong> Subscription management and payment processing</li>
            <li><strong>Google AdMob:</strong> Advertising services for free users</li>
            <li><strong>AI Services:</strong> Speech-to-text transcription and text summarization (OpenAI, Groq, or similar)</li>
          </ul>

          <h3>4.2 AI Processing</h3>
          <p>Your voice recordings may be sent to third-party AI service providers (such as OpenAI or Groq) to generate transcripts and summaries. These providers process your audio data according to their own privacy policies and data retention practices. We recommend reviewing the privacy policies of these AI services.</p>

          <h3>4.3 Legal Requirements</h3>
          <p>We may disclose information if required by law, regulation, legal process, or governmental request, or when we believe disclosure is necessary to protect the rights, property, or safety of AI Notes Taker, our users, or others.</p>

          <h3>4.4 Business Transfers</h3>
          <p>If AI Notes Taker is involved in a merger, acquisition, reorganization, or sale of assets, your data may be transferred as part of that transaction. We will notify you of any material change in ownership or use of your personal information.</p>

          <h3>4.5 Non-Personal Data</h3>
          <p>We may share aggregated or anonymized data that cannot reasonably be used to identify you for analytics, research, and business purposes.</p>

          <div className={s.callout}>
            <p>We do <strong>not</strong> sell your personal information.</p>
          </div>

          <h2>5. Permissions</h2>
          <p>AI Notes Taker may request the following device permissions:</p>
          <ul>
            <li><strong>Microphone:</strong> To record voice notes and audio files. This is essential for the core functionality of the App.</li>
            <li><strong>Speech Recognition:</strong> To transcribe your voice recordings into text using on-device or cloud-based speech recognition.</li>
            <li><strong>Camera &amp; Photo Library:</strong> To capture or attach images and documents to your notes. You may deny this permission and still use core voice recording features.</li>
            <li><strong>Notifications:</strong> To alert you about processing completion, reminders, and app updates. You can disable notifications in your device or app settings.</li>
            <li><strong>Internet:</strong> Required to sync notes, authenticate your account, process AI transcriptions, and deliver updates.</li>
            <li><strong>Storage:</strong> To save voice recordings and notes locally on your device.</li>
          </ul>

          <h2>6. Data Security</h2>
          <p>We use encryption, access controls, and industry-standard security practices to protect your data in transit and at rest. However, no system is completely secure, and we cannot guarantee absolute security of information transmitted or stored through the Services.</p>
          <p>You are responsible for keeping your account credentials confidential and for activity that occurs under your account.</p>

          <h2>7. Cookies &amp; Tracking Technologies</h2>
          <p>We use cookies, local storage, and similar technologies within the App and on related web pages to maintain sessions, remember preferences, and improve user experience. Analytics and service providers may also use device identifiers and similar technologies.</p>
          <p>You can disable cookies in your browser settings where applicable. Some features may not function properly if cookies or local storage are disabled.</p>

          <h2>8. Advertising</h2>
          <p>AI Notes Taker displays advertisements to free users through Google AdMob. These ads may be personalized based on your device information and usage patterns. Premium subscribers do not see advertisements.</p>
          <p>You can control ad personalization through your device settings:</p>
          <ul>
            <li><strong>iOS:</strong> Settings &gt; Privacy &gt; Advertising &gt; Limit Ad Tracking</li>
            <li><strong>Android:</strong> Settings &gt; Google &gt; Ads &gt; Opt out of Ads Personalization</li>
          </ul>

          <h2>9. Subscriptions &amp; Payments</h2>
          <p>AI Notes Taker offers premium features and subscriptions. When you purchase premium services:</p>
          <ul>
            <li>Payments are processed by Apple App Store (iOS) or Google Play Store (Android) via RevenueCat. We do not directly collect or store your full payment card details.</li>
            <li>We receive subscription status and related purchase metadata to unlock premium features and provide customer support.</li>
            <li>Refunds and billing disputes are handled according to the applicable app store&apos;s policies.</li>
            <li>You can manage or cancel subscriptions through your App Store or Google Play account settings.</li>
          </ul>

          <h2>10. Third-Party Services</h2>
          <p>AI Notes Taker may integrate with third-party services such as:</p>
          <ul>
            <li>Cloud hosting and database providers (Supabase)</li>
            <li>Analytics and crash reporting (Firebase Analytics, Firebase Crashlytics)</li>
            <li>Subscription management (RevenueCat)</li>
            <li>Payment processors operated by Apple and Google</li>
            <li>AI transcription and summarization services (OpenAI, Groq, or similar)</li>
            <li>Authentication providers (Google Sign-In)</li>
            <li>Calendar integration (Google Calendar, Microsoft Calendar)</li>
          </ul>
          <p>
            These services operate under their own privacy policies. We recommend reviewing the
            privacy policies of our partners, including{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>,{' '}
            <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">Supabase&apos;s Privacy Policy</a>,{' '}
            and{' '}
            <a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer">OpenAI&apos;s Privacy Policy</a>{' '}
            where applicable.
          </p>

          <h2>11. Your Rights</h2>

          <h3>11.1 Access &amp; Update</h3>
          <p>You can access and update your profile information at any time through your account settings in the App.</p>

          <h3>11.2 Communication Preferences</h3>
          <p>You can control email and push notification preferences through your account or device settings.</p>

          <h3>11.3 Third-Party Access</h3>
          <p>You can revoke third-party integrations (such as Google Sign-In or calendar connections) at any time through your account settings.</p>

          <h3>11.4 Account Closure</h3>
          <ul>
            <li><strong>Deactivate:</strong> You may temporarily disable your account through account settings.</li>
            <li><strong>Delete:</strong> You may permanently remove your account and associated personal data by requesting account deletion in the App or by contacting us at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.</li>
          </ul>
          <div className={s.callout}>
            <p><strong>Note:</strong> When you delete your account, we will delete your voice recordings, transcripts, notes, and personal profile data within a reasonable period. Some anonymized usage data may be retained for analytics purposes.</p>
          </div>

          <h3>11.5 For EU/EEA Residents (GDPR)</h3>
          <p>If you are located in the European Union or European Economic Area, you have rights under the General Data Protection Regulation (GDPR), including the right to access, rectify, erase, restrict processing, data portability, and to object to certain processing. You also have the right to lodge a complaint with a supervisory authority.</p>

          <h3>11.6 For California Residents (CCPA/CPRA)</h3>
          <p>If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), including the right to know what personal information is collected, the right to request deletion, and the right to opt out of the sale or sharing of personal information. <strong>We do not sell personal information.</strong></p>

          <p>
            To exercise your privacy rights, contact us at{' '}
            <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>. We aim to respond within 30 days.
          </p>

          <h2>12. Data Retention</h2>
          <p>We retain your data for as long as necessary to provide the Services, fulfill the purposes described in this policy, resolve disputes, enforce our agreements, and comply with legal obligations. When you delete your account, we will delete or anonymize your personal data within a reasonable period, except where retention is required by law.</p>

          <h2>13. Children&apos;s Privacy</h2>
          <p>AI Notes Taker is not intended for users under 13 years of age (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children. If we discover that we have collected personal information from a child without appropriate consent, we will take steps to delete it promptly.</p>
          <p>
            If you are a parent or guardian and believe your child has provided us with personal information,
            please contact us at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.
          </p>

          <h2>14. International Transfers</h2>
          <p>Your data may be processed and stored in countries other than your own, including countries that may have different data protection laws. When we transfer data internationally, we implement appropriate safeguards such as standard contractual clauses or equivalent mechanisms as required by applicable law.</p>

          <h2>15. Legal Basis for Processing</h2>
          <p>Where applicable law requires a legal basis for processing personal data, we rely on one or more of the following:</p>
          <ul>
            <li><strong>Consent:</strong> When you agree to specific processing, such as optional communications or integrations.</li>
            <li><strong>Contractual necessity:</strong> To provide the Services you request, including voice recording, transcription, summarization, and note management.</li>
            <li><strong>Legal obligations:</strong> To comply with applicable laws and regulations.</li>
            <li><strong>Legitimate interests:</strong> To improve our Services, ensure security, prevent fraud, and support our business operations, balanced against your rights and interests.</li>
          </ul>

          <h2>16. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Changes take effect upon posting, and we will update the &quot;Last updated&quot; date at the top of this page. For material changes that significantly affect your rights, we will provide notice through the App, email, or other appropriate means.</p>
          <p>We encourage you to review this policy periodically.</p>

          <h2>17. Contact Us</h2>
          <p>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:support@appaxislab.com">support@appaxislab.com</a></li>
            <li><strong>Developer:</strong> App Axis Lab</li>
          </ul>

          <hr className={s.divider} />

          {/* ── EULA ── */}
          <h1 id="eula">End User License Agreement (EULA)</h1>

          <div className={s.highlightBox}>
            <p>
              This End User License Agreement (&quot;Agreement&quot;) is a legal agreement between you
              (&quot;User&quot; or &quot;you&quot;) and App Axis Lab (&quot;Licensor&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) for the AI
              Notes Taker mobile application (the &quot;App&quot;). By downloading, installing, or using the
              App, you agree to be bound by this Agreement. If you do not agree, do not download,
              install, or use the App.
            </p>
          </div>

          <h2>1. License Grant</h2>
          <p>
            Subject to your compliance with this Agreement, we grant you a limited, non-exclusive,
            non-transferable, revocable license to install and use the App on devices you own or
            control, solely for personal, non-commercial purposes, in accordance with this Agreement
            and applicable app store terms.
          </p>

          <h2>2. Restrictions</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Copy, modify, adapt, or create derivative works of the App</li>
            <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the App, except where expressly permitted by law</li>
            <li>Rent, lease, lend, sell, sublicense, or distribute the App or any part of it</li>
            <li>Remove, alter, or obscure any proprietary notices or labels on the App</li>
            <li>Use the App for any unlawful purpose or in violation of any applicable laws or regulations</li>
            <li>Use the App to record, store, or share audio content without the consent of the individuals being recorded, in violation of applicable recording consent laws</li>
            <li>Interfere with or disrupt the App, its servers, or connected networks</li>
            <li>Use automated systems or bots to access or use the App without our written consent</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>
            The App, including its design, trademarks, software, and content (excluding your data),
            is owned by App Axis Lab or its licensors and is protected by copyright, trademark, and
            other intellectual property laws. This Agreement does not transfer any ownership rights
            to you. You retain ownership of the voice recordings, notes, transcripts, and other
            content you create through the App.
          </p>

          <h2>4. User Content</h2>
          <p>
            You may create voice recordings, notes, transcripts, summaries, and upload files (&quot;User
            Content&quot;). You retain ownership of your User Content. You are solely responsible for the
            content of your recordings and for ensuring you have the right to record and share any
            audio or information you submit.
          </p>
          <p>
            <strong>Recording Consent:</strong> You are responsible for complying with all applicable
            laws regarding audio recording, including obtaining consent from individuals being
            recorded where required by law. AI Notes Taker is not responsible for any violations of
            recording consent laws.
          </p>
          <p>
            AI Notes Taker is a note-taking and voice recording tool. It does not provide legal,
            medical, or professional advice. Transcripts and summaries are generated using AI
            technology and may contain errors or inaccuracies. You are responsible for verifying the
            accuracy of all AI-generated content.
          </p>

          <h2>5. Account Security</h2>
          <p>
            You are responsible for maintaining the confidentiality of your login credentials and for
            all activity under your account. Notify us promptly at{' '}
            <a href="mailto:support@appaxislab.com">support@appaxislab.com</a> if you suspect
            unauthorized access.
          </p>

          <h2>6. Permissions &amp; Device Access</h2>
          <p>
            The App may request access to your microphone, speech recognition, camera, photo
            library, storage, and notifications to support features described in our{' '}
            <a href="#privacy">Privacy Policy</a>. You may deny certain permissions, but related
            features may not function.
          </p>

          <h2>7. Third-Party Services</h2>
          <p>
            The App may integrate third-party services for hosting, analytics, crash reporting, AI
            processing, and subscription management. These services are governed by their own terms
            and privacy policies. We are not responsible for third-party services, content, or
            practices.
          </p>

          <h2>8. Subscriptions &amp; In-App Purchases</h2>
          <p>
            AI Notes Taker may offer premium features, subscriptions, or in-app purchases. Payment
            and billing are processed by Apple App Store, Google Play Store, or other authorized
            payment providers (via RevenueCat). Refunds and billing disputes are handled according to
            the applicable store&apos;s policies. We do not store your full payment card details.
          </p>
          <p>
            Free trials, if offered, convert to paid subscriptions unless cancelled before the trial
            ends, in accordance with the applicable store&apos;s rules.
          </p>

          <h2>9. Disclaimer of Warranties</h2>
          <p>
            THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND,
            WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE
            APP WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR THAT TRANSCRIPTS, SUMMARIES, OR
            AI-GENERATED CONTENT WILL BE ACCURATE OR COMPLETE.
          </p>

          <h2>10. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, APP AXIS LAB AND ITS AFFILIATES,
            OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT,
            INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR
            GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP, INCLUDING
            ERRORS IN AI-GENERATED TRANSCRIPTS OR SUMMARIES, LOST RECORDINGS, OR DATA LOSS.
          </p>
          <p>
            OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE APP
            SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US FOR THE APP IN THE TWELVE (12)
            MONTHS BEFORE THE CLAIM, OR (B) FIFTY U.S. DOLLARS (USD $50), WHERE PERMITTED BY LAW.
          </p>

          <h2>11. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless App Axis Lab from any claims, damages, losses,
            liabilities, and expenses (including reasonable legal fees) arising from your use of the
            App, your User Content, violations of recording consent laws, or your violation of this
            Agreement or applicable law.
          </p>

          <h2>12. Termination</h2>
          <p>
            This license is effective until terminated. We may suspend or terminate your access to
            the App at any time if you breach this Agreement. Upon termination, you must cease all
            use of the App and delete all copies from your devices. Sections that by their nature
            should survive termination will survive.
          </p>

          <h2>13. Changes to This Agreement</h2>
          <p>
            We may update this EULA from time to time. Continued use of the App after changes become
            effective constitutes acceptance of the revised Agreement. The &quot;Last updated&quot; date at
            the top of this page will reflect material revisions.
          </p>

          <h2>14. Governing Law &amp; Disputes</h2>
          <p>
            This Agreement is governed by the laws of the jurisdiction in which App Axis Lab
            operates, without regard to conflict-of-law principles, except where mandatory consumer
            protection laws in your country provide otherwise. Any dispute shall be resolved in the
            courts of that jurisdiction, unless applicable law requires a different forum.
          </p>

          <h2>15. Children</h2>
          <p>
            The App is not intended for children under 13 years of age (or the applicable age of
            consent in your jurisdiction). We do not knowingly collect personal information from
            children as described in our Privacy Policy.
          </p>

          <h2>16. Apple App Store (iOS)</h2>
          <p>If you obtained the App through the Apple App Store, you also agree that:</p>
          <ul>
            <li>This Agreement is between you and App Axis Lab only, not Apple Inc. (&quot;Apple&quot;).</li>
            <li>Apple is not responsible for the App or its content, maintenance, support, or warranty obligations.</li>
            <li>Apple has no obligation to furnish maintenance or support services for the App.</li>
            <li>In the event of any failure of the App to conform to any applicable warranty, you may notify Apple for a refund of the purchase price (if any); to the maximum extent permitted by law, Apple has no other warranty obligation.</li>
            <li>Apple is not responsible for addressing any claims relating to the App, including product liability, legal compliance, consumer protection, privacy, or intellectual property infringement.</li>
            <li>Apple and its subsidiaries are third-party beneficiaries of this Agreement and may enforce it against you as a third-party beneficiary.</li>
            <li>You represent that you are not located in a country subject to a U.S. Government embargo or designated as a &quot;terrorist supporting&quot; country, and that you are not listed on any U.S. Government prohibited or restricted party list.</li>
            <li>You must comply with applicable third-party terms when using the App (e.g., wireless data service agreements).</li>
          </ul>

          <h2>17. Google Play (Android)</h2>
          <p>
            If you obtained the App through Google Play, you agree that Google LLC is not a party to
            this Agreement and has no responsibility or liability with respect to the App. Your use
            of Google Play is subject to Google Play&apos;s terms of service.
          </p>

          <h2>18. Severability &amp; Entire Agreement</h2>
          <p>
            If any provision of this Agreement is held invalid or unenforceable, the remaining
            provisions remain in full force. This Agreement, together with our Privacy Policy,
            constitutes the entire agreement between you and App Axis Lab regarding the App and
            supersedes prior understandings on the same subject.
          </p>

          <h2>19. Contact</h2>
          <p>
            For questions about this EULA, contact App Axis Lab at{' '}
            <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.
          </p>
        </div>
      </div>
    </PrivacyLayout>
  )
}
