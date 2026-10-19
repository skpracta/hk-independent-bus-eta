import { Paper, Link } from "@mui/material";

const TermsAndConditions = () => {
  return (
    <Paper sx={{ p: 2, flex: 1, overflow: "auto" }}>
      <strong>Terms &amp; Conditions</strong>{" "}
      <p>
        By downloading or using the app, these terms will automatically apply to
        you - you should make sure therefore that you read them carefully before
        using the app. The app itself, and all the trademarks, copyright,
        database rights, and other intellectual property rights related to it,
        belong to hkbus.skpracta.info unless otherwise stated in writing. 
        The app is only for personal, non-commercial, or academic use. 
        For-profit or Commerical use is not allowed and no license will be granted for such use.
      </p>{" "}
      <p>
        hkbus.skpracta.info is committed to ensuring that the app is as useful and
        efficient as possible. For that reason, we reserve the right to make
        changes to the app or to charge for its services, at any time and for
        any reason. We will never charge you for the app or its services without
        making it very clear to you exactly what you’re paying for.
      </p>{" "}
      <p>
        The hkbus.skpracta.info app stores and processes personal data that you have
        provided to us, to provide our Service. It’s your responsibility to keep
        your phone and access to the app secure. We therefore recommend that you
        do not jailbreak or root your phone, which is the process of removing
        software restrictions and limitations imposed by the official operating
        system of your device. It could make your phone vulnerable to
        malware/viruses/malicious programs, compromise your phone’s security
        features and it could mean that the hkbus.skpracta.info app won’t work properly or
        at all.
      </p>{" "}
      <div>
        <p>
          The app does use third-party services that declare their Terms and
          Conditions.
        </p>{" "}
        <p>
          Link to Terms and Conditions of third-party service providers used by
          the app
        </p>
        <ul>
          <li>
            <Link
              href="https://marketingplatform.google.com/about/analytics/terms/us/"
              target="_blank"
              rel="noopener noreferrer"
              color="secondary"
            >
              Google Analytics
            </Link>
          </li>
          <li>
            <Link
              href="https://firebase.google.com/terms/analytics"
              target="_blank"
              rel="noopener noreferrer"
              color="secondary"
            >
              Google Analytics for Firebase
            </Link>
          </li>
          <li>
            <Link
              href="https://www.cloudflare.com/policies/terms/"
              target="_blank"
              rel="noopener noreferrer"
              color="secondary"
            >
              Cloudflare Insights
            </Link>
          </li>
        </ul>
      </div>{" "}
      <p>
        You should be aware that there are certain things that hkbus.skpracta.info will
        not take responsibility for. Certain functions of the app will require
        the app to have an active internet connection. The connection can be
        Wi-Fi or provided by your mobile network provider, but hkbus.skpracta.info cannot
        take responsibility for the app not working at full functionality if you
        don’t have access to Wi-Fi, and you don’t have any of your data
        allowance left.
      </p>{" "}
      <p></p>{" "}
      <p>
        If you’re using the app outside of an area with Wi-Fi, you should
        remember that the terms of the agreement with your mobile network
        provider will still apply. As a result, you may be charged by your
        mobile provider for the cost of data for the duration of the connection
        while accessing the app, or other third-party charges. In using the app,
        you’re accepting responsibility for any such charges, including roaming
        data charges if you use the app outside of your home territory (i.e.
        region or country) without turning off data roaming. If you are not the
        bill payer for the device on which you’re using the app, please be aware
        that we assume that you have received permission from the bill payer for
        using the app.
      </p>{" "}
      <p>
        Along the same lines, hkbus.skpracta.info cannot always take responsibility for
        the way you use the app i.e. You need to make sure that your device
        stays charged - if it runs out of battery and you can’t turn it on to
        avail the Service, hkbus.skpracta.info cannot accept responsibility.
      </p>{" "}
      <p>
        With respect to hkbus.skpracta.info’s responsibility for your use of the app, when
        you’re using the app, it’s important to bear in mind that although we
        endeavor to ensure that it is updated and correct at all times, we do
        rely on third parties to provide information to us so that we can make
        it available to you. hkbus.skpracta.info accepts no liability for any loss, direct
        or indirect, you experience as a result of relying wholly on this
        functionality of the app.
      </p>{" "}
      <p>
        <strong>Changes to This Terms and Conditions</strong>
      </p>{" "}
      <p>
        We may update our Terms and Conditions from time to time. Thus, you are
        advised to review this page periodically for any changes. We will notify
        you of any changes by posting the new Terms and Conditions on this page.
      </p>{" "}
      <p>These terms and conditions are effective as of 2026-10-19</p>{" "}
      <p>
        <strong>Contact Us</strong>
      </p>{" "}
      <p>
        If you have any questions or suggestions about our Terms and Conditions,
        do not hesitate to contact us at hkbus.admin@skpracta.info.
      </p>
    </Paper>
  );
};

export default TermsAndConditions;
