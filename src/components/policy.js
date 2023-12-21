import React from 'react'


const HTMLContent = ({ html }) => {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

const htmlfile = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title></title>
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="assets/css/style.css" />

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />

    <!-- fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700;800&family=Red+Hat+Display:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet" />
    <link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,300&display=swap"
        rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet" />

    <!-- slider css -->
    <link rel="stylesheet" href="assets/css/slick.css" />
    <link rel="stylesheet" href="assets/css/slick-theme.css" />
    <!-- facebook app id -->
    <!-- <meta property="fb:app_id" content="299991575679857" /> -->
    <!-- Sharechat Pixel Code -->
    <script>
        (function (w, d, s, l, i) {
            w['scSdkId'] = i;
            w[l] = w[l] || []
            w.scq = function (eventName, eventType, p) {
                var props = p || {}
                w[l].push({ eventName: eventName, eventType: eventType, meta: props, eventFireTs: Date.now() })
            };
            w.scq("PAGE_VIEW", "AUTO", {
                pageUrl: w.location.href
            });
            var scr = d.createElement(s);
            scr.type = 'text/javascript';
            scr.async = true;
            scr.src = 'https://sc-events-sdk.sharechat.com/web-sdk.js';
            var x = d.getElementsByTagName(s)[0];
            x.parentNode.insertBefore(scr, x);
        })(window, document, "script", "scLayer", "shqbxLxD43");
    </script>
</head>

<body>
  

    <section class="panel banner privacypolicy" data-section-name="AboutUs">
        <div class="inner">
            <div class="">
                <div class="container_pol">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <h2>Privacy Policy</h2>
                            <p>This Privacy Policy is published pursuant to, and in compliance with the Information
                                Technology Act, 2000, and the rules and regulations thereunder, more specifically the
                                Information Technology (Reasonable Security Practices and Procedures and Sensitive
                                Personal Data or Information) Rules, 2011, and the Information Technology Intermediaries
                                Guidelines Rules 2011.</p>

                            <p>This Privacy Policy explains how Stockation Private Limited (“Company”, “we’, “us”,
                                “our”) collects and uses your information in relation to the user’s (“User”, “you”,
                                “your”) access and usage of the mobile application 'StockPe' including and referring to
                                Android package com.stockpemarket and iOS bundle id in.stockpe (“App”), and other
                                Company’s products and services, unless a separate privacy policy is provided for the
                                specific product or service.</p>

                            <p>Please take a moment to familiarize yourself with our privacy practices and let us know
                                if you have any questions. IF YOU DO NOT AGREE WITH THE FOLLOWING PRIVACY POLICY, PLEASE
                                DO NOT DOWNLOAD OR INSTALL THE APP, OR ACCESS OR USE ANY PRODUCT OF SERVICE, OR PROCEED
                                BEYOND THE PRIVACY POLICY SCREEN AFTER LAUNCHING IT ON YOUR DEVICE OR APP FOR THE FIRST
                                TIME. IF YOU CONTINUE TO USE THE APP, OR ANY PRODUCT OR SERVICE, WE UNDERSTAND THAT YOU
                                ARE AWARE OF THIS PRIVACY POLICY AND ITS CONTENTS, AND HAVE PROVIDED YOUR “OPT-IN”
                                CONSENT ON SUCH BASIS.</p>

                            <p>Users may be subject to different protection standards and broader standards may
                                therefore apply to some as per the compliance statement under this Privacy Policy.
                                Company is committed to ensuring your privacy and the integrity of the data, and
                                accordingly supplements the data protection requirements under law with additional
                                good-practice modalities.</p>

                            <p>Company takes your privacy concerns very seriously, which is why it urges you to be
                                careful with the information you share with others. This Privacy Policy does not apply
                                to information we collect by other means (including offline) or from other sources. The
                                use of information collected through our App shall be limited to the purposes under this
                                Privacy Policy.</p>

                            <p>This Privacy Policy is designed with you in mind, and it is important that you have a
                                comprehensive understanding of our personal information collection and usage practices,
                                as well as full confidence that ultimately, you have control of any personal information
                                you provide to the Company. We consider your express and free consent for the
                                aforementioned and below mentioned collection, storage and use of information and data
                                by us, by virtue of your ‘opt-in’ consent provided for usage of the App.</p>

                            <p>We collect information for a lawful purpose connected with our App or other products and
                                services. Collection of such data and information is essential for the purpose of
                                serving Users with the best version of our technologies and App.</p>

                            <p class="subheading">CONSENT AND BASIS FOR COLLECTION OF INFORMATION</p>

                            <p>By consenting to this Privacy Policy you are giving us permission to process your
                                personal data specifically for the purposes identified. Acceptance of our services by
                                clicking on “I Accept” upon downloading the App is an acceptance of the Privacy Policy.
                            </p>

                            <p>For the collected information as further detailed later in this Privacy Policy, consent
                                is collected at multiple stages, being -</p>

                            <p>- Consent for information is collected from the Android User on the registration screen
                                or through phone contacts, identifiable information, SMS, Product metrics, location.</p>
                            <p>- Consent for Images is collected from the Android User via an Android permission popup
                                to access camera, images from gallery.</p>
                            <p>- Consent for information is collected from the iOS User through App launch pop-up and
                                login;</p>
                            <p>- Consent for information is collected from a website User through the pop-up at the
                                bottom of the website.</p>
                            <p>- Consent for information is collected from a website User through the pop-up at the
                                bottom of the website.</p>
                            <p>The Company has a legal/lawful basis of collecting, processing and storage of personal
                                data due to the following</p>
                            <p>Upon your Consent – We collect your data, personal information, and any other personally
                                identifiable data after and only upon receiving your ‘opt-in’ consent on our App/website
                                at various stages. </p>
                            <p>We collect information for the purpose of providing you services and improved deliverance
                                through our App/website.</p>
                            <p>We will collect all requisite information for compliance with legal obligations; and</p>
                            <p>We share information with third- parties with whom we conduct business such as merchants,
                                co-marketers, distributors, resellers, and other companies or organizations with whom
                                the Company enters into agreements to support its business and operations, for the
                                purpose of analytics, feature based services and better deliverance of services.</p>
                            <p>We share information with third- parties with whom we conduct business such as merchants,
                                co-marketers, distributors, resellers, and other companies or organizations with whom
                                the Company enters into agreements to support its business and operations, for the
                                purpose of analytics, feature based services and better deliverance of services.</p>
                            <p>WHAT INFORMATION DO WE COLLECT ABOUT YOU?</p>

                            <p class="subheading">I. Personally Identifiable Information</p>

                            <p>We might ask for your personal information like your name, phone number, address, email
                                accounts, photos etc. at different screens in the app, and collect this information
                                automatically through the App.</p>
                            <p>Our source for collecting information which is used, stored and processed by us are
                                varied and dynamic. We use the App, background cookies and other tracking technologies,
                                to collect your information for processing, usage, storage and servicing.</p>
                            <p>Such personal information may include but not be limited to the information you provide
                                to us or upload, the information specific to you that may be assigned by us, your
                                financial information, social information, device or sim-related information, location
                                information, log information. </p>
                            <p>We also collect information regarding location data, user action logs, application API
                                logs, user browsing history, installed apps, etc. The information collection differs as
                                per the operating system of the User and is in consonance with the App Store (iOS) and
                                Play Store (Android) rules and terms as laid down.</p>
                            <p>When you visit our website or App, we may receive certain information about your
                                behaviour including user activity, page content, gender, name, details provided as
                                ‘about me’, phone number(s), online identity, email, url, Company name and details, job
                                title, addresses, country code, university name, and addresses.</p>
                            <p>We may also, by happenstance or as may be necessary for usage of the App’s
                                functionalities and usage and/or provision of our products and services, collect,
                                receive, possess, store, deal or handle, directly or indirectly, the following sensitive
                                personal data or information from its Users by virtue of their use of our App or our
                                products and services - (i) password; (ii) financial information such as bank account or
                                credit card or debit card or other payment instrument details; (iii) physical,
                                physiological and mental health condition; (iv) sexual orientation; (v) medical records
                                and history; and (vi) biometric information (“Sensitive Data”). Keeping your best
                                interest in mind, we retain and use such Sensitive Data only for as long as is required
                                as per the purpose for which the Sensitive Data is collected or otherwise required to
                                comply with our legal obligations.</p>

                            <p class="subheading">II. Language Modelling Data</p>

                            <p>We do NOT capture or store data inputted into secure text fields containing items such as
                                passwords, credit card number, debit card number, OTP etc. Such information might
                                indirectly be captured or stored however; for instance, if you type your password in an
                                SMS message, or if a website or other application does not inform Company that a
                                particular field is a password field, your password may be retained as per Company’s
                                language modelling. </p>
                            <p>In the event that the User stops using the App but does not delete their account or send
                                a request to be forgotten, the Company shall retain all their acquired/collected
                                information till such request is made. </p>
                            <p>In the event that the User stops using the App but does not delete their account or send
                                a request to be forgotten, the Company shall retain all their acquired/collected
                                information till such request is made. </p>

                            <p class="subheading">III. Phone Contacts</p>
                            <p>This contact information is encrypted and stored locally on your device in a secured zone
                                which cannot be accessed by other apps generally. </p>
                            <p>We encrypt this data and send it to our servers through secure API requests to recommend
                                content based on your personalized network, and for programmatic analysis to improve
                                your personalized dictionary. We do not allow unauthorized publishing or disclosure of
                                people's non-public contacts.</p>

                            <p class="subheading">IV. Location Data</p>
                            <p>We do NOT collect any location data if you deny the location permission. Allowing
                                location permission is NOT needed for using the App.</p>
                            <p>If you allow the location permission, we collect your approximate and precise location at
                                regular intervals and send this data to our servers for our content recommendation
                                engine to suggest location-based content.</p>

                            <p class="subheading">V. Browsing History</p>
                            <p>We collect web browsing information such as IP addresses, URLs, etc. We also learn about
                                the pages you visit, the time you spend, and other similar information. This log data
                                may include information such as your browser type, browser version, and other
                                statistics. This information helps us optimize your experience with the product and make
                                recommendations relevant to your usage.</p>

                            <p class="subheading">VI. Product Metrics</p>
                            <p>We collect data about how you and your device interact within our App. This includes (1)
                                device information such as manufacturer, model, OS version, language settings, country
                                settings, phone status, identity, network information, applications installed etc., (2)
                                data regarding our application such as version and installation source, and (3) your
                                interaction data such as views, duration of stay at views, transition from view to view,
                                and how you enter and leave the view. The data collected helps us understand which
                                functions you like and which functions to improve. This information allows us to improve
                                our product and provide you with a better user experience.</p>

                            <p class="subheading">VII. Feedback Data</p>
                            <p>We use feedback forms inside and outside the App/website, because we appreciate that your
                                trust and suggestions make us better. Your feedback allows our highly-trained team
                                members to interact with you. </p>
                            <p>We collect the content of messages you send to us, such as feedback, questions or
                                information you provide for customer support. When you contact us, phone conversations
                                or chat sessions with our representatives might be monitored and recorded</p>

                            <p class="subheading">WHAT ABOUT CREDIT CARD NUMBERS AND PASSWORDS?</p>
                            <p>Your App does not learn anything from fields marked as password fields, nor does it
                                remember long numbers such as credit card numbers.</p>

                            <p class="subheading">HOW DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</p>
                            <p>Technologies such as cookies and scripts are used by us on our App/website, in
                                conjunction with solutions such as device generated identifiers, cookie tracking, and
                                universal login tracking. These technologies may be used in analyzing trends,
                                administering the App/website, tracking your movements around the App and to gather
                                demographic information about our user base as a whole. We use cookies to remember
                                Users’ settings, behaviour, activities as well as for authentication and analytics.
                                Users can control the use of cookies at the individual browser level. If you reject
                                cookies on the App/website, you may still use our App/website, but your ability to use
                                some features or areas of our App/website may be limited. Our App/website uses Google
                                Analytics an analytics tool by Google to track User activity or webengage, content,
                                click/touch, movement, scroll, and keystroke activity (in some cases). </p>

                            <p>Technologies such as cookies and scripts are also used by our affiliates, analytics or
                                service providers. These technologies may be used in analyzing trends, administering the
                                App/website, tracking your movements around the App/website and to gather demographic
                                information about our User-base as a whole. We may receive reports based on the use of
                                these technologies by such companies on an individual as well as aggregated basis.</p>

                            <p>The SDKs allows our customers to collect usage data for its business purposes including,
                                without limitation, improving the customer's technology, generating revenue by analyzing
                                internet trends, and sharing, transferring, disposing and/or selling anonymized and
                                aggregated versions of such information to third parties.</p>

                            <p>We collect information under the direction of and with absolute acceptance and knowledge
                                of our customers, and have no direct relationship with the individuals whose data we may
                                process. If you are a client of one of our current customers and would no longer like to
                                be tracked by such customer, please contact the respective customer directly. </p>

                            <p>Consent for usage of all these platforms and software are sought from the User through
                                the provision of ‘opt-in’ consent at time of registration with us as well as through
                                pop-up screens. We provide a pop-up screen with consent and a link to the Privacy Policy
                                for the User to peruse details on the same. The User has the option of reading and
                                accessing such Policy at any given point in time as per their requirement. </p>

                            <p class="subheading">WHO IS COLLECTING YOUR INFORMATION?</p>
                            <p>We process your information and data both as an originator/controller, and as a
                                processor/intermediary for our business partners for the purposes detailed under this
                                Privacy Policy. </p>

                            <p>The data controller for the purposes of this Privacy Policy is Stockation Private
                                Limited.</p>

                            <p class="subheading">WHY IS YOUR INFORMATION BEING COLLECTED?</p>
                            <p>We need your information to identify you uniquely, personalize your experience, and
                                provide you customer support whenever required. </p>
                            <p>Other than as specifically stated under this Privacy Policy, your data and personal
                                information is collected for the purpose of providing you our services, analytics,
                                identifying you, providing you data-based features, tailoring our and our partners’
                                services, etc. We collect your personal data only after receiving your consent and such
                                consent is taken at multiple stages to avoid dissemination and collection of any
                                unintended data. </p>

                            <p class="subheading">HOW DO WE STORE THE DATA WE COLLECT?</p>
                            <p>All data is stored locally before being transferred securely to our servers for analysis.
                                Only authorized personnel can access the summarized data, with the original data
                                regarding your interactions destroyed periodically. Your information is otherwise
                                securely archived in our cloud database after processing and usage.</p>

                            <p>Personal Information such as the phone number is collected whenever Users login into the
                                application, the e-mail is collected whenever a User opens the application for the first
                                time and is stored in our software. For iOS User information collected is for User login
                                with phone number, cloud sync, etc. and is stored in our software which is stored in our
                                secured databases which are hosted on the cloud platform of the Company. This storage
                                and usage of data is collected to personalise and improve your experience with us.</p>

                            <p>The User Contact syncing happens on every contact addition and modification. They also
                                get synced from time to time. First time, all contacts get synced while in subsequent
                                attempts, only added/modified contacts get synced.</p>
                            <p>User Device Information such as Device ID, Network bandwidth and Device Language are
                                collected and also synced on every application launch as well as at intervals whenever
                                keyboard is closed. For iOS Users the device information is collected as part of maximum
                                API calls and is collected by firebase crash analytics or any similar technology. This
                                information is stored in CSV format and in MySQL database for both iOS and Android
                                Users.</p>

                            <p>We may transfer personal information to companies that help us provide our service and we
                                do so with your consent and acceptance as per this Privacy Policy. Transfers to
                                subsequent third parties are covered by the service agreements with our customers and is
                                not our liability in any manner whatsoever.</p>

                            <p class="subheading">HOW LONG DO YOU STORE MY INFORMATION?</p>
                            <p>We store your information with us and only remove your information when we receive a
                                request to actively forget your information or until such time that the purpose for
                                which the data was collected is no longer relevant. With regard to any Sensitive Data,
                                we store such Sensitive Data until such time that we require it for the stated purposes
                                in this Privacy Policy or till such time as required to comply with our legal
                                obligations.</p>

                            <p class="subheading">HOW WILL WE USE YOUR INFORMATION?</p>
                            <p>Other than as stated under this Privacy Policy, and in addition to and apart from using
                                your information for analytics, servicing, understanding and creating a better product
                                for you, we would like to send you information about our own or associated products and
                                services, by post, telephone, email and SMS on the information you provide to us at the
                                time of creating your profile. In case you wish to discontinue any such service you must
                                send a request to help@stockpe.in. We will discontinue such services within seventy-two
                                (72) hours of receiving such written request.</p>
                            <p>We may share your information with a few entities such as analytics companies, our
                                business partner OEMs and other service providers,with whom we conduct business or host
                                on our App platform, such as merchants, co-marketers, distributors, resellers, and other
                                companies or organizations with whom we enter into agreements to support our business
                                and operations. Such information is shared with your consent and upon your confirmation
                                when you accept this Privacy Policy.</p>
                            <p>We allow some of our business partners to collect and use data such as:</p>
                            <p>- User’s type of browser and its settings</p>
                            <p>- User’s Information and cookie information</p>
                            <p>- Information about other identifiers assigned to the device, and the IP address from
                                which the device accesses a User’s App/website or mobile application</p>
                            <p>- Information about the User’s activity on that device, including web pages and mobile
                                apps visited, used or currently running apps.</p>
                            <p>Our business partners use the information collected to provide aggregate level analytics
                                services to its clients.</p>
                            <p>The personal data we collect will also be used for the purposes of:</p>
                            <p>- User identification and profiling for advertisements;</p>
                            <p>- Suggestive intent detection system and User behavioural analysis;</p>
                            <p>- Creating a User network;</p>
                            <p>- Application debugging and performance logs.</p>

                            <p class="subheading">INFORMATION PROCESSING</p>
                            <p>Subject to applicable data localisation laws, your information collected by us may be
                                stored in India or any other country where we or our affiliates, agents, partners, and
                                service providers maintain facilities. We may transfer the information we collect about
                                you to other affiliate partner entities or to third party entities or to other third
                                parties across borders to jurisdictions around the world. We store your information as
                                described and detailed above. If you are located in the European Union or other regions
                                with laws governing data collection and use that may differ from Indian law, your
                                acceptance to this policy is an affirmation and confirmation of your consent for us to
                                collect and process your information in this manner.</p>

                            <p>Your installation and use of the App involves the collection and use of data by third
                                parties, according to the terms set forth in the Privacy Policy, for providing enhanced
                                deliverance of our services.</p>

                            <p class="subheading">APP PERMISSIONS</p>
                            <p>We ask for permissions from you for the proper functioning of all App features. You can
                                choose to allow or deny for all or some of these permissions as per standard options
                                within the App.</p>

                            <p class="subheading">DATA PROTECTION</p>
                            <p>All data stored in your device and transmitted to our cloud services from the App is
                                encrypted with access restricted for the usage stated in this Privacy Policy.</p>

                            <p class="subheading">HOW DO WE PROTECT YOUR INFORMATION?</p>
                            <p>As mentioned, we’re using technologies to secure and safeguard all information we
                                collect, to the best of our capacity. We are concerned with protecting your data and
                                privacy and take all requisite and reasonable steps for such protection, however, we
                                cannot warrant the security of any information you transmit to us or guarantee that your
                                information with may not be accessed, disclosed, altered, copied or destroyed by breach
                                of any of our industrial standard physical, technical or managerial safeguards. </p>
                            <p>When you enter sensitive information on our registration forms, or other forms we encrypt
                                the information in this data and send it to our servers through a secure connection for
                                programmatic analysis to improve our language dictionaries. Data sent to our servers is
                                archived when no longer required. No method of transmission over the Internet or method
                                of electronic storage is 100% secure, therefore, we cannot guarantee its absolute
                                security. </p>
                            <p>We undertake reasonable security practices and procedures, security practices and
                                procedures designed to protect such information from unauthorised access, damage, use,
                                modification, disclosure or impairment.</p>
                            <p>If you have any queries about security on our website/app you can contact us at
                                support@stockpe.in.</p>

                            <p class="subheading">RIGHTS OF USER</p>
                            <p>As per applicable data protection law, as supplemented by our internal practices, your
                                principal rights as a User are: </p>
                            <p>- The right to access;</p>
                            <p>- The right to rectification;</p>
                            <p>- The right to erasure;</p>
                            <p>- The right to restrict processing;</p>
                            <p>- The right to object to processing;</p>
                            <p>- The right to data portability;</p>
                            <p>- The right to complain to a supervisory authority; </p>
                            <p>- The right to withdraw consent; and</p>
                            <p>- The right to be forgotten.</p>

                            <p>You have the right to request access to the information you have provided to us as you
                                may deem fit. You can do this by contacting us on help@stockpe.in. We will ask you to
                                verify your identity and provide you with requisite details. Once we receives your
                                information and verifies the same satisfactorily and as per its procedure, we shall give
                                you access to requisite personal information. While the Company shall make all due
                                efforts to ensure solution of this concern, this procedure might take 72 hours or more.
                            </p>
                            <p>If you believe that the information we have about you is incorrect, you can contact us to
                                have the information updated and keep your data accurate.</p>
                            <p>If at any point you wish to have your information with us deleted, removed or forgotten
                                from our database, you can contact us for the same at help@stockpe.in. We will take the
                                necessary actions and step within 7 working days of the request being made.</p>
                            <p>You can opt-in or out of using our products as per your consent to the information being
                                collected. If you wish to opt-out from tracking by Company, you can do so by sending a
                                request at help@stockpe.in. We will process your request within seventy-two (72)
                                business hours from receiving such request. </p>
                            <p>An individual who is a current or former customer of Company who seeks access or wishes
                                to correct, amend or delete inaccurate data should direct his query to help@stockpe.in.
                            </p>
                            <p>An individual who is a client of a current or former customer of Company and who seeks
                                access or wishes to correct, amend or delete inaccurate data should direct his/her query
                                to the respective customer first and then, if no response is obtained or such response
                                is not satisfactory to the individual, should contact Yashvardhan Singh at
                                support@stockpe.in. If we receive a request under this provision, we will acknowledge it
                                within seventy-two (72) business hours and handle it promptly.</p>

                            <p class="subheading">WHAT YOU CAN DO</p>
                            <p>You can play your part in safeguarding your personal information by not disclosing your
                                login password or account information to anybody unless such person is duly authorized
                                by you. We cannot be held responsible for lapses in security caused by third party
                                access to your personal information as a result of your failure to keep your personal
                                information private. Notwithstanding the foregoing, you must notify us immediately if
                                there is any unauthorized use of your account by any other Internet user or any other
                                breach of security.</p>
                            <p>Your assistance will help us protect the privacy of your personal information.</p>

                            <p class="subheading">WHAT HAPPENS IF THERE’S A CHANGE OF CONTROL?</p>
                            <p>If we sell or otherwise transfer our products or our assets to another organization, data
                                received from or about our Users may be among the items sold or transferred. Any buyer
                                or transferee will be required to honor the commitments made in this Privacy Policy.</p>

                            <p class="subheading">WHAT CONTROL DO I HAVE OVER MY DATA?</p>
                            <p>We take your consent at multiple stages throughout our App and website. You can
                                discontinue use of our app or site at any point where you wish to not share further
                                information with us.</p>

                            <p class="subheading">MINORS</p>
                            <p>This app is to be used only by person above 18 years of age. For minors, we consider it
                                the responsibility of parents to monitor their children’s use of our services and apps.
                                For a minor’s safety, we don’t allow usage of our services or App or website without
                                parental guidance.</p>
                            <p>We do not seek or intend to seek to receive any personal information from minors. Should
                                a parent or guardian have reason to believe that a minor has provided us with personal
                                information without their prior consent, please contact us to ensure that the personal
                                information is removed and the minor unsubscribes from any of the applicable services.
                            </p>

                            <p class="subheading">FAIR USE</p>
                            <p>The application is to be used fairly by the person downloading our application. In case
                                of any fraud, gross negligence or any willful misconduct or any such illegal usage by
                                anyone of the application, the Company has the right to suspend the account without any
                                due notice or intimation and withhold any such money or monetary transaction in case any
                                event which harms the reputation of the Company or intends to harm the reputation of the
                                Company.</p>

                            <p class="subheading">WHAT HAPPENS WHEN WE MAKE CHANGES TO THIS POLICY?</p>
                            <p>We keep our Privacy Policy under regular review and may update this privacy policy to
                                reflect changes to our information practices. If we make material changes to our Privacy
                                Policy, we will notify you by email (if you have provided your email address via your
                                account) post the changes on our App/website, so that you may be aware of the
                                information we collect and how we use it. We will not reduce your rights under this
                                Privacy Policy without your explicit consent. Such changes to our Privacy Policy shall
                                apply from the effective date as set out in the notice or on the App/website. We
                                encourage you to periodically review this page for the latest information on our privacy
                                practices. Your continued use of our services and apps will be taken as acceptance of
                                the updated Privacy Policy. We will seek your fresh consent before we collect more
                                personal information from you or when we wish to use or disclose your personal
                                information for new purposes.</p>

                            <p class="subheading">HOW CAN YOU CONTACT US?</p>
                            <p>If you have any questions regarding this Privacy Policy or any grievance in this respect,
                                you may contact our grievance officer Yashvardhan Singh at support@stockpe.in, or write
                                to us at: Stockation Private Limited at 30/35, 35-A 4th Floor West Patel Nagar, New
                                Delhi 110008.</p>
                            <p>We understand how important your data is for you. We have attempted to answer all your
                                questions. However, if you have questions or concerns regarding our Privacy Policy or
                                practices, please contact us at support@stockpe.in. If you have an unresolved privacy or
                                data use concern that we have not addressed satisfactorily, please contact us
                                immediately.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    

    <script src="assets/js/vendor/jquery-1.12.4.min.js"></script>
    <script src="assets/js/vendor/slick.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/custom.js"></script>

    <!--<script src="https://cdnjs.cloudflare.com/ajax/libs/scrollify/1.0.4/jquery.scrollify.min.js"></script>-->
</body>

</html>`

const Policy = () => {
    return (
        <>
            <div className="tw-h-full tw-bg-primaryBg  tw-text-fontColor">
                <div className="tw-h-full  md:tw-mx-auto lg:tw-px-4 ">
                    {/* <!-- Stockpe Title Section --> */}
                    {/* Mobile View */}
                    <div className="md:tw-hidden">
                        <div >
                            <HTMLContent html={htmlfile} />
                        </div>
                    </div>

                    {/* Desktop View */}
                    <div className="mobile-xs:tw-hidden tw-max-w-screen-3xl tw-mx-auto">
                        {/* <section className="panel banner privacypolicy" data-section-name="AboutUs">
                            <div className="inner">
                                <div className="">
                                    <div className="policy_container">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <h2>Privacy Policy</h2>
                                                <p>
                                                    This Privacy Policy is published pursuant to, and in
                                                    compliance with the Information Technology Act, 2000, and the
                                                    rules and regulations thereunder, more specifically the
                                                    Information Technology (Reasonable Security Practices and
                                                    Procedures and Sensitive Personal Data or Information) Rules,
                                                    2011, and the Information Technology Intermediaries Guidelines
                                                    Rules 2011.
                                                </p>

                                                <p>
                                                    This Privacy Policy explains how Stockation Private Limited
                                                    (“Company”, “we’, “us”, “our”) collects and uses your
                                                    information in relation to the user’s (“User”, “you”, “your”)
                                                    access and usage of the mobile application 'StockPe' including
                                                    and referring to Android package com.stockpemarket and iOS
                                                    bundle id in.stockpe (“App”), and other Company’s products and
                                                    services, unless a separate privacy policy is provided for the
                                                    specific product or service.
                                                </p>

                                                <p>
                                                    Please take a moment to familiarize yourself with our privacy
                                                    practices and let us know if you have any questions. IF YOU DO
                                                    NOT AGREE WITH THE FOLLOWING PRIVACY POLICY, PLEASE DO NOT
                                                    DOWNLOAD OR INSTALL THE APP, OR ACCESS OR USE ANY PRODUCT OF
                                                    SERVICE, OR PROCEED BEYOND THE PRIVACY POLICY SCREEN AFTER
                                                    LAUNCHING IT ON YOUR DEVICE OR APP FOR THE FIRST TIME. IF YOU
                                                    CONTINUE TO USE THE APP, OR ANY PRODUCT OR SERVICE, WE
                                                    UNDERSTAND THAT YOU ARE AWARE OF THIS PRIVACY POLICY AND ITS
                                                    CONTENTS, AND HAVE PROVIDED YOUR “OPT-IN” CONSENT ON SUCH
                                                    BASIS.
                                                </p>

                                                <p>
                                                    Users may be subject to different protection standards and
                                                    broader standards may therefore apply to some as per the
                                                    compliance statement under this Privacy Policy. Company is
                                                    committed to ensuring your privacy and the integrity of the
                                                    data, and accordingly supplements the data protection
                                                    requirements under law with additional good-practice
                                                    modalities.
                                                </p>

                                                <p>
                                                    Company takes your privacy concerns very seriously, which is
                                                    why it urges you to be careful with the information you share
                                                    with others. This Privacy Policy does not apply to information
                                                    we collect by other means (including offline) or from other
                                                    sources. The use of information collected through our App
                                                    shall be limited to the purposes under this Privacy Policy.
                                                </p>

                                                <p>
                                                    This Privacy Policy is designed with you in mind, and it is
                                                    important that you have a comprehensive understanding of our
                                                    personal information collection and usage practices, as well
                                                    as full confidence that ultimately, you have control of any
                                                    personal information you provide to the Company. We consider
                                                    your express and free consent for the aforementioned and below
                                                    mentioned collection, storage and use of information and data
                                                    by us, by virtue of your ‘opt-in’ consent provided for usage
                                                    of the App.
                                                </p>

                                                <p>
                                                    We collect information for a lawful purpose connected with our
                                                    App or other products and services. Collection of such data
                                                    and information is essential for the purpose of serving Users
                                                    with the best version of our technologies and App.
                                                </p>

                                                <p className="subheading">
                                                    CONSENT AND BASIS FOR COLLECTION OF INFORMATION
                                                </p>

                                                <p>
                                                    By consenting to this Privacy Policy you are giving us
                                                    permission to process your personal data specifically for the
                                                    purposes identified. Acceptance of our services by clicking on
                                                    “I Accept” upon downloading the App is an acceptance of the
                                                    Privacy Policy.
                                                </p>

                                                <p>
                                                    For the collected information as further detailed later in
                                                    this Privacy Policy, consent is collected at multiple stages,
                                                    being -
                                                </p>

                                                <p>
                                                    - Consent for information is collected from the Android User
                                                    on the registration screen or through phone contacts,
                                                    identifiable information, SMS, Product metrics, location.
                                                </p>
                                                <p>
                                                    - Consent for Images is collected from the Android User via an
                                                    Android permission popup to access camera, images from
                                                    gallery.
                                                </p>
                                                <p>
                                                    - Consent for information is collected from the iOS User
                                                    through App launch pop-up and login;
                                                </p>
                                                <p>
                                                    - Consent for information is collected from a website User
                                                    through the pop-up at the bottom of the website.
                                                </p>
                                                <p>
                                                    - Consent for information is collected from a website User
                                                    through the pop-up at the bottom of the website.
                                                </p>
                                                <p>
                                                    The Company has a legal/lawful basis of collecting, processing
                                                    and storage of personal data due to the following
                                                </p>
                                                <p>
                                                    Upon your Consent – We collect your data, personal
                                                    information, and any other personally identifiable data after
                                                    and only upon receiving your ‘opt-in’ consent on our
                                                    App/website at various stages.
                                                </p>
                                                <p>
                                                    We collect information for the purpose of providing you
                                                    services and improved deliverance through our App/website.
                                                </p>
                                                <p>
                                                    We will collect all requisite information for compliance with
                                                    legal obligations; and
                                                </p>
                                                <p>
                                                    We share information with third- parties with whom we conduct
                                                    business such as merchants, co-marketers, distributors,
                                                    resellers, and other companies or organizations with whom the
                                                    Company enters into agreements to support its business and
                                                    operations, for the purpose of analytics, feature based
                                                    services and better deliverance of services.
                                                </p>
                                                <p>
                                                    We share information with third- parties with whom we conduct
                                                    business such as merchants, co-marketers, distributors,
                                                    resellers, and other companies or organizations with whom the
                                                    Company enters into agreements to support its business and
                                                    operations, for the purpose of analytics, feature based
                                                    services and better deliverance of services.
                                                </p>
                                                <p>WHAT INFORMATION DO WE COLLECT ABOUT YOU?</p>

                                                <p className="subheading">I. Personally Identifiable Information</p>

                                                <p>
                                                    We might ask for your personal information like your name,
                                                    phone number, address, email accounts, photos etc. at
                                                    different screens in the app, and collect this information
                                                    automatically through the App.
                                                </p>
                                                <p>
                                                    Our source for collecting information which is used, stored
                                                    and processed by us are varied and dynamic. We use the App,
                                                    background cookies and other tracking technologies, to collect
                                                    your information for processing, usage, storage and servicing.
                                                </p>
                                                <p>
                                                    Such personal information may include but not be limited to
                                                    the information you provide to us or upload, the information
                                                    specific to you that may be assigned by us, your financial
                                                    information, social information, device or sim-related
                                                    information, location information, log information.
                                                </p>
                                                <p>
                                                    We also collect information regarding location data, user
                                                    action logs, application API logs, user browsing history,
                                                    installed apps, etc. The information collection differs as per
                                                    the operating system of the User and is in consonance with the
                                                    App Store (iOS) and Play Store (Android) rules and terms as
                                                    laid down.
                                                </p>
                                                <p>
                                                    When you visit our website or App, we may receive certain
                                                    information about your behaviour including user activity, page
                                                    content, gender, name, details provided as ‘about me’, phone
                                                    number(s), online identity, email, url, Company name and
                                                    details, job title, addresses, country code, university name,
                                                    and addresses.
                                                </p>
                                                <p>
                                                    We may also, by happenstance or as may be necessary for usage
                                                    of the App’s functionalities and usage and/or provision of our
                                                    products and services, collect, receive, possess, store, deal
                                                    or handle, directly or indirectly, the following sensitive
                                                    personal data or information from its Users by virtue of their
                                                    use of our App or our products and services - (i) password;
                                                    (ii) financial information such as bank account or credit card
                                                    or debit card or other payment instrument details; (iii)
                                                    physical, physiological and mental health condition; (iv)
                                                    sexual orientation; (v) medical records and history; and (vi)
                                                    biometric information (“Sensitive Data”). Keeping your best
                                                    interest in mind, we retain and use such Sensitive Data only
                                                    for as long as is required as per the purpose for which the
                                                    Sensitive Data is collected or otherwise required to comply
                                                    with our legal obligations.
                                                </p>

                                                <p className="subheading">II. Language Modelling Data</p>

                                                <p>
                                                    We do NOT capture or store data inputted into secure text
                                                    fields containing items such as passwords, credit card number,
                                                    debit card number, OTP etc. Such information might indirectly
                                                    be captured or stored however; for instance, if you type your
                                                    password in an SMS message, or if a website or other
                                                    application does not inform Company that a particular field is
                                                    a password field, your password may be retained as per
                                                    Company’s language modelling.
                                                </p>
                                                <p>
                                                    In the event that the User stops using the App but does not
                                                    delete their account or send a request to be forgotten, the
                                                    Company shall retain all their acquired/collected information
                                                    till such request is made.
                                                </p>
                                                <p>
                                                    In the event that the User stops using the App but does not
                                                    delete their account or send a request to be forgotten, the
                                                    Company shall retain all their acquired/collected information
                                                    till such request is made.
                                                </p>

                                                <p className="subheading">III. Phone Contacts</p>
                                                <p>
                                                    This contact information is encrypted and stored locally on
                                                    your device in a secured zone which cannot be accessed by
                                                    other apps generally.
                                                </p>
                                                <p>
                                                    We encrypt this data and send it to our servers through secure
                                                    API requests to recommend content based on your personalized
                                                    network, and for programmatic analysis to improve your
                                                    personalized dictionary. We do not allow unauthorized
                                                    publishing or disclosure of people's non-public contacts.
                                                </p>

                                                <p className="subheading">IV. Location Data</p>
                                                <p>
                                                    We do NOT collect any location data if you deny the location
                                                    permission. Allowing location permission is NOT needed for
                                                    using the App.
                                                </p>
                                                <p>
                                                    If you allow the location permission, we collect your
                                                    approximate and precise location at regular intervals and send
                                                    this data to our servers for our content recommendation engine
                                                    to suggest location-based content.
                                                </p>

                                                <p className="subheading">V. Browsing History</p>
                                                <p>
                                                    We collect web browsing information such as IP addresses,
                                                    URLs, etc. We also learn about the pages you visit, the time
                                                    you spend, and other similar information. This log data may
                                                    include information such as your browser type, browser
                                                    version, and other statistics. This information helps us
                                                    optimize your experience with the product and make
                                                    recommendations relevant to your usage.
                                                </p>

                                                <p className="subheading">VI. Product Metrics</p>
                                                <p>
                                                    We collect data about how you and your device interact within
                                                    our App. This includes (1) device information such as
                                                    manufacturer, model, OS version, language settings, country
                                                    settings, phone status, identity, network information,
                                                    applications installed etc., (2) data regarding our
                                                    application such as version and installation source, and (3)
                                                    your interaction data such as views, duration of stay at
                                                    views, transition from view to view, and how you enter and
                                                    leave the view. The data collected helps us understand which
                                                    functions you like and which functions to improve. This
                                                    information allows us to improve our product and provide you
                                                    with a better user experience.
                                                </p>

                                                <p className="subheading">VII. Feedback Data</p>
                                                <p>
                                                    We use feedback forms inside and outside the App/website,
                                                    because we appreciate that your trust and suggestions make us
                                                    better. Your feedback allows our highly-trained team members
                                                    to interact with you.
                                                </p>
                                                <p>
                                                    We collect the content of messages you send to us, such as
                                                    feedback, questions or information you provide for customer
                                                    support. When you contact us, phone conversations or chat
                                                    sessions with our representatives might be monitored and
                                                    recorded
                                                </p>

                                                <p className="subheading">
                                                    WHAT ABOUT CREDIT CARD NUMBERS AND PASSWORDS?
                                                </p>
                                                <p>
                                                    Your App does not learn anything from fields marked as
                                                    password fields, nor does it remember long numbers such as
                                                    credit card numbers.
                                                </p>

                                                <p className="subheading">
                                                    HOW DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                                                </p>
                                                <p>
                                                    Technologies such as cookies and scripts are used by us on our
                                                    App/website, in conjunction with solutions such as device
                                                    generated identifiers, cookie tracking, and universal login
                                                    tracking. These technologies may be used in analyzing trends,
                                                    administering the App/website, tracking your movements around
                                                    the App and to gather demographic information about our user
                                                    base as a whole. We use cookies to remember Users’ settings,
                                                    behaviour, activities as well as for authentication and
                                                    analytics. Users can control the use of cookies at the
                                                    individual browser level. If you reject cookies on the
                                                    App/website, you may still use our App/website, but your
                                                    ability to use some features or areas of our App/website may
                                                    be limited. Our App/website uses Google Analytics an analytics
                                                    tool by Google to track User activity or webengage, content,
                                                    click/touch, movement, scroll, and keystroke activity (in some
                                                    cases).
                                                </p>

                                                <p>
                                                    Technologies such as cookies and scripts are also used by our
                                                    affiliates, analytics or service providers. These technologies
                                                    may be used in analyzing trends, administering the
                                                    App/website, tracking your movements around the App/website
                                                    and to gather demographic information about our User-base as a
                                                    whole. We may receive reports based on the use of these
                                                    technologies by such companies on an individual as well as
                                                    aggregated basis.
                                                </p>

                                                <p>
                                                    The SDKs allows our customers to collect usage data for its
                                                    business purposes including, without limitation, improving the
                                                    customer's technology, generating revenue by analyzing
                                                    internet trends, and sharing, transferring, disposing and/or
                                                    selling anonymized and aggregated versions of such information
                                                    to third parties.
                                                </p>

                                                <p>
                                                    We collect information under the direction of and with
                                                    absolute acceptance and knowledge of our customers, and have
                                                    no direct relationship with the individuals whose data we may
                                                    process. If you are a client of one of our current customers
                                                    and would no longer like to be tracked by such customer,
                                                    please contact the respective customer directly.
                                                </p>

                                                <p>
                                                    Consent for usage of all these platforms and software are
                                                    sought from the User through the provision of ‘opt-in’ consent
                                                    at time of registration with us as well as through pop-up
                                                    screens. We provide a pop-up screen with consent and a link to
                                                    the Privacy Policy for the User to peruse details on the same.
                                                    The User has the option of reading and accessing such Policy
                                                    at any given point in time as per their requirement.
                                                </p>

                                                <p className="subheading">WHO IS COLLECTING YOUR INFORMATION?</p>
                                                <p>
                                                    We process your information and data both as an
                                                    originator/controller, and as a processor/intermediary for our
                                                    business partners for the purposes detailed under this Privacy
                                                    Policy.
                                                </p>

                                                <p>
                                                    The data controller for the purposes of this Privacy Policy is
                                                    Stockation Private Limited.
                                                </p>

                                                <p className="subheading">
                                                    WHY IS YOUR INFORMATION BEING COLLECTED?
                                                </p>
                                                <p>
                                                    We need your information to identify you uniquely, personalize
                                                    your experience, and provide you customer support whenever
                                                    required.
                                                </p>
                                                <p>
                                                    Other than as specifically stated under this Privacy Policy,
                                                    your data and personal information is collected for the
                                                    purpose of providing you our services, analytics, identifying
                                                    you, providing you data-based features, tailoring our and our
                                                    partners’ services, etc. We collect your personal data only
                                                    after receiving your consent and such consent is taken at
                                                    multiple stages to avoid dissemination and collection of any
                                                    unintended data.
                                                </p>

                                                <p className="subheading">HOW DO WE STORE THE DATA WE COLLECT?</p>
                                                <p>
                                                    All data is stored locally before being transferred securely
                                                    to our servers for analysis. Only authorized personnel can
                                                    access the summarized data, with the original data regarding
                                                    your interactions destroyed periodically. Your information is
                                                    otherwise securely archived in our cloud database after
                                                    processing and usage.
                                                </p>

                                                <p>
                                                    Personal Information such as the phone number is collected
                                                    whenever Users login into the application, the e-mail is
                                                    collected whenever a User opens the application for the first
                                                    time and is stored in our software. For iOS User information
                                                    collected is for User login with phone number, cloud sync,
                                                    etc. and is stored in our software which is stored in our
                                                    secured databases which are hosted on the cloud platform of
                                                    the Company. This storage and usage of data is collected to
                                                    personalise and improve your experience with us.
                                                </p>

                                                <p>
                                                    The User Contact syncing happens on every contact addition and
                                                    modification. They also get synced from time to time. First
                                                    time, all contacts get synced while in subsequent attempts,
                                                    only added/modified contacts get synced.
                                                </p>
                                                <p>
                                                    User Device Information such as Device ID, Network bandwidth
                                                    and Device Language are collected and also synced on every
                                                    application launch as well as at intervals whenever keyboard
                                                    is closed. For iOS Users the device information is collected
                                                    as part of maximum API calls and is collected by firebase
                                                    crash analytics or any similar technology. This information is
                                                    stored in CSV format and in MySQL database for both iOS and
                                                    Android Users.
                                                </p>

                                                <p>
                                                    We may transfer personal information to companies that help us
                                                    provide our service and we do so with your consent and
                                                    acceptance as per this Privacy Policy. Transfers to subsequent
                                                    third parties are covered by the service agreements with our
                                                    customers and is not our liability in any manner whatsoever.
                                                </p>

                                                <p className="subheading">HOW LONG DO YOU STORE MY INFORMATION?</p>
                                                <p>
                                                    We store your information with us and only remove your
                                                    information when we receive a request to actively forget your
                                                    information or until such time that the purpose for which the
                                                    data was collected is no longer relevant. With regard to any
                                                    Sensitive Data, we store such Sensitive Data until such time
                                                    that we require it for the stated purposes in this Privacy
                                                    Policy or till such time as required to comply with our legal
                                                    obligations.
                                                </p>

                                                <p className="subheading">HOW WILL WE USE YOUR INFORMATION?</p>
                                                <p>
                                                    Other than as stated under this Privacy Policy, and in
                                                    addition to and apart from using your information for
                                                    analytics, servicing, understanding and creating a better
                                                    product for you, we would like to send you information about
                                                    our own or associated products and services, by post,
                                                    telephone, email and SMS on the information you provide to us
                                                    at the time of creating your profile. In case you wish to
                                                    discontinue any such service you must send a request to
                                                    help@stockpe.in. We will discontinue such services within
                                                    seventy-two (72) hours of receiving such written request.
                                                </p>
                                                <p>
                                                    We may share your information with a few entities such as
                                                    analytics companies, our business partner OEMs and other
                                                    service providers,with whom we conduct business or host on our
                                                    App platform, such as merchants, co-marketers, distributors,
                                                    resellers, and other companies or organizations with whom we
                                                    enter into agreements to support our business and operations.
                                                    Such information is shared with your consent and upon your
                                                    confirmation when you accept this Privacy Policy.
                                                </p>
                                                <p>
                                                    We allow some of our business partners to collect and use data
                                                    such as:
                                                </p>
                                                <p>- User’s type of browser and its settings</p>
                                                <p>- User’s Information and cookie information</p>
                                                <p>
                                                    - Information about other identifiers assigned to the device,
                                                    and the IP address from which the device accesses a User’s
                                                    App/website or mobile application
                                                </p>
                                                <p>
                                                    - Information about the User’s activity on that device,
                                                    including web pages and mobile apps visited, used or currently
                                                    running apps.
                                                </p>
                                                <p>
                                                    Our business partners use the information collected to provide
                                                    aggregate level analytics services to its clients.
                                                </p>
                                                <p>
                                                    The personal data we collect will also be used for the
                                                    purposes of:
                                                </p>
                                                <p>- User identification and profiling for advertisements;</p>
                                                <p>
                                                    - Suggestive intent detection system and User behavioural
                                                    analysis;
                                                </p>
                                                <p>- Creating a User network;</p>
                                                <p>- Application debugging and performance logs.</p>

                                                <p className="subheading">INFORMATION PROCESSING</p>
                                                <p>
                                                    Subject to applicable data localisation laws, your information
                                                    collected by us may be stored in India or any other country
                                                    where we or our affiliates, agents, partners, and service
                                                    providers maintain facilities. We may transfer the information
                                                    we collect about you to other affiliate partner entities or to
                                                    third party entities or to other third parties across borders
                                                    to jurisdictions around the world. We store your information
                                                    as described and detailed above. If you are located in the
                                                    European Union or other regions with laws governing data
                                                    collection and use that may differ from Indian law, your
                                                    acceptance to this policy is an affirmation and confirmation
                                                    of your consent for us to collect and process your information
                                                    in this manner.
                                                </p>

                                                <p>
                                                    Your installation and use of the App involves the collection
                                                    and use of data by third parties, according to the terms set
                                                    forth in the Privacy Policy, for providing enhanced
                                                    deliverance of our services.
                                                </p>

                                                <p className="subheading">APP PERMISSIONS</p>
                                                <p>
                                                    We ask for permissions from you for the proper functioning of
                                                    all App features. You can choose to allow or deny for all or
                                                    some of these permissions as per standard options within the
                                                    App.
                                                </p>

                                                <p className="subheading">DATA PROTECTION</p>
                                                <p>
                                                    All data stored in your device and transmitted to our cloud
                                                    services from the App is encrypted with access restricted for
                                                    the usage stated in this Privacy Policy.
                                                </p>

                                                <p className="subheading">HOW DO WE PROTECT YOUR INFORMATION?</p>
                                                <p>
                                                    As mentioned, we’re using technologies to secure and safeguard
                                                    all information we collect, to the best of our capacity. We
                                                    are concerned with protecting your data and privacy and take
                                                    all requisite and reasonable steps for such protection,
                                                    however, we cannot warrant the security of any information you
                                                    transmit to us or guarantee that your information with may not
                                                    be accessed, disclosed, altered, copied or destroyed by breach
                                                    of any of our industrial standard physical, technical or
                                                    managerial safeguards.
                                                </p>
                                                <p>
                                                    When you enter sensitive information on our registration
                                                    forms, or other forms we encrypt the information in this data
                                                    and send it to our servers through a secure connection for
                                                    programmatic analysis to improve our language dictionaries.
                                                    Data sent to our servers is archived when no longer required.
                                                    No method of transmission over the Internet or method of
                                                    electronic storage is 100% secure, therefore, we cannot
                                                    guarantee its absolute security.
                                                </p>
                                                <p>
                                                    We undertake reasonable security practices and procedures,
                                                    security practices and procedures designed to protect such
                                                    information from unauthorised access, damage, use,
                                                    modification, disclosure or impairment.
                                                </p>
                                                <p>
                                                    If you have any queries about security on our website/app you
                                                    can contact us at support@stockpe.in.
                                                </p>

                                                <p className="subheading">RIGHTS OF USER</p>
                                                <p>
                                                    As per applicable data protection law, as supplemented by our
                                                    internal practices, your principal rights as a User are:
                                                </p>
                                                <p>- The right to access;</p>
                                                <p>- The right to rectification;</p>
                                                <p>- The right to erasure;</p>
                                                <p>- The right to restrict processing;</p>
                                                <p>- The right to object to processing;</p>
                                                <p>- The right to data portability;</p>
                                                <p>- The right to complain to a supervisory authority;</p>
                                                <p>- The right to withdraw consent; and</p>
                                                <p>- The right to be forgotten.</p>

                                                <p>
                                                    You have the right to request access to the information you
                                                    have provided to us as you may deem fit. You can do this by
                                                    contacting us on help@stockpe.in. We will ask you to verify
                                                    your identity and provide you with requisite details. Once we
                                                    receives your information and verifies the same satisfactorily
                                                    and as per its procedure, we shall give you access to
                                                    requisite personal information. While the Company shall make
                                                    all due efforts to ensure solution of this concern, this
                                                    procedure might take 72 hours or more.
                                                </p>
                                                <p>
                                                    If you believe that the information we have about you is
                                                    incorrect, you can contact us to have the information updated
                                                    and keep your data accurate.
                                                </p>
                                                <p>
                                                    If at any point you wish to have your information with us
                                                    deleted, removed or forgotten from our database, you can
                                                    contact us for the same at help@stockpe.in. We will take the
                                                    necessary actions and step within 7 working days of the
                                                    request being made.
                                                </p>
                                                <p>
                                                    You can opt-in or out of using our products as per your
                                                    consent to the information being collected. If you wish to
                                                    opt-out from tracking by Company, you can do so by sending a
                                                    request at help@stockpe.in. We will process your request
                                                    within seventy-two (72) business hours from receiving such
                                                    request.
                                                </p>
                                                <p>
                                                    An individual who is a current or former customer of Company
                                                    who seeks access or wishes to correct, amend or delete
                                                    inaccurate data should direct his query to help@stockpe.in.
                                                </p>
                                                <p>
                                                    An individual who is a client of a current or former customer
                                                    of Company and who seeks access or wishes to correct, amend or
                                                    delete inaccurate data should direct his/her query to the
                                                    respective customer first and then, if no response is obtained
                                                    or such response is not satisfactory to the individual, should
                                                    contact Yashvardhan Singh at support@stockpe.in. If we receive
                                                    a request under this provision, we will acknowledge it within
                                                    seventy-two (72) business hours and handle it promptly.
                                                </p>

                                                <p className="subheading">WHAT YOU CAN DO</p>
                                                <p>
                                                    You can play your part in safeguarding your personal
                                                    information by not disclosing your login password or account
                                                    information to anybody unless such person is duly authorized
                                                    by you. We cannot be held responsible for lapses in security
                                                    caused by third party access to your personal information as a
                                                    result of your failure to keep your personal information
                                                    private. Notwithstanding the foregoing, you must notify us
                                                    immediately if there is any unauthorized use of your account
                                                    by any other Internet user or any other breach of security.
                                                </p>
                                                <p>
                                                    Your assistance will help us protect the privacy of your
                                                    personal information.
                                                </p>

                                                <p className="subheading">
                                                    WHAT HAPPENS IF THERE’S A CHANGE OF CONTROL?
                                                </p>
                                                <p>
                                                    If we sell or otherwise transfer our products or our assets to
                                                    another organization, data received from or about our Users
                                                    may be among the items sold or transferred. Any buyer or
                                                    transferee will be required to honor the commitments made in
                                                    this Privacy Policy.
                                                </p>

                                                <p className="subheading">WHAT CONTROL DO I HAVE OVER MY DATA?</p>
                                                <p>
                                                    We take your consent at multiple stages throughout our App and
                                                    website. You can discontinue use of our app or site at any
                                                    point where you wish to not share further information with us.
                                                </p>

                                                <p className="subheading">MINORS</p>
                                                <p>
                                                    This app is to be used only by person above 18 years of age.
                                                    For minors, we consider it the responsibility of parents to
                                                    monitor their children’s use of our services and apps. For a
                                                    minor’s safety, we don’t allow usage of our services or App or
                                                    website without parental guidance.
                                                </p>
                                                <p>
                                                    We do not seek or intend to seek to receive any personal
                                                    information from minors. Should a parent or guardian have
                                                    reason to believe that a minor has provided us with personal
                                                    information without their prior consent, please contact us to
                                                    ensure that the personal information is removed and the minor
                                                    unsubscribes from any of the applicable services.
                                                </p>

                                                <p className="subheading">FAIR USE</p>
                                                <p>
                                                    The application is to be used fairly by the person downloading
                                                    our application. In case of any fraud, gross negligence or any
                                                    willful misconduct or any such illegal usage by anyone of the
                                                    application, the Company has the right to suspend the account
                                                    without any due notice or intimation and withhold any such
                                                    money or monetary transaction in case any event which harms
                                                    the reputation of the Company or intends to harm the
                                                    reputation of the Company.
                                                </p>

                                                <p className="subheading">
                                                    WHAT HAPPENS WHEN WE MAKE CHANGES TO THIS POLICY?
                                                </p>
                                                <p>
                                                    We keep our Privacy Policy under regular review and may update
                                                    this privacy policy to reflect changes to our information
                                                    practices. If we make material changes to our Privacy Policy,
                                                    we will notify you by email (if you have provided your email
                                                    address via your account) post the changes on our App/website,
                                                    so that you may be aware of the information we collect and how
                                                    we use it. We will not reduce your rights under this Privacy
                                                    Policy without your explicit consent. Such changes to our
                                                    Privacy Policy shall apply from the effective date as set out
                                                    in the notice or on the App/website. We encourage you to
                                                    periodically review this page for the latest information on
                                                    our privacy practices. Your continued use of our services and
                                                    apps will be taken as acceptance of the updated Privacy
                                                    Policy. We will seek your fresh consent before we collect more
                                                    personal information from you or when we wish to use or
                                                    disclose your personal information for new purposes.
                                                </p>

                                                <p className="subheading">HOW CAN YOU CONTACT US?</p>
                                                <p>
                                                    If you have any questions regarding this Privacy Policy or any
                                                    grievance in this respect, you may contact our grievance
                                                    officer Yashvardhan Singh at support@stockpe.in, or write to
                                                    us at: Stockation Private Limited at 30/35, 35-A 4th Floor
                                                    West Patel Nagar, New Delhi 110008.
                                                </p>
                                                <p>
                                                    We understand how important your data is for you. We have
                                                    attempted to answer all your questions. However, if you have
                                                    questions or concerns regarding our Privacy Policy or
                                                    practices, please contact us at support@stockpe.in. If you
                                                    have an unresolved privacy or data use concern that we have
                                                    not addressed satisfactorily, please contact us immediately.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section> */}
                        <div >
                            <HTMLContent html={htmlfile} />
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Policy