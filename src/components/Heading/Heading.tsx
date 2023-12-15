import React, { useMemo } from "react";
import { H2, Icon } from "atoms";
import {HeadingContainer, Line, SubTitle} from './Style';

export const Heading = ({
  label,
  labelAction,
  sideLabel,
  sublabel = '',
  icon,
  white = false,
}: {
  label: string;
  labelAction?: () => void;
  sideLabel?: string;
  sublabel?: string;
  icon?: any;
  white?: boolean;
}) => {
  const _sublabel = useMemo(()=> ({__html: sublabel}),[sublabel]);
  const renderLabel = useMemo(() => {
    if (labelAction) {
      return (
        <span
          style={{ textDecoration: 'underline', cursor: 'pointer' }}
          onClick={() => labelAction()}
        >
          {label}
        </span>
      );
    }
    return label;
  }, [label, labelAction]);
  const renderSideLabel = useMemo(() => <span style={{ fontSize: '30px' }}>{sideLabel}</span>, [
    sideLabel,
  ]);
  return (
    <HeadingContainer white={white}>
      <H2 white data-aos="fade-up" weight={600} title={label}>
        {renderLabel} {renderSideLabel}
      </H2>
      <Line data-aos="fade-up" data-aos-delay='100'>
        <Icon icon={icon} />
      </Line>
      <SubTitle data-aos="fade-down" data-aos-delay='200' title={sublabel} dangerouslySetInnerHTML={_sublabel}/>
    </HeadingContainer>
  );
};