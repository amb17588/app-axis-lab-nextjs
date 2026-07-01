import type { Metadata } from 'next'
import PrivacyLayout from '@/components/PrivacyLayout'
import s from '@/styles/privacy.module.css'

export const metadata: Metadata = {
  title: 'HireX AI — Privacy Policy & Legal | App Axis Lab',
}

export default function HirexAiPrivacy() {
  return (
    <PrivacyLayout
      appName="HireX AI"
      subtitle="Privacy Policy, Terms of Service & End User License Agreement"
      lastUpdated="Last updated: June 30, 2026"
    >
      <div className={s.card}>
        <div className={s.privacyContent}>
          <div className={s.highlightBox}>
            <p>
              This page contains the <a href="#privacy">Privacy Policy</a>,{' '}
              <a href="#terms">Terms of Service</a>, and{' '}
              <a href="#eula">End User License Agreement (EULA)</a> for Hirex AI.
              By downloading, installing, or using the App, you agree to all three documents.
            </p>
          </div>

          {/* ── PRIVACY POLICY ── */}
          <h1 id="privacy">Privacy Policy</h1>

          <h2>Scope</h2>
          <p>
            Welcome to Hirex AI&apos;s Privacy Policy. Your privacy and online security are important to us.
            This Privacy Policy explains how Hirex AI (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses, protects, and
            shares your personal information when you use our AI-powered resume building mobile application
            and related services (the &quot;App&quot; or &quot;Services&quot;) available on the Apple App Store and Google Play Store.
          </p>
          <p>If you do not agree with this Privacy Policy, please do not use our Services.</p>

          <h2>Overview</h2>
          <p>
            Hirex AI is an AI-powered resume builder that allows users to create, edit, and export
            professional resumes using customizable templates and AI-powered suggestions.
          </p>
          <ul>
            <li>Your resume data is private and stored securely in the cloud</li>
            <li>AI-powered features send limited data to OpenAI for generating professional summaries and skill suggestions</li>
            <li>Your resumes are not public — Hirex AI does not publish your resume content to the open internet</li>
            <li>You have full control over your data and can delete your account at any time</li>
          </ul>

          <h2>1. Account Registration</h2>
          <p>To use Hirex AI, you may provide:</p>
          <ul>
            <li>Email address</li>
            <li>Password</li>
            <li>Username (optional)</li>
          </ul>
          <p>
            This information helps us manage your account, authenticate you, sync your resumes across
            devices, and communicate with you about your activity and the Services.
          </p>

          <h2>2. Information We Collect</h2>

          <h3>2.1 Information You Provide</h3>
          <ul>
            <li>Registration details (email, password, username)</li>
            <li>
              Resume content including:
              <ul>
                <li>Personal information (name, email, phone, location, LinkedIn profile)</li>
                <li>Professional summary</li>
                <li>Work experience (job titles, companies, dates, responsibilities)</li>
                <li>Education (degrees, schools, graduation years, GPA)</li>
                <li>Skills (technical and soft skills)</li>
                <li>Projects (names, descriptions, tech stacks, links)</li>
                <li>Social media links (GitHub, portfolio, Behance, Dribbble, Twitter, Stack Overflow)</li>
              </ul>
            </li>
            <li>Profile photos you upload or capture for resumes</li>
            <li>PDF files you upload for merging, splitting, or image-to-PDF conversion</li>
            <li>Template selections and customizations</li>
            <li>Support communications and feedback</li>
          </ul>

          <h3>2.2 Usage Information</h3>
          <p>We collect data about how you interact with Hirex AI to improve our Services, including:</p>
          <ul>
            <li>Features used and screens viewed</li>
            <li>Session duration and interaction patterns</li>
            <li>Navigation paths and button clicks</li>
            <li>Resume creation and export events</li>
            <li>AI feature usage (summary generation, skill suggestions)</li>
            <li>Crash logs and diagnostic data</li>
            <li>App performance metrics</li>
          </ul>

          <h3>2.3 Device &amp; Technical Data</h3>
          <ul>
            <li>Device type, model, and manufacturer</li>
            <li>Operating system and version</li>
            <li>App version</li>
            <li>IP address</li>
            <li>Device identifiers (Android Advertising ID)</li>
            <li>Language and locale settings</li>
            <li>Network connection type</li>
            <li>Push notification tokens (if you enable notifications)</li>
          </ul>
          <p>We do not collect precise GPS location data.</p>

          <h3>2.4 Billing Information</h3>
          <p>
            If you use premium subscriptions, payment details are processed by Apple App Store, Google Play
            Store, or RevenueCat (our subscription management partner). We do not directly collect or store
            full credit card numbers. We receive subscription status, purchase identifiers, user IDs, and
            billing-related metadata for account management and premium feature access.
          </p>

          <h3>2.5 Third-Party Integrations</h3>
          <p>
            If you connect Hirex AI to third-party services in the future, we may collect limited information
            from those services solely to enable the integration.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul>
            <li>Provide and maintain the Services, including resume creation, editing, template selection, and PDF export</li>
            <li>Generate AI-powered professional summaries and skill suggestions by sending your work experience, job titles, company names, and personal information to OpenAI&apos;s API</li>
            <li>Store and sync your resume data securely across your devices</li>
            <li>Process PDF manipulation features (merge, split, image-to-PDF conversion)</li>
            <li>Improve features, performance, and user experience</li>
            <li>Ensure security, prevent fraud, and enforce our terms</li>
            <li>Respond to support requests and communicate service-related notices</li>
            <li>Send notifications about app updates and new features (subject to your preferences)</li>
            <li>Process premium subscriptions and manage billing through authorized payment providers</li>
            <li>Display advertisements through Google AdMob</li>
            <li>Track AI feature usage limits based on your subscription tier</li>
            <li>Analyze app performance and identify bugs through Firebase Crashlytics</li>
            <li>Comply with legal obligations</li>
          </ul>

          <div className={s.highlightBox}>
            <p>
              <strong>AI-Powered Features</strong> — When you use AI features (professional summary generation
              or skill suggestions), the following data is transmitted to OpenAI&apos;s GPT-4o-mini API: your name,
              location, and LinkedIn profile URL; work experience entries (job titles, company names, employment
              duration, job responsibilities); and existing skills you&apos;ve added. This data is processed by
              OpenAI to generate personalized suggestions. According to OpenAI&apos;s API terms, your data is not
              used to train their models.
            </p>
          </div>

          <h2>4. How We Share Your Information</h2>

          <h3>4.1 With Service Providers</h3>
          <p>
            We use trusted vendors for hosting, cloud infrastructure, analytics, crash reporting, AI processing,
            advertising, and subscription management. These providers process data on our behalf under
            contractual obligations and only as needed to perform their services:
          </p>
          <ul>
            <li><strong>Supabase:</strong> Cloud database storage and user authentication (email, username, resume data)</li>
            <li><strong>OpenAI:</strong> AI-powered resume summary and skill suggestion generation (name, location, LinkedIn, work experience)</li>
            <li><strong>Firebase (Google):</strong> Analytics, crash reporting, and remote configuration (device identifiers, usage events, crash logs, user ID)</li>
            <li><strong>Google AdMob:</strong> Advertising delivery (advertising identifiers, device information, usage patterns)</li>
            <li><strong>RevenueCat:</strong> Subscription management (user ID, device identifiers, subscription status, purchase transactions)</li>
          </ul>

          <h3>4.2 Legal Requirements</h3>
          <p>
            We may disclose information if required by law, regulation, legal process, or governmental request,
            or when we believe disclosure is necessary to protect the rights, property, or safety of Hirex AI,
            our users, or others.
          </p>

          <h3>4.3 Business Transfers</h3>
          <p>
            If Hirex AI or App Axis Lab is involved in a merger, acquisition, reorganization, or sale of assets,
            your data may be transferred as part of that transaction. We will notify you of any material change
            in ownership or use of your personal information.
          </p>

          <h3>4.4 Non-Personal Data</h3>
          <p>
            We may share aggregated or anonymized data that cannot reasonably be used to identify you for
            analytics, research, and business purposes.
          </p>
          <div className={s.callout}>
            <p><strong>We do not sell your personal information.</strong></p>
          </div>

          <h2>5. Permissions</h2>
          <p>Hirex AI may request the following device permissions:</p>
          <ul>
            <li><strong>Camera:</strong> To capture profile photos for your resume. You may deny this permission and still use core features by uploading existing photos instead.</li>
            <li><strong>Photo Library (Read):</strong> To select profile photos from your device and to select images for PDF conversion features. Required for image-to-PDF, merge PDF, and profile photo upload features.</li>
            <li><strong>Photo Library (Write/Save):</strong> To save exported resume PDFs to your device&apos;s photo library or downloads folder.</li>
            <li><strong>Storage (Android):</strong> To read and write PDF files for export, merge, and split operations.</li>
            <li><strong>Notifications:</strong> To alert you about app updates and new features. You can disable notifications in your device or app settings.</li>
            <li><strong>Internet:</strong> Required to sync resumes, authenticate your account, use AI features, and deliver updates.</li>
            <li><strong>In-App Billing:</strong> To process premium subscription purchases through Google Play Store or Apple App Store.</li>
          </ul>

          <h2>6. Data Security</h2>
          <p>We use encryption, access controls, and industry-standard security practices to protect your data in transit and at rest:</p>
          <ul>
            <li>All data transmission uses HTTPS/TLS encryption</li>
            <li>Resume data is stored in Supabase with Row-Level Security (RLS) policies</li>
            <li>User authentication uses secure protocols</li>
            <li>Access controls ensure users can only access their own data</li>
            <li>Regular security monitoring through Firebase Crashlytics</li>
          </ul>
          <p>
            However, no method of transmission over the Internet or electronic storage is 100% secure. While we
            strive to use commercially acceptable means to protect your information, we cannot guarantee absolute
            security.
          </p>
          <p>You are responsible for keeping your account credentials confidential and for activity that occurs under your account.</p>

          <h2>7. Advertising</h2>
          <p>The App displays advertisements through Google AdMob. These ads may be personalized based on:</p>
          <ul>
            <li>Your app usage patterns</li>
            <li>Device advertising identifier</li>
            <li>Demographic inferences</li>
            <li>Previous ad interactions</li>
          </ul>
          <p>You can opt out of personalized advertising:</p>
          <ul>
            <li><strong>Android:</strong> Settings &gt; Privacy &gt; Ads &gt; Opt out of Ads Personalization</li>
            <li><strong>iOS:</strong> Settings &gt; Privacy &gt; Advertising &gt; Limit Ad Tracking</li>
          </ul>

          <h2>8. Subscriptions &amp; Payments</h2>
          <p>Hirex AI offers premium features through subscriptions. When you purchase premium services:</p>
          <ul>
            <li>Payments are processed by Apple App Store (iOS) or Google Play Store (Android). We do not directly collect or store your full payment card details.</li>
            <li>We receive subscription status and related purchase metadata from RevenueCat to unlock premium features and track AI usage limits.</li>
            <li>Refunds and billing disputes are handled according to the applicable app store&apos;s policies.</li>
            <li>You can manage or cancel subscriptions through your App Store or Google Play account settings.</li>
            <li>Free trials, if offered, convert to paid subscriptions unless cancelled before the trial ends.</li>
          </ul>

          <h2>9. Third-Party Services</h2>
          <p>Hirex AI integrates with third-party services. These services operate under their own privacy policies:</p>
          <ul>
            <li><strong>Supabase:</strong> <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">https://supabase.com/privacy</a></li>
            <li><strong>OpenAI:</strong> <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer">https://openai.com/policies/privacy-policy</a></li>
            <li><strong>Google/Firebase:</strong> <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">https://firebase.google.com/support/privacy</a></li>
            <li><strong>Google AdMob:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
            <li><strong>RevenueCat:</strong> <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">https://www.revenuecat.com/privacy</a></li>
          </ul>

          <h2>10. Your Rights</h2>

          <h3>10.1 Access &amp; Update</h3>
          <p>You can access and update your account information and resume content at any time through the App.</p>

          <h3>10.2 Communication Preferences</h3>
          <p>You can control push notification preferences through your device settings or within the App settings.</p>

          <h3>10.3 Data Export</h3>
          <p>
            You can export your resumes as PDF files at any time. For structured data export, contact us at{' '}
            <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.
          </p>

          <h3>10.4 Account Closure</h3>
          <ul>
            <li><strong>Delete Account:</strong> You may permanently remove your account and associated personal data by requesting account deletion through the App settings or by contacting us at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.</li>
            <li>Upon deletion, your resume data, personal information, and account details will be permanently removed from our systems within a reasonable period, except where retention is required by law.</li>
          </ul>

          <h3>10.5 For EU/EEA Residents (GDPR)</h3>
          <p>
            If you are located in the European Union or European Economic Area, you have rights under the
            General Data Protection Regulation (GDPR), including:
          </p>
          <ul>
            <li>Right to access your personal data</li>
            <li>Right to rectify inaccurate data</li>
            <li>Right to erasure (&quot;right to be forgotten&quot;)</li>
            <li>Right to restrict processing</li>
            <li>Right to data portability</li>
            <li>Right to object to certain processing</li>
            <li>Right to withdraw consent at any time</li>
            <li>Right to lodge a complaint with a supervisory authority</li>
          </ul>

          <h3>10.6 For California Residents (CCPA/CPRA)</h3>
          <p>
            If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA)
            and California Privacy Rights Act (CPRA), including:
          </p>
          <ul>
            <li>Right to know what personal information is collected</li>
            <li>Right to request deletion of personal information</li>
            <li>Right to opt out of the sale or sharing of personal information (we do not sell personal information)</li>
            <li>Right to non-discrimination for exercising your privacy rights</li>
          </ul>
          <p>
            To exercise your privacy rights, contact us at <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.
            We aim to respond within 30 days.
          </p>

          <h2>11. Data Retention</h2>
          <p>
            We retain your data for as long as necessary to provide the Services, fulfill the purposes described
            in this policy, resolve disputes, enforce our agreements, and comply with legal obligations:
          </p>
          <ul>
            <li><strong>Resume Data:</strong> Retained until you delete a specific resume or your entire account</li>
            <li><strong>Account Information:</strong> Retained until you request account deletion</li>
            <li><strong>Analytics Data:</strong> Retained according to Firebase&apos;s default retention policies (typically 60 days for detailed events, longer for aggregated data)</li>
            <li><strong>Crash Reports:</strong> Retained for 90 days for debugging purposes</li>
            <li><strong>AI Usage Tracking:</strong> Retained for the current billing period and historical subscription records</li>
            <li><strong>Photos:</strong> Retained as part of resume data until deleted</li>
          </ul>
          <p>
            When you delete your account, we will delete or anonymize your personal data within a reasonable
            period, except where retention is required by law.
          </p>

          <h2>12. Children&apos;s Privacy</h2>
          <p>
            Hirex AI is not intended for users under 13 years of age (or 16 in the European Union, or the
            applicable age of consent in your jurisdiction). We do not knowingly collect personal information
            from children.
          </p>
          <p>
            If we discover that we have collected personal information from a child without appropriate consent,
            we will take steps to delete it promptly. If you are a parent or guardian and believe your child has
            provided us with personal information, please contact us at{' '}
            <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.
          </p>

          <h2>13. International Transfers</h2>
          <p>
            Your data may be processed and stored in countries other than your own, including countries that may
            have different data protection laws. Our service providers operate globally:
          </p>
          <ul>
            <li><strong>Supabase:</strong> Data may be stored in their global cloud infrastructure</li>
            <li><strong>OpenAI:</strong> Data is processed on servers located in the United States</li>
            <li><strong>Google/Firebase:</strong> Data may be transferred across Google&apos;s global network</li>
            <li><strong>RevenueCat:</strong> Data may be processed in the United States</li>
          </ul>
          <p>
            By using the App, you consent to such transfers. We ensure appropriate safeguards are in place for
            such transfers in accordance with applicable data protection laws, such as standard contractual
            clauses or equivalent mechanisms.
          </p>

          <h2>14. Legal Basis for Processing (GDPR)</h2>
          <p>Where applicable law requires a legal basis for processing personal data, we rely on one or more of the following:</p>
          <ul>
            <li><strong>Consent:</strong> When you agree to specific processing, such as optional communications, AI feature usage, or integrations</li>
            <li><strong>Contractual necessity:</strong> To provide the Services you request, including account management, resume creation, and cloud synchronization</li>
            <li><strong>Legal obligations:</strong> To comply with applicable laws and regulations</li>
            <li><strong>Legitimate interests:</strong> To improve our Services, ensure security, prevent fraud, display relevant advertisements, and support our business operations, balanced against your rights and interests</li>
          </ul>

          <h2>15. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes take effect upon posting, and we will
            update the &quot;Last updated&quot; date at the top of this page. For material changes that significantly
            affect your rights, we will provide notice through the App, email, or other appropriate means.
          </p>
          <p>We encourage you to review this policy periodically.</p>

          <h2>16. Contact Us</h2>
          <p>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:support@appaxislab.com">support@appaxislab.com</a></li>
            <li><strong>Developer:</strong> App Axis Lab</li>
          </ul>
          <p>
            For data access, correction, or deletion requests, please include your account email address and a
            detailed description of your request. We will respond within 30 days.
          </p>

          <hr className={s.divider} />

          {/* ── TERMS OF SERVICE ── */}
          <h1 id="terms">Terms of Service</h1>

          <h2>1. Acceptance of Terms</h2>
          <p>
            These Terms of Service (&quot;Terms&quot;) constitute a legal agreement between you (&quot;User&quot;, &quot;you&quot;) and
            App Axis Lab (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) regarding your use of the Hirex AI mobile
            application (the &quot;App&quot;) and related services (the &quot;Services&quot;).
          </p>
          <p>
            By downloading, installing, accessing, or using the App, you agree to be bound by these Terms. If you
            do not agree to these Terms, do not use the App.
          </p>

          <h2>2. Description of Service</h2>
          <p>Hirex AI is an AI-powered resume building application that enables users to:</p>
          <ul>
            <li>Create, edit, and manage professional resumes</li>
            <li>Choose from multiple resume templates</li>
            <li>Generate AI-powered professional summaries and skill suggestions</li>
            <li>Add profile photos and personal information</li>
            <li>Export resumes as PDF files</li>
            <li>Utilize PDF manipulation tools (merge, split, image-to-PDF conversion)</li>
            <li>Access premium features through subscription plans</li>
          </ul>

          <h2>3. Eligibility</h2>
          <p>
            You must be at least 13 years of age (or 16 in the EU, or the age of consent in your jurisdiction) to
            use the App. By using the App, you represent and warrant that you meet this age requirement.
          </p>

          <h2>4. Account Registration</h2>
          <p>
            To use certain features of the App, you must create an account by providing accurate and complete
            information, including a valid email address and password. You are responsible for:
          </p>
          <ul>
            <li>Maintaining the confidentiality of your account credentials</li>
            <li>All activities that occur under your account</li>
            <li>Notifying us immediately of any unauthorized use of your account</li>
          </ul>
          <p>We reserve the right to suspend or terminate accounts that provide false information or violate these Terms.</p>

          <h2>5. User Content</h2>

          <h3>5.1 Your Resume Data</h3>
          <p>
            You retain ownership of all resume content, personal information, photos, and files you create or
            upload through the App (&quot;User Content&quot;). By using the App, you grant us a limited license to
            store, process, and display your User Content solely to provide the Services.
          </p>

          <h3>5.2 Responsibility for Content</h3>
          <p>You are solely responsible for:</p>
          <ul>
            <li>The accuracy and completeness of information in your resumes</li>
            <li>Ensuring you have the right to use any content you upload (including photos and text)</li>
            <li>Compliance with applicable laws when creating and sharing your resumes</li>
          </ul>

          <h3>5.3 Prohibited Content</h3>
          <p>You agree not to create, upload, or share content that:</p>
          <ul>
            <li>Is false, misleading, or fraudulent</li>
            <li>Infringes intellectual property rights of others</li>
            <li>Contains malware, viruses, or harmful code</li>
            <li>Violates any applicable law or regulation</li>
            <li>Harasses, defames, or threatens others</li>
          </ul>

          <h2>6. AI-Powered Features</h2>
          <p>
            The App offers AI-powered features that generate professional summaries and skill suggestions based
            on your resume content. By using these features, you acknowledge and agree that:
          </p>
          <ul>
            <li>AI-generated content is provided as suggestions and may require review and editing</li>
            <li>Your resume data (name, location, work experience) is transmitted to OpenAI&apos;s API for processing</li>
            <li>We are not responsible for the accuracy, completeness, or suitability of AI-generated content</li>
            <li>You are responsible for reviewing and verifying all AI-generated content before use</li>
            <li>AI feature usage may be limited based on your subscription plan</li>
          </ul>
          <p>AI-powered features are optional. You can always create and edit resume content manually.</p>

          <h2>7. Subscriptions &amp; Payments</h2>

          <h3>7.1 Premium Features</h3>
          <p>Hirex AI offers premium features through paid subscription plans (weekly, monthly, or yearly). Premium features may include:</p>
          <ul>
            <li>Unlimited AI-powered summary and skill suggestions</li>
            <li>Access to all premium resume templates</li>
            <li>Ad-free experience</li>
            <li>Advanced PDF manipulation tools</li>
            <li>Priority customer support</li>
          </ul>

          <h3>7.2 Payment Processing</h3>
          <p>
            Payments are processed through Apple App Store (iOS) or Google Play Store (Android). By purchasing a
            subscription, you agree to the payment terms and pricing displayed at the time of purchase. All sales
            are final and non-refundable except as required by applicable law or the app store&apos;s refund policy.
          </p>

          <h3>7.3 Subscription Renewal</h3>
          <p>
            Subscriptions automatically renew at the end of each billing period unless you cancel before the
            renewal date. You can manage or cancel subscriptions through your App Store or Google Play account
            settings.
          </p>

          <h3>7.4 Price Changes</h3>
          <p>
            We reserve the right to change subscription prices at any time. Price changes will not affect your
            current subscription period but will apply upon renewal.
          </p>

          <h3>7.5 Free Trials</h3>
          <p>
            If we offer a free trial, you will be charged the subscription fee at the end of the trial period
            unless you cancel before the trial expires. Trial eligibility may be limited to one per user.
          </p>

          <h2>8. Advertising</h2>
          <p>
            The free version of the App displays advertisements through Google AdMob. By using the free version,
            you consent to viewing advertisements. Premium subscribers may have access to an ad-free experience.
          </p>

          <h2>9. Prohibited Uses</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the App for any unlawful purpose or in violation of these Terms</li>
            <li>Attempt to gain unauthorized access to our systems or user accounts</li>
            <li>Reverse engineer, decompile, or disassemble the App</li>
            <li>Use automated systems, bots, or scripts to access the App</li>
            <li>Copy, modify, distribute, or create derivative works of the App</li>
            <li>Remove or alter any proprietary notices or branding</li>
            <li>Interfere with or disrupt the App&apos;s operation or servers</li>
            <li>Use the App to transmit malware or harmful code</li>
            <li>Impersonate others or misrepresent your affiliation</li>
            <li>Collect or harvest user information without consent</li>
            <li>Resell or commercially exploit the Services without authorization</li>
          </ul>

          <h2>10. Intellectual Property</h2>
          <p>
            The App, including its software, design, logos, trademarks, templates, and content (excluding your
            User Content), is owned by App Axis Lab or its licensors and is protected by copyright, trademark,
            patent, and other intellectual property laws.
          </p>
          <p>These Terms do not transfer any ownership rights to you. You are granted only a limited license to use the App as described in the EULA.</p>

          <h2>11. Third-Party Services</h2>
          <p>
            The App integrates with third-party services including Supabase, OpenAI, Firebase, Google AdMob, and
            RevenueCat. Your use of these third-party services is subject to their respective terms and privacy
            policies. We are not responsible for third-party services, content, or practices.
          </p>

          <h2>12. Disclaimers</h2>

          <h3>12.1 No Professional Advice</h3>
          <p>
            Hirex AI is a resume creation tool and does not provide career counseling, legal advice, or
            professional consultation services. The App does not guarantee employment outcomes or interview
            opportunities.
          </p>

          <h3>12.2 Accuracy of Content</h3>
          <p>
            You are responsible for verifying the accuracy of all resume content, including AI-generated
            suggestions. We do not guarantee that AI-generated content will be accurate, complete, or suitable
            for your purposes.
          </p>

          <h3>12.3 Service Availability</h3>
          <p>
            THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS,
            IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
            PURPOSE, TITLE, AND NON-INFRINGEMENT.
          </p>
          <p>
            WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR THAT CONTENT, FEATURES,
            OR AI-GENERATED SUGGESTIONS WILL BE ACCURATE, COMPLETE, OR RELIABLE.
          </p>

          <h2>13. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, APP AXIS LAB AND ITS AFFILIATES, OFFICERS,
            DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, GOODWILL, OR EMPLOYMENT
            OPPORTUNITIES, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP.
          </p>
          <p>
            OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THESE TERMS OR THE APP SHALL NOT
            EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS BEFORE THE CLAIM, OR (B)
            FIFTY U.S. DOLLARS (USD $50), WHERE PERMITTED BY LAW.
          </p>

          <h2>14. Indemnification</h2>
          <p>You agree to indemnify, defend, and hold harmless App Axis Lab from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from:</p>
          <ul>
            <li>Your use of the App</li>
            <li>Your User Content</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any applicable law or third-party rights</li>
            <li>Your use of AI-generated content in employment applications</li>
          </ul>

          <h2>15. Termination</h2>
          <p>We may suspend or terminate your access to the App at any time, with or without notice, if you breach these Terms or for any other reason. Upon termination:</p>
          <ul>
            <li>Your right to use the App immediately ceases</li>
            <li>You must delete all copies of the App from your devices</li>
            <li>We may delete your account and User Content in accordance with our Privacy Policy</li>
            <li>Sections that by their nature should survive termination will survive, including intellectual property rights, disclaimers, and limitations of liability</li>
          </ul>
          <p>
            You may terminate your account at any time through the App settings or by contacting{' '}
            <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.
          </p>

          <h2>16. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of the App after changes become effective
            constitutes acceptance of the revised Terms. The &quot;Last updated&quot; date at the top of this page will
            reflect material revisions. We will provide notice of material changes through the App or via email.
          </p>

          <h2>17. Governing Law &amp; Disputes</h2>
          <p>
            These Terms are governed by the laws of the jurisdiction in which App Axis Lab operates, without
            regard to conflict-of-law principles, except where mandatory consumer protection laws in your country
            provide otherwise.
          </p>
          <p>
            Any dispute arising from these Terms or the App shall be resolved in the courts of that jurisdiction,
            unless applicable law requires a different forum. You agree to submit to the personal jurisdiction of
            such courts.
          </p>

          <h2>18. Severability</h2>
          <p>If any provision of these Terms is held invalid, illegal, or unenforceable, the remaining provisions remain in full force and effect.</p>

          <h2>19. Entire Agreement</h2>
          <p>
            These Terms, together with our Privacy Policy and EULA, constitute the entire agreement between you
            and App Axis Lab regarding the App and supersede all prior agreements and understandings on the same
            subject.
          </p>

          <h2>20. Contact</h2>
          <p>
            For questions about these Terms, contact App Axis Lab at{' '}
            <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.
          </p>

          <hr className={s.divider} />

          {/* ── EULA ── */}
          <h1 id="eula">End User License Agreement (EULA)</h1>

          <div className={s.highlightBox}>
            <p>
              This End User License Agreement (&quot;Agreement&quot; or &quot;EULA&quot;) is a legal agreement between you
              (&quot;User&quot;, &quot;you&quot;) and App Axis Lab (&quot;Licensor&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;) for the Hirex AI mobile
              application (the &quot;App&quot;). By downloading, installing, or using the App, you agree to be bound by
              this Agreement. If you do not agree, do not download, install, or use the App.
            </p>
          </div>

          <h2>1. License Grant</h2>
          <p>
            Subject to your compliance with this Agreement, we grant you a limited, non-exclusive,
            non-transferable, revocable license to install and use the App on devices you own or control, solely
            for personal, non-commercial purposes, in accordance with this Agreement and applicable app store
            terms.
          </p>

          <h2>2. License Restrictions</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Copy, modify, adapt, translate, or create derivative works of the App</li>
            <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the App, except where expressly permitted by law</li>
            <li>Rent, lease, lend, sell, sublicense, distribute, or transfer the App or any part of it</li>
            <li>Remove, alter, or obscure any proprietary notices, labels, or trademarks on the App</li>
            <li>Use the App for any unlawful purpose or in violation of any applicable laws or regulations</li>
            <li>Use the App to create fraudulent, misleading, or false resumes</li>
            <li>Interfere with or disrupt the App, its servers, or connected networks</li>
            <li>Use automated systems or bots to access or use the App without our written consent</li>
            <li>Circumvent any usage limits, restrictions, or security features</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>
            The App, including its design, software, trademarks, logos, resume templates, and content (excluding
            your User Content), is owned by App Axis Lab or its licensors and is protected by copyright,
            trademark, patent, and other intellectual property laws.
          </p>
          <p>
            This Agreement does not transfer any ownership rights to you. You retain ownership of the resume
            data, personal information, photos, and files you submit through the App.
          </p>

          <h2>4. User Content Ownership</h2>
          <p>
            You retain all ownership rights to your resume content, personal information, and uploaded files
            (&quot;User Content&quot;). You grant us a limited, worldwide, non-exclusive license to store, process, and
            display your User Content solely to provide the Services described in our Terms of Service.
          </p>
          <p>You are solely responsible for:</p>
          <ul>
            <li>The accuracy and completeness of your resume content</li>
            <li>Ensuring you have the right to use any content you upload</li>
            <li>Compliance with applicable laws when creating and sharing resumes</li>
          </ul>

          <h2>5. Account Security</h2>
          <p>
            You are responsible for maintaining the confidentiality of your login credentials and for all
            activity under your account. Notify us promptly at{' '}
            <a href="mailto:support@appaxislab.com">support@appaxislab.com</a> if you suspect unauthorized access
            to your account.
          </p>

          <h2>6. Permissions &amp; Device Access</h2>
          <p>
            The App may request access to your camera, photo library, storage, and notifications to support
            features described in our Privacy Policy. You may deny certain permissions, but related features may
            not function properly.
          </p>

          <h2>7. Third-Party Services</h2>
          <p>
            The App integrates third-party services for cloud storage (Supabase), AI processing (OpenAI),
            analytics (Firebase), advertising (Google AdMob), and subscription management (RevenueCat). These
            services are governed by their own terms and privacy policies. We are not responsible for third-party
            services, content, or practices.
          </p>

          <h2>8. Subscriptions &amp; In-App Purchases</h2>
          <p>Hirex AI may offer premium features, subscriptions, or in-app purchases. Payment and billing are processed by Apple App Store, Google Play Store, or other authorized payment providers.</p>
          <ul>
            <li>All sales are final and non-refundable except as required by applicable law</li>
            <li>Refunds and billing disputes are handled according to the applicable app store&apos;s policies</li>
            <li>We do not store your full payment card details</li>
            <li>Subscriptions automatically renew unless cancelled before the renewal date</li>
            <li>Free trials, if offered, convert to paid subscriptions unless cancelled before the trial ends</li>
          </ul>

          <h2>9. Updates &amp; Modifications</h2>
          <p>
            We may release updates, upgrades, or modifications to the App from time to time. You may be required
            to install updates to continue using the App. Updates may modify or remove features without notice.
          </p>

          <h2>10. Disclaimer of Warranties</h2>
          <p>
            THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS,
            IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
            PURPOSE, TITLE, AND NON-INFRINGEMENT.
          </p>
          <p>WE DO NOT WARRANT THAT:</p>
          <ul>
            <li>The App will be uninterrupted, error-free, or secure</li>
            <li>AI-generated content will be accurate, complete, or suitable for your purposes</li>
            <li>Resume content, exports, or templates will be free from errors or defects</li>
            <li>The App will meet your specific requirements or expectations</li>
            <li>Any defects or errors will be corrected</li>
          </ul>
          <p>You use the App at your own risk. Your sole remedy for dissatisfaction with the App is to stop using it.</p>

          <h2>11. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, APP AXIS LAB AND ITS AFFILIATES, OFFICERS,
            DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, GOODWILL, EMPLOYMENT OPPORTUNITIES,
            OR BUSINESS RELATIONSHIPS, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP.
          </p>
          <p>THIS INCLUDES BUT IS NOT LIMITED TO DAMAGES RESULTING FROM:</p>
          <ul>
            <li>Errors or inaccuracies in resume content or AI-generated suggestions</li>
            <li>Loss of resume data or files</li>
            <li>Inability to export or print resumes</li>
            <li>Employment application rejections or failed job opportunities</li>
            <li>Unauthorized access to your account</li>
            <li>Third-party service failures or outages</li>
            <li>Interruption of service or data loss</li>
          </ul>
          <p>
            OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE APP SHALL NOT
            EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US FOR THE APP IN THE TWELVE (12) MONTHS BEFORE THE
            CLAIM, OR (B) FIFTY U.S. DOLLARS (USD $50), WHERE PERMITTED BY LAW.
          </p>
          <p>Some jurisdictions do not allow the exclusion or limitation of certain damages, so the above limitations may not apply to you.</p>

          <h2>12. Indemnification</h2>
          <p>You agree to indemnify and hold harmless App Axis Lab from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from:</p>
          <ul>
            <li>Your use of the App</li>
            <li>Your User Content or resume submissions</li>
            <li>Your violation of this Agreement or applicable law</li>
            <li>Your violation of third-party rights, including intellectual property rights</li>
            <li>Employment disputes or claims arising from your use of AI-generated content</li>
          </ul>

          <h2>13. Termination</h2>
          <p>This license is effective until terminated. We may suspend or terminate your access to the App at any time if you breach this Agreement or for any other reason, with or without notice.</p>
          <p>Upon termination:</p>
          <ul>
            <li>You must cease all use of the App</li>
            <li>Delete all copies of the App from your devices</li>
            <li>Your User Content may be deleted in accordance with our Privacy Policy</li>
          </ul>
          <p>Sections that by their nature should survive termination will survive, including intellectual property rights, disclaimers, limitations of liability, and indemnification.</p>

          <h2>14. Changes to This Agreement</h2>
          <p>
            We may update this EULA from time to time. Continued use of the App after changes become effective
            constitutes acceptance of the revised Agreement. The &quot;Last updated&quot; date at the top of this page
            will reflect material revisions. We will provide notice of material changes through the App or via
            email.
          </p>

          <h2>15. Governing Law &amp; Disputes</h2>
          <p>
            This Agreement is governed by the laws of the jurisdiction in which App Axis Lab operates, without
            regard to conflict-of-law principles, except where mandatory consumer protection laws in your country
            provide otherwise.
          </p>
          <p>
            Any dispute shall be resolved in the courts of that jurisdiction, unless applicable law requires a
            different forum. You agree to submit to the personal jurisdiction of such courts.
          </p>

          <h2>16. Children</h2>
          <p>
            The App is not intended for children under 13 years of age (or 16 in the EU, or the applicable age
            of consent in your jurisdiction). We do not knowingly collect personal information from children as
            described in our Privacy Policy.
          </p>

          <h2>17. Export Compliance</h2>
          <p>
            You agree to comply with all applicable export and import control laws and regulations. You
            represent that you are not located in a country subject to a U.S. Government embargo or designated as
            a &quot;terrorist supporting&quot; country, and that you are not listed on any U.S. Government prohibited or
            restricted party list.
          </p>

          <h2>18. Apple App Store (iOS)</h2>
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

          <h2>19. Google Play (Android)</h2>
          <p>
            If you obtained the App through Google Play, you agree that Google LLC is not a party to this
            Agreement and has no responsibility or liability with respect to the App. Your use of Google Play is
            subject to Google Play&apos;s terms of service.
          </p>

          <h2>20. Severability &amp; Entire Agreement</h2>
          <p>If any provision of this Agreement is held invalid, illegal, or unenforceable, the remaining provisions remain in full force and effect.</p>
          <p>
            This Agreement, together with our Privacy Policy and Terms of Service, constitutes the entire
            agreement between you and App Axis Lab regarding the App and supersedes all prior understandings on
            the same subject.
          </p>

          <h2>21. Contact</h2>
          <p>
            For questions about this EULA, contact App Axis Lab at{' '}
            <a href="mailto:support@appaxislab.com">support@appaxislab.com</a>.
          </p>
        </div>
      </div>
    </PrivacyLayout>
  )
}
