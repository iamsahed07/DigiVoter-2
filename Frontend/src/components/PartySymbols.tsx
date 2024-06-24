// import React from 'react';

// Import party logos
import IncLogo from "../assets/party_logo/inc.png";
import BjpLogo from "../assets/party_logo/bjp.png";
import AitmcLogo from "../assets/party_logo/tmc.png";
import CpimLogo from "../assets/party_logo/cpim.png";
import AapLogo from "../assets/party_logo/aap.png";
import SjpLogo from "../assets/party_logo/sjp.png";
import RjpLogo from "../assets/party_logo/rjd.png";

// Define functional components for each party symbol
const Aitmc = () => <img src={AitmcLogo} alt="AITMC Logo" />;
const Inc = () => <img src={IncLogo} alt="INC Logo" />;
const Bjp = () => <img src={BjpLogo} alt="BJP Logo" />;
const Cpim = () => <img src={CpimLogo} alt="CPIM Logo" />;
const Aap = () => <img src={AapLogo} alt="AAP Logo" />;
const Sjp = () => <img src={SjpLogo} alt="SJP Logo" />;
const Rjp = () => <img src={RjpLogo} alt="RJP Logo" />;

export { Aitmc, Inc, Bjp, Cpim, Aap, Sjp, Rjp };

export const PartyLogo = ({ party }) => {
  if (party === "INC") return <Inc/>;
  else if (party === "BJP") return <Bjp/>;
  else if (party === "TMC") return <Aitmc/>;
  else if (party === "CPIM") return <Cpim/>;
  else if (party === "AAP") return <Aap/>;
  else if (party === "SP") return <Sjp/>;
  else if (party === "RJP") return <Rjp/>;
};
