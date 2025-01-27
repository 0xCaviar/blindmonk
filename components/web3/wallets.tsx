import React from 'react';
import { QrcodeIcon } from '@heroicons/react/solid';
import { WalletProps } from '@lib/types';
import useEagerConnect from '@lib/hooks/useEagerConnect';

const Wallets = ({
  className,
  disabled,
  provider,
  loadWeb3Modal,
  logoutOfWeb3Modal
}: WalletProps) => {
  const triedEagerConnect = useEagerConnect();

  if (!triedEagerConnect) {
    return null;
  }
  return (
    <>
      <button
        type="button"
        disabled={disabled}
        className={className}
        onClick={!provider ? () => loadWeb3Modal() : () => logoutOfWeb3Modal()}
      >
        <QrcodeIcon height="20" width="20" className="mr-2" />
        <span>{!provider ? 'Connect Wallet' : 'Disconnect Wallet'}</span>
      </button>
    </>
  );
};

export default Wallets;
