// Copyright 2017-2020 @canvas-ui/react-query authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { DeriveBalancesAll } from '@polkadot/api-derive/types';
import { BareProps } from '@canvas-ui/react-api/types';

import BN from 'bn.js';
import React from 'react';
import { useApi, useCall } from '@canvas-ui/react-hooks';
import { formatNumber } from '@polkadot/util';

interface Props extends BareProps {
  callOnResult?: (accountNonce: BN) => void;
  children?: React.ReactNode;
  label?: React.ReactNode;
  params?: string | null;
}

function Nonce ({ children, className = '', label, params }: Props): React.ReactElement<Props> {
  const { api } = useApi();
  const allBalances = useCall<DeriveBalancesAll>(api.derive.balances.all, [params]);

  return (
    <div className={className}>
      {label || ''}{formatNumber(allBalances?.accountNonce)}{children}
    </div>
  );
}

export default React.memo(Nonce);
