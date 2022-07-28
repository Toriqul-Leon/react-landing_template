import Footer from "../components/Footer";
import DotPattern from "../components/DotPattern";
import Head from "next/head";

const SectionHeading = ({ idx, title }: { idx: number; title: string }) => (
  <div className="pt-4 pb-2">
    {idx}.
    <span className="ml-6">
      <strong>
        <b>{title}</b>
      </strong>
    </span>
  </div>
);

const Terms = () => (
  <>
    <Head>
      <title>Portable | Terms of Service</title>
      <meta
        name="title"
        property="og:title"
        content="Portable Terms of Service"
      />
      <meta
        name="description"
        property="og:description"
        content="Portable Terms of Service"
      />
      <meta
        name="image"
        property="og:image"
        content="https://portable.io/og_logo.png"
      />
      <meta name="type" property="og:type" content="website" />
      <meta name="locale" property="og:locale" content="en_US" />
    </Head>
    <div className="relative py-16 bg-white overflow-hidden">
      <DotPattern />
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-md text-justify text-gray-500 space-y-4 max-w-prose mx-auto">
          <h1>
            <span className="block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Terms of Service
            </span>
            <span className="mt-2 block text-base text-center text-blue-600 font-semibold tracking-wide uppercase">
              Last updated July 8, 2021
            </span>
          </h1>
          <p className="pt-8">
            These terms of use (the “<u>Terms of Use</u>”) are a legal agreement
            between you and Portable, Inc. (“<u>Portable</u>,” “<u>we</u>,” “
            <u>us</u>,” or “<u>our</u>”). These Terms of Use specify the terms
            under which you may access and use the website located at
            https://www.portable.io/ (the “<u>Website</u>”). Please note that we
            offer additional products and services, which are provided pursuant
            to a separate manually or digitally-executed agreement.
          </p>
          <p>
            By accessing or using our Website, or otherwise manifesting your
            assent to these Terms of Use, you acknowledge that you have read,
            understood, and agree to be legally bound by these Terms of Use and
            our Privacy Policy, which is hereby incorporated by reference
            (collectively, this “<u>Agreement</u>“). If you do not agree to any
            of these terms, then please do not use the Website.
          </p>
          <p>
            <strong>
              THE SECTIONS BELOW TITLED “BINDING ARBITRATION” AND “CLASS ACTION
              WAIVER” CONTAIN A BINDING ARBITRATION AGREEMENT AND CLASS ACTION
              WAIVER. THEY AFFECT YOUR LEGAL RIGHTS. PLEASE READ THEM.
            </strong>
          </p>
          <p>
            If you accept or agree to this Agreement on behalf of a company or
            other legal entity, you represent and warrant that you have the
            authority to bind that company or other legal entity to the
            Agreement and, in such event, “<u>you</u>” and “<u>your</u>” will
            refer and apply to that company or other legal entity, and any
            employees, contractors, or agents authorized by you to access and
            use the Products pursuant to the terms of this Agreement (“
            <u>Authorized Users</u>”).
          </p>
          <p>
            Capitalized terms not defined in these Terms of Use shall have the
            meaning set forth in our Privacy Policy.
          </p>
          <SectionHeading idx={1} title="INTELLECTUAL PROPERTY" />
          <p>
            The Website contains material, such as software, text, graphics,
            images, sound recordings, and other material provided by or on
            behalf of Portable or its licensors (collectively referred to as the
            “<u>Content</u>”). The Content may be owned by us or third parties.
            The Content is protected under both United States and foreign laws.
            Unauthorized use of the Content may violate copyright, trademark,
            and other laws.
          </p>
          <p>
            You may view all Content for your own personal, non-commercial use,
            and no other use is permitted without the prior written consent of
            Portable. Portable and its licensors retain all right, title, and
            interest, including all intellectual property rights, in and to the
            Content. You must retain all copyright and other proprietary notices
            contained in the original Content. You may not sell, transfer,
            assign, license, sublicense, or modify the Content or reproduce,
            display, publicly perform, make a derivative version of, distribute,
            or otherwise use the Content in any way for any public or commercial
            purpose. We reserve the right to remove Content from our Website at
            any time for any reason without any notice to you.
          </p>
          <p>
            If you violate any part of this Agreement, your permission to access
            the Content and the Website automatically terminates and you must
            immediately destroy any copies you have made of the Content.
          </p>
          <p>
            The trademarks, service marks, and logos of Portable (the “
            <u>Portable Trademarks</u>”) used and displayed on the Website is
            owned by Portable. Other company, product, and service names located
            on the Website may be trademarks or service marks owned by others
            (the “<u>Third-Party Trademarks</u>,” and, collectively with
            Portable Trademarks, the “<u>Trademarks</u>”). Nothing on the
            Website should be construed as granting, by implication, estoppel,
            or otherwise, any license or right to use the Trademarks, without
            our prior written permission specific for each such use. Use of the
            Trademarks as part of a link to or from any site is prohibited
            unless establishment of such a link is approved in advance by us in
            writing. All goodwill generated from the use of Portable Trademarks
            inures to our benefit.
          </p>
          <p>
            Elements of the Website is protected by trade dress, trademark,
            unfair competition, and other state and federal laws and may not be
            copied or imitated in whole or in part, by any means, including, but
            not limited to, the use of framing or mirrors. None of the Content
            may be retransmitted without our express, written consent for each
            and every instance.
          </p>
          <SectionHeading idx={2} title="COMMUNITY GUIDELINES" />
          <p>
            Portable’s community, like any community, functions best when its
            users follow a few simple rules. By accessing the Website, you agree
            to comply with these community guidelines (the “
            <u>Community Guidelines</u>”) and that:
          </p>
          <ul className="list-disc list-outside pl-4 space-y-4">
            <li>
              You will comply with all applicable laws in your use of the
              Website and will not use the Website for any unlawful purpose;
            </li>
            <li>
              You will not access or use the Website to collect any market
              research for a competing business;
            </li>
            <li>
              You will not impersonate any person or entity or falsely state or
              otherwise misrepresent your affiliation with a person or entity;
            </li>
            <li>
              You will not interfere with or attempt to interrupt the proper
              operation of the Website through the use of any virus, device,
              information collection or transmission mechanism, software or
              routine, or access or attempt to gain access to any Content (as
              defined below), data, files, or passwords related to the Website
              through hacking, password or data mining, or any other means;
            </li>
            <li>
              You will not decompile, reverse engineer, or disassemble any
              software or other products or processes accessible through the
              Website;
            </li>
            <li>
              You will not cover, obscure, block, or in any way interfere with
              any advertisements and/or safety features on the Website;
            </li>
            <li>
              You will not circumvent, remove, alter, deactivate, degrade, or
              thwart any of the Content protections in the Website;
            </li>
            <li>
              You will not use any robot, spider, scraper, or other automated
              means to access the Website for any purpose without our express,
              written permission; <u>provided</u>, <u>however</u>, that we may
              grant the operators of public search engines permission to use
              spiders to copy materials from the public portions of the Website
              for the sole purpose of, and solely to the extent necessary for,
              creating publicly-available searchable indices of the materials,
              but not caches or archives of such materials; and
            </li>
            <li>
              You will not take any action that imposes or may impose (in our
              sole discretion) an unreasonable or disproportionately large load
              on our technical infrastructure.
            </li>
          </ul>
          <p>
            If you find something that violates our Community Guidelines, please
            let us know, and we’ll review it.
          </p>
          <SectionHeading idx={3} title="COMMUNICATIONS WITH US" />
          <p>
            Although we encourage you to e-mail us, we do not want you to, and
            you should not, e-mail us any content that contains confidential
            information. With respect to all e-mails and communications you send
            to us, including, but not limited to, feedback, questions, comments,
            suggestions, and the like, we shall be free to use any ideas,
            concepts, know-how, or techniques contained in your communications
            for any purpose whatsoever, including but not limited to, the
            development, production, and marketing of products and services that
            incorporate such information without compensation or attribution to
            you.
          </p>
          <SectionHeading
            idx={4}
            title="NO WARRANTIES; LIMITATION OF LIABILITY"
          />
          <p>
            THE WEBSITE AND THE CONTENT ARE PROVIDED “AS IS” AND “AS AVAILABLE”
            WITHOUT ANY WARRANTIES OF ANY KIND, INCLUDING THAT THE WEBSITE OR
            CONTENT WILL OPERATE ERROR-FREE OR THAT THE WEBSITE, ITS SERVERS, OR
            THE CONTENT ARE FREE OF COMPUTER VIRUSES OR SIMILAR CONTAMINATION OR
            DESTRUCTIVE FEATURES.
          </p>
          <p>
            WE DISCLAIM ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
            WARRANTIES OF TITLE, MERCHANTABILITY, NON-INFRINGEMENT OF THIRD
            PARTIES’ RIGHTS, AND FITNESS FOR PARTICULAR PURPOSE AND ANY
            WARRANTIES ARISING FROM A COURSE OF DEALING, COURSE OF PERFORMANCE,
            OR USAGE OF TRADE.
          </p>
          <p>
            THE WEBSITE MAY CONTAIN TECHNICAL INACCURACIES OR TYPOGRAPHICAL
            ERRORS OR OMISSIONS. UNLESS REQUIRED BY APPLICABLE LAWS, WE ARE NOT
            RESPONSIBLE FOR ANY SUCH TYPOGRAPHICAL OR TECHNICAL ERRORS LISTED ON
            THE WEBSITE. WE RESERVE THE RIGHT TO MAKE CHANGES, CORRECTIONS,
            AND/OR IMPROVEMENTS TO THE WEBSITE AND/OR ADD OR REMOVE CONTENT AT
            ANY TIME WITHOUT NOTICE.
          </p>
          <p>
            IN CONNECTION WITH ANY WARRANTY, CONTRACT, OR COMMON LAW TORT
            CLAIMS: (I) WE AND OUR LICENSORS SHALL NOT BE LIABLE FOR ANY
            INCIDENTAL OR CONSEQUENTIAL DAMAGES, LOST PROFITS, OR DAMAGES
            RESULTING FROM LOST DATA OR BUSINESS INTERRUPTION RESULTING FROM THE
            USE OR INABILITY TO ACCESS AND USE THE WEBSITE OR THE CONTENT, EVEN
            IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES; AND (II)
            ANY DIRECT DAMAGES THAT YOU MAY SUFFER AS A RESULT OF YOUR USE OF
            THE WEBSITE OR THE CONTENT SHALL BE LIMITED TO FIFTY US DOLLARS
            ($50).
          </p>
          <p>
            SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES.
            THEREFORE, SOME OF THE ABOVE LIMITATIONS ON WARRANTIES IN THIS
            SECTION MAY NOT APPLY TO YOU.
          </p>
          <p>
            NOTHING IN THESE TERMS OF USE SHALL AFFECT ANY NON-WAIVABLE
            STATUTORY RIGHTS THAT APPLY TO YOU.
          </p>
          <SectionHeading idx={5} title="EXTERNAL SITES" />
          <p>
            The Website may contain links to third-party websites (“
            <u>External Sites</u>”). These links are provided solely as a
            convenience to you and not as an endorsement by us of the content on
            such External Sites. The content of such External Sites is developed
            and provided by others. You should contact the site administrator or
            webmaster for those External Sites if you have any concerns
            regarding such links or any content located on such External Sites.
            We are not responsible for the content of any linked External Sites
            and do not make any representations regarding the content or
            accuracy of materials on such External Sites. You should take
            precautions when downloading files from all websites to protect your
            computer from viruses and other destructive programs. If you decide
            to access linked External Sites, you do so at your own risk.
          </p>
          <SectionHeading idx={6} title="INDEMNIFICATION" />
          <p>
            You agree to defend, indemnify, and hold us and our officers,
            directors, employees, agents, successors, licensees, licensors, and
            assigns harmless from and against any damages, liabilities, losses,
            expenses, claims, actions, and/or demands, including, without
            limitation, reasonable legal and accounting fees, arising or
            resulting from: (i) your breach of this Agreement; (ii) your misuse
            of the Content or the Website; and/or (iii) your violation of any
            third-party rights, including without limitation any copyright,
            trademark, property, publicity, or privacy right. We shall provide
            notice to you of any such claim, suit, or proceeding and shall
            assist you, at your expense, in defending any such claim, suit, or
            proceeding. We reserve the right to assume the exclusive defense and
            control (at your expense) of any matter that is subject to
            indemnification under this section. In such case, you agree to
            cooperate with any reasonable requests assisting our defense of such
            matter.
          </p>
          <SectionHeading idx={7} title="COMPLIANCE WITH APPLICABLE LAWS" />
          <p>
            The Website is based in the United States. We make no claims
            concerning whether the Content may be downloaded, viewed, or be
            appropriate for use outside of the United States. If you access the
            Website or the Content from outside of the United States, you do so
            at your own risk. Whether inside or outside of the United States,
            you are solely responsible for ensuring compliance with the laws of
            your specific jurisdiction.
          </p>
          <SectionHeading idx={8} title="CHANGES TO THE AGREEMENT" />
          <p>
            These Terms of Use are effective as of the last updated date stated
            at the top. We may change these Terms of Use from time to time with
            or without notice to you. Any such changes will be posted on the
            Website. By accessing the Website after we make any such changes to
            these Terms of Use, you are deemed to have accepted such changes.
            Please refer back to these Terms of Use on a regular basis.
          </p>
          <SectionHeading idx={9} title="TERMINATION OF THE AGREEMENT" />
          <p>
            We reserve the right, in our sole discretion, to restrict, suspend,
            or terminate this Agreement and the Website, and your access to all
            or any part of the Website, at any time and for any reason without
            prior notice or liability. <u>Sections 3-15</u> shall survive the
            termination of this Agreement.
          </p>
          <SectionHeading idx={10} title="CONTROLLING LAW" />
          <p>
            This Agreement and any action related thereto will be governed by
            the laws of the State of New York without regard to its conflict of
            laws provisions.
          </p>
          <SectionHeading idx={11} title="BINDING ARBITRATION" />
          <p>
            In the event of a dispute arising between you and Portable under or
            relating to these Terms of Use or the Website (each, a “
            <u>Dispute</u>
            ”), such dispute will be finally and exclusively resolved by binding
            arbitration governed by the Federal Arbitration Act (“<u>FAA</u>”).
            Any election to arbitrate, at any time, shall be final and binding
            on the other party. NEITHER PARTY SHALL HAVE THE RIGHT TO LITIGATE
            SUCH CLAIM IN COURT OR TO HAVE A JURY TRIAL, EXCEPT EITHER PARTY MAY
            BRING ITS CLAIM IN ITS LOCAL SMALL CLAIMS COURT, IF PERMITTED BY
            THAT SMALL CLAIMS COURT RULES AND IF WITHIN SUCH COURT’S
            JURISDICTION. ARBITRATION IS DIFFERENT FROM COURT, AND DISCOVERY AND
            APPEAL RIGHTS MAY ALSO BE LIMITED IN ARBITRATION. All disputes will
            be resolved before a neutral arbitrator selected jointly by you and
            Portable, whose decision will be final, except for a limited right
            of appeal under the FAA. The arbitration shall be commenced and
            conducted by JAMS pursuant to its then current Comprehensive
            Arbitration Rules and Procedures and in accordance with the
            Expedited Procedures in those rules, or, where appropriate, pursuant
            to JAMS’ Streamlined Arbitration Rules and Procedures. All
            applicable JAMS’ rules and procedures are available at the JAMS
            website www.jamsadr.com. Each of you and Portable will be
            responsible for paying any JAMS filing, administrative, and
            arbitrator fees in accordance with JAMS rules. Judgment on the
            arbitrator’s award may be entered in any court having jurisdiction.
            This clause shall not preclude parties from seeking provisional
            remedies in aid of arbitration from a court of appropriate
            jurisdiction. The arbitration may be conducted in person, through
            the submission of documents, by phone, or online. If conducted in
            person, the arbitration shall take place in the United States county
            where you reside. The parties may litigate in court to compel
            arbitration, to stay a proceeding pending arbitration, or to
            confirm, modify, vacate, or enter judgment on the award entered by
            the arbitrator. The parties shall cooperate in good faith in the
            voluntary and informal exchange of all non-privileged documents and
            other information (including electronically stored information)
            relevant to the Dispute immediately after commencement of the
            arbitration. As set forth in <u>Section 13</u>
            below, nothing in these Terms of Use will prevent us from seeking
            injunctive relief in any court of competent jurisdiction as
            necessary to protect our proprietary interests.
          </p>
          <SectionHeading idx={12} title="CLASS ACTION WAIVER" />
          <p>
            You agree that any arbitration or proceeding shall be limited to the
            Dispute between us and you individually. To the full extent
            permitted by law, (i) no arbitration or proceeding shall be joined
            with any other; (ii) there is no right or authority for any Dispute
            to be arbitrated or resolved on a class action-basis or to utilize
            class action procedures; and (iii) there is no right or authority
            for any Dispute to be brought in a purported representative capacity
            on behalf of the general public or any other persons. YOU AGREE THAT
            YOU MAY BRING CLAIMS AGAINST US ONLY IN YOUR INDIVIDUAL CAPACITY AND
            NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR
            REPRESENTATIVE PROCEEDING.
          </p>
          <SectionHeading idx={13} title="EQUITABLE RELIEF" />
          <p>
            You acknowledge and agree that in the event of a breach or
            threatened violation of our intellectual property rights and
            confidential and proprietary information by you, we will suffer
            irreparable harm and will therefore be entitled to injunctive relief
            to enforce this Agreement. We may, without waiving any other
            remedies under this Agreement, seek from any court having
            jurisdiction any interim, equitable, provisional, or injunctive
            relief that is necessary to protect our rights and property pending
            the outcome of the arbitration referenced above. All claims or
            disputes arising out of or in connection with this Agreement shall
            be heard exclusively by any of the federal or state courts of
            competent jurisdiction located in the State of New York.
          </p>
          <SectionHeading idx={14} title="RESTRICTIONS" />
          <p>
            The Website is available only to individuals aged 13 years or older.
            If you are 13 or older, but under the age of majority in your
            jurisdiction, you should review the Agreement with your parent or
            guardian to make sure that you and your parent or guardian
            understand it. If you are under the age of 13, you may use the
            Website only with the consent of your parent or guardian. We reserve
            the right, in our sole and absolute discretion, to deny you access
            to the Website, or any portion of the Website, without notice and
            without reason.
          </p>
          <SectionHeading idx={15} title="MISCELLANEOUS" />
          <p>
            Our failure to act on or enforce any provision of the Agreement
            shall not be construed as a waiver of that provision or any other
            provision in this Agreement. No waiver shall be effective against us
            unless made in writing, and no such waiver shall be construed as a
            waiver in any other or subsequent instance. Except as expressly
            agreed by us and you in writing, this Agreement constitutes the
            entire Agreement between you and us with respect to the subject
            matter, and supersedes all previous or contemporaneous agreements,
            whether written or oral, between the parties with respect to the
            subject matter. The section headings are provided merely for
            convenience and shall not be given any legal import. This Agreement
            will inure to the benefit of our successors, assigns, licensees, and
            sublicensees.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </>
);
export default Terms;
