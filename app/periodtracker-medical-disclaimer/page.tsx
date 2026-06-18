import type { Metadata } from 'next'
import PrivacyLayout from '@/components/PrivacyLayout'
import s from '@/styles/privacy.module.css'

export const metadata: Metadata = {
  title: 'AxisFlow Period Tracker — Medical Disclaimer | App Axis Lab',
}

export default function PeriodTrackerMedicalDisclaimer() {
  return (
    <PrivacyLayout
      appName="AxisFlow Period Tracker"
      subtitle="Medical Disclaimer"
      lastUpdated="Last updated: May 06, 2026 · Version 1.0"
    >
      <div className={s.card}>
        <div className={s.summaryBox}>
          <p className={s.summaryBoxTitle}>In plain language</p>
          <p>AxisFlow is a wellness and logging tool — not a medical device. It helps you track your menstrual cycle, symptoms, and body temperature, and it provides <em>estimates</em> based on the data you enter. These estimates are not medically verified. Do not use this app as a substitute for professional medical advice, diagnosis, or treatment.</p>
        </div>

        <div className={s.privacyContent}>
          <h2>1. Not a Medical Device</h2>
          <p>AxisFlow ("the App") is a <strong>general wellness application</strong> intended for personal informational purposes only. It is <strong>not</strong> a medical device, and it has not been evaluated, cleared, or approved by the U.S. Food and Drug Administration (FDA), the European Medicines Agency (EMA), or any other regulatory body.</p>
          <p>The App does not diagnose, treat, cure, prevent, or mitigate any disease or medical condition. It does not perform any clinical function. It is not intended to replace clinical judgment, laboratory testing, or professional medical evaluation.</p>

          <h2>2. Predictions Are Estimates Only</h2>
          <p>AxisFlow uses statistical algorithms based on the data you enter (period dates, cycle history, basal body temperature readings) to generate <strong>predictions and estimates</strong>, including:</p>
          <ul>
            <li>Predicted period start and end dates</li>
            <li>Estimated ovulation date</li>
            <li>Estimated fertile window</li>
            <li>Cycle phase determination (menstruation, follicular, ovulation, luteal)</li>
            <li>BBT thermal shift analysis</li>
            <li>Symptom pattern insights</li>
          </ul>
          <p>These predictions are based on <strong>mathematical models of average biological patterns</strong>. Individual bodies vary significantly. The App's predictions may be inaccurate for any given individual or cycle. Factors such as stress, illness, medication, travel, sleep disruption, hormonal conditions, and many other variables can cause actual cycle timing to differ substantially from predictions.</p>
          <div className={[s.callout, s.calloutDanger].join(' ')}>
            <p><strong>Do not rely on these predictions for medical decisions.</strong> If you need accurate information about your cycle timing, ovulation, or fertility status, consult a qualified healthcare provider who can perform appropriate clinical assessments.</p>
          </div>

          <h2>3. Not a Contraceptive Method</h2>
          <p>AxisFlow is <strong>not a method of contraception</strong>. The fertile window and ovulation estimates provided by the App are <strong>not reliable enough</strong> to be used for preventing pregnancy.</p>
          <p>Even clinically validated fertility awareness-based methods (FABMs) have typical-use failure rates of 12–24% per year when used as the sole method of contraception. AxisFlow's predictions have not been clinically validated and should be considered <strong>less reliable</strong> than validated FABMs.</p>
          <div className={[s.callout, s.calloutDanger].join(' ')}>
            <p><strong>Do not use AxisFlow as birth control.</strong> If you wish to avoid pregnancy, consult a healthcare provider about proven contraceptive methods.</p>
          </div>

          <h2>4. Not a Fertility Treatment Tool</h2>
          <p>While AxisFlow can help you track and understand your cycle patterns, it is <strong>not a substitute for fertility evaluation or treatment</strong>. If you are trying to conceive and have been unsuccessful, or if you have concerns about your fertility, consult a reproductive endocrinologist or OB-GYN.</p>
          <p>The App's ovulation estimates and fertile window predictions are based on general population averages and your personal history. They do not account for underlying medical conditions (such as polycystic ovary syndrome, endometriosis, thyroid disorders, or premature ovarian insufficiency) that may affect fertility.</p>

          <h2>5. BBT Data Interpretation</h2>
          <p>The App's basal body temperature (BBT) charting feature uses the standard "cover line" method to detect thermal shifts that may indicate ovulation has occurred. This analysis is <strong>retrospective</strong> (it confirms that ovulation likely already happened) and is <strong>not a prospective prediction</strong> of when ovulation will occur.</p>
          <p>BBT readings can be affected by many factors unrelated to ovulation, including:</p>
          <ul>
            <li>Illness or fever</li>
            <li>Alcohol consumption the previous evening</li>
            <li>Disrupted or insufficient sleep</li>
            <li>Measurement at an inconsistent time</li>
            <li>Room temperature changes</li>
            <li>Certain medications</li>
          </ul>
          <p>A thermal shift detected by the App does not constitute a medical confirmation of ovulation. Clinical confirmation of ovulation requires blood tests (progesterone levels) or ultrasound monitoring performed by a healthcare provider.</p>

          <h2>6. Symptom Tracking Is Not Diagnosis</h2>
          <p>AxisFlow allows you to log symptoms such as cramps, headaches, mood changes, bloating, and other physical or emotional experiences. The App may identify patterns in these symptoms relative to your cycle phases.</p>
          <p>These pattern observations are <strong>informational only</strong>. They do not constitute a diagnosis of any medical condition, including but not limited to:</p>
          <ul>
            <li>Premenstrual syndrome (PMS)</li>
            <li>Premenstrual dysphoric disorder (PMDD)</li>
            <li>Endometriosis</li>
            <li>Polycystic ovary syndrome (PCOS)</li>
            <li>Thyroid disorders</li>
            <li>Anemia</li>
            <li>Pregnancy</li>
          </ul>
          <p>If you experience severe, worsening, or unusual symptoms, seek medical attention. Do not delay seeking professional advice because of information provided by the App.</p>

          <h2>7. Late Period Notifications</h2>
          <p>If the App detects that your period has not started by the predicted date, it may display a notification such as "Your period is X days later than expected." This notification is <strong>not a pregnancy test and does not indicate pregnancy</strong>. Periods can be late for many reasons, including stress, illness, weight changes, exercise, travel, and natural variation.</p>
          <div className={[s.callout, s.calloutWarning].join(' ')}>
            <p>If you believe you may be pregnant, take a home pregnancy test or consult a healthcare provider. Do not rely on AxisFlow's predictions to determine pregnancy status.</p>
          </div>

          <h2>8. Pill Reminder Is Not Medical Advice</h2>
          <p>The App's pill reminder feature is a <strong>general-purpose daily alarm</strong> to help you remember to take medication. It does not:</p>
          <ul>
            <li>Prescribe any medication</li>
            <li>Recommend dosages or timing</li>
            <li>Evaluate drug interactions</li>
            <li>Monitor medication effectiveness</li>
            <li>Provide medical guidance about missed doses</li>
          </ul>
          <p>Follow the instructions provided by your prescribing healthcare provider or pharmacist regarding your medication. If you miss a dose, refer to the medication's official guidance or contact your healthcare provider — not this App.</p>

          <h2>9. When to Seek Medical Attention</h2>
          <p>The App is not a substitute for professional medical care. You should consult a healthcare provider if you experience any of the following:</p>
          <ul>
            <li>Absence of menstruation for 3 or more consecutive months (amenorrhea) without known cause</li>
            <li>Menstrual cycles consistently shorter than 21 days or longer than 35 days</li>
            <li>Extremely heavy bleeding (soaking through a pad or tampon every hour for several hours)</li>
            <li>Severe pelvic pain that interferes with daily activities</li>
            <li>Bleeding between periods or after intercourse</li>
            <li>Sudden changes in your cycle pattern</li>
            <li>Symptoms that significantly impact your quality of life</li>
            <li>Difficulty conceiving after 12 months of trying (or 6 months if over 35)</li>
            <li>Any health concern that worries you</li>
          </ul>
          <p><strong>In an emergency, call your local emergency number immediately.</strong> Do not use this App to assess emergencies.</p>

          <h2>10. No Professional Relationship</h2>
          <p>Use of AxisFlow does not create a physician-patient relationship, a healthcare provider-patient relationship, or any professional medical relationship between you and App Axis Lab.</p>
          <p>App Axis Lab does not employ or contract with medical professionals to provide health advice through the App. No content within the App should be interpreted as medical advice from a licensed healthcare provider.</p>

          <h2>11. Data for Your Doctor</h2>
          <p>AxisFlow offers a PDF report export feature (available to Premium subscribers) that summarizes your cycle history, symptom patterns, and BBT data. This report is designed to be <strong>shared with your healthcare provider</strong> as a supplementary record to support clinical conversations.</p>
          <p>The report does not replace a medical history taken by a clinician. Your healthcare provider may require additional information, examinations, or tests beyond what the report contains. The report's contents are based on data you entered and predictions generated by the App's algorithms — both of which may contain errors.</p>

          <h2>12. Limitation of Liability</h2>
          <p>To the maximum extent permitted by applicable law, App Axis Lab, its officers, employees, affiliates, and agents shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from:</p>
          <ul>
            <li>Reliance on predictions, estimates, or information provided by the App</li>
            <li>Decisions made based on the App's data, including decisions related to contraception, conception, or health</li>
            <li>Inaccurate, incomplete, or delayed predictions</li>
            <li>Failure to seek timely medical care due to information in the App</li>
            <li>Any health outcome related to use or misuse of the App</li>
          </ul>
          <p>You assume full responsibility for how you use the information provided by AxisFlow.</p>

          <h2>13. Acknowledgment</h2>
          <p>By using AxisFlow, you acknowledge that you have read and understood this Medical Disclaimer and agree that:</p>
          <ul>
            <li>The App is a wellness tool, not a medical device</li>
            <li>Predictions and estimates are not medically verified</li>
            <li>The App is not a method of contraception</li>
            <li>The App does not diagnose any medical condition</li>
            <li>You will consult qualified healthcare providers for medical advice</li>
            <li>App Axis Lab is not liable for health outcomes related to your use of the App</li>
          </ul>
          <p>If you do not agree with these terms, please discontinue use of the App.</p>

          <h2>14. Contact</h2>
          <p>If you have questions about this Medical Disclaimer, contact us at:</p>
          <ul>
            <li><strong>Email:</strong> support@appaxislab.com</li>
            <li><strong>Company:</strong> App Axis Lab</li>
          </ul>
        </div>
      </div>
    </PrivacyLayout>
  )
}
