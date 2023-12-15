import React, { useEffect, useState } from "react";
import ReCAPTCHA, { ReCAPTCHAProps } from "react-google-recaptcha";
import { Flex } from "theme-ui";
import _upperFirst from "lodash/upperFirst";
import { P } from "atoms";

export const Recaptcha = ({onChange, asyncScriptOnLoad, error, ...props}: Omit<ReCAPTCHAProps, "sitekey"> & {error?:string}) => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
  },[]);
  return load ? 
  <Flex className="rpt" sx={{
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 'var(--space-3)'
  }}>
    <ReCAPTCHA
    {...props}
    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY || ''}
    onChange={onChange}
    asyncScriptOnLoad={asyncScriptOnLoad}
  />
  {error && <P margin="var(--space-2)" size="var(--text-xs)" danger forceSize>{_upperFirst(error)}</P>}
  </Flex> : null;
};
