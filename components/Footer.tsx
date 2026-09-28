import { Icon } from "./ui/Icon";
import { Stripe } from "./ui/Stripe";

export function Footer() {
  return <footer><Stripe /><div className="footer-pattern"><div className="container footer-grid"><div><a className="wordmark wordmark--light" href="#top"><Icon name="heart" size={27} /><span>HEART</span></a><p>Health education, assessment, referral and tracking — closer to where people live and work.</p></div><div><h3>Explore</h3><a href="#problem">The problem</a><a href="#model">How it works</a><a href="#health-hub">Health Hub</a><a href="#team">Team Heart</a></div><div><h3>Contact</h3><span>Email: Coming soon</span><span>WhatsApp: Coming soon</span><a href="mailto:lydi@nycnlagos.org">lydi@nycnlagos.org</a></div></div><div className="container footer-bottom"><p>A LYDI Transformational Fellowship Cohort 2 Capstone Project</p><p>Lagos Youth Development Institute</p></div></div></footer>;
}
