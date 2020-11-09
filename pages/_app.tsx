import type { AppProps } from 'next/app'
import '../styles/globals.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelopeOpen,
  faPhoneSquare,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faHome,
  faUser,
  faBriefcase,
  faEnvelopeOpenText,
  faComments,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons';

library.add(
  fab,
  faPhoneSquare,
  faEnvelopeOpen,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faHome,
  faUser,
  faBriefcase,
  faEnvelopeOpenText,
  faComments,
  faGraduationCap
);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
