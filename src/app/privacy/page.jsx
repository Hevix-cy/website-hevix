import { PageIntro } from '@/components/PageIntro'

export const metadata = {
  title: 'Privacy Policy',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default function Privacy() {
    // Variables for company details
    const lastUpdate = "September 25th, 2023";
    const companyName = "Hevix Ltd";
    const companyRegistrationNumber = "ΗΕ368824";
    const companyEmail = "support@hevix.cy";
    const companyAddress = "Lapathou, 6, Strovolos 2027, Lefkosia, Cyprus";
    return (
      <>
        <PageIntro eyebrow="Privacy Policy" title="Privacy Policy">
          <p>
          Last updated on {lastUpdate}
          </p>
          <div className="mt-10 max-w-2xl space-y-6 text-base">
            
            <p>
            We update this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, depending on the specific changes, we will provide you with additional notice or require a renewed consent.
  
  All personal data is collected and processed in compliance with the applicable data protection regulations of the General Data Protection Regulation (GDPR).
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Responsible side</h2>
            <p>
            Responsible for the collection, processing and use of your personal data within the meaning of Art. 4 No. 7 GDPR is {companyName}, a company registered and established under the laws of Cyprus with registration number is {companyRegistrationNumber} and its business address: {companyAddress} (hereinafter – {companyName}).
  
  If you wish to object to the collection, processing or use of your data by us in accordance with these data protection regulations as a whole or for individual measures, you can address your objection to our email {companyEmail} or our mailing address below: {companyAddress}.
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">General purposes of processing</h2>
            <p>
            Company uses personal data for the purpose of operating the website, as well as for fulfilling contracts and inquiries.</p>
          
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Which data is used by {companyName}</h2>
            <h3 className="text-1xl font-bold tracking-tight text-gray-900">Hosting</h3>
            <p>
            The hosting services we use serve provide software development services and provision of licenses for the use of the site. {companyName} or our hosting provider process inventory data, contact data, content data, usage data, meta- and communication data of customers, interested parties and visitors to this website on the basis of our legitimate interests in an efficient and secure provision of our website in accordance with GDPR.
           </p>
           <h3 className="text-1xl font-bold tracking-tight text-gray-900">Data of requests</h3>
            <p>
            {companyName} collects information about you when you use this website via registering or sending the requests. We automatically collect information about your usage behavior and interaction with us and record data about your computer or mobile device. {companyName} collects, stores and uses data about every access to our website (so-called server log files). Access data includes:
           </p>
           <ul className="list-disc pl-5 space-y-2">
                <li className="text-sm text-gray-700" >Name</li>
                <li className="text-sm text-gray-700" >Geo-data</li>
                <li className="text-sm text-gray-700" >Date and time of access</li>
                <li className="text-sm text-gray-700" >Browser type and browser version</li>
                <li className="text-sm text-gray-700" >Operating system</li>
                <li className="text-sm text-gray-700" >Referrer URL (i.e. the previously visited page)</li>
                <li className="text-sm text-gray-700" >E-mail or telephone number (what you indicate)</li>
                <li className="text-sm text-gray-700" >IP address and the requesting provider</li>
           </ul>
           <p>
            {companyName} use this log data without allocation to your person or other profiling for statistical evaluations for the purpose of operating, security and optimization of our website, but also for anonymous recording of the number of visitors to our website (traffic) and the extent and type of use of our website and services, as well as for billing purposes in order to measure the number of clicks received from cooperation partners. Based on this information, we can provide personalized and location-based content, analyze traffic, troubleshoot and correct errors, and improve our services.
           </p>
           <p>
           This is our legitimate interest pursuant to Art 6 para. 1 sentence 1 f) GDPR.
           </p>
           <p>
           Company reserves the right to check the log data subsequently if there is a justified suspicion of illegal use based on concrete evidence. We store IP addresses in the log files for a limited period of time if this is necessary for security purposes. Company also stores IP addresses if we have a concrete suspicion of a criminal offense in connection with the use of our website
           </p>
           <h3 className="text-1xl font-bold tracking-tight text-gray-900">Marketing</h3>
           <p>
           {companyName} will send you from time to time marketing materials by email. In this way, {companyName} will provide you with more information about products from our offer that you may be interested in based on previous request that made by you through our website.
           </p>
           <h3 className="text-1xl font-bold tracking-tight text-gray-900">Email Contact</h3>
          
          <p>
          If you contact {companyName} (e.g. via contact form or e-mail), we will process your details to process your inquiry and in case follow-up questions arise.
           </p>
           <p>
           If the data processing takes place for the execution of pre-contractual measures which take place at your request or, if you are already our customer, for the execution of the contract, the legal basis for this data processing is GDPR.
           </p>
           <p>
           {companyName} will only process further personal data if you give your or if we have a legitimate interest in processing your data GDPR. For example, replying to your email.
           </p>
           <h2 className="text-2xl font-bold tracking-tight text-gray-900">Storage time</h2>
           <p>
           {companyName} only stores personal data for as long as is necessary to fulfill the purposes pursued. In some cases, the legislator provides for the storage of personal data, for example in tax or commercial law. In these cases, the data will only be stored by {companyName} for these legal purposes but will not be processed in any other way and deleted after expiry of the legal retention period.
           </p>
           <h2 className="text-2xl font-bold tracking-tight text-gray-900">Your rights as a data subject</h2>
            <p>According to the applicable laws, you have various rights regarding your personal data. If you wish to assert these rights, please send your request by e-mail or by post to the address specified in section 1, clearly identifying yourself.</p>

            <h3 className="text-1xl font-bold tracking-tight text-gray-900">Right of access by the data subject</h3>
            <p>You have the right to receive confirmation from {companyName} at any time as to whether personal data relating to you will be processed. If this is the case, you have the right to request from us free of charge information about the personal data stored about you together with a copy of this data.</p>
            <p>If personal data are transferred to a third country or an international organization, you have the right to be informed of the appropriate guarantees in accordance with GDPR in connection with the transfer.</p>

            <h3 className="text-1xl font-bold tracking-tight text-gray-900">Right to rectification</h3>
            <p>You have the right to request {companyName} to rectification of inaccurate personal data concerning you without delay.</p>

            <h3 className="text-1xl font-bold tracking-tight text-gray-900">Right to erasure (‘right to be forgotten’)</h3>
            <p>As a pursuant under GDPR you have the right to obtain from us the erasure of personal data concerning you without delay, and we have the obligation to erase personal data without undue delay where one of the following grounds applies:</p>
            <ul className="list-disc pl-5 space-y-2">
                <li className="text-sm text-gray-700">The personal data are no longer necessary for the purposes for which they were collected or otherwise processed.</li>
                <li className="text-sm text-gray-700">You file an object to the processing pursuant to Article 21(1) of GDPR and there are no overriding legitimate grounds for the processing, or the data subject objects to the processing pursuant to Article 21(2) of GDPR.</li>
                <li className="text-sm text-gray-700">You withdraw your consent on which the processing is based according to point (a) of Article 6(1) of GDPR, or point (a) of Article 9(2) of GDPR, and where there is no other legal ground for the processing.</li>
                <li className="text-sm text-gray-700">The personal data have to be erased for compliance with a legal obligation in European Union or Member State law to which we are subject.</li>
                <li className="text-sm text-gray-700">The personal data have been unlawfully processed.</li>
            </ul>

            <h3 className="text-1xl font-bold tracking-tight text-gray-900">Right to restriction of processing</h3>
            <p>You have the right to request {companyName} to restrict the processing if one of the following conditions is met:</p>
            <ul className="list-disc pl-5 space-y-2">
                <li className="text-sm text-gray-700">You dispute the accuracy of your personal data for a period of time that enables us to verify the accuracy of your personal data.</li>
                <li className="text-sm text-gray-700">The processing is unlawful, and you have refused the erasure of the personal data and have instead requested the restriction of the use of the personal data.</li>
                <li className="text-sm text-gray-700">{companyName} no longer needs the personal data for the purposes of processing, but they are required by you for the establishment, exercise, or defence of legal claims.</li>
                <li className="text-sm text-gray-700">You have filed an objection against the processing according to Article 21(1) of GDPR, pending the verification whether the legitimate grounds of our company outweigh yours.</li>
            </ul>

            <h3 className="text-1xl font-bold tracking-tight text-gray-900">Right to data portability</h3>
            <p>You have the right to receive the personal data concerning you that you have provided to us in a structured, commonly used, and machine-readable format, and the right to transmit those data to another person without hindrance from us to which the personal data have been provided, where:</p>
            <ul className="list-disc pl-5 space-y-2">
                <li className="text-sm text-gray-700">The processing is based on consent or on a contract pursuant to conditions of GDPR and US data protection laws.</li>
                <li className="text-sm text-gray-700">The processing is carried out by automated means.</li>
            </ul>
            <p>When exercising your right to data portability in accordance with paragraph 1, you have the right to request that the personal data be transmitted directly by us to another person responsible, where technically feasible.</p>

            <h3 className="text-1xl font-bold tracking-tight text-gray-900">Right of objection</h3>
            <p>You have the right to object on grounds relating to your particular situation, at any time to the processing of personal data concerning you that is based on point (e) or (f) of Article 6(1) of GDPR, including profiling based on those provisions. We no longer process the personal data unless we can demonstrate compelling legitimate grounds for the processing which override the interests, rights, and freedoms of the data subject or for the establishment, exercise, or defence of legal claims.</p>
            <p>If {companyName} processes personal data for direct marketing purposes, you have the right to object at any time to the processing of personal data concerning you for the purpose of such advertising.</p>
            <p>You have the right to object to the processing of personal data concerning you, for scientific or historical research purposes or statistical purposes in accordance with Article 89(1) of GDPR for reasons arising from your particular situation, unless the processing is necessary for the performance of a task carried out for reasons of public interest.</p>

            <h3 className="text-1xl font-bold tracking-tight text-gray-900">Automated individual decision-making, including profiling</h3>
            <p>You have the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning you or similarly significantly affects you. An automated decision making based on the collected personal data does not take place.</p>

            <h3 className="text-1xl font-bold tracking-tight text-gray-900">Right to withdraw consent according to data protection law</h3>
            <p>You have the right to revoke your consent to the processing of personal data at any time.</p>

            <h3 className="text-1xl font-bold tracking-tight text-gray-900">Right to lodge a complaint with a supervisory authority</h3>
            <p>You have the right to lodge a complaint with a supervisory authority, in particular in the Member State of your habitual residence, place of work or place of the alleged infringement, if you consider that the processing of personal data relating to you infringes GDPR.</p>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Data security</h2>
            <p>
            {companyName} makes every effort to ensure the security of your data in accordance with the applicable data protection laws and technical possibilities. However, it is important to acknowledge that complete protection of data against access by third parties is not fully guaranteed.
            </p>
            <p>
            To secure your data, {companyName} maintains technical and organizational security measures in line with GDPR.
            </p>
            <h3 className="text-1xl font-bold tracking-tight text-gray-900">Disclosure of data to third parties</h3>
            <p>
            In general, {companyName} only uses your personal data within our company.
            </p>
            <p>
            If {companyName} outsources certain parts of data processing (&quot;order processing&quot;), we contractually oblige our contractors to use personal data in accordance with the requirements of data protection laws and to ensure the protection of the rights of the data subject.
            </p>
            <p>
            A transmission of data to places or persons outside the European Economic Area (EEA) beyond the scope mentioned in this statement in paragraph 4 does not occur and is not planned.
            </p>
            <h3 className="text-1xl font-bold tracking-tight text-gray-900">Data Protection info</h3>
            <p>
            If you have any questions about data protection, please contact {companyName} at our email: <a href="mailto:{companyEmail}" className="text-blue-600 hover:underline">{companyEmail}</a>, or reach out via our mailing address below:
            </p>
            <p>
                <strong>{companyName}</strong>,<br />
                {companyAddress}
            </p>
           </div>
        </PageIntro>
      </>
    );
  }