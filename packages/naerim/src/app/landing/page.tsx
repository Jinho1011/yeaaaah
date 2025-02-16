'use client';

import PrimaryButton from '@/components/PrimaryButton';
import { BottomFixedArea } from '@/components/FixedBottomArea';
import { css } from '../../../styled-system/css';
import { ArrowDown, Logo } from '@/components/Icon';
import Spacing from '@/components/Spacing';

export default function LandingPage() {
  return (
    <>
      <div
        className={css({
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        })}
      >
        <Logo width={146} />
        <Spacing size={16} />
        <div
          className={css({
            color: 'white',
            whiteSpace: 'pre-line',
            textAlign: 'center',
          })}
        >
          {'천천히 내리고, 깊이 있게 즐기세요\n내림이 당신의 첫 드립커피와 함께할게요'}
        </div>
        <Spacing size={39} />
        <ArrowDown />
        <Spacing size={39} />
        <div
          className={css({
            color: 'white',
            whiteSpace: 'pre-line',
            textAlign: 'center',
          })}
        >
          {'복잡할까 걱정할 필요는 없어요\n내림이 이끄는대로 천천히 따라오세요'}
        </div>
        <Spacing size={39} />
        <ArrowDown />
        <Spacing size={39} />
        <div
          className={css({
            color: 'white',
            whiteSpace: 'pre-line',
            textAlign: 'center',
          })}
        >
          {'어느새 당신만의 멋진 커피 한잔이\n완성되어있을거에요'}
        </div>
      </div>

      <BottomFixedArea>
        <div className={css({ padding: '0 20px 40px', backgroundColor: '#000000' })}>
          <PrimaryButton>함께 천천히 커피 내리기</PrimaryButton>
        </div>
      </BottomFixedArea>
    </>
  );
}
