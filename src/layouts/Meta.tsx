import React, { FC } from 'react';
import { NextSeo } from 'next-seo';
import Head from 'next/head';

import { config } from '@constants';

type IMetaProps = {
  title?: string;
  description?: string;
  canonical?: string;
};

export const Meta: FC<IMetaProps> = ({
  title = config.title,
  description = config.description,
  canonical,
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" key="charset" />
      <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
      <link rel="apple-touch-icon" href={`${config.baseUrl}/apple-touch-icon.png`} key="apple" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${config.baseUrl}/assets/icons/favicons/yellow/favicon-32x32.png`}
        key="icon32"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${config.baseUrl}/assets/icons/favicons/yellow/favicon-16x16.png`}
        key="icon16"
      />
      <link
        rel="icon"
        href={`${config.baseUrl}/assets/icons/favicons/yellow/favicon.ico`}
        key="favicon"
      />
    </Head>
    <NextSeo
      title={title}
      description={description}
      canonical={canonical}
      openGraph={{
        title,
        description,
        url: canonical,
        locale: config.locale,
        site_name: config.siteName,
      }}
    />
  </>
);
