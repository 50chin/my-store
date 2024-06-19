import React from 'react';
import { Layout } from '../layouts/Layout/Layout';
import { Headphones } from '../layouts/Headphones/Headphones';
import { WirelessHeadphones } from '../layouts/WirelessHeadphones/WirelessHeadphones';

export const HomePage = () => {
  return (
    <>
      <Layout>
        <Headphones />
        <WirelessHeadphones />
      </Layout>
    </>
  );
};
