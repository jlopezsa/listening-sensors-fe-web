import React from 'react';
import { NavLinkStyledDark } from '../atomns/NavLinkStyledDark';
import IconSocialNetworks from '../atomns/IconSocialNetworks';
import iconFacebook from '../../figures/icon_facebook_circle.svg';
import iconInstagram from '../../figures/icon_instagram_circle.svg';
import iconLinkedin from '../../figures/icon_linkedin_circle.svg';
import iconGithub from '../../figures/icon_github_circle.svg';
import iconResearchGate from '../../figures/icon_researchgate_circle.svg';
import iconOrcid from '../../figures/icon_orcid_circle.svg';

function SocialNetworksGroup() {
  return (
    <div>
      <NavLinkStyledDark as="a" href="https://www.facebook.com/julian.j.salamanca.1/" target="_blank">
        <IconSocialNetworks imageSocial={iconFacebook} />
      </NavLinkStyledDark>
      <NavLinkStyledDark as="a" href="https://www.instagram.com/jjlopezsa/" target="_blank">
        <IconSocialNetworks imageSocial={iconInstagram} />
      </NavLinkStyledDark>
      <NavLinkStyledDark as="a" href="https://www.linkedin.com/in/jlopezsa/" target="_blank">
        <IconSocialNetworks imageSocial={iconLinkedin} />
      </NavLinkStyledDark>
      <NavLinkStyledDark as="a" href="https://github.com/jlopezsa/" target="_blank">
        <IconSocialNetworks imageSocial={iconGithub} />
      </NavLinkStyledDark>
      <NavLinkStyledDark as="a" href="https://www.researchgate.net/profile/Julian-Jair-Lopez-Salamanca/" target="_blank">
        <IconSocialNetworks imageSocial={iconResearchGate} />
      </NavLinkStyledDark>
      <NavLinkStyledDark as="a" href="https://orcid.org/0000-0002-2578-1101" target="_blank">
        <IconSocialNetworks imageSocial={iconOrcid} />
      </NavLinkStyledDark>
    </div>
  );
}

// facebook
// instagram
// github
// linkedin
// researchate
// orcid

export default SocialNetworksGroup;
