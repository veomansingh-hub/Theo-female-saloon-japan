import cn from 'clsx'
import { withTranslation, WithTranslation } from 'next-i18next'

type OpeningHoursProps = WithTranslation & {
  className?: string
  closedClassName?: string
  showClosed?: boolean
}

const OpeningHours = ({ t, showClosed = false, className = '', closedClassName = '' }: OpeningHoursProps) => (
  <div className={cn('grid grid-cols-2 gap-x-2', className)}>
    <div>{t('monday')}</div>
    <div className='text-right'>09:00 – 19:00</div>
    <div>{t('tuesday')}</div>
    <div className='text-right'>09:00 – 19:00</div>
    <div>{t('wednesday')}</div>
    <div className='text-right'>09:00 – 19:00</div>
    <div>{t('thursday')}</div>
    <div className='text-right'>09:00 – 19:00</div>
    <div>{t('friday')}</div>
    <div className='text-right'>09:00 – 19:00</div>
    <div>{t('saturday')}</div>
    <div className='text-right'>09:00 – 18:00</div>
    {showClosed && (
      <>
        <div className={closedClassName}>{t('sunday')}</div>
        <div className={cn('text-right', closedClassName)}>{t('closed')}</div>
      </>
    )}
  </div>
)

export default withTranslation()(OpeningHours)
