// Copyright 2017-2020 @polkadot/app-staking authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RewardPoint } from '@polkadot/types/interfaces';

export interface AddressDetails {
  address: string;
  points?: RewardPoint;
}