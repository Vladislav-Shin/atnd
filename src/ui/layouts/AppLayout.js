import React from 'react';
import { Helmet } from "react-helmet"

export const AppLayout = (props) => {
  const { tabTitle, metaDescription, children } = props;
  return (
    <>
    <div>
    </div>
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>{tabTitle}</title>
          <meta name="description" content={metaDescription} />
        </Helmet>
        {children}
      </div>
    </>
  );
};
