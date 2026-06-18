import type { Metadata } from 'next'
import PrivacyLayout from '@/components/PrivacyLayout'
import s from '@/styles/privacy.module.css'

export const metadata: Metadata = {
  title: 'PDF Reader — Privacy Policy & EULA | App Axis Lab',
}

export default function PDFReaderPrivacy() {
  return (
    <PrivacyLayout
      appName="PDF Reader"
      subtitle="Privacy Policy & End User License Agreement"
      lastUpdated="Privacy Policy last updated: April 15, 2026 · EULA last updated: June 4, 2026"
    >
      <div className={s.card}>
        <div className={s.privacyContent}>
          <div className={s.toc}>
            <p className={s.tocTitle}>Table of Contents</p>
            <ol className={s.tocList}>
              <li><a href="#introduction">Introduction</a></li>
              <li><a href="#information-we-collect">Information We Collect</a></li>
              <li><a href="#how-we-use">How We Use Your Information</a></li>
              <li><a href="#data-storage">Data Storage &amp; Security</a></li>
              <li><a href="#third-party">Third-Party Services</a></li>
              <li><a href="#ai-summarization">AI Document Summarization</a></li>
              <li><a href="#subscriptions">Subscriptions &amp; Payments</a></li>
              <li><a href="#advertising">Advertising</a></li>
              <li><a href="#children">Children's Privacy</a></li>
              <li><a href="#your-rights">Your Rights</a></li>
              <li><a href="#changes">Changes to This Policy</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#eula">End User License Agreement (EULA)</a></li>
            </ol>
          </div>

          <p>This page contains the <a href="#introduction">Privacy Policy</a> and <a href="#eula">End User License Agreement (EULA)</a> for PDF Reader. By downloading, installing, or using the App, you agree to both documents.</p>

          <h1>Privacy Policy</h1>

          <h2 id="introduction">1. Introduction</h2>
          <p>Welcome to PDF Reader ("we," "our," or "us"). PDF Reader is a mobile application that allows users to view, manage, and interact with documents of various formats including PDF, Microsoft Word, Excel, PowerPoint, and plain text files.</p>
          <p>This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the "App") available on the Apple App Store and Google Play Store. Please read this policy carefully together with our End User License Agreement (EULA). By using PDF Reader, you agree to the collection and use of information in accordance with this policy and to the terms of the EULA.</p>

          <h2 id="information-we-collect">2. Information We Collect</h2>
          <h3>2.1 Information You Provide</h3>
          <ul>
            <li><strong>Documents &amp; Files:</strong> When you import documents into PDF Reader, the files are stored locally on your device. We do not upload, copy, or transfer your documents to any external server except when you explicitly use the AI Summarization feature (see Section 6).</li>
            <li><strong>Signatures:</strong> If you use the PDF signature feature, your drawn or uploaded signatures are stored locally on your device and are never transmitted to our servers.</li>
            <li><strong>File Metadata:</strong> File names, sizes, types, and modification dates are stored locally in an on-device database to enable features such as recent files, favourites, and search.</li>
          </ul>
          <h3>2.2 Information Collected Automatically</h3>
          <ul>
            <li><strong>Device Information:</strong> We may collect device type, operating system version, and unique device identifiers for analytics and crash reporting purposes.</li>
            <li><strong>Usage Data:</strong> We may collect anonymized usage statistics such as feature usage frequency, session duration, and screen views to improve the App.</li>
            <li><strong>Crash Reports:</strong> In the event of an app crash, diagnostic data may be collected to help us identify and fix issues.</li>
          </ul>
          <h3>2.3 Information We Do NOT Collect</h3>
          <div className={s.highlightBox}>
            <p>We do <strong>not</strong> collect your name, email address, phone number, location data, contacts, photos (except when you explicitly upload a signature image), or any personally identifiable information unless you contact us directly for support.</p>
          </div>

          <h2 id="how-we-use">3. How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul>
            <li><strong>App Functionality:</strong> To provide core features including document viewing, file management, search, favourites, and recents.</li>
            <li><strong>AI Summarization:</strong> When you use the AI Summarization feature, the text content of your document is sent to a third-party AI service for processing. See Section 6 for details.</li>
            <li><strong>Subscription Management:</strong> To manage your premium subscription status via RevenueCat. See Section 7 for details.</li>
            <li><strong>Advertising:</strong> To display relevant advertisements to free-tier users. See Section 8 for details.</li>
            <li><strong>Improvement:</strong> To analyze anonymized usage patterns and improve the App's performance, features, and user experience.</li>
            <li><strong>Support:</strong> To respond to your inquiries and provide customer support.</li>
          </ul>

          <h2 id="data-storage">4. Data Storage &amp; Security</h2>
          <p>PDF Reader is designed with a <strong>local-first architecture</strong>. The vast majority of your data — including your documents, signatures, file metadata, and cached summaries — is stored exclusively on your device using an encrypted local database (SQLite).</p>
          <p>We implement appropriate technical and organizational measures to protect the data processed through our services. However, no method of electronic storage or transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
          <h3>Data Retention</h3>
          <ul>
            <li><strong>Local Data:</strong> All locally stored data (files, signatures, metadata) persists on your device until you delete the files within the App or uninstall the App.</li>
            <li><strong>AI Summaries:</strong> Document text sent for AI summarization is processed in real-time and is not stored by us. The resulting summary is cached locally on your device.</li>
            <li><strong>Subscription Data:</strong> Subscription status is managed by RevenueCat and Apple/Google. We do not store payment information.</li>
          </ul>

          <h2 id="third-party">5. Third-Party Services</h2>
          <p>PDF Reader integrates with the following third-party services:</p>
          <h3>RevenueCat</h3>
          <p>We use RevenueCat to manage in-app subscriptions. RevenueCat processes your purchase data through Apple App Store and Google Play Store. RevenueCat may collect anonymized subscriber data. Please refer to <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">RevenueCat's Privacy Policy</a> for details.</p>
          <h3>AI Service Provider</h3>
          <p>When you use the AI Summarization feature, the text content of your document is sent to a third-party AI provider (such as Anthropic or OpenAI) for processing. Only the text content is sent — no file metadata, personal information, or signature data is transmitted. Please refer to the respective provider's privacy policy for their data handling practices.</p>
          <h3>Advertising Partners</h3>
          <p>For free-tier users, we display advertisements through Google AdMob and other third-party advertising networks. These networks may collect device information and usage data to serve relevant ads. Premium subscribers do not see advertisements.</p>
          <h3>Analytics</h3>
          <p>We use analytics and crash reporting services such as Firebase Analytics and Firebase Crashlytics to collect anonymized usage and diagnostic information. This data does not contain the contents of your documents and is used solely to improve the App's performance, reliability, and user experience.</p>

          <h2 id="ai-summarization">6. AI Document Summarization</h2>
          <div className={s.highlightBox}>
            <p>This section is particularly important as it describes how your document content is processed externally.</p>
          </div>
          <p>PDF Reader's AI Summarization is a premium feature that generates concise summaries of your documents. When you use this feature:</p>
          <ul>
            <li>The <strong>text content</strong> of your document is extracted on your device.</li>
            <li>This text is sent via an encrypted (HTTPS) connection to a third-party AI service for summarization.</li>
            <li>The AI service processes the text and returns a summary.</li>
            <li>The summary is cached locally on your device for future access.</li>
            <li>The transmitted text is processed by a third-party AI provider in accordance with its own privacy practices. We do not permanently store the transmitted document text on our servers.</li>
          </ul>
          <p><strong>Important:</strong> We recommend that you do not use AI Summarization on documents containing highly sensitive personal information (e.g., medical records, financial statements with account numbers, legal documents with confidential information) unless you are comfortable with the text being processed by a third-party service.</p>

          <h2 id="subscriptions">7. Subscriptions &amp; Payments</h2>
          <p>PDF Reader offers a premium subscription ("PDF Reader Pro") that unlocks additional features including AI Summarization, PDF Signatures, and ad removal.</p>
          <ul>
            <li><strong>Payment Processing:</strong> All payments are processed through Apple App Store (iOS) or Google Play Store (Android). We do not directly collect, store, or process any payment information such as credit card numbers or billing addresses.</li>
            <li><strong>Subscription Management:</strong> Subscriptions are managed through RevenueCat, which communicates with Apple/Google to verify purchase status. We receive only subscription status information (active/expired) and anonymous purchase identifiers.</li>
            <li><strong>Free Trial:</strong> Some subscription plans include a free trial period. You will not be charged during the trial. If you do not cancel before the trial ends, your subscription will automatically begin, and you will be charged.</li>
            <li><strong>Cancellation:</strong> You can cancel your subscription at any time through the App Store (iOS) or Google Play Store (Android) settings. Cancellation takes effect at the end of the current billing period.</li>
          </ul>

          <h2 id="advertising">8. Advertising</h2>
          <p>PDF Reader displays advertisements to users on the free tier. Our advertising partners may use technologies such as cookies, device identifiers, and similar tracking technologies to collect information for the purpose of serving relevant advertisements.</p>
          <p>The information collected by ad networks may include:</p>
          <ul>
            <li>Device type and operating system</li>
            <li>Advertising identifiers (IDFA on iOS, GAID on Android)</li>
            <li>General usage patterns (not document content)</li>
          </ul>
          <p>Premium subscribers are not shown any advertisements, and their data is not shared with advertising partners.</p>
          <p>You can opt out of personalized advertising by adjusting your device settings:</p>
          <ul>
            <li><strong>iOS:</strong> Settings → Privacy &amp; Security → Tracking</li>
            <li><strong>Android:</strong> Settings → Google → Ads → Opt out of Ads Personalization</li>
          </ul>

          <h2 id="children">9. Children's Privacy</h2>
          <p>PDF Reader is not directed at children under the age of 13 (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected personal information from a child, we will take steps to delete such information promptly.</p>
          <p>If you are a parent or guardian and believe that your child has provided us with personal information, please contact us so that we can take appropriate action.</p>

          <h2 id="your-rights">10. Your Rights</h2>
          <p>Depending on your jurisdiction, you may have the following rights regarding your data:</p>
          <ul>
            <li><strong>Access:</strong> Request information about what data we process about you.</li>
            <li><strong>Deletion:</strong> Since the majority of data is stored locally on your device, you can delete it at any time by removing files within the App or uninstalling the App.</li>
            <li><strong>Opt-Out of Ads:</strong> Disable personalized advertising through your device settings.</li>
            <li><strong>Data Portability:</strong> Your documents remain on your device and can be shared or exported at any time using the App's share functionality.</li>
            <li><strong>Withdraw Consent:</strong> You can stop using any feature that involves data processing (e.g., AI Summarization) at any time.</li>
          </ul>
          <h3>For EU/EEA Residents (GDPR)</h3>
          <p>If you are located in the European Union or European Economic Area, you have additional rights under the General Data Protection Regulation (GDPR), including the right to lodge a complaint with a supervisory authority.</p>
          <h3>For California Residents (CCPA)</h3>
          <p>If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected and the right to request deletion of your personal information.</p>

          <h2 id="changes">11. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. When we make changes, we will update the "Last updated" date at the top of this policy. We encourage you to review this policy periodically.</p>
          <p>For significant changes that materially affect your rights, we will provide notice through the App or other appropriate means.</p>

          <h2 id="contact">12. Contact Us</h2>
          <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:support@appaxislab.com">support@appaxislab.com</a></li>
            <li><strong>Developer:</strong> App Axis Lab</li>
          </ul>
          <p>We aim to respond to all privacy-related inquiries within 30 days.</p>

          <hr className={s.divider} />

          <h1 id="eula">End User License Agreement (EULA)</h1>
          <p>This End User License Agreement ("Agreement") is a legal agreement between you ("User" or "you") and App Axis Lab ("Licensor", "we", "our", or "us") for the PDF Reader mobile application (the "App"). By downloading, installing, or using the App, you agree to be bound by this Agreement. If you do not agree, do not download, install, or use the App.</p>

          <h2>1. License Grant</h2>
          <p>Subject to your compliance with this Agreement, we grant you a limited, non-exclusive, non-transferable, revocable license to install and use the App on devices you own or control, solely for personal, non-commercial purposes, in accordance with this Agreement and applicable app store terms.</p>

          <h2>2. Restrictions</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Copy, modify, adapt, translate, or create derivative works of the App</li>
            <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the App, except where expressly permitted by law</li>
            <li>Rent, lease, lend, sell, sublicense, or distribute the App or any part of it</li>
            <li>Remove, alter, or obscure any proprietary notices or labels on the App</li>
            <li>Use the App for any unlawful purpose or in violation of any applicable laws or regulations</li>
            <li>Use the App to view, store, or distribute content that is illegal, harmful, abusive, defamatory, or infringing</li>
            <li>Interfere with or disrupt the App, its servers, or connected networks</li>
            <li>Use automated systems or bots to access or use the App without our written consent</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>The App, including all content, features, design, trademarks, and software, is owned by App Axis Lab or its licensors and is protected by copyright, trademark, and other intellectual property laws. This Agreement does not transfer any ownership rights to you. Your documents, files, and signatures remain your property.</p>

          <h2>4. User Content &amp; Conduct</h2>
          <p>You may import, view, manage, sign, and share documents and other files through the App ("User Content"). You retain ownership of your User Content. You are solely responsible for User Content you use with the App and for ensuring you have the right to access, use, and process it. You agree not to use the App with content that is illegal, harmful, infringing, or violates third-party rights.</p>
          <p>The App is a document viewer and utility tool. We do not review, endorse, or guarantee the accuracy, legality, or suitability of your User Content or any third-party documents you open with the App.</p>

          <h2>5. AI Document Summarization Disclaimer</h2>
          <p>If you use the AI Summarization feature, document text may be sent to a third-party AI service for processing as described in our Privacy Policy. Summaries are generated automatically and may be incomplete or inaccurate. You should independently verify important information and avoid using AI Summarization on highly sensitive documents unless you accept the associated processing risks.</p>

          <h2>6. Permissions &amp; Device Access</h2>
          <p>The App may request access to files and storage on your device so you can import, view, and manage documents. You may deny permissions, but certain features may not function. Use of permissions and local data handling is described in our Privacy Policy.</p>

          <h2>7. Third-Party Services &amp; Advertising</h2>
          <p>The App may integrate third-party services, including subscription management (RevenueCat), AI providers, analytics, and advertising networks. These services are governed by their own terms and privacy policies. We are not responsible for third-party services, content, or practices.</p>
          <p>Free-tier users may see advertisements. Ad partners may collect device and usage data as described in our Privacy Policy. Premium subscribers generally do not see ads. Your interactions with ads are subject to applicable third-party terms.</p>

          <h2>8. Subscriptions &amp; In-App Purchases</h2>
          <p>PDF Reader may offer paid features, subscriptions (including "PDF Reader Pro"), or in-app purchases. Payment and billing are processed by Apple App Store, Google Play Store, or other authorized payment providers, often via RevenueCat. Refunds and billing disputes are handled according to the applicable store's policies. We do not store your full payment card details.</p>
          <p>Free trials, if offered, convert to paid subscriptions unless cancelled before the trial ends, in accordance with the applicable store's rules.</p>

          <h2>9. Disclaimer of Warranties</h2>
          <p>THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF HARMFUL COMPONENTS, OR THAT DOCUMENT RENDERING, CONVERSION, OR AI SUMMARIES WILL BE ACCURATE OR COMPLETE.</p>

          <h2>10. Limitation of Liability</h2>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, APP AXIS LAB AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, DOCUMENTS, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
          <p>OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE APP SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US FOR THE APP IN THE TWELVE (12) MONTHS BEFORE THE CLAIM, OR (B) FIFTY U.S. DOLLARS (USD $50), WHERE PERMITTED BY LAW.</p>

          <h2>11. Indemnification</h2>
          <p>You agree to indemnify and hold harmless App Axis Lab from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from your use of the App, your User Content, or your violation of this Agreement or applicable law.</p>

          <h2>12. Termination</h2>
          <p>This license is effective until terminated. We may suspend or terminate your access to the App at any time if you breach this Agreement. Upon termination, you must cease all use of the App and delete all copies from your devices. Sections that by their nature should survive termination will survive.</p>

          <h2>13. Changes to This Agreement</h2>
          <p>We may update this EULA from time to time. Continued use of the App after changes become effective constitutes acceptance of the revised Agreement. The "EULA last updated" date at the top of this page will reflect material revisions.</p>

          <h2>14. Governing Law &amp; Disputes</h2>
          <p>This Agreement is governed by the laws of the jurisdiction in which App Axis Lab operates, without regard to conflict-of-law principles, except where mandatory consumer protection laws in your country provide otherwise. Any dispute shall be resolved in the courts of that jurisdiction, unless applicable law requires a different forum.</p>

          <h2>15. Children</h2>
          <p>The App is not directed at children under 13 years of age (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children as described in our Privacy Policy.</p>

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
