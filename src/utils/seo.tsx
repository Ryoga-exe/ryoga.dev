import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

import { useLocation } from '@reach/router';

const SEO: React.FC<any> = ({ description, image, title }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            siteLanguage
            defaultDescription: description
            siteUrl
            siteDefaultOgpImage
            social {
              twitter
            }
          }
        }
      }
    `
  );

  const { defaultTitle, titleTemplate, siteUrl, defaultDescription, siteLanguage, siteDefaultOgpImage } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || siteDefaultOgpImage}`,
    lang: siteLanguage,
    url: `${siteUrl}${pathname}`,
    twitter: `@${site.siteMetadata.social.twitter}`,
  };

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <html lang={seo.lang} />

      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />

      <meta property='og:type' content='article' />
      <meta property='og:title' content={seo.title} />
      <meta property='og:url' content={seo.url} />
      <meta property='og:description' content={seo.description} />
      <meta property='og:image' content={seo.image} />
      <meta property='og:image:alt' content={seo.description} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content={seo.twitter} />
      <meta name='twitter:title' content={seo.title} />
      <meta name='twitter:description' content={seo.description} />
      <meta name='twitter:image' content={seo.image} />
      <meta name='twitter:image:alt' content={seo.description} />
    </Helmet>
  );
};

SEO.defaultProps = {
  description: ``,
  image: ``,
  title: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default SEO;
