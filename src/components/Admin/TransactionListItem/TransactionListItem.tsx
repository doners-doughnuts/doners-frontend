import classNames from 'classnames/bind';
import { useState } from 'react';
import { fFundraiserContractTime } from 'utils/formatTime';
import styles from './TransactionListItem.module.scss';

const cx = classNames.bind(styles);

/**
 * 0: "0xb72207EB8c21c7698d493Da3bB273F6C8a76E367"
1: "0x6342fdd7Bb503FEa582668A61D5737958c33Dc1F"
2: "1649163303"
3: "4"
4: "안녕하세요"
5: "71c7e4d6-926a-474a-bcb6-427871f4d4f9"
date: "1649163303"
donationId: "71c7e4d6-926a-474a-bcb6-427871f4d4f9"
donationTitle: "안녕하세요"
fromAccount: "0xb72207EB8c21c7698d493Da3bB273F6C8a76E367"
toAccount: "0x6342fdd7Bb503FEa582668A61D5737958c33Dc1F"
value: "4"
 * @param item 
 * @returns 
 */

const TransactionListItem = (item: any) => {
  return (
    <div className={cx('item')}>
      <div className={cx('vl')}></div>
      <span className={cx('dot')}></span>
      <div>to: {item.item[0]}</div>
      <div>value: {item.item[3]} SSF</div>
      <div>from: {item.item[1]}</div>
      <div>time: {fFundraiserContractTime(item.item[2])}</div>
    </div>
  );
};

export default TransactionListItem;
