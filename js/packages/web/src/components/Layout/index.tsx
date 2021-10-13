import React from 'react';
import { Layout } from 'antd';

import { LABELS } from '../../constants';
import useWindowDimensions from '../../utils/layout';

const { Content } = Layout;

const paddingForLayout = (width: number) => {
  if (width <= 768) return '0px';
  if (width > 768) return '0px';
};

export const AppLayout = React.memo((props: any) => {
  const { width } = useWindowDimensions();

  return (
    <>
      <Layout
        title={LABELS.APP_TITLE}
        style={{
          padding: paddingForLayout(width),
          maxWidth: 1000,
        }}
      >

        <Content style={{ overflow: 'scroll', paddingBottom: 50 }}>
          {props.children}
        </Content>
      </Layout>
    </>
  );
});
